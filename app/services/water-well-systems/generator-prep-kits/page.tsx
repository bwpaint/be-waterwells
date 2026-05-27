import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Well Generator Prep Kits — North Houston TX | B-E Waterwell',
  description:
    'Keep your well running during power outages and hurricanes. B-E Waterwell installs generator prep kits for well pumps across North Houston TX. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-systems/generator-prep-kits' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Generator Prep Kit Installation — North Houston TX',
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
      description: 'Generator prep kit installation for residential water wells in North Houston TX. Transfer switch, generator inlet, wiring. Be ready before hurricane season.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What size generator do I need to run my well pump?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generator sizing depends on pump horsepower. A 1/2 HP pump needs 1,000W running / 2,000W startup. A 1 HP pump needs 1,500W running / 3,000W startup. A 1.5 HP pump needs 2,000W / 4,000W startup. We recommend a minimum 5,000W generator for a safety margin and to power other essential appliances simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does generator prep kit installation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Basic transfer switch and generator inlet installation typically takes 2–4 hours. We handle the well pump circuit side. If you need a whole-home panel transfer switch, an electrician handles the main panel work and we handle the well pump preparation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the generator prep kit work with any generator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our basic hookups are compatible with standard portable generators using a 30-amp or 50-amp twist-lock plug. We install a matching inlet receptacle at the well. You supply the generator and properly rated extension cord. We recommend a minimum 5,000W generator for most residential well pumps.',
          },
        },
        {
          '@type': 'Question',
          name: 'What about whole-home automatic standby generators?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For automatic standby generators (Generac, Kohler, etc.), we install and prepare the well pump circuit and transfer connection. A licensed electrician handles the main panel automatic transfer switch. We coordinate with your electrician or can recommend one. Whole-home standby systems typically run $8,000–$15,000 including installation.',
          },
        },
      ],
    },
  ],
};

const options = [
  {
    num: '01',
    title: 'Basic Portable Generator Hookup',
    price: '$300–$600 installed',
    desc: 'Transfer switch and dedicated generator inlet receptacle wired to your well pump circuit. Connect your portable generator during an outage and power your well pump without back-feeding your panel.',
    includes: ['Transfer switch', 'Generator inlet receptacle', 'Well pump circuit wiring', 'Test run included'],
  },
  {
    num: '02',
    title: 'Manual Transfer Switch with Generator Inlet',
    price: '$400–$800 installed',
    desc: 'More robust manual transfer panel that allows you to select individual circuits to power from your generator. Better solution if you also want to run refrigerator or lighting from the same generator.',
    includes: ['Manual transfer panel (6–10 circuits)', 'Generator inlet', 'Well pump + selected circuits', 'Load calculation included'],
  },
  {
    num: '03',
    title: 'Whole-Home Automatic Standby',
    price: '$8,000–$15,000 (with electrician)',
    desc: 'Automatic transfer switch with a natural gas or propane standby generator. Power comes back within seconds of an outage — no manual intervention. We handle the well pump preparation and coordination.',
    includes: ['Automatic transfer switch (electrician)', 'Well pump circuit prep', 'Load calculation', 'Generator pad & connection'],
  },
];

const sizing = [
  { hp: '½ HP', running: '1,000W', startup: '2,000W', recGen: '3,500W minimum' },
  { hp: '1 HP', running: '1,500W', startup: '3,000W', recGen: '5,000W minimum' },
  { hp: '1½ HP', running: '2,000W', startup: '4,000W', recGen: '6,000W minimum' },
  { hp: '2+ HP', running: '2,500W+', startup: '5,000W+', recGen: '8,000W minimum' },
];

const checklist = [
  { item: 'Install generator prep kit', desc: 'Before hurricane season — not during. Contractors are booked solid once a storm approaches.' },
  { item: 'Test run with your generator', desc: 'Run the system for 30 minutes under load. Verify pump starts, pressure builds, no tripped breakers.' },
  { item: 'Check well condition', desc: 'Annual pump check before storm season. A weak pump under generator power may not recover if it fails mid-storm.' },
  { item: 'Inspect pressure tank', desc: 'A waterlogged tank makes your generator work harder and can short cycle the pump under partial load.' },
  { item: 'Have fuel on hand', desc: 'North Houston extended outages can last 3–7 days. Store at minimum 50 gallons of stabilized fuel.' },
];

const faqs = [
  {
    question: 'What size generator do I need to run my well pump in North Houston?',
    answer: 'Match the generator to your pump's horsepower. A 1/2 HP pump needs 1,000W running (2,000W startup surge). A 1 HP pump needs 1,500W running (3,000W startup). A 1.5 HP pump needs 2,000W running (4,000W startup). Always add a 50–100% safety margin for startup surge and to power other appliances simultaneously. We recommend a minimum 5,000W generator for most residential well pumps — larger is safer.',
  },
  {
    question: 'How long does generator prep kit installation take?',
    answer: 'Basic transfer switch and generator inlet installation takes 2–4 hours for the well pump circuit. We handle everything at the wellhead and pump circuit side. If you need a full manual transfer panel for multiple circuits, add another hour or two. Automatic standby systems require coordination with a licensed electrician for the main panel and take 1–2 days total.',
  },
  {
    question: 'Does a generator prep kit work with any generator brand?',
    answer: 'Yes. We install a standard generator inlet receptacle (30-amp or 50-amp twist-lock) that works with any portable generator using a matching outlet. You supply a properly rated generator cord. For automatic standby systems (Generac, Kohler, Cummins), we coordinate with your electrician to ensure the well pump circuit is properly integrated into the automatic transfer switch.',
  },
  {
    question: 'Should I install a generator prep kit before or after hurricane season starts?',
    answer: 'Before — ideally in March through May before hurricane season (June 1). Once a named storm is approaching, contractors book up within hours and material supply chains tighten. Installing a generator prep kit in the spring takes 2–4 hours and gives you peace of mind all season. Call us in the spring, not the night before the storm.',
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

export default function GeneratorPrepKitsPage() {
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
              <Link href="/services/water-well-systems">Well Systems</Link>
              <span>/</span>
              <span>Generator Prep Kits</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>Hurricane Season Ready — North Houston TX</span>
              <h1 className={styles.h1Line2}>Generator Prep Kits for Water Wells</h1>
              <span className={styles.h1Line3}>Hurricane Season · Power Outages · Backup Power</span>
            </div>
            <p className={styles.heroSubtitle}>
              When ERCOT fails or a hurricane hits, your well pump stops without backup power.
              B-E Waterwell installs generator prep kits that let you run your well on a
              portable generator — installed before storm season, not during it.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                📞 (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Schedule Install
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceLayout
        category="water-well-systems"
        categoryLabel="Well Systems"
        defaultService="Generator Prep Kit"
      >

        {/* ── WHY NORTH HOUSTON ───────────────── */}
        <section className={styles.whySection}>
          <span className="section-label">Why It Matters Here</span>
          <h2 className="section-title">Why North Houston Needs Generator-Ready Wells</h2>
          <p className={styles.bodyP}>
            North Houston is not just hurricane country — it is ERCOT country.
            The February 2021 winter storm knocked out power for millions of Texans
            for days. Hurricane Harvey in 2017 left parts of Montgomery County without
            power for over a week. Rural areas outside city water service routinely lose
            power for 3–7 days in major weather events.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            When you lose grid power, your well pump stops. A generator prep kit —
            a transfer switch and properly wired generator inlet — lets you plug in
            a portable generator and restore water within minutes. No water for a week
            is not just inconvenient. It is a health and safety issue for families,
            livestock, and equestrian properties.
          </p>
          <div className={styles.whyStats}>
            {[
              { stat: 'Feb 2021', label: 'ERCOT grid failure — millions without power for days' },
              { stat: '7+ Days', label: 'Typical rural North Houston outage in a major hurricane' },
              { stat: '$300–$800', label: 'Installed cost for a generator prep kit' },
              { stat: '2–4 Hours', label: 'Installation time — be ready before storm season' },
            ].map((s) => (
              <div key={s.label} className={styles.whyStat}>
                <strong>{s.stat}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── OPTIONS ──────────────────────────── */}
        <section className={styles.optionsSection}>
          <span className="section-label">Your Options</span>
          <h2 className="section-title">3 Generator Prep Kit Options</h2>
          <div className={styles.optionsGrid}>
            {options.map((o) => (
              <div key={o.num} className={styles.optionCard}>
                <div className={styles.optionNum}>{o.num}</div>
                <h3 className={styles.optionTitle}>{o.title}</h3>
                <div className={styles.optionPrice}>{o.price}</div>
                <p className={styles.optionDesc}>{o.desc}</p>
                <ul className={styles.optionIncludes}>
                  {o.includes.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── GENERATOR SIZING ─────────────────── */}
        <section className={styles.sizingSection}>
          <span className="section-label">Generator Sizing Guide</span>
          <h2 className="section-title">What Size Generator Do You Need?</h2>
          <p className={styles.bodyP}>
            Well pumps have a high startup surge — typically 2–3× the running wattage.
            Your generator must handle the startup surge, not just the running load.
            We recommend a minimum 5,000W generator for most residential wells to
            provide a safety margin and allow other appliances to run simultaneously.
          </p>
          <div className={styles.sizingTable}>
            <div className={styles.sizingHeader}>
              <span>Pump HP</span>
              <span>Running Watts</span>
              <span>Startup Surge</span>
              <span>Recommended Generator</span>
            </div>
            {sizing.map((row) => (
              <div key={row.hp} className={styles.sizingRow}>
                <span className={styles.sizingHP}>{row.hp}</span>
                <span>{row.running}</span>
                <span>{row.startup}</span>
                <span className={styles.sizingRec}>{row.recGen}</span>
              </div>
            ))}
          </div>
          <p className={styles.sizingNote}>
            Not sure what horsepower your pump is? We can check on our service call.
            The pump nameplate is typically on the motor above the wellhead.
          </p>
        </section>

        {/* ── HURRICANE CHECKLIST ──────────────── */}
        <section className={styles.checklistSection}>
          <span className="section-label">Pre-Season Prep</span>
          <h2 className="section-title">Before Hurricane Season Checklist</h2>
          <div className={styles.checkGrid}>
            {checklist.map((c) => (
              <div key={c.item} className={styles.checkCard}>
                <div className={styles.checkMark}>✓</div>
                <div>
                  <h3 className={styles.checkItem}>{c.item}</h3>
                  <p className={styles.checkDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Generator Prep Kit FAQs</h2>
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
            <h2>Install Before Storm Season — Not During It.</h2>
            <p>
              Generator prep kits installed in 2–4 hours. $300–$800 depending on
              configuration. Don&apos;t wait until a storm is 48 hours out and
              contractors are booked solid.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                📞 (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Schedule Install
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
