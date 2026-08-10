'use client';

import { useState } from 'react';
import Icon from './Icon';
import { SERVICE_OPTIONS } from '../../lib/leadForm';
import styles from './CityHeroForm.module.css';

export default function CityHeroForm({ city }: { city: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const SOURCE = `City hero — ${city}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: SOURCE }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Something went wrong. Please call 281-448-4447.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Could not reach the server. Please call 281-448-4447.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.form}>
        <div className={styles.successMsg}>
          <span className={styles.successIcon}>✓</span>
          <strong>Request received!</strong>
          <p>
            We&apos;ll be in touch within 2 hours. For emergencies, call{' '}
            <a href="tel:+12814484447">(281) 448-4447</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.formTitle}>Service Request — {city}, TX</p>
      <p className={styles.formSub}>Free estimate · No obligation</p>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className={styles.input}
        autoComplete="name"
      />
      <div className={styles.fieldRow}>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className={styles.input}
          autoComplete="tel"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className={styles.input}
          autoComplete="email"
        />
      </div>
      <input
        type="text"
        name="address"
        placeholder="Street Address"
        className={styles.input}
        autoComplete="street-address"
      />
      <div className={styles.fieldRow}>
        <input
          type="text"
          name="city"
          placeholder="City"
          required
          className={styles.input}
          autoComplete="address-level2"
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP"
          className={styles.input}
          autoComplete="postal-code"
          inputMode="numeric"
        />
      </div>
      <select name="service" className={styles.input} required defaultValue="">
        <option value="" disabled>
          Service Needed…
        </option>
        {SERVICE_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <textarea
        name="comments"
        placeholder="Briefly, what do you need?"
        className={`${styles.input} ${styles.textarea}`}
        rows={2}
        maxLength={400}
      />
      {/* Honeypot — hidden from people, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className={styles.honeypot}
        aria-hidden="true"
      />
      {error && (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      )}
      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Sending…' : `Request Estimate in ${city} →`}
      </button>
      <p className={styles.disclaimer}>
        <Icon name="lock" size={14} /> Your info is private. TDLR Licensed · Insured · 45+ Years
      </p>
    </form>
  );
}
