import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeHeroForm from './components/HomeHeroForm';
import { services, stats, cityAreas, partners, testimonials, jsonLd, homeFaqs, SERVICE_ICONS } from '../lib/homeData';
import { buildFaqSchema } from '../lib/seoData';
import styles from './page.module.css';

const faqSchema = buildFaqSchema(homeFaqs);

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
              Houston&apos;s{" "}
              <span className={styles.heroOrange}>Waterwell Services</span>
              {" "}Experts
              <span className={styles.heroH1Sub}>
                Drilling &middot; Pumps &middot; Rehabilitation
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              Family-owned since 1979. TDLR licensed. Over 5,000 waterwells drilled
              across Montgomery and Harris counties. When your water goes out,
              we come out.
            </p>
            <div className={styles.heroCtas}>
              <a href="tel:+12814484447" className="btn btn-primary">
                Call (281) 448-4447
              </a>
              <Link href="/contact" className="btn btn-outline">
                Free Estimate
              </Link>
            </div>
            <div className={styles.heroTrust}>
              <span>TDLR Licensed</span>
              <span>Fully Insured</span>
              <span>Free Estimates</span>
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
                <Image src={p.src} alt={p.alt} width={120} height={60} style={{ objectFit: "contain" }} />
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
                <span className={styles.serviceIcon}>{SERVICE_ICONS[svc.icon]}</span>
                <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
                <p className={styles.serviceCardDesc}>{svc.desc}</p>
                <span className={styles.serviceCardLink}>Learn More</span>
              </Link>
            ))}
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
              <li>TDLR Licensed Waterwell Driller</li>
              <li>Franklin Electric Authorized Service Center</li>
              <li>All work permitted and inspected per Texas law</li>
              <li>Written estimates with no surprise charges</li>
              <li>2-Year workmanship warranty on all drilling</li>
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
                <span className={styles.whyStatLbl}>Waterwells Drilled</span>
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
          <h2 className="section-title">11 Cities Across the Houston Area</h2>
          <p className={styles.areasSubtext}>
            From Waller County to the Lake Houston corridor.
          </p>
          <div className={styles.areasGrid}>
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
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/service-areas" className="btn btn-dark">
              View Interactive Service Area Map
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
              Call us directly or fill out the estimate form. We respond
              within 2 hours during business hours, immediately for emergencies.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href="tel:+12814484447" className="btn btn-primary">
                (281) 448-4447
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
