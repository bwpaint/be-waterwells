import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceLayout from '../components/ServiceLayout';
import CityFaqAccordion from '../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Services — North Houston TX | B-E Waterwell Services',
  description:
    'Complete water well services in North Houston since 1979. Drilling, pump repair, constant pressure, well maintenance & more. TDLR licensed. Call (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'B-E Waterwell Services',
  url: 'https://bewaterwells.com',
  telephone: '+1-281-448-4447',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Magnolia, TX',
    addressLocality: 'Magnolia',
    addressRegion: 'TX',
    postalCode: '77354',
    addressCountry: 'US',
  },
  description:
    'Complete waterwell services in North Houston since 1979. Drilling, pump repair, constant pressure systems, well maintenance, and emergency service. TDLR Licensed.',
  foundingDate: '1979',
  areaServed: 'North Houston, TX',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Waterwell Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Well Drilling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Well Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Well Pump Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Well Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Well Maintenance' } },
    ],
  },
};

const categories = [
  {
    icon: '🔩',
    title: 'Water Well Drilling',
    slug: 'water-well-drilling',
    desc: 'New residential, irrigation, and commercial well drilling using truck-mounted rotary rigs. We drill to the Jasper, Chicot, and Evangeline Aquifers across North Houston.',
    services: ['New Residential Wells', 'Irrigation Wells', 'Commercial & Agricultural', 'Permit Handling'],
  },
  {
    icon: '🚨',
    title: 'Emergency Well Services',
    slug: 'emergency-well-services',
    desc: '24/7 emergency dispatch for loss-of-water situations. If your pump quits or your well stops producing, we respond fast — day, night, or weekend.',
    services: ['24/7 Emergency Response', 'Pump Failure Diagnosis', 'Same-Day Repair', 'Temporary Water Solutions'],
  },
  {
    icon: '⚙️',
    title: 'Well Pump Services',
    slug: 'well-pump-services',
    desc: 'Pump installation, repair, and replacement for submersible and jet pumps. Franklin Electric authorized dealer for constant pressure variable-speed systems.',
    services: ['Pump Installation', 'Pump Repair & Replacement', 'Constant Pressure Systems', 'Motor Service'],
  },
  {
    icon: '🔧',
    title: 'Water Well Systems',
    slug: 'water-well-systems',
    desc: 'Pressure tanks, generator prep kits, storage tanks, and complete system upgrades to keep your water supply reliable and code-compliant.',
    services: ['Pressure Tank Replacement', 'Generator Prep Kits', 'Storage Tank Systems', 'System Upgrades'],
  },
  {
    icon: '🔍',
    title: 'Well Maintenance',
    slug: 'well-maintenance',
    desc: 'Scheduled inspection, well shocking, rehabilitation, and ongoing maintenance to extend the life of your waterwell and protect water quality.',
    services: ['Annual Inspections', 'Well Shocking & Disinfection', 'Well Rehabilitation', 'Pre-Purchase Inspections'],
  },
];

const trustedReasons = [
  { stat: '45+', label: 'Years in Business', desc: 'Serving North Houston since 1979' },
  { stat: 'TDLR', label: 'Licensed & Bonded', desc: 'Texas Dept. of Licensing & Regulation' },
  { stat: '5,000+', label: 'Wells Drilled', desc: 'Across Montgomery, Harris & Waller counties' },
  { stat: '2-Year', label: 'Workmanship Warranty', desc: 'On all drilling and installation work' },
  { stat: 'FE Auth.', label: 'Franklin Electric', desc: 'Authorized dealer for pumps & motors' },
  { stat: '24/7', label: 'Emergency Service', desc: 'We answer after hours — always' },
];

const faqs = [
  {
    question: 'How long has B-E Waterwell been in business?',
    answer:
      'B-E Waterwell Services has been drilling and servicing waterwells in North Houston since 1979 — over 45 years. We are a family-owned company based in Magnolia, TX, and we have drilled more than 5,000 wells across Montgomery, Harris, and Waller counties.',
  },
  {
    question: 'Is B-E Waterwell licensed in Texas?',
    answer:
      'Yes. B-E Waterwell Services is licensed by the Texas Department of Licensing and Regulation (TDLR) as a Water Well Driller and Water Well Pump Installer. All work is performed by licensed technicians.',
  },
  {
    question: 'What areas does B-E Waterwell serve?',
    answer:
      'We serve the entire North Houston region including Magnolia (our headquarters), Conroe, Tomball, The Woodlands, Spring, Cypress, Humble, Kingwood, Montgomery, Pinehurst, and Waller. Call us if your city is not listed — we may still be able to help.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. We provide free, written estimates for all drilling, pump, and installation work. Call us at (281) 448-4447 or use the contact form and we will get back to you promptly.',
  },
];

const serviceAreas = [
  { city: 'Magnolia', slug: 'magnolia-tx', hq: true },
  { city: 'Conroe', slug: 'conroe-tx' },
  { city: 'Tomball', slug: 'tomball-tx' },
  { city: 'The Woodlands', slug: 'woodlands-tx' },
  { city: 'Spring', slug: 'spring-tx' },
  { city: 'Cypress', slug: 'cypress-tx' },
  { city: 'Humble', slug: 'humble-tx' },
  { city: 'Kingwood', slug: 'kingwood-tx' },
  { city: 'Montgomery', slug: 'montgomery-tx' },
  { city: 'Pinehurst', slug: 'pinehurst-tx' },
  { city: 'Waller', slug: 'waller-tx' },
];

export default function ServicesHubPage() {
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
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroEyebrow}>Since 1979 · TDLR Licensed · North Houston, TX</span>
            <h1 className={styles.heroH1}>
              North Houston&apos;s Complete<br />
              <span className={styles.heroAccent}>Waterwell Services</span>
            </h1>
            <p className={styles.heroSubtitle}>
              45+ years of drilling, pump service, and waterwell maintenance across
              Montgomery, Harris, and Waller counties. All five service categories
              — one trusted company.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                📞 (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICELAYOUT WRAPS EVERYTHING BELOW HERO ── */}
      <ServiceLayout categoryLabel="All Services">

        {/* ── CATEGORY CARDS ──────────────────── */}
        <section className={styles.categoriesSection}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Service Categories</h2>
          <p className={styles.categoriesIntro}>
            From drilling a brand-new well to repairing a pump at midnight,
            B-E Waterwell Services handles every part of your waterwell system.
          </p>
          <div className={styles.categoriesGrid}>
            {categories.map((cat) => (
              <div key={cat.slug} className={styles.catCard}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3 className={styles.catTitle}>{cat.title}</h3>
                <p className={styles.catDesc}>{cat.desc}</p>
                <ul className={styles.catServices}>
                  {cat.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <Link href={`/services/${cat.slug}`} className={styles.catLink}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY CHOOSE US ───────────────────── */}
        <section className={styles.trustSection}>
          <span className="section-label">Why B-E Waterwell</span>
          <h2 className="section-title">45 Years. 5,000+ Wells. One Company.</h2>
          <div className={styles.trustGrid}>
            {trustedReasons.map((r) => (
              <div key={r.label} className={styles.trustCard}>
                <div className={styles.trustStat}>{r.stat}</div>
                <div className={styles.trustLabel}>{r.label}</div>
                <p className={styles.trustDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Work</span>
          <h2 className="section-title">Waterwell Service Areas</h2>
          <div className={styles.areasGrid}>
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}`}
                className={`${styles.areaChip} ${a.hq ? styles.areaChipHQ : ''}`}
              >
                {a.city}, TX {a.hq && '★'}
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">About B-E Waterwell Services</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

      </ServiceLayout>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Ready to Get Started?</h2>
            <p>
              Call us for a free estimate or use our contact form. We quote every job
              in writing — no hidden charges, no pressure.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                📞 (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
