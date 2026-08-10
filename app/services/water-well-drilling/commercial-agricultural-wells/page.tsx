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
  title: 'Commercial & Agricultural Well Drilling — Houston, TX | B-E Waterwell',
  description:
    'Commercial and agricultural water well drilling in Houston, TX. Ranches, farms, equestrian properties, and commercial sites. TDLR licensed. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-drilling/commercial-agricultural-wells' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial & Agricultural Well Drilling — Houston, TX',
      provider: {
        '@type': 'LocalBusiness',
        name: 'B-E Waterwell Services',
        telephone: '+1-281-448-4447',
        address: { '@type': 'PostalAddress', addressLocality: 'Magnolia', addressRegion: 'TX', postalCode: '77354' },
      },
      areaServed: 'Houston, TX',
      description: 'High-capacity commercial and agricultural well drilling for ranches, farms, nurseries, equestrian properties, and commercial sites. TDLR licensed. Houston, TX.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How deep are commercial wells in the Houston area?',
          acceptedAnswer: { '@type': 'Answer', text: 'Commercial and agricultural wells in the Houston area typically range from 200 to 500+ feet depending on target aquifer, location, and required yield. Higher-capacity commercial wells may target deeper the water-bearing zone or Trinity aquifer zones. We assess your site and water demand before quoting.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need a special permit for a high-capacity well in Texas?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wells exceeding certain production thresholds require enhanced permits from your Groundwater Conservation District — LSGCD in Montgomery County, HGSD in Harris County. Commercial and agricultural high-capacity permits involve additional documentation and review. B-E Waterwell handles all permitting as part of every drilling job.' },
        },
        {
          '@type': 'Question',
          name: 'What does commercial well drilling cost in the Houston area?',
          acceptedAnswer: { '@type': 'Answer', text: 'Commercial and agricultural wells in the Houston area typically range from $15,000–$35,000+ depending on depth, casing diameter, pump specifications, and required yield. Equestrian and ranch applications vary widely by water demand. We provide free written estimates with itemized scope.' },
        },
        {
          '@type': 'Question',
          name: 'How long does commercial well drilling take?',
          acceptedAnswer: { '@type': 'Answer', text: 'Commercial well drilling typically takes 2–4 days on-site for the drilling, casing, and development phase. Permitting adds 2–4 weeks for high-capacity commercial permits. Total timeline from initial assessment to operational well is typically 4–8 weeks for standard commercial applications.' },
        },
      ],
    },
  ],
};

const wellTypes = [
  { icon: 'livestock' as const, title: 'Ranch & Livestock Wells', desc: 'High-yield wells for cattle ranches, livestock operations, and large rural properties. Sized for watering systems, stock tanks, and irrigation.' },
  { icon: 'horse' as const, title: 'Equestrian Properties', desc: 'Dedicated wells for horse properties and stables. Multiple outlet capability, trough systems, and wash rack supply. Sized for the real daily water demand of horses.' },
  { icon: 'sprout' as const, title: 'Farms & Nurseries', desc: 'Agricultural wells for farming operations, plant nurseries, and greenhouse facilities. Irrigation-scale flow rates with appropriate pump sizing for extended run times.' },
  { icon: 'crane' as const, title: 'Commercial Properties', desc: 'Office parks, light industrial, retail developments, and any commercial property where city water supply is unavailable or cost-prohibitive.' },
  { icon: 'droplet' as const, title: 'Irrigation Scale', desc: 'Large-volume wells for irrigation districts, multi-property irrigation systems, and acreage-scale agricultural irrigation. Multi-zone completion available.' },
];

const specs = [
  { spec: 'Casing Diameter', residential: '6-inch PVC', commercial: '8-inch or 10-inch steel or PVC', detail: 'Larger casing accommodates higher-horsepower pumps and higher flow rates.' },
  { spec: 'Pump Horsepower', residential: '½ – 1½ HP', commercial: '2 – 20+ HP', detail: 'High-yield applications require larger pumps sized to your GPM demand.' },
  { spec: 'Aquifer Target', residential: 'the water-bearing zone (180–320 ft)', commercial: 'deeper zones depending on yield requirement', detail: 'Higher-yield applications may require deeper aquifer targeting.' },
  { spec: 'Permit Type', residential: 'Standard GCD permit', commercial: 'High-capacity permit — additional documentation required', detail: 'LSGCD or HGSD high-capacity permit process. We handle all filings.' },
];

const equestrian = [
  { item: 'Daily water per horse', detail: '10–15 gallons minimum per horse per day for drinking; up to 30 gallons including washing' },
  { item: 'Trough systems', detail: 'Automatic trough fill systems fed from well require consistent flow and pressure' },
  { item: 'Multiple outlet design', detail: 'Stall lines, wash racks, arena dust control, and pasture troughs — design the distribution at drill time' },
  { item: 'Water quality for horses', detail: 'High iron content can affect palatability — water treatment planning at installation' },
];

const faqs = [
  {
    question: 'How deep are commercial and agricultural wells in the Houston area?',
    answer: 'Commercial and agricultural wells in the Houston area range from 200 to 500+ feet depending on location, target aquifer, and required yield. Standard residential wells run 180–320 feet. Higher-demand commercial applications may require deeper zones (240–440 ft) for maximum yield. We assess your site water demand before recommending a target depth.',
  },
  {
    question: 'Do I need a high-capacity permit for a commercial well in Texas?',
    answer: 'Wells exceeding production thresholds require enhanced high-capacity permits from your Groundwater Conservation District. In Montgomery County, that is LSGCD. In Harris County, it is HGSD. High-capacity permits require additional documentation including intended water use, quantity requested, and sometimes hydrological assessment. B-E Waterwell handles all permitting as part of every drilling job. We are familiar with the LSGCD and HGSD high-capacity permit process.',
  },
  {
    question: 'What does commercial well drilling cost in Houston, TX?',
    answer: 'Commercial and agricultural wells typically range from $15,000–$35,000+ complete, depending on depth, casing diameter, pump specifications, and required yield. Equestrian properties and small farm applications are often in the $15,000–$22,000 range. Large commercial or multi-zone applications are higher. We provide free, itemized written estimates — no guessing on what you are paying for.',
  },
  {
    question: 'How long does commercial well drilling take?',
    answer: 'On-site drilling and completion typically takes 2–4 days for commercial applications. The larger casing, higher-horsepower pumps, and deeper targets take more time than residential jobs. Permitting adds 2–4 weeks for high-capacity commercial permits. From initial assessment to operational well, most commercial jobs complete in 4–8 weeks. We walk you through the timeline during the estimate process.',
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

export default function CommercialAgriculturalWellsPage() {
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
              <Link href="/services/water-well-drilling">Water Well Drilling</Link><span>/</span>
              <span>Commercial &amp; Agricultural</span>
            </nav>
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>Magnolia and Houston, TX Area · TDLR Licensed · Since 1979</span>
              <h1 className={styles.h1Line2}>Commercial &amp; Agricultural Wells</h1>
              <span className={styles.h1Line3}>Ranches · Farms · Equestrian · Commercial Sites</span>
            </div>
            <p className={styles.heroSubtitle}>
              B-E Waterwell drills high-capacity commercial and agricultural wells across
              Houston, TX — from horse properties in Magnolia to nurseries in Waller County
              to commercial sites in Conroe. TDLR licensed. 45+ years. 5,000+ wells drilled.
            </p>
            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447</a>
              <Link href="/contact" className="btn btn-outline">Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceLayout category="water-well-drilling" categoryLabel="Well Drilling" defaultService="Commercial / Agricultural">

        <section className={styles.typesSection}>
          <span className="section-label">Applications</span>
          <h2 className="section-title">Commercial & Agricultural Well Types We Drill</h2>
          <div className={styles.typesGrid}>
            {wellTypes.map((t) => (
              <div key={t.title} className={styles.typeCard}>
                <span className={styles.typeIcon}><Icon name={t.icon} size={30} /></span>
                <h3 className={styles.typeTitle}>{t.title}</h3>
                <p className={styles.typeDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.specsSection}>
          <span className="section-label">Technical Specs</span>
          <h2 className="section-title">Commercial vs. Residential Drilling Differences</h2>
          <p className={styles.bodyP}>
            Commercial and agricultural wells differ from residential wells in casing size,
            pump horsepower, aquifer targeting, and permitting requirements. Here is a
            comparison of what changes when we move from residential to commercial scale.
          </p>
          <div className={styles.specsTable}>
            <div className={styles.specsHeader}>
              <span>Specification</span>
              <span>Residential</span>
              <span>Commercial / Ag</span>
            </div>
            {specs.map((row) => (
              <div key={row.spec} className={styles.specsRow}>
                <span className={styles.specsLabel}>{row.spec}</span>
                <span className={styles.specsRes}>{row.residential}</span>
                <span className={styles.specsCom}>{row.commercial}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.equestrianSection}>
          <span className="section-label">Equestrian & Horse Properties</span>
          <h2 className="section-title">Well Drilling for Equestrian Properties in the Houston area</h2>
          <p className={styles.bodyP}>
            Houston — particularly Magnolia, Montgomery, and Waller County — is
            equestrian country. Horse properties have specific water demands that
            residential well systems are not designed for. We plan the well for your
            actual daily water demand and distribution needs from the start.
          </p>
          <div className={styles.eqGrid}>
            {equestrian.map((e) => (
              <div key={e.item} className={styles.eqCard}>
                <h3 className={styles.eqItem}>{e.item}</h3>
                <p className={styles.eqDetail}>{e.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.permitSection}>
          <span className="section-label">Permitting</span>
          <h2 className="section-title">Commercial & Agricultural Well Permits in Texas</h2>
          <p className={styles.bodyP}>
            All commercial and agricultural wells in Texas require Groundwater Conservation District permits.
            Commercial and agricultural wells exceeding production thresholds require
            enhanced high-capacity permits — including documentation of intended water use,
            requested production quantity, and in some cases hydrological review.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            In Montgomery County, permits go through LSGCD (Lone Star GCD).
            In Harris County, HGSD (Harris-Galveston Subsidence District) regulates well permits.
            In Waller County, both LSGCD and BVGCD (Brazos Valley GCD) may have jurisdiction
            depending on the specific location.
          </p>
          <p className={styles.bodyP} style={{ marginTop: 14 }}>
            B-E Waterwell handles all permitting on your behalf. We have 45+ years of
            experience navigating the GCD permit process in all three counties.
          </p>
        </section>

        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Commercial & Agricultural Well FAQs</h2>
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
            <h2>Drill Your Commercial or Agricultural Well</h2>
            <p>
              Serving ranches, farms, equestrian properties, and commercial sites
              across Houston, TX since 1979. Free written estimates.
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
