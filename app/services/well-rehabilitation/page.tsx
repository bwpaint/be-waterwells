import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from '../../components/AnnouncementBar';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Rehabilitation — Houston, TX | B-E Waterwell Services',
  description:
    'Is your well producing less water than before? B-E Waterwell rehabilitates declining wells in Houston, TX — restore flow without drilling new. TDLR Licensed. Serving Montgomery, Harris, Waller, Grimes, Washington, Anderson, and surrounding counties. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-rehabilitation' },
};

const faqs = [
  {
    question: 'How do I know if my declining well can be rehabilitated?',
    answer:
      'The main factors are well age, structural integrity, and cause of decline. Wells under 20 years old with intact PVC casing are usually good rehab candidates. If decline is due to biofouling or mineral encrustation — the most common causes in Houston-area wells — rehabilitation success rates are high. We perform a diagnostic before recommending any approach.',
  },
  {
    question: 'How long does well rehabilitation last?',
    answer:
      'It depends on the method and the underlying cause. Shock chlorination for iron bacteria typically lasts 2–5 years before re-treatment is needed, especially in high-iron well water. Mechanical jetting for mineral deposits often restores yield for 5–10 years. We monitor performance after rehabilitation and recommend annual inspection to track results.',
  },
  {
    question: 'What is iron bacteria and why is it so common in the Houston area?',
    answer:
      'Iron bacteria are microorganisms that oxidize dissolved iron in groundwater, producing reddish-brown slime that clogs well screens. Groundwater under Montgomery County and Houston often has elevated dissolved iron, making iron bacteria a common problem in wells over 8–10 years old. Signs include red or orange staining in toilet tanks, sulfur or rotten egg odor, and declining yield.',
  },
  {
    question: 'Can I treat iron bacteria in my well myself?',
    answer:
      'DIY shock chlorination is possible but rarely eliminates established iron bacteria colonies in the well screen. Effectiveness depends on chlorine concentration, contact time, and reaching the perforations — not just pouring bleach down the casing. We use proper concentration, agitation, and contact time protocols. Improper treatment can temporarily suppress bacteria without eliminating the colony, giving false reassurance.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Water Well Rehabilitation — Houston, TX',
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
        'Well rehabilitation to restore yield and water quality in declining wells across the Houston area — mechanical jetting, shock chlorination, and acid treatment for biofouling and mineral encrustation. Restore flow without drilling a new well. TDLR licensed, 45+ years experience.',
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

const reasons = [
  {
    num: '01',
    title: 'Biofouling',
    desc: 'Iron bacteria and sulfate-reducing bacteria (SRB) colonize the well screen and perforations. They produce slime that physically blocks water entry. Common in Houston-area wells after 8–10 years.',
  },
  {
    num: '02',
    title: 'Mineral Encrustation',
    desc: 'Calcium carbonate and iron oxide deposits build up on the well screen over time, reducing the effective open area. Most common in high-mineral aquifer zones across our service area.',
  },
  {
    num: '03',
    title: 'Mechanical Wear',
    desc: 'Worn or corroded well screen, damaged casing, or shifted gravel pack. Structural issues require assessment before rehabilitation — some may need new well drilling.',
  },
  {
    num: '04',
    title: 'Aquifer Changes',
    desc: 'Natural water table decline or seasonal fluctuation can reduce available yield. Long-term aquifer drawdown requires site assessment and may indicate the need for a deeper well.',
  },
];

const methods = [
  {
    icon: '💧',
    title: 'Mechanical Jetting',
    desc: 'High-pressure water jetting directed at the well screen and perforations to physically remove biofouling and mineral buildup. Most effective for screens with debris accumulation.',
    highlights: ['Best for mineral deposits', 'Clears sediment blockage', 'Restores screen open area'],
  },
  {
    icon: '🧪',
    title: 'Shock Chlorination',
    desc: 'High-concentration chlorine solution introduced into the well and circulated through the screen to kill iron bacteria colonies. Contact time and concentration are critical for effectiveness.',
    highlights: ['Best for iron bacteria', 'Treats biofouling', 'Improves water quality'],
  },
  {
    icon: '⚗️',
    title: 'Acid Treatment',
    desc: 'A controlled acid solution dissolves calcium carbonate and iron oxide mineral scale from the screen and perforations. Followed by full neutralization and flushing.',
    highlights: ['Best for mineral encrustation', 'Dissolves carbonate scale', 'Neutralized and flushed'],
  },
  {
    icon: '🔬',
    title: 'Combination Treatment',
    desc: 'Severely fouled wells often require sequential treatment — mechanical jetting to remove physical buildup, then chemical treatment for remaining bacteria or mineral deposits.',
    highlights: ['Best for advanced fouling', 'Handles multiple issues', 'Sequential jetting + chemical'],
  },
];

const compare = [
  {
    label: 'Cost',
    rehab: 'A fraction of the cost of a new well',
    newWell: 'Significantly higher — full drilling project',
  },
  {
    label: 'Disruption',
    rehab: '1–2 days',
    newWell: '1–2 weeks',
  },
  {
    label: 'Best when',
    rehab: 'Well <20 yrs, intact casing, biofouling/mineral cause',
    newWell: 'Casing failure, well >30 yrs, contamination, aquifer depletion',
  },
  {
    label: 'Success rate',
    rehab: 'High for biofouling/mineral; lower for structural issues',
    newWell: '100% — new well, full yield',
  },
];

const ironSigns = [
  {
    sign: 'Red or orange slime',
    desc: 'Visible in toilet tank, inside hose bibs, or around fixtures.',
  },
  {
    sign: 'Sulfur or rotten egg odor',
    desc: 'Often accompanies iron bacteria or SRB colonies.',
  },
  {
    sign: 'Stained fixtures',
    desc: 'Reddish-brown staining on sinks, showers, or laundry.',
  },
  {
    sign: 'Declining yield',
    desc: 'Gradually less water pressure or pump taking longer to fill the pressure tank.',
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

export default function WellRehabilitationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Water Well Rehabilitation', path: '/services/well-rehabilitation' }]} />

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
                <span>Water Well Rehabilitation</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Magnolia and Houston, TX Area · Restore Before You Replace</span>
                <h1 className={styles.h1Line2}>Water Well Rehabilitation</h1>
                <span className={styles.h1Line3}>Restore Flow · Treat Biofouling · Avoid Costly Replacement</span>
              </div>
              <p className={styles.heroSubtitle}>
                Less water than you used to have? Well rehabilitation can restore yield
                in declining wells through mechanical jetting, shock chlorination, or acid
                treatment — at a fraction of new well drilling cost. B-E Waterwell.
                TDLR Licensed.
              </p>
              <div className={styles.heroBtns}>
                <a href="tel:+12814484447" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Get Consultation
                </Link>
              </div>
            </div>
          <div className={styles.heroPhoto}>
              <Image src="/images/hero-windmill-service.webp" alt="B-E Waterwell crew servicing a legacy windmill well tower" width={700} height={525} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICELAYOUT ─────────────────────── */}
      <ServiceLayout
        categoryLabel="Well Rehabilitation"
        defaultService="Well Rehabilitation"
      >

        {/* ── OVERVIEW ────────────────────────── */}
        <section className={styles.overviewSection}>
          <span className="section-label">Restore, Don&apos;t Replace</span>
          <h2 className="section-title">Restore Your Well Without Drilling New</h2>
          <p className={styles.overviewP}>
            Well rehabilitation is a set of cleaning and treatment methods designed to
            restore the water yield and quality of a declining well. Rather than
            abandoning a well and drilling new — at a fraction of the cost — rehabilitation
            addresses the root cause of yield loss: biofouling, mineral encrustation,
            or sediment blockage.
          </p>
          <p className={styles.overviewP}>
            Not every well can be rehabilitated. Structural failures, severe casing
            damage, and contamination may require a new well. But for the most common
            causes of decline in Houston — iron bacteria and mineral buildup — rehab is
            often the right call, including targeted well screen repair and cleaning.
          </p>
          <div className={styles.overviewStats}>
            {[
              { stat: '5,000+', label: 'Wells Serviced' },
              { stat: '1–2 Days', label: 'Typical Disruption' },
              { stat: '45+', label: 'Years Experience' },
              { stat: 'TDLR', label: 'Licensed' },
            ].map((s) => (
              <div key={s.label} className={styles.overviewStat}>
                <strong>{s.stat}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY YIELD DECREASES ─────────────── */}
        <section className={styles.reasonsSection}>
          <span className="section-label">Diagnosis First</span>
          <h2 className="section-title">Why Well Yield Decreases</h2>
          <p className={styles.overviewP}>
            Declining water pressure or a pump that runs longer than it used to almost
            always traces back to one of four causes. We diagnose which one is affecting
            your well before recommending a treatment.
          </p>
          <div className={styles.reasonsGrid}>
            {reasons.map((r) => (
              <div key={r.num} className={styles.reasonCard}>
                <span className={styles.reasonNum}>{r.num}</span>
                <h3 className={styles.reasonTitle}>{r.title}</h3>
                <p className={styles.reasonDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── METHODS ─────────────────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">Rehabilitation Methods</span>
          <h2 className="section-title">How We Restore Well Yield</h2>
          <div className={styles.subGrid}>
            {methods.map((m) => (
              <div key={m.title} className={styles.subCard}>
                <span className={styles.subIcon}>{m.icon}</span>
                <h3 className={styles.subTitle}>{m.title}</h3>
                <p className={styles.subDesc}>{m.desc}</p>
                <ul className={styles.subHighlights}>
                  {m.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── REHAB VS NEW WELL ───────────────── */}
        <section className={styles.compareSection}>
          <span className="section-label">Make the Right Call</span>
          <h2 className="section-title">Rehabilitation vs. New Well</h2>
          <p className={styles.overviewP}>
            For most wells under 20 years old with intact casing, rehabilitation restores
            flow for a fraction of the cost of replacement. Here is how the two options
            compare.
          </p>
          <div className={styles.compareTable}>
            <div className={`${styles.compareRow} ${styles.compareHead}`}>
              <div className={styles.compareCell}></div>
              <div className={styles.compareCell}>Rehabilitation</div>
              <div className={styles.compareCell}>New Well</div>
            </div>
            {compare.map((row) => (
              <div key={row.label} className={styles.compareRow}>
                <div className={`${styles.compareCell} ${styles.compareLabel}`}>{row.label}</div>
                <div className={`${styles.compareCell} ${styles.compareRehab}`}>{row.rehab}</div>
                <div className={styles.compareCell}>{row.newWell}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── IRON BACTERIA ───────────────────── */}
        <section className={styles.ironSection}>
          <span className="section-label">The Houston Problem</span>
          <h2 className="section-title">Iron Bacteria in Houston-Area Wells</h2>
          <p className={styles.overviewP}>
            Groundwater beneath Montgomery County contains elevated dissolved iron in many
            wells — a natural characteristic of the sandy coastal plain formation. This creates
            ideal conditions for iron bacteria, which oxidize the iron and produce
            reddish-brown slime colonies inside wells over time. Left untreated, that slime
            clogs the well screen and is a leading cause of brown or discolored well water
            and declining yield.
          </p>
          <h3 className={styles.ironHeading}>Signs of Iron Bacteria in Your Well</h3>
          <div className={styles.ironGrid}>
            {ironSigns.map((s) => (
              <div key={s.sign} className={styles.ironCard}>
                <h4 className={styles.ironSign}>{s.sign}</h4>
                <p className={styles.ironDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Well Rehabilitation FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── CROSS-LINKS ─────────────────────── */}
        <section className={styles.crossLinkSection}>
          <p className={styles.crossLinkP}>
            After rehabilitation, an{' '}
            <Link href="/services/well-maintenance" className={styles.crossLink}>
              annual well inspection
            </Link>{' '}
            helps track results and catch biofouling before it returns. If your well
            turns out to need replacement,{' '}
            <Link href="/services/water-well-drilling" className={styles.crossLink}>
              learn about new water well drilling
            </Link>
            .
          </p>
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Work</span>
          <h2 className="section-title">Well Rehabilitation Service Areas</h2>
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
            <h2>Getting Less Water Than You Used To?</h2>
            <p>
              Call for a diagnostic and estimate. We&apos;ll tell you honestly
              whether your well can be rehabilitated — or whether replacement is the
              smarter long-term call. No pressure, quoted in writing.
            </p>
            <p>
              Time for a new well?{' '}
              <Link href="/services/water-well-drilling" className={styles.crossLink}>
                Call us to discuss today!
              </Link>
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
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
