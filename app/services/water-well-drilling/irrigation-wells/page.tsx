import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import CityFaqAccordion from '../../../components/CityFaqAccordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Irrigation Well Drilling — North Houston, Montgomery County TX | B-E Waterwell',
  description:
    'Dedicated irrigation well installation in North Houston TX. Separate your sprinkler system from household water. Save on utility bills. Free estimate. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-drilling/irrigation-wells' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Irrigation Well Drilling — North Houston TX',
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
        'Dedicated irrigation well drilling for residential lots, acreage, farms, ranches, and equestrian properties across North Houston. Stop paying city water rates for lawn irrigation.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need a permit to drill an irrigation well in Texas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All new wells in Texas — including irrigation wells — require a permit from your local Groundwater Conservation District. B-E Waterwell handles all permitting as part of the installation. Permit fees and processing are included in your estimate.',
          },
        },
        {
          '@type': 'Question',
          name: 'How deep is an irrigation well in North Houston?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Irrigation wells follow the same aquifer depths as residential wells. In Montgomery County that is typically 180–320 ft to the Jasper Aquifer. In Harris County NW it is 180–360 ft. We size the pump specifically for irrigation demand, which is different from household demand.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use an irrigation well for livestock or horses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. An irrigation or non-potable well can supply water for livestock, horses, and general agricultural use. If you need potable quality for animal consumption, we can discuss water treatment options as well.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does irrigation well installation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Permit approval typically takes 5–10 business days. Once the permit is in hand, drilling and installation is typically completed in one day. Total start-to-finish timeline is usually 1–2 weeks.',
          },
        },
      ],
    },
  ],
};

const whyDedicated = [
  {
    icon: '💸',
    title: 'Stop Paying City Water Rates',
    desc: 'Running a sprinkler system on city water in North Houston can cost $150–$250 per month or more during summer. A dedicated irrigation well eliminates that bill entirely.',
  },
  {
    icon: '🏠',
    title: 'Protect Your Household Supply',
    desc: 'Running irrigation on your household well creates pressure drops, overworks your pump, and shortens pump life. A dedicated well keeps systems separate and both running better.',
  },
  {
    icon: '🚫',
    title: 'No City Water Restrictions',
    desc: 'City water use restrictions during drought conditions do not apply to your own well water. Water your lawn when it needs it, not when the city allows it.',
  },
  {
    icon: '📈',
    title: 'Pays for Itself',
    desc: 'At $150–$250/month in irrigation water savings, most wells pay for themselves in 4–6 years — after that, your irrigation water is essentially free.',
  },
];

const included = [
  { icon: '🔩', title: 'Rotary Rig Drilling', desc: 'Drilled to your target aquifer with full geological log. Cased in Schedule 40 PVC with gravel pack and screen.' },
  { icon: '⚙️', title: 'Irrigation Pump Sizing', desc: 'Pump sized for your sprinkler system flow rate and pressure requirements — not generic household sizing.' },
  { icon: '🔧', title: 'Dedicated Wellhead', desc: 'Separate wellhead, pitless adapter, and surface casing distinct from any existing household well on the property.' },
  { icon: '🔌', title: 'System Integration', desc: 'We work with your existing irrigation system or contractor to ensure clean integration at the pump controller.' },
  { icon: '📋', title: 'All Permits Included', desc: 'GCD permit filing and fees, driller's completion report, and all required documentation included in your estimate.' },
];

const bestFor = [
  { label: 'Residential Lots', detail: '½ acre and up with established lawn and landscaping irrigation needs.' },
  { label: 'Acreage Properties', detail: '2–20 acre rural residential properties in Montgomery and Waller counties.' },
  { label: 'Small Farms', detail: 'Vegetable gardens, orchards, hay fields, and small-scale agricultural irrigation.' },
  { label: 'Equestrian Properties', detail: 'Horse properties with arena dust control, paddock watering, and pasture irrigation.' },
  { label: 'Nurseries', detail: 'Plant nurseries and greenhouse operations requiring high-volume, reliable water.' },
  { label: 'HOA Common Areas', detail: 'Subdivision common area irrigation not served by municipal connection.' },
];

const faqs = [
  {
    question: 'Do I need a permit to drill an irrigation well in Texas?',
    answer:
      'Yes. All new wells in Texas require a permit from your local Groundwater Conservation District — this applies to irrigation wells the same as residential drinking water wells. B-E Waterwell handles all permitting (LSGCD in Montgomery County, HGSD in Harris County) as part of the installation. You do not file anything yourself.',
  },
  {
    question: 'How deep is an irrigation well in North Houston?',
    answer:
      'Irrigation wells reach the same aquifers as residential wells. Montgomery County properties typically require 180–320 ft to the Jasper Aquifer. Harris County NW (Tomball, Cypress, Spring) is 180–360 ft. The pump is sized specifically for irrigation demand — higher flow rates at lower pressure than a household system.',
  },
  {
    question: 'Can I use my irrigation well for horses or livestock?',
    answer:
      'Yes. A non-potable irrigation well can serve livestock and horses for non-drinking uses like arena dust control, washing, and paddock watering. For animal drinking water, we recommend a water quality test and can discuss treatment options if needed.',
  },
  {
    question: 'How long does irrigation well installation take?',
    answer:
      'Total timeline is typically 1–2 weeks from start to finish. Permit approval from your Groundwater Conservation District takes 5–10 business days. Once the permit is approved, drilling and complete installation takes one day on-site.',
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

export default function IrrigationWellsPage() {
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
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/services">Services</Link>
                <span>/</span>
                <Link href="/services/water-well-drilling">Water Well Drilling</Link>
                <span>/</span>
                <span>Irrigation Wells</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>North Houston · Montgomery County TX</span>
                <h1 className={styles.h1Line2}>Irrigation Well Drilling</h1>
                <span className={styles.h1Line3}>Stop Paying City Water Rates for Your Lawn</span>
              </div>
              <p className={styles.heroSubtitle}>
                A dedicated irrigation well separates your sprinkler system from your
                household supply, eliminates $150–$250/month in water bills, and pays
                for itself in 4–6 years. B-E Waterwell has been drilling irrigation wells
                across North Houston since 1979.
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
        </div>
      </section>

      {/* ── SERVICELAYOUT ─────────────────────── */}
      <ServiceLayout
        category="water-well-drilling"
        categoryLabel="Well Drilling"
        defaultService="Irrigation Well"
      >

        {/* ── WHY DEDICATED ───────────────────── */}
        <section className={styles.whySection}>
          <span className="section-label">Why a Dedicated Irrigation Well</span>
          <h2 className="section-title">
            Separate Your Irrigation Well from Your Household Supply
          </h2>
          <p className={styles.bodyP}>
            Running your lawn sprinklers on your household well — or on city water — is
            costing you money and wear. A dedicated irrigation well in North Houston TX
            is one of the best long-term investments for any property with more than half
            an acre of irrigated landscape.
          </p>
          <div className={styles.whyGrid}>
            {whyDedicated.map((w) => (
              <div key={w.title} className={styles.whyCard}>
                <span className={styles.whyIcon}>{w.icon}</span>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ROI SECTION ─────────────────────── */}
        <section className={styles.roiSection}>
          <span className="section-label">Return on Investment</span>
          <h2 className="section-title">How Quickly Does an Irrigation Well Pay Off?</h2>
          <div className={styles.roiGrid}>
            <div className={styles.roiCard}>
              <div className={styles.roiNumber}>$150–$250</div>
              <div className={styles.roiLabel}>Avg. Monthly Irrigation Bill</div>
              <p className={styles.roiDesc}>Typical city water irrigation cost for a North Houston home with established landscaping during growing season.</p>
            </div>
            <div className={styles.roiCard}>
              <div className={styles.roiNumber}>4–6 yrs</div>
              <div className={styles.roiLabel}>Typical Payback Period</div>
              <p className={styles.roiDesc}>At $200/month average savings, a $10,000–$14,000 irrigation well pays for itself in under 6 years. After that — free water.</p>
            </div>
            <div className={styles.roiCard}>
              <div className={styles.roiNumber}>20–30 yrs</div>
              <div className={styles.roiLabel}>Expected Well Lifespan</div>
              <p className={styles.roiDesc}>A properly drilled and maintained irrigation well delivers decades of service. The pump may need replacement once — the well itself rarely does.</p>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ─────────────────── */}
        <section className={styles.includedSection}>
          <span className="section-label">What's Included</span>
          <h2 className="section-title">Complete Irrigation Well Installation</h2>
          <div className={styles.includedGrid}>
            {included.map((item) => (
              <div key={item.title} className={styles.includedCard}>
                <span className={styles.includedIcon}>{item.icon}</span>
                <h3 className={styles.includedTitle}>{item.title}</h3>
                <p className={styles.includedDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BEST FOR ────────────────────────── */}
        <section className={styles.bestForSection}>
          <span className="section-label">Who It's For</span>
          <h2 className="section-title">Irrigation Wells Are Best For</h2>
          <div className={styles.bestForGrid}>
            {bestFor.map((b) => (
              <div key={b.label} className={styles.bestForCard}>
                <h3 className={styles.bestForLabel}>{b.label}</h3>
                <p className={styles.bestForDetail}>{b.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Irrigation Well FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Drill</span>
          <h2 className="section-title">Irrigation Well Service Areas</h2>
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
            <h2>Get a Free Irrigation Well Estimate</h2>
            <p>
              Stop paying city water rates for irrigation. Call B-E Waterwell Services
              for a free, written estimate — no pressure, no hidden fees.
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
