export interface CityData {
  slug: string;
  city: string;
  state: string;
  county: string;
  isHQ?: boolean;
  tagline: string;
  heroSubtitle: string;
  metaDescription: string;
  intro: string;
  aquiferDepth: string;
  nearbyAreas: { city: string; slug: string; distance: string }[];
  faqs: { question: string; answer: string }[];
}

export const cities: CityData[] = [
  {
    slug: 'magnolia-tx',
    city: 'Magnolia',
    state: 'TX',
    county: 'Montgomery County',
    isHQ: true,
    tagline: 'Our Home Base — Serving Magnolia Since 1979',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — Magnolia, TX water well drilling, pump repair, and well rehabilitation. Our home base since 1979. Licensed TDLR contractor. Call (281) 448-4447.',
    intro:
      'Magnolia, TX is home base for B-E Waterwell Services. We have been drilling water wells and servicing pumps in this community for over 45 years — longer than most of the subdivisions out here have existed. The sandy loam soils and Jasper Aquifer make for reliable wells when drilled right, and we know every foot of this ground.',
    aquiferDepth: '180–320 ft',
    nearbyAreas: [
      { city: 'Tomball', slug: 'tomball-tx', distance: '14 mi' },
      { city: 'Conroe', slug: 'conroe-tx', distance: '18 mi' },
      { city: 'Pinehurst', slug: 'pinehurst-tx', distance: '8 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '20 mi' },
      { city: 'Montgomery', slug: 'montgomery-tx', distance: '12 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '22 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells drilled in Magnolia, TX?',
        answer:
          'Most residential wells in Magnolia reach the Jasper Aquifer at 180–320 feet depending on your exact location and lot elevation. We assess each property before drilling.',
      },
      {
        question: 'Does B-E Waterwell service Magnolia, TX?',
        answer:
          'Yes — Magnolia is our home base. Our shop is located here and we have serviced this area since 1979.',
      },
      {
        question: 'Do I need a permit to drill a water well in Magnolia?',
        answer:
          'Yes. Magnolia falls under Lone Star Groundwater Conservation District (LSGCD) jurisdiction. We handle all permitting as part of our drilling service.',
      },
      {
        question: 'What does well rehabilitation involve?',
        answer:
          'Well rehabilitation typically includes well shocking (chlorination), acid treatment, pump inspection, and screen cleaning to restore flow rate and water quality.',
      },
    ],
  },
  {
    slug: 'conroe-tx',
    city: 'Conroe',
    state: 'TX',
    county: 'Montgomery County',
    tagline: 'Montgomery County Water Well Experts',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Conroe, TX. B-E Waterwell Services has served Montgomery County since 1979. Licensed & insured. Call (281) 448-4447.',
    intro:
      'Conroe is the county seat of Montgomery County and one of the fastest-growing areas in Texas. As the region expands beyond municipal water infrastructure, private water wells are increasingly common — and increasingly important to get right. B-E Waterwell Services has drilled and serviced wells throughout Conroe and the surrounding Lake Conroe corridor for decades.',
    aquiferDepth: '200–400 ft',
    nearbyAreas: [
      { city: 'Montgomery', slug: 'montgomery-tx', distance: '14 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '18 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '22 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '18 mi' },
      { city: 'Pinehurst', slug: 'pinehurst-tx', distance: '10 mi' },
      { city: 'Humble', slug: 'humble-tx', distance: '32 mi' },
      { city: 'Kingwood', slug: 'kingwood-tx', distance: '28 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '26 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells in Conroe, TX?',
        answer:
          'Residential wells in Conroe typically reach the Evangeline or Jasper Aquifer at 200–400 feet. Depth varies based on elevation and proximity to Lake Conroe.',
      },
      {
        question: 'What permits are required for a new well in Conroe?',
        answer:
          'Conroe falls under LSGCD (Lone Star Groundwater Conservation District). A permit is required before drilling. B-E Waterwell handles all permitting for you.',
      },
      {
        question: 'How quickly can you respond to a well emergency in Conroe?',
        answer:
          'We offer 24/7 emergency service. For most Conroe locations, we can have a technician on-site within 2–4 hours for pump failures or no-water emergencies.',
      },
      {
        question: 'Do you test water quality for Conroe wells?',
        answer:
          'Yes. We can collect samples and coordinate lab testing for bacteria, heavy metals, hardness, and other contaminants common to the Conroe area.',
      },
    ],
  },
  {
    slug: 'spring-tx',
    city: 'Spring',
    state: 'TX',
    county: 'Harris County',
    tagline: 'Harris County Water Well Specialists',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump repair in Spring, TX. B-E Waterwell Services serves all of Spring and North Harris County. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Spring, TX sits at the crossroads of North Harris County — a rapidly expanding community where older wells frequently need attention and new construction demands reliable water sources. B-E Waterwell Services has been the go-to contractor for Spring-area residential and commercial well work for decades, with deep knowledge of the local geology and Harris County regulations.',
    aquiferDepth: '220–380 ft',
    nearbyAreas: [
      { city: 'Tomball', slug: 'tomball-tx', distance: '12 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '14 mi' },
      { city: 'Conroe', slug: 'conroe-tx', distance: '22 mi' },
      { city: 'Humble', slug: 'humble-tx', distance: '18 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '20 mi' },
      { city: 'Kingwood', slug: 'kingwood-tx', distance: '22 mi' },
    ],
    faqs: [
      {
        question: 'What aquifer do wells in Spring, TX draw from?',
        answer:
          'Most Spring-area wells draw from the Evangeline Aquifer at 220–380 feet. This aquifer provides good yield but may require pressure tanks sized appropriately.',
      },
      {
        question: 'Who regulates water wells in Spring, TX?',
        answer:
          'Spring falls in Harris County, regulated by the Harris-Galveston Subsidence District (HGSD). We handle all permit applications.',
      },
      {
        question: 'How do I know if my Spring well pump needs replacing?',
        answer:
          'Signs include low pressure, no water, cycling on/off rapidly, or unusually high electricity bills. We offer free diagnostic estimates for Spring-area customers.',
      },
      {
        question: 'Can you install a well for a new construction home in Spring?',
        answer:
          'Absolutely. We work with builders and homeowners throughout Spring for new well drilling, casing, pump installation, and pressure tank setup.',
      },
    ],
  },
  {
    slug: 'woodlands-tx',
    city: 'The Woodlands',
    state: 'TX',
    county: 'Montgomery County',
    tagline: 'The Woodlands & South Montgomery County',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well services in The Woodlands, TX. B-E Waterwell Services brings 45+ years of Montgomery County expertise to every job. Call (281) 448-4447.',
    intro:
      'The Woodlands is one of the most planned and prosperous communities in Texas — and even here, private water wells are common on the outskirts and in the Estate village areas. B-E Waterwell Services provides discreet, professional service that meets the standards Woodlands-area property owners expect, with licensed crews and fully insured operations.',
    aquiferDepth: '200–350 ft',
    nearbyAreas: [
      { city: 'Spring', slug: 'spring-tx', distance: '14 mi' },
      { city: 'Conroe', slug: 'conroe-tx', distance: '18 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '16 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '20 mi' },
      { city: 'Pinehurst', slug: 'pinehurst-tx', distance: '12 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '22 mi' },
    ],
    faqs: [
      {
        question: 'Do homes in The Woodlands use private water wells?',
        answer:
          'The core Woodlands villages use municipal water, but surrounding areas — particularly acreage tracts in the Village of Creekside Park and towards Magnolia — commonly have private wells.',
      },
      {
        question: 'What is the well depth in The Woodlands area?',
        answer:
          'Wells in the south Montgomery County corridor typically range 200–350 feet to reach the Jasper or Evangeline Aquifer depending on the property location.',
      },
      {
        question: 'Can you service an existing well in The Woodlands area?',
        answer:
          'Yes. We handle pump replacement, pressure tank service, well shocking, and system diagnostics for existing wells throughout the Woodlands corridor.',
      },
      {
        question: 'How do I schedule a well inspection near The Woodlands?',
        answer:
          'Call (281) 448-4447 or fill out our estimate form. We typically schedule Woodlands-area inspections within 24–48 hours.',
      },
    ],
  },
  {
    slug: 'tomball-tx',
    city: 'Tomball',
    state: 'TX',
    county: 'Harris County',
    tagline: 'Northwest Houston Water Well Experts',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump repair in Tomball, TX. 45+ years serving NW Houston and Harris County. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Tomball sits at the edge of the Houston metro in northwest Harris County — a community that still has roots in rural Texas while growing fast. Many properties here have water wells that predate current TDLR standards, and owners are often surprised to learn how much a well rehabilitation can restore. B-E Waterwell Services knows the local geology inside out and has been a trusted name in Tomball since the 1970s.',
    aquiferDepth: '180–320 ft',
    nearbyAreas: [
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '14 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '12 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '14 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '16 mi' },
      { city: 'Pinehurst', slug: 'pinehurst-tx', distance: '10 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '18 mi' },
    ],
    faqs: [
      {
        question: 'How deep are wells drilled in Tomball, TX?',
        answer:
          'Tomball-area wells typically reach the Chicot or Jasper Aquifer at 180–320 feet. We assess depth requirements before quoting any new well.',
      },
      {
        question: 'Do I need a permit to drill a well in Tomball?',
        answer:
          'Yes. Tomball is in Harris County and falls under the Harris-Galveston Subsidence District. Permits are required. We handle all applications.',
      },
      {
        question: 'My Tomball well has low pressure — what should I check?',
        answer:
          'Low pressure typically indicates a failing submersible pump, waterlogged pressure tank, or drop in aquifer yield. Call us for a free diagnostic.',
      },
      {
        question: 'Do you offer financing for new well drilling near Tomball?',
        answer:
          'We provide detailed written estimates and can discuss payment arrangements for larger jobs. Call (281) 448-4447 for specifics.',
      },
    ],
  },
  {
    slug: 'cypress-tx',
    city: 'Cypress',
    state: 'TX',
    county: 'Harris County',
    tagline: 'Cypress & Northwest Harris County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling, pump installation, and repair in Cypress, TX. Serving northwest Harris County since 1979. Licensed TDLR contractor. Call (281) 448-4447.',
    intro:
      'Cypress, TX has grown from rural farmland to one of the largest unincorporated communities in the country — and throughout that growth, private water wells have remained a fixture for properties outside municipal service boundaries. B-E Waterwell Services has drilled and maintained hundreds of wells in the Cypress corridor, from Cypress-Fairbanks to Cypress Mill Road and beyond.',
    aquiferDepth: '200–360 ft',
    nearbyAreas: [
      { city: 'Tomball', slug: 'tomball-tx', distance: '14 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '20 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '20 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '24 mi' },
      { city: 'Pinehurst', slug: 'pinehurst-tx', distance: '18 mi' },
      { city: 'Humble', slug: 'humble-tx', distance: '30 mi' },
    ],
    faqs: [
      {
        question: 'What aquifer do wells in Cypress, TX use?',
        answer:
          'Cypress-area wells typically draw from the Evangeline Aquifer at 200–360 feet. We test yield and water quality as part of every new well completion.',
      },
      {
        question: 'Are there restrictions on water wells in Cypress, TX?',
        answer:
          'Harris County falls under the Harris-Galveston Subsidence District (HGSD). Permits are required, and there may be restrictions in certain subsidence-sensitive areas.',
      },
      {
        question: 'Can I connect a water well to my Cypress irrigation system?',
        answer:
          'Yes — irrigation wells are one of our specialties. A dedicated irrigation well is often more cost-effective than paying municipal rates for landscape watering.',
      },
      {
        question: 'How long does a water well last in the Cypress area?',
        answer:
          'A properly drilled and maintained well can last 30–50 years. Pumps typically need replacement every 8–15 years depending on usage and water chemistry.',
      },
    ],
  },
  {
    slug: 'humble-tx',
    city: 'Humble',
    state: 'TX',
    county: 'Harris County',
    tagline: 'East Harris County Water Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Humble, TX. Serving east Harris County and the Lake Houston area since 1979. Call (281) 448-4447.',
    intro:
      'Humble, TX and the surrounding Lake Houston corridor represent some of the most active well service territory in Harris County. Properties near the lake and in the rural stretches east of US-59 often rely entirely on private wells. B-E Waterwell Services brings the same licensed expertise and emergency response to Humble that we deliver across our entire 11-city service area.',
    aquiferDepth: '240–420 ft',
    nearbyAreas: [
      { city: 'Kingwood', slug: 'kingwood-tx', distance: '10 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '18 mi' },
      { city: 'Conroe', slug: 'conroe-tx', distance: '30 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '24 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '30 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '28 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells in Humble, TX?',
        answer:
          'Humble-area wells typically reach 240–420 feet to access the Evangeline Aquifer. Depth can vary significantly near Lake Houston due to subsurface geology.',
      },
      {
        question: 'Is Humble, TX in a subsidence zone?',
        answer:
          'Parts of east Harris County are subject to HGSD subsidence monitoring. We check current restrictions before permitting any new well in the Humble area.',
      },
      {
        question: 'What is the water quality like in Humble area wells?',
        answer:
          'Humble area water tends to have moderate hardness and some iron. We recommend a baseline water quality test after any new well installation.',
      },
      {
        question: 'Do you offer emergency pump service in Humble, TX?',
        answer:
          'Yes. We maintain 24/7 emergency coverage for all our service areas including Humble and the Lake Houston corridor.',
      },
    ],
  },
  {
    slug: 'kingwood-tx',
    city: 'Kingwood',
    state: 'TX',
    county: 'Harris County',
    tagline: 'Kingwood & Lake Houston Water Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling, pump repair, and well rehabilitation in Kingwood, TX. Serving the Lake Houston area since 1979. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Kingwood — the "Livable Forest" — is a master-planned community in northeast Harris County that borders the San Jacinto River and Lake Houston. Properties on the outer edges and in the unincorporated areas east of FM 1960 frequently rely on private wells. B-E Waterwell Services has served the Kingwood area for decades and understands the unique water table conditions near the river corridor.',
    aquiferDepth: '260–440 ft',
    nearbyAreas: [
      { city: 'Humble', slug: 'humble-tx', distance: '10 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '22 mi' },
      { city: 'Conroe', slug: 'conroe-tx', distance: '28 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '26 mi' },
      { city: 'Montgomery', slug: 'montgomery-tx', distance: '40 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '34 mi' },
    ],
    faqs: [
      {
        question: 'Are private water wells common in Kingwood, TX?',
        answer:
          'In the core Kingwood subdivisions, municipal water is standard. However, properties bordering unincorporated Harris County and Lake Houston corridor acreage often rely on private wells.',
      },
      {
        question: 'What depth should a well be drilled in Kingwood?',
        answer:
          'Given the proximity to the San Jacinto River, wells in the Kingwood area typically need to go 260–440 feet to reach clean aquifer water isolated from surface influence.',
      },
      {
        question: 'My Kingwood well water smells like sulfur — what causes this?',
        answer:
          'Sulfur odor in east Harris County wells is typically hydrogen sulfide, which can be addressed with an aeration system or chemical treatment. We test and recommend the right solution.',
      },
      {
        question: 'How fast can you respond to a well emergency in Kingwood?',
        answer:
          'We maintain 24/7 emergency service. Most Kingwood emergency calls receive a technician within 2–4 hours.',
      },
    ],
  },
  {
    slug: 'montgomery-tx',
    city: 'Montgomery',
    state: 'TX',
    county: 'Montgomery County',
    tagline: 'Rural Montgomery County Water Well Experts',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Montgomery, TX. Deep rural expertise in Montgomery County since 1979. Licensed TDLR contractor. Call (281) 448-4447.',
    intro:
      'Montgomery, TX is the original settlement of Montgomery County — a small town with big rural character and some of the most actively farmed and ranched land in the service area. Rural properties here often have larger lots, deeper wells, and greater demand for reliable water supply. B-E Waterwell Services has served the Montgomery area for over four decades with deep knowledge of the local Jasper Aquifer and LSGCD regulations.',
    aquiferDepth: '200–380 ft',
    nearbyAreas: [
      { city: 'Conroe', slug: 'conroe-tx', distance: '14 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '12 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '28 mi' },
      { city: 'Pinehurst', slug: 'pinehurst-tx', distance: '18 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '22 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '26 mi' },
    ],
    faqs: [
      {
        question: 'What groundwater district covers Montgomery, TX?',
        answer:
          'Montgomery falls under the Lone Star Groundwater Conservation District (LSGCD). All new wells require an LSGCD permit, which we handle on your behalf.',
      },
      {
        question: 'Can B-E Waterwell drill wells for agricultural use near Montgomery?',
        answer:
          'Absolutely. We drill and service agricultural, livestock, and irrigation wells throughout the Montgomery area, including large-acreage properties.',
      },
      {
        question: 'What is the water quality like in Montgomery, TX?',
        answer:
          'Montgomery area well water from the Jasper Aquifer is generally clean with moderate hardness. Iron and tannins can occur in shallower intervals — proper casing depth is key.',
      },
      {
        question: 'How long does it take to drill a new well near Montgomery?',
        answer:
          'Once permitted, most residential wells in the Montgomery area can be drilled and completed in 1–2 days depending on depth and site access.',
      },
    ],
  },
  {
    slug: 'pinehurst-tx',
    city: 'Pinehurst',
    state: 'TX',
    county: 'Montgomery County',
    tagline: 'Pinehurst & Central Montgomery County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Pinehurst, TX. Central Montgomery County\'s trusted well contractor since 1979. Call (281) 448-4447.',
    intro:
      'Pinehurst occupies the heart of Montgomery County between Magnolia and Conroe — a mid-density community with a mix of older ranch-style properties and newer acreage developments. Wells in this area span several decades of construction standards, and our team has experience servicing everything from 1960s-era hand-dug wells to modern rotary-drilled installations.',
    aquiferDepth: '190–340 ft',
    nearbyAreas: [
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '8 mi' },
      { city: 'Conroe', slug: 'conroe-tx', distance: '10 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '12 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '10 mi' },
      { city: 'Montgomery', slug: 'montgomery-tx', distance: '18 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '20 mi' },
    ],
    faqs: [
      {
        question: 'What is the typical well depth in Pinehurst, TX?',
        answer:
          'Pinehurst wells generally run 190–340 feet to reach reliable Jasper Aquifer water. Shallower wells can encounter iron-bearing zones that require proper casing.',
      },
      {
        question: 'My Pinehurst well is over 30 years old — should I replace it?',
        answer:
          'Not necessarily. We can inspect and rehabilitate many older wells cost-effectively. We assess condition before recommending replacement versus rehabilitation.',
      },
      {
        question: 'Do you handle pressure tank replacement in Pinehurst?',
        answer:
          'Yes — pressure tank replacement is one of our most common service calls in Pinehurst. We stock a full range of tanks and can typically complete the job same-day.',
      },
      {
        question: 'What groundwater district governs Pinehurst?',
        answer:
          'Pinehurst falls under the Lone Star Groundwater Conservation District (LSGCD). All new wells require an LSGCD permit.',
      },
    ],
  },
  {
    slug: 'waller-tx',
    city: 'Waller',
    state: 'TX',
    county: 'Waller County',
    tagline: 'Waller County Water Well Specialists',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Waller, TX. Serving Waller County since 1979. Licensed TDLR contractor serving farm, ranch, and residential properties. Call (281) 448-4447.',
    intro:
      'Waller County is wide-open Texas — farmland, ranches, and rural acreage stretching west toward Austin County. Private water wells are not just common here, they are essential. B-E Waterwell Services has been drilling and maintaining wells throughout Waller County for over four decades, with experience in agricultural, livestock, and residential applications across the county.',
    aquiferDepth: '160–300 ft',
    nearbyAreas: [
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '22 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '18 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '20 mi' },
      { city: 'Montgomery', slug: 'montgomery-tx', distance: '28 mi' },
      { city: 'Pinehurst', slug: 'pinehurst-tx', distance: '24 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '30 mi' },
    ],
    faqs: [
      {
        question: 'How deep do wells need to be drilled in Waller County?',
        answer:
          'Waller County\'s sandy coastal plain geology typically allows good water at 160–300 feet. Yield and quality depend on the specific location relative to the Trinity Aquifer group.',
      },
      {
        question: 'What governs water well permits in Waller County?',
        answer:
          'Waller County falls under the Lone Star Groundwater Conservation District (LSGCD) in some areas, and Brazos Valley Groundwater Conservation District in others. We verify the applicable district for your property.',
      },
      {
        question: 'Do you drill wells for farms and ranches in Waller County?',
        answer:
          'Yes — agricultural and livestock wells are a specialty. We can drill stock wells, irrigation wells, and large-capacity farm wells throughout Waller County.',
      },
      {
        question: 'How long does a new well take to complete in Waller County?',
        answer:
          'Most residential wells in Waller County are drilled and completed in 1–2 days after permit approval. Larger agricultural wells may require 2–3 days.',
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
