import type { Metadata } from 'next';
import { WARRANTY_PDF, TCEQ_STANDARDS_URL, TCEQ_PUBLIC_WATER_URL } from '../../../lib/siteConfig';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from '../../components/AnnouncementBar';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceLayout from '../../components/ServiceLayout';
import Icon from '../../components/Icon';
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
            text: 'Commercial and agricultural wells in the Houston area range from 200 to 500+ feet depending on location, target aquifer, and required yield. Standard residential wells run 180–320 feet. Higher-demand commercial applications may require deeper zones (240–440 ft) for maximum yield. We assess your site water demand before recommending a target depth.',
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
    icon: 'livestock' as const,
    title: 'Ranch & Livestock Wells',
    desc: 'High-yield wells for cattle ranches, livestock operations, and large rural properties. Sized for watering systems, stock tanks, and irrigation.',
    highlights: ['High-yield output', 'Stock tank supply', 'Livestock watering systems', 'Acreage irrigation'],
  },
  {
    icon: 'horse' as const,
    title: 'Equestrian Properties',
    desc: 'Dedicated wells for horse properties and stables. Multiple outlet capability, trough systems, and wash rack supply. Sized for the real daily water demand of horses.',
    highlights: ['Multiple outlet design', 'Trough fill systems', 'Wash rack supply', 'Stall line distribution'],
  },
  {
    icon: 'sprout' as const,
    title: 'Farms & Nurseries',
    desc: 'Agricultural wells for farming operations, plant nurseries, and greenhouse facilities. Irrigation-scale flow rates with appropriate pump sizing for extended run times.',
    highlights: ['Irrigation-scale flow', 'Extended run-time pumps', 'Greenhouse supply', 'Ag exemption assistance'],
  },
  {
    icon: 'crane' as const,
    title: 'Commercial Properties',
    desc: 'Office parks, light industrial, retail developments, and any commercial property where city water supply is unavailable or cost-prohibitive.',
    highlights: ['High-capacity pumps', 'Larger casing diameters', 'Reduced utility cost', 'Reliable site supply'],
  },
  {
    icon: 'droplet' as const,
    title: 'Irrigation Scale',
    desc: 'Large-volume wells for irrigation districts, multi-property irrigation systems, and acreage-scale agricultural irrigation.',
    highlights: ['Large-volume output', 'Multi-property systems', 'Acreage-scale design'],
  },
  {
    icon: 'pump' as const,
    title: 'Wells & Systems We Provide',
    desc: 'The full range of well types and pumping systems B-E designs, drills, and installs across the Houston area — from a single-home submersible to a regulated public supply system.',
    // Eleven items rather than four, so the list renders in two columns.
    wide: true,
    highlights: [
      'Commercial water wells',
      'Residential water wells',
      'Public water supply wells',
      'Fire protection water wells',
      'Irrigation water wells',
      'Airlift water well systems',
      'Submersible systems',
      'Hand pump systems',
      'Solar water well systems',
      'Water plant & distribution systems',
      'Community water supply systems',
    ],
  },
];

const relatedServices = [
  {
    icon: 'tools' as const,
    title: 'Drilling & Installation',
    slug: 'water-well-drilling',
    desc: 'New rotary rig drilling, casing, development, and complete pump installation for residential, irrigation, and commercial sites.',
    highlights: ['Rotary rig to target aquifer', 'Schedule 40 PVC casing', 'Pump & pressure tank', '1-year well warranty'],
  },
  {
    icon: 'wrench' as const,
    title: 'Rehabilitation',
    slug: 'well-rehabilitation',
    desc: 'Restore yield and water quality on aging wells — well screen repair, iron bacteria treatment, and redevelopment.',
    highlights: ['Well screen repair', 'Iron bacteria treatment', 'Yield restoration', 'Redevelopment'],
  },
  {
    icon: 'clipboard' as const,
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
      'Commercial and agricultural wells in the Houston area range from 200 to 500+ feet depending on location, target aquifer, and required yield. Standard residential wells run 180–320 feet. Higher-demand commercial applications may require deeper zones (240–440 ft) for maximum yield. We assess your site water demand before recommending a target depth.',
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
                <span className={styles.h1Line1}>Magnolia and Houston, TX Area · TDLR Licensed · Since 1979</span>
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
          <h2 className="section-title">Commercial &amp; Agricultural Wells in the Houston Area</h2>
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
            full process and finish in writing with a workmanship{' '}
            <a href={WARRANTY_PDF} target="_blank" rel="noopener noreferrer" className="inline-link">warranty</a>.
          </p>
          <div className={styles.overviewStats}>
            {[
              { stat: '45+', label: 'Years Drilling' },
              { stat: '5,000+', label: 'Wells Serviced' },
              { stat: 'TDLR', label: 'Licensed' },
              { stat: '2-Year', label: 'Pump & Motor Warranty' },
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
                <span className={styles.subIcon}><Icon name={s.icon} size={44} /></span>
                <h3 className={styles.subTitle}>{s.title}</h3>
                <p className={styles.subDesc}>{s.desc}</p>
                <ul
                  className={`${styles.subHighlights} ${
                    'wide' in s && s.wide ? styles.subHighlightsWide : ''
                  }`}
                >
                  {s.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── PERMITS ─────────────────────────── */}
        <section className={styles.permitsSection}>
          <span className="section-label">Permitting Handled</span>
          <h2 className="section-title">Commercial &amp; Agricultural Permits in Texas</h2>
          <p className={styles.overviewP}>
            All commercial and agricultural wells in Texas require Groundwater Conservation District permits. Commercial
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

        {/* ── TCEQ STANDARDS ──────────────────── */}
        <section className={styles.permitsSection}>
          <span className="section-label">State Standards</span>
          <h2 className="section-title">
            Texas Commission on Environmental Quality Standards
          </h2>
          <p className={styles.overviewP}>
            The Texas Commission on Environmental Quality sets the environmental
            standards that govern water across the state. The{' '}
            <a
              href={TCEQ_STANDARDS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Texas Surface Water Quality Standards
            </a>{' '}
            (30 TAC Chapter 307), adopted under the Clean Water Act and the Texas
            Water Code, set the goals for the state&apos;s streams, rivers, lakes,
            and bays — including their protection as sources of public drinking
            water.
          </p>
          <p className={styles.overviewP}>
            B-E Waterwell Services works within TCEQ requirements as the state
            requires. On a well site that obligation is practical rather than
            abstract: properly set casing, pressure-cemented annular seals, and a
            sanitary wellhead are what keep surface water and shallow
            contamination out of the aquifer below. Where a project is a public or
            community water supply, we build to the{' '}
            <a
              href={TCEQ_PUBLIC_WATER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              TCEQ public drinking water requirements
            </a>{' '}
            that govern those systems.
          </p>
        </section>

        {/* ── RELATED SERVICES ────────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">More From B-E Waterwell</span>
          <h2 className="section-title">Related Services</h2>
          <div className={styles.subGrid}>
            {relatedServices.map((s) => (
              <div key={s.slug} className={styles.subCard}>
                <span className={styles.subIcon}><Icon name={s.icon} size={44} /></span>
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
