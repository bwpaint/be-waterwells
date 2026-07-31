import type { Metadata } from 'next';
import Icon from '../../../components/Icon';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Well Pump Installation & Repair — Houston, TX | B-E Waterwell',
  description:
    'Submersible well pump installation and repair in Houston, TX. Franklin Electric authorized. Same-day service available. TDLR licensed. Free estimate. (281) 448-4447.',
  alternates: {
    canonical: 'https://bewaterwells.com/services/well-pump-services/pump-installation-repair',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Well Pump Installation & Repair — Houston, TX',
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
        'Submersible well pump installation, pull-and-replace service, motor testing, and same-day emergency repair. Franklin Electric authorized service center.',
      offers: {
        '@type': 'Offer',
        priceRange: '$800 – $2,200',
        description: 'Pump replacement including labor. Free estimate. TDLR licensed.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer same-day pump installation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, for most residential systems. We stock common Franklin Electric submersible pump sizes and can complete same-day pull-and-replace service. Emergency dispatch is available 24/7.',
          },
        },
        {
          '@type': 'Question',
          name: 'How deep can you pull a submersible pump?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We pull and replace pumps at depths up to 500+ feet using our service rig. Most Houston residential wells require pump pulls at 180–400 feet.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a pump installation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard residential pump replacement typically takes 3–5 hours from arrival to pressure-tested water flow. New construction installations including drop pipe, wiring, and pressure tank connections take 4–8 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'What warranty do you provide on pump installations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide a 1-year labor warranty on all pump installations and pass through the manufacturer warranty on the pump and motor (typically 1–2 years for Franklin Electric). We stand behind every job in writing.',
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: 'Do you offer same-day pump installation?',
    answer:
      'Yes, for most residential systems. We stock common Franklin Electric submersible pump sizes and can complete same-day pull-and-replace service when the pump is available. Emergency dispatch is available 24/7 at (281) 448-4447.',
  },
  {
    question: 'How deep can you pull a submersible pump?',
    answer:
      'We pull and replace pumps at depths up to 500+ feet using our service rig. Most Houston residential wells require pump service at 180–400 feet. We quote pull depth when we give your estimate.',
  },
  {
    question: 'How long does a pump installation take?',
    answer:
      'A standard residential pump replacement takes 3–5 hours from arrival to pressure-tested water flow. New installation with full drop pipe, wiring, and pressure tank takes 4–8 hours depending on depth and complexity.',
  },
  {
    question: 'What warranty do you provide on pump installations?',
    answer:
      'We provide a 1-year labor warranty on all installations and pass through the full Franklin Electric manufacturer warranty (typically 1–2 years). All warranty claims are handled directly through us — you don\'t call the manufacturer.',
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

export default function PumpInstallRepairPage() {
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
            <span>Pump Installation & Repair</span>
          </nav>
          <div className={styles.h1Wrap}>
            <span className={styles.h1Label}>Well Pump Services</span>
            <h1 className={styles.h1Main}>Pump Installation & Repair</h1>
            <span className={styles.h1Sub}>
              Submersible Pump · Pull & Replace · Motor Testing
            </span>
          </div>
          <p className={styles.heroSubtitle}>
            Franklin Electric authorized. Same-day pull-and-replace available.
            We stock the most common submersible pump sizes so your water is
            back on fast — not next week.
          </p>
          <div className={styles.heroBtns}>
            <a href="tel:+12814484447" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
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
        defaultService="Pump Installation"
      >

        {/* ── INSTALLATION SCOPE ─────────────── */}
        <section className={styles.scopeSection}>
          <div className="container">
            <div className={styles.scopeGrid}>

              <div className={styles.scopeCard}>
                <div className={styles.scopeHeader}>
                  <span className={styles.scopeIcon}>🆕</span>
                  <h2 className={styles.scopeH2}>New Pump Installation</h2>
                </div>
                <ul className={styles.scopeList}>
                  {[
                    'Pump selection and horsepower sizing for your well depth and household demand',
                    'Full pump pull of old submersible motor and pump body',
                    'New submersible pump and motor installation on new drop pipe',
                    'Safety rope and torque arrestor installation',
                    'Electrical connections: motor leads, splice kit, pump wire to surface',
                    'Pitless adapter inspection and replacement if needed',
                    'Pressure testing and flow rate verification before we leave',
                    'Written completion report with pump model, depth, and flow rate',
                  ].map((item) => (
                    <li key={item} className={styles.scopeItem}>
                      <span className={styles.scopeCheck}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.scopeCard}>
                <div className={styles.scopeHeader}>
                  <span className={styles.scopeIcon}><Icon name="wrench" size={30} /></span>
                  <h2 className={styles.scopeH2}>Pump Replacement & Diagnosis</h2>
                </div>
                <ul className={styles.scopeList}>
                  {[
                    'Same-day diagnosis — electrical resistance testing, motor amp draw, pump curve check',
                    'Control box testing and replacement (single-phase and three-phase)',
                    'Pressure switch calibration and replacement',
                    'Motor lead replacement and splice repair',
                    'Pump wiring from breaker to pump head',
                    'Check valve and foot valve testing',
                    'Pressure tank pre-charge inspection and waterlogging diagnosis',
                    'Written diagnostic report regardless of outcome',
                  ].map((item) => (
                    <li key={item} className={styles.scopeItem}>
                      <span className={styles.scopeCheck}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── BRANDS ─────────────────────────── */}
        <section className={styles.brandsSection}>
          <div className="container">
            <span className="section-label">Brands We Work With</span>
            <h2 className="section-title">Pump Brands We Install & Service</h2>
            <div className={styles.brandsGrid}>
              {[
                {
                  brand: 'Franklin Electric',
                  badge: 'AUTHORIZED',
                  desc: 'The most widely installed submersible pump motor brand in North America. We are a Franklin Electric authorized service center — factory-trained diagnosis and warranty service.',
                  highlight: true,
                },
                {
                  brand: 'Goulds Water Technology',
                  badge: null,
                  desc: 'A Xylem brand — high-quality submersible pumps trusted in residential and light commercial applications across Texas for decades.',
                  highlight: false,
                },
                {
                  brand: 'Myers / Pentair',
                  badge: null,
                  desc: 'Reliable residential submersible pumps with a long track record. We carry common Myers replacement parts and install new Myers systems on request.',
                  highlight: false,
                },
                {
                  brand: 'Grundfos',
                  badge: null,
                  desc: 'Premium Danish-engineered pumps, especially for constant pressure and variable speed applications. Our go-to for SQE constant pressure installations.',
                  highlight: false,
                },
              ].map((b) => (
                <div
                  key={b.brand}
                  className={`${styles.brandCard} ${b.highlight ? styles.brandCardHighlight : ''}`}
                >
                  <div className={styles.brandNameRow}>
                    <h3 className={styles.brandName}>{b.brand}</h3>
                    {b.badge && <span className={styles.brandBadge}>{b.badge}</span>}
                  </div>
                  <p className={styles.brandDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIZING GUIDE ───────────────────── */}
        <section className={styles.sizingSection}>
          <div className="container">
            <span className="section-label">Right-Size Your Pump</span>
            <h2 className="section-title">Pump Sizing Guide</h2>
            <p className={styles.sizingIntro}>
              An undersized pump starves your pressure. An oversized pump
              burns out early and wastes electricity. We size every pump
              to your well depth, casing diameter, and actual household demand.
            </p>
            <div className={styles.sizingTable}>
              <div className={styles.sizingHeader}>
                <span>Horsepower</span>
                <span>Typical Use</span>
                <span>Well Depth</span>
                <span>Typical GPM</span>
              </div>
              {[
                { hp: '½ HP', use: 'Shallow residential (1–2 bath)', depth: 'Up to 200 ft', gpm: '5–10 GPM' },
                { hp: '¾–1 HP', use: 'Standard residential (3–4 bath)', depth: '200–320 ft', gpm: '10–15 GPM' },
                { hp: '1½ HP', use: 'Large home + irrigation', depth: '200–400 ft', gpm: '15–25 GPM' },
                { hp: '2+ HP', use: 'Commercial / agricultural', depth: '300–500+ ft', gpm: '25+ GPM' },
              ].map((row) => (
                <div key={row.hp} className={styles.sizingRow}>
                  <span className={styles.sizingHP}>{row.hp}</span>
                  <span>{row.use}</span>
                  <span>{row.depth}</span>
                  <span>{row.gpm}</span>
                </div>
              ))}
            </div>
            <p className={styles.sizingNote}>
              Final sizing is determined on-site. We measure your well casing,
              confirm available depth, and check your existing pressure tank
              before recommending a pump.
            </p>
          </div>
        </section>

        {/* ── REPLACEMENT SIGNALS ────────────── */}
        <section className={styles.replaceSection}>
          <div className="container">
            <div className={styles.replaceGrid}>
              <div className={styles.replaceText}>
                <span className="section-label">Repair vs. Replace</span>
                <h2 className="section-title">When It&apos;s Time to Replace</h2>
                <p>
                  We always try to repair before replacing — but some situations
                  make replacement the smarter long-term investment.
                </p>
                <ul className={styles.replaceList}>
                  {[
                    { signal: 'Age over 12 years', detail: 'Most submersible pumps last 10–15 years in the Houston area aquifer conditions. After 12 years, repair costs often approach replacement cost.' },
                    { signal: 'Pulling sand or sediment', detail: 'Sand passing through the pump wears impellers rapidly. Replacement plus a downhole sand separator is more cost-effective than repeated repairs.' },
                    { signal: 'Frequent breaker trips', detail: 'A pump that trips the breaker more than twice in a month has a motor or winding problem that will not self-resolve.' },
                    { signal: 'Reduced flow at the tap', detail: 'If your flow rate has dropped noticeably over months, impeller wear is the likely cause — repair rarely restores original performance.' },
                  ].map((item) => (
                    <li key={item.signal} className={styles.replaceItem}>
                      <div className={styles.replaceSignal}>{item.signal}</div>
                      <div className={styles.replaceDetail}>{item.detail}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.costBox}>
                <h3 className={styles.costBoxTitle}>Typical Cost Ranges</h3>
                <div className={styles.costRows}>
                  {[
                    { label: 'Pressure switch replacement', range: '$150 – $250' },
                    { label: 'Control box replacement', range: '$200 – $350' },
                    { label: 'Motor lead / splice repair', range: '$180 – $320' },
                    { label: 'Pump replacement (½–1 HP)', range: '$800 – $1,400' },
                    { label: 'Pump replacement (1½–2 HP)', range: '$1,200 – $2,200' },
                    { label: 'Full new installation (incl. tank)', range: '$1,800 – $3,400' },
                  ].map((c) => (
                    <div key={c.label} className={styles.costRow}>
                      <span className={styles.costLabel}>{c.label}</span>
                      <span className={styles.costRange}>{c.range}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.costNote}>
                  All prices include labor. Final quote given before any work begins.
                  Emergency service available 24/7.
                </p>
                <a href="tel:+12814484447" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <div className="container">
            <span className="section-label">Common Questions</span>
            <h2 className={`section-title ${styles.faqH2}`}>
              Pump Installation & Repair FAQs
            </h2>
            <CityFaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* ── SERVICE AREAS ────────────────────── */}
        <section className={styles.areasSection}>
          <div className="container">
            <span className="section-label">Where We Work</span>
            <h2 className="section-title">Pump Service Areas</h2>
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

      {/* ── FINAL CTA ──────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Well Pump Issue? We&apos;ll Diagnose It Today.</h2>
            <p>
              Same-day service available. Franklin Electric authorized.
              Free written estimate before any work starts.
              Keywords: well pump replacement Houston, TX · submersible pump replacement Texas · well pump replacement Magnolia TX.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
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
