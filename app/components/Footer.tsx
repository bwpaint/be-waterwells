import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1 — Brand */}
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

        {/* Column 3 — Service Areas */}
        <div>
          <h4 className={styles.footerHeading}>Service Areas</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/service-area/houston-tx">Houston, TX</Link></li>
            <li><Link href="/service-area/magnolia-tx">Magnolia, TX</Link></li>
            <li><Link href="/service-area/conroe-tx">Conroe, TX</Link></li>
            <li><Link href="/service-area/tomball-tx">Tomball, TX</Link></li>
            <li><Link href="/service-area/woodlands-tx">The Woodlands, TX</Link></li>
            <li><Link href="/service-area/spring-tx">Spring, TX</Link></li>
            <li><Link href="/service-area/cypress-tx">Cypress, TX</Link></li>
            <li><Link href="/service-area/humble-tx">Humble, TX</Link></li>
            <li><Link href="/service-area/kingwood-tx">Kingwood, TX</Link></li>
            <li><Link href="/service-area/montgomery-tx">Montgomery, TX</Link></li>
            <li><Link href="/service-area/pinehurst-tx">Pinehurst, TX</Link></li>
            <li><Link href="/service-area/waller-tx">Waller, TX</Link></li>
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
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
          <Link href="/contact" className={`btn btn-primary ${styles.footerCta}`}>
            Get Consultation
          </Link>
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
