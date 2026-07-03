import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'B-E Waterwell Services — Houston-Area Water Well Drilling & Service Since 1979';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1a1410 0%, #3a2c1a 55%, #533B22 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#d95f0a',
          }}
        >
          Since 1979 · TDLR Licensed · Houston, TX
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 82,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          B-E Waterwell Services
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 38,
            color: 'rgba(255,255,255,0.82)',
            marginTop: 24,
          }}
        >
          Water Well Drilling, Pump Repair &amp; Well Service
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 44,
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              display: 'flex',
              background: '#d95f0a',
              color: '#ffffff',
              padding: '12px 28px',
              borderRadius: 12,
            }}
          >
            (281) 448-4447
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
