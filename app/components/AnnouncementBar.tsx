'use client';

import { useState, useEffect } from 'react';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.bar} ${hidden ? styles.hidden : ''}`}>
      Houston area&apos;s trusted experts in water well services since 1979
      <a href="tel:+12814484447"> &nbsp;—&nbsp; Call (281) 448-4447</a>
    </div>
  );
}
