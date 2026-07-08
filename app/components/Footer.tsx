import Link from 'next/link';
import Image from 'next/image';
import { cityAreas } from '../../lib/homeData';
import FooterContactForm from './FooterContactForm';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1 — Brand + Contact */}
        <div className={styles.footerBrand}>
          <Image
            src="/images/be-logo-white.svg"
            alt="B-E Waterwell Services"
            width={180}
            height={101}
          />
          <p className={styles.tagline}>
            Houston&apos;s trusted water well specialists since 1979.
            Family-owned. Licensed. Guaranteed.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://google.com/maps" aria-label="Google Reviews" target="_blank" rel="noopener noreferrer">G</a>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h4 className={styles.footerHeading}>Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/services/water-well-drilling">Water Well Drilling & Installation</Link></li>
            <li><Link href="/services/residential">Residential Services</Link></li>
            <li><Link href="/services/commercial">Commercial & Agricultural</Link></li>
            <li><Link href="/services/well-rehabilitation">Well Rehabilitation</Link></li>
            <li><Link href="/services/well-maintenance">Maintenance & Inspection</Link></li>
          </ul>
        </div>

        {/* Columns 3–4 — Contact form */}
        <div className={styles.footerFormCol}>
          <h4 className={styles.footerHeading}>Request Service</h4>
          <FooterContactForm />
        </div>

        {/* Contact bar — spans columns 1–2, bordered */}
        <div className={styles.footerContactBar}>
          <ul className={styles.footerContact}>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <a href="tel:+17134167111">713-416-7111</a>
            </li>
            <li>
              <span className={styles.contactIcon}>✉️</span>
              <a href="mailto:info@bewaterwells.com">info@bewaterwells.com</a>
            </li>
            <li>
              <span className={styles.contactIcon}>🕐</span>
              <span>Emergency Service Available</span>
            </li>
          </ul>
          <div className={styles.footerAddress}>
            <span>B-E Waterwell Services</span>
            <span>Serving the Greater Houston Area</span>
            <span>Magnolia, Texas</span>
          </div>
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
