import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllBlogPosts } from '../../lib/blogData';

export const metadata: Metadata = {
  title: 'Waterwell Blog & Resources | B-E Waterwell Services',
  description:
    'Expert waterwell tips, maintenance guides, and Houston-area well drilling resources from B-E Waterwell Services — serving the Houston area since 1979.',
};

const categories = [
  { slug: 'water-well-drilling', label: 'Well Drilling' },
  { slug: 'well-pump-services', label: 'Pump Services' },
  { slug: 'water-well-systems', label: 'Well Systems' },
  { slug: 'well-maintenance', label: 'Maintenance' },
  { slug: 'emergency-well-services', label: 'Emergency Service' },
];

// Branded card headers (stand in for photography until the CMS media library is wired)
const CATEGORY_STYLES: Record<string, { gradient: string; icon: string }> = {
  'water-well-drilling': { gradient: 'linear-gradient(135deg,#4a3a2a 0%,#6B4F33 100%)', icon: '🔩' },
  'well-pump-services':  { gradient: 'linear-gradient(135deg,#3d4b52 0%,#55636d 100%)', icon: '⚙️' },
  'water-well-systems':  { gradient: 'linear-gradient(135deg,#4a4030 0%,#6b5a3b 100%)', icon: '💧' },
  'well-maintenance':    { gradient: 'linear-gradient(135deg,#3f4a3a 0%,#55634f 100%)', icon: '🔧' },
  'emergency-well-services': { gradient: 'linear-gradient(135deg,#7a3a1a 0%,#b84e08 100%)', icon: '⚡' },
};

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'var(--charcoal)', paddingTop: '180px', paddingBottom: '56px', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Tips, Guides & Insights
          </p>
          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontFamily: 'var(--font-head)', fontWeight: 900, marginBottom: '16px', lineHeight: 1.15 }}>
            Waterwell Resources & Blog
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
            Expert guidance from 45+ years of Houston-area waterwell experience.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ background: 'var(--dark-earth)', padding: '20px 0', borderBottom: '1px solid var(--mid-stone)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                style={{
                  fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.72rem',
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  padding: '6px 16px', borderRadius: '20px',
                  border: '1px solid rgba(196,170,136,0.3)',
                  color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '64px 0', background: 'var(--off-white)' }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--dark-stone)' }}>
              <p style={{ fontSize: '1.1rem' }}>Articles coming soon. Check back shortly!</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
                Ask Us a Question
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '28px' }}>
              {posts.map((post) => {
                const cat = categories.find(c => c.slug === post.categorySlug);
                const cs = CATEGORY_STYLES[post.categorySlug] ?? { gradient: 'linear-gradient(135deg,#4a3a2a 0%,#6B4F33 100%)', icon: '💧' };
                return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ background: 'var(--white)', border: '1px solid var(--light-stone)', borderRadius: 'var(--radius)', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}
                >
                  {/* Card header (branded visual) */}
                  <div style={{ position: 'relative', height: '150px', background: cs.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '3rem', opacity: 0.9 }} aria-hidden="true">{cs.icon}</span>
                    <span style={{ position: 'absolute', left: '16px', bottom: '14px', fontFamily: 'var(--font-head)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)', background: 'rgba(0,0,0,0.35)', padding: '4px 12px', borderRadius: '20px' }}>
                      {cat?.label ?? post.categorySlug}
                    </span>
                  </div>
                  <div style={{ padding: '24px 28px 16px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--warm-gray)', fontWeight: 600 }}>{formatDate(post.date)}</span>
                    <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--dark-earth)', lineHeight: 1.4, margin: '8px 0 10px' }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: '0.88rem', color: 'var(--dark-stone)', lineHeight: 1.65 }}>{post.excerpt}</p>
                  </div>
                  <div style={{ padding: '4px 28px 24px', marginTop: 'auto' }}>
                    <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--highlight)' }}>
                      Read Article →
                    </span>
                  </div>
                </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--charcoal)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: 'clamp(1.4rem,3vw,2rem)', color: 'var(--white)', marginBottom: '12px' }}>
            Have a Waterwell Question?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '0.95rem' }}>
            Our team has 45+ years of answers. Call or request a consultation.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Get Consultation</Link>
            <a href="tel:+12814484447" className="btn btn-secondary">(281) 448-4447</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
