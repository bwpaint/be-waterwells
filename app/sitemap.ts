import type { MetadataRoute } from 'next';
import { getAllCitySlugs } from '../lib/cityData';
import { getAllBlogPosts } from '../lib/blogData';
import { SITE_URL } from '../lib/siteConfig';

const BASE = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/water-well-drilling',
    '/services/residential',
    '/services/commercial',
    '/services/well-rehabilitation',
    '/services/well-maintenance',
    '/service-areas',
    '/blog',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));

  const cityEntries: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${BASE}/service-area/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticEntries, ...cityEntries, ...blogEntries];
}
