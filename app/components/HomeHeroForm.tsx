'use client';

import { useState } from 'react';
import Icon from './Icon';
import styles from './HomeHeroForm.module.css';

export default function HomeHeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to WPGraphQL mutation or email endpoint
    await new Promise((r) => setTimeout(r, 800)); // simulated delay
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className={styles.form}>
        <div className={styles.successMsg}>
          <span className={styles.successIcon}>✓</span>
          <strong>Request received!</strong>
          <p>We&apos;ll be in touch within 2 hours. For emergencies, call (281) 448-4447.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.formTitle}>Get Consultation</p>
      <p className={styles.formSub}>Same-day response · No obligation</p>
      <div className={styles.fieldGrid}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className={styles.input}
          autoComplete="name"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className={styles.input}
          autoComplete="tel"
        />
      </div>
      <input
        type="text"
        placeholder="City / Address"
        required
        className={styles.input}
      />
      <select className={styles.input} required>
        <option value="">Service Needed…</option>
        <option>Waterwell Drilling — New</option>
        <option>Pump Replacement / Installation</option>
        <option>Well Rehabilitation</option>
        <option>Irrigation Waterwell</option>
        <option>Well Inspection</option>
        <option>Generator Prep Kit</option>
        <option>Emergency — No Water</option>
        <option>Other / Not Sure</option>
      </select>
      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Sending…' : 'Request Service'}
      </button>
      <p className={styles.formDisclaimer}>
        <Icon name="lock" size={14} /> Your info stays private. TDLR Licensed · Insured · Since 1979
      </p>
    </form>
  );
}
