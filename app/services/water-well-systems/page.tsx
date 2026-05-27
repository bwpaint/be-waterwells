import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Well Water System Installation & Repair — North Houston TX | B-E Waterwell',
  description:
    'Pressure tanks, generator prep kits, and complete well water system service in North Houston TX. TDLR licensed. Franklin Electric authorized. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-systems' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Well Water System Service — North Houston TX',
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
      description:
        'Pressure tank replacement, generator prep kit installation, and complete well system service in North Houston TX. TDLR licensed, Franklin Electric authorized.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What components make up a complete well water system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A complete well water system includes the well casing and screen, submersible pump and motor, drop pipe, pitless adapter, pressure switch, pressure tank, and distribution piping to your home. Every component works together — a failure in one affects the whole system.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I upgrade my well water system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Consider a system upgrade when your pressure tank is over 10 years old, your pump is cycling rapidly, you notice pressure fluctuations, or you want backup power capability before hurricane season. Proactive upgrades cost far less than emergency repairs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does well system replacement cost in North Houston?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A complete system overhaul — new pressure tank, pump, and controls — typically runs $1,200–$2,500 in North Houston. Individual component replacement is less. Call for a free written estimate.',
          },
        },
      ],
    },
  ],
};

const subServices = [
  {
    icon: '🔋',
    title: 'Pressure Tank Systems',
    slug: 'pressure-tank-systems',
    desc: 'Waterlogged tank or pump short cycling? We replace pressure tanks same-day — sized correctly for your household and installed right the first time.',
    highlights: ['Bladder & diaphragm tanks', 'Correct sizing for household', 'Same-day replacement', '$400–$900 installed'],
  },
  {
    icon: '⚡',
    title: 'Generator Prep Kits',
    slug: 'generator-prep-kits',
    desc: 'Keep your well running through ERCOT outages and hurricane season. We install transfer switches and generator hookups for well pump circuits.',
    highlights: ['Transfer switch install', 'Generator inlet wiring', 'Hurricane season prep', 'Portable & standby options'],
  },
];

const systemComponents = [
  { step: '01', label: 'Well Casing & Screen', desc: 'The casing is the pipe that lines your borehole. The screen at the bottom lets water in while filtering sediment. It is the foundation everything else depends on.' },
  { step: '02', label: 'Submersible Pump & Motor', desc: 'Seated deep in the well, the submersible pump pushes water up through the drop pipe to your home. Motor sizing matches your household demand and well depth.' },
  { step: '03', label: 'Pressure Switch', desc: 'The pressure switch senses system pressure and signals the pump to start and stop. A faulty switch causes short cycling or a pump that won't shut off.' },
  { step: '04', label: 'Pressure Tank', desc: 'The pressure tank stores a pressurized water reserve, buffering demand and protecting your pump from rapid on/off cycling that wears out motors.' },
  { step: '05', label: 'Distribution Piping', desc: 'Pipes carry pressurized water from the tank to every tap, appliance, and irrigation zone in your home. System pressure should be steady throughout.' },
];

const trustItems = [
  { icon: '🏆', title: 'Franklin Electric Authorized', desc: 'Factory-authorized to service and warranty Franklin Electric pump systems — the leading brand in residential well pumps.' },
  { icon: '🚚', title: 'Stocked Parts Truck', desc: 'Our service trucks carry common pressure tanks, switches, and controls. Most repairs completed in one visit.' },
  { icon: '📅', title: 'Same-Day Service', desc: 'No water? We prioritize same-day dispatch for households with complete loss of pressure or water.' },
];

const faqs = [
  {
    question: 'What is in a complete well water system?',
    answer: 'A complete well water system includes: the well casing and screen (the borehole structure), submersible pump and motor, drop pipe, pitless adapter, pressure switch, pressure tank, main shut-off, and distribution piping. Every component works together — when one fails, the whole system is affected. B-E Waterwell services every component, not just the part that failed.',
  },
  {
    question: 'When should I upgrade my well water system?',
    answer: 'Consider a system upgrade when your pressure tank is over 10 years old, you notice the pump cycling rapidly (every few seconds), pressure drops during showers, or you want backup generator capability before hurricane season. Proactive upgrades — before failure — are significantly less expensive than emergency repairs.',
  },
  {
    question: 'What does well water system replacement cost in North Houston?',
    answer: 'A complete pressure tank replacement runs $400–$900 installed. A full system overhaul including pump, tank, and controls is $1,200–$2,500 depending on pump size and depth. Generator prep kits run $300–$800 installed for basic transfer switch setups. We provide free written estimates before any work begins.',
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

export default function WaterWellSystemsPage() {
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
        <div
          className={styles.heroBg}
          style={{ backgroundImage: "url('https://bewaterwells.com/wp-content/uploads/2024/09/bewater1-scaled.jpg')" }}
        />
        <div className="container">
          <div className={styles.heroGrid}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <span>Water Well Systems</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>North Houston TX · Since 1979</span>
              <h1 className={styles.h1Line2}>Water Well Systems</h1>
              <span className={styles.h1Line3}>Pressure Tanks · Generator Prep · Complete System Service</span>
            </div>
            <p className={styles.heroSubtitle}>
              B-E Waterwell services every component of your well water system —
              not just the part that failed. TDLR licensed. Franklin Electric authorized.
              Stocked parts truck. Same-day service available.
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
        category="water-well-systems"
        categoryLabel="Well Systems"
        defaultService="Pressure Tank"
      >

        {/* ── HOW A WELL SYSTEM WORKS ──────────── */}
        <section className={styles.systemSection}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">How a Complete Well Water System Works</h2>
          <p className={styles.bodyP}>
            A residential well water system is more than a hole in the ground and a pump.
            Every component from the casing to the pressure tank plays a role in delivering
            steady, clean water to your home. Understanding the system helps you know when
            something is wrong — and why we insist on diagnosing the whole system, not just
            the part that stopped working.
          </p>
          <div className={styles.systemSteps}>
            {systemComponents.map((s) => (
              <div key={s.step} className={styles.systemStep}>
                <div className={styles.systemNum}>{s.step}</div>
                <div>
                  <h3 className={styles.systemLabel}>{s.label}</h3>
                  <p className={styles.systemDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUB-SERVICE CARDS ────────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">System Services</span>
          <h2 className="section-title">What We Install & Service</h2>
          <div className={styles.subGrid2}>
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
                <Link
                  href={`/services/water-well-systems/${s.slug}`}
                  className={styles.subLink}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPLETE SYSTEM DIAGNOSIS ────────── */}
        <section className={styles.diagSection}>
          <span className="section-label">Our Approach</span>
          <h2 className="section-title">Complete System Diagnosis — Not Just the Failed Part</h2>
          <p className={styles.bodyP}>
            Most service calls start with one symptom — no water, low pressure, pump running
            constantly. But a single symptom rarely has a single cause. A waterlogged pressure
            tank causes pump short cycling, which stresses the motor, which overheats the control
            box. Replacing only the tank leaves the motor at risk.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            B-E Waterwell performs a complete system evaluation on every service call.
            We test pump output, measure tank pre-charge pressure, check pressure switch
            calibration, inspect wiring at the wellhead, and review water quality visually.
            You get a full picture before we recommend anything.
          </p>
        </section>

        {/* ── TRUST SIGNALS ────────────────────── */}
        <section className={styles.trustSection}>
          <span className="section-label">Why B-E Waterwell</span>
          <h2 className="section-title">Authorized, Stocked, and Ready</h2>
          <div className={styles.trustGrid}>
            {trustItems.map((t) => (
              <div key={t.title} className={styles.trustCard}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <h3 className={styles.trustTitle}>{t.title}</h3>
                <p className={styles.trustDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Well Water System FAQs</h2>
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
            <h2>Ready to Service Your Well System?</h2>
            <p>
              Free written estimates. Same-day service available. Franklin Electric
              authorized. TDLR licensed since 1979.
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
