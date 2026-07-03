'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

export default function FooterContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
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
      <input className={styles.footerInput} type="text" placeholder="First Name *" required autoComplete="given-name" />
      <input className={styles.footerInput} type="text" placeholder="Last Name *" required autoComplete="family-name" />
      <input className={styles.footerInput} type="email" placeholder="Email *" required autoComplete="email" />
      <input className={styles.footerInput} type="tel" placeholder="Phone Number *" required autoComplete="tel" />
      <textarea
        className={`${styles.footerInput} ${styles.footerTextarea}`}
        placeholder="Comments / what you're interested in"
        rows={4}
      />
      <button type="submit" className={`btn btn-primary ${styles.footerFormBtn}`}>
        Request Service
      </button>
    </form>
  );
}
