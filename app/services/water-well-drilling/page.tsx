import type { Metadata } from 'next';
import { WARRANTY_PDF } from '../../../lib/siteConfig';
import Icon from '../../components/Icon';
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
  title: 'Water Well Drilling & Installation — Houston, TX | B-E Waterwell Services',
  description:
    'Water well drilling contractors in Houston, TX since 1979. New residential wells, full installation, irrigation, and commercial drilling. TDLR Licensed. (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/water-well-drilling' },
};

const faqs = [
  {
    question: 'How deep are water wells drilled in the Houston area?',
    answer:
      'Depth depends on your county and target aquifer. Montgomery County wells typically reach the water-bearing zone at 180–320 ft. Harris County NW wells access the water-bearing zone at 180–360 ft. Harris County East (Humble, Kingwood) wells reach the water-bearing zone at 240–440 ft. Waller County wells run 160–300 ft. We assess every property and quote the actual depth we expect to drill.',
  },
  {
    question: 'How long does the entire new well installation take?',
    answer:
      'Start to finish — including permit — typically runs 1–2 weeks. Permit approval from your local groundwater conservation district usually takes 5–10 business days. Once the permit is in hand, drilling and system installation is typically completed in 3-4 days on-site.',
  },
  {
    question: 'Do I need a permit to drill a water well in Texas?',
    answer:
      'Registration is always required through your local Groundwater Conservation District. Whether a permit is also required depends on your county and well type, and timelines vary accordingly. B-E Waterwell handles all of it for you.',
  },
  {
    question: 'What exactly is included in my new well installation?',
    answer:
      'Every well includes: rotary rig drilling, geological log, proper casing, pressure cementing, appropriate screening, full well development, a Franklin Electric submersible pump and motor, drop pipe, pressure tank, pressure switch and gauge, main shut-off, electrical wiring at the wellhead, all GCD permits, and the driller&apos;s completion report.',
  },
  {
    question: 'How much does water well drilling cost in Houston, TX?',
    answer:
      'Pricing depends on your location, well depth, static water level, and equipment selection — call us to discuss your project.',
  },
  {
    question: 'Why should I choose B-E Waterwell for well drilling?',
    answer:
      'We have serviced more than 5,000 wells across the Houston area since 1979 and back every well with a guaranteed workmanship warranty. Every well we drill is registered, properly cased and pressure cemented, and developed before the pump is set. We don&apos;t cut corners — your water supply is not the place to cut corners and regret it in 5 years.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Water Well Drilling & Installation — Houston, TX',
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
        'Rotary rig water well drilling and complete installation for residential, irrigation, and commercial properties across the Houston area. TDLR licensed, 45+ years experience, guaranteed workmanship.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer.replace(/&apos;/g, "'"),
        },
      })),
    },
  ],
};

const included = [
  {
    icon: 'wrench' as const,
    title: 'Rotary Rig Drilling',
    desc: 'Truck-mounted rotary rig drilled to your target aquifer with a complete geological log for your records.',
  },
  {
    icon: 'screwdriver' as const,
    title: 'Proper Casing & Screen',
    desc: 'Casing and screen type matched to your well conditions, pressure cemented in place for long-term performance.',
  },
  {
    icon: 'droplet' as const,
    title: 'Well Development',
    desc: 'Full aquifer development to clear drilling fluids, remove fines, and maximize sustainable production yield.',
  },
  {
    icon: 'gear' as const,
    title: 'Submersible Pump & Motor',
    desc: 'Franklin Electric submersible pump and motor sized to your household demand — installed and wired at the wellhead.',
  },
  {
    icon: 'battery' as const,
    title: 'Pressure Tank',
    desc: 'Correctly sized pressure tank with pressure switch, gauge, and main shut-off for reliable system pressure.',
  },
  {
    icon: 'clipboard' as const,
    title: 'Permits',
    desc: 'All GCD permits and the driller’s completion report.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Site Assessment',
    desc: 'We visit your property, review county geology records, and identify the best drill location before quoting.',
  },
  {
    num: '02',
    title: 'Permit Application',
    desc: 'We file with your local Groundwater Conservation District. Approval typically takes 5–10 business days.',
  },
  {
    num: '03',
    title: 'Drilling Day',
    desc: 'Our rotary rig mobilizes to your site. We drill to aquifer depth, set casing, and develop the well — typically completed in 3-4 days.',
  },
  {
    num: '04',
    title: 'Pump & Tank',
    desc: 'Submersible pump, drop pipe, pressure tank, and all surface equipment installed and connected to your home’s electrical.',
  },
  {
    num: '05',
    title: 'Final Inspection',
    desc: 'System pressure test and completion paperwork signed. Your well is live.',
  },
];

const costDrivers = [
  {
    title: 'Depth',
    desc: 'More footage means more casing and more drilling time. Expect higher costs in Harris County East where aquifers are deeper.',
  },
  {
    title: 'Casing Diameter',
    desc: 'Standard residential wells use 4" casing. Higher-demand applications may require larger casing.',
  },
  {
    title: 'Pump Specification',
    desc: 'Pump sizing is matched to your household demand and static water level. Larger homes may need higher horsepower.',
  },
];

const related = [
  {
    icon: 'house' as const,
    title: 'Residential Water Well Services',
    slug: '/services/residential',
    desc: 'Pump replacement, pressure tanks, constant pressure upgrades, and complete system service for Houston-area homeowners.',
  },
  {
    icon: 'crane' as const,
    title: 'Commercial Water Well Services',
    slug: '/services/commercial',
    desc: 'High-capacity wells for ranches, farms, equestrian properties, nurseries, and commercial sites across the Houston area.',
  },
  {
    icon: 'tools' as const,
    title: 'Maintenance & Inspection',
    slug: '/services/well-maintenance',
    desc: 'Annual inspection, well rehabilitation, and ongoing care that keeps your well running for decades, not years.',
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

export default function WaterWellDrillingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Water Well Drilling & Installation', path: '/services/water-well-drilling' }]} />

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
                <span>Water Well Drilling &amp; Installation</span>
              </nav>
              <div className={styles.h1Wrap}>
                <span className={styles.h1Line1}>Magnolia and Houston, TX Area · Since 1979</span>
                <h1 className={styles.h1Line2}>Water Well Drilling &amp; Installation</h1>
                <span className={styles.h1Line3}>Residential · Irrigation · Commercial · Full Installation</span>
              </div>
              <p className={styles.heroSubtitle}>
                45+ years of rotary rig drilling across Montgomery, Harris, Waller,
                Grimes, Washington, Anderson, and surrounding counties. As experienced
                water well drilling contractors, we drill to depth, case it right, and
                stand behind every well with a guaranteed workmanship{' '}
                <a href={WARRANTY_PDF} target="_blank" rel="noopener noreferrer" className="inline-link">warranty</a>. TDLR Licensed.
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
              <Image src="/images/hero-drilling-rig.webp" alt="B-E Waterwell drilling rig on site in the Houston area" width={700} height={525} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICELAYOUT ─────────────────────── */}
      <ServiceLayout
        category="water-well-drilling"
        categoryLabel="Well Drilling"
        defaultService="Water Well Drilling"
      >

        {/* ── OVERVIEW ────────────────────────── */}
        <section className={styles.overviewSection}>
          <span className="section-label">The Process</span>
          <h2 className="section-title">Water Well Drilling &amp; Installation in the Magnolia and Houston Areas</h2>
          <p className={styles.overviewP}>
            New construction or emergency redrill — B-E Waterwell drills new residential
            and commercial wells across the greater Houston area and surrounding counties,
            from permit to first drop of water in your glass. 45+ years, 1,000+ happy
            customers. Every well we drill is registered, cased to fit your needs and
            pressure cemented, and fully developed before the pump is set.
          </p>
          <p className={styles.overviewP}>
            Whether you need new residential well drilling in Magnolia, an irrigation
            well on a Waller County acreage property, or a high-capacity commercial well
            in Conroe — the process is the same: we assess your site, pull the permit,
            drill to the right aquifer, and finish the job in writing with a workmanship
            <a href={WARRANTY_PDF} target="_blank" rel="noopener noreferrer" className="inline-link">warranty</a>. We don&apos;t cut corners because your water supply is not the
            place to cut corners and regret it in 5 years.
          </p>
        </section>

        {/* ── EVERYTHING INCLUDED ─────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">Water Well Installation</span>
          <h2 className="section-title">Everything Included in Every New Well</h2>
          <p className={styles.overviewP}>
            At B-E Waterwell, we know how important your water is — we take pride in
            providing the best workmanship and quality materials for your well.
          </p>
          <div className={styles.subGrid}>
            {included.map((item) => (
              <div key={item.title} className={styles.subCard}>
                <span className={styles.subIcon}><Icon name={item.icon} size={30} /></span>
                <h3 className={styles.subTitle}>{item.title}</h3>
                <p className={styles.subDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ─────────────────────────── */}
        <section className={styles.processSection}>
          <span className="section-label">Step by Step</span>
          <h2 className="section-title">From Permit to First Drop of Water</h2>
          <div className={styles.processList}>
            {steps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.stepNum}>{step.num}</span>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COST ────────────────────────────── */}
        <section className={styles.costSection}>
          <span className="section-label">What It Costs</span>
          <h2 className="section-title">Water Well Drilling Cost in the Magnolia and Houston Areas</h2>
          <div className={styles.costLead}>
            <strong>Pricing built around your project</strong>
            <span>
              Pricing depends on your location, well depth, static water level, and
              equipment selection — call us to discuss your project. A complete
              residential well includes drill, case, pump, pressure tank, and all
              permits, quoted with an itemized written estimate and no surprises on
              billing day.
            </span>
          </div>
          <div className={styles.costGrid}>
            {costDrivers.map((c) => (
              <div key={c.title} className={styles.costCard}>
                <h3 className={styles.costCardTitle}>{c.title}</h3>
                <p className={styles.costCardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.costLink}>
            Want details for your property? We provide itemized written estimates —{' '}
            <Link href="/contact">request yours here</Link>.
          </p>
        </section>

        {/* ── FAQ ─────────────────────────────── */}
        <section className={styles.faqSection}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Water Well Drilling FAQs</h2>
          <CityFaqAccordion faqs={faqs} />
        </section>

        {/* ── RELATED SERVICES ────────────────── */}
        <section className={styles.subServicesSection}>
          <span className="section-label">Explore More</span>
          <h2 className="section-title">Related Services</h2>
          <div className={styles.subGrid}>
            {related.map((r) => (
              <div key={r.slug} className={styles.subCard}>
                <span className={styles.subIcon}><Icon name={r.icon} size={30} /></span>
                <h3 className={styles.subTitle}>{r.title}</h3>
                <p className={styles.subDesc}>{r.desc}</p>
                <Link href={r.slug} className={styles.subLink}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICE AREAS ───────────────────── */}
        <section className={styles.areasSection}>
          <span className="section-label">Where We Drill</span>
          <h2 className="section-title">Well Drilling Service Areas</h2>
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
            <h2>Ready to Drill Your Well?</h2>
            <p>
              Call us for a consultation or fill out the contact form. We quote every
              job in writing — no surprise charges, no pressure.
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
