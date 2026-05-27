// Shared SEO data for B-E Waterwell Services
// Address: 30815 Collier Smith Rd., Magnolia, TX 77354

export const BUSINESS = {
  name: 'B-E Waterwell Services',
  phone: '(281) 448-4447',
  phoneE164: '+12814484447',
  address: {
    street: '30815 Collier Smith Rd.',
    city: 'Magnolia',
    state: 'TX',
    zip: '77354',
    full: '30815 Collier Smith Rd., Magnolia, TX 77354',
  },
  founded: '1979',
  url: 'https://bewaterwells.com',
  serviceRadius: '60-mile radius of Houston, TX',
  counties: ['Harris County', 'Montgomery County', 'Waller County', 'Fort Bend County', 'Brazoria County', 'Galveston County', 'Liberty County', 'Chambers County'],
  cities: ['Houston', 'Magnolia', 'Tomball', 'Conroe', 'The Woodlands', 'Spring', 'Cypress', 'Humble', 'Kingwood', 'Waller', 'Pinehurst', 'Montgomery', 'Katy', 'Sugar Land', 'Baytown'],
} as const;

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://bewaterwells.com/#business',
  name: BUSINESS.name,
  description: 'Family-owned waterwell drilling, pump repair, and well service company serving the greater Houston area since 1979. Licensed by the Texas Department of Licensing and Regulation (TDLR).',
  url: BUSINESS.url,
  telephone: BUSINESS.phoneE164,
  foundingDate: BUSINESS.founded,
  priceRange: '$$',
  image: 'https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png',
  logo: 'https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2158,
    longitude: -95.7522,
  },
  areaServed: BUSINESS.counties.map(county => ({
    '@type': 'AdministrativeArea',
    name: county + ', Texas',
  })),
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
  ],
  sameAs: ['https://bewaterwells.com'],
};

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function buildServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    category: opts.category,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://bewaterwells.com/#business',
      name: BUSINESS.name,
      telephone: BUSINESS.phoneE164,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Magnolia',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 29.7604, longitude: -95.3698 },
      geoRadius: '96560',
    },
  };
}