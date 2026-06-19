import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Residential Water Well Services — Houston, TX | B-E Waterwell',
  description:
    'Residential well water pump repair, pressure tanks, constant pressure systems, new wells, and maintenance in Houston, TX since 1979. Franklin Electric authorized, TDLR licensed, same-day service. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/residential' },
};

const faqs = [
  {
    question: 'What are the signs my well pump is failing?',
    answer:
      'Common signs include: sudden loss of water pressure, air sputtering from faucets, the pump short-cycling (turning on and off rapidly every few seconds), unusually high electric bills, or complete loss of water. Any of these symptoms warrants an immediate inspection — a failing pump can damage your motor and pressure tank if left unaddressed.',
  },
  {
    question: 'Why does my well pump keep turning on and off?',
    answer:
      'Rapid on/off cycling — called short-cycling — is almost always caused by a waterlogged pressure tank that has lost its air charge, or a pressure switch that is set incorrectly. Occasionally it indicates a pump that can no longer maintain pressure. We diagnose this on-site and can usually resolve it the same day.',
  },
  {
    question: 'What causes low water pressure from a well?',
    answer:
      'Low pressure from a well typically points to one of four causes: a failing or undersized submersible pump, a waterlogged pressure tank, a clogged well screen or intake, or a drop in the water table (especially during dry Texas summers). Our technicians will test the system from pump to tank to identify the exact cause.',
  },
  {
    question: 'How much does well pump replacement cost in the Houston area?',
    answer:
      'Well pump replacement in the Houston area typically runs $1,200–$3,500 for a standard residential submersible pump, including parts and labor. Deeper wells (250–400 ft) or high-demand systems can run $2,500–$5,000. We provide a written estimate before any work begins.',
  },
  {
    question: 'How long does a well pump last?',
    answer:
      'A quality submersible well pump lasts 10–15 years with proper maintenance. Pumps in Houston-area wells with iron-heavy water or that short-cycle frequently may fail sooner. Regular annual inspections catch early wear before you lose water completely.',
  },
  {
    question: 'Can you repair my well pump the same day?',
    answer:
      'Yes — for most residential pump failures in the greater Houston area, we carry common pump models and parts on our service trucks and can complete same-day repairs. For 24/7 emergency service, call us directly at (281) 448-4447.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Residential Water Well Services — Houston, TX',
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
        'Residential well services for Houston-area homeowners: well water pump repair and replacement, pressure tank installation, constant pressure systems, generator prep, new well drilling, and maintenance. Franklin Electric authorized, TDLR licensed, family-owned since 1979.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

const homeownerServices = [
  {
    icon: '🏡',
    title: 'New & Replacement Wells',
    href: '/services/water-well-drilling',
    desc: 'A new residential well drilled to the Jasper or Evangeline Aquifer — permitted, cased in Schedule 40 PVC, and finished with pump and pressure tank.',
    highlights: ['Rotary rig to target aquifer', 'All permits included', '2-year workmanship warranty'],
  },
  {
    icon: '🔧',
    title: 'Well Rehabilitation',
    href: '/services/well-rehabilitation',
    desc: 'Restore a tired well producing brown, gritty, or low-yield water — well screen repair, redevelopment, and iron-bacteria treatment instead of drilling new.',
    highlights: ['Well screen repair', 'Yield restoration', 'Iron bacteria treatment'],
  },
  {
    icon: '🗓️',
    title: 'Maintenance & Inspection',
    href: '/services/well-maintenance',
    desc: 'Annual well water pump maintenance and inspection that catches early wear, keeps your warranty intact, and prevents the emergency call before it happens.',
    highlights: ['Annual pump inspection', 'Water quality testing', 'Real-estate inspections'],
  },
];

const pumpSigns = [
  {
    title: '💧 No Water at All',
    desc: 'Turned on a faucet and nothing came out? Could be a tripped breaker, failed pump, or broken pressure switch. Call us — this is a same-day emergency.',
  },
  {
    title: '📉 Sudden Low Pressure',
    desc: 'Pressure dropped overnight or after a power outage? Your pump or pressure tank may have failed. Do not wait — low pressure often means the pump is working overtime.',
  },
  {
    title: '⚡ Pump Won&apos;t Stop Running',
    desc: 'If your pump runs continuously and never shuts off, your tank&apos;s air bladder has failed or your pump can&apos;t build pressure. This will burn out your motor fast.',
  },
  {
    title: '🔄 Short Cycling',
    desc: 'A pump that clicks on and off rapidly every few seconds has a waterlogged tank. Easy fix — but ignore it and you&apos;ll burn out a $1,500 pump.',
  },
  {
    title: '💨 Air Spitting from Faucets',
    desc: 'Sputtering air mixed with water means your pump intake is near or above the water table, or you have a crack in the drop pipe. Both need immediate attention.',
  },
  {
    title: '🌊 Discolored or Gritty Water',
    desc: 'Brown, rusty, or sandy water after years of clear water often means your well screen has failed or your pump is pulling sediment. Time for an inspection.',
  },
];

const repairWhen = [
  'Pump is under 10 years old',
  'Failure is a pressure switch or capacitor',
  'Tank bladder failed (not the pump)',
  'Motor windings are intact (amperage test)',
  'Well itself is in good condition',
];

const replaceWhen = [
  'Pump is 12+ years old',
  'Motor windings have failed',
  'Pump is undersized for your household',
  'Multiple repairs in the past 2 years',
  'You want a constant pressure upgrade',
];

const pumpCosts = [
  { service: 'Pressure switch replacement', price: '$150 – $350', note: 'Parts + labor, same-day' },
  { service: 'Capacitor / control box repair', price: '$200 – $500', note: 'Common after lightning strikes' },
  { service: 'Pressure tank replacement (40 gal)', price: '$600 – $1,100', note: 'Fixes short-cycling immediately' },
  { service: 'Submersible pump replacement (< 200 ft)', price: '$1,200 – $2,200', note: 'Most common residential repair' },
  { service: 'Submersible pump replacement (200–350 ft)', price: '$1,800 – $3,500', note: 'Deeper pull, heavier equipment' },
  { service: 'Full pump + tank system replacement', price: '$2,500 – $5,000', note: 'Comprehensive system refresh' },
];

const pressureFeatures = [
  {
    title: '🔄 Rapid Pump Cycling',
    desc: 'Pump turns on and off every few seconds — the classic sign of a waterlogged or undersized tank. A correctly sized tank stops the cycling that wears out motors.',
  },
  {
    title: '💧 Waterlogged Tank',
    desc: 'The bladder has failed and the tank is full of water with no air cushion. Tap the tank — no hollow sound means it is waterlogged and due for replacement.',
  },
  {
    title: '📏 Sized to Your Home',
    desc: 'A 2-bedroom home needs ~20 gallons; 3-bedroom homes ~32; 4+ bedroom or irrigation properties 44–80 gallons. Undersizing is the #1 cause of premature pump failure.',
  },
  {
    title: '💵 $400–$900 Installed',
    desc: 'Most pressure tank replacements are completed in a single visit — tank, fittings, pre-charge setup, and labor — and immediately stop the short-cycling that kills pumps.',
  },
  {
    title: '🚿 City-Like Constant Pressure',
    desc: 'A variable frequency drive (VFD) system holds pressure within ±2–3 PSI continuously. Shower while the dishwasher runs and three irrigation zones water — no surges, no drops.',
  },
  {
    title: '⚡ 30–50% Energy Savings',
    desc: 'A VFD pump soft-starts and runs only as fast as demand requires — typically 30–50% less electricity, soft start that extends motor life, and a 3–5 year payback.',
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

export default function ResidentialHubPage() {
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
                <span>Residential Water Well Services</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Houston, TX · Since 1979</span>
                <h1 className={styles.h1Line2}>Residential Water Well Services</h1>
                <span className={styles.h1Line3}>Pump Repair · Pressure Systems · New Wells · Maintenance</span>
              </div>
              <p className={styles.heroSubtitle}>
                Everything Houston-area homeowners need from one family-owned crew —
                well water pump repair, pressure tanks, constant pressure upgrades, new
                wells, and ongoing maintenance. Franklin Electric authorized, TDLR
                licensed, same-day service available.
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
      <ServiceLayout categoryLabel="Residential" defaultService="Well Pump Repair">

        {/* ── OVERVIEW ────────────────────────── */}
        <section className={styles.overviewSection}>
          <span className="section-label">For Homeowners</span>
          <h2 className="section-title">Your Whole Well, Handled</h2>
          <p className={styles.overviewP}>
            B-E Waterwell Services has kept Houston-area homes in clean, reliable water
            since 1979. We&apos;re family-owned, TDLR licensed, and a Franklin Electric
            authorized service center — which means the same crew that drills your well
            also repairs your pump, replaces your pressure tank, and answers the phone at
            2 a.m. when the water stops.
          </p>
          <p className={styles.overviewP}>
            Whether you need fast well water pump repair, a new pressure tank to stop
            that short-cycling, a constant pressure upgrade, or a brand-new well, we quote
            every job in writing before any work begins — no surprise charges, no pressure.
          </p>
          <div className={styles.overviewStats}>
            {[
              { stat: '45+', label: 'Years Serving Houston' },
              { stat: '24/7', label: 'Emergency Dispatch' },
              { stat: 'Same-Day', label: 'Pump Service' },
              { stat: 'Franklin', label: 'Authorized Center' },
            ].map((s) => (
              <div key={s.label} className={styles.overviewStat}>
                <strong>{s.stat}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT WE DO FOR HOMEOWNERS ──────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">What We Do for Homeowners</span>
          <h2 className="section-title">Residential Well Services</h2>
          <div className={styles.subGrid}>
            {homeownerServices.map((s) => (
              <div key={s.href} className={styles.subCard}>
                <span className={styles.subIcon}>{s.icon}</span>
                <h3 className={styles.subTitle}>{s.title}</h3>
                <p className={styles.subDesc}>{s.desc}</p>
                <ul className={styles.subHighlights}>
                  {s.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Link href={s.href} className={styles.subLink}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── WELL PUMP REPAIR & REPLACEMENT ──── */}
        <section className={styles.pumpSection}>
          <span className="section-label">Well Pump Repair</span>
          <h2 className="section-title">Well Pump Repair &amp; Replacement</h2>
          <p className={styles.overviewP}>
            Lost water pressure or no water at all? B-E Waterwell Services has diagnosed
            and repaired well pumps across the Houston area for over 45 years. We carry
            most pump models on our service trucks — same-day well water pump repairs are
            available, and we dispatch 24/7. As a Franklin Electric authorized service
            center, our technicians are factory-trained to diagnose and repair Franklin
            motors and control boxes, not just replace them.
          </p>

          <h3 className="section-title">Signs Your Well Pump Needs Repair</h3>
          <div className={styles.signGrid}>
            {pumpSigns.map((s) => (
              <div key={s.title} className={styles.signCard}>
                <h3 dangerouslySetInnerHTML={{ __html: s.title }} />
                <p dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            ))}
          </div>
          <div className={styles.calloutBox}>
            <strong>Don&apos;t wait.</strong> A short-cycling pump or one running
            continuously will burn out its motor within days. Most pump failures addressed
            quickly are a repair — ones that get ignored become a full replacement.
          </div>

          <h3 className="section-title">Repair or Replace?</h3>
          <div className={styles.compareGrid}>
            <div className={styles.compareCol}>
              <h3>Repair Makes Sense When</h3>
              <ul>
                {repairWhen.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className={styles.compareCol}>
              <h3>Replacement Makes More Sense When</h3>
              <ul>
                {replaceWhen.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="section-title">Pump Repair &amp; Replacement Costs</h3>
          <div className={styles.costTable}>
            <div className={`${styles.costRow} ${styles.costRowHead}`}>
              <span>Service</span>
              <span>Typical Cost</span>
              <span>Notes</span>
            </div>
            {pumpCosts.map((c) => (
              <div key={c.service} className={styles.costRow}>
                <div className={styles.costService}>{c.service}</div>
                <div className={styles.costPrice}>{c.price}</div>
                <div className={styles.costNote}>{c.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRESSURE TANKS & CONSTANT PRESSURE ── */}
        <section className={styles.pressureSection}>
          <span className="section-label">Pressure Systems</span>
          <h2 className="section-title">Pressure Tanks &amp; Constant Pressure</h2>
          <p className={styles.overviewP}>
            A pressure tank stores a reserve of pressurized water so your pump isn&apos;t
            starting every time you wash your hands. When the tank&apos;s bladder fails,
            the pump short-cycles — the single biggest cause of premature motor failure in
            Houston&apos;s mineral-heavy water. We replace tanks same-day and, for homes
            tired of pressure swings, upgrade to a constant pressure (VFD) system that
            holds city-like pressure continuously.
          </p>
          <div className={styles.featureGrid}>
            {pressureFeatures.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GENERATOR PREP ──────────────────── */}
        <section className={styles.generatorSection}>
          <span className="section-label">Storm Season</span>
          <h2 className="section-title">Generator Prep for Storm Season</h2>
          <p className={styles.overviewP}>
            Houston isn&apos;t just hurricane country — it&apos;s ERCOT country. The
            February 2021 winter storm and Hurricane Harvey left parts of Montgomery
            County without power for over a week, and rural areas outside city water
            routinely lose power for 3–7 days in major weather events. When the grid goes
            down, your well pump stops. A generator prep kit — a transfer switch and
            properly wired generator inlet — lets you plug in a portable generator and
            restore water within minutes.
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>01 Basic Portable Hookup — $300–$600</h3>
              <p>
                Transfer switch and dedicated generator inlet receptacle wired to your
                well pump circuit. Connect your portable generator during an outage without
                back-feeding your panel. Installed in 2–4 hours.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>02 Manual Transfer Panel — $400–$800</h3>
              <p>
                A robust manual transfer panel that lets you select individual circuits —
                better if you also want to run a refrigerator or lighting from the same
                generator. Load calculation included.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>03 Whole-Home Standby — from $8,000</h3>
              <p>
                Automatic transfer switch with a natural gas or propane standby generator —
                power returns within seconds of an outage. We handle the well pump prep and
                coordinate the electrician.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>⏱️ Install Before the Storm</h3>
              <p>
                Install in spring — March through May, before June 1. Once a named storm
                approaches, contractors book up within hours. We recommend a minimum
                5,000W generator for most residential well pumps.
              </p>
            </div>
          </div>
        </section>

        {/* ── EMERGENCY CALLOUT ───────────────── */}
        <div className={styles.emergencyBlock}>
          <span className={styles.emergencyBadge}>⚡ 24/7 Emergency Dispatch</span>
          <h2>No Water? We Answer Around the Clock.</h2>
          <p>
            We maintain 24/7 dispatch coverage across all 11 Houston service areas. When
            you call after hours, you reach a technician — not an answering service. We
            target a 2-hour response in Montgomery, Harris, and Waller counties, 365 days
            a year, with common pumps, switches, and control boxes on the truck.
          </p>
          <div className={styles.emergencyStats}>
            {[
              { stat: '2 hr', label: 'Avg. Response Time' },
              { stat: '24/7', label: 'Dispatch Coverage' },
              { stat: 'Same Day', label: 'Parts On Hand' },
              { stat: '45+', label: 'Years Since 1979' },
            ].map((s) => (
              <div key={s.label} className={styles.emergencyStat}>
                <strong>{s.stat}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.emergencyBtns}>
            <a href="tel:+12814484447" className="btn btn-primary">
              📞 (281) 448-4447
            </a>
            <Link href="/contact" className="btn btn-outline">
              Free Estimate
            </Link>
          </div>
        </div>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Residential Well FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Serve</span>
          <h2 className="section-title">Residential Service Areas</h2>
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
            <h2>Need a Well Pump Repaired Today?</h2>
            <p>
              Call for a free estimate or fill out the contact form. Family-owned,
              licensed, and guaranteed — Houston&apos;s trusted water well specialists
              since 1979. 30815 Collier Smith Rd., Magnolia, TX 77354.
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
