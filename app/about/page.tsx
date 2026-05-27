import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'About B-E Waterwell Services | Houston Area Since 1979',
  description:
    'Family-owned and operated since 1979, B-E Waterwell Services has drilled over 5,000 waterwells across the Houston area. Meet the team behind 45+ years of trusted waterwell expertise.',
};

const milestones = [
  { year: '1979', event: 'B-E Waterwell Services founded in Magnolia, TX by the Benge family.' },
  { year: '1985', event: 'Expanded service area to cover all of Montgomery County.' },
  { year: '1993', event: 'Reached 1,000 waterwells drilled milestone. Added irrigation well services.' },
  { year: '2001', event: 'Expanded into Harris and Waller counties. Added commercial drilling rigs.' },
  { year: '2010', event: '3,000 waterwells drilled. Launched 24/7 emergency pump service.' },
  { year: '2019', event: '40-year anniversary. 4,500+ waterwells drilled across the Houston area.' },
  { year: '2024', event: 'Over 5,000 waterwells drilled. Still family-owned, still in Magnolia, TX.' },
];

const values = [
  {
    icon: '🏡',
    title: 'Family-Owned',
    desc: 'Three generations of waterwell expertise. When you call us, you talk to the people who will show up and do the work — not a call center.',
  },
  {
    icon: '⏱️',
    title: '24/7 Emergency Service',
    desc: 'Water emergencies don\'t keep business hours. Our emergency team is available around the clock for well failures, pump outages, and loss of water pressure.',
  },
  {
    icon: '🎓',
    title: 'Licensed & Insured',
    desc: 'Fully licensed with the Texas Department of Licensing and Regulation (TDLR). Every job meets Texas well construction standards.',
  },
  {
    icon: '📍',
    title: 'Local Expertise',
    desc: 'We know Houston-area geology, aquifer depths, and water table conditions by county. That local knowledge means fewer surprises on your job.',
  },
];

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section style={{
        background: 'var(--charcoal)',
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div className="container">
          <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Magnolia, Texas · Est. 1979
          </p>
          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2rem,5vw,3.2rem)', fontFamily: 'var(--font-head)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.15 }}>
            Over 45 Years of Waterwell<br />Excellence in the Houston Area
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            B-E Waterwell Services is a family-owned, TDLR-licensed waterwell drilling and pump service company headquartered in Magnolia, TX. Since 1979, we&apos;ve drilled over 5,000 waterwells for homeowners, ranchers, and businesses across the greater Houston area.
          </p>
          <a href="tel:+12814484447" className="btn btn-primary">Call (281) 448-4447</a>
        </div>
      </section>

      {/* Stats row */}
      <section style={{ background: 'var(--dark-earth)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, textAlign: 'center' }}>
            {[
              { val: '45+', label: 'Years in Business' },
              { val: '5,000+', label: 'Waterwells Drilled' },
              { val: '24/7', label: 'Emergency Service' },
              { val: '11', label: 'Cities Served' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '20px', borderRight: i < 3 ? '1px solid var(--mid-stone)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.2rem', fontWeight: 900, color: 'var(--orange)' }}>{s.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontFamily: 'var(--font-head)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Why Choose B-E</p>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900, color: 'var(--dark-earth)' }}>What Sets Us Apart</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '28px' }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: 'var(--white)', border: '1px solid var(--light-stone)', borderRadius: 'var(--radius)', padding: '32px 28px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1rem', color: 'var(--dark-earth)', marginBottom: '10px', letterSpacing: '0.02em' }}>{v.title}</h3>
                <p style={{ color: 'var(--dark-stone)', fontSize: '0.92rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Our Story</p>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900, color: 'var(--dark-earth)' }}>45 Years of History</h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '2px solid var(--light-stone)' }}>
            {milestones.map((m) => (
              <div key={m.year} style={{ marginBottom: '32px', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-41px', top: '4px',
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: 'var(--orange)', border: '3px solid var(--white)',
                  boxShadow: '0 0 0 2px var(--orange)',
                }} />
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '0.82rem', color: 'var(--orange)', letterSpacing: '0.08em' }}>{m.year}</span>
                <p style={{ marginTop: '4px', color: 'var(--dark-stone)', fontSize: '0.95rem', lineHeight: 1.6 }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--charcoal)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: 'var(--white)', marginBottom: '14px' }}>
            Ready to Work With Houston&apos;s Waterwell Experts?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '28px', fontSize: '1rem' }}>
            Call us today or request a free estimate — we&apos;ll have someone out to your property fast.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Get a Free Estimate</Link>
            <a href="tel:+12814484447" className="btn btn-secondary">(281) 448-4447</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
