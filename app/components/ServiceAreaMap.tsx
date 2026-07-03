'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { COUNTIES, CITIES, MAP_VIEWBOX, GULF_LABEL } from '../../lib/serviceAreaGeo';
import styles from './ServiceAreaMap.module.css';

interface Tip {
  visible: boolean;
  x: number;
  y: number;
  city: string;
  county: string;
}

// county lookup for tooltip (city slug -> county name)
const CITY_COUNTY: Record<string, string> = {
  'magnolia-tx': 'Montgomery County', 'houston-tx': 'Harris County',
  'conroe-tx': 'Montgomery County', 'montgomery-tx': 'Montgomery County',
  'woodlands-tx': 'Montgomery County', 'pinehurst-tx': 'Montgomery County',
  'tomball-tx': 'Harris County', 'spring-tx': 'Harris County',
  'cypress-tx': 'Harris County', 'humble-tx': 'Harris County',
  'kingwood-tx': 'Harris County', 'hockley-tx': 'Harris County',
  'katy-tx': 'Fort Bend County', 'waller-tx': 'Waller County',
  'hempstead-tx': 'Waller County', 'anderson-tx': 'Grimes County',
  'navasota-tx': 'Grimes County', 'washington-tx': 'Washington County',
  'chappell-hill-tx': 'Washington County', 'brenham-tx': 'Washington County',
  'millican-tx': 'Brazos County', 'somerville-tx': 'Burleson County',
};

const vbW = Number(MAP_VIEWBOX.split(' ')[2]);

export default function ServiceAreaMap() {
  const router = useRouter();
  const [tip, setTip] = useState<Tip>({ visible: false, x: 0, y: 0, city: '', county: '' });
  const [hover, setHover] = useState<string | null>(null);

  const move = useCallback((e: React.MouseEvent, city: string, county: string) => {
    const svg = (e.currentTarget as SVGElement).closest('svg') as SVGSVGElement;
    const rect = svg.getBoundingClientRect();
    setTip({
      visible: true,
      x: e.clientX - rect.left + 14,
      y: e.clientY - rect.top - 8,
      city,
      county,
    });
  }, []);

  const leave = useCallback(() => {
    setTip((t) => ({ ...t, visible: false }));
    setHover(null);
  }, []);

  const go = useCallback((slug: string) => router.push(`/service-area/${slug}`), [router]);

  const pins = CITIES.filter((c) => !c.hq);
  const hq = CITIES.find((c) => c.hq);

  return (
    <div className={styles.mapWrap}>
      <svg
        viewBox={MAP_VIEWBOX}
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        role="img"
        aria-label="Greater Houston area waterwell service region map — prime and secondary service counties with city pins"
      >
        <defs>
          <linearGradient id="gulf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#191512" />
            <stop offset="70%" stopColor="#191512" />
            <stop offset="100%" stopColor="#22333a" />
          </linearGradient>
          <filter id="pinGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* background + subtle gulf water toward the SE */}
        <rect width={vbW} height={MAP_VIEWBOX.split(' ')[3]} rx="16" fill="url(#gulf)" />

        {/* title strip */}
        <rect width={vbW} height="42" rx="16" fill="#0f0c0a" />
        <text
          x={vbW / 2}
          y="27"
          textAnchor="middle"
          fill="#c4aa88"
          fontFamily="'Montserrat',sans-serif"
          fontSize="12"
          fontWeight="700"
          letterSpacing="3"
        >
          GREATER HOUSTON SERVICE REGION — B-E WATERWELL SERVICES
        </text>

        {/* counties */}
        {COUNTIES.map((c) => {
          const secondary = c.tier === 'secondary';
          const fill = c.hq
            ? 'rgba(217,95,10,0.16)'
            : secondary
            ? '#211d18'
            : '#2f2822';
          const stroke = c.hq ? '#d95f0a' : secondary ? '#574b3b' : '#8a7355';
          return (
            <path
              key={c.name}
              d={c.d}
              fill={fill}
              stroke={stroke}
              strokeWidth={c.hq ? 2 : 1.1}
              strokeLinejoin="round"
            />
          );
        })}

        {/* county labels */}
        {COUNTIES.map((c) => {
          const color = c.hq
            ? '#e0955a'
            : c.tier === 'secondary'
            ? '#544838'
            : c.name === 'Harris'
            ? '#a68a68'
            : '#7d6a50';
          return (
            <text
              key={`lbl-${c.name}`}
              x={c.lx}
              y={c.ly}
              textAnchor="middle"
              fill={color}
              fontFamily="'Montserrat',sans-serif"
              fontSize="11"
              fontWeight="700"
              letterSpacing="1"
              style={{ pointerEvents: 'none' }}
            >
              {c.name.toUpperCase()}
            </text>
          );
        })}

        {/* Gulf label */}
        <text
          x={GULF_LABEL.x}
          y={GULF_LABEL.y}
          textAnchor="middle"
          fill="rgba(150,190,205,0.35)"
          fontFamily="'Montserrat',sans-serif"
          fontSize="12"
          fontWeight="600"
          letterSpacing="3"
          style={{ pointerEvents: 'none' }}
        >
          GULF OF AMERICA
        </text>

        {/* city pins */}
        {pins.map((ct) => {
          const on = hover === ct.slug;
          const showLabel = ct.major || on;
          const leftSide = ct.x > vbW - 130;
          return (
            <g key={ct.slug}>
              <circle
                cx={ct.x}
                cy={ct.y}
                r={on ? 6 : 4}
                fill="#d95f0a"
                stroke="#191512"
                strokeWidth="0.8"
                filter={on ? 'url(#pinGlow)' : undefined}
                style={{ pointerEvents: 'none', transition: 'r 0.12s' }}
              />
              {showLabel && (
                <text
                  x={leftSide ? ct.x - 8 : ct.x + 8}
                  y={ct.y + 3.5}
                  textAnchor={leftSide ? 'end' : 'start'}
                  fill={on ? '#fff' : 'rgba(255,255,255,0.9)'}
                  fontFamily="'Montserrat',sans-serif"
                  fontSize="10.5"
                  fontWeight="600"
                  style={{ pointerEvents: 'none' }}
                >
                  {ct.name}
                </text>
              )}
              {/* invisible hit area */}
              <circle
                cx={ct.x}
                cy={ct.y}
                r="12"
                fill="transparent"
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                aria-label={`${ct.name}, TX — view service page`}
                onMouseEnter={() => setHover(ct.slug)}
                onMouseMove={(e) => move(e, ct.name, CITY_COUNTY[ct.slug] || '')}
                onMouseLeave={leave}
                onClick={() => go(ct.slug)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    go(ct.slug);
                  }
                }}
              />
            </g>
          );
        })}

        {/* HQ — Magnolia */}
        {hq && (
          <g>
            <circle cx={hq.x} cy={hq.y} r="12" fill="#d95f0a" opacity="0.28">
              <animate attributeName="r" values="10;18;10" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.32;0;0.32" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle
              cx={hq.x}
              cy={hq.y}
              r="7"
              fill="#d95f0a"
              filter="url(#pinGlow)"
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label="Magnolia, TX — headquarters — view service page"
              onMouseEnter={() => setHover(hq.slug)}
              onMouseMove={(e) => move(e, `${hq.name} · HQ`, CITY_COUNTY[hq.slug] || '')}
              onMouseLeave={leave}
              onClick={() => go(hq.slug)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  go(hq.slug);
                }
              }}
            />
            <text x={hq.x} y={hq.y + 3} textAnchor="middle" fill="#191512" fontSize="8" fontWeight="900" style={{ pointerEvents: 'none' }}>
              ★
            </text>
            <text
              x={hq.x}
              y={hq.y - 13}
              textAnchor="middle"
              fill="#ffb27a"
              fontFamily="'Montserrat',sans-serif"
              fontSize="10.5"
              fontWeight="800"
              style={{ pointerEvents: 'none' }}
            >
              Magnolia · HQ
            </text>
          </g>
        )}

        {/* legend */}
        <g fontFamily="'Montserrat',sans-serif" fontSize="12" fill="#c4aa88">
          <rect x="26" y={Number(MAP_VIEWBOX.split(' ')[3]) - 40} width="18" height="13" rx="2" fill="#2f2822" stroke="#8a7355" />
          <text x="52" y={Number(MAP_VIEWBOX.split(' ')[3]) - 30}>Prime service county</text>
          <rect x="230" y={Number(MAP_VIEWBOX.split(' ')[3]) - 40} width="18" height="13" rx="2" fill="#211d18" stroke="#574b3b" />
          <text x="256" y={Number(MAP_VIEWBOX.split(' ')[3]) - 30}>Secondary (coastal) county</text>
          <circle cx="500" cy={Number(MAP_VIEWBOX.split(' ')[3]) - 33} r="6" fill="#d95f0a" />
          <text x="500" y={Number(MAP_VIEWBOX.split(' ')[3]) - 30} textAnchor="middle" fill="#191512" fontSize="8" fontWeight="900">★</text>
          <text x="514" y={Number(MAP_VIEWBOX.split(' ')[3]) - 30}>HQ</text>
          <circle cx="576" cy={Number(MAP_VIEWBOX.split(' ')[3]) - 33} r="4" fill="#d95f0a" />
          <text x="588" y={Number(MAP_VIEWBOX.split(' ')[3]) - 30}>Service city (click a pin for its page)</text>
        </g>
      </svg>

      {tip.visible && (
        <div className={styles.tooltip} style={{ left: tip.x, top: tip.y }}>
          <strong>{tip.city}, TX</strong>
          {tip.county && <span>{tip.county}</span>}
          <span className={styles.tooltipCta}>Click to view service page →</span>
        </div>
      )}

      <p className={styles.mapHint}>
        💡 Hover a pin for the city, click to open its waterwell service page
      </p>
    </div>
  );
}
