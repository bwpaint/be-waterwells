// Single source of truth for the site's base URL.
// Override per-environment with NEXT_PUBLIC_SITE_URL in Vercel; falls back to production.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://bewaterwells.com'
).replace(/\/$/, '');
