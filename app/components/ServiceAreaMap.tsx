'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ServiceAreaMap.module.css';

interface Region {
  id: string;
  city: string;
  county: string;
  slug: string;
  desc: string;
  points: string;
  isHQ?: boolean;
  hqX?: number;
  hqY?: number;
}

const regions: Region[] = [
  {
    id: 'montgomery',
    city: 'Montgomery',
    county: 'Montgomery County',
    slug: 'montgomery-tx',
    desc: 'Rural acreage & agricultural waterwells',
    points: '40,35 258,35 258,148 40,148',
  },
  {
    id: 'conroe',
    city: 'Conroe',
    county: 'Montgomery County',
    slug: 'conroe-tx',
    desc: 'County seat · Lake Conroe corridor',
    points: '262,35 546,35 546,148 262,148',
  },
  {
    id: 'kingwood',
    city: 'Kingwood',
    county: 'Harris County',
    slug: 'kingwood-tx',
    desc: 'The Livable Forest · Lake Houston area',
    points: '550,35 820,35 820,302 668,302 668,152 550,148',
  },
  {
    id: 'magnolia',
    city: 'Magnolia',
    county: 'Montgomery County',
    slug: 'magnolia-tx',
    desc: 'Our home base since 1979',
    points: '40,152 258,152 258,302 40,302',
    isHQ: true,
    hqX: 149,
    hqY: 227,
  },
  {
    id: 'pinehurst',
    city: 'Pinehurst',
    county: 'Montgomery County',
    slug: 'pinehurst-tx',
    desc: 'Central Montgomery County',
    points: '262,152 400,152 400,302 262,302',
  },
  {
    id: 'woodlands',
    city: 'The Woodlands',
    county: 'Montgomery County',
    slug: 'woodlands-tx',
    desc: 'Estate areas & acreage tracts',
    points: '404,152 546,152 546,302 404,302',
  },
  {
    id: 'spring',
    city: 'Spring',
    county: 'Harris County',
    slug: 'spring-tx',
    desc: 'North Harris County crossroads',
    points: '550,152 664,152 664,416 550,416',
  },
  {
    id: 'humble',
    city: 'Humble',
    county: 'Harris County',
    slug: 'humble-tx',
    desc: 'East Harris County · Lake Houston',
    points: '668,306 820,306 820,510 668,510',
  },
  {
    id: 'waller',
    city: 'Waller',
    county: 'Waller County',
    slug: 'waller-tx',
    desc: 'Wide-open Waller County ranches & farms',
    points: '40,306 162,306 162,416 40,416',
  },
  {
    id: 'tomball',
    city: 'Tomball',
    county: 'Harris County',
    slug: 'tomball-tx',
    desc: 'Northwest Houston · Harris County',
    points: '166,306 546,306 546,416 166,416',
  },
  {
    id: 'cypress',
    city: 'Cypress',
    county: 'Harris County',
    slug: 'cypress-tx',
    desc: 'NW Harris County · Irrigation specialists',
    points: '40,420 664,420 664,510 40,510',
  },
];

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  city: string;
  county: string;
  desc: string;
}

export default function ServiceAreaMap() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false, x: 0, y: 0, city: '', county: '', desc: '',
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGElement>, region: Region) => {
    const rect = (e.currentTarget.closest('svg') as SVGSVGElement).getBoundingClientRect();
    setTooltip({
      visible: true,
      x: e.clientX - rect.left + 12,
      y: e.clientY - rect.top - 10,
      city: region.city,
      county: region.county,
      desc: region.desc,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip((t) => ({ ...t, visible: false }));
    setActive(null);
  }, []);

  const handleClick = useCallback(
    (slug: string) => {
      router.push(`/service-area/${slug}`);
    },
    [router]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, slug: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        router.push(`/service-area/${slug}`);
      }
    },
    [router]
  );

  return (
    <div className={styles.mapWrap}>
      <svg
        viewBox="0 0 860 550"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        role="img"
        aria-label="North Houston waterwell service area map"
      >
        {/* Background */}
        <rect width="860" height="550" fill="#1a1714" rx="12" />

        {/* Subtle grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="860" height="550" fill="url(#grid)" rx="12" />

        {/* Header strip */}
        <rect width="860" height="28" fill="rgba(26,23,20,0.9)" />
        <text x="430" y="18" textAnchor="middle" fill="rgba(255,255,255,0.5)"
          fontFamily="'Montserrat',sans-serif" fontSize="9" fontWeight="700" letterSpacing="3">
          NORTH HOUSTON SERVICE AREA — B-E WATERWELL SERVICES
        </text>

        {/* Region polygons */}
        {regions.map((r) => (
          <g key={r.id}>
            <polygon
              points={r.points}
              fill={
                active === r.id
                  ? 'rgba(217,95,10,0.55)'
                  : r.isHQ
                  ? 'rgba(217,95,10,0.22)'
                  : 'rgba(74,67,60,0.5)'
              }
              stroke={
                active === r.id
                  ? '#d95f0a'
                  : r.isHQ
                  ? 'rgba(217,95,10,0.8)'
                  : 'rgba(196,170,136,0.3)'
              }
              strokeWidth={active === r.id || r.isHQ ? '2' : '1'}
              style={{ cursor: 'pointer', transition: 'fill 0.2s, stroke 0.2s' }}
              tabIndex={0}
              role="button"
              aria-label={`${r.city}, ${r.county} — click to view service page`}
              onMouseEnter={() => setActive(r.id)}
              onMouseMove={(e) => handleMouseMove(e, r)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(r.slug)}
              onKeyDown={(e) => handleKeyDown(e, r.slug)}
            />
            {/* City label */}
            {(() => {
              const pts = r.points.split(' ').map((p) => p.split(',').map(Number));
              const xs = pts.map((p) => p[0]);
              const ys = pts.map((p) => p[1]);
              const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
              const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
              return (
                <g style={{ pointerEvents: 'none' }}>
                  <text
                    x={cx} y={cy - 5}
                    textAnchor="middle"
                    fill={active === r.id ? '#fff' : r.isHQ ? '#d95f0a' : 'rgba(255,255,255,0.85)'}
                    fontFamily="'Montserrat',sans-serif"
                    fontSize={r.isHQ ? '11' : '10'}
                    fontWeight={r.isHQ ? '800' : '700'}
                    filter={active === r.id ? 'url(#glow)' : undefined}
                  >
                    {r.city}
                  </text>
                  {r.isHQ && (
                    <text
                      x={cx} y={cy + 11}
                      textAnchor="middle"
                      fill="rgba(217,95,10,0.9)"
                      fontFamily="'Montserrat',sans-serif"
                      fontSize="8"
                      fontWeight="700"
                      letterSpacing="1"
                    >
                      ★ HQ
                    </text>
                  )}
                </g>
              );
            })()}
          </g>
        ))}

        {/* HQ pulse rings on Magnolia */}
        <circle cx="149" cy="227" r="6" fill="#d95f0a" opacity="0.9">
          <animate attributeName="r" values="6;14;6" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0;0.9" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="149" cy="227" r="5" fill="#d95f0a" />

        {/* County labels */}
        <text x="150" y="525" textAnchor="middle" fill="rgba(255,255,255,0.2)"
          fontFamily="'Montserrat',sans-serif" fontSize="8" fontWeight="600" letterSpacing="2">
          WALLER CO.
        </text>
        <text x="300" y="525" textAnchor="middle" fill="rgba(255,255,255,0.2)"
          fontFamily="'Montserrat',sans-serif" fontSize="8" fontWeight="600" letterSpacing="2">
          MONTGOMERY CO.
        </text>
        <text x="600" y="525" textAnchor="middle" fill="rgba(255,255,255,0.2)"
          fontFamily="'Montserrat',sans-serif" fontSize="8" fontWeight="600" letterSpacing="2">
          HARRIS CO.
        </text>
      </svg>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className={styles.tooltip}
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <strong>{tooltip.city}, TX</strong>
          <span>{tooltip.county}</span>
          <em>{tooltip.desc}</em>
          <span className={styles.tooltipCta}>Click to view service page →</span>
        </div>
      )}

      <p className={styles.mapHint}>
        💡 Click any region to view that city&apos;s waterwell service page
      </p>
    </div>
  );
}
