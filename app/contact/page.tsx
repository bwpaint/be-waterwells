import type { Metadata } from 'next';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | B-E Waterwell Services — Houston Area',
  description:
    'Contact B-E Waterwell Services for waterwell drilling, pump repair, and emergency service in the Houston area. Call (281) 448-4447 or get a consultation online.',
};

export default function ContactPage() {
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
            Emergency Service Available
          </p>
          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2rem,5vw,3rem)', fontFamily: 'var(--font-head)', fontWeight: 900, marginBottom: '16px', lineHeight: 1.15 }}>
            Contact B-E Waterwell Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Ready to help with waterwell drilling, pump service, or a water emergency anywhere in the Houston area.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section style={{ padding: '72px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '56px', alignItems: 'start', maxWidth: '1100px', margin: '0 auto' }}>

            {/* Left: info */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.6rem', color: 'var(--dark-earth)', marginBottom: '24px' }}>How to Reach Us</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  {
                    icon: '📞',
                    label: 'Phone',
                    value: '(281) 448-4447',
                    sub: 'Emergency service available',
                    href: 'tel:+12814484447',
                  },
                  {
                    icon: '📍',
                    label: 'Location',
                    value: 'Magnolia, TX',
                    sub: 'Serving Houston area & surrounding counties',
                  },
                  {
                    icon: '🕐',
                    label: 'Business Hours',
                    value: 'Mon–Fri 7am–7pm',
                    sub: 'Emergency Service Available',
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '2px' }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--dark-earth)', textDecoration: 'none' }}>{item.value}</a>
                      ) : (
                        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--dark-earth)' }}>{item.value}</div>
                      )}
                      <div style={{ fontSize: '0.88rem', color: 'var(--dark-stone)', marginTop: '2px' }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(217,95,10,0.08)', border: '1px solid rgba(217,95,10,0.25)', borderRadius: 'var(--radius)' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--orange)', fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>⚡ Water Emergency?</div>
                <p style={{ fontSize: '0.92rem', color: 'var(--dark-stone)', lineHeight: 1.6, margin: 0 }}>
                  If you&apos;ve lost water or have a pump failure, call us directly at <a href="tel:+12814484447" style={{ color: 'var(--orange)', fontWeight: 700 }}>(281) 448-4447</a>. Emergency service is available.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.6rem', color: 'var(--dark-earth)', marginBottom: '24px' }}>Get Consultation</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
