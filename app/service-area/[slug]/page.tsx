import type { Metadata } from 'next';
import Icon from '../../components/Icon';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AnnouncementBar from '../../components/AnnouncementBar';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CityHeroForm from '../../components/CityHeroForm';
import CityFaqAccordion from '../../components/CityFaqAccordion';
import { COUNTY_PATHS } from '../../../lib/countyData';
import { getCityBySlug, getAllCitySlugs } from '../../../lib/cityData';
import styles from './page.module.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.slug);
  if (!city) return {};

  const title = `Waterwell Services in ${city.city}, TX | B-E Waterwell Services`;
  return {
    title,
    description: city.metaDescription,
    alternates: {
      canonical: `https://bewaterwells.com/service-area/${city.slug}`,
    },
    openGraph: {
      title,
      description: city.metaDescription,
    },
  };
}

const cityServices = [
  { icon: 'drill' as const, title: 'Waterwell Drilling', desc: 'New residential and commercial waterwells. Rotary rig drilling to the depth your site requires.' },
  { icon: 'gear' as const, title: 'Pump Replacement & Install', desc: 'Submersible pump replacement, new pump installation, and emergency service. Franklin Electric authorized dealer.' },
  { icon: 'droplet' as const, title: 'Well Rehabilitation', desc: 'Well shocking, acid treatment, and screen cleaning to restore aging wells to full production.' },
  { icon: 'leaf' as const, title: 'Irrigation Waterwells', desc: 'Dedicated irrigation systems for residential lots, farms, and ranches.' },
  { icon: 'bolt' as const, title: 'Generator Prep Kits', desc: 'Keep the water flowing during outages with a properly installed generator transfer switch.' },
  { icon: 'microscope' as const, title: 'Well Inspection', desc: 'Pre-purchase inspections and pump diagnostics with written reports for real estate transactions.' },
];

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.slug)!;
  if (!city) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `https://bewaterwells.com/service-area/${city.slug}`,
        name: 'B-E Waterwell Services',
        description: city.metaDescription,
        url: `https://bewaterwells.com/service-area/${city.slug}`,
        telephone: '+1-281-448-4447',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Magnolia',
          addressRegion: 'TX',
          postalCode: '77354',
          addressCountry: 'US',
        },
        areaServed: { '@type': 'City', name: `${city.city}, ${city.state}` },
        logo: 'https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png',
      },
      {
        '@type': 'Service',
        name: `Waterwell Services in ${city.city}, ${city.state}`,
        provider: { '@type': 'LocalBusiness', name: 'B-E Waterwell Services' },
        areaServed: { '@type': 'City', name: `${city.city}, ${city.state}` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: city.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Service Areas', path: '/service-areas' }, { name: `${city.city}, ${city.state}`, path: `/service-area/${city.slug}` }]} />

      <AnnouncementBar />
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid}>
          {/* Content */}
          <div className={styles.heroContent}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/service-areas">Service Areas</Link>
              <span>/</span>
              <span>{city.city}, {city.state}</span>
            </nav>

            {/* 3-line H1 */}
            <div className={styles.h1Wrap}>
              <span className={styles.h1Line1}>
                Waterwell Services — {city.county}
              </span>
              <h1 className={styles.h1Line2}>
                {city.city}, {city.state}
                {city.isHQ && <span className={styles.hqBadge}>★ Our HQ</span>}
              </h1>
              <span className={styles.h1Line3}>{city.heroSubtitle}</span>
            </div>

            <p className={styles.heroIntro}>{city.tagline}</p>

            <div className={styles.heroBtns}>
              <a href="tel:+12814484447" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
              </a>
              <Link href="/service-areas" className="btn btn-outline">
                View All Areas
              </Link>
            </div>
          </div>

          {/* Form */}
          <CityHeroForm city={city.city} />
        </div>
      </section>

      {/* ── INTRO ────────────────────────────── */}
      <section className={styles.introSection}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introText}>
            <span className="section-label">About {city.city}</span>
            <h2 className="section-title">
              Serving {city.city} Since 1979
            </h2>
            <p>{city.intro}</p>
            <div className={styles.introStats}>
              <div className={styles.introStat}>
                <strong>Aquifer Depth</strong>
                <span>{city.aquiferDepth}</span>
              </div>
              <div className={styles.introStat}>
                <strong>County</strong>
                <span>
                  {COUNTY_PATHS[city.county] ? (
                    <Link href={COUNTY_PATHS[city.county]} className="inline-link">
                      {city.county}
                    </Link>
                  ) : (
                    city.county
                  )}
                </span>
              </div>
              <div className={styles.introStat}>
                <strong>Emergency</strong>
                <span>Emergency Coverage</span>
              </div>
            </div>
            {city.depthDisclaimer && (
              <p className={styles.depthDisclaimer}>{city.depthDisclaimer}</p>
            )}
          </div>
          <div className={styles.introImageWrap}>
            <Image
              src="https://bewaterwells.com/wp-content/uploads/2024/09/bewater3-1-scaled.jpg"
              alt={`Waterwell services in ${city.city}, TX`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.licenseBadge}>
              <span className={styles.licenseBadgeIcon}>✓</span>
              <span>TDLR Licensed<br />& Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL WATER DISTRICTS ──────────── */}
      {city.waterDistricts && city.waterDistricts.length > 0 && (
        <section className={styles.districtSection}>
          <div className="container">
            <span className="section-label">Local Water Districts</span>
            <h2 className="section-title">Who Supplies Water in {city.city}</h2>
            <div className={styles.districtGrid}>
              {city.waterDistricts.map((d) => (
                <div key={d.name} className={styles.districtCard}>
                  <h3 className={styles.districtName}>{d.name}</h3>
                  <p className={styles.districtDetail}>{d.detail}</p>
                </div>
              ))}
            </div>
            {city.permitNote && (
              <div className={styles.permitNote}>
                <strong>Permitting</strong>
                <p>{city.permitNote}</p>
              </div>
            )}
            {city.references && city.references.length > 0 && (
              <div className={styles.refs}>
                <strong>Sources</strong>
                <ul>
                  {city.references.map((r) => (
                    <li key={r.url}>
                      <a
                        href={r.url}
                        className="inline-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── SERVICES ─────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Waterwell Services in {city.city}, TX
          </h2>
          <div className={styles.servicesGrid}>
            {cityServices.map((svc) => (
              <div key={svc.title} className={styles.serviceCard}>
                <span className={styles.svcIcon}><Icon name={svc.icon} size={30} /></span>
                <h3 className={styles.svcTitle}>{svc.title}</h3>
                <p className={styles.svcDesc}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────── */}
      <section className={styles.processSection}>
        <div className="container">
          <span className="section-label light">How It Works</span>
          <h2 className={`section-title light ${styles.processH2}`}>
            From First Call to First Drop
          </h2>
          <div className={styles.processSteps}>
            {[
              { n: '01', title: 'Phone Consultation', desc: 'Call or submit the form. We discuss your property, service needs, and give a ballpark estimate on the spot.' },
              { n: '02', title: 'Site Assessment', desc: 'We visit your property, assess soil conditions, aquifer access, and determine the right drill plan.' },
              { n: '03', title: 'Permitting', desc: 'We pull all required permits from the appropriate groundwater conservation district on your behalf.' },
              { n: '04', title: 'Drilling & Completion', desc: 'Our rig crew drills, installs casing, pump, and pressure tank. Most residential jobs complete in 3 to 4 days.' },
              { n: '05', title: 'Test & Certify', desc: 'No water quality testing is performed on newly drilled wells unless requested at an additional cost.' },
            ].map((step) => (
              <div key={step.n} className={styles.processStep}>
                <span className={styles.stepNum}>{step.n}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className="container">
          <span className="section-label">Common Questions</span>
          <h2 className={`section-title ${styles.faqH2}`}>
            Waterwell FAQs — {city.city}, TX
          </h2>
          <CityFaqAccordion faqs={city.faqs} />
        </div>
      </section>

      {/* ── NEARBY AREAS ─────────────────────── */}
      <section className={styles.nearbySection}>
        <div className="container">
          <span className="section-label">Also Serving</span>
          <h2 className="section-title">Areas Near {city.city}</h2>
          <div className={styles.nearbyGrid}>
            {city.nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-area/${area.slug}`}
                className={styles.nearbyCard}
              >
                <span className={styles.nearbyCity}>{area.city}, TX</span>
                <span className={styles.nearbyDist}>{area.distance}</span>
                <span className={styles.nearbyArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Need a Waterwell in {city.city}?</h2>
            <p>
              Call us directly at <a href="tel:+12814484447">(281) 448-4447</a> or
              request an estimate online. We serve {city.city} and all of{' '}
              {COUNTY_PATHS[city.county] ? (
                <Link href={COUNTY_PATHS[city.county]} className="inline-link inline-link-light">
                  {city.county}
                </Link>
              ) : (
                city.county
              )}{' '}
              with 45+ years of expertise.
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
