import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Maintenance Services — North Houston TX | B-E Waterwell',
  description:
    'Annual well inspection, well rehabilitation, and ongoing maintenance programs in North Houston TX. TDLR licensed since 1979. Free estimate. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-maintenance' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Water Well Maintenance — North Houston TX',
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
      areaServed: 'North Houston, TX',
      description: 'Annual well inspection, well rehabilitation, and ongoing maintenance programs. TDLR licensed, serving North Houston since 1979.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How often should I service my water well?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Annual inspection is recommended for residential wells. At minimum, get a professional inspection every 3 years. Pre-hurricane season pump checks are also a good idea in North Houston.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does an annual well inspection include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our annual inspection covers pump performance test (flow rate and amp draw), pressure tank pre-charge check, wellhead and casing visual inspection, pressure switch calibration, water pressure and flow rate measurement, and a written report with recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer well maintenance service plans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer priority scheduling for customers who call annually for inspection service. Annual inspection customers receive written records useful for home sales and insurance purposes. Call to set up your annual schedule.',
          },
        },
      ],
    },
  ],
};

const subServices = [
  {
    icon: '🔬',
    title: 'Well Rehabilitation',
    slug: 'well-rehabilitation',
    desc: 'Restore declining well yields through mechanical jetting, shock chlorination, or acid treatment. Often avoids costly new well drilling.',
    highlights: ['Biofouling treatment', 'Mechanical jetting', 'Acid descaling', 'Rehab vs. new well guidance'],
  },
  {
    icon: '🔍',
    title: 'Well Inspection',
    slug: 'well-inspection',
    desc: 'Certified well inspection for home buyers, real estate transactions, FHA/VA/USDA loans, and annual owner maintenance.',
    highlights: ['Written report with photos', 'Pump performance test', 'Water quality sample', 'FHA/VA compliant'],
  },
  {
    icon: '📅',
    title: 'Ongoing Maintenance',
    slug: 'ongoing-maintenance',
    desc: 'Annual service calls, seasonal checks, and written maintenance records that protect your well investment and simplify home sales.',
    highlights: ['Annual pump performance test', 'Pressure tank check', 'Written service records', 'Priority scheduling'],
  },
];

const checklist = [
  { item: 'Pump performance test', detail: 'Flow rate, motor amp draw, start/stop pressures' },
  { item: 'Water quality visual', detail: 'Color, odor, clarity — flag for lab testing if needed' },
  { item: 'Pressure tank pre-charge', detail: 'Check bladder integrity and air charge level' },
  { item: 'Casing integrity', detail: 'Visual inspection at wellhead for cracks, corrosion, vermin entry' },
  { item: 'Wellhead condition', detail: 'Vent screen, sanitary cap, surface seal condition' },
  { item: 'Water level assessment', detail: 'Static and pumping water level if accessible' },
];

const costCompare = [
  { type: 'Annual Preventive Maintenance', cost: '$200–$400/year', outcome: 'Catch problems early, extend equipment life 3–5 years, maintain water quality' },
  { type: 'Emergency Pump Replacement', cost: '$800–$1,800', outcome: 'Unplanned, urgent, often includes overtime. Could have been prevented with regular inspection.' },
  { type: 'Emergency System Repair', cost: '$1,500–$3,000+', outcome: 'Multiple component failures when one issue was ignored. Highest cost outcome.' },
];

const faqs = [
  {
    question: 'How often should I have my well serviced in North Houston?',
    answer: 'Annual inspection is recommended for residential wells. At minimum, every 3 years. In North Houston, the humid climate and mineral-heavy Jasper Aquifer water accelerate equipment wear. Pre-hurricane season pump checks are also wise — discovering a weak pump in April is far better than discovering it in August when your power is out.',
  },
  {
    question: 'What does an annual well inspection include?',
    answer: 'Our inspection covers: pump performance test (flow rate, motor amp draw), pressure tank pre-charge check, wellhead and casing visual, pressure switch calibration, water pressure and flow rate measurement, visual water quality assessment, and a written report with photos and recommendations. We document everything in writing.',
  },
  {
    question: 'Do you offer well maintenance service plans or contracts?',
    answer: 'We offer priority scheduling and written record-keeping for customers who schedule annual inspections with us. These written service records are valuable when selling your home — buyers and lenders want to see documented maintenance history. Call us to set up your annual schedule and we will reach out before each inspection is due.',
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

export default function WellMaintenancePage() {
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
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <span>Well Maintenance</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>North Houston TX · Since 1979</span>
              <h1 className={styles.h1Line2}>Well Maintenance Services</h1>
              <span className={styles.h1Line3}>Inspection · Rehabilitation · Ongoing Care</span>
            </div>
            <p className={styles.heroSubtitle}>
              Wells last 20–40 years with proper care — or 10–15 without it. B-E Waterwell
              provides annual inspection, well rehabilitation, and ongoing maintenance
              programs across North Houston TX. TDLR licensed.
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

      <ServiceLayout
        category="well-maintenance"
        categoryLabel="Well Maintenance"
        defaultService="Well Maintenance"
      >

        {/* ── WHY MAINTENANCE ─────────────────── */}
        <section className={styles.whySection}>
          <span className="section-label">Why Maintenance Matters</span>
          <h2 className="section-title">Maintained Wells Last Twice as Long</h2>
          <p className={styles.bodyP}>
            A residential waterwell with annual inspection and proper maintenance
            regularly achieves 25–40 years of service. Neglected wells — where problems
            go undetected — often fail at 10–15 years, requiring expensive emergency
            repairs or full replacement. The math is simple: a $250 annual inspection
            is far cheaper than a $1,500 emergency repair or a $12,000 new well.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            In North Houston, the Jasper Aquifer water is mineral-heavy with iron
            content that accelerates pump wear and can cause biofouling in aging wells.
            Annual monitoring catches these conditions early, when they are treatable
            rather than catastrophic.
          </p>
        </section>

        {/* ── SUB-SERVICE CARDS ────────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">Maintenance Services</span>
          <h2 className="section-title">Three Ways We Maintain Your Well</h2>
          <div className={styles.subGrid}>
            {subServices.map((s) => (
              <div key={s.slug} className={styles.subCard}>
                <span className={styles.subIcon}>{s.icon}</span>
                <h3 className={styles.subTitle}>{s.title}</h3>
                <p className={styles.subDesc}>{s.desc}</p>
                <ul className={styles.subHighlights}>
                  {s.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <Link
                  href={`/services/well-maintenance/${s.slug}`}
                  className={styles.subLink}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHECKLIST ────────────────────────── */}
        <section className={styles.checkSection}>
          <span className="section-label">What We Check</span>
          <h2 className="section-title">The B-E Maintenance Checklist</h2>
          <p className={styles.bodyP}>
            Every maintenance visit follows a documented checklist. You receive a
            written report with findings, photos, and recommendations after every call.
          </p>
          <div className={styles.checkGrid}>
            {checklist.map((c) => (
              <div key={c.item} className={styles.checkCard}>
                <div className={styles.checkIcon}>✓</div>
                <div>
                  <h3 className={styles.checkItem}>{c.item}</h3>
                  <p className={styles.checkDetail}>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COST COMPARE ─────────────────────── */}
        <section className={styles.costSection}>
          <span className="section-label">The Cost of Not Maintaining</span>
          <h2 className="section-title">Preventive Maintenance vs. Emergency Repair</h2>
          <div className={styles.costTable}>
            {costCompare.map((row) => (
              <div key={row.type} className={styles.costRow}>
                <div className={styles.costType}>{row.type}</div>
                <div className={styles.costAmt}>{row.cost}</div>
                <div className={styles.costOutcome}>{row.outcome}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Well Maintenance FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Work</span>
          <h2 className="section-title">Service Areas</h2>
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
            <h2>Schedule Your Well Maintenance Today</h2>
            <p>
              Annual inspections, rehabilitation, and written service records.
              TDLR licensed. Free estimates. Serving North Houston since 1979.
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
