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
  title: 'Well Rehabilitation — Restore Water Flow & Pressure | B-E Waterwell Houston',
  description:
    'Is your well producing less water than before? B-E Waterwell rehabilitates declining wells in Houston, TX. Restore flow without drilling new. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-maintenance/well-rehabilitation' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Well Rehabilitation — Houston, TX',
      provider: {
        '@type': 'LocalBusiness',
        name: 'B-E Waterwell Services',
        telephone: '+1-281-448-4447',
        address: { '@type': 'PostalAddress', addressLocality: 'Magnolia', addressRegion: 'TX', postalCode: '77354' },
      },
      areaServed: 'Houston, TX',
      description: 'Well rehabilitation to restore flow and yield in declining wells. Mechanical jetting, shock chlorination, acid treatment. Houston, TX.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I know if my well can be rehabilitated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Wells under 20 years old with intact casing and structural integrity are usually good rehabilitation candidates. If the decline is due to biofouling or mineral encrustation (the most common causes), rehabilitation success rates are high. We perform a diagnostic before recommending rehab vs. new well drilling.' },
        },
        {
          '@type': 'Question',
          name: 'How long does well rehabilitation last?',
          acceptedAnswer: { '@type': 'Answer', text: 'Results vary by rehabilitation method and well condition. Iron bacteria treatment through shock chlorination often lasts 2–5 years before re-treatment is needed. Mechanical jetting for mineral deposits can restore yield for 5–10 years. We follow up with annual monitoring to track performance after rehabilitation.' },
        },
        {
          '@type': 'Question',
          name: 'What is iron bacteria and why is it common in the Houston area wells?',
          acceptedAnswer: { '@type': 'Answer', text: 'Iron bacteria are naturally occurring microorganisms that oxidize dissolved iron in groundwater, producing a reddish-brown slime that clogs well screens and perforations. The formation beneath Montgomery County and Houston has elevated dissolved iron levels, making iron bacteria a common problem in wells over 8–10 years old. Signs include red or orange slime in the toilet tank, sulfur odor, and declining water yield.' },
        },
        {
          '@type': 'Question',
          name: 'Can I treat iron bacteria in my well myself?',
          acceptedAnswer: { '@type': 'Answer', text: 'DIY shock chlorination is possible but rarely effective for established iron bacteria colonies in the well screen and casing. The chlorine solution must reach the perforations and be properly timed and concentrated — not just poured down the casing. Improper treatment can temporarily suppress bacteria without eliminating the colony. We use proper concentration, agitation, and contact time to achieve lasting results.' },
        },
      ],
    },
  ],
};

const declineReasons = [
  { num: '01', title: 'Biofouling', desc: 'Iron bacteria and sulfate-reducing bacteria (SRB) colonize the well screen and perforations. They produce slime that physically blocks water entry. Common in the Houston arethe water-bearing zone wells after 8–10 years.' },
  { num: '02', title: 'Mineral Encrustation', desc: 'Calcium carbonate and iron oxide deposits build up on the well screen over time, reducing the effective open area. Most common in high-mineral the water-bearing zone and the water-bearing zone aquifer zones.' },
  { num: '03', title: 'Mechanical Wear', desc: 'Worn or corroded well screen, damaged casing, or shifted production sand. Structural issues require assessment before rehabilitation — some may need new well drilling.' },
  { num: '04', title: 'Aquifer Changes', desc: 'Natural water table decline or seasonal fluctuation can reduce available yield. Long-term aquifer drawdown requires site assessment and may indicate the need for a deeper well.' },
];

const methods = [
  { icon: 'droplet' as const, title: 'Mechanical Jetting', desc: 'High-pressure water jetting directed at the well screen and perforations to physically remove biofouling and mineral buildup. Most effective for screens with debris accumulation.', best: 'Best for: mineral deposits, sediment blockage' },
  { icon: 'testTube' as const, title: 'Shock Chlorination', desc: 'High-concentration chlorine solution introduced into the well and circulated through the screen to kill iron bacteria colonies. Contact time and concentration are critical for effectiveness.', best: 'Best for: iron bacteria, biofouling, water quality' },
  { icon: 'flask' as const, title: 'Acid Treatment', desc: 'Food-grade or weak acid solution dissolves calcium carbonate and iron oxide mineral scale from the screen and perforations. Followed by full neutralization and flushing.', best: 'Best for: mineral encrustation, carbonate scale' },
  { icon: 'microscope' as const, title: 'Combination Treatment', desc: 'Severely fouled wells often require sequential treatment — mechanical jetting to remove physical buildup, then chemical treatment for remaining bacteria or mineral deposits.', best: 'Best for: advanced fouling, multiple issues' },
];

const compareRows = [
  { factor: 'Cost', rehab: '$800–$2,500', newWell: '$8,000–$18,000' },
  { factor: 'Disruption', rehab: '1–2 days', newWell: '1–2 weeks' },
  { factor: 'Best when', rehab: 'Well <20 yrs, intact casing, biofouling/mineral cause', newWell: 'Casing failure, well >30 yrs, contamination, aquifer depletion' },
  { factor: 'Success rate', rehab: 'High for biofouling/mineral; lower for structural issues', newWell: '100% — new well, full yield' },
];

const faqs = [
  {
    question: 'How do I know if my declining well can be rehabilitated?',
    answer: 'The main factors are well age, structural integrity, and cause of decline. Wells under 20 years old with intact PVC casing are usually good rehab candidates. If decline is due to biofouling or mineral encrustation — the most common causes in the Houston arethe water-bearing zone wells — rehabilitation success rates are high. We perform a diagnostic before recommending any approach.',
  },
  {
    question: 'How long does well rehabilitation last?',
    answer: 'It depends on the method and the underlying cause. Shock chlorination for iron bacteria typically lasts 1–2 years before re-treatment is needed, especially in high-iron groundwater. Mechanical jetting for mineral deposits often restores yield for 5–10 years. We monitor performance after rehabilitation and recommend annual inspection to track results.',
  },
  {
    question: 'What is iron bacteria and why is it so common in the Houston area?',
    answer: 'Iron bacteria are microorganisms that oxidize dissolved iron in groundwater, producing reddish-brown slime that clogs well screens. The formation under Montgomery County and Houston has elevated dissolved iron, making iron bacteria a common problem in wells over 8–10 years old. Signs include red or orange staining in toilet tanks, sulfur or rotten egg odor, and declining yield.',
  },
  {
    question: 'Can I treat iron bacteria in my well myself?',
    answer: 'DIY shock chlorination is possible but rarely eliminates established iron bacteria colonies in the well screen. Effectiveness depends on chlorine concentration, contact time, and reaching the perforations — not just pouring bleach down the casing. We use proper chemical concentration, agitation, and contact time protocols. Improper treatment can temporarily suppress bacteria without eliminating the colony, giving false reassurance.',
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
              <span>Well Rehabilitation</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>Magnolia and Houston, TX Area — Restore Before You Replace</span>
              <h1 className={styles.h1Line2}>Well Rehabilitation</h1>
              <span className={styles.h1Line3}>Restore Flow · Treat Biofouling · Avoid Costly Replacement</span>
            </div>
            <p className={styles.heroSubtitle}>
              Less water than you used to have? Well rehabilitation can restore yield in
              declining wells through mechanical jetting, shock chlorination, or acid treatment —
              at a fraction of new well drilling cost. B-E Waterwell. TDLR licensed.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447</a>
              <Link href="/contact" className="btn btn-outline">Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceLayout category="well-maintenance" categoryLabel="Well Maintenance" defaultService="Well Rehabilitation">

        <section className={styles.introSection}>
          <span className="section-label">What Is Well Rehabilitation?</span>
          <h2 className="section-title">Restore Your Well Without Drilling New</h2>
          <p className={styles.bodyP}>
            Well rehabilitation is a set of cleaning and treatment methods designed to restore
            the water yield and quality of a declining well. Rather than abandoning a well and
            drilling new — at $8,000–$18,000 — rehabilitation addresses the root cause of
            yield loss: biofouling, mineral encrustation, or sediment blockage.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            Not every well can be rehabilitated. Structural failures, severe casing damage, and
            contamination may require a new well. But for the most common causes of decline in
            Houston — iron bacteria from the water-bearing zone and mineral buildup — rehab
            is often the right call.
          </p>
        </section>

        <section className={styles.reasonsSection}>
          <span className="section-label">Why Wells Decline</span>
          <h2 className="section-title">4 Common Reasons Well Yield Decreases</h2>
          <div className={styles.reasonsGrid}>
            {declineReasons.map((r) => (
              <div key={r.num} className={styles.reasonCard}>
                <div className={styles.reasonNum}>{r.num}</div>
                <h3 className={styles.reasonTitle}>{r.title}</h3>
                <p className={styles.reasonDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.methodsSection}>
          <span className="section-label">Rehabilitation Methods</span>
          <h2 className="section-title">How We Restore Well Yield</h2>
          <div className={styles.methodGrid}>
            {methods.map((m) => (
              <div key={m.title} className={styles.methodCard}>
                <span className={styles.methodIcon}><Icon name={m.icon} size={30} /></span>
                <h3 className={styles.methodTitle}>{m.title}</h3>
                <p className={styles.methodDesc}>{m.desc}</p>
                <div className={styles.methodBest}>{m.best}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.compareSection}>
          <span className="section-label">Rehab vs. New Well</span>
          <h2 className="section-title">When to Rehabilitate vs. When to Drill New</h2>
          <p className={styles.bodyP}>
            We give honest guidance. Sometimes rehabilitation is clearly the right call.
            Sometimes a new well is. Here is how we evaluate each situation.
          </p>
          <div className={styles.compareTable}>
            <div className={styles.compareHeader}>
              <span>Factor</span>
              <span>Rehabilitation</span>
              <span>New Well Drilling</span>
            </div>
            {compareRows.map((row) => (
              <div key={row.factor} className={styles.compareRow}>
                <span className={styles.compareFactor}>{row.factor}</span>
                <span className={styles.compareRehab}>{row.rehab}</span>
                <span className={styles.compareNew}>{row.newWell}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ironBacteriaSection}>
          <span className="section-label">Houston Specific</span>
          <h2 className="section-title">Iron Bacteria in the Houston area Wells</h2>
          <p className={styles.bodyP}>
            The formation beneath Montgomery County contains elevated dissolved iron —
            a natural characteristic of the sandy coastal plain formation. This creates
            ideal conditions for iron bacteria, which oxidize the iron and produce
            reddish-brown slime colonies inside wells over time.
          </p>
          <div className={styles.ironSigns}>
            <h3 className={styles.ironSignsTitle}>Signs of Iron Bacteria in Your Well</h3>
            <div className={styles.ironSignGrid}>
              {[
                { sign: 'Red or orange slime', detail: 'Visible in toilet tank, inside hose bibs, or around fixtures' },
                { sign: 'Sulfur or rotten egg odor', detail: 'Often accompanies iron bacteria or SRB colonies' },
                { sign: 'Stained fixtures', detail: 'Reddish-brown staining on sinks, showers, or laundry' },
                { sign: 'Declining yield', detail: 'Gradually less water pressure or pump taking longer to fill pressure tank' },
              ].map((s) => (
                <div key={s.sign} className={styles.ironSignCard}>
                  <strong>{s.sign}</strong>
                  <span>{s.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Well Rehabilitation FAQs</h2>
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
            <h2>Restore Your Well Before You Replace It</h2>
            <p>
              Rehabilitation costs $800–$2,500. A new well costs $8,000–$18,000.
              Let us diagnose your well first — free estimate, honest guidance.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447</a>
              <Link href="/contact" className="btn btn-outline">Request Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
