'use client';

import { useState } from 'react';

interface Inputs {
  wellType: string;
  depth: number;
  bathrooms: string;
  distance: string;
  access: string;
  filtration: boolean;
  generatorPrep: boolean;
}

function calcRange(inputs: Inputs): [number, number] {
  const { wellType, depth, bathrooms, distance, access, filtration, generatorPrep } = inputs;

  // Base drilling cost per foot (Houston area 2026)
  const rateMap: Record<string, number> = { residential: 42, irrigation: 50, commercial: 58 };
  const rate = rateMap[wellType] ?? 42;
  const drillingLow = depth * rate * 0.85;
  const drillingHigh = depth * rate * 1.15;

  // Pump cost by HP (derived from bathrooms)
  const pumpMap: Record<string, [number, number]> = {
    '1-2': [500, 900], '3-4': [700, 1400], '5+': [1100, 2000],
  };
  const [pumpLow, pumpHigh] = pumpMap[bathrooms] ?? [700, 1400];

  // Pressure tank
  const tankLow = 350, tankHigh = 600;

  // Casing / materials (estimate)
  const casingLow = depth * 7, casingHigh = depth * 12;

  // Distance surcharge
  const distMap: Record<string, [number, number]> = {
    'under50': [0, 0], '50-150': [1500, 4000], '150plus': [4000, 8000],
  };
  const [distLow, distHigh] = distMap[distance] ?? [0, 0];

  // Access modifier
  const accessMod: Record<string, number> = { easy: 1.0, medium: 1.175, difficult: 1.325 };
  const mod = accessMod[access] ?? 1.0;

  // Base permits + labor
  const permitsLow = 300, permitsHigh = 600;
  const laborLow = 1500, laborHigh = 2500;

  // Add-ons
  const filtLow = filtration ? 800 : 0;
  const filtHigh = filtration ? 1800 : 0;
  const genLow = generatorPrep ? 600 : 0;
  const genHigh = generatorPrep ? 1200 : 0;

  const totalLow = Math.round(((drillingLow + pumpLow + tankLow + casingLow + permitsLow + laborLow) * mod + distLow + filtLow + genLow) / 100) * 100;
  const totalHigh = Math.round(((drillingHigh + pumpHigh + tankHigh + casingHigh + permitsHigh + laborHigh) * mod + distHigh + filtHigh + genHigh) / 100) * 100;

  return [Math.max(totalLow, 5000), totalHigh];
}

const fmt = (n: number) => '$' + n.toLocaleString();

export default function CostEstimator() {
  const [inputs, setInputs] = useState<Inputs>({
    wellType: 'residential',
    depth: 200,
    bathrooms: '3-4',
    distance: 'under50',
    access: 'easy',
    filtration: false,
    generatorPrep: false,
  });
  const [showResult, setShowResult] = useState(false);

  const set = (key: keyof Inputs, value: string | number | boolean) =>
    setInputs(prev => ({ ...prev, [key]: value }));

  const [low, high] = calcRange(inputs);

  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--light-stone)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ background: 'var(--charcoal)', padding: '20px 24px' }}>
        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--white)', marginBottom: '4px' }}>
          Houston Area Waterwell Cost Estimator
        </div>
        <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
          Adjust the options below for an instant price range estimate.
        </div>
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Well type */}
        <div>
          <label style={labelSt}>Well Type</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginTop: '6px' }}>
            {[['residential','Residential'], ['irrigation','Irrigation'], ['commercial','Commercial']].map(([val, label]) => (
              <button key={val} onClick={() => set('wellType', val)}
                style={{ ...optBtn, background: inputs.wellType === val ? 'var(--orange)' : 'var(--off-white)', color: inputs.wellType === val ? 'var(--white)' : 'var(--dark-stone)', border: `1px solid ${inputs.wellType === val ? 'var(--orange)' : 'var(--light-stone)'}` }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Depth slider */}
        <div>
          <label style={labelSt}>Estimated Well Depth: <strong style={{ color: 'var(--orange)' }}>{inputs.depth} ft</strong></label>
          <p style={{ fontSize: '0.75rem', color: 'var(--dark-stone)', margin: '4px 0 8px' }}>
            Houston area typical: 150–300 ft · Montgomery Co: 100–250 ft · Harris Co: 80–200 ft
          </p>
          <input type="range" min={100} max={400} step={25} value={inputs.depth}
            onChange={e => set('depth', +e.target.value)}
            style={{ width: '100%', accentColor: 'var(--orange)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--dark-stone)' }}>
            <span>100 ft</span><span>250 ft</span><span>400 ft</span>
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <label style={labelSt}>Household Size (bathrooms)</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginTop: '6px' }}>
            {[['1-2','1–2 Bath'], ['3-4','3–4 Bath'], ['5+','5+ Bath']].map(([val, label]) => (
              <button key={val} onClick={() => set('bathrooms', val)}
                style={{ ...optBtn, background: inputs.bathrooms === val ? 'var(--orange)' : 'var(--off-white)', color: inputs.bathrooms === val ? 'var(--white)' : 'var(--dark-stone)', border: `1px solid ${inputs.bathrooms === val ? 'var(--orange)' : 'var(--light-stone)'}` }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Distance */}
        <div>
          <label style={labelSt}>Distance from House to Drill Site</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
            {[['under50','Under 50 ft (no surcharge)'], ['50-150','50–150 ft (+$1,500–$4,000)'], ['150plus','Over 150 ft (+$4,000–$8,000)']].map(([val, label]) => (
              <label key={val} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.88rem', color: 'var(--dark-stone)', cursor: 'pointer' }}>
                <input type="radio" name="distance" value={val} checked={inputs.distance === val} onChange={() => set('distance', val)} style={{ accentColor: 'var(--orange)' }} />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Site access */}
        <div>
          <label style={labelSt}>Site Accessibility</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginTop: '6px' }}>
            {[['easy','Easy'], ['medium','Medium'], ['difficult','Difficult']].map(([val, label]) => (
              <button key={val} onClick={() => set('access', val)}
                style={{ ...optBtn, background: inputs.access === val ? 'var(--orange)' : 'var(--off-white)', color: inputs.access === val ? 'var(--white)' : 'var(--dark-stone)', border: `1px solid ${inputs.access === val ? 'var(--orange)' : 'var(--light-stone)'}` }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <label style={labelSt}>Add-Ons</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
            {([['filtration','Water Filtration System (+$800–$1,800)','filtration'],['generatorPrep','Generator Prep Kit (+$600–$1,200)','generatorPrep']] as [string,string,keyof Inputs][]).map(([key,label]) => (
              <label key={key} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.88rem', color: 'var(--dark-stone)', cursor: 'pointer' }}>
                <input type="checkbox" checked={inputs[key as keyof Inputs] as boolean} onChange={e => set(key as keyof Inputs, e.target.checked)} style={{ accentColor: 'var(--orange)', width: '16px', height: '16px' }} />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Result */}
        <div style={{ background: 'var(--charcoal)', borderRadius: '10px', padding: '20px 24px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
            Estimated Project Range
          </div>
          <div style={{ fontFamily: 'var(--font-head)', fontWeight: 900, fontSize: '2rem', color: 'var(--orange)', marginBottom: '2px' }}>
            {fmt(low)} – {fmt(high)}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
            Houston area estimate · 2026 pricing · Includes drilling, pump, tank, permits & labor
          </div>
          <a href="tel:+12814484447" style={{ display: 'inline-block', background: 'var(--orange)', color: 'var(--white)', fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none' }}>
            Call for a Free On-Site Quote: (281) 448-4447
          </a>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: '10px' }}>
            This estimate is for budgeting only. Actual pricing depends on site conditions, current material costs, and county-specific permit fees. B-E Waterwell provides a written quote before any work begins.
          </div>
        </div>
      </div>
    </div>
  );
}

const labelSt: React.CSSProperties = {
  fontFamily: 'var(--font-head)',
  fontWeight: 700,
  fontSize: '0.75rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--dark-stone)',
};

const optBtn: React.CSSProperties = {
  fontFamily: 'var(--font-head)',
  fontWeight: 700,
  fontSize: '0.78rem',
  letterSpacing: '0.04em',
  padding: '10px 8px',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.15s',
};
