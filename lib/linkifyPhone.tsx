import React from 'react';

/**
 * Turns bare phone-number text into tappable tel: links.
 *
 * Why this exists: FAQ answers (and similar copy) are stored as plain strings
 * because those same strings are fed to JSON-LD schema, where raw HTML would be
 * invalid. So we keep the source string clean and only linkify at render time,
 * returning React nodes rather than using dangerouslySetInnerHTML.
 *
 * The pattern is anchored on the company's actual line (448-4447) rather than a
 * generic 10-digit matcher, so prices, depths, dates and measurements in the
 * surrounding copy can never be mistaken for a phone number.
 */
const PHONE_RE = /(\(281\)\s*448[-.\s]?4447|281[-.\s]448[-.\s]4447)/g;

const TEL_HREF = 'tel:+12814484447';

export function linkifyPhone(text: string): React.ReactNode {
  if (!text || !PHONE_RE.test(text)) return text;

  // reset because the regex is global and .test() advances lastIndex
  PHONE_RE.lastIndex = 0;

  const parts = text.split(PHONE_RE);
  return parts.map((part, i) =>
    PHONE_RE.test(part) ? (
      (PHONE_RE.lastIndex = 0),
      (
        <a key={i} href={TEL_HREF}>
          {part}
        </a>
      )
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
