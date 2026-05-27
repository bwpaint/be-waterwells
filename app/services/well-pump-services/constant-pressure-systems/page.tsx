import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Constant Pressure Well Systems — Houston, TX | B-E Waterwell',
  description:
    'Upgrade your well to city-like constant pressure. Variable speed pump systems installed across Houston, TX. Eliminates pressure fluctuation. Free estimate. (281) 448-4447.',
  alternates: {
    canonical: 'https://bewaterwells.com/services/well-pump-services/constant-pressure-systems',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Constant Pressure Well Systems — Houston, TX',
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
        'Variable frequency drive (VFD) constant pressure well systems — city-like pressure for homes and properties on private wells.',
      offers: {
        '@type': 'Offer',
        priceRange: '$1,800 – $3,500',
        description: 'Complete constant pressure system installation. Free estimate.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need a new pressure tank with a constant pressure system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'With a constant pressure (VFD) system the pressure tank can be dramatically smaller — as small as 2–4 gallons — because the pump speed modulates continuously to maintain set pressure. Your existing large tank can remain as a buffer but is not required.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a constant pressure system work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A variable frequency drive (VFD) controller monitors your water pressure many times per second and adjusts the pump motor speed to match your exact demand. When you open two faucets, it speeds up. When you close one, it slows down. Pressure stays within 2 PSI of your set point at all times.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a constant pressure system work with irrigation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — this is one of the most popular reasons homeowners upgrade. When irrigation zones activate, the VFD pump ramps up to maintain pressure instead of letting household pressure crash. You can run irrigation and a shower simultaneously without either suffering.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will it save money on my electric bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In most cases yes. A standard well pump runs at 100% speed until pressure builds, then shuts off entirely — cycling on and off repeatedly. A VFD pump runs slower when demand is low, consuming 30–50% less electricity during off-peak hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to a constant pressure system during a power outage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The pump stops when power is lost — the same as any well pump. The small pressure tank holds a brief reserve. For backup power, we recommend pairing the system with a generator prep kit.',
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: 'Do I need a new pressure tank with a constant pressure system?',
    answer:
      'With a VFD constant pressure system the pressure tank can be dramatically smaller — as little as 2–4 gallons — because the pump modulates continuously. Your existing large tank can remain as a buffer, but it\'s not required for the system to function correctly.',
  },
  {
    question: 'How does a constant pressure system work?',
    answer:
      'A variable frequency drive (VFD) controller monitors your water pressure many times per second and adjusts pump motor speed to match your exact demand. Two faucets open? It speeds up. One closes? It slows down. Pressure stays within 2 PSI of your set point.',
  },
  {
    question: 'Does a constant pressure system work with irrigation?',
    answer:
      'Yes — and this is one of the top reasons homeowners upgrade. When irrigation zones activate, the VFD ramps up to maintain pressure instead of letting household pressure drop. You can run irrigation and shower simultaneously without either suffering.',
  },
  {
    question: 'Will it save money on my electric bill?',
    answer:
      'In most cases yes. A standard pump cycles on at full speed and shuts off when the tank pressurizes — wasteful and hard on the motor. A VFD pump runs slower when demand is low, consuming 30–50% less electricity in typical residential use.',
  },
  {
    question: 'What happens during a power outage?',
    answer:
      'The pump stops when power is lost — same as any well pump. The small buffer tank holds a brief reserve. For full backup, we recommend pairing your constant pressure system with a generator prep kit so your pump runs even during extended outages.',
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

export default function ConstantPressureSystemsPage() {
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
            <Link href="/services/well-pump-services">Well Pump Services</Link>
            <span>/</span>
            <span>Constant Pressure Systems</span>
          </nav>
          <div className={styles.h1Wrap}>
            <span className={styles.h1Label}>Well Pump Services</span>
            <h1 className={styles.h1Main}>Constant Pressure Well Systems</h1>
            <span className={styles.h1Sub}>City-Like Pressure · No Fluctuation · 30–50% Energy Savings</span>
          </div>
          <p className={styles.heroSubtitle}>
            Tired of pressure drops every time someone flushes or a sprinkler
            zone kicks on? A variable frequency drive (VFD) constant pressure
            system solves that permanently — and usually pays back in energy
            savings within 3–5 years.
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
      </section>

      <ServiceLayout
        category="well-pump-services"
        categoryLabel="Pump Services"
        defaultService="Constant Pressure System"
      >

        {/* ── WHAT IS IT ──────────────────────── */}
        <section className={styles.explainSection}>
          <div className="container">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">What Is a Constant Pressure System?</h2>
            <div className={styles.explainGrid}>
              <div className={styles.explainText}>
                <p>
                  A standard well pump operates like a light switch — fully on
                  or fully off. It runs at 100% speed until the pressure tank
                  reaches its cut-off pressure, shuts down, and starts again
                  when pressure drops to the cut-in point. Every time it starts,
                  you feel a pressure surge. Every time it stops, pressure
                  drifts down until the pump catches up.
                </p>
                <p>
                  A <strong>constant pressure system</strong> adds a variable
                  frequency drive (VFD) controller between your electrical panel
                  and the pump motor. The VFD reads your water pressure many
                  times per second and modulates motor speed in real time —
                  faster when demand increases, slower when it drops.
                </p>
                <p>
                  The result: pressure at your taps stays within 2–3 PSI of your
                  set point continuously. Shower while the dishwasher runs.
                  Run three irrigation zones while filling the horses&#39; tank.
                  No surges, no drops, no waiting for the pump to catch up.
                </p>
              </div>
              <div className={styles.explainVisual}>
                <div className={styles.visualCard}>
                  <div className={styles.visualTitle}>Standard System</div>
                  <div className={styles.pressureBar}>
                    <div className={styles.pressureTrack}>
                      <div className={styles.pressureStandard} />
                    </div>
                    <div className={styles.pressureLabels}>
                      <span>Cut-in: 40 PSI</span>
                      <span>Cut-off: 60 PSI</span>
                    </div>
                  </div>
                  <p className={styles.visualDesc}>
                    Pressure swings 20 PSI on every pump cycle.
                    Noticeable at every faucet and shower.
                  </p>
                </div>
                <div className={`${styles.visualCard} ${styles.visualCardHighlight}`}>
                  <div className={styles.visualTitle}>Constant Pressure System</div>
                  <div className={styles.pressureBar}>
                    <div className={styles.pressureTrack}>
                      <div className={styles.pressureConstant} />
                    </div>
                    <div className={styles.pressureLabels}>
                      <span>Set point: 60 PSI</span>
                      <span>±2 PSI always</span>
                    </div>
                  </div>
                  <p className={styles.visualDesc}>
                    Pressure stays flat at your set point.
                    Imperceptible to anyone using water in the home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ──────────────── */}
        <section className={styles.compareSection}>
          <div className="container">
            <span className="section-label">Side by Side</span>
            <h2 className="section-title">Standard Well vs. Constant Pressure</h2>
            <div className={styles.compareTable}>
              <div className={styles.compareHeader}>
                <span />
                <span>Standard Well System</span>
                <span>Constant Pressure System</span>
              </div>
              {[
                { label: 'Pressure consistency', standard: 'Fluctuates 15–25 PSI per cycle', cp: 'Steady within ±2–3 PSI at all times' },
                { label: 'Pressure tank required', standard: 'Large tank (20–80 gal)', cp: 'Tiny buffer tank (2–4 gal)' },
                { label: 'Energy use', standard: 'Pump runs at 100% or off', cp: '30–50% less energy — runs at demand speed' },
                { label: 'Suitable for irrigation', standard: 'Pressure drops during zones', cp: 'Handles irrigation + household simultaneously' },
                { label: 'Motor wear', standard: 'High start/stop stress on motor', cp: 'Soft start — greatly extends motor life' },
                { label: 'Noise', standard: 'Pump click and surge audible', cp: 'Near silent — gradual speed changes' },
                { label: 'Installed cost', standard: '$400 – $900 (tank + switch)', cp: '$1,800 – $3,500 complete' },
              ].map((row) => (
                <div key={row.label} className={styles.compareRow}>
                  <span className={styles.compareLabel}>{row.label}</span>
                  <span className={styles.compareStd}>{row.standard}</span>
                  <span className={styles.compareCP}>{row.cp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO NEEDS IT ─────────────────── */}
        <section className={styles.whoSection}>
          <div className="container">
            <span className="section-label">Is It Right for You?</span>
            <h2 className="section-title">Who Benefits Most</h2>
            <div className={styles.whoGrid}>
              {[
                {
                  icon: '🏡',
                  title: 'Large Homes (3+ Bathrooms)',
                  desc: 'More simultaneous water users means more noticeable pressure swings with a standard system. Constant pressure eliminates the competition between showers, sinks, and toilets.',
                },
                {
                  icon: '🌿',
                  title: 'Properties with Irrigation',
                  desc: 'When irrigation zones activate, a standard pump can\'t keep up and household pressure suffers. A VFD pump ramps to match combined demand — irrigation and indoor use at full pressure simultaneously.',
                },
                {
                  icon: '🐴',
                  title: 'Horse Properties & Farms',
                  desc: 'High-volume fill cycles for troughs, wash racks, and livestock watering demand consistent flow. Constant pressure systems handle variable demand without the pressure surges that stress older pipes.',
                },
                {
                  icon: '🏗️',
                  title: 'New Construction',
                  desc: 'Installing a constant pressure system during initial construction costs less than retrofitting later — and your home never has to experience a "well water" pressure reputation.',
                },
              ].map((item) => (
                <div key={item.title} className={styles.whoCard}>
                  <span className={styles.whoIcon}>{item.icon}</span>
                  <h3 className={styles.whoTitle}>{item.title}</h3>
                  <p className={styles.whoDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BRANDS ─────────────────────────── */}
        <section className={styles.brandsSection}>
          <div className="container">
            <span className="section-label">Systems We Install</span>
            <h2 className="section-title">Constant Pressure Brands We Install & Service</h2>
            <div className={styles.brandsGrid}>
              {[
                {
                  brand: 'Grundfos SQE',
                  desc: 'The benchmark for constant pressure residential wells. The SQE integrates VFD, motor, and pump into a single submersible unit — no above-ground drive box to weather or vandalize. Extremely quiet and highly reliable.',
                },
                {
                  brand: 'Franklin SubDrive',
                  desc: 'Franklin Electric\'s constant pressure solution. Pairs with standard Franklin submersible pumps to add VFD control. As a Franklin authorized service center, we install and service SubDrive systems with full factory support.',
                },
                {
                  brand: 'Pentek Intellidrive',
                  desc: 'A cost-effective VFD controller compatible with most existing submersible pumps — making it an excellent retrofit option when you want constant pressure without replacing the pump itself.',
                },
                {
                  brand: 'Goulds / Xylem CentriPro',
                  desc: 'Commercial-grade constant pressure solutions for larger residential, commercial, and agricultural applications where flow requirements exceed typical residential systems.',
                },
              ].map((b) => (
                <div key={b.brand} className={styles.brandCard}>
                  <h3 className={styles.brandName}>{b.brand}</h3>
                  <p className={styles.brandDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENERGY / COST ────────────────── */}
        <section className={styles.costSection}>
          <div className="container">
            <div className={styles.costGrid}>
              <div className={styles.energyBox}>
                <span className="section-label">Energy Savings</span>
                <h2 className="section-title">30–50% Less Electricity</h2>
                <p>
                  A standard pump starting under full load consumes a
                  large inrush of current every cycle — often 3–5× its running
                  draw for the first half-second. Over a year of cycling, those
                  spikes add up.
                </p>
                <p style={{ marginTop: 14 }}>
                  A VFD pump soft-starts at low speed and ramps only as fast
                  as demand requires. Homes with modest water use see the pump
                  run at 40–60% speed for most of the day. At 50% speed, a
                  centrifugal pump uses roughly 12% of its full-load power
                  (affinity law) — a dramatic reduction in electricity consumed.
                </p>
                <div className={styles.energyStats}>
                  <div className={styles.energyStat}>
                    <div className={styles.energyStatNum}>30–50%</div>
                    <div className={styles.energyStatLabel}>Typical energy reduction</div>
                  </div>
                  <div className={styles.energyStat}>
                    <div className={styles.energyStatNum}>3–5 yrs</div>
                    <div className={styles.energyStatLabel}>Typical payback period</div>
                  </div>
                </div>
              </div>
              <div className={styles.priceBox}>
                <h3 className={styles.priceBoxTitle}>Installed Cost</h3>
                <div className={styles.priceRows}>
                  {[
                    { label: 'Retrofit (controller only, existing pump)', range: '$1,200 – $1,800' },
                    { label: 'New constant pressure pump install', range: '$1,800 – $2,600' },
                    { label: 'Full system incl. new pump + small tank', range: '$2,200 – $3,500' },
                    { label: 'Commercial / high-flow systems', range: 'Call for quote' },
                  ].map((c) => (
                    <div key={c.label} className={styles.priceRow}>
                      <span className={styles.priceLabel}>{c.label}</span>
                      <span className={styles.priceRange}>{c.range}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.priceNote}>
                  All prices include labor and materials.
                  Final quote given on-site after inspecting your existing system.
                  Free estimates — no obligation.
                </p>
                <a
                  href="tel:+12814484447"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ────────────────────────────── */}
        <section className={styles.faqSection}>
          <div className="container">
            <span className="section-label">Common Questions</span>
            <h2 className={`section-title ${styles.faqH2}`}>
              Constant Pressure System FAQs
            </h2>
            <CityFaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* ── SERVICE AREAS ────────────────────── */}
        <section className={styles.areasSection}>
          <div className="container">
            <span className="section-label">Where We Install</span>
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
          </div>
        </section>

      </ServiceLayout>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Ready to Upgrade to Constant Pressure?</h2>
            <p>
              Free on-site estimate. We assess your existing pump, pressure
              tank, and electrical before recommending a system — no
              one-size-fits-all quotes. Serving Houston since 1979.
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
