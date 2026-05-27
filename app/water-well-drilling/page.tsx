import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CityHeroForm from '../components/CityHeroForm';
import CityFaqAccordion from '../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Waterwell Drilling — Houston, TX | B-E Waterwell Services',
  description:
    'Professional waterwell drilling in the Houston area since 1979. B-E Waterwell Services drills residential, commercial, and agricultural waterwells across Montgomery and Harris counties. TDLR Licensed. Call (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/water-well-drilling' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Waterwell Drilling — Houston, TX',
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
        'Rotary rig waterwell drilling for residential, commercial, and agricultural properties across the Houston area.',
      offers: {
        '@type': 'Offer',
        description: 'Free waterwell drilling estimate. TDLR Licensed.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How deep are waterwells drilled in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most residential waterwells in the Houston area reach 180–420 feet depending on your specific location. Montgomery County wells typically access the Jasper Aquifer at 180–320 ft. Harris County wells often require 220–420 ft to reach the Evangeline Aquifer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to drill a waterwell?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most residential waterwells in the Houston area are drilled and completed — casing, pump, pressure tank, and initial water test — in 1–2 days after permit approval. Agricultural or commercial wells may take 2–3 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a permit to drill a waterwell in Texas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All new waterwells in Texas require a permit from the applicable Groundwater Conservation District. B-E Waterwell Services handles all permitting on your behalf as part of every drilling job.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in a new waterwell installation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A complete waterwell installation from B-E Waterwell Services includes: drilling, PVC casing, gravel pack, well development, submersible pump and motor, drop pipe, pressure tank, electrical connection, and initial water quality test.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does waterwell drilling cost in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Waterwell drilling cost depends on depth, casing diameter, and pump specifications. Residential waterwells in the Houston area typically range from $8,000–$18,000 complete. Call us for a free site-specific estimate.',
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: 'How deep are waterwells drilled in the Houston area?',
    answer:
      'Most residential waterwells in the Houston area reach 180–420 feet. Montgomery County wells typically access the Jasper Aquifer at 180–320 ft. Harris County wells often require 220–420 ft to reach the Evangeline Aquifer. We assess every property before quoting.',
  },
  {
    question: 'How long does it take to drill a waterwell?',
    answer:
      'Most residential waterwells in the Houston area are drilled and completed — casing, pump, pressure tank, and initial water test — in 1–2 days after permit approval. Agricultural or commercial wells may take 2–3 days.',
  },
  {
    question: 'Do I need a permit to drill a waterwell in Texas?',
    answer:
      'Yes. All new waterwells require a permit from your Groundwater Conservation District (LSGCD in Montgomery County, HGSD in most of Harris County). B-E Waterwell handles all permitting as part of every drilling job.',
  },
  {
    question: 'What is included in a new waterwell installation?',
    answer:
      'A complete installation includes: drilling, PVC casing, gravel pack, well development, submersible pump and motor, drop pipe, pressure tank, electrical connection, and initial water quality test.',
  },
  {
    question: 'How much does waterwell drilling cost in the Houston area?',
    answer:
      'Residential waterwells in the Houston area typically run $8,000–$18,000 complete depending on depth and pump spec. Call us for a free site-specific estimate — we quote every job in writing with no hidden charges.',
  },
];

export default function WaterWellDrillingPage() {
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
        <div className={styles.heroGrid}>
          <div />
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <span>Waterwell Drilling</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>Houston Area Waterwell Services</span>
              <h1 className={styles.h1Line2}>Waterwell Drilling</h1>
              <span className={styles.h1Line3}>
                Residential · Commercial · Agricultural
              </span>
            </div>
            <p className={styles.heroSubtitle}>
              45+ years of rotary rig drilling across Montgomery, Harris, and
              Waller counties. We drill to depth, case it right, and stand
              behind every foot with a 2-year workmanship warranty.
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
          <CityHeroForm city="Houston" />
          <div />
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────── */}
      <section className={styles.overviewSection}>
        <div className={`container ${styles.overviewGrid}`}>
          <div className={styles.overviewText}>
            <span className="section-label">The Process</span>
            <h2 className="section-title">
              How We Drill Your Waterwell
            </h2>
            <p>
              B-E Waterwell Services uses truck-mounted rotary drilling rigs to
              drill through the sandy coastal plains of the Houston area to the Jasper,
              Evangeline, and Chicot Aquifers — the same reliable freshwater
              sources that have supplied this region for generations.
            </p>
            <p style={{ marginTop: 16 }}>
              Every waterwell we drill is permitted, cased in schedule 40 PVC,
              gravel-packed, and developed before the pump is set. We don&apos;t
              cut corners because your water supply is not the place to save
              $200 and regret it in 5 years.
            </p>
            <div className={styles.overviewHighlights}>
              <div className={styles.highlight}>
                <strong>Depth Range</strong>
                <span>160 – 440+ ft</span>
              </div>
              <div className={styles.highlight}>
                <strong>Casing</strong>
                <span>Sch. 40 PVC</span>
              </div>
              <div className={styles.highlight}>
                <strong>Warranty</strong>
                <span>2 Years</span>
              </div>
              <div className={styles.highlight}>
                <strong>Permit</strong>
                <span>We Handle It</span>
              </div>
            </div>
          </div>
          <div className={styles.overviewImageWrap}>
            <Image
              src="https://bewaterwells.com/wp-content/uploads/2024/09/water-well-services.webp"
              alt="B-E Waterwell Services drilling rig in action"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────── */}
      <section className={styles.includedSection}>
        <div className="container">
          <span className="section-label">Complete Installation</span>
          <h2 className="section-title">
            What&apos;s Included in Every Waterwell
          </h2>
          <div className={styles.includedGrid}>
            {[
              { icon: '🔧', title: 'Rotary Rig Drilling', desc: 'Truck-mounted rig, drilled to target aquifer depth with full geological log.' },
              { icon: '🪛', title: 'PVC Casing & Screen', desc: 'Schedule 40 PVC casing, gravel pack, and properly placed well screen.' },
              { icon: '💧', title: 'Well Development', desc: 'Aquifer development to clear drilling fluids and maximize production yield.' },
              { icon: '⚙️', title: 'Submersible Pump & Motor', desc: 'Franklin Electric submersible pump sized to your household or commercial demand.' },
              { icon: '🔋', title: 'Pressure Tank', desc: 'Correctly sized pressure tank with pressure switch, gauge, and shut-off.' },
              { icon: '📋', title: 'Permits & Docs', desc: 'All groundwater district permits, driller\'s report, and completion paperwork.' },
            ].map((item) => (
              <div key={item.title} className={styles.includedCard}>
                <span className={styles.includedIcon}>{item.icon}</span>
                <h3 className={styles.includedTitle}>{item.title}</h3>
                <p className={styles.includedDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AQUIFER INFO ─────────────────────── */}
      <section className={styles.aquiferSection}>
        <div className="container">
          <span className="section-label light">Houston Geology</span>
          <h2 className={`section-title light ${styles.aquiferH2}`}>
            Aquifer Depths by County
          </h2>
          <div className={styles.aquiferGrid}>
            {[
              { county: 'Montgomery County', range: '180–320 ft', aquifer: 'Jasper Aquifer', notes: 'LSGCD regulated. Sandy loam soils. Reliable yields for residential and ag use.' },
              { county: 'Harris County (NW)', range: '180–360 ft', aquifer: 'Chicot / Jasper', notes: 'HGSD regulated. Tomball, Spring, Cypress corridor. Good residential yield.' },
              { county: 'Harris County (East)', range: '240–440 ft', aquifer: 'Evangeline Aquifer', notes: 'Humble, Kingwood. Deeper wells required. Iron and sulfur treatment common.' },
              { county: 'Waller County', range: '160–300 ft', aquifer: 'Trinity Group', notes: 'LSGCD / BVGCD regulated. Sandy coastal plains. Farm and ranch applications.' },
            ].map((row) => (
              <div key={row.county} className={styles.aquiferCard}>
                <h3 className={styles.aquiferCounty}>{row.county}</h3>
                <div className={styles.aquiferDepth}>{row.range}</div>
                <div className={styles.aquiferName}>{row.aquifer}</div>
                <p className={styles.aquiferNotes}>{row.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className="container">
          <span className="section-label">Common Questions</span>
          <h2 className={`section-title ${styles.faqH2}`}>
            Waterwell Drilling FAQs
          </h2>
          <CityFaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────── */}
      <section className={styles.areasSection}>
        <div className="container">
          <span className="section-label">Where We Drill</span>
          <h2 className="section-title">Waterwell Drilling Service Areas</h2>
          <div className={styles.areasGrid}>
            {[
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
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}`}
                className={`${styles.areaChip} ${a.hq ? styles.areaChipHQ : ''}`}
              >
                {a.city}, TX {a.hq && '★'}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Ready to Drill Your Waterwell?</h2>
            <p>
              Call us for a free estimate or fill out the form above.
              We quote every job in writing — no surprise charges,
              no pressure, no games.
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
