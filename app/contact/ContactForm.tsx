'use client';

import { useState } from 'react';

const SERVICES = [
  'New Well Drilling',
  'Irrigation Well',
  'Commercial / Agricultural Well',
  'Pump Installation or Repair',
  'Constant Pressure System',
  'Pressure Tank Service',
  'Generator Prep Kit',
  'Well Rehabilitation',
  'Well Inspection',
  'Emergency Service',
  'Other',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div style={{ background: 'var(--white)', border: '1px solid var(--light-stone)', borderRadius: 'var(--radius)', padding: '40px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.3rem', color: 'var(--dark-earth)', marginBottom: '10px' }}>Message Received!</h3>
        <p style={{ color: 'var(--dark-stone)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
          We&apos;ll be in touch shortly. For urgent issues, call us directly:
        </p>
        <a href="tel:+12814484447" style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.2rem', color: 'var(--orange)', textDecoration: 'none' }}>
          (281) 448-4447
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: 'var(--white)', border: '1px solid var(--light-stone)', borderRadius: 'var(--radius)', padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--dark-earth)', marginBottom: '4px' }}>
        Request a Free Estimate
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={labelStyle}>First Name *</label>
          <input required style={inputStyle} type="text" placeholder="John" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={labelStyle}>Last Name *</label>
          <input required style={inputStyle} type="text" placeholder="Smith" />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>Phone *</label>
        <input required style={inputStyle} type="tel" placeholder="(281) 555-0000" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>Email</label>
        <input style={inputStyle} type="email" placeholder="john@example.com" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>City / Property Location *</label>
        <input required style={inputStyle} type="text" placeholder="Magnolia, TX" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>Service Needed *</label>
        <select required style={inputStyle}>
          <option value="">— Select a service —</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={labelStyle}>Tell us about your project</label>
        <textarea
          style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
          placeholder="Property type, existing well condition, urgency, etc."
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}>
        Send Message — Get Free Estimate
      </button>

      <p style={{ fontSize: '0.78rem', color: 'var(--dark-stone)', textAlign: 'center', marginTop: '-4px' }}>
        Or call us directly: <a href="tel:+12814484447" style={{ color: 'var(--orange)', fontWeight: 700 }}>(281) 448-4447</a>
      </p>
    </form>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-head)',
  fontWeight: 700,
  fontSize: '0.75rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--dark-stone)',
};

const inputStyle: React.CSSProperties = {
  padding: '10px 14px',
  border: '1px solid var(--light-stone)',
  borderRadius: '6px',
  fontFamily: 'var(--font-body)',
  fontSize: '0.92rem',
  color: 'var(--dark-earth)',
  background: 'var(--off-white)',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};
