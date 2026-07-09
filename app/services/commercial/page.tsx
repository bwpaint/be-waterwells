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
  title: 'Commercial & Agricultural Water Well Services — Houston, TX | B-E Waterwell Services',
  description:
    'Commercial, agricultural, ranch & equestrian high-capacity water wells in Houston, TX. Water well drilling contractors since 1979. High-capacity GCD permits handled. TDLR Licensed. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/commercial' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial & Agricultural Water Well Services — Houston, TX',
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
        'High-capacity commercial and agricultural water well drilling for businesses, farms, nurseries, ranches, and equestrian properties across the Houston area. Water well drilling contractors since 1979, TDLR licensed.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How deep are commercial and agricultural wells in the Houston area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Commercial and agricultural wells in the Houston area range from 200 to 500+ feet depending on location, target aquifer, and required yield. Standard residential Jasper Aquifer wells run 180–320 feet. Higher-demand commercial applications may require the deeper Evangeline Aquifer (240–440 ft) or even the Trinity Group formation for maximum yield. We assess your site water demand before recommending a target depth.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a high-capacity permit for a commercial well in Texas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wells exceeding production thresholds require enhanced high-capacity permits from your Groundwater Conservation District. In Montgomery County, that is LSGCD. In Harris County, it is HGSD. High-capacity permits require additional documentation including intended water use, quantity requested, and sometimes hydrological assessment. B-E Waterwell handles all permitting as part of every drilling job.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does commercial well drilling cost in Houston, TX?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pricing depends on your location, well depth, static water level, and equipment selection — call us to discuss your project.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does commercial well drilling take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On-site drilling and completion typically takes 2–4 days for commercial applications. The larger casing, higher-horsepower pumps, and deeper targets take more time than residential jobs. Permitting adds 2–4 weeks for high-capacity commercial permits. From initial assessment to operational well, most commercial jobs complete in 4–8 weeks.',
          },
        },
      ],
    },
  ],
};

const wellTypes = [
  {
    icon: '🐄',
    title: 'Ranch & Livestock Wells',
    desc: 'High-yield wells for cattle ranches, livestock operations, and large rural properties. Sized for watering systems, stock tanks, and irrigation.',
    highlights: ['High-yield output', 'Stock tank supply', 'Livestock watering systems', 'Acreage irrigation'],
  },
  {
    icon: '🐎',
    title: 'Equestrian Properties',
    desc: 'Dedicated wells for horse properties and stables. Multiple outlet capability, trough systems, and wash rack supply. Sized for the real daily water demand of horses.',
    highlights: ['Multiple outlet design', 'Trough fill systems', 'Wash rack supply', 'Stall line distribution'],
  },
  {
    icon: '🌱',
    title: 'Farms & Nurseries',
    desc: 'Agricultural wells for farming operations, plant nurseries, and greenhouse facilities. Irrigation-scale flow rates with appropriate pump sizing for extended run times.',
    highlights: ['Irrigation-scale flow', 'Extended run-time pumps', 'Greenhouse supply', 'Ag exemption assistance'],
  },
  {
    icon: '🏗️',
    title: 'Commercial Properties',
    desc: 'Office parks, light industrial, retail developments, and any commercial property where city water supply is unavailable or cost-prohibitive.',
    highlights: ['High-capacity pumps', 'Larger casing diameters', 'Reduced utility cost', 'Reliable site supply'],
  },
  {
    icon: '💧',
    title: 'Irrigation Scale',
    desc: 'Large-volume wells for irrigation districts, multi-property irrigation systems, and acreage-scale agricultural irrigation. Multi-zone completion available.',
    highlights: ['Large-volume output', 'Multi-zone completion', 'Multi-property systems', 'Acreage-scale design'],
  },
];

const specRows = [
  {
    label: 'Casing Diameter',
    residential: '6-inch PVC',
    commercial: '8-inch or 10-inch steel or PVC',
    notes: 'Larger casing accommodates higher-horsepower pumps and higher flow rates.',
  },
  {
    label: 'Pump Horsepower',
    residential: '½ – 1½ HP',
    commercial: '2 – 20+ HP',
    notes: 'High-yield applications require larger pumps sized to your GPM demand.',
  },
  {
    label: 'Aquifer Target',
    residential: 'Jasper (180–320 ft)',
    commercial: 'Jasper, Evangeline, or Trinity depending on yield requirement',
    notes: 'Higher-yield applications may require deeper aquifer targeting.',
  },
  {
    label: 'Permit Type',
    residential: 'Standard GCD permit',
    commercial: 'High-capacity permit — additional documentation required',
    notes: 'LSGCD or HGSD high-capacity permit process. We handle all filings.',
  },
];

const relatedServices = [
  {
    icon: '🛠️',
    title: 'Drilling & Installation',
    slug: 'water-well-drilling',
    desc: 'New rotary rig drilling, casing, development, and complete pump installation for residential, irrigation, and commercial sites.',
    highlights: ['Rotary rig to target aquifer', 'Schedule 40 PVC casing', 'Pump & pressure tank', '2-year warranty'],
  },
  {
    icon: '🔧',
    title: 'Rehabilitation',
    slug: 'well-rehabilitation',
    desc: 'Restore yield and water quality on aging wells — well screen repair, iron bacteria treatment, and redevelopment.',
    highlights: ['Well screen repair', 'Iron bacteria treatment', 'Yield restoration', 'Redevelopment'],
  },
  {
    icon: '📋',
    title: 'Maintenance & Inspection',
    slug: 'well-maintenance',
    desc: 'Annual inspection and ongoing maintenance programs that keep high-demand commercial and ag wells running for decades.',
    highlights: ['Annual inspection', 'Pump performance test', 'Written reports', 'Priority scheduling'],
  },
];

const faqs = [
  {
    question: 'How deep are commercial and agricultural wells in the Houston area?',
    answer:
      'Commercial and agricultural wells in the Houston area range from 200 to 500+ feet depending on location, target aquifer, and required yield. Standard residential Jasper Aquifer wells run 180–320 feet. Higher-demand commercial applications may require the deeper Evangeline Aquifer (240–440 ft) or even the Trinity Group formation for maximum yield. We assess your site water demand before recommending a target depth.',
  },
  {
    question: 'Do I need a high-capacity permit for a commercial well in Texas?',
    answer:
      'Wells exceeding production thresholds require enhanced high-capacity permits from your Groundwater Conservation District. In Montgomery County, that is LSGCD. In Harris County, it is HGSD. High-capacity permits require additional documentation including intended water use, quantity requested, and sometimes hydrological assessment. B-E Waterwell handles all permitting as part of every drilling job. We are familiar with the LSGCD and HGSD high-capacity permit process.',
  },
  {
    question: 'What does commercial well drilling cost in Houston, TX?',
    answer:
      'Pricing depends on your location, well depth, static water level, and equipment selection — call us to discuss your project.',
  },
  {
    question: 'How long does commercial well drilling take?',
    answer:
      'On-site drilling and completion typically takes 2–4 days for commercial applications. The larger casing, higher-horsepower pumps, and deeper targets take more time than residential jobs. Permitting adds 2–4 weeks for high-capacity commercial permits. From initial assessment to operational well, most commercial jobs complete in 4–8 weeks. We walk you through the timeline during the estimate process.',
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

export default function CommercialWellServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Commercial & Agricultural', path: '/services/commercial' }]} />

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
                <span>Commercial Water Well Services</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Houston, TX · TDLR Licensed · Since 1979</span>
                <h1 className={styles.h1Line2}>Commercial &amp; Agricultural Water Well Services</h1>
                <span className={styles.h1Line3}>Ranches · Farms · Equestrian · Commercial Sites</span>
              </div>
              <p className={styles.heroSubtitle}>
                B-E Waterwell drills high-capacity commercial and agricultural wells across
                Houston, TX — from horse properties in Magnolia to nurseries in Waller County
                to commercial sites in Conroe. Water well drilling contractors with 45+ years
                and 5,000+ Wells Serviced. TDLR Licensed.
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
              <Image src="/images/hero-commercial-tank.webp" alt="Commercial water storage tank and pump skid installed by B-E Waterwell" width={700} height={525} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICELAYOUT ─────────────────────── */}
      <ServiceLayout
        categoryLabel="Commercial"
        defaultService="Commercial / Agricultural"
      >

        {/* ── OVERVIEW ────────────────────────── */}
        <section className={styles.overviewSection}>
          <span className="section-label">Built for Business</span>
          <h2 className="section-title">Commercial &amp; Agricultural Wells in Houston, TX</h2>
          <p className={styles.overviewP}>
            B-E Waterwell drills high-capacity commercial and agricultural wells across
            Houston, TX — from horse properties in Magnolia to nurseries in Waller County
            to commercial sites in Conroe. When city water is unavailable or
            cost-prohibitive, a properly sized well is the reliable, lower-cost answer for
            farms, ranches, equestrian properties, and commercial developments.
          </p>
          <p className={styles.overviewP}>
            As established water well drilling contractors, we plan every commercial job
            around your real GPM demand — larger casing, higher-horsepower pumps, the right
            aquifer target, and the high-capacity permits the job requires. We handle the
            full process and finish in writing with a workmanship warranty.
          </p>
          <div className={styles.overviewStats}>
            {[
              { stat: '45+', label: 'Years Drilling' },
              { stat: '5,000+', label: 'Wells Serviced' },
              { stat: 'TDLR', label: 'Licensed' },
              { stat: '2-Year', label: 'Warranty' },
            ].map((s) => (
              <div key={s.label} className={styles.overviewStat}>
                <strong>{s.stat}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WELL TYPES ──────────────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">Who We Serve</span>
          <h2 className="section-title">Well Types We Drill</h2>
          <div className={styles.subGrid}>
            {wellTypes.map((s) => (
              <div key={s.title} className={styles.subCard}>
                <span className={styles.subIcon}>{s.icon}</span>
                <h3 className={styles.subTitle}>{s.title}</h3>
                <p className={styles.subDesc}>{s.desc}</p>
                <ul className={styles.subHighlights}>
                  {s.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMMERCIAL VS RESIDENTIAL ───────── */}
        <section className={styles.specSection}>
          <span className="section-label">The Difference</span>
          <h2 className="section-title">Commercial vs. Residential Drilling</h2>
          <p className={styles.overviewP}>
            High-capacity wells are not just bigger residential wells. The casing, pump,
            aquifer target, and permitting all change once you move into commercial and
            agricultural production. Here is what sets a commercial job apart.
          </p>
          <div className={styles.specGrid}>
            <div className={`${styles.specRow} ${styles.specHead}`}>
              <div className={styles.specCell}>Spec</div>
              <div className={styles.specCell}>Residential</div>
              <div className={styles.specCell}>Commercial / Agricultural</div>
              <div className={styles.specCell}>Why It Matters</div>
            </div>
            {specRows.map((row) => (
              <div key={row.label} className={styles.specRow}>
                <div className={`${styles.specCell} ${styles.specLabel}`}>{row.label}</div>
                <div className={styles.specCell} data-th="Residential">{row.residential}</div>
                <div className={styles.specCell} data-th="Commercial / Ag">{row.commercial}</div>
                <div className={`${styles.specCell} ${styles.specNotes}`} data-th="Why it matters">{row.notes}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EQUESTRIAN ──────────────────────── */}
        <section className={styles.equestrianSection}>
          <span className="section-label">Horse Country</span>
          <h2 className="section-title">Well Drilling for Equestrian Properties</h2>
          <p className={styles.overviewP}>
            Houston — particularly Magnolia, Montgomery, and Waller County — is equestrian
            country. Horse properties have specific water demands that residential well
            systems are not designed for. We plan the well for your actual daily water
            demand and distribution needs from the start.
          </p>
          <div className={styles.equestrianGrid}>
            <div className={styles.equestrianCard}>
              <h3 className={styles.equestrianTitle}>Daily Water Per Horse</h3>
              <p className={styles.equestrianDesc}>
                10–15 gallons minimum per horse per day for drinking; up to 30 gallons
                including washing.
              </p>
            </div>
            <div className={styles.equestrianCard}>
              <h3 className={styles.equestrianTitle}>Trough Systems</h3>
              <p className={styles.equestrianDesc}>
                Automatic trough fill systems fed from the well require consistent flow
                and pressure.
              </p>
            </div>
            <div className={styles.equestrianCard}>
              <h3 className={styles.equestrianTitle}>Multiple Outlet Design</h3>
              <p className={styles.equestrianDesc}>
                Stall lines, wash racks, arena dust control, and pasture troughs — design
                the distribution at drill time.
              </p>
            </div>
            <div className={styles.equestrianCard}>
              <h3 className={styles.equestrianTitle}>Water Quality for Horses</h3>
              <p className={styles.equestrianDesc}>
                High iron content from the Jasper Aquifer can affect palatability — water
                treatment planning at installation.
              </p>
            </div>
          </div>
        </section>

        {/* ── PERMITS ─────────────────────────── */}
        <section className={styles.permitsSection}>
          <span className="section-label">Permitting Handled</span>
          <h2 className="section-title">Commercial &amp; Agricultural Permits in Texas</h2>
          <p className={styles.overviewP}>
            All wells in Texas require Groundwater Conservation District permits. Commercial
            and agricultural wells exceeding production thresholds require enhanced
            high-capacity permits — including documentation of intended water use, requested
            production quantity, and in some cases hydrological review.
          </p>
          <p className={styles.overviewP}>
            In Montgomery County, permits go through LSGCD (Lone Star GCD). In Harris County,
            HGSD (Harris-Galveston Subsidence District) regulates well permits. In Waller
            County, both LSGCD and BVGCD (Brazos Valley GCD) may have jurisdiction depending
            on the specific location.
          </p>
          <p className={styles.overviewP}>
            B-E Waterwell handles all permitting on your behalf. We have 45+ years of
            experience navigating the GCD permit process across Montgomery, Harris, Waller,
            Grimes, Washington, Anderson, and surrounding counties.
          </p>
        </section>

        {/* ── COST ────────────────────────────── */}
        <section className={styles.costSection}>
          <span className="section-label">What It Costs</span>
          <h2 className="section-title">Commercial Well Drilling Cost</h2>
          <p className={styles.overviewP}>
            Pricing depends on your location, well depth, static water level, and equipment
            selection — call us to discuss your project. We quote every job in writing with an
            itemized breakdown so you know exactly what you are paying for.
          </p>
          <div className={styles.costGrid}>
            <div className={styles.costCard}>
              <div className={styles.costName}>Equestrian &amp; Small Farm</div>
              <p className={styles.costNote}>
                Horse properties and small farm applications sized to your daily water demand.
              </p>
            </div>
            <div className={styles.costCard}>
              <div className={styles.costName}>Commercial &amp; Agricultural</div>
              <p className={styles.costNote}>
                Depends on depth, casing diameter, pump specifications, and required yield.
              </p>
            </div>
            <div className={styles.costCard}>
              <div className={styles.costName}>Large &amp; Multi-Zone</div>
              <p className={styles.costNote}>
                Large commercial or multi-zone irrigation applications with multi-zone completion.
              </p>
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ────────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">More From B-E Waterwell</span>
          <h2 className="section-title">Related Services</h2>
          <div className={styles.subGrid}>
            {relatedServices.map((s) => (
              <div key={s.slug} className={styles.subCard}>
                <span className={styles.subIcon}>{s.icon}</span>
                <h3 className={styles.subTitle}>{s.title}</h3>
                <p className={styles.subDesc}>{s.desc}</p>
                <ul className={styles.subHighlights}>
                  {s.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className={styles.subLink}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Commercial Well Drilling FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Drill</span>
          <h2 className="section-title">Commercial Well Service Areas</h2>
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
            <h2>Need a High-Capacity Well?</h2>
            <p>
              Call us for a consultation on your commercial, agricultural, ranch, or
              equestrian well. We quote every job in writing and handle all
              high-capacity permitting — no surprise charges, no pressure.
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
