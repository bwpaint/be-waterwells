'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

const SOURCE = 'Footer';

export default function FooterContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const name = `${data.firstName ?? ''} ${data.lastName ?? ''}`.trim();

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: data.phone ?? '',
          email: data.email ?? '',
          comments: data.comments ?? '',
          source: SOURCE,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Something went wrong. Please call 281-448-4447.');
      } else {
        setSent(true);
      }
    } catch {
      setError('Could not reach the server. Please call 281-448-4447.');
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className={styles.formSent}>
        <p>Thanks — we&apos;ll be in touch shortly. For anything urgent, call{' '}
          <a href="tel:+12814484447">(281) 448-4447</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.footerForm} onSubmit={handleSubmit} noValidate>
      <input className={styles.footerInput} type="text" name="firstName" placeholder="First Name *" required autoComplete="given-name" />
      <input className={styles.footerInput} type="text" name="lastName" placeholder="Last Name *" required autoComplete="family-name" />
      <input className={styles.footerInput} type="email" name="email" placeholder="Email *" required autoComplete="email" />
      <input className={styles.footerInput} type="tel" name="phone" placeholder="Phone Number *" required autoComplete="tel" />
      <textarea
        className={`${styles.footerInput} ${styles.footerTextarea}`}
        name="comments"
        placeholder="Comments / what you're interested in"
        rows={4}
      />
      {error && (
        <p style={{ color: '#ffb4a8', fontSize: '0.82rem', margin: '-4px 0 0' }} role="alert">
          {error}
        </p>
      )}
      <button type="submit" className={`btn btn-primary ${styles.footerFormBtn}`} disabled={loading}>
        {loading ? 'Sending…' : 'Send Request'}
      </button>
    </form>
  );
}
