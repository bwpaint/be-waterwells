import { NextResponse } from 'next/server';

/**
 * Lead intake — proxies the hero forms to WPForms on the WordPress install.
 *
 * Server-side so the browser never talks to WordPress directly: no CORS
 * configuration needed on the WP side, and the endpoint is not exposed.
 *
 * Required env vars (set in Vercel):
 *   WPFORMS_ENDPOINT  https://bewaterwellscms.wp1.sh/wp-admin/admin-ajax.php
 *   WPFORMS_FORM_ID   2401
 *
 * Field IDs are mapped in FIELD_MAP below. WPForms names its inputs
 * wpforms[fields][N] where N is the field ID shown in the form builder.
 */

// Field IDs as created in WPForms form 2401 on bewaterwellscms.wp1.sh.
// Verified against the builder — do not renumber without checking the form.
const FIELD_MAP: Record<string, string> = {
  name: '1',
  phone: '2',
  email: '3',
  address: '4',
  city: '5',
  zip: '6',
  service: '7',
  comments: '8',
};

export async function POST(request: Request) {
  const endpoint = process.env.WPFORMS_ENDPOINT;
  const formId = process.env.WPFORMS_FORM_ID;

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

  // Honeypot: real people leave this empty.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!endpoint || !formId) {
    // Not yet configured. Log so the lead is not silently lost, and tell the
    // visitor to call rather than showing a false success.
    console.error('[lead] WPFORMS_ENDPOINT or WPFORMS_FORM_ID not set. Lead:', body);
    return NextResponse.json(
      { ok: false, error: 'Form is not connected yet. Please call 281-448-4447.' },
      { status: 503 },
    );
  }

  const params = new URLSearchParams();
  params.set('action', 'wpforms_submit');
  params.set('wpforms[id]', formId);
  for (const [key, fieldId] of Object.entries(FIELD_MAP)) {
    params.set(`wpforms[fields][${fieldId}]`, body[key] ?? '');
  }
  params.set('wpforms[fields][page_source]', body.source ?? '');

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('[lead] WPForms responded', res.status);
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
