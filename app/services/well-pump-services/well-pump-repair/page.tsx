import type { Metadata } from 'next';
import Icon from '../../../components/Icon';
import Link from 'next/link';
import AnnouncementBar from '../../../components/AnnouncementBar';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ServiceLayout from '../../../components/ServiceLayout';
import { buildFaqSchema, buildServiceSchema, LOCAL_BUSINESS_SCHEMA } from '../../../../lib/seoData';
import { linkifyPhone } from '../../../../lib/linkifyPhone';

export const metadata: Metadata = {
  title: 'Well Pump Repair & Replacement | Houston Area | B-E Waterwell Services',
  description: 'Expert well pump repair and replacement serving the greater Houston area since 1979. Same-day service available. No water pressure? Pump short-cycling? Call (281) 448-4447.',
  alternates: { canonical: 'https://bewaterwells.com/services/well-pump-services/well-pump-repair' },
  openGraph: {
    title: 'Well Pump Repair & Replacement — Houston Area',
    description: 'B-E Waterwell Services: licensed well pump repair and replacement in Montgomery, Harris, and Waller counties. 45 years of Houston-area expertise.',
  },
};

const faqs = [
  {
    question: 'What are the signs my well pump is failing?',
    answer: 'Common signs include: sudden loss of water pressure, air sputtering from faucets, the pump short-cycling (turning on and off rapidly every few seconds), unusually high electric bills, or complete loss of water. Any of these symptoms warrants an immediate inspection — a failing pump can damage your motor and pressure tank if left unaddressed.',
  },
  {
    question: 'Why does my well pump keep turning on and off?',
    answer: 'Rapid on/off cycling — called short-cycling — is almost always caused by a waterlogged pressure tank that has lost its air charge, or a pressure switch that is set incorrectly. Occasionally it indicates a pump that can no longer maintain pressure. We diagnose this on-site and can usually resolve it the same day.',
  },
  {
    question: 'What causes low water pressure from a well?',
    answer: 'Low pressure from a well typically points to one of four causes: a failing or undersized submersible pump, a waterlogged pressure tank, a clogged well screen or intake, or a drop in the water table (especially during dry Texas summers). Our technicians will test the system from pump to tank to identify the exact cause.',
  },
  {
    question: 'How much does well pump replacement cost in the Houston area?',
    answer: 'Well pump replacement in the Houston area typically runs $1,200–$3,500 for a standard residential submersible pump, including parts and labor. Deeper wells (250–400 ft) or high-demand systems can run $2,500–$5,000. We provide a written estimate before any work begins.',
  },
  {
    question: 'How long does a well pump last?',
    answer: 'A quality submersible well pump lasts 10–15 years with proper maintenance. Pumps in Houston-area wells with iron-heavy water or that short-cycle frequently may fail sooner. Regular annual inspections catch early wear before you lose water completely.',
  },
  {
    question: 'Can you repair my well pump the same day?',
    answer: 'Yes — for most residential pump failures in the greater Houston area, we carry common pump models and parts on our service trucks and can complete same-day repairs. For 24/7 emergency service, call us directly at (281) 448-4447.',
  },
  {
    question: 'What is the difference between a submersible pump and a jet pump?',
    answer: 'A submersible pump sits at the bottom of your well and pushes water up to the surface. It is the standard for most Houston-area wells deeper than 25 feet. A jet pump sits above ground and pulls water up — it is only suitable for very shallow wells. Most residential wells in Montgomery, Harris, and Waller counties use submersible pumps.',
  },
  {
    question: 'Do you service all well pump brands?',
    answer: 'Yes. We service and replace all major brands including Franklin Electric, Grundfos, Goulds, Sta-Rite, and Myers. We most commonly install Franklin Electric submersible pumps, which are backed by a full manufacturer warranty we pass on to our customers.',
  },
];

const symptoms = [
  { icon: 'droplet' as const, title: 'No Water at All', desc: 'Turned on a faucet and nothing came out? Could be a tripped breaker, failed pump, or broken pressure switch. Call us — this is a same-day emergency.' },
  { icon: 'trendDown' as const, title: 'Sudden Low Pressure', desc: 'Pressure dropped overnight or after a power outage? Your pump or pressure tank may have failed. Do not wait — low pressure often means the pump is working overtime.' },
  { icon: 'bolt' as const, title: 'Pump Won\'t Stop Running', desc: 'If your pump runs continuously and never shuts off, your tank\'s air bladder has failed or your pump can\'t build pressure. This will burn out your motor fast.' },
  { icon: 'cycle' as const, title: 'Short Cycling (On/Off Every Few Seconds)', desc: 'A pump that clicks on and off rapidly every few seconds has a waterlogged tank. Easy fix — but ignore it and you\'ll burn out a $1,500 pump.' },
  { icon: 'wind' as const, title: 'Air Spitting from Faucets', desc: 'Sputtering air mixed with water means your pump intake is near or above the water table, or you have a crack in the drop pipe. Both need immediate attention.' },
  { icon: 'wave' as const, title: 'Discolored or Gritty Water', desc: 'Brown, rusty, or sandy water after having clear water for years often means your well screen has failed or your pump is pulling sediment. Time for an inspection.' },
];

const serviceSteps = [
  { step: '1', title: 'Diagnose', desc: 'Our technician runs a full system test — pump pressure, motor amperage, tank pre-charge, and pressure switch settings. You get a written diagnosis.' },
  { step: '2', title: 'Quote', desc: 'We give you a written quote for repair or replacement before touching anything. No surprises, no upsells.' },
  { step: '3', title: 'Repair or Replace', desc: 'Most repairs are completed same-day. We stock the most common residential pump models on our service trucks.' },
  { step: '4', title: 'Test & Document', desc: 'After service, we verify system pressure, pump output, and run time. You receive a service report for your records.' },
];

const serviceAreas = ['Houston', 'Magnolia', 'Tomball', 'The Woodlands', 'Spring', 'Cypress', 'Conroe', 'Humble', 'Kingwood', 'Katy', 'Waller', 'Montgomery', 'Pinehurst', 'Sugar Land', 'Baytown'];

const jsonLd = [
  LOCAL_BUSINESS_SCHEMA,
  buildServiceSchema({
    name: 'Well Pump Repair & Replacement',
    description: 'Residential and commercial well pump repair, replacement, and emergency service in the greater Houston area. Serving Harris, Montgomery, Waller, and Fort Bend counties.',
    url: 'https://bewaterwells.com/services/well-pump-services/well-pump-repair',
    category: 'Well Pump Service',
  }),
  buildFaqSchema(faqs),
];

export default function WellPumpRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'var(--charcoal)', paddingTop: '140px', paddingBottom: '64px' }}>
        <div className="container">
          <nav style={{ marginBottom: '16px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-head)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            {' › '}<Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Services</Link>
            {' › '}<Link href="/services/well-pump-services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Well Pump Services</Link>
            {' › '}<span style={{ color: 'rgba(255,255,255,0.75)' }}>Well Pump Repair</span>
          </nav>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start' }}>
            <div>
              <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Greater Houston Area · Harris, Montgomery & Waller Counties
              </p>
              <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2rem,4.5vw,3rem)', fontFamily: 'var(--font-head)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>
                Well Pump Repair &amp;<br />Replacement Services
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.75, marginBottom: '28px' }}>
                Lost water pressure or no water at all? B-E Waterwell Services has diagnosed and repaired well pumps across the Houston area for over 45 years. We carry most pump models on our service trucks — same-day repairs available, 24/7 emergency service.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="tel:+12814484447" className="btn btn-primary">Call (281) 448-4447</a>
                <Link href="/contact" className="btn btn-secondary">Request Service Online</Link>
              </div>
            </div>
            {/* Emergency box */}
            <div style={{ background: 'rgba(217,95,10,0.15)', border: '2px solid var(--orange)', borderRadius: 'var(--radius)', padding: '24px 28px', minWidth: '240px', textAlign: 'center' }}>
              <div style={{ marginBottom: '8px', color: 'var(--orange)' }}><Icon name="bolt" size={34} /></div>
              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 900, color: 'var(--orange)', fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>24/7 Emergency</div>
              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--white)', marginBottom: '6px' }}>(281) 448-4447</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>No water? Call now.<br />Same-day response available.</div>
            </div>
          </div>
        </div>
      </section>

      <ServiceLayout category="well-pump-services" categoryLabel="Well Pump Services" defaultService="Pump Repair">
        {/* Symptoms section */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,1.9rem)', color: 'var(--dark-earth)', marginBottom: '8px' }}>
            Signs Your Well Pump Needs Repair
          </h2>
          <p style={{ color: 'var(--dark-stone)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '28px' }}>
            Houston-area well pumps take a beating — hot summers lower the water table, iron-heavy water corrodes pump internals, and power surges from summer storms damage motors. Here are the warning signs we see most often:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            {symptoms.map(s => (
              <div key={s.title} style={{ background: 'var(--off-white)', border: '1px solid var(--light-stone)', borderRadius: 'var(--radius)', padding: '20px' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}><Icon name={s.icon} size={30} /></div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--dark-earth)', marginBottom: '6px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--dark-stone)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', padding: '16px 20px', background: 'rgba(217,95,10,0.06)', border: '1px solid rgba(217,95,10,0.2)', borderRadius: '8px' }}>
            <strong style={{ fontFamily: 'var(--font-head)', color: 'var(--dark-earth)', fontSize: '0.88rem' }}>Don\'t wait.</strong>
            <span style={{ fontSize: '0.88rem', color: 'var(--dark-stone)', marginLeft: '8px' }}>A short-cycling pump or one running continuously will burn out its motor within days. Most pump failures that get addressed quickly are a repair — ones that get ignored become a full replacement.</span>
          </div>
        </section>

        {/* Repair vs Replace */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,1.9rem)', color: 'var(--dark-earth)', marginBottom: '20px' }}>
            Repair or Replace? We Help You Decide.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { label: 'Repair Makes Sense When', color: 'var(--green, #27ae60)', bg: '#f0fff4', border: '#a8e6c1', items: ['Pump is under 10 years old', 'Failure is a pressure switch or capacitor', 'Tank bladder failed (not the pump)', 'Motor windings are intact (amperage test)', 'Well itself is in good condition'] },
              { label: 'Replacement Makes More Sense When', color: '#c0392b', bg: '#fff5f5', border: '#f5c6c6', items: ['Pump is 12+ years old', 'Motor windings have failed', 'Pump is undersized for your household', 'Multiple repairs in the past 2 years', 'You want a constant pressure upgrade'] },
            ].map(c => (
              <div key={c.label} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 'var(--radius)', padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.92rem', color: c.color, marginBottom: '14px', letterSpacing: '0.02em' }}>{c.label}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {c.items.map(item => (
                    <li key={item} style={{ fontSize: '0.88rem', color: 'var(--dark-stone)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: c.color, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Cost ranges */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,1.9rem)', color: 'var(--dark-earth)', marginBottom: '8px' }}>
            Well Pump Repair &amp; Replacement Costs
          </h2>
          <p style={{ color: 'var(--dark-stone)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
            Pricing in the Houston area for 2026. All quotes are written before work begins — no surprises.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--charcoal)', color: 'var(--white)' }}>
                {['Service', 'Typical Range', 'Notes'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'var(--font-head)', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Pressure switch replacement', '$150 – $350', 'Parts + labor, same-day'],
                ['Capacitor / control box repair', '$200 – $500', 'Common after lightning strikes'],
                ['Pressure tank replacement (40 gal)', '$600 – $1,100', 'Fixes short-cycling immediately'],
                ['Submersible pump replacement (< 200 ft)', '$1,200 – $2,200', 'Most common residential repair'],
                ['Submersible pump replacement (200–350 ft)', '$1,800 – $3,500', 'Deeper pull, heavier equipment'],
                ['Full pump + tank system replacement', '$2,500 – $5,000', 'Comprehensive system refresh'],
                ['Emergency / after-hours service', '+$150 – $300 surcharge', 'Added to above service cost'],
              ].map(([svc, range, note], i) => (
                <tr key={svc} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)', borderBottom: '1px solid var(--light-stone)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--dark-earth)' }}>{svc}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--dark-earth)', fontWeight: 700, fontFamily: 'var(--font-head)' }}>{range}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--dark-stone)', fontSize: '0.85rem' }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '0.82rem', color: 'var(--dark-stone)', marginTop: '10px' }}>
            Need a more detailed estimate? Use our <Link href="/resources/water-well-cost" style={{ color: 'var(--dark-earth)', fontWeight: 700 }}>cost estimator tool</Link> or call us for a free on-site quote.
          </p>
        </section>

        {/* Our process */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,1.9rem)', color: 'var(--dark-earth)', marginBottom: '24px' }}>
            How Our Pump Service Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {serviceSteps.map(s => (
              <div key={s.step} style={{ textAlign: 'center', padding: '24px 16px', background: 'var(--off-white)', borderRadius: 'var(--radius)', border: '1px solid var(--light-stone)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--orange)', color: 'var(--white)', fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>{s.step}</div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.92rem', color: 'var(--dark-earth)', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--dark-stone)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related services */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.3rem', color: 'var(--dark-earth)', marginBottom: '16px' }}>
            Related Well Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            {[
              { label: 'Constant Pressure Systems', href: '/services/well-pump-services/constant-pressure-systems', desc: 'Upgrade to steady pressure — no more fluctuations when irrigation runs.' },
              { label: 'Pressure Tank Service', href: '/services/water-well-systems/pressure-tank-systems', desc: 'Waterlogged tank? We replace all brands, same day.' },
              { label: 'Emergency Well Service', href: '/services/emergency-well-services', desc: '24/7 response for complete water loss anywhere in the Houston area.' },
              { label: 'Well Inspection', href: '/services/well-maintenance/well-inspection', desc: 'Annual inspection catches pump wear before you lose water.' },
              { label: 'Well Rehabilitation', href: '/services/well-maintenance/well-rehabilitation', desc: 'Low yield or iron bacteria? We restore output and water quality.' },
              { label: 'New Well Drilling', href: '/services/water-well-drilling/new-well-drilling', desc: 'Time for a new well? We drill and complete in one mobilization.' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', padding: '18px', background: 'var(--off-white)', border: '1px solid var(--light-stone)', borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.15s' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--dark-earth)', marginBottom: '6px' }}>{link.label} →</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--dark-stone)', lineHeight: 1.55 }}>{link.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Service area */}
        <section style={{ marginBottom: '56px', padding: '28px', background: 'var(--off-white)', borderRadius: 'var(--radius)', border: '1px solid var(--light-stone)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.2rem', color: 'var(--dark-earth)', marginBottom: '12px' }}>
            Well Pump Repair Service Area — Greater Houston, TX
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--dark-stone)', lineHeight: 1.7, marginBottom: '14px' }}>
            We repair and replace well pumps throughout the greater Houston metro area — roughly a 60-mile radius from our shop in Magnolia, TX. This covers Harris County, Montgomery County, Waller County, Fort Bend County, and surrounding areas.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {serviceAreas.map(city => (
              <span key={city} style={{ fontFamily: 'var(--font-head)', fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px', background: 'var(--white)', border: '1px solid var(--mid-stone)', borderRadius: '20px', color: 'var(--dark-stone)' }}>{city}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,1.9rem)', color: 'var(--dark-earth)', marginBottom: '24px' }}>
            Well Pump Repair — Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map(faq => (
              <div key={faq.question} style={{ border: '1px solid var(--light-stone)', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ background: 'var(--off-white)', padding: '16px 20px', fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark-earth)' }}>
                  {faq.question}
                </div>
                <div style={{ padding: '16px 20px', fontSize: '0.92rem', color: 'var(--dark-stone)', lineHeight: 1.7 }}>
                  {linkifyPhone(faq.answer)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ServiceLayout>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--charcoal)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--white)', marginBottom: '12px' }}>
            Well Pump Problem in the Houston Area?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '28px', fontSize: '1rem' }}>
            Call us now or request service online. Most repairs are same-day.<br />30815 Collier Smith Rd., Magnolia, TX · Serving a 60-mile radius of Houston.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+12814484447" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
              <Icon name="bolt" size={15} /> Call (281) 448-4447
            </a>
            <Link href="/contact" className="btn btn-secondary">Request Service Online</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
