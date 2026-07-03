export const services = [
  {
    icon: 'drill',
    title: 'Water Well Drilling & Installation',
    desc: 'New residential and commercial waterwell drilling and complete installation using rotary rig technology across the greater Houston area.',
    href: '/services/water-well-drilling',
  },
  {
    icon: 'pump',
    title: 'Residential Water Well Services',
    desc: 'Pump repair and replacement, pressure tanks, constant pressure systems, and generator prep for homeowners. Franklin Electric authorized dealer.',
    href: '/services/residential',
  },
  {
    icon: 'irrigation',
    title: 'Commercial & Agricultural',
    desc: 'High-capacity wells for ranches, farms, equestrian properties, nurseries, and commercial sites — larger casing, higher-horsepower pumps, and high-capacity permits handled.',
    href: '/services/commercial',
  },
  {
    icon: 'rehab',
    title: 'Water Well Rehabilitation',
    desc: 'Restore aging wells to peak production with well shocking, acid treatment, and screen cleaning — often a fraction of the cost of a new well.',
    href: '/services/well-rehabilitation',
  },
  {
    icon: 'inspect',
    title: 'Maintenance & Inspection',
    desc: 'Annual maintenance, real-estate and FHA/VA well inspections, and ongoing care to extend the life of your well and protect water quality.',
    href: '/services/well-maintenance',
  },
];

export const stats = [
  { value: '45+', label: 'Years in Business' },
  { value: '5,000+', label: 'Wells Serviced' },
  { value: '1,000+', label: 'Satisfied Customers' },
];

export const cityAreas = [
  { city: 'Magnolia', slug: 'magnolia-tx', hq: true },
  { city: 'Houston', slug: 'houston-tx', hq: false },
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
  { city: 'Anderson', slug: 'anderson-tx', hq: false },
  { city: 'Navasota', slug: 'navasota-tx', hq: false },
  { city: 'Hockley', slug: 'hockley-tx', hq: false },
  { city: 'Hempstead', slug: 'hempstead-tx', hq: false },
  { city: 'Washington', slug: 'washington-tx', hq: false },
  { city: 'Chappell Hill', slug: 'chappell-hill-tx', hq: false },
  { city: 'Millican', slug: 'millican-tx', hq: false },
  { city: 'Katy', slug: 'katy-tx', hq: false },
  { city: 'Somerville', slug: 'somerville-tx', hq: false },
  { city: 'Brenham', slug: 'brenham-tx', hq: false },
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
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://bewaterwells.com/#business',
  name: 'B-E Waterwell Services',
  description: 'Family-owned waterwell drilling, pump repair, and well service company serving the greater Houston area since 1979. Licensed by the Texas Department of Licensing and Regulation (TDLR).',
  url: 'https://bewaterwells.com',
  telephone: '+12814484447',
  email: 'info@bewaterwells.com',
  foundingDate: '1979',
  priceRange: '$$',
  image: 'https://bewaterwells.com/wp-content/uploads/2024/09/bewater2-1024x768.jpg',
  logo: 'https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30815 Collier Smith Rd.',
    addressLocality: 'Magnolia',
    addressRegion: 'TX',
    postalCode: '77354',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 30.2158, longitude: -95.7522 },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '64',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Harris County, Texas' },
    { '@type': 'AdministrativeArea', name: 'Montgomery County, Texas' },
    { '@type': 'AdministrativeArea', name: 'Waller County, Texas' },
    { '@type': 'AdministrativeArea', name: 'Fort Bend County, Texas' },
    { '@type': 'AdministrativeArea', name: 'Brazoria County, Texas' },
    { '@type': 'AdministrativeArea', name: 'Liberty County, Texas' },
  ],
  sameAs: ['https://www.facebook.com/bewaterwells'],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://bewaterwells.com/#organization',
  name: 'B-E Waterwell Services',
  url: 'https://bewaterwells.com',
  logo: 'https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png',
  sameAs: ['https://www.facebook.com/bewaterwells'],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://bewaterwells.com/#website',
  name: 'B-E Waterwell Services',
  url: 'https://bewaterwells.com',
  publisher: { '@id': 'https://bewaterwells.com/#organization' },
};

export const homeFaqs = [
  {
    question: 'How much does waterwell drilling cost in Houston?',
    answer: 'Pricing depends on your location, well depth, static water level, and equipment selection — call us to discuss your project. B-E Waterwell Services provides written estimates. Call (281) 448-4447.',
  },
  {
    question: 'Does B-E Waterwell Services serve my area near Houston?',
    answer: 'B-E Waterwell Services serves the greater Houston metro area — roughly a 60-mile radius. We regularly work in Magnolia, Tomball, Conroe, The Woodlands, Spring, Cypress, Humble, Kingwood, Katy, Waller, Montgomery, Pinehurst, Sugar Land, and Baytown. If you\'re not sure whether we cover your area, call (281) 448-4447 and we\'ll confirm.',
  },
  {
    question: 'How long does it take to drill a new waterwell?',
    answer: 'Most residential waterwell projects in Houston take 1–3 days from drilling through pump installation and hookup. Permitting through the Texas Department of Licensing and Regulation (TDLR) typically takes 3–5 business days before drilling can begin. We handle all permits for you.',
  },
  {
    question: 'Is B-E Waterwell Services licensed in Texas?',
    answer: 'Yes. B-E Waterwell Services is licensed by the Texas Department of Licensing and Regulation (TDLR) as a water well driller and pump installer. We have operated in the greater Houston area since 1979 and have serviced more than 5,000 wells across Montgomery, Harris, Waller, and surrounding counties.',
  },
];

export const SERVICE_ICONS: Record<string, string> = {
  drill: '🔩',
  pump: '⚙️',
  rehab: '💧',
  irrigation: '🌿',
  inspect: '🔬',
  generator: '⚡',
};
