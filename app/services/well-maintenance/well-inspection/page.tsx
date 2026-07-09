import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Inspection — Home Buyers, Real Estate, Annual Service | B-E Waterwell',
  description:
    'Certified water well inspection in Houston, TX. For home buyers, real estate transactions, FHA/VA loans, and annual well owner maintenance. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-maintenance/well-inspection' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Water Well Inspection — Houston, TX',
      provider: {
        '@type': 'LocalBusiness',
        name: 'B-E Waterwell Services',
        telephone: '+1-281-448-4447',
        address: { '@type': 'PostalAddress', addressLocality: 'Magnolia', addressRegion: 'TX', postalCode: '77354' },
      },
      areaServed: 'Houston, TX',
      description: 'Certified water well inspection for home buyers, real estate, FHA/VA/USDA loans, and annual maintenance. Houston, TX. TDLR licensed.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a well inspection include?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our inspection covers: visual inspection of wellhead and casing, pump performance test (flow rate and recovery rate), pressure system check (tank, switch, pressures), basic water quality sample collection, and a written report with photos. For FHA/VA/USDA loan requirements, we collect water samples and test for bacteria and nitrates as required.' },
        },
        {
          '@type': 'Question',
          name: 'How long does a well inspection take?',
          acceptedAnswer: { '@type': 'Answer', text: 'The on-site inspection typically takes 1–2 hours. Water quality lab results take 3–5 business days. We provide a written report with photos within 24 hours of the site visit. For real estate transactions, we offer fast turnaround to avoid delays at closing.' },
        },
        {
          '@type': 'Question',
          name: 'What if the well fails inspection?',
          acceptedAnswer: { '@type': 'Answer', text: 'If the well has issues, we provide a written summary of what was found and what remediation is needed. Many issues — low pressure, waterlogged tank, minor water quality problems — are repairable at reasonable cost. We quote remediation separately from the inspection so buyers and sellers have clear information for negotiations.' },
        },
        {
          '@type': 'Question',
          name: 'Do you provide a written report for real estate?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide a written inspection report with photos, pump performance data, and water quality results. This report is formatted for use in real estate transactions and acceptable to most lenders for FHA, VA, and USDA loan requirements in Houston, TX.' },
        },
        {
          '@type': 'Question',
          name: 'Will a well inspection delay real estate closing?',
          acceptedAnswer: { '@type': 'Answer', text: 'It should not if scheduled early in the due diligence period. We offer fast turnaround — site visit within 2–3 business days of scheduling, written report within 24 hours of site visit, lab results in 3–5 business days. Schedule the well inspection at the same time as your general home inspection.' },
        },
      ],
    },
  ],
};

const whoNeeds = [
  { icon: '🏠', title: 'Home Buyers', desc: 'Purchasing a property with a private well? A pre-purchase inspection gives you an independent assessment of the well system — pump condition, water quality, pressure performance.' },
  { icon: '📋', title: 'Sellers Pre-Listing', desc: 'A pre-listing well inspection lets you address issues before they become closing surprises. Buyers and agents appreciate documented inspection history.' },
  { icon: '🔄', title: 'Annual Owners', desc: 'Current well owners benefit from annual or every-3-year inspection to catch issues early — pump wear, water quality changes, pressure tank decline.' },
  { icon: '🏦', title: 'FHA / VA / USDA Borrowers', desc: 'Government-backed loans require a functioning well inspection and water quality test meeting minimum distance requirements. We are familiar with all applicable requirements.' },
  { icon: '🏘️', title: 'Real Estate Agents', desc: 'Houston realtors rely on our fast turnaround inspection reports to keep transactions on track. We know what lenders need and deliver it quickly.' },
];

const coverItems = [
  { item: 'Wellhead & casing visual', detail: 'Vent screen, sanitary cap, surface seal, setback from septic' },
  { item: 'Pump performance test', detail: 'Flow rate (GPM), pressure output, motor amp draw' },
  { item: 'Recovery rate assessment', detail: 'How quickly the water level recovers after pumping' },
  { item: 'Pressure system check', detail: 'Tank pre-charge, pressure switch calibration, cut-in/cut-out settings' },
  { item: 'Water quality sample', detail: 'Collected for lab analysis — bacteria, nitrates, and basic chemistry' },
  { item: 'Written report with photos', detail: 'Delivered within 24 hours of site visit, formatted for lenders' },
];

const faqs = [
  {
    question: 'What exactly does a well inspection include?',
    answer: 'Our inspection covers: visual inspection of wellhead and casing (sanitary cap, vent screen, setback from structures), pump performance test (flow rate and motor amp draw), pressure system check (tank pre-charge, switch calibration), basic water quality sample collection, and a written report with photos. For FHA/VA/USDA requirements, we test for bacteria and nitrates as required by the applicable program.',
  },
  {
    question: 'How long does a well inspection take?',
    answer: 'On-site inspection takes 1–2 hours. Written report delivered within 24 hours of site visit. Lab water quality results take 3–5 business days. We can schedule site visits within 2–3 business days in most cases. For urgent real estate closings, call us directly — we accommodate fast timelines whenever possible.',
  },
  {
    question: 'What happens if the well fails inspection?',
    answer: 'We provide a written summary of all issues found and what remediation is recommended. Many issues are fixable at reasonable cost — a waterlogged pressure tank ($400–$900), a failing pump ($800–$1,800), a water quality treatment system. We quote remediation separately so buyers and sellers have clear information for negotiations. Not all "failures" mean a new well.',
  },
  {
    question: 'Will the well inspection delay our real estate closing?',
    answer: 'Not if scheduled at the start of the due diligence period. Schedule the well inspection the same day as your general home inspection. We provide site visits within 2–3 business days, written reports within 24 hours of the visit, and lab results in 3–5 business days. Total turnaround: about one week. Most closings are 30+ days out — there is ample time if you do not wait.',
  },
  {
    question: 'Do you provide written reports accepted by FHA and VA lenders?',
    answer: 'Yes. Our written inspection reports are formatted with the data that FHA, VA, and USDA Rural Development lenders require. We include pump performance data, wellhead condition, setback distances, and water quality lab results. If your lender has a specific form or checklist, share it with us when scheduling — we will make sure we capture everything needed.',
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

export default function WellInspectionPage() {
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
              <span>Well Inspection</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>Houston, TX — Written Report · Fast Turnaround</span>
              <h1 className={styles.h1Line2}>Water Well Inspection</h1>
              <span className={styles.h1Line3}>Home Buyers · Real Estate · Annual Inspection</span>
            </div>
            <p className={styles.heroSubtitle}>
              Buying a home with a well? Closing an FHA or VA loan? Need an annual well checkup?
              B-E Waterwell provides certified well inspections with written reports accepted by
              lenders and real estate agents across Houston, TX.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447</a>
              <Link href="/contact" className="btn btn-outline">Schedule Inspection</Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceLayout category="well-maintenance" categoryLabel="Well Maintenance" defaultService="Well Inspection">

        <section className={styles.whoSection}>
          <span className="section-label">Who Needs a Well Inspection</span>
          <h2 className="section-title">Five Situations That Require a Well Inspection</h2>
          <div className={styles.whoGrid}>
            {whoNeeds.map((w) => (
              <div key={w.title} className={styles.whoCard}>
                <span className={styles.whoIcon}>{w.icon}</span>
                <h3 className={styles.whoTitle}>{w.title}</h3>
                <p className={styles.whoDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.coverSection}>
          <span className="section-label">What We Check</span>
          <h2 className="section-title">What Our Inspection Covers</h2>
          <div className={styles.coverGrid}>
            {coverItems.map((c) => (
              <div key={c.item} className={styles.coverCard}>
                <div className={styles.coverCheck}>✓</div>
                <div>
                  <h3 className={styles.coverItem}>{c.item}</h3>
                  <p className={styles.coverDetail}>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.loanSection}>
          <span className="section-label">FHA · VA · USDA</span>
          <h2 className="section-title">Government-Backed Loan Well Requirements</h2>
          <p className={styles.bodyP}>
            FHA, VA, and USDA Rural Development loans all require that wells meet minimum
            distance requirements from potential contamination sources — typically 50 feet
            from a septic tank and 100 feet from a drain field. They also require that
            the well water meets minimum bacteriological and chemical quality standards.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            Our inspection report documents wellhead location, setback distances from
            septic systems and structures, pump performance, and water quality lab results.
            This data package is what your lender&apos;s appraiser needs to satisfy
            the well-related conditions of your loan. We know what each program requires
            and make sure we capture it.
          </p>
          <div className={styles.loanCallout}>
            <strong>Tip for buyers:</strong> Schedule your well inspection at the same time
            as your general home inspection — not after the appraisal comes back with a well
            condition. Lab results take 3–5 business days, and you do not want them on the
            critical path to closing.
          </div>
        </section>

        <section className={styles.realtorSection}>
          <span className="section-label">For Real Estate Agents</span>
          <h2 className="section-title">Fast Turnaround for the Houston area Realtors</h2>
          <p className={styles.bodyP}>
            If you are representing a buyer or seller in the Houston area with a private well,
            we offer priority scheduling for real estate inspection requests. We know
            what lenders need, we deliver written reports within 24 hours of the site visit,
            and we communicate clearly with everyone in the transaction about what was found
            and what — if anything — needs to be remediated.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            A failed well inspection does not have to kill a deal. Most issues are fixable.
            We will tell you clearly what was found, what it costs to fix, and what timeline
            is realistic — giving buyers and sellers real information to negotiate with.
          </p>
          <div style={{ marginTop: 20 }}>
            <a href="tel:+12814484447" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Call to Schedule — (281) 448-4447
            </a>
          </div>
        </section>

        <section className={styles.costSection}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">What Does a Well Inspection Cost?</h2>
          <p className={styles.bodyP}>
            A standard well inspection including site visit, pump performance test, pressure
            system check, water quality sample collection, and written report typically costs
            <strong> $250–$450</strong>. Lab fees for water quality testing are additional
            depending on the panel required (basic bacteria + nitrates vs. comprehensive chemistry).
            We confirm the exact cost when scheduling based on your specific requirements.
          </p>
        </section>

        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Well Inspection FAQs</h2>
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
            <h2>Schedule Your Well Inspection Today</h2>
            <p>
              Written reports within 24 hours. Fast turnaround for real estate transactions.
              FHA/VA/USDA compliant. $250–$450. TDLR licensed.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447</a>
              <Link href="/contact" className="btn btn-outline">Schedule Inspection</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
