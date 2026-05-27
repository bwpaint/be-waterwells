import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Drilling Services — Houston, TX | B-E Waterwell',
  description:
    'Professional water well drilling in Houston, TX since 1979. New residential wells, irrigation wells, commercial & agricultural drilling. TDLR Licensed. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-drilling' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Water Well Drilling — Houston, TX',
      provider: {
        '@type': 'LocalBusiness',
        name: 'B-E Waterwell Services',
        telephone: '+1-281-448-4447',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Magnolia',
          addressRegion: 'TX',
          postalCode: '77354',
        },
      },
      areaServed: 'Houston, TX',
      description:
        'Rotary rig waterwell drilling for residential, irrigation, commercial, and agricultural properties across the Houston area. TDLR licensed, 45+ years experience.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How deep are water wells drilled in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depth depends on your county and target aquifer. Montgomery County wells typically reach the Jasper Aquifer at 180–320 ft. Harris County NW wells access the Chicot/Jasper at 180–360 ft. Harris County East wells reach the Evangeline at 240–440 ft. Waller County wells are typically 160–300 ft.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does well drilling take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most residential waterwells are drilled and completed — casing, pump, pressure tank, and initial water test — in 1–2 days after permit approval. Commercial or agricultural wells may require 2–3 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a permit to drill a water well in Texas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All new wells in Texas require a permit from your local Groundwater Conservation District (LSGCD in Montgomery County, HGSD in Harris County). B-E Waterwell handles all permitting as part of every job.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does water well drilling cost in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Residential wells in the Houston area typically range from $8,000–$18,000 complete, including pump and pressure tank. Cost depends on depth, casing diameter, and pump specifications. Call for a free written estimate.',
          },
        },
      ],
    },
  ],
};

const subServices = [
  {
    icon: '🏡',
    title: 'New Well Drilling',
    slug: 'new-well-drilling',
    desc: 'Complete new residential waterwell installation — drill, case, develop, pump, pressure tank, and permits. One crew, one price, done right.',
    highlights: ['Rotary rig to target aquifer', 'Schedule 40 PVC casing', '2-year warranty', 'All permits included'],
  },
  {
    icon: '🌿',
    title: 'Irrigation Wells',
    slug: 'irrigation-wells',
    desc: 'Dedicated irrigation wells keep your sprinkler system off your household supply and your water bill low. Sized for residential acreage through small farms.',
    highlights: ['Dedicated wellhead', 'Irrigation pump sizing', 'No city water restrictions', 'Faster payoff than utility bills'],
  },
  {
    icon: '🏗️',
    title: 'Commercial & Agricultural',
    slug: 'commercial-agricultural-wells',
    desc: 'High-yield commercial and agricultural well drilling for businesses, nurseries, farms, ranches, and equestrian properties across the Houston area.',
    highlights: ['High-capacity pumps', 'Larger casing diameters', 'Multi-zone completions', 'Ag exemption assistance'],
  },
];

const aquifers = [
  { county: 'Montgomery County', range: '180–320 ft', aquifer: 'Jasper Aquifer', notes: 'LSGCD regulated. Sandy loam soils. Reliable yields for residential and ag use.' },
  { county: 'Harris County (NW)', range: '180–360 ft', aquifer: 'Chicot / Jasper', notes: 'HGSD regulated. Tomball, Spring, Cypress corridor. Good residential yield.' },
  { county: 'Harris County (East)', range: '240–440 ft', aquifer: 'Evangeline Aquifer', notes: 'Humble, Kingwood area. Deeper wells required. Iron and sulfur treatment common.' },
  { county: 'Waller County', range: '160–300 ft', aquifer: 'Trinity Group', notes: 'LSGCD / BVGCD regulated. Sandy coastal plains. Farm and ranch applications.' },
];

const faqs = [
  {
    question: 'How deep are water wells drilled in the Houston area?',
    answer:
      'Depth depends on your county and target aquifer. Montgomery County wells typically reach the Jasper Aquifer at 180–320 ft. Harris County NW wells access the Chicot/Jasper at 180–360 ft. Harris County East (Humble, Kingwood) wells reach the Evangeline at 240–440 ft. Waller County wells run 160–300 ft.',
  },
  {
    question: 'How long does water well drilling take in the Houston area?',
    answer:
      'Most residential waterwells are drilled and fully completed — casing set, pump installed, pressure tank connected, and water tested — in 1–2 days after permit approval. Commercial or large agricultural wells may take 2–3 days.',
  },
  {
    question: 'Do I need a permit to drill a water well in Texas?',
    answer:
      'Yes. All new wells require a permit from your Groundwater Conservation District. In Montgomery County that is the Lone Star GCD (LSGCD). In most of Harris County it is the Harris-Galveston Subsidence District (HGSD). B-E Waterwell handles all permitting on your behalf.',
  },
  {
    question: 'How much does water well drilling cost in Houston, TX?',
    answer:
      'A complete residential well — drill, case, pump, pressure tank, and permits — typically runs $8,000–$18,000 in the Houston area. Cost varies by depth, casing size, and pump specs. We provide free, written estimates before any work begins.',
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

export default function WaterWellDrillingHubPage() {
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
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/services">Services</Link>
                <span>/</span>
                <span>Water Well Drilling</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Houston, TX · Since 1979</span>
                <h1 className={styles.h1Line2}>Water Well Drilling</h1>
                <span className={styles.h1Line3}>Residential · Irrigation · Commercial</span>
              </div>
              <p className={styles.heroSubtitle}>
                45+ years of rotary rig drilling across Montgomery, Harris, and Waller counties.
                We drill to depth, case it right, and stand behind every well with a
                2-year workmanship warranty. TDLR Licensed.
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
        </div>
      </section>

      {/* ── SERVICELAYOUT ─────────────────────── */}
      <ServiceLayout
        category="water-well-drilling"
        categoryLabel="Well Drilling"
        defaultService="Water Well Drilling"
      >

        {/* ── OVERVIEW ────────────────────────── */}
        <section className={styles.overviewSection}>
          <span className="section-label">The Process</span>
          <h2 className="section-title">Well Drilling in Houston, TX</h2>
          <p className={styles.overviewP}>
            B-E Waterwell Services uses truck-mounted rotary drilling rigs to reach the
            Jasper, Chicot, and Evangeline Aquifers beneath Houston&apos;s sandy
            coastal plains. Every well we drill is permitted, cased in Schedule 40 PVC,
            gravel-packed, and fully developed before the pump is set.
          </p>
          <p className={styles.overviewP}>
            Whether you need a new residential well in Magnolia, an irrigation well on
            a Waller County acreage property, or a high-capacity commercial well in
            Conroe — the process is the same: we assess your site, pull the permit,
            drill to the right aquifer, and finish the job in writing with a
            workmanship warranty.
          </p>
          <div className={styles.overviewStats}>
            {[
              { stat: '45+', label: 'Years Drilling' },
              { stat: '5,000+', label: 'Wells Drilled' },
              { stat: '160–440 ft', label: 'Depth Range' },
              { stat: '2-Year', label: 'Warranty' },
            ].map((s) => (
              <div key={s.label} className={styles.overviewStat}>
                <strong>{s.stat}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUB-SERVICE CARDS ───────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">Drilling Services</span>
          <h2 className="section-title">What Type of Well Do You Need?</h2>
          <div className={styles.subGrid}>
            {subServices.map((s) => (
              <div key={s.slug} className={styles.subCard}>
                <span className={styles.subIcon}>{s.icon}</span>
                <h3 className={styles.subTitle}>{s.title}</h3>
                <p className={styles.subDesc}>{s.desc}</p>
                <ul className={styles.subHighlights}>
                  {s.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Link href={`/services/water-well-drilling/${s.slug}`} className={styles.subLink}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── AQUIFER TABLE ───────────────────── */}
        <section className={styles.aquiferSection}>
          <span className="section-label">Houston Geology</span>
          <h2 className="section-title">Aquifer Depths by County</h2>
          <p className={styles.overviewP}>
            Well depth is determined by your property location and target aquifer.
            Understanding local geology is key to drilling a productive well — here is
            what we typically encounter across our service area.
          </p>
          <div className={styles.aquiferGrid}>
            {aquifers.map((row) => (
              <div key={row.county} className={styles.aquiferCard}>
                <h3 className={styles.aquiferCounty}>{row.county}</h3>
                <div className={styles.aquiferDepth}>{row.range}</div>
                <div className={styles.aquiferName}>{row.aquifer}</div>
                <p className={styles.aquiferNotes}>{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Water Well Drilling FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Drill</span>
          <h2 className="section-title">Well Drilling Service Areas</h2>
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

      </ServiceLayout>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Ready to Drill Your Well?</h2>
            <p>
              Call us for a free estimate or fill out the contact form. We quote every
              job in writing — no surprise charges, no pressure.
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
