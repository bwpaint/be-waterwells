'use client';

import { useState } from 'react';
import styles from './CityHeroForm.module.css';

interface Props {
  city: string;
}

export default function CityHeroForm({ city }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className={styles.form}>
        <div className={styles.successMsg}>
          <span className={styles.successIcon}>✓</span>
          <strong>Request received!</strong>
          <p>We&apos;ll be in touch within 2 hours. For emergencies call (281) 448-4447.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.formTitle}>Service Request — {city}, TX</p>
      <p className={styles.formSub}>Free estimate · No obligation</p>
      <div className={styles.fieldRow}>
        <input type="text" placeholder="Your Name" required className={styles.input} />
        <input type="tel" placeholder="Phone Number" required className={styles.input} />
      </div>
      <select className={styles.input} required>
        <option value="">Service Needed…</option>
        <option>Waterwell Drilling — New</option>
        <option>Pump Repair / Replacement</option>
        <option>Well Rehabilitation</option>
        <option>Irrigation Waterwell</option>
        <option>Well Inspection</option>
        <option>Generator Prep Kit</option>
        <option>Emergency — No Water</option>
        <option>Other / Not Sure</option>
      </select>
      <textarea
        placeholder="Any additional details (property address, existing well age, symptoms…)"
        className={`${styles.input} ${styles.textarea}`}
        rows={3}
      />
      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? 'Sending…' : `Request Estimate in ${city} →`}
      </button>
      <p className={styles.disclaimer}>
        🔒 Your info is private. TDLR Licensed · Insured · 45+ Years
      </p>
    </form>
  );
}
