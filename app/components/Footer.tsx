import Link from 'next/link';
import Image from 'next/image';
import { cityAreas } from '../../lib/homeData';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_URL,
} from '../../lib/siteConfig';
import FooterContactForm from './FooterContactForm';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1 — Brand */}
        <div className={styles.footerBrand}>
          <Image
            src="/images/be-logo-white.svg"
            alt="B-E Waterwell Services"
            width={180}
            height={101}
          />
          <p className={styles.tagline}>
            Houston&apos;s trusted water well specialists since 1979, serving the
            Greater Houston area. Family-owned. Licensed. Guaranteed.
          </p>
          <div className={styles.footerAddress}>
            <span>B-E Waterwell Services</span>
            <span>Magnolia, Texas</span>
          </div>
          <div className={styles.socialLinks}>
            <a
              href={FACEBOOK_URL}
              aria-label="B-E Waterwell Services on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              f
            </a>
            {/* Renders only once NEXT_PUBLIC_GOOGLE_BUSINESS_URL is set, so the
                icon never points at a dead-end generic Maps search. */}
            {GOOGLE_BUSINESS_URL && (
              <a
                href={GOOGLE_BUSINESS_URL}
                aria-label="B-E Waterwell Services on Google"
                target="_blank"
                rel="noopener noreferrer"
              >
                G
              </a>
            )}
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h4 className={styles.footerHeading}>Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/services/water-well-drilling">Water Well Drilling &amp; Installation</Link></li>
            <li><Link href="/services/residential">Residential Services</Link></li>
            <li><Link href="/services/commercial">Commercial &amp; Agricultural</Link></li>
            <li><Link href="/services/well-rehabilitation">Well Rehabilitation</Link></li>
            <li><Link href="/services/well-maintenance">Maintenance &amp; Inspection</Link></li>
          </ul>
        </div>

        {/* Columns 3–4 — Request Service: contact details + form */}
        <div className={styles.footerFormCol}>
          <h4 className={styles.footerHeading}>Request Service</h4>
          <ul className={styles.footerContact}>
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
            <li>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </span>
              <span>Emergency Service Available</span>
            </li>
          </ul>
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
