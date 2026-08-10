// Single source of truth for the site's base URL.
// Override per-environment with NEXT_PUBLIC_SITE_URL in Vercel; falls back to production.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://bewaterwells.com'
).replace(/\/$/, '');

/** Primary phone, digits only for tel: links. */
export const PHONE_DISPLAY = '281-448-4447';
export const PHONE_TEL = '+12814484447';
export const EMAIL = 'zack@bewaterwells.com';

export const FACEBOOK_URL = 'https://www.facebook.com/bewaterwells';

/**
 * Google Business Profile URL. The profile does not exist yet — set
 * NEXT_PUBLIC_GOOGLE_BUSINESS_URL in Vercel once it is created and verified,
 * and the footer icon appears automatically. Left empty the icon stays hidden
 * rather than linking to a dead-end generic Maps search.
 */
export const GOOGLE_BUSINESS_URL = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || '';
