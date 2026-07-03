import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeHeroForm from './components/HomeHeroForm';
import { services, stats, cityAreas, partners, testimonials, jsonLd, homeFaqs, organizationSchema, websiteSchema } from '../lib/homeData';
import { buildFaqSchema } from '../lib/seoData';
import { COUNTIES, MAP_VIEWBOX } from '../lib/serviceAreaGeo';
import styles from './page.module.css';

const faqSchema = buildFaqSchema(homeFaqs);

/* Monochrome "chrome" line icons (metallic gradient, no color) */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'url(#chromeGrad)',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 34,
  height: 34,
};

const SERVICE_SVG: Record<string, React.ReactNode> = {
  drill: (
    <svg {...iconProps}><path d="M12 21V6" /><path d="M12 6 7 3M12 6l5-3" /><path d="M6 21h12" /><path d="M9.5 13h5" /></svg>
  ),
  pump: (
    <svg {...iconProps}><path d="M4 11 12 4l8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-5h4v5" /></svg>
  ),
  irrigation: (
    <svg {...iconProps}><path d="M3 21V9l9-5 9 5v12" /><path d="M9 21v-6h6v6" /><path d="M3 21h18" /></svg>
  ),
  rehab: (
    <svg {...iconProps}><path d="M20.5 12a8 8 0 1 1-2.3-5.6" /><path d="M20.5 4v4h-4" /></svg>
  ),
  inspect: (
    <svg {...iconProps}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M21 21l-5.6-5.6" /></svg>
  ),
};

/* Static (non-interactive) mini county map for the service-areas teaser */
function MiniServiceMap() {
  return (
    <svg viewBox={MAP_VIEWBOX} className={styles.miniMapSvg} role="img" aria-label="Map of Greater Houston service area counties">
      {COUNTIES.map((c) => (
        <path
          key={c.name}
          d={c.d}
          fill={c.hq ? 'var(--highlight)' : c.tier === 'prime' ? '#c4aa88' : '#ddd0b4'}
          stroke="#f8f4ec"
          strokeWidth={2}
        />
      ))}
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Houston Area Waterwell Drilling & Pump Services | B-E Waterwell Services',
  description:
    "B-E Waterwell Services - Houston's trusted waterwell drilling, pump installation, and repair specialists since 1979. Serving Magnolia, Tomball, The Woodlands, Spring and Conroe. Call (281) 448-4447.",
  alternates: { canonical: 'https://bewaterwells.com' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Shared chrome gradient for monochrome service icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="chromeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfd4db" />
            <stop offset="0.5" stopColor="#8d929b" />
            <stop offset="1" stopColor="#565b63" />
          </linearGradient>
        </defs>
      </svg>

      <AnnouncementBar />
      <Navbar transparent />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              Serving Houston and Surrounding Counties Since 1979
            </div>
            <h1 className={styles.heroH1}>
              Houston Area<br />
              <span className={styles.heroOrange}>Waterwell Services</span><br />
              Experts
              <span className={styles.heroH1Sub}>
                Drilling &middot; Pumps &middot; Rehabilitation
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              Family-owned since 1979. TDLR licensed. We have serviced over 5,000
              wells across Montgomery, Harris, Waller, Grimes, Washington, Anderson,
              and surrounding counties. When your water goes out, we come out.
            </p>
            <div className={styles.heroCtas}>
              <a href="tel:+12814484447" className="btn btn-primary">
                Call (281) 448-4447
              </a>
            </div>
            <div className={styles.heroTrust}>
              <span>TDLR Licensed</span>
              <span>Fully Insured</span>
              <span>2-Year Warranty</span>
            </div>
          </div>

          <div className={styles.heroRight}>
            <HomeHeroForm />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div key={s.value} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS BAR */}
      <section className={styles.partnersBar}>
        <div className="container">
          <p className={styles.partnersLabel}>Certified &amp; Affiliated With</p>
          <div className={styles.partnersGrid}>
            {partners.map((p) => (
              <div key={p.alt} className={styles.partnerItem}>
                <Image src={p.src} alt={p.alt} width={172} height={86} style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesTitleRow}>
            <div className={styles.servicesTitleText}>
              <span className="section-label">What We Do</span>
              <h2 className={`section-title ${styles.servicesH2}`}>
                Complete Waterwell Services
              </h2>
              <p className={styles.servicesSubtext}>
                One call handles everything. Drilling, pumps, pressure tanks,
                generator prep. B-E Waterwell does it all with the same crew
                and the same accountability.
              </p>
            </div>
            <div className={styles.servicesVideoWrap}>
              <video autoPlay muted loop playsInline>
                <source
                  src="https://bewaterwells.com/wp-content/uploads/2024/08/bewater.mp4"
                  type="video/mp4"
                />
              </video>
              <span className={styles.servicesVideoLabel}>B-E Waterwell Services in Action</span>
            </div>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <Link key={svc.href} href={svc.href} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{SERVICE_SVG[svc.icon]}</span>
                <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
                <p className={styles.serviceCardDesc}>{svc.desc}</p>
                <span className={styles.serviceCardLink}>Learn More</span>
              </Link>
            ))}

            {/* 6th tile — service-area map teaser */}
            <Link href="/service-areas" className={`${styles.serviceCard} ${styles.mapTile}`}>
              <span className={styles.mapTileGraphic} aria-hidden="true">
                <svg viewBox={MAP_VIEWBOX} className={styles.mapTileMap}>
                  {COUNTIES.map((c) => (
                    <path
                      key={c.name}
                      d={c.d}
                      fill={c.hq ? 'var(--highlight)' : c.tier === 'prime' ? '#c4aa88' : '#ddd0b4'}
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth={2}
                    />
                  ))}
                </svg>
                <svg viewBox="0 0 24 24" className={styles.mapTilePin} fill="var(--highlight)" stroke="#fff" strokeWidth={1.3}>
                  <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.6" fill="#fff" stroke="none" />
                </svg>
              </span>
              <h3 className={styles.serviceCardTitle}>See Our Service Areas</h3>
              <p className={styles.serviceCardDesc}>
                Explore the cities and counties we cover across the Greater Houston region.
              </p>
              <span className={styles.serviceCardLink}>View Service Areas</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={styles.whySection}>
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyContent}>
            <span className="section-label">Why B-E Waterwell?</span>
            <h2 className="section-title">
              45 Years of Getting It Right
            </h2>
            <p className={styles.whyIntro}>
              We have been doing this since 1979. Three generations of North
              Houston landowners have trusted us with their most important resource.
            </p>
            <ul className={styles.whyList}>
              <li>TDLR Licensed Water Well Driller / Pump Installer</li>
              <li>Franklin Electric Authorized Dealer</li>
              <li>Two-year warranty on pump &amp; motors in most cases</li>
              <li>Locally owned, same family, same number since 1979</li>
            </ul>
            <Link href="/about" className="btn btn-dark" style={{ marginTop: "28px", display: "inline-flex" }}>
              Our Story
            </Link>
          </div>
          <div className={styles.whyImageCol}>
            <div className={styles.whyImageWrap}>
              <Image
                src="https://bewaterwells.com/wp-content/uploads/2024/09/bewater1-scaled.jpg"
                alt="B-E Waterwell Services drilling crew at work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.whyStatCards}>
              <div className={styles.whyStatCard}>
                <span className={styles.whyStatNum}>5,000+</span>
                <span className={styles.whyStatLbl}>Wells Serviced</span>
              </div>
              <div className={styles.whyStatCard}>
                <span className={styles.whyStatNum}>45+</span>
                <span className={styles.whyStatLbl}>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <span className="section-label light">What Customers Say</span>
          <h2 className={`section-title light ${styles.testimonialsH2}`}>
            Real Customers. Real Results.
          </h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.stars}>{"★".repeat(t.stars)}</div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className={styles.areasSection}>
        <div className="container">
          <span className="section-label">Where We Work</span>
          <h2 className="section-title">Cities Across the Houston Area</h2>
          <p className={styles.areasSubtext}>
            From the Brazos Valley to the Lake Houston corridor.
          </p>
          <div className={styles.areasLayout}>
            <div className={styles.areasCityCols}>
              {cityAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-area/${a.slug}`}
                  className={`${styles.areaCard} ${a.hq ? styles.areaCardHQ : ""}`}
                >
                  <span className={styles.areaCity}>{a.city}, TX</span>
                  {a.hq && <span className={styles.hqBadge}>HQ</span>}
                  <span className={styles.areaArrow}>go</span>
                </Link>
              ))}
            </div>
            <Link href="/service-areas" className={styles.areasMapLink} aria-label="View full service area map">
              <MiniServiceMap />
              <span className={styles.areasMapCta}>View Full Service Area Map →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className="container">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Waterwell Questions — Houston Area</h2>
          <div className={styles.faqGrid}>
            {homeFaqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2>Ready to Get Started?</h2>
            <p>
              Call us directly or fill out the form. We respond promptly
              during business hours, and we are here when you have an emergency.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href="tel:+12814484447" className="btn btn-primary">
                (281) 448-4447
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
