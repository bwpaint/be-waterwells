import type { Metadata } from 'next';
import Icon from '../../components/Icon';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Well Pump Services — Installation, Repair & Constant Pressure | B-E Waterwell',
  description:
    'Well pump installation, repair, and constant pressure system upgrades in Houston, TX. Franklin Electric authorized service center. TDLR licensed. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-pump-services' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Well Pump Services — Houston, TX',
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
        'Submersible well pump installation, repair, and constant pressure system upgrades. Franklin Electric authorized service center.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long do well pumps last in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Submersible well pumps in the Houston area typically last 10–15 years. Pumps that run frequently due to undersized pressure tanks, or are exposed to sand-heavy aquifers, often need replacement in 8–12 years.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I repair or replace my well pump?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If the pump is under 8 years old and the failure is limited to a control box or pressure switch, repair is almost always the right call. If the pump is over 12 years old or the motor has burned out, replacement is typically more cost-effective.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer same-day pump service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We stock the most common submersible pump sizes and can typically complete a same-day pump replacement for residential systems. Emergency service is available 24/7.',
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: 'How long do well pumps last in the Houston area?',
    answer:
      'Submersible well pumps in the Houston area typically last 10–15 years. Pumps that run frequently — due to an undersized pressure tank or high-demand irrigation — often see replacement in 8–12 years. Pumps drawing from sandier sections of the water-bearing zone wear faster.',
  },
  {
    question: 'Should I repair or replace my well pump?',
    answer:
      'If the pump is under 8 years old and the failure is limited to a control box, pressure switch, or motor lead, repair is almost always the right call. If the pump is over 12 years old, has burned out, or is pulling sand, replacement is typically more cost-effective over a 5-year horizon.',
  },
  {
    question: 'Do you offer same-day pump service?',
    answer:
      'Yes. We stock the most common Franklin Electric submersible pump sizes and can complete same-day pump replacement for most residential systems. Emergency dispatch is available 24/7 at (281) 448-4447.',
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

export default function WellPumpServicesPage() {
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
            <span>Well Pump Services</span>
          </nav>
          <div className={styles.h1Wrap}>
            <span className={styles.h1Label}>Well Pump Services</span>
            <h1 className={styles.h1Main}>Pump Installation, Repair & Constant Pressure</h1>
            <span className={styles.h1Sub}>Installation · Repair · Constant Pressure</span>
          </div>
          <p className={styles.heroSubtitle}>
            Franklin Electric authorized service center. TDLR licensed well technicians.
            Serving Houston since 1979 — submersible pumps installed, repaired,
            and upgraded same day.
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

        {/* ── SERVICE CARDS ─────────────────── */}
        <section className={styles.cardsSection}>
          <div className="container">
            <span className="section-label">Our Pump Services</span>
            <h2 className="section-title">Two Ways We Serve Your Well Pump</h2>
            <div className={styles.serviceCards}>

              <Link
                href="/services/well-pump-services/pump-installation-repair"
                className={styles.serviceCard}
              >
                <div className={styles.cardIcon}><Icon name="gear" size={34} /></div>
                <h3 className={styles.cardTitle}>Pump Installation & Repair</h3>
                <p className={styles.cardDesc}>
                  New submersible pump installation, pull-and-replace service,
                  motor testing, control box repair, and same-day emergency
                  pump replacement. Franklin Electric authorized.
                </p>
                <div className={styles.cardHighlights}>
                  <span>New Installation</span>
                  <span>Motor Replacement</span>
                  <span>Same-Day Service</span>
                  <span>Franklin Electric Auth.</span>
                </div>
                <span className={styles.cardCta}>Learn More →</span>
              </Link>

              <Link
                href="/services/well-pump-services/constant-pressure-systems"
                className={styles.serviceCard}
              >
                <div className={styles.cardIcon}><Icon name="chart" size={34} /></div>
                <h3 className={styles.cardTitle}>Constant Pressure Systems</h3>
                <p className={styles.cardDesc}>
                  Upgrade your well to city-like constant pressure with a
                  variable frequency drive (VFD) pump system. Eliminates
                  pressure fluctuation — perfect for large homes, irrigation,
                  and horse properties.
                </p>
                <div className={styles.cardHighlights}>
                  <span>No Pressure Drop</span>
                  <span>30–50% Energy Savings</span>
                  <span>Grundfos SQE</span>
                  <span>Franklin SubDrive</span>
                </div>
                <span className={styles.cardCta}>Learn More →</span>
              </Link>

            </div>
          </div>
        </section>

        {/* ── FRANKLIN TRUST ─────────────────── */}
        <section className={styles.franklinSection}>
          <div className="container">
            <div className={styles.franklinInner}>
              <div className={styles.franklinBadge}>
                <div className={styles.franklinBadgeIcon}><Icon name="trophy" size={30} /></div>
                <div>
                  <div className={styles.franklinBadgeTitle}>Franklin Electric</div>
                  <div className={styles.franklinBadgeSub}>Authorized Service Center</div>
                </div>
              </div>
              <div className={styles.franklinText}>
                <h2 className={`section-title ${styles.franklinH2}`}>
                  Franklin Electric Authorized — What That Means for You
                </h2>
                <p>
                  Franklin Electric is the leading manufacturer of submersible well
                  pump motors in North America. Being an authorized service center
                  means our technicians are factory-trained to diagnose and repair
                  Franklin motors and control boxes — not just replace them.
                </p>
                <p style={{ marginTop: 14 }}>
                  It also means we can access the full Franklin Electric parts
                  network, honor warranty claims, and install Franklin systems with
                  proper documentation. If your pump is Franklin Electric, you want
                  a Franklin-authorized tech on the job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WARNING SIGNS ──────────────────── */}
        <section className={styles.signsSection}>
          <div className="container">
            <span className="section-label">Know the Warning Signs</span>
            <h2 className="section-title">Signs Your Pump Needs Attention</h2>
            <div className={styles.signsGrid}>
              {[
                { icon: 'trendDown' as const, sign: 'Fluctuating Pressure', desc: 'Water pressure surges and drops while running a faucet — often an undersized tank or failing pump.' },
                { icon: 'cycle' as const, sign: 'Pump Running Constantly', desc: 'Your pump never stops cycling, even when no water is being used. This signals a waterlogged tank or pressure switch issue.' },
                { icon: 'wind' as const, sign: 'Air Spurts at Faucets', desc: 'Air bubbles or spitting from taps after the pump runs. Can mean a low water table, failed check valve, or pump cavitation.' },
                { icon: 'bulb' as const, sign: 'High Electric Bills', desc: 'A pump running more than it should — due to leaks, tank problems, or motor inefficiency — shows up in your electricity costs.' },
                { icon: 'ban' as const, sign: 'No Water at All', desc: 'Complete loss of water is a pump or electrical failure until proven otherwise. Call for 24/7 emergency service.' },
              ].map((item) => (
                <div key={item.sign} className={styles.signCard}>
                  <span className={styles.signIcon}><Icon name={item.icon} size={30} /></span>
                  <h3 className={styles.signTitle}>{item.sign}</h3>
                  <p className={styles.signDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.signsFooter}>
              <a href="tel:+12814484447" className="btn btn-primary">
                Call for a Pump Diagnostic — (281) 448-4447
              </a>
            </div>
          </div>
        </section>

        {/* ── PUMP TYPES ─────────────────────── */}
        <section className={styles.typesSection}>
          <div className="container">
            <span className="section-label">What We Stock</span>
            <h2 className="section-title">Submersible Pump Types We Install</h2>
            <div className={styles.typesGrid}>
              {[
                { hp: '½ HP', use: 'Shallow residential', depth: 'Up to 200 ft', size: '3-inch bore casing', note: 'Typical for smaller lots and shallow Montgomery County wells.' },
                { hp: '¾–1 HP', use: 'Standard residential', depth: '200–320 ft', size: '4-inch bore casing', note: 'Most common size for the Houston area homes on 1–5 acres.' },
                { hp: '1½ HP', use: 'Irrigation / high-demand', depth: '200–400 ft', size: '4-inch bore casing', note: 'For homes with large irrigation systems or high GPM needs.' },
                { hp: '2+ HP', use: 'Commercial / agricultural', depth: '300–500+ ft', size: '6-inch bore casing', note: 'Farms, ranches, small commercial operations.' },
              ].map((row) => (
                <div key={row.hp} className={styles.typeCard}>
                  <div className={styles.typeHP}>{row.hp}</div>
                  <div className={styles.typeUse}>{row.use}</div>
                  <div className={styles.typeDivider} />
                  <div className={styles.typeDetail}><strong>Depth:</strong> {row.depth}</div>
                  <div className={styles.typeDetail}><strong>Casing:</strong> {row.size}</div>
                  <p className={styles.typeNote}>{row.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────── */}
        <section className={styles.faqSection}>
          <div className="container">
            <span className="section-label">Common Questions</span>
            <h2 className={`section-title ${styles.faqH2}`}>Well Pump Services FAQs</h2>
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

      {/* ── FINAL CTA ──── full-width ─────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Pump Problem? Let&apos;s Fix It Today.</h2>
            <p>
              Same-day service available. Franklin Electric authorized. TDLR licensed.
              We quote every job in writing — free estimates, no pressure.
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
