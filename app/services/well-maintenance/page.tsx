import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Maintenance & Inspection — Houston, TX | B-E Waterwell Services',
  description:
    'Annual water well maintenance and well inspection in Houston, TX — for home buyers, FHA/VA/USDA loans, and well owners. Rehabilitation referral. TDLR licensed since 1979. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-maintenance' },
};

const faqs = [
  {
    question: 'How often should a water well be inspected and serviced in the Houston area?',
    answer:
      'Annual inspection is recommended for residential wells, and at minimum every 3 years. In Houston, the humid climate and mineral-heavy Jasper Aquifer water accelerate equipment wear, so consistent well water pump maintenance pays off. Pre-hurricane season pump checks are also wise — discovering a weak pump in April is far better than discovering it in August when your power is out.',
  },
  {
    question: 'What does a water well inspection include?',
    answer:
      'Our inspection covers visual inspection of the wellhead and casing (sanitary cap, vent screen, setback from structures), a pump performance test (flow rate and motor amp draw), a pressure system check (tank pre-charge, switch calibration), a water quality sample collection, and a written report with photos. For FHA/VA/USDA requirements, we test for bacteria and nitrates as required by the applicable program.',
  },
  {
    question: 'Can I set up an ongoing annual maintenance plan with B-E Waterwell?',
    answer:
      'Yes. We offer priority scheduling for customers who want an annual maintenance relationship. We maintain your service record and reach out when your visit is due. You receive written service reports after every visit — these records are valuable when selling your home and may support warranty claims on equipment.',
  },
  {
    question: 'How much does well inspection and annual maintenance cost?',
    answer:
      'Pricing depends on your location, well depth, static water level, and equipment selection — call us to discuss your project.',
  },
  {
    question: 'What happens if my well fails inspection?',
    answer:
      'We provide a written summary of all issues found and what remediation is recommended. Many issues are fixable — a waterlogged pressure tank, a failing pump, or a water quality treatment system. We quote remediation separately so buyers and sellers have clear information for negotiations. Not all "failures" mean a new well.',
  },
  {
    question: 'How does documented maintenance affect my well equipment warranty and home sale?',
    answer:
      'Franklin Electric pump warranties and most pressure tank warranties are more supportable with documented maintenance records from a TDLR-licensed contractor. Written service records also protect your investment when selling — buyers and lenders in the Houston area ask about well maintenance history, and a documented record of annual inspections answers that with confidence.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Water Well Maintenance & Inspection — Houston, TX',
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
        'Annual water well maintenance, well water pump maintenance, and certified well inspection for home buyers, real estate transactions, and FHA/VA/USDA loans across the Houston area. TDLR licensed, serving Houston since 1979.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    },
  ],
};

const checklist = [
  { icon: '⚙️', item: 'Pump Performance Test', detail: 'Flow rate, motor amp draw, and start/stop pressure verification to confirm the pump is operating within spec.' },
  { icon: '🔋', item: 'Pressure Tank Pre-Charge', detail: 'Check bladder integrity and air charge level. A declining pre-charge is an early warning of bladder failure before waterlogging occurs.' },
  { icon: '🔍', item: 'Wellhead & Casing Visual', detail: 'Inspect sanitary cap, vent screen, surface seal, and casing condition. Check for pest entry points or surface water intrusion risks.' },
  { icon: '📊', item: 'Pressure & Flow Rate Test', detail: 'Measure system pressure at multiple points, verify cut-in and cut-out settings, and check for pressure loss across distribution.' },
  { icon: '🔧', item: 'Pressure Switch Calibration', detail: 'Verify and adjust cut-in and cut-out pressure settings. An out-of-spec switch causes short cycling or inadequate system pressure.' },
  { icon: '💧', item: 'Water Quality Visual', detail: 'Assess color, clarity, and odor. Flag any changes from prior visits for targeted lab testing if needed.' },
];

const costCompare = [
  { type: 'Annual Preventive Maintenance', outcome: 'Catch problems early, extend equipment life 3–5 years, and maintain water quality.' },
  { type: 'Emergency Pump Replacement', outcome: 'Unplanned, urgent, often includes overtime. Could have been prevented with regular inspection.' },
  { type: 'Emergency System Repair', outcome: 'Multiple component failures when one issue was ignored. The highest-cost outcome.' },
];

const inspectionSituations = [
  { icon: '🏠', title: 'Home Buyers', desc: 'Purchasing a property with a private well? A pre-purchase inspection gives you an independent assessment of the well system — pump condition, water quality, and pressure performance.' },
  { icon: '📋', title: 'Sellers Pre-Listing', desc: 'A pre-listing well inspection lets you address issues before they become closing surprises. Buyers and agents appreciate documented inspection history.' },
  { icon: '🔄', title: 'Annual Owners', desc: 'Current well owners benefit from annual or every-3-year inspection to catch issues early — pump wear, water quality changes, and pressure tank decline.' },
  { icon: '🏦', title: 'FHA / VA / USDA Borrowers', desc: 'Government-backed loans require a functioning well inspection and water quality test meeting minimum distance requirements. We are familiar with all applicable requirements.' },
  { icon: '🏘️', title: 'Real Estate Agents', desc: 'Houston realtors rely on our fast turnaround inspection reports to keep transactions on track. We know what lenders need and deliver it quickly.' },
];

const inspectionCovers = [
  { item: 'Wellhead & casing visual', detail: 'Vent screen, sanitary cap, surface seal, setback from septic' },
  { item: 'Pump performance test', detail: 'Flow rate (GPM), pressure output, motor amp draw' },
  { item: 'Recovery rate assessment', detail: 'How quickly the water level recovers after pumping' },
  { item: 'Pressure system check', detail: 'Tank pre-charge, pressure switch calibration, cut-in/cut-out settings' },
  { item: 'Water quality sample', detail: 'Collected for lab analysis — bacteria, nitrates, and basic chemistry' },
  { item: 'Written report with photos', detail: 'Delivered within 24 hours of site visit, formatted for lenders' },
];

const seasonalCalendar = [
  {
    season: 'Spring 🌱',
    items: [
      'Post-freeze inspection — check for cracked pressure tank or casing damage',
      'Annual water quality test (bacteria and basic chemistry)',
      'Verify generator prep kit function before hurricane season',
    ],
  },
  {
    season: 'Pre-Hurricane (May) ⚡',
    items: [
      'Pump performance test — identify any weakening before storm season',
      'Generator hookup test run under load',
      'Fuel and supply inventory check',
    ],
  },
  {
    season: 'Fall 🍂',
    items: [
      'Pre-winter system check — pressure tank, all fittings',
      'Verify wellhead is clear of debris and vegetation',
      'Address any issues found during the year before cold weather',
    ],
  },
  {
    season: 'Annual 📅',
    items: [
      'Full inspection per the B-E Waterwell checklist',
      'Written report with photos and prior-year comparison',
      'Recommendations for upcoming service needs',
    ],
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
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Water Well Maintenance & Inspection', path: '/services/well-maintenance' }]} />

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
                <span>Water Well Maintenance &amp; Inspection</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Houston, TX · Since 1979</span>
                <h1 className={styles.h1Line2}>Water Well Maintenance &amp; Inspection</h1>
                <span className={styles.h1Line3}>Annual Service · Inspections · Real-Estate &amp; FHA/VA</span>
              </div>
              <p className={styles.heroSubtitle}>
                Wells last 20–40 years with proper care — or 10–15 without it. B-E Waterwell
                provides annual well water pump maintenance, certified well inspections for
                home buyers and FHA/VA/USDA loans, and ongoing seasonal care across
                Houston, TX. TDLR licensed.
              </p>
              <div className={styles.heroBtns}>
                <a href="tel:+12814484447" className="btn btn-primary">
                  📞 (281) 448-4447
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceLayout
        category="well-maintenance"
        categoryLabel="Well Maintenance"
        defaultService="Well Maintenance"
      >

        {/* ── OVERVIEW ────────────────────────── */}
        <section className={styles.overviewSection}>
          <span className="section-label">Why Maintenance Matters</span>
          <h2 className="section-title">Maintained Wells Last Twice as Long</h2>
          <p className={styles.overviewP}>
            Routine maintenance can catch pump wear and early problems before you lose
            water. Over time, wells need to be maintained to keep optimal performance.
            A residential waterwell with annual inspection and proper maintenance
            regularly achieves 25–40 years of service. Neglected wells — where problems
            go undetected — often fail at 10–15 years, requiring expensive emergency
            repairs or full replacement.
          </p>
          <p className={styles.overviewP}>
            In Houston, the Jasper Aquifer water is mineral-heavy with iron content that
            accelerates pump wear and can cause biofouling in aging wells. Annual
            monitoring catches these conditions early, when they are treatable rather than
            catastrophic.
          </p>
          <div className={styles.overviewStats}>
            {[
              { stat: '25–40 yr', label: 'Maintained Lifespan' },
              { stat: 'Annual', label: 'Inspection Saves on Repairs' },
              { stat: '45+', label: 'Years Serving Houston' },
              { stat: 'TDLR', label: 'Licensed' },
            ].map((s) => (
              <div key={s.label} className={styles.overviewStat}>
                <strong>{s.stat}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHECKLIST ────────────────────────── */}
        <section className={styles.checkSection}>
          <span className="section-label">What We Check</span>
          <h2 className="section-title">The B-E Maintenance Checklist</h2>
          <p className={styles.bodyP}>
            Every maintenance visit follows a documented checklist. You receive a written
            report with findings, photos, test results, and prior-visit comparison after
            every call.
          </p>
          <div className={styles.checkGrid}>
            {checklist.map((c) => (
              <div key={c.item} className={styles.checkCard}>
                <div className={styles.checkIcon}>{c.icon}</div>
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
                <div className={styles.costOutcome}>{row.outcome}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WELL INSPECTIONS ─────────────────── */}
        <section className={styles.inspectSection}>
          <span className="section-label">Well Inspections</span>
          <h2 className="section-title">Certified Well Inspection — Buyers, Sellers &amp; Lenders</h2>
          <p className={styles.bodyP}>
            Buying a home with a well? Closing an FHA or VA loan? Need an annual well
            checkup? B-E Waterwell provides certified well inspections with written reports
            accepted by lenders and real estate agents across Houston, TX.
          </p>

          <h3 className={styles.subHead}>Five Situations That Call for a Well Inspection</h3>
          <div className={styles.subGrid}>
            {inspectionSituations.map((s) => (
              <div key={s.title} className={styles.subCard}>
                <span className={styles.subIcon}>{s.icon}</span>
                <h4 className={styles.subTitle}>{s.title}</h4>
                <p className={styles.subDesc}>{s.desc}</p>
              </div>
            ))}
          </div>

          <h3 className={styles.subHead}>What Our Inspection Covers</h3>
          <div className={styles.checkGrid}>
            {inspectionCovers.map((c) => (
              <div key={c.item} className={styles.checkCard}>
                <div className={styles.checkIcon}>✓</div>
                <div>
                  <h4 className={styles.checkItem}>{c.item}</h4>
                  <p className={styles.checkDetail}>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.calloutBox}>
            <h3 className={styles.calloutTitle}>FHA, VA &amp; USDA Loan Well Requirements</h3>
            <p className={styles.calloutP}>
              FHA, VA, and USDA Rural Development loans all require that wells meet minimum
              distance requirements from potential contamination sources — typically 50 feet
              from a septic tank and 100 feet from a drain field — and that the water meets
              minimum bacteriological and chemical quality standards.
            </p>
            <p className={styles.calloutP}>
              Our inspection report documents wellhead location, setback distances, pump
              performance, and water quality lab results — the data package your lender&apos;s
              appraiser needs to satisfy the well-related conditions of your loan. We know
              what each program requires and make sure we capture it.
            </p>
            <p className={styles.calloutTip}>
              <strong>Tip for buyers:</strong> Schedule your well inspection at the same time
              as your general home inspection — not after the appraisal comes back. Lab
              results take 3–5 business days, and you do not want them on the critical path to
              closing.
            </p>
          </div>
        </section>

        {/* ── ONGOING MAINTENANCE & SEASONAL CARE ─ */}
        <section className={styles.seasonSection}>
          <span className="section-label">Ongoing Care</span>
          <h2 className="section-title">Ongoing Maintenance &amp; Seasonal Care</h2>
          <p className={styles.bodyP}>
            Annual well maintenance is the single highest-ROI investment a Houston well owner
            can make — catch a small pressure switch issue before it becomes a major pump
            failure. Houston&apos;s climate drives a natural maintenance calendar: freeze risk
            in January and February, hurricane season June through November, and the hottest
            high-demand months in summer.
          </p>
          <div className={styles.seasonGrid}>
            {seasonalCalendar.map((s) => (
              <div key={s.season} className={styles.seasonCard}>
                <h3 className={styles.seasonTitle}>{s.season}</h3>
                <ul className={styles.seasonList}>
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CROSS-LINKS ──────────────────────── */}
        <section className={styles.crossLinkSection}>
          <p className={styles.crossLinkP}>
            If an inspection finds declining yield, brown water, or biofouling, see our{' '}
            <Link href="/services/well-rehabilitation">water well rehabilitation</Link>{' '}
            service — we can often restore flow without drilling new. For pump, pressure tank,
            and constant-pressure repairs, visit our{' '}
            <Link href="/services/residential">residential water well services</Link>.
          </p>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Well Maintenance &amp; Inspection FAQs</h2>
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
            <h2>Schedule Your Well Maintenance or Inspection</h2>
            <p>
              Annual maintenance, certified inspections for home buyers and FHA/VA loans,
              and written service records. TDLR licensed. Serving Houston
              since 1979.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                📞 (281) 448-4447
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
