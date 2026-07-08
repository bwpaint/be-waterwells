import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceAreaMap from '../components/ServiceAreaMap';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Service Areas | B-E Waterwell Services — Houston, TX',
  description:
    'B-E Waterwell Services provides waterwell drilling, pump repair, and well rehabilitation across Montgomery, Harris, Waller, Grimes, Washington, Anderson, and surrounding counties in the Houston area — Magnolia, Conroe, Tomball, The Woodlands, Spring, Cypress, Humble, Kingwood, Montgomery, Pinehurst, and Waller.',
  alternates: { canonical: 'https://bewaterwells.com/service-areas' },
};

const cities = [
  { city: 'Magnolia', slug: 'magnolia-tx', county: 'Montgomery County', hq: true, desc: 'Our home base since 1979. Deep local knowledge, fastest response times.' },
  { city: 'Conroe', slug: 'conroe-tx', county: 'Montgomery County', desc: 'County seat and Lake Conroe corridor. 200–400 ft depth range.' },
  { city: 'Tomball', slug: 'tomball-tx', county: 'Harris County', desc: 'NW Houston. Sandy loam soils, reliable Jasper Aquifer access.' },
  { city: 'The Woodlands', slug: 'woodlands-tx', county: 'Montgomery County', desc: 'Estate areas and acreage tracts. Discreet, professional service.' },
  { city: 'Spring', slug: 'spring-tx', county: 'Harris County', desc: 'North Harris County crossroads. New construction and legacy well service.' },
  { city: 'Cypress', slug: 'cypress-tx', county: 'Harris County', desc: 'NW Harris County. Residential and irrigation waterwells.' },
  { city: 'Humble', slug: 'humble-tx', county: 'Harris County', desc: 'East Harris County and Lake Houston corridor. 240–420 ft depth range.' },
  { city: 'Kingwood', slug: 'kingwood-tx', county: 'Harris County', desc: 'The Livable Forest. River corridor expertise, sulfur treatment specialists.' },
  { city: 'Montgomery', slug: 'montgomery-tx', county: 'Montgomery County', desc: 'Rural acreage and agriculture. Farm, ranch, and livestock waterwells.' },
  { city: 'Pinehurst', slug: 'pinehurst-tx', county: 'Montgomery County', desc: 'Central Montgomery County. Mixed-age well inventory, rehab specialists.' },
  { city: 'Waller', slug: 'waller-tx', county: 'Waller County', desc: 'Wide-open Waller County. Agricultural and rural residential wells.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'B-E Waterwell Services',
  url: 'https://bewaterwells.com/service-areas',
  telephone: '+1-281-448-4447',
  areaServed: cities.map((c) => ({ '@type': 'City', name: `${c.city}, TX` })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AnnouncementBar />
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={`container ${styles.heroContent}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Service Areas</span>
          </nav>
          <span className={styles.heroLabel}>Where We Work</span>
          <h1 className={styles.heroH1}>
            Greater Waterwell Services Across<br />
            <span className={styles.heroOrange}>the Greater Houston Service Region</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Serving Montgomery, Harris, Waller, Grimes, Washington, Anderson, and
            surrounding counties. One crew that knows this ground better than anyone.
            B-E Waterwell Services has been drilling and servicing waterwells in
            Houston since 1979.
          </p>
          <div className={styles.heroBtns}>
            <a href="tel:+12814484447" className="btn btn-primary">
              📞 (281) 448-4447
            </a>
            <Link href="/contact" className="btn btn-outline">
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MAP ───────────────────── */}
      <section className={styles.mapSection}>
        <div className="container">
          <span className="section-label">Interactive Map</span>
          <h2 className="section-title">Click Your Area</h2>
          <p className={styles.mapSubtext}>
            Click or tap any region on the map to visit that city&apos;s dedicated waterwell service page.
          </p>
          <ServiceAreaMap />
        </div>
      </section>

      {/* ── CITY CARDS ───────────────────────── */}
      <section className={styles.citiesSection}>
        <div className="container">
          <span className="section-label">All Service Areas</span>
          <h2 className="section-title">11 Cities, One Team</h2>
          <div className={styles.citiesGrid}>
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-area/${c.slug}`}
                className={`${styles.cityCard} ${c.hq ? styles.cityCardHQ : ''}`}
              >
                {c.hq && <span className={styles.hqBadge}>★ Our HQ</span>}
                <h3 className={styles.cityName}>{c.city}, TX</h3>
                <span className={styles.cityCounty}>{c.county}</span>
                <p className={styles.cityDesc}>{c.desc}</p>
                <span className={styles.cityLink}>View Service Page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <span className={styles.statVal}>11</span>
            <span className={styles.statLbl}>Cities Served</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statVal}>6+</span>
            <span className={styles.statLbl}>Counties Covered</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statVal}>45+</span>
            <span className={styles.statLbl}>Years of Experience</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statVal}>Yes</span>
            <span className={styles.statLbl}>Emergency Service</span>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Don&apos;t See Your City?</h2>
            <p>
              We may still be able to serve you. Call us at (281) 448-4447 and tell us
              your location — we&apos;ll let you know if we can make it work.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                📞 (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
