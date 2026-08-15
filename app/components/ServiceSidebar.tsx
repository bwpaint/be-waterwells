'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getBlogPostsByCategory, getRecentBlogPosts } from '../../lib/blogData';
import styles from './ServiceSidebar.module.css';
import Icon from './Icon';

interface ServiceSidebarProps {
  category?: string;
  categoryLabel?: string;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  'Water Well Drilling & Installation',
  'Residential Well Services',
  'Well Pump Replacement',
  'Pressure Tank / Constant Pressure',
  'Generator Prep',
  'Emergency Service',
  'Commercial / Agricultural',
  'Irrigation Well',
  'Well Rehabilitation',
  'Well Maintenance & Inspection',
  'Other',
];

export default function ServiceSidebar({
  category,
  categoryLabel,
  defaultService = '',
}: ServiceSidebarProps) {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const posts = category
    ? getBlogPostsByCategory(category)
    : getRecentBlogPosts(4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          comments: message,
          source: `Sidebar${categoryLabel ? ` — ${categoryLabel}` : ''}`,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Something went wrong. Please call 281-448-4447.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Could not reach the server. Please call 281-448-4447.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.sidebar}>
      {/* ── Search ── */}
      <div className={styles.widget}>
        <form className={styles.searchForm} onSubmit={handleSearch} role="search">
          <input
            type="search"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
            aria-label="Search articles"
          />
          <button type="submit" className={styles.searchBtn} aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </form>
      </div>

      {/* ── Quick Contact ── */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>Quick Contact</h3>
        {submitted ? (
          <div className={styles.submitted}>
            <p>Thanks! We&apos;ll call you back within 2 hours during business hours.</p>
            <a
              href="tel:+12814484447"
              className="btn btn-primary"
              style={{ display: 'block', textAlign: 'center', marginTop: 12 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (281) 448-4447
            </a>
          </div>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.formInput}
              autoComplete="name"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={styles.formInput}
              autoComplete="tel"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formInput}
              autoComplete="email"
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={styles.formInput}
            >
              <option value="">Select a Service</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <textarea
              placeholder="Comments / what you're interested in"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.formInput}
              rows={3}
              style={{ resize: 'vertical' }}
            />
            {error && (
              <p style={{ color: '#b3261e', fontSize: '0.8rem', margin: 0 }} role="alert">
                {error}
              </p>
            )}
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Sending…' : 'Request Callback'}
            </button>
            <a href="tel:+12814484447" className={styles.phoneAlt}>
              <Icon name="phone" size={16} /> Or Call (281) 448-4447
            </a>
          </form>
        )}
      </div>

      {/* ── Related Articles ── */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>
          {categoryLabel ? `${categoryLabel} Articles` : 'Recent Articles'}
        </h3>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.postItem}>
              <Link
                href={`/blog/${post.slug}`}
                className={styles.postLink}
              >
                {post.title}
              </Link>
              <span className={styles.postDate}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </li>
          ))}
        </ul>
        {category && (
          <Link
            href={`/blog/${category}`}
            className={styles.allArticlesLink}
          >
            All {categoryLabel || ''} Articles →
          </Link>
        )}
      </div>
    </div>
  );
}
