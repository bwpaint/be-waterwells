import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CostEstimator from './CostEstimator';
import { buildFaqSchema, LOCAL_BUSINESS_SCHEMA, BUSINESS } from '../../../lib/seoData';
import { linkifyPhone } from '../../../lib/linkifyPhone';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Water Well Drilling Cost Guide 2026 | Houston Area Pricing | B-E Waterwell Services',
  description: 'How much does a water well cost in Houston? Get real 2026 pricing: drilling $30–$55/ft, pump installation $800–$2,500, total new well $5,000–$18,000. Use our free estimator or call (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/resources/water-well-cost' },
  openGraph: {
    title: 'Water Well Cost Guide 2026 — Houston Area Pricing',
    description: 'Real Houston-area water well drilling costs from B-E Waterwell Services — drilling, pump, pressure tank, and total installation pricing with free interactive estimator.',
  },
};

const faqs = [
  {
    question: 'What is the average cost to drill a water well in Houston?',
    answer: 'In the greater Houston area, the average cost to drill a new residential water well runs between $8,000 and $15,000 total — covering drilling, casing, pump, pressure tank, and electrical hookup. Drilling alone typically runs $30–$55 per foot, and most residential wells in Montgomery, Harris, and Waller counties reach 200–350 feet. B-E Waterwell Services provides free on-site estimates for all new well projects.',
  },
  {
    question: 'How much does well pump replacement cost?',
    answer: 'Submersible well pump replacement in the Houston area typically costs $800–$2,500 depending on horsepower, depth, and labor. A 1/2 HP pump for a shallow well runs $800–$1,200 installed; a 1–1.5 HP deep well pump for a 4–5 bathroom home runs $1,400–$2,500. Emergency same-day service may add $150–$300. Call (281) 448-4447 for a free diagnostic.',
  },
  {
    question: 'How much does it cost to install a water well from scratch?',
    answer: 'A complete new water well installation in the Houston area — including drilling, steel casing, pump, pressure tank, wiring, and permit — typically ranges from $5,000 to $18,000. Most residential projects land between $8,000 and $12,000. Variables include depth (deeper aquifers = more cost), well diameter, site access, and whether the property needs a booster or constant-pressure system.',
  },
  {
    question: 'How much does it cost to replace a submersible well pump?',
    answer: 'Replacing a submersible pump in the Houston area costs $800–$2,500 installed. The pump itself is $300–$900 for residential units; the rest is labor, pulling the pump from depth, and reinstalling. If the motor and pump head are both failed, expect the higher end of that range. B-E Waterwell Services stocks most common pump sizes for same-day replacement.',
  },
  {
    question: 'How much does a pressure tank replacement cost?',
    answer: 'A well pressure tank replacement in the Houston area costs $350–$900 installed, including the new tank, fittings, and labor. Most residential homes need a 20–44 gallon tank. Signs you need a new pressure tank: rapid pump cycling, waterlogged tank, pressure fluctuations, or a tank that\'s more than 15 years old. B-E Waterwell Services can usually replace a pressure tank the same day.',
  },
  {
    question: 'How much does well drilling cost per foot in Texas?',
    answer: 'Water well drilling in Texas runs $30–$55 per foot in the Houston metro area. Residential wells average $42/ft; irrigation wells require larger diameter casing and run $48–$55/ft; commercial wells can reach $60–$75/ft. Depth varies by location — Magnolia and Montgomery County wells typically hit productive aquifers at 200–280 feet; some eastern Harris County locations require 300+ feet.',
  },
  {
    question: 'Does B-E Waterwell Services offer financing or payment plans?',
    answer: 'Yes. B-E Waterwell Services works with homeowners on payment arrangements for larger projects. Call (281) 448-4447 to discuss your project and financing options. We provide written estimates before any work begins.',
  },
  {
    question: 'What factors increase or decrease water well installation cost?',
    answer: 'Key cost factors: (1) Depth — deeper wells cost more per foot and require larger pumps. (2) Well diameter — 6-inch casing is standard residential; larger commercial wells cost more. (3) Site access — remote or heavily wooded sites add equipment time. (4) Rock formations — limestone or hardpan layers slow drilling and increase cost. (5) Pump type — constant-pressure systems cost $500–$1,000 more than standard pressure tank setups but provide better pressure to the house. (6) Permits — required in Texas, typically $200–$500.',
  },
];

const costTableData = [
  { item: 'Drilling (per foot)', low: '$30', high: '$55', notes: 'Residential 6" casing, 200–350 ft typical depth' },
  { item: 'Submersible pump + motor', low: '$500', high: '$2,000', notes: '½ HP to 2 HP; deeper wells need higher HP' },
  { item: 'Pressure tank (installed)', low: '$350', high: '$900', notes: '20–44 gallon residential tank' },
  { item: 'Electrical / wiring', low: '$400', high: '$900', notes: 'Control box, wiring to house panel' },
  { item: 'Casing + wellhead', low: '$600', high: '$1,500', notes: 'Steel casing, cap, pitless adapter' },
  { item: 'State permit (TDLR)', low: '$200', high: '$500', notes: 'Required for all new wells in Texas' },
  { item: 'Total — new residential well', low: '$5,000', high: '$18,000', notes: 'Most Houston-area homes: $8,000–$12,000' },
];

const faqSchema = buildFaqSchema(faqs);

const costGuideSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Water Well Drilling Cost Guide — Houston Area 2026',
  description: 'Complete breakdown of water well installation costs in the greater Houston area including drilling, pump, pressure tank, and electrical.',
  author: { '@type': 'Organization', name: BUSINESS.name, url: BUSINESS.url },
  publisher: { '@type': 'Organization', name: BUSINESS.name, url: BUSINESS.url },
  datePublished: '2026-01-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: 'https://bewaterwells.com/resources/water-well-cost',
};

export default function WaterWellCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(costGuideSchema) }}
      />

      <AnnouncementBar />
      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Houston Area Pricing Guide · Updated 2026</p>
            <h1>Water Well Installation Cost</h1>
            <p className={styles.heroSub}>
              Real pricing from a licensed Houston-area waterwell contractor — not a national
              aggregator. Drilling, pumps, pressure tanks, and complete new well installations.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>$30–$55</span>
                <span className={styles.statLabel}>per foot drilling</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>$5K–$18K</span>
                <span className={styles.statLabel}>complete new well</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>45 yrs</span>
                <span className={styles.statLabel}>Houston-area experience</span>
              </div>
            </div>
            <a href="tel:+12814484447" className={styles.heroCta}>
              Call (281) 448-4447 — Free Estimate
            </a>
          </div>
        </section>

        {/* COST TABLE */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>2026 Water Well Cost Breakdown — Houston Area</h2>
            <p className={styles.sectionIntro}>
              These ranges come from our own project history serving Montgomery, Harris, Waller, and
              Fort Bend counties. Every property is different — call us for a free on-site estimate.
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.costTable}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Low Estimate</th>
                    <th>High Estimate</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costTableData.map((row, i) => (
                    <tr key={i} className={i === costTableData.length - 1 ? styles.totalRow : ''}>
                      <td>{row.item}</td>
                      <td className={styles.price}>{row.low}</td>
                      <td className={styles.price}>{row.high}</td>
                      <td className={styles.notes}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.disclaimer}>
              Prices reflect typical Houston-area residential projects in 2026. Actual cost depends on
              depth, site conditions, permit requirements, and selected equipment. Written estimates
              provided before any work begins.
            </p>
          </div>
        </section>

        {/* INTERACTIVE ESTIMATOR */}
        <section className={styles.estimatorSection}>
          <div className={styles.container}>
            <h2>Free Water Well Cost Estimator</h2>
            <p className={styles.sectionIntro}>
              Get a ballpark range for your Houston-area project. This is an estimate — not a quote.
              Your actual cost depends on site conditions we can only assess in person.
            </p>
            <CostEstimator />
          </div>
        </section>

        {/* WHAT AFFECTS COST */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>What Affects Water Well Drilling Cost in Houston?</h2>
            <div className={styles.factorsGrid}>
              <div className={styles.factorCard}>
                <h3>Well Depth</h3>
                <p>
                  Most residential wells in Montgomery and Harris counties reach productive aquifers
                  at 200–350 feet. Deeper wells cost more per foot and require higher-horsepower
                  pumps. Eastern Harris County and Chambers County locations sometimes require 400+
                  feet.
                </p>
              </div>
              <div className={styles.factorCard}>
                <h3>Pump Type &amp; Horsepower</h3>
                <p>
                  A 1–2 bathroom home typically needs a ½ HP pump ($500–$900 installed). A 4–5
                  bathroom home needs 1–1.5 HP ($1,000–$2,000). Constant-pressure variable-speed
                  pumps add $500–$1,000 but eliminate pressure fluctuations and extend pump life.
                </p>
              </div>
              <div className={styles.factorCard}>
                <h3>Site Access</h3>
                <p>
                  A drilling rig needs a clear path to the drill site. Dense trees, steep grades, or
                  very soft ground can add $500–$1,500 for site prep. Most suburban Houston lots
                  have no access issues.
                </p>
              </div>
              <div className={styles.factorCard}>
                <h3>Rock Formations</h3>
                <p>
                  The Houston area is mostly clay and sand — relatively fast drilling. If your
                  property sits near the Austin Chalk or limestone outcrops (common in parts of
                  Montgomery County), expect slower drilling and higher cost.
                </p>
              </div>
              <div className={styles.factorCard}>
                <h3>Pressure Tank Size</h3>
                <p>
                  A standard 20-gallon tank handles most 1–3 bedroom homes. Larger homes, irrigation
                  systems, or high-demand households benefit from a 44–80 gallon tank. Bigger tanks
                  reduce pump cycling and extend pump life significantly.
                </p>
              </div>
              <div className={styles.factorCard}>
                <h3>Texas TDLR Permit</h3>
                <p>
                  All new water wells in Texas require a permit through the Texas Department of
                  Licensing and Regulation (TDLR) and must be drilled by a licensed contractor.
                  B-E Waterwell Services handles all permitting — typically $200–$500 depending on
                  county groundwater district rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PUMP REPLACEMENT COSTS */}
        <section className={styles.section + ' ' + styles.altSection}>
          <div className={styles.container}>
            <h2>Well Pump Replacement &amp; Installation Costs</h2>
            <p className={styles.sectionIntro}>
              Don't need a full new well? Here's what common pump service calls typically cost in
              the Houston area.
            </p>
            <div className={styles.repairGrid}>
              <div className={styles.repairCard}>
                <div className={styles.repairTitle}>Pump Diagnostic</div>
                <div className={styles.repairRange}>Free</div>
                <div className={styles.repairDesc}>On-site pressure and electrical check</div>
              </div>
              <div className={styles.repairCard}>
                <div className={styles.repairTitle}>Pressure Tank Replacement</div>
                <div className={styles.repairRange}>$350–$900</div>
                <div className={styles.repairDesc}>Including labor, 20–44 gal residential tank</div>
              </div>
              <div className={styles.repairCard}>
                <div className={styles.repairTitle}>Submersible Pump Replacement</div>
                <div className={styles.repairRange}>$800–$2,500</div>
                <div className={styles.repairDesc}>Pull, replace, and reinstall — all depths</div>
              </div>
              <div className={styles.repairCard}>
                <div className={styles.repairTitle}>Pressure Switch / Control Box</div>
                <div className={styles.repairRange}>$200–$450</div>
                <div className={styles.repairDesc}>Common cause of no-water or short-cycling</div>
              </div>
              <div className={styles.repairCard}>
                <div className={styles.repairTitle}>Well Chlorination / Shock</div>
                <div className={styles.repairRange}>$150–$300</div>
                <div className={styles.repairDesc}>Disinfection after flood, repair, or bacteria test</div>
              </div>
              <div className={styles.repairCard}>
                <div className={styles.repairTitle}>Constant-Pressure System Upgrade</div>
                <div className={styles.repairRange}>$1,200–$2,800</div>
                <div className={styles.repairDesc}>Variable-speed drive + controller installed</div>
              </div>
            </div>
            <div className={styles.repairCta}>
              <p>Pump trouble? Don&apos;t wait — a failed pump means no water.</p>
              <a href="tel:+12814484447" className={styles.ctaBtn}>
                Call Now: (281) 448-4447
              </a>
              <Link href="/services/residential" className={styles.ctaLink}>
                Well Pump Replacement Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Frequently Asked Questions — Water Well Costs</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{linkifyPhone(faq.answer)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREA + CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Get a Free Water Well Estimate — Houston Area</h2>
            <p>
              B-E Waterwell Services has drilled 5,000+ wells across Montgomery, Harris, Waller,
              Fort Bend, and surrounding counties since 1979. We're licensed by the Texas Department
              of Licensing and Regulation (TDLR) and provide written estimates before any work begins.
            </p>
            <p className={styles.serviceAreaList}>
              Serving: Houston · Magnolia · Tomball · Conroe · The Woodlands · Spring · Cypress ·
              Humble · Kingwood · Katy · Waller · Montgomery · Pinehurst · Sugar Land · Baytown
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:+12814484447" className={styles.ctaBtn}>
                (281) 448-4447 — Call for Free Estimate
              </a>
              <Link href="/contact" className={styles.ctaOutline}>
                Send Us a Message
              </Link>
            </div>
            <div className={styles.relatedLinks}>
              <Link href="/services/water-well-drilling">Water Well Drilling Services</Link>
              <Link href="/services/residential">Well Pump Replacement</Link>
              <Link href="/services/well-maintenance">Well Maintenance</Link>
              <Link href="/services">All Services</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
