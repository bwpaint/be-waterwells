import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import Icon from '../../../components/Icon';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Annual Well Maintenance Program — Houston, TX | B-E Waterwell',
  description:
    'Annual well maintenance service program in Houston, TX. Keep your well in peak condition year-round. Affordable plans for residential and rural properties. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-maintenance/ongoing-maintenance' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Ongoing Well Maintenance Program — Houston, TX',
      provider: {
        '@type': 'LocalBusiness',
        name: 'B-E Waterwell Services',
        telephone: '+1-281-448-4447',
        address: { '@type': 'PostalAddress', addressLocality: 'Magnolia', addressRegion: 'TX', postalCode: '77354' },
      },
      areaServed: 'Houston, TX',
      description: 'Annual and ongoing well maintenance program in Houston, TX. Written service records, priority scheduling, seasonal checks. TDLR licensed.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is included in annual well maintenance?',
          acceptedAnswer: { '@type': 'Answer', text: 'Annual maintenance includes: pump performance test (flow rate and motor amp draw), pressure tank pre-charge check, wellhead and casing visual inspection, water pressure and flow rate test, pressure switch calibration, visual water quality assessment, and a written report with recommendations.' },
        },
        {
          '@type': 'Question',
          name: 'How much does annual well maintenance cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Annual maintenance service visits typically run $200–$350 depending on the scope of service. Additional repairs identified during the inspection are quoted separately before any work is done. No surprise charges.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer well maintenance service contracts?',
          acceptedAnswer: { '@type': 'Answer', text: 'We offer priority scheduling and written record-keeping for annual maintenance customers. We will reach out to schedule your visit when it is due. Written service records are provided after every visit — useful for home sales and insurance claims.' },
        },
        {
          '@type': 'Question',
          name: 'How does annual maintenance affect my well equipment warranty?',
          acceptedAnswer: { '@type': 'Answer', text: 'Franklin Electric pump warranties and most pressure tank warranties require documented maintenance. Annual inspection records from a TDLR-licensed well service company support warranty claims and can extend the effective life of your equipment. An undocumented failure is often harder to warranty.' },
        },
      ],
    },
  ],
};

const included = [
  { icon: 'gear' as const, title: 'Pump Performance Test', desc: 'Flow rate measurement, motor amp draw, and start/stop pressure verification to confirm the pump is operating within spec.' },
  { icon: 'battery' as const, title: 'Pressure Tank Pre-Charge', desc: 'Check bladder integrity and air charge level. A declining pre-charge is an early warning of bladder failure before waterlogging occurs.' },
  { icon: 'search' as const, title: 'Wellhead & Casing Visual', desc: 'Inspect sanitary cap, vent screen, surface seal, and casing condition. Check for pest entry points or surface water intrusion risks.' },
  { icon: 'chart' as const, title: 'Pressure & Flow Rate Test', desc: 'Measure system pressure at multiple points, verify cut-in and cut-out settings, check for pressure loss across distribution.' },
  { icon: 'wrench' as const, title: 'Pressure Switch Calibration', desc: 'Verify and adjust cut-in and cut-out pressure settings. An out-of-spec switch causes short cycling or inadequate system pressure.' },
  { icon: 'droplet' as const, title: 'Water Quality Visual', desc: 'Assess color, clarity, and odor. Flag any obvious changes for targeted lab testing if needed. Not a full lab test.' },
  { icon: 'clipboard' as const, title: 'Written Report', desc: 'Detailed report with test results and written recommendations.' },
];

const seasons = [
  {
    season: 'Spring',
    icon: 'sprout' as const,
    tasks: [
      'Post-freeze inspection — check for cracked pressure tank or casing damage',
      'Annual water quality test (bacteria and basic chemistry)',
      'Verify generator prep kit function before hurricane season',
    ],
  },
  {
    season: 'Pre-Hurricane (May)',
    icon: 'tornado' as const,
    tasks: [
      'Pump performance test — identify any weakening before storm season',
      'Generator hookup test run under load',
      'Fuel and supply inventory check',
    ],
  },
  {
    season: 'Fall',
    icon: 'leafFall' as const,
    tasks: [
      'Pre-winter system check — pressure tank, all fittings',
      'Verify wellhead is clear of debris and vegetation',
      'Address any issues found during the year before cold weather',
    ],
  },
  {
    season: 'Annual',
    icon: 'calendar' as const,
    tasks: [
      'Full inspection per the B-E Waterwell checklist',
      'Written report of findings',
      'Recommendations for upcoming service needs',
    ],
  },
];

const faqs = [
  {
    question: 'What is included in B-E Waterwell annual maintenance?',
    answer: 'Annual maintenance covers: pump performance test (flow rate, amp draw), pressure tank pre-charge and bladder integrity check, wellhead and casing visual inspection, water pressure and flow rate measurement, pressure switch calibration, visual water quality assessment, and a written report of findings.',
  },
  {
    question: 'How much does annual well maintenance cost in the Houston area?',
    answer: 'Annual maintenance service visits run $200–$350 depending on system complexity. Any additional repairs discovered during the visit are quoted separately in writing before we do anything. No surprise charges on the invoice.',
  },
  {
    question: 'Can I set up ongoing annual maintenance with B-E Waterwell?',
    answer: 'Yes. We offer priority scheduling for customers who want an annual maintenance relationship. We maintain your service record and reach out when your visit is due. You receive written service reports after every visit — these records are valuable when selling your home and may support warranty claims on equipment.',
  },
  {
    question: 'How does documented maintenance affect my well equipment warranty?',
    answer: 'Franklin Electric pump warranties and most pressure tank manufacturer warranties are more supportable with documented maintenance records from a TDLR-licensed contractor. An undocumented failure — where the equipment shows no maintenance history — can complicate warranty claims. Annual service records create a paper trail that protects your investment.',
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

export default function OngoingMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnnouncementBar />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroGrid}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/services">Services</Link><span>/</span>
              <Link href="/services/well-maintenance">Well Maintenance</Link><span>/</span>
              <span>Ongoing Maintenance</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>Magnolia and Houston, TX Area · TDLR Licensed</span>
              <h1 className={styles.h1Line2}>Ongoing Well Maintenance</h1>
              <span className={styles.h1Line3}>Annual Service Plans · Seasonal Care · Peace of Mind</span>
            </div>
            <p className={styles.heroSubtitle}>
              Annual well maintenance is the single highest-ROI investment a Houston
              well owner can make. Catch a $40 pressure switch issue before it becomes a
              $1,200 pump failure. Written records for every visit. Priority scheduling.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447</a>
              <Link href="/contact" className="btn btn-outline">Schedule Annual Service</Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceLayout category="well-maintenance" categoryLabel="Well Maintenance" defaultService="Well Maintenance">

        <section className={styles.whySection}>
          <span className="section-label">Why Ongoing Maintenance</span>
          <h2 className="section-title">Annual Maintenance Beats Emergency Repair — Every Time</h2>
          <p className={styles.bodyP}>
            A well pump that fails suddenly costs $800–$1,800 to replace — on your
            schedule or in an emergency. Annual inspection catches the early warning signs:
            a motor drawing too many amps, a pressure tank pre-charge dropping, a pressure
            switch that is out of calibration. Addressing these individually — when they
            are small — costs far less than the cascade failure that follows when they
            are ignored.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            Written service records also protect your investment when selling your home.
            Buyers and lenders in the Houston area ask about well maintenance history.
            A documented record of annual inspections answers that question with confidence.
          </p>
        </section>

        <section className={styles.includedSection}>
          <span className="section-label">What Is Included</span>
          <h2 className="section-title">Annual Maintenance Checklist</h2>
          <div className={styles.includedGrid}>
            {included.map((item) => (
              <div key={item.title} className={styles.includedCard}>
                <span className={styles.includedIcon}><Icon name={item.icon} size={30} /></span>
                <h3 className={styles.includedTitle}>{item.title}</h3>
                <p className={styles.includedDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.seasonSection}>
          <span className="section-label">Seasonal Calendar</span>
          <h2 className="section-title">Seasonal Maintenance Calendar for the Houston area Wells</h2>
          <p className={styles.bodyP}>
            Houston&apos;s climate drives a natural maintenance calendar —
            freeze risk in January and February, hurricane season from June through November,
            and the hottest high-demand months in summer. Here is how we structure
            ongoing maintenance around your local conditions.
          </p>
          <div className={styles.seasonGrid}>
            {seasons.map((s) => (
              <div key={s.season} className={styles.seasonCard}>
                <div className={styles.seasonHeader}>
                  <span className={styles.seasonIcon}><Icon name={s.icon} size={30} /></span>
                  <h3 className={styles.seasonTitle}>{s.season}</h3>
                </div>
                <ul className={styles.seasonTasks}>
                  {s.tasks.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Annual Maintenance FAQs</h2>
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

      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Start Your Annual Maintenance Program</h2>
            <p>
              $200–$350 per annual visit. Written reports. Priority scheduling.
              Protect your well investment and simplify your home sale.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447</a>
              <Link href="/contact" className="btn btn-outline">Schedule Annual Service</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
