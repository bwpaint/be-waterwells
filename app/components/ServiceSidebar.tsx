'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getBlogPostsByCategory, getRecentBlogPosts } from '../../lib/blogData';
import styles from './ServiceSidebar.module.css';

interface ServiceSidebarProps {
  category?: string;
  categoryLabel?: string;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  'Water Well Drilling',
  'Irrigation Well',
  'Emergency Well Service',
  'Pump Installation',
  'Pump Repair',
  'Constant Pressure System',
  'Pressure Tank',
  'Generator Prep Kit',
  'Well Rehabilitation',
  'Well Inspection',
  'Well Maintenance',
  'Commercial / Agricultural',
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
  const [service, setService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);

  const posts = category
    ? getBlogPostsByCategory(category)
    : getRecentBlogPosts(4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to an API route / CRM
    // For now: show confirmation and offer the phone number
    setSubmitted(true);
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
              📞 (281) 448-4447
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
            <button type="submit" className={styles.submitBtn}>
              Request Callback
            </button>
            <a href="tel:+12814484447" className={styles.phoneAlt}>
              📞 Or Call (281) 448-4447
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
                href={`/blog/${post.categorySlug}/${post.slug}`}
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
