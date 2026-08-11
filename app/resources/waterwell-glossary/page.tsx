import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { glossaryTerms, CATEGORY_ORDER } from '../../../lib/glossaryData';
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL } from '../../../lib/siteConfig';
import styles from './page.module.css';

const CANONICAL = `${SITE_URL}/resources/waterwell-glossary`;

export const metadata: Metadata = {
  title: 'Waterwell Glossary of Terms | B-E Waterwell Services — Houston, TX',
  description:
    'Plain-English definitions of water well terms — casing, screen, pressure tank, drawdown, biofouling, subsidence districts, and more. A reference from B-E Waterwell Services, drilling the Houston area since 1979.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Waterwell Glossary of Terms — B-E Waterwell Services',
    description:
      'What the terms on your well report actually mean. Casing, screen, yield, drawdown, pre-charge, subsidence districts, and the rest — explained plainly.',
    url: CANONICAL,
  },
};

/**
 * DefinedTermSet is the correct schema type for a glossary. It gives search
 * engines and answer engines a machine-readable term/definition pairing, which
 * is what gets surfaced for "what is a pitless adapter" style queries.
 */
const glossarySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${CANONICAL}#glossary`,
  name: 'Waterwell Glossary of Terms',
  description:
    'Definitions of water well drilling, pump, water system, and Texas groundwater regulation terms.',
  url: CANONICAL,
  hasDefinedTerm: glossaryTerms.map((t) => ({
    '@type': 'DefinedTerm',
    '@id': `${CANONICAL}#${t.slug}`,
    name: t.term,
    description: t.definition,
    inDefinedTermSet: `${CANONICAL}#glossary`,
    ...(t.aka?.length ? { alternateName: t.aka } : {}),
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Waterwell Glossary of Terms', item: CANONICAL },
  ],
};

export default function WaterwellGlossaryPage() {
  const alphabet = Array.from(
    new Set(glossaryTerms.map((t) => t.term[0].toUpperCase())),
  ).sort();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <AnnouncementBar />
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Waterwell Glossary</span>
          </nav>
          <h1 className={styles.h1}>Waterwell Glossary of Terms</h1>
          <p className={styles.heroSubtitle}>
            Well work comes with a vocabulary most people never need until
            something stops working. These are the terms you will hear from us,
            see on a driller&apos;s report, or find in a permit — explained in
            plain English by people who have been drilling the Houston area
            since 1979.
          </p>
        </div>
      </section>

      {/* ── JUMP NAV ─────────────────────────── */}
      <section className={styles.jumpSection}>
        <div className="container">
          <span className="section-label">Jump To</span>
          <div className={styles.jumpRow}>
            {CATEGORY_ORDER.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className={styles.jumpLink}
              >
                {cat}
              </a>
            ))}
          </div>
          <div className={styles.alphaRow} aria-label="Jump to a letter">
            {alphabet.map((letter) => {
              const first = glossaryTerms.find(
                (t) => t.term[0].toUpperCase() === letter,
              );
              return (
                <a key={letter} href={`#${first!.slug}`} className={styles.alphaLink}>
                  {letter}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TERMS BY CATEGORY ────────────────── */}
      <section className={styles.termsSection}>
        <div className="container">
          {CATEGORY_ORDER.map((cat) => {
            const terms = glossaryTerms
              .filter((t) => t.category === cat)
              .sort((a, b) => a.term.localeCompare(b.term));
            if (!terms.length) return null;
            return (
              <div
                key={cat}
                id={cat.toLowerCase().replace(/[^a-z]+/g, '-')}
                className={styles.catBlock}
              >
                <h2 className={styles.catTitle}>{cat}</h2>
                <dl className={styles.termList}>
                  {terms.map((t) => (
                    <div key={t.slug} id={t.slug} className={styles.termItem}>
                      <dt className={styles.termName}>
                        {t.term}
                        {t.aka?.length ? (
                          <span className={styles.termAka}>
                            {' '}
                            — also called {t.aka.join(', ')}
                          </span>
                        ) : null}
                      </dt>
                      <dd className={styles.termDef}>
                        {t.definition}
                        {t.href ? (
                          <>
                            {' '}
                            <Link href={t.href} className="inline-link">
                              {t.hrefLabel ?? 'Learn more'}
                            </Link>
                          </>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaH2}>Still Not Sure What You Are Looking At?</h2>
            <p className={styles.ctaP}>
              Bring us the report, the part, or the problem. We have been
              answering these questions across the Houston area since 1979, and
              we will tell you straight what you are dealing with.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
