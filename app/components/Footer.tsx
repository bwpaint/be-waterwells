import Link from 'next/link';
import Image from 'next/image';
import { cityAreas } from '../../lib/homeData';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_URL,
  WARRANTY_PDF,
  TCEQ_STANDARDS_URL,
} from '../../lib/siteConfig';
import FooterContactForm from './FooterContactForm';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1 — Contact + brand. Centred. */}
        <div className={styles.footerBrand}>
          <h4 className={styles.footerHeading}>Contact</h4>
          <Image
            src="/images/be-logo-white.svg"
            alt="B-E Waterwell Services"
            width={180}
            height={101}
          />
          <p className={styles.tagline}>
            Houston&apos;s trusted water well specialists since 1979. We drill new
            water wells, replace pumps and pressure tanks, and rehabilitate wells
            that have lost yield — across Montgomery, Harris, Waller, and the
            surrounding counties.
          </p>
          <ul className={styles.brandContactList}>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,7 12,14 2,7" /></svg>
              </span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <a
              href={FACEBOOK_URL}
              aria-label="B-E Waterwell Services on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              f
            </a>
            {/* Points at the Google Business Profile once
                NEXT_PUBLIC_GOOGLE_BUSINESS_URL is set in Vercel. Until then it
                falls back to the Facebook-only row rather than linking nowhere. */}
            {GOOGLE_BUSINESS_URL && (
              <a
                href={GOOGLE_BUSINESS_URL}
                aria-label="B-E Waterwell Services on Google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.24 10.4v3.42h4.84a4.15 4.15 0 0 1-1.8 2.72v2.26h2.9c1.7-1.56 2.68-3.87 2.68-6.6 0-.64-.06-1.25-.17-1.84h-8.45z"/><path d="M12.24 21c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.58-5.05-3.71H4.2v2.33A9 9 0 0 0 12.24 21z"/><path d="M7.19 13.71a5.4 5.4 0 0 1 0-3.42V7.96H4.2a9 9 0 0 0 0 8.08l2.99-2.33z"/><path d="M12.24 6.58c1.32 0 2.51.46 3.45 1.35l2.58-2.58C16.7 3.9 14.66 3 12.24 3A9 9 0 0 0 4.2 7.96l2.99 2.33c.71-2.13 2.7-3.71 5.05-3.71z"/></svg>
              </a>
            )}
          </div>
        </div>

        {/* Column 2 — Services, then site links */}
        <div>
          <h4 className={styles.footerHeading}>Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/services/water-well-drilling">Water Well Drilling &amp; Installation</Link></li>
            <li><Link href="/services/residential">Residential Services</Link></li>
            <li><Link href="/services/commercial">Commercial &amp; Agricultural</Link></li>
            <li><Link href="/services/well-rehabilitation">Well Rehabilitation</Link></li>
            <li><Link href="/services/well-maintenance">Maintenance &amp; Inspection</Link></li>
            <li><Link href="/services/emergency-well-services">Emergency Services</Link></li>
          </ul>
          <ul className={`${styles.footerLinks} ${styles.footerLinksSpaced}`}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li>
              <a href={TCEQ_STANDARDS_URL} target="_blank" rel="noopener noreferrer">
                TCEQ Standards
              </a>
            </li>
            <li>
              <a href={WARRANTY_PDF} target="_blank" rel="noopener noreferrer">
                Warranty
              </a>
            </li>
          </ul>
        </div>

        {/* Columns 3–4 — Request Service: contact details + form */}
        <div className={styles.footerFormCol}>
          <h4 className={styles.footerHeading}>Request Service</h4>
          <FooterContactForm />
        </div>
      </div>

      {/* Service Areas — full-width row above copyright */}
      <div className="container">
        <div className={styles.areasRowWrap}>
          <h4 className={styles.footerHeading}>Service Areas</h4>
          <div className={styles.areasRow}>
            {cityAreas.map((a) => (
              <Link key={a.slug} href={`/service-area/${a.slug}`}>
                {a.city}, TX
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomInner}>
            <p>© {new Date().getFullYear()} B-E Waterwell Services. All rights reserved. | TDLR Licensed</p>
            <div className={styles.footerLegal}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
