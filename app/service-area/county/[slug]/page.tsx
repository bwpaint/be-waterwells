import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnnouncementBar from '../../../components/AnnouncementBar';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Icon from '../../../components/Icon';
import { counties, getCountyBySlug, getCitiesInCounty } from '../../../../lib/countyData';
import styles from './page.module.css';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return counties.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const county = getCountyBySlug(params.slug);
  if (!county) return { title: 'County Not Found | B-E Waterwell Services' };
  const title = `${county.name}, ${county.state} Water Well Services | B-E Waterwell Services`;
  return {
    title,
    description: county.metaDescription,
    alternates: {
      canonical: `https://bewaterwells.com/service-area/county/${county.slug}`,
    },
    openGraph: { title, description: county.metaDescription },
  };
}

const countyServices = [
  { icon: 'drill' as const, title: 'Waterwell Drilling', desc: 'New residential, agricultural, and commercial waterwells drilled to the depth your site requires.' },
  { icon: 'gear' as const, title: 'Pump Replacement & Install', desc: 'Submersible pump replacement and new installation. Franklin Electric authorized dealer.' },
  { icon: 'droplet' as const, title: 'Well Rehabilitation', desc: 'Restore yield on aging wells with shocking, acid treatment, and screen cleaning.' },
  { icon: 'bolt' as const, title: 'Generator Prep Kits', desc: 'Keep water flowing through outages with a properly installed transfer switch.' },
];

export default function CountyPage({ params }: Props) {
  const county = getCountyBySlug(params.slug);
  if (!county) notFound();

  const cityList = getCitiesInCounty(county.name);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Water Well Services in ${county.name}, ${county.state}`,
    description: county.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'B-E Waterwell Services',
      telephone: '+1-281-448-4447',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '30815 Collier Smith Rd.',
        addressLocality: 'Magnolia',
        addressRegion: 'TX',
        postalCode: '77354',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${county.name}, ${county.state}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: county.name, path: `/service-area/county/${county.slug}` },
        ]}
      />

      <AnnouncementBar />
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/service-areas">Service Areas</Link>
            <span>/</span>
            <span>{county.name}</span>
          </nav>
          <span className={styles.heroLabel}>
            Magnolia and Houston, TX Area · TDLR Licensed · Since 1979
          </span>
          <h1 className={styles.heroH1}>{county.tagline}</h1>
          <p className={styles.heroSubtitle}>{county.intro}</p>
          <div className={styles.heroBtns}>
            <a href="tel:+12814484447" className="btn btn-primary">
              <Icon name="phone" size={16} /> (281) 448-4447
            </a>
            <Link href="/contact" className="btn btn-outline">Get Consultation</Link>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ──────────────────────── */}
      <section className={styles.factsSection}>
        <div className="container">
          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <span className={styles.factLabel}>Typical Depth</span>
              <strong className={styles.factValue}>{county.depthRange}</strong>
            </div>
            <div className={styles.factCard}>
              <span className={styles.factLabel}>Groundwater District</span>
              <strong className={styles.factValue}>{county.district}</strong>
            </div>
            <div className={styles.factCard}>
              <span className={styles.factLabel}>Cities Served</span>
              <strong className={styles.factValue}>{cityList.length}</strong>
            </div>
          </div>
          <p className={styles.districtNote}>{county.districtNote}</p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className="container">
          <span className="section-label">What We Do Here</span>
          <h2 className="section-title">
            Waterwell Services in {county.name}
          </h2>
          <div className={styles.servicesGrid}>
            {countyServices.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <span className={styles.svcIcon}><Icon name={s.icon} size={34} /></span>
                <h3 className={styles.svcTitle}>{s.title}</h3>
                <p className={styles.svcDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITIES IN THIS COUNTY ────────────── */}
      {cityList.length > 0 && (
        <section className={styles.citiesSection}>
          <div className="container">
            <span className="section-label">Where We Work</span>
            <h2 className="section-title">
              Cities We Serve in {county.name}
            </h2>
            <div className={styles.citiesGrid}>
              {cityList.map((c) => (
                <Link
                  key={c.slug}
                  href={`/service-area/${c.slug}`}
                  className={styles.cityCard}
                  aria-label={`Waterwell services in ${c.city}, Texas`}
                  title={`Waterwell services in ${c.city}, Texas`}
                >
                  <span className={styles.cityName}>
                    {c.city}, TX {c.isHQ && <span className={styles.hqTag}>★ HQ</span>}
                  </span>
                  <span className={styles.cityArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── LOCAL NOTES ──────────────────────── */}
      <section className={styles.notesSection}>
        <div className="container">
          <span className="section-label">Local Knowledge</span>
          <h2 className="section-title">
            What to Know About Wells in {county.name}
          </h2>
          <ul className={styles.notesList}>
            {county.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Need a Waterwell in {county.name}?</h2>
            <p>
              Call us directly at{' '}
              <a href="tel:+12814484447">(281) 448-4447</a> or request an estimate
              online. We have worked this ground since 1979.
            </p>
            <div className={styles.finalCtaBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                <Icon name="phone" size={16} /> (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">Get Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
