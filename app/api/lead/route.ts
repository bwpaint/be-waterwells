import { NextResponse } from 'next/server';

/**
 * Lead intake — proxies the hero forms to WebWize Connect Forms, which routes
 * the submission on to WPForms inside WordPress.
 *
 * Server-side so the browser never talks to WordPress directly: the API key
 * stays out of client bundles and no CORS config is needed on the WP side.
 *
 * Required env vars (set in Vercel):
 *   WEBWIZE_FORMS_ENDPOINT  https://bewaterwellscms.wp1.sh/wp-json/webwize-forms/v1/submit
 *   WEBWIZE_FORMS_API_KEY   from WP admin → WebWize Connect → Forms: Settings
 *   WEBWIZE_FORM_SLUG       defaults to 'lead'
 *
 * The route slug `lead` is mapped to WPForms form 2401 ("BE Waterwell Lead
 * Form") under Forms: Routes, using pass-through field mapping — so the field
 * keys below must keep matching the WPForms field labels.
 */

const FIELD_KEYS = [
  'name',
  'phone',
  'email',
  'address',
  'city',
  'zip',
  'service',
  'comments',
] as const;

export async function POST(request: Request) {
  const endpoint = process.env.WEBWIZE_FORMS_ENDPOINT;
  const apiKey = process.env.WEBWIZE_FORMS_API_KEY;
  const formSlug = process.env.WEBWIZE_FORM_SLUG || 'lead';

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Minimum viable lead — a name and some way to reach them.
  if (!body.name?.trim() || (!body.phone?.trim() && !body.email?.trim())) {
    return NextResponse.json(
      { ok: false, error: 'Please include your name and a phone number or email.' },
      { status: 400 },
    );
  }

  // Honeypot: real people leave this empty. Return success so bots do not retry.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!endpoint || !apiKey) {
    // Not configured yet. Log so the lead is not silently lost, and tell the
    // visitor to call rather than showing a false success.
    console.error('[lead] WEBWIZE_FORMS_ENDPOINT or WEBWIZE_FORMS_API_KEY not set. Lead:', body);
    return NextResponse.json(
      { ok: false, error: 'Form is not connected yet. Please call 281-448-4447.' },
      { status: 503 },
    );
  }

  const fields: Record<string, string> = {};
  for (const key of FIELD_KEYS) {
    fields[key] = body[key] ?? '';
  }
  if (body.source) {
    fields.source = body.source;
  }

  const forwarded = request.headers.get('x-forwarded-for') ?? '';
  const senderIp = forwarded.split(',')[0].trim();

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({
        form_slug: formSlug,
        fields,
        sender_ip: senderIp,
      }),
      cache: 'no-store',
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[lead] WebWize Forms responded', res.status, detail.slice(0, 500));
      return NextResponse.json(
        { ok: false, error: 'Could not submit right now. Please call 281-448-4447.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead] submit failed', err);
    return NextResponse.json(
      { ok: false, error: 'Could not submit right now. Please call 281-448-4447.' },
      { status: 502 },
    );
  }
}
