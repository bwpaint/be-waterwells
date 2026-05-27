export const services = [
  {
    icon: 'drill',
    title: 'Waterwell Drilling',
    desc: 'Residential and commercial waterwell drilling using rotary rig technology. We drill to the Jasper and Evangeline Aquifers across 11 Houston service areas.',
    href: '/water-well-drilling',
  },
  {
    icon: 'pump',
    title: 'Pump Installation & Repair',
    desc: 'Submersible pump installation, motor replacement, and emergency repair. Franklin Electric certified. Most pump jobs completed same-day.',
    href: '/pump-installation',
  },
  {
    icon: 'rehab',
    title: 'Well Rehabilitation',
    desc: 'Restore aging wells to peak production with well shocking, acid treatment, and screen cleaning. Often a fraction of the cost of a new well.',
    href: '/well-rehabilitation',
  },
  {
    icon: 'irrigation',
    title: 'Irrigation Waterwells',
    desc: 'Dedicated irrigation waterwells keep your landscape alive without municipal water bills. We design and drill systems for residential and agricultural properties.',
    href: '/irrigation-wells',
  },
  {
    icon: 'inspect',
    title: 'Well Inspection & Diagnostics',
    desc: 'Pre-purchase inspections, pump performance tests, and water quality sampling. Written reports provided for real estate transactions.',
    href: '/well-inspection',
  },
  {
    icon: 'generator',
    title: 'Generator Prep Kits',
    desc: 'Keep your water flowing during power outages. We install generator transfer switches and prep kits for pump systems throughout Houston.',
    href: '/generator-prep',
  },
];

export const stats = [
  { value: '45+', label: 'Years in Business' },
  { value: '5,000+', label: 'Waterwells Drilled' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '11', label: 'Cities Served' },
];

export const cityAreas = [
  { city: 'Magnolia', slug: 'magnolia-tx', hq: true },
  { city: 'Conroe', slug: 'conroe-tx', hq: false },
  { city: 'Tomball', slug: 'tomball-tx', hq: false },
  { city: 'The Woodlands', slug: 'woodlands-tx', hq: false },
  { city: 'Spring', slug: 'spring-tx', hq: false },
  { city: 'Cypress', slug: 'cypress-tx', hq: false },
  { city: 'Humble', slug: 'humble-tx', hq: false },
  { city: 'Kingwood', slug: 'kingwood-tx', hq: false },
  { city: 'Montgomery', slug: 'montgomery-tx', hq: false },
  { city: 'Pinehurst', slug: 'pinehurst-tx', hq: false },
  { city: 'Waller', slug: 'waller-tx', hq: false },
];

export const partners = [
  { src: 'https://bewaterwells.com/wp-content/uploads/2024/08/franklin-electric.webp', alt: 'Franklin Electric' },
  { src: 'https://bewaterwells.com/wp-content/uploads/2024/08/water-pro-dealer.webp', alt: 'Water Pro Dealer' },
  { src: 'https://bewaterwells.com/wp-content/uploads/2024/08/tgwa.webp', alt: 'Texas Ground Water Association' },
  { src: 'https://bewaterwells.com/wp-content/uploads/2024/08/tdlr.webp', alt: 'TDLR Licensed' },
  { src: 'https://bewaterwells.com/wp-content/uploads/2024/08/simple-pump.webp', alt: 'Simple Pump' },
];

export const testimonials = [
  {
    name: 'Mike R.',
    location: 'Magnolia, TX',
    text: 'B-E drilled our new well last spring. On time, on budget, and the crew was professional from start to finish. Water came in clean at 285 feet.',
    stars: 5,
  },
  {
    name: 'Sandra K.',
    location: 'Tomball, TX',
    text: "Called at 9pm on a Sunday — no water at all. They had a tech out by midnight and the pump replaced by 2am. That kind of service is why we've used them for 15 years.",
    stars: 5,
  },
  {
    name: 'David M.',
    location: 'Conroe, TX',
    text: 'Pre-purchase inspection saved us from buying a property with a failing well. Thorough written report, fair price, and no upsell pressure.',
    stars: 5,
  },
];

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bewaterwells.com',
  name: 'B-E Waterwell Services',
  description: 'Houston area waterwell drilling, pump installation, and repair specialists since 1979.',
  url: 'https://bewaterwells.com',
  telephone: '+1-281-448-4447',
  email: 'info@bewaterwells.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Magnolia',
    addressRegion: 'TX',
    postalCode: '77354',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 30.2099, longitude: -95.7516 },
  openingHours: ['Mo-Fr 07:00-18:00'],
  image: 'https://bewaterwells.com/wp-content/uploads/2024/09/bewater2-1024x768.jpg',
  logo: 'https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png',
  foundingDate: '1979',
  areaServed: [
    'Magnolia, TX', 'Conroe, TX', 'Tomball, TX', 'The Woodlands, TX',
    'Spring, TX', 'Cypress, TX', 'Humble, TX', 'Kingwood, TX',
    'Montgomery, TX', 'Pinehurst, TX', 'Waller, TX',
  ],
  sameAs: ['https://www.facebook.com/bewaterwells'],
};

export const SERVICE_ICONS: Record<string, string> = {
  drill: '🔩',
  pump: '⚙️',
  rehab: '💧',
  irrigation: '🌿',
  inspect: '🔬',
  generator: '⚡',
};
