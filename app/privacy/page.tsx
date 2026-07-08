import type { Metadata } from 'next';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | B-E Waterwell Services',
  description:
    'How B-E Waterwell Services collects, uses, and protects the information you share with us.',
  alternates: { canonical: 'https://bewaterwells.com/privacy' },
  robots: { index: false, follow: true },
};

const sectionStyle: React.CSSProperties = {
  fontFamily: 'var(--font-head)',
  fontWeight: 800,
  fontSize: '1.15rem',
  color: 'var(--dark-earth)',
  margin: '32px 0 10px',
};
const pStyle: React.CSSProperties = {
  color: 'var(--dark-stone)',
  lineHeight: 1.75,
  marginBottom: '14px',
};

export default function PrivacyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <section style={{ background: 'var(--charcoal)', paddingTop: '180px', paddingBottom: '48px' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginRight: 'auto' }}>
            <h1 style={{ color: 'var(--white)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontFamily: 'var(--font-head)', fontWeight: 900 }}>
              Privacy Policy
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 0 64px', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginRight: 'auto' }}>
          <p style={pStyle}>
            B-E Waterwell Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
            privacy. This policy explains what information we collect through our website and how we use it.
          </p>

          <h2 style={sectionStyle}>Information We Collect</h2>
          <p style={pStyle}>
            When you contact us through a form or by phone, we may collect your name, phone number, email
            address, property location, and details about the service you need. We collect this information
            only so we can respond to your request and provide waterwell services.
          </p>

          <h2 style={sectionStyle}>How We Use Your Information</h2>
          <p style={pStyle}>
            We use the information you provide to respond to inquiries, schedule and perform work, send
            estimates, and follow up on service. We do not sell your personal information.
          </p>

          <h2 style={sectionStyle}>Sharing</h2>
          <p style={pStyle}>
            We share your information only with team members and trusted service providers who help us
            operate our business (for example, scheduling or communication tools), and only as needed to
            serve you. We may also disclose information if required by law.
          </p>

          <h2 style={sectionStyle}>Data Retention</h2>
          <p style={pStyle}>
            We keep your information for as long as needed to provide services and meet our legal and
            business obligations.
          </p>

          <h2 style={sectionStyle}>Your Choices</h2>
          <p style={pStyle}>
            You may ask us to update or delete the information we hold about you by calling{' '}
            <a href="tel:+12814484447" style={{ color: 'var(--highlight)', fontWeight: 700 }}>(281) 448-4447</a>{' '}
            or using our <a href="/contact" style={{ color: 'var(--highlight)', fontWeight: 700 }}>contact form</a>.
          </p>

          <h2 style={sectionStyle}>Contact Us</h2>
          <p style={pStyle}>
            Questions about this policy? Call us at{' '}
            <a href="tel:+12814484447" style={{ color: 'var(--highlight)', fontWeight: 700 }}>(281) 448-4447</a>.
            B-E Waterwell Services is based in Magnolia, TX, and serves the greater Houston area.
          </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
