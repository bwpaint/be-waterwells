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
 * Google Business Profile.
 *
 * This is the CID form, built from the listing's Customer ID
 * (0xbb5e841471209963 = 13501373956235499875). It is the stable, permanent
 * link to the profile — unlike a copied Maps or search URL, which carries
 * session parameters (ei, ved, sxsrf, entry, g_ep) that expire.
 *
 * Override with NEXT_PUBLIC_GOOGLE_BUSINESS_URL if the listing ever moves.
 */
export const GOOGLE_BUSINESS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ||
  'https://maps.google.com/?cid=13501373956235499875';

/**
 * Warranty terms PDF, served from /public/docs. Always open in a new tab so a
 * visitor reading a service page does not lose their place.
 */
export const WARRANTY_PDF = '/docs/be-warranty-terms-2026.pdf';
