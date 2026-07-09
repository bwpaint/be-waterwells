import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'New Water Well Drilling — Houston, Magnolia, Conroe TX | B-E Waterwell',
  description:
    'New residential water well drilling in Houston, TX since 1979. Drill to the Jasper or Evangeline Aquifer. TDLR licensed, 2-year warranty, free estimate. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-drilling/new-well-drilling' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'New Water Well Drilling — Houston, TX',
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
        'Complete new residential water well drilling in Houston, TX. Drill, case, develop, pump, pressure tank, and permits — all included. TDLR licensed, 2-year warranty.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How deep will my new well be in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depth depends on your county and target aquifer. Montgomery County typically requires 180–320 ft to reach the Jasper Aquifer. Harris County NW is 180–360 ft. Harris County East (Humble, Kingwood) requires 240–440 ft for the Evangeline. We assess your property before providing a quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does new well installation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'From permit to finished well, most residential jobs take 1–2 weeks total. Permit approval is typically 5–10 business days. Once permit is in hand, drilling and completion takes 1–2 days on-site.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you pull the permit for me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We handle all Groundwater Conservation District permitting as part of every drilling job. You do not need to contact LSGCD, HGSD, or any other district — we take care of it.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in a new well installation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every new well we drill includes: rotary rig drilling to target aquifer depth, Schedule 40 PVC casing, gravel pack, well development, submersible pump and motor, drop pipe, pressure tank, pressure switch and gauge, electrical connection at wellhead, and initial water quality test. Permits are included.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a new well cost in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'New residential waterwells in the Houston area typically cost $8,000–$18,000 complete. Depth, casing diameter, and pump horsepower are the main cost drivers. We provide free, itemized written estimates before any work begins.',
          },
        },
      ],
    },
  ],
};

const included = [
  { icon: '🔧', title: 'Rotary Rig Drilling', desc: 'Truck-mounted rotary rig drilled to your target aquifer with a complete geological log for your records.' },
  { icon: '🪛', title: 'PVC Casing & Screen', desc: 'Schedule 40 PVC casing with gravel pack and properly placed stainless screen for long-term performance.' },
  { icon: '💧', title: 'Well Development', desc: 'Full aquifer development to clear drilling fluids, remove fines, and maximize sustainable production yield.' },
  { icon: '⚙️', title: 'Submersible Pump & Motor', desc: 'Franklin Electric submersible pump and motor sized to your household demand — installed and wired at wellhead.' },
  { icon: '🔋', title: 'Pressure Tank', desc: 'Correctly sized pressure tank with pressure switch, gauge, and main shut-off for reliable system pressure.' },
  { icon: '📋', title: 'Permits & Water Test', desc: 'All GCD permits, driller\'s completion report, and initial bacteriological and basic water quality test.' },
];

const processSteps = [
  { step: '01', title: 'Site Assessment', desc: 'We visit your property, review county geology records, and identify the best drill location before quoting.' },
  { step: '02', title: 'Permit Application', desc: 'We file with your Groundwater Conservation District (LSGCD or HGSD). Approval typically takes 5–10 business days.' },
  { step: '03', title: 'Drilling Day', desc: 'Our rotary rig mobilizes to your site. We drill to aquifer depth, set casing, and develop the well — usually completed same day.' },
  { step: '04', title: 'Pump & Tank', desc: 'Submersible pump, drop pipe, pressure tank, and all surface equipment installed and connected to your home\'s electrical.' },
  { step: '05', title: 'Final Inspection', desc: 'System pressure test, water quality sample collected, completion paperwork signed. Your well is live.' },
];

const aquifers = [
  { county: 'Montgomery County', range: '180–320 ft', aquifer: 'Jasper Aquifer', notes: 'LSGCD regulated. Most common for residential wells in Magnolia, Conroe, Montgomery, Pinehurst.' },
  { county: 'Harris County (NW)', range: '180–360 ft', aquifer: 'Chicot / Jasper', notes: 'HGSD regulated. Tomball, Spring, Cypress, The Woodlands corridor. Good residential yields.' },
  { county: 'Harris County (East)', range: '240–440 ft', aquifer: 'Evangeline Aquifer', notes: 'Humble, Kingwood. Deeper drilling required. Iron and sulfur treatment common at this depth.' },
  { county: 'Waller County', range: '160–300 ft', aquifer: 'Trinity Group', notes: 'LSGCD / BVGCD regulated. Shallower sandy formations. Good for residential and small farm use.' },
];

const faqs = [
  {
    question: 'How deep will my new well be in Magnolia or Houston?',
    answer:
      'Montgomery County properties (Magnolia, Conroe, Montgomery) typically require 180–320 ft to reach the Jasper Aquifer. Harris County NW (Tomball, Spring, Cypress) is 180–360 ft. Harris County East (Humble, Kingwood) requires 240–440 ft. We assess every property and quote the actual depth we expect to drill.',
  },
  {
    question: 'How long does the entire new well installation take?',
    answer:
      'Start to finish — including permit — typically runs 1–2 weeks. Permit approval from LSGCD or HGSD usually takes 5–10 business days. Once permit is in hand, drilling and full system installation is completed in 1–2 days on-site.',
  },
  {
    question: 'Do I need to pull my own permit to drill a well in Texas?',
    answer:
      'No. B-E Waterwell handles all permitting with your Groundwater Conservation District as part of every job. We file the application, pay the fee, and track approval. You do not have to contact LSGCD, HGSD, or any other district.',
  },
  {
    question: 'What exactly is included in my new well installation?',
    answer:
      'Every well includes: rotary rig drilling, geological log, Schedule 40 PVC casing, gravel pack, stainless screen, full well development, Franklin Electric submersible pump and motor, drop pipe, pitless adapter, pressure tank, pressure switch and gauge, main shut-off, electrical wiring at wellhead, all GCD permits, driller\'s completion report, and initial water quality test.',
  },
  {
    question: 'How much does a new water well cost in Houston, TX?',
    answer:
      'New residential wells in the Houston area typically run $8,000–$18,000 complete. The main cost drivers are depth (more feet = more casing, more drilling time), casing diameter, and pump horsepower. We provide free, itemized written estimates — no surprises on billing day.',
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

export default function NewWellDrillingPage() {
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
                <Link href="/services/water-well-drilling">Water Well Drilling</Link>
                <span>/</span>
                <span>New Well Drilling</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Magnolia · Conroe · Houston, TX</span>
                <h1 className={styles.h1Line2}>New Water Well Drilling</h1>
                <span className={styles.h1Line3}>Drill · Case · Pump · Done Right</span>
              </div>
              <p className={styles.heroSubtitle}>
                Switching from city water or drilling on a new property? B-E Waterwell
                drills new residential wells across the Houston area — from permit to first
                drop of water in your glass. 45+ years, 5,000+ wells, 2-year warranty.
              </p>
              <div className={styles.heroBtns}>
                <a href="tel:+12814484447" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
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

        {/* ── WHAT'S INCLUDED ─────────────────── */}
        <section className={styles.includedSection}>
          <span className="section-label">Complete Installation</span>
          <h2 className="section-title">Everything Included in Every New Well</h2>
          <p className={styles.bodyP}>
            A new waterwell from B-E Waterwell is not a drill hole with a pump dropped in.
            Every new well drilling job in Houston, TX includes a complete, code-compliant
            installation — from rotary rig to final water test.
          </p>
          <div className={styles.includedGrid}>
            {included.map((item) => (
              <div key={item.title} className={styles.includedCard}>
                <span className={styles.includedIcon}>{item.icon}</span>
                <h3 className={styles.includedTitle}>{item.title}</h3>
                <p className={styles.includedDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS TIMELINE ────────────────── */}
        <section className={styles.processSection}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">From Permit to First Drop of Water</h2>
          <div className={styles.processSteps}>
            {processSteps.map((s) => (
              <div key={s.step} className={styles.processStep}>
                <div className={styles.stepNum}>{s.step}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DEPTH / GEOLOGY TABLE ────────────── */}
        <section className={styles.aquiferSection}>
          <span className="section-label">Houston Geology</span>
          <h2 className="section-title">How Deep Will Your Well Be?</h2>
          <p className={styles.bodyP}>
            Well drilling depth in Montgomery County TX and across the Houston area
            depends on your specific location and the target aquifer. Here is what
            we typically encounter across our service area.
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

        {/* ── COST SECTION ────────────────────── */}
        <section className={styles.costSection}>
          <span className="section-label">Honest Pricing</span>
          <h2 className="section-title">What Does a New Well Cost in the Houston area?</h2>
          <p className={styles.bodyP}>
            New residential waterwell drilling in Houston, TX typically runs
            <strong> $8,000–$18,000 complete</strong> — including drill, case, pump,
            pressure tank, and all permits. Here is what drives the price:
          </p>
          <div className={styles.costFactors}>
            {[
              { label: 'Depth', detail: 'More footage = more casing, more drilling time. Expect higher costs in Harris County East where aquifers are deeper.' },
              { label: 'Casing Diameter', detail: 'Standard residential wells use 6" casing. Higher demand applications may require 8" or larger.' },
              { label: 'Pump Specification', detail: 'Pump sizing is matched to your household demand and static water level. Larger homes may need higher horsepower.' },
            ].map((f) => (
              <div key={f.label} className={styles.costFactor}>
                <h3 className={styles.costFactorLabel}>{f.label}</h3>
                <p className={styles.costFactorDetail}>{f.detail}</p>
              </div>
            ))}
          </div>
          <p className={styles.costCta}>
            We provide free, itemized written estimates before any work begins.
            Call <a href="tel:+12814484447">(281) 448-4447</a> or{' '}
            <Link href="/contact">use our contact form</Link>.
          </p>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">New Well Drilling FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Drill</span>
          <h2 className="section-title">New Well Drilling Service Areas</h2>
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
            <h2>Drill Your New Well with B-E Waterwell</h2>
            <p>
              Serving Magnolia, Conroe, Tomball, and all of Houston, TX since 1979.
              Call for a free, written estimate — no pressure, no surprises.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
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
