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
            src="https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png"
            alt="B-E Waterwell Services"
            width={180}
            height={71}
          />
          <p className={styles.tagline}>
            Houston&apos;s trusted water well specialists since 1979.
            Family-owned. Licensed. Guaranteed.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://google.com/maps" aria-label="Google Reviews" target="_blank" rel="noopener noreferrer">G</a>
          </div>

          <div className={styles.brandContact}>
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <ul className={styles.footerContact}>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+12814484447">(281) 448-4447</a>
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:info@bewaterwells.com">info@bewaterwells.com</a>
              </li>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span>Magnolia, TX 77354<br />Serving Greater Houston</span>
              </li>
              <li>
                <span className={styles.contactIcon}>🕐</span>
                <span>Emergency Service Available<br />Mon–Fri 7am–7pm</span>
              </li>
            </ul>
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
