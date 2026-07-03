import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnnouncementBar from '../../components/AnnouncementBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { blogPosts, getBlogPostBySlug, getBlogPostsByCategory } from '../../../lib/blogData';

const CATEGORY_LABELS: Record<string, string> = {
  'water-well-drilling': 'Well Drilling',
  'well-pump-services': 'Pump Services',
  'water-well-systems': 'Well Systems',
  'well-maintenance': 'Maintenance',
  'emergency-well-services': 'Emergency Service',
};

const CATEGORY_STYLES: Record<string, { gradient: string; icon: string }> = {
  'water-well-drilling': { gradient: 'linear-gradient(135deg,#4a3a2a 0%,#6B4F33 100%)', icon: '🔩' },
  'well-pump-services':  { gradient: 'linear-gradient(135deg,#3d4b52 0%,#55636d 100%)', icon: '⚙️' },
  'water-well-systems':  { gradient: 'linear-gradient(135deg,#4a4030 0%,#6b5a3b 100%)', icon: '💧' },
  'well-maintenance':    { gradient: 'linear-gradient(135deg,#3f4a3a 0%,#55634f 100%)', icon: '🔧' },
  'emergency-well-services': { gradient: 'linear-gradient(135deg,#7a3a1a 0%,#b84e08 100%)', icon: '⚡' },
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found | B-E Waterwell Services' };
  return {
    title: `${post.title} | B-E Waterwell Services`,
    description: post.excerpt,
    alternates: { canonical: `https://bewaterwells.com/blog/${post.slug}` },
  };
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const label = CATEGORY_LABELS[post.categorySlug] ?? post.categorySlug;
  const cs = CATEGORY_STYLES[post.categorySlug] ?? { gradient: 'linear-gradient(135deg,#4a3a2a 0%,#6B4F33 100%)', icon: '💧' };
  const related = getBlogPostsByCategory(post.categorySlug, 4).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', background: cs.gradient, paddingTop: '150px', paddingBottom: '56px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-head)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
            ← Back to Blog
          </Link>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', margin: '18px 0 14px' }}>
            <span style={{ fontFamily: 'var(--font-head)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)', background: 'rgba(0,0,0,0.3)', padding: '4px 12px', borderRadius: '20px' }}>
              {label}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)' }}>{formatDate(post.date)}</span>
          </div>
          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(1.7rem,3.6vw,2.6rem)', fontFamily: 'var(--font-head)', fontWeight: 900, lineHeight: 1.2 }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '56px 0 64px', background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <p style={{ fontSize: '1.15rem', color: 'var(--dark-earth)', lineHeight: 1.75, fontWeight: 500, marginBottom: '28px' }}>
            {post.excerpt}
          </p>

          <div style={{ background: 'var(--white)', border: '1px solid var(--light-stone)', borderLeft: '4px solid var(--highlight)', borderRadius: 'var(--radius)', padding: '28px 32px' }}>
            <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--dark-earth)', marginBottom: '10px' }}>
              Have a question about this on your property?
            </h2>
            <p style={{ color: 'var(--dark-stone)', lineHeight: 1.7, marginBottom: '20px' }}>
              Every well and every site is different. Our team has serviced more than 5,000 wells
              across the Houston area since 1979 — call us and we&apos;ll give you a straight answer
              specific to your situation.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="tel:+12814484447" className="btn btn-primary">📞 (281) 448-4447</a>
              <Link href="/contact" className="btn btn-dark">Get Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ padding: '8px 0 64px', background: 'var(--off-white)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.3rem', color: 'var(--dark-earth)', marginBottom: '20px' }}>
              More on {label}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '18px' }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ background: 'var(--white)', border: '1px solid var(--light-stone)', borderRadius: 'var(--radius)', padding: '20px 22px', textDecoration: 'none', color: 'inherit' }}>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--dark-earth)', lineHeight: 1.4, marginBottom: '8px' }}>{r.title}</h3>
                  <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--highlight)' }}>Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
