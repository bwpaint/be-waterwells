import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '24/7 Emergency Well Service — North Houston TX | B-E Waterwell',
  description:
    'Well stopped working? B-E Waterwell Services dispatches emergency well and pump repair 24/7 across North Houston. Same-day service in Montgomery and Harris counties. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/emergency-well-services' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: '24/7 Emergency Well Service — North Houston TX',
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
        '24/7 emergency well and pump repair dispatched same-day across Montgomery and Harris counties.',
      availableChannel: {
        '@type': 'ServiceChannel',
        servicePhone: { '@type': 'ContactPoint', telephone: '+1-281-448-4447', contactType: 'emergency' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What causes a well to stop working suddenly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common causes are a tripped breaker, a failed pressure switch, a burned-out pump motor, or a blown control box. Storm damage, power surges, and frozen pipes are also frequent culprits in North Houston.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can B-E Waterwell respond to an emergency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We target a 2-hour response across all 11 service areas in Montgomery and Harris counties. We dispatch 24 hours a day, 7 days a week including holidays.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does emergency well repair cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diagnosis and minor repairs (pressure switch, control box) typically run $150–$450. Motor or pump replacement ranges from $800–$2,200 depending on horsepower and well depth. We quote every job before touching anything.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I prevent future well emergencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Annual pump inspections, a properly sized pressure tank, a surge protector on your control box, and a generator prep kit for storm season are the four most effective preventive measures.',
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: 'What causes a well to stop working suddenly?',
    answer:
      'The most common causes are a tripped breaker, a failed pressure switch, a burned-out pump motor, or a blown control box. Power surges during storms are a frequent culprit in North Houston — a single voltage spike can kill a control box instantly.',
  },
  {
    question: 'How fast can B-E Waterwell respond to an emergency?',
    answer:
      'We target a 2-hour response across all 11 service areas in Montgomery and Harris counties. We dispatch 24 hours a day, 7 days a week including weekends and holidays.',
  },
  {
    question: 'What does emergency well repair cost?',
    answer:
      'Diagnosis and minor repairs (pressure switch, control box) typically run $150–$450. Pump or motor replacement ranges from $800–$2,200 depending on horsepower and well depth. We quote in writing before any work begins — no surprise charges.',
  },
  {
    question: 'How can I prevent future well emergencies?',
    answer:
      'Annual pump inspections, a correctly sized pressure tank, a surge protector on your control box, and a generator prep kit for storm season are the four most effective steps. Ask us about our maintenance plan.',
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

export default function EmergencyWellServicesPage() {
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
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>Emergency Well Services</span>
          </nav>
          <div className={styles.urgencyBadge}>⚡ 24/7 Dispatch — We Answer Now</div>
          <div className={styles.h1Wrap}>
            <span className={styles.h1Line1}>No Water?</span>
            <h1 className={styles.h1Main}>Emergency Well Service — 24/7</h1>
          </div>
          <p className={styles.heroSubtitle}>
            Well stopped working? We dispatch same-day across all 11 North Houston
            service areas — Montgomery County, Harris County, and Waller County.
            Two-hour response target, any time, any day.
          </p>
          <div className={styles.heroBtns}>
            <a href="tel:+12814484447" className={`btn btn-primary ${styles.callBtn}`}>
              📞 Call (281) 448-4447 Now
            </a>
            <a href="#troubleshoot" className="btn btn-outline">
              What to Check First
            </a>
          </div>
        </div>
      </section>

      {/* ── BODY CONTENT inside ServiceLayout ── */}
      <ServiceLayout
        category="emergency-well-services"
        categoryLabel="Emergency Services"
        defaultService="Emergency Well Service"
      >

        {/* ── 5 THINGS TO CHECK ──────────────── */}
        <section id="troubleshoot" className={styles.checkSection}>
          <div className="container">
            <span className="section-label">Before You Call</span>
            <h2 className="section-title">5 Things to Check Before You Call</h2>
            <p className={styles.checkIntro}>
              These quick checks take under 5 minutes and sometimes restore
              your water without a service call — saving you time and money.
            </p>
            <ol className={styles.checkList}>
              {[
                {
                  n: '01',
                  title: 'Check the breaker',
                  desc: 'Locate your electrical panel and find the well pump breaker. If it has tripped to the middle position, switch it fully OFF then back ON. A single trip is usually harmless; repeat trips signal a wiring or motor problem — call us.',
                },
                {
                  n: '02',
                  title: 'Check the pressure switch',
                  desc: "Find the grey or black box on the pipe near your pressure tank. Many pressure switches have a small reset button or lever. Press it once. If pressure doesn\'t rebuild within 2–3 minutes, leave it and call — don\'t keep resetting.",
                },
                {
                  n: '03',
                  title: 'Check if you have power',
                  desc: 'A well pump won't run without electricity. Confirm other circuits in your house are live. After a storm, your meter base or main disconnect may have tripped — check with your power company before assuming pump failure.',
                },
                {
                  n: '04',
                  title: 'Check for visible damage',
                  desc: 'Walk to your wellhead and pressure tank. Look for cracked pipes, water pooling around the tank, or frost (in rare winter freezes). If you see water actively spraying or a burst pipe, shut off the breaker and call immediately.',
                },
                {
                  n: '05',
                  title: 'Listen for the pump',
                  desc: 'With the breaker on, open a faucet and listen near the pressure tank. A humming sound with no water usually means the motor is running but the pump is cavitating or the check valve has failed. No sound at all usually means electrical failure.',
                },
              ].map((item) => (
                <li key={item.n} className={styles.checkItem}>
                  <div className={styles.checkNum}>{item.n}</div>
                  <div className={styles.checkBody}>
                    <h3 className={styles.checkTitle}>{item.title}</h3>
                    <p className={styles.checkDesc}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── WHEN TO CALL IMMEDIATELY ─────────── */}
        <section className={styles.callNowSection}>
          <div className="container">
            <div className={styles.callNowGrid}>
              <div className={styles.callNowCard}>
                <h2 className={styles.callNowH2}>
                  Signs of Pump Failure — Call Us Now
                </h2>
                <ul className={styles.callNowList}>
                  {[
                    'Breaker trips immediately when reset',
                    'Pump hums but no water flows',
                    'Well ran dry (pump pulling sand or air)',
                    'Burning smell from control box',
                    'Pressure gauge stuck at zero after breaker reset',
                    'Water has suddenly turned brown or gritty',
                    'Storm or lightning strike near wellhead',
                  ].map((item) => (
                    <li key={item} className={styles.callNowLi}>
                      <span className={styles.callNowDot} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:+12814484447" className={`btn btn-primary ${styles.callNowBtn}`}>
                  📞 Call Now — (281) 448-4447
                </a>
              </div>
              <div className={styles.simpleFixCard}>
                <h2 className={styles.simpleFixH2}>
                  Possible Simple Fix — Try These First
                </h2>
                <ul className={styles.simpleFixList}>
                  {[
                    'Single breaker trip (no repeat trips)',
                    'Pressure switch reset button fixes it',
                    'Power outage affecting whole neighborhood',
                    'Low pressure only when using sprinklers simultaneously',
                    'Air spurts from faucet for first few seconds',
                  ].map((item) => (
                    <li key={item} className={styles.simpleFixLi}>
                      <span className={styles.simpleFixDot} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.simpleFixNote}>
                  Even on simple fixes: if the problem recurs within 48 hours,
                  call us for a full diagnostic before it becomes a bigger repair.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESPONSE TIME ────────────────────── */}
        <section className={styles.responseSection}>
          <div className="container">
            <span className="section-label">Response Time</span>
            <h2 className="section-title">We Respond Within 2 Hours</h2>
            <p className={styles.responseIntro}>
              We maintain 24/7 dispatch coverage across all 11 North Houston
              service areas. When you call after hours, you reach a technician —
              not an answering service.
            </p>
            <div className={styles.responseGrid}>
              {[
                { stat: '2 hr', label: 'Average response time', sub: 'All service areas' },
                { stat: '24/7', label: 'Dispatch coverage', sub: '365 days a year' },
                { stat: 'Same Day', label: 'Parts on hand', sub: 'Common pumps, switches, control boxes' },
                { stat: '45+', label: 'Years serving North Houston', sub: 'Since 1979' },
              ].map((s) => (
                <div key={s.label} className={styles.responseStat}>
                  <div className={styles.responseStatNum}>{s.stat}</div>
                  <div className={styles.responseStatLabel}>{s.label}</div>
                  <div className={styles.responseStatSub}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT'S COVERED ───────────────────── */}
        <section className={styles.coveredSection}>
          <div className="container">
            <span className="section-label">Emergency Services</span>
            <h2 className="section-title">What Emergency Repair Covers</h2>
            <div className={styles.coveredGrid}>
              {[
                { icon: '🔍', title: 'Pump Diagnosis', desc: 'Full electrical and mechanical diagnosis to pinpoint the failure before any repair begins. Written findings every time.' },
                { icon: '⚙️', title: 'Motor Replacement', desc: 'Franklin Electric and compatible submersible motors — pulled and replaced same day when stock allows.' },
                { icon: '🔧', title: 'Pressure Switch', desc: 'New pressure switch installation with properly calibrated cut-in and cut-out pressure settings.' },
                { icon: '📦', title: 'Control Box', desc: 'Control box replacement for single-phase and three-phase systems. Surge-protected replacements available.' },
                { icon: '⚡', title: 'Electrical Troubleshooting', desc: 'Wire testing from breaker to pump head, splice repair, and motor lead replacement.' },
                { icon: '🚚', title: 'Same-Day Parts', desc: 'We stock the most common pump sizes and components — no waiting a week for parts to arrive.' },
              ].map((item) => (
                <div key={item.title} className={styles.coveredCard}>
                  <span className={styles.coveredIcon}>{item.icon}</span>
                  <h3 className={styles.coveredTitle}>{item.title}</h3>
                  <p className={styles.coveredDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORM / GENERATOR PREP ───────────── */}
        <section className={styles.stormSection}>
          <div className="container">
            <div className={styles.stormInner}>
              <div className={styles.stormText}>
                <span className="section-label">Storm Season Prep</span>
                <h2 className="section-title">
                  Don&apos;t Wait for the Next Power Outage
                </h2>
                <p>
                  Hurricane season and North Houston ice storms knock out grid power
                  for days at a time. A generator prep kit keeps your well pump
                  running even when the lights are out — no extension cords,
                  no unsafe workarounds.
                </p>
                <p style={{ marginTop: 14 }}>
                  We install a properly wired transfer switch that lets you connect
                  a portable or standby generator to your well pump circuit safely
                  and legally. It&apos;s the single best investment for avoiding
                  an emergency call after a storm.
                </p>
                <Link
                  href="/services/water-well-systems/generator-prep-kits"
                  className={`btn btn-dark ${styles.stormBtn}`}
                >
                  Learn About Generator Prep Kits →
                </Link>
              </div>
              <div className={styles.stormStats}>
                <div className={styles.stormStat}>
                  <div className={styles.stormStatNum}>72 hrs</div>
                  <div className={styles.stormStatLabel}>Average outage after a major Gulf storm</div>
                </div>
                <div className={styles.stormStat}>
                  <div className={styles.stormStatNum}>$0</div>
                  <div className={styles.stormStatLabel}>Extra emergency call cost with generator prep installed</div>
                </div>
                <div className={styles.stormStat}>
                  <div className={styles.stormStatNum}>1 Day</div>
                  <div className={styles.stormStatLabel}>Installation time for transfer switch kit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <div className="container">
            <span className="section-label">Common Questions</span>
            <h2 className={`section-title ${styles.faqH2}`}>Emergency Well Service FAQs</h2>
            <CityFaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* ── SERVICE AREAS ────────────────────── */}
        <section className={styles.areasSection}>
          <div className="container">
            <span className="section-label">Where We Respond</span>
            <h2 className="section-title">Emergency Service Areas</h2>
            <p className={styles.areasNote}>
              24/7 emergency well service across North Houston — 2-hour response target.
            </p>
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
          </div>
        </section>

      </ServiceLayout>

      {/* ── FINAL CTA ─── full-width, outside grid ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <div className={styles.finalCtaUrgency}>⚡ 24 / 7 Emergency Dispatch</div>
          <h2 className={styles.finalCtaH2}>No Water? Call Now.</h2>
          <a href="tel:+12814484447" className={`btn btn-primary ${styles.finalCtaPhone}`}>
            (281) 448-4447
          </a>
          <p className={styles.finalCtaSub}>
            We answer around the clock — not an answering service, a technician.
            North Houston&apos;s emergency well specialists since 1979.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
