import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from '../components/AnnouncementBar';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceLayout from '../components/ServiceLayout';
import CityFaqAccordion from '../components/CityFaqAccordion';
import { buildFaqSchema } from '../../lib/seoData';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Services — Houston, TX | B-E Waterwell Services',
  description:
    'Complete water well services in the Houston area since 1979. Drilling, pump replacement, constant pressure, well maintenance & more. TDLR licensed. Call (281) 448-4447.',
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
    'Complete waterwell services in the Houston area since 1979. Drilling, pump replacement, constant pressure systems, well maintenance, and emergencies handled. TDLR Licensed.',
  foundingDate: '1979',
  areaServed: 'Houston, TX',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Waterwell Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Well Drilling & Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Water Well Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial & Agricultural Water Well Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Well Rehabilitation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Well Maintenance & Inspection' } },
    ],
  },
};

const categories = [
  {
    icon: '🔩',
    title: 'Water Well Drilling & Installation',
    slug: 'water-well-drilling',
    desc: 'New residential, irrigation, and commercial well drilling and complete installation using truck-mounted rotary rigs. We drill to the Jasper, Chicot, and Evangeline Aquifers across the Houston area.',
    services: ['New Wells', 'Irrigation Wells', 'Full Installation', 'Permit Handling'],
  },
  {
    icon: '🏡',
    title: 'Residential Water Well Services',
    slug: 'residential',
    desc: 'Everything homeowners need: well pump replacement and new installation, pressure tanks, constant pressure systems, generator prep, and emergency service when you need it.',
    services: ['Pump Replacement', 'Pressure Tanks', 'Constant Pressure', 'Emergency Service'],
  },
  {
    icon: '🏗️',
    title: 'Commercial & Agricultural',
    slug: 'commercial',
    desc: 'High-capacity wells for ranches, farms, equestrian properties, nurseries, and commercial sites — larger casing, higher-horsepower pumps, high-capacity permits handled.',
    services: ['Ranch & Livestock', 'Equestrian', 'Farms & Nurseries', 'Commercial Sites'],
  },
  {
    icon: '💧',
    title: 'Water Well Rehabilitation',
    slug: 'well-rehabilitation',
    desc: 'Restore yield and water quality in declining wells through mechanical jetting, shock chlorination, and acid treatment — at a fraction of new well drilling cost.',
    services: ['Restore Flow', 'Iron Bacteria', 'Well Screen Repair', 'Avoid Replacement'],
  },
  {
    icon: '🔍',
    title: 'Water Well Maintenance & Inspection',
    slug: 'well-maintenance',
    desc: 'Annual inspection, real-estate and FHA/VA well inspections, and ongoing maintenance programs to extend the life of your well and protect water quality.',
    services: ['Annual Service', 'Home-Buyer Inspections', 'FHA / VA', 'Water Quality'],
  },
];

const trustedReasons = [
  { stat: '45+', label: 'Years in Business', desc: 'Serving Houston since 1979' },
  { stat: 'TDLR', label: 'Licensed & Bonded', desc: 'Texas Dept. of Licensing & Regulation' },
  { stat: '5,000+', label: 'Wells Serviced', desc: 'Across Montgomery, Harris, Waller, Grimes, Washington, Anderson, and surrounding counties' },
  { stat: '2-Year', label: 'Workmanship Warranty', desc: 'On all drilling and installation work' },
  { stat: 'FE Auth.', label: 'Franklin Electric', desc: 'Authorized dealer for pumps & motors' },
  { stat: 'Emergency', label: 'Emergency Service Available', desc: 'We help when problems come up' },
];

const faqs = [
  {
    question: 'How long has B-E Waterwell been in business?',
    answer:
      'B-E Waterwell Services has been drilling and servicing waterwells in the Houston area since 1979 — over 45 years. We are a family-owned company based in Magnolia, TX, and we have serviced more than 5,000 wells across Montgomery, Harris, Waller, Grimes, Washington, Anderson, and surrounding counties.',
  },
  {
    question: 'Is B-E Waterwell licensed in Texas?',
    answer:
      'Yes. B-E Waterwell Services is licensed by the Texas Department of Licensing and Regulation (TDLR) as a Water Well Driller and Water Well Pump Installer. All work is performed by licensed technicians.',
  },
  {
    question: 'What areas does B-E Waterwell serve?',
    answer:
      'We serve the entire Houston region including Magnolia (our headquarters), Conroe, Tomball, The Woodlands, Spring, Cypress, Humble, Kingwood, Montgomery, Pinehurst, and Waller. Call us if your city is not listed — we may still be able to help.',
  },
  {
    question: 'Do you offer estimates?',
    answer:
      'Yes. We provide written estimates for all drilling, pump, and installation work. Call us at (281) 448-4447 or use the contact form and we will get back to you promptly.',
  },
];

const faqSchema = buildFaqSchema(faqs);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />

      <AnnouncementBar />
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroInner}>
            <div>
            <span className={styles.heroEyebrow}>Since 1979 · TDLR Licensed · Houston, TX</span>
            <h1 className={styles.heroH1}>
              Houston&apos;s Complete<br />
              <span className={styles.heroAccent}>Waterwell Services</span>
            </h1>
            <p className={styles.heroSubtitle}>
              45+ years of drilling, pump service, and waterwell maintenance across
              Montgomery, Harris, Waller, Grimes, Washington, Anderson, and surrounding
              counties. All five service categories — one trusted company.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Get Consultation
              </Link>
            </div>
            </div>
            <div className={styles.heroPhoto}>
              <Image src="/images/hero-service-truck.webp" alt="B-E Waterwell service truck on a residential job in the Houston area" width={700} height={525} priority />
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
            From drilling a brand-new well to repairing a pump,
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
              Call us to discuss your project or use our contact form. We quote every job
              in writing — no hidden charges, no pressure.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
