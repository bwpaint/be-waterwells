import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Drilling & Installation — Houston, TX | B-E Waterwell',
  description:
    'Water well drilling contractors in Houston, TX since 1979. New residential wells, full installation, irrigation, and commercial drilling. TDLR Licensed. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-drilling' },
};

const faqs = [
  {
    question: 'How deep are water wells drilled in the Houston area?',
    answer:
      'Depth depends on your county and target aquifer. Montgomery County wells typically reach the Jasper Aquifer at 180–320 ft. Harris County NW wells access the Chicot/Jasper at 180–360 ft. Harris County East (Humble, Kingwood) wells reach the Evangeline at 240–440 ft. Waller County wells run 160–300 ft. We assess every property and quote the actual depth we expect to drill.',
  },
  {
    question: 'How long does the entire new well installation take?',
    answer:
      'Start to finish — including permit — typically runs 1–2 weeks. Permit approval from LSGCD or HGSD usually takes 5–10 business days. Once the permit is in hand, drilling and full system installation is completed in 1–2 days on-site. Commercial or large agricultural wells may take 2–3 days to drill.',
  },
  {
    question: 'Do I need a permit to drill a water well in Texas?',
    answer:
      'Yes. All new wells require a permit from your Groundwater Conservation District. In Montgomery County that is the Lone Star GCD (LSGCD). In most of Harris County it is the Harris-Galveston Subsidence District (HGSD). B-E Waterwell handles all permitting on your behalf — we file the application, pay the fee, and track approval.',
  },
  {
    question: 'What exactly is included in my new well installation?',
    answer:
      'Every well includes: rotary rig drilling, geological log, Schedule 40 PVC casing, gravel pack, stainless screen, full well development, a Franklin Electric submersible pump and motor, drop pipe, pitless adapter, pressure tank, pressure switch and gauge, main shut-off, electrical wiring at the wellhead, all GCD permits, the driller&apos;s completion report, and an initial water quality test.',
  },
  {
    question: 'How much does water well drilling cost in Houston, TX?',
    answer:
      'A complete residential well — drill, case, pump, pressure tank, and permits — typically runs $8,000–$18,000 in the Houston area. The main cost drivers are depth (more feet = more casing and drilling time), casing diameter, and pump horsepower. We provide free, itemized written estimates before any work begins.',
  },
  {
    question: 'Why should I choose B-E Waterwell for well drilling?',
    answer:
      'We have drilled over 5,000 wells across the Houston area since 1979 and back every well with a 2-year workmanship warranty. Every well we drill is permitted, cased in Schedule 40 PVC, gravel-packed, and developed before the pump is set. We don&apos;t cut corners — your water supply is not the place to save $200 and regret it in 5 years.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Water Well Drilling & Installation — Houston, TX',
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
        'Rotary rig water well drilling and complete installation for residential, irrigation, and commercial properties across the Houston area. TDLR licensed, 45+ years experience, 2-year workmanship warranty.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer.replace(/&apos;/g, "'"),
        },
      })),
    },
  ],
};

const included = [
  {
    icon: '🔧',
    title: 'Rotary Rig Drilling',
    desc: 'Truck-mounted rotary rig drilled to your target aquifer with a complete geological log for your records.',
  },
  {
    icon: '🪛',
    title: 'PVC Casing & Screen',
    desc: 'Schedule 40 PVC casing with gravel pack and properly placed stainless screen for long-term performance.',
  },
  {
    icon: '💧',
    title: 'Well Development',
    desc: 'Full aquifer development to clear drilling fluids, remove fines, and maximize sustainable production yield.',
  },
  {
    icon: '⚙️',
    title: 'Submersible Pump & Motor',
    desc: 'Franklin Electric submersible pump and motor sized to your household demand — installed and wired at the wellhead.',
  },
  {
    icon: '🔋',
    title: 'Pressure Tank',
    desc: 'Correctly sized pressure tank with pressure switch, gauge, and main shut-off for reliable system pressure.',
  },
  {
    icon: '📋',
    title: 'Permits & Water Test',
    desc: 'All GCD permits, the driller’s completion report, and an initial bacteriological and basic water quality test.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Site Assessment',
    desc: 'We visit your property, review county geology records, and identify the best drill location before quoting.',
  },
  {
    num: '02',
    title: 'Permit Application',
    desc: 'We file with your Groundwater Conservation District (LSGCD or HGSD). Approval typically takes 5–10 business days.',
  },
  {
    num: '03',
    title: 'Drilling Day',
    desc: 'Our rotary rig mobilizes to your site. We drill to aquifer depth, set casing, and develop the well — usually completed same day.',
  },
  {
    num: '04',
    title: 'Pump & Tank',
    desc: 'Submersible pump, drop pipe, pressure tank, and all surface equipment installed and connected to your home’s electrical.',
  },
  {
    num: '05',
    title: 'Final Inspection',
    desc: 'System pressure test, water quality sample collected, completion paperwork signed. Your well is live.',
  },
];

const aquifers = [
  { county: 'Montgomery County', range: '180–320 ft', aquifer: 'Jasper Aquifer', notes: 'LSGCD regulated. Sandy loam soils. Reliable yields for residential and ag use.' },
  { county: 'Harris County (NW)', range: '180–360 ft', aquifer: 'Chicot / Jasper', notes: 'HGSD regulated. Tomball, Spring, Cypress corridor. Good residential yield.' },
  { county: 'Harris County (East)', range: '240–440 ft', aquifer: 'Evangeline Aquifer', notes: 'Humble, Kingwood area. Deeper wells required. Iron and sulfur treatment common.' },
  { county: 'Waller County', range: '160–300 ft', aquifer: 'Trinity Group', notes: 'LSGCD / BVGCD regulated. Sandy coastal plains. Farm and ranch applications.' },
];

const costDrivers = [
  {
    title: 'Depth',
    desc: 'More footage means more casing and more drilling time. Expect higher costs in Harris County East where aquifers are deeper.',
  },
  {
    title: 'Casing Diameter',
    desc: 'Standard residential wells use 6" casing. Higher-demand applications may require 8" or larger casing.',
  },
  {
    title: 'Pump Specification',
    desc: 'Pump sizing is matched to your household demand and static water level. Larger homes may need higher horsepower.',
  },
];

const related = [
  {
    icon: '🏡',
    title: 'Residential Water Well Services',
    slug: '/services/residential',
    desc: 'Pump repair, pressure tanks, constant pressure upgrades, and complete system service for Houston-area homeowners.',
  },
  {
    icon: '🏗️',
    title: 'Commercial Water Well Services',
    slug: '/services/commercial',
    desc: 'High-capacity wells for ranches, farms, equestrian properties, nurseries, and commercial sites across the Houston area.',
  },
  {
    icon: '🛠️',
    title: 'Maintenance & Inspection',
    slug: '/services/well-maintenance',
    desc: 'Annual inspection, well rehabilitation, and ongoing care that keeps your well running for decades, not years.',
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
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/services">Services</Link>
                <span>/</span>
                <span>Water Well Drilling &amp; Installation</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Houston, TX · Since 1979</span>
                <h1 className={styles.h1Line2}>Water Well Drilling &amp; Installation</h1>
                <span className={styles.h1Line3}>Residential · Irrigation · Commercial · Full Installation</span>
              </div>
              <p className={styles.heroSubtitle}>
                45+ years of rotary rig drilling across Montgomery, Harris, and Waller
                counties. As experienced water well drilling contractors, we drill to
                depth, case it right, and stand behind every well with a 2-year
                workmanship warranty. TDLR Licensed.
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
          <h2 className="section-title">Water Well Drilling &amp; Installation in Houston, TX</h2>
          <p className={styles.overviewP}>
            B-E Waterwell Services uses truck-mounted rotary drilling rigs to reach the
            Jasper, Chicot, and Evangeline Aquifers beneath Houston&apos;s sandy
            coastal plains. Every well we drill is permitted, cased in Schedule 40 PVC,
            gravel-packed, and fully developed before the pump is set.
          </p>
          <p className={styles.overviewP}>
            Whether you need new residential well drilling in Magnolia, an irrigation
            well on a Waller County acreage property, or a high-capacity commercial well
            in Conroe — the process is the same: we assess your site, pull the permit,
            drill to the right aquifer, and finish the job in writing with a workmanship
            warranty. We don&apos;t cut corners because your water supply is not the
            place to save $200 and regret it in 5 years.
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

        {/* ── EVERYTHING INCLUDED ─────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">Water Well Installation</span>
          <h2 className="section-title">Everything Included in Every New Well</h2>
          <p className={styles.overviewP}>
            A new waterwell from B-E Waterwell is not a drill hole with a pump dropped
            in. Every new well drilling job in Houston, TX includes a complete,
            code-compliant installation — from rotary rig to final water test.
          </p>
          <div className={styles.subGrid}>
            {included.map((item) => (
              <div key={item.title} className={styles.subCard}>
                <span className={styles.subIcon}>{item.icon}</span>
                <h3 className={styles.subTitle}>{item.title}</h3>
                <p className={styles.subDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ─────────────────────────── */}
        <section className={styles.processSection}>
          <span className="section-label">Step by Step</span>
          <h2 className="section-title">From Permit to First Drop of Water</h2>
          <div className={styles.processList}>
            {steps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.stepNum}>{step.num}</span>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── AQUIFER TABLE ───────────────────── */}
        <section className={styles.aquiferSection}>
          <span className="s