import React from 'react';

/**
 * Monotone line-icon set.
 *
 * Replaces the emoji that were previously used as UI icons. Emoji carry
 * baked-in colors that CSS cannot override (the phone emoji renders red on
 * every platform), they render differently on Windows vs macOS vs Android,
 * and screen readers announce them by their Unicode name. These are plain
 * SVG strokes using `currentColor`, so they inherit whatever color the
 * surrounding text has and can be restyled from one place.
 *
 * Usage:  <Icon name="pump" />            // default 40px
 *         <Icon name="phone" size={18} /> // inline with text
 */

export type IconName =
  | 'star' | 'flask' | 'gear' | 'bolt' | 'check' | 'checkCircle'
  | 'wave' | 'sprout' | 'leaf' | 'leafFall' | 'graduation' | 'trophy'
  | 'crane' | 'buildings' | 'home' | 'house' | 'bank'
  | 'livestock' | 'horse' | 'bulb' | 'droplet' | 'wind' | 'money'
  | 'calendar' | 'trendUp' | 'trendDown' | 'chart' | 'clipboard'
  | 'mapPin' | 'ruler' | 'phone' | 'package' | 'cycle' | 'battery'
  | 'plug' | 'search' | 'lock' | 'wrench' | 'drill' | 'microscope'
  | 'clock' | 'truck' | 'ban' | 'shower' | 'tools' | 'testTube'
  | 'screwdriver' | 'pump' | 'irrigation' | 'rehab' | 'inspect' | 'mail'
  | 'tornado' | 'stopwatch';

const P: Record<IconName, React.ReactNode> = {
  star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  flask: <><path d="M9 2v6L4.5 17.5A2 2 0 0 0 6.3 20.5h11.4a2 2 0 0 0 1.8-3L15 8V2" /><path d="M8 2h8" /><path d="M7 15h10" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
  bolt: <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />,
  check: <polyline points="20 6 9 17 4 12" />,
  checkCircle: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
  wave: <><path d="M2 8c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" /><path d="M2 14c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" /></>,
  sprout: <><path d="M12 22V10" /><path d="M12 10C12 6 9 3 5 3c0 4 3 7 7 7z" /><path d="M12 14c0-3 2.5-5.5 5.5-5.5C17.5 11.5 15 14 12 14z" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-10 0 8-3 16-9 17z" /><path d="M4 21c3-3 6-6 9-9" /></>,
  leafFall: <><path d="M12 2c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10z" /><path d="M12 12v10" /></>,
  graduation: <><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></>,
  trophy: <><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v6a5 5 0 0 1-10 0V4z" /><path d="M17 5h3a3 3 0 0 1-3 4" /><path d="M7 5H4a3 3 0 0 0 3 4" /></>,
  crane: <><path d="M4 21V4l14 3" /><path d="M4 8h14" /><path d="M12 8v5" /><path d="M9 13h6l-3 4z" /><path d="M2 21h20" /></>,
  buildings: <><rect x="3" y="8" width="7" height="13" /><rect x="14" y="3" width="7" height="18" /><path d="M6 12h1M6 16h1M17 7h1M17 11h1M17 15h1" /></>,
  home: <><path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 13 15 13 15 22" /></>,
  house: <><path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22v-6h6v6" /><path d="M2 22h20" /></>,
  bank: <><path d="M3 9l9-6 9 6" /><path d="M4 9v10M20 9v10M8 12v5M12 12v5M16 12v5" /><path d="M2 21h20" /></>,
  livestock: <><path d="M4 9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z" /><path d="M4 9L2 5M20 9l2-4" /><circle cx="9.5" cy="11.5" r=".6" /><circle cx="14.5" cy="11.5" r=".6" /></>,
  horse: <><path d="M4 20c0-5 3-8 7-8h3l4-4V5l3 2-1 4-3 3v6" /><path d="M4 20h5v-4" /><path d="M14 8l2-3" /></>,
  bulb: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></>,
  droplet: <path d="M12 2.7l5.2 6.4a7 7 0 1 1-10.4 0L12 2.7z" />,
  wind: <><path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 13h15a3 3 0 1 1-3 3" /><path d="M3 18h7" /></>,
  money: <><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M6 12h.01M18 12h.01" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
  trendUp: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>,
  trendDown: <><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></>,
  chart: <><path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="7" /><rect x="12" y="7" width="3" height="11" /><rect x="17" y="13" width="3" height="5" /></>,
  clipboard: <><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12h6M9 16h4" /></>,
  mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  ruler: <><rect x="2" y="8" width="20" height="8" rx="1" /><path d="M6 8v4M10 8v3M14 8v4M18 8v3" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  package: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.3 7 12 12 20.7 7" /><path d="M12 22V12" /></>,
  cycle: <><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>,
  battery: <><rect x="1" y="7" width="18" height="10" rx="2" /><path d="M23 11v2" /><path d="M5 11v2M9 11v2M13 11v2" /></>,
  plug: <><path d="M9 2v6M15 2v6" /><path d="M6 8h12v3a6 6 0 0 1-12 0z" /><path d="M12 17v5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></>,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 1 5.3 5.3l-1.6-1.6-2.2.6-.6-2.2zM14.7 6.3L4.5 16.5a2.1 2.1 0 0 0 3 3l10.2-10.2" />,
  drill: <><path d="M12 21V7" /><path d="M12 7L7 3M12 7l5-4" /><path d="M6 21h12" /><path d="M9.5 13h5" /></>,
  microscope: <><path d="M6 20h12" /><path d="M9 20v-3a5 5 0 0 1 5-5" /><path d="M12 12V5a2 2 0 0 1 4 0v7" /><path d="M10 5h6" /><path d="M5 16h4" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  truck: <><rect x="1" y="6" width="13" height="10" rx="1" /><path d="M14 9h4l3 3v4h-7z" /><circle cx="6" cy="18.5" r="2" /><circle cx="18" cy="18.5" r="2" /></>,
  ban: <><circle cx="12" cy="12" r="10" /><path d="M4.9 4.9l14.2 14.2" /></>,
  shower: <><path d="M4 20V8a4 4 0 0 1 8 0" /><path d="M9 8h11" /><path d="M14 12v.01M17 12v.01M14 16v.01M17 16v.01M20 12v.01M20 16v.01" /></>,
  tools: <><path d="M14.7 6.3a4 4 0 0 1 5.3 5.3l-1.6-1.6-2.2.6-.6-2.2z" /><path d="M14.7 6.3L4.5 16.5a2.1 2.1 0 0 0 3 3l10.2-10.2" /><path d="M4 4l4 4" /></>,
  testTube: <><path d="M9 2h6" /><path d="M10 2v16a3 3 0 0 0 6 0V2" /><path d="M10 13h6" /></>,
  screwdriver: <><path d="M15 3l6 6-3 3-6-6z" /><path d="M12 6L4 14v6h6l8-8" /></>,
  // Domain aliases used by the services grid
  pump: <><rect x="4" y="10" width="10" height="9" rx="1" /><path d="M14 14h4a2 2 0 0 0 2-2V6" /><path d="M9 10V6h5" /><path d="M2 19h20" /></>,
  irrigation: <><path d="M3 20h18" /><path d="M12 20V9" /><path d="M12 9a4 4 0 0 1 8 0" /><path d="M12 9a4 4 0 0 0-8 0" /><path d="M7 14v.01M17 14v.01" /></>,
  rehab: <><path d="M12 21V8" /><path d="M8 21h8" /><path d="M12 8a4 4 0 1 0-4-4" /><polyline points="16 6 20 6 20 2" /></>,
  inspect: <><circle cx="11" cy="11" r="6" /><path d="M21 21l-4-4" /><path d="M11 8v6M8 11h6" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,7 12,14 2,7" /></>,
  tornado: <><path d="M3 4h18" /><path d="M5 8h14" /><path d="M7 12h10" /><path d="M9.5 16h5" /><path d="M11 20h2" /></>,
  stopwatch: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5" /><path d="M9 2h6" /><path d="M12 2v3" /><path d="M18.5 6.5l1.5-1.5" /></>,
};

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ name, size = 40, className, strokeWidth = 1.6 }: IconProps) {
  const path = P[name];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      /* Several glyphs draw right on the 0 0 24 24 boundary — the rehab arc is a
         circle centred at (12,4) with r=4, so its top edge sits exactly at y=0.
         With a 1.6 stroke, half the line falls outside the viewBox and SVG clips
         it flat. overflow: visible lets those strokes render in full. */
      style={{ overflow: 'visible' }}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}

/** Maps the emoji previously used in content data to icon names. */
export const EMOJI_TO_ICON: Record<string, IconName> = {
  '★': 'star', '⚗️': 'flask', '⚗': 'flask', '⚙️': 'gear', '⚙': 'gear',
  '⚡': 'bolt', '✅': 'checkCircle', '✓': 'check', '🌊': 'wave',
  '🌱': 'sprout', '🌿': 'leaf', '🍂': 'leafFall', '🎓': 'graduation',
  '🏆': 'trophy', '🏗️': 'crane', '🏗': 'crane', '🏘️': 'buildings', '🏘': 'buildings',
  '🏠': 'home', '🏡': 'house', '🏦': 'bank', '🐄': 'livestock',
  '🐎': 'horse', '🐴': 'horse', '💡': 'bulb', '💧': 'droplet',
  '💨': 'wind', '💸': 'money', '📅': 'calendar', '📈': 'trendUp',
  '📉': 'trendDown', '📊': 'chart', '📋': 'clipboard', '📍': 'mapPin',
  '📏': 'ruler', '📞': 'phone', '📦': 'package', '🔄': 'cycle',
  '🔋': 'battery', '🔌': 'plug', '🔍': 'search', '🔒': 'lock',
  '🔧': 'wrench', '🔩': 'drill', '🔬': 'microscope', '🕐': 'clock',
  '🗓️': 'calendar', '🗓': 'calendar', '🚚': 'truck', '🚫': 'ban',
  '🚿': 'shower', '🛠️': 'tools', '🛠': 'tools', '🧪': 'testTube',
  '🪛': 'screwdriver',
};
