import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Well Pressure Tank Replacement — North Houston TX | B-E Waterwell',
  description:
    'Waterlogged pressure tank? Pump short cycling? B-E Waterwell replaces well pressure tanks same-day in North Houston TX. $400–$900 installed. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-systems/pressure-tank-systems' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Pressure Tank Replacement — North Houston TX',
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
      description: 'Well pressure tank replacement and sizing in North Houston TX. Same-day service. $400–$900 installed. Bladder and diaphragm tanks stocked.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I know if my pressure tank is waterlogged?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A waterlogged tank has lost its air cushion and is filled almost entirely with water. Signs include the pump cycling every few seconds, a tank that feels completely solid when you tap it (no hollow sound), and pressure that drops very quickly after the pump stops. You can confirm by checking the air valve — a waterlogged tank will release water instead of air.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size pressure tank do I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tank size depends on household size and water demand. A 2-bedroom home typically needs a 20-gallon tank. 3-bedroom homes need 32 gallons. 4+ bedroom homes or properties with irrigation need 44–80 gallons. We size the tank to your pump horsepower and household demand, not just square footage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do pressure tanks last in Texas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In North Houston, pressure tanks typically last 8–15 years. The humid climate and mineral-heavy water from the Jasper Aquifer can accelerate bladder wear. Tanks over 10 years old should be inspected annually, especially if you notice any pump cycling changes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I replace a pressure tank myself?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technically yes, but it is not recommended without experience. The tank must be properly sized, the pre-charge air pressure must be set before water is connected, and all connections must be pressure-tested. An improperly installed tank can cause pump short cycling, waterlogging within months, or flooding. We complete most tank replacements same-day for $400–$900 installed.',
          },
        },
      ],
    },
  ],
};

const signs = [
  { icon: '🔄', title: 'Rapid Pump Cycling', desc: 'Pump turns on and off every few seconds — the classic sign of a waterlogged or undersized tank. This rapidly wears out the motor.' },
  { icon: '💧', title: 'Waterlogged Tank', desc: 'The bladder has failed and the tank is filled with water with no air cushion. Tap the tank — no hollow sound means it is waterlogged.' },
  { icon: '🔩', title: 'Visible Corrosion or Leaks', desc: 'Rust streaks, corrosion at fittings, or dripping water around the tank base. A leaking tank needs immediate replacement.' },
  { icon: '🚿', title: 'Pressure Drops in Shower', desc: 'Dramatic pressure loss when a second fixture opens. A proper-sized tank buffers demand so pressure stays steady throughout the house.' },
  { icon: '📅', title: 'Tank Over 10 Years Old', desc: 'Even a functioning tank over 10 years old in North Houston's mineral-heavy water should be inspected — bladder failure is unpredictable.' },
];

const tankTypes = [
  {
    type: 'Bladder Tank',
    desc: 'The most common modern design. A rubber bladder inside the tank separates the air charge from the water. When the bladder fails, air and water mix and the tank becomes waterlogged. Bladder tanks are replaceable without draining the entire system.',
    pros: ['Most common residential type', 'Bladder replaceable on some models', 'Good pressure stability', 'Available in 20–120 gallon sizes'],
  },
  {
    type: 'Diaphragm Tank',
    desc: 'Similar to a bladder tank but uses a fixed diaphragm bonded to the tank shell. Very durable and resistant to waterlogging. Often preferred for commercial applications and high-demand residential systems. The diaphragm is not field-replaceable — the whole tank is replaced.',
    pros: ['Extremely durable design', 'Less prone to waterlogging', 'Good for high-cycle applications', 'Longer service life typical'],
  },
];

const sizing = [
  { size: '2 Bedroom / Small Home', tank: '20 Gallon', note: 'Light demand, 1–2 bathrooms. Minimum recommended.' },
  { size: '3 Bedroom / Average Home', tank: '32 Gallon', note: 'Standard residential. Most common replacement size.' },
  { size: '4+ Bedroom / Larger Home', tank: '44–80 Gallon', note: 'High-demand households, multiple bathrooms.' },
  { size: 'Irrigation / Horse Property', tank: '80–119 Gallon', note: 'High cycle rates require larger drawdown capacity.' },
];

const faqs = [
  {
    question: 'How do I know if my well pressure tank is waterlogged?',
    answer: 'A waterlogged tank has lost its air cushion. Signs: pump cycles every few seconds, the tank sounds completely solid when you tap it (no hollow section), and pressure drops immediately after the pump stops. You can check the air valve with a tire gauge — a waterlogged tank releases water instead of air. If your pump is cycling rapidly, assume the tank is waterlogged until proven otherwise.',
  },
  {
    question: 'What size pressure tank do I need for my well?',
    answer: 'Tank size is matched to pump horsepower and household demand. A 2-bedroom home typically needs 20 gallons. 3-bedroom homes need 32 gallons. 4+ bedroom or irrigation properties need 44–80 gallons. Undersizing a tank is the #1 cause of premature pump failure — the pump short cycles constantly trying to keep up. We calculate the correct drawdown capacity for your specific pump and household before recommending a tank.',
  },
  {
    question: 'How long do pressure tanks last in Texas heat and humidity?',
    answer: 'In North Houston, pressure tanks typically last 8–15 years. The combination of humid air around the tank exterior and mineral-heavy water from the Jasper Aquifer accelerates bladder wear. Tanks over 10 years old should be inspected annually. We check pre-charge pressure and bladder integrity on every service call.',
  },
  {
    question: 'Can I replace my pressure tank myself?',
    answer: 'It is possible but risky without experience. The replacement tank must be correctly sized, the pre-charge air pressure must be set to 2 PSI below the cut-in pressure before water is connected, the bladder must seat correctly, and all connections must be leak-tested. An incorrectly sized or installed tank can waterlog within months or cause pump damage. We complete most tank replacements in a single visit for $400–$900 installed — including proper sizing and pre-charge setup.',
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

export default function PressureTankSystemsPage() {
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
              <span>Pressure Tank Systems</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>North Houston TX — Same-Day Service</span>
              <h1 className={styles.h1Line2}>Pressure Tank Systems</h1>
              <span className={styles.h1Line3}>Replacement · Sizing · Same-Day Service</span>
            </div>
            <p className={styles.heroSubtitle}>
              Waterlogged tank? Pump short cycling every few seconds? B-E Waterwell
              replaces well pressure tanks same-day across North Houston TX.
              Correctly sized, properly pre-charged, and warrantied. $400–$900 installed.
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

        {/* ── WHAT A PRESSURE TANK DOES ────────── */}
        <section className={styles.introSection}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">What Does a Pressure Tank Do?</h2>
          <p className={styles.bodyP}>
            A pressure tank stores a reserve of pressurized water between pump cycles.
            When you open a tap, water flows from the tank first — the pump only starts
            when the tank drops below the cut-in pressure (typically 40 PSI). This means
            your pump is not running every time you wash your hands or flush a toilet.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            Without a functioning pressure tank, your pump would start and stop with
            every small water draw — a condition called short cycling. Short cycling
            is the single biggest cause of premature pump motor failure in North Houston.
            A correctly sized, properly charged pressure tank can extend pump life by years.
          </p>
        </section>

        {/* ── 5 SIGNS ──────────────────────────── */}
        <section className={styles.signsSection}>
          <span className="section-label">Warning Signs</span>
          <h2 className="section-title">5 Signs Your Pressure Tank Needs Replacement</h2>
          <div className={styles.signsGrid}>
            {signs.map((s) => (
              <div key={s.title} className={styles.signCard}>
                <span className={styles.signIcon}>{s.icon}</span>
                <h3 className={styles.signTitle}>{s.title}</h3>
                <p className={styles.signDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.signsCta}>
            Pump cycling rapidly? Don&apos;t wait — short cycling kills motors fast.{' '}
            <a href="tel:+12814484447">Call (281) 448-4447 for same-day service.</a>
          </p>
        </section>

        {/* ── TANK TYPES ───────────────────────── */}
        <section className={styles.typesSection}>
          <span className="section-label">Tank Types</span>
          <h2 className="section-title">Bladder vs. Diaphragm Pressure Tanks</h2>
          <div className={styles.typeGrid}>
            {tankTypes.map((t) => (
              <div key={t.type} className={styles.typeCard}>
                <h3 className={styles.typeTitle}>{t.type}</h3>
                <p className={styles.typeDesc}>{t.desc}</p>
                <ul className={styles.typePros}>
                  {t.pros.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SIZING GUIDE ─────────────────────── */}
        <section className={styles.sizingSection}>
          <span className="section-label">Sizing Guide</span>
          <h2 className="section-title">What Size Pressure Tank Do You Need?</h2>
          <p className={styles.bodyP}>
            Undersizing a pressure tank is the most common installation mistake. An undersized
            tank causes short cycling — the exact problem you are trying to solve. Here is a
            general guide; we calculate the correct drawdown capacity for your specific pump
            and demand before every installation.
          </p>
          <div className={styles.sizingGrid}>
            {sizing.map((row) => (
              <div key={row.size} className={styles.sizingRow}>
                <div className={styles.sizingSize}>{row.size}</div>
                <div className={styles.sizingTank}>{row.tank}</div>
                <div className={styles.sizingNote}>{row.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COST ─────────────────────────────── */}
        <section className={styles.costSection}>
          <span className="section-label">Honest Pricing</span>
          <h2 className="section-title">What Does Pressure Tank Replacement Cost?</h2>
          <p className={styles.bodyP}>
            Pressure tank replacement in North Houston TX typically runs{' '}
            <strong>$400–$900 installed</strong> — including the tank, fittings,
            pre-charge setup, and labor. Cost depends on three factors:
          </p>
          <div className={styles.costGrid}>
            {[
              { label: 'Tank Size', detail: 'Larger tanks cost more. A 20-gallon bladder tank costs less than a 44-gallon or 80-gallon diaphragm tank.' },
              { label: 'Brand & Quality', detail: 'We stock and recommend well-known brands. We do not install the cheapest tanks available — they fail faster.' },
              { label: 'Labor & Location', detail: 'Most tanks are accessible and replaced in under 2 hours. Buried or difficult-access installs take longer.' },
            ].map((f) => (
              <div key={f.label} className={styles.costCard}>
                <h3 className={styles.costLabel}>{f.label}</h3>
                <p className={styles.costDetail}>{f.detail}</p>
              </div>
            ))}
          </div>
          <p className={styles.costNote}>
            We provide free, written estimates before any work begins.
            Call <a href="tel:+12814484447">(281) 448-4447</a> or{' '}
            <Link href="/contact">use our contact form</Link>.
          </p>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Pressure Tank FAQs</h2>
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
            <h2>Pump Short Cycling? Let&apos;s Fix It Today.</h2>
            <p>
              Same-day pressure tank replacement in North Houston TX.
              $400–$900 installed. Free written estimate. TDLR licensed.
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
