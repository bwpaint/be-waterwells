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
    slug: 'houston-tx',
    city: 'Houston',
    state: 'TX',
    county: 'Harris County',
    isHQ: false,
    tagline: 'Water Well Drilling & Service Across the Greater Houston Area',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — water well drilling, pump replacement, and well rehabilitation across the greater Houston, TX area. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'B-E Waterwell Services has drilled and serviced water wells across the greater Houston area for over 45 years. From rural acreage on the metro\'s edge to established properties beyond city water, we handle new wells, pump replacement and replacement, pressure systems, and well rehabilitation. We are a family-owned, TDLR-licensed contractor and a Franklin Electric authorized dealer.',
    aquiferDepth: '300–600 ft',
    nearbyAreas: [
      { city: 'Cypress', slug: 'cypress-tx', distance: '25 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '22 mi' },
      { city: 'Humble', slug: 'humble-tx', distance: '20 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '30 mi' },
      { city: 'Katy', slug: 'katy-tx', distance: '29 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '45 mi' },
    ],
    faqs: [
      {
        question: 'Does B-E Waterwell Services drill water wells in the Houston area?',
        answer:
          'Yes. We drill and service water wells throughout the greater Houston area and surrounding counties — Harris, Montgomery, Waller, Grimes, Washington, and beyond. We have served this region since 1979.',
      },
      {
        question: 'How deep are water wells in the Houston area?',
        answer:
          'Depth varies by location and the water-bearing formation beneath your property. We assess each site before drilling and recommend the right depth for a reliable, productive well.',
      },
      {
        question: 'Do I need a permit to drill a water well near Houston?',
        answer:
          'Most new wells require a permit from the local Groundwater Conservation District or subsidence district, and timelines vary by county. B-E Waterwell handles all permitting on your behalf.',
      },
      {
        question: 'How much does a water well cost in the Houston area?',
        answer:
          'Pricing depends on your location, well depth, static water level, and equipment selection — call us to discuss your project and we\'ll provide a written estimate.',
      },
    ],
  },
  {
    slug: 'magnolia-tx',
    city: 'Magnolia',
    state: 'TX',
    county: 'Montgomery County',
    isHQ: true,
    tagline: 'Our Home Base — Serving Magnolia Since 1979',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — Magnolia, TX water well drilling, pump replacement, and well rehabilitation. Our home base since 1979. Licensed TDLR contractor. Call (281) 448-4447.',
    intro:
      'Magnolia, TX is home base for B-E Waterwell Services. We have been drilling water wells and servicing pumps in this community for over 45 years — longer than most of the subdivisions out here have existed. The sandy loam soils and the water-bearing zone make for reliable wells when drilled right, and we know every foot of this ground.',
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
          'Most residential wells in Magnolia reach the target depth at 180–320 feet depending on your exact location and lot elevation. We assess each property before drilling.',
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
          'Residential wells in Conroe typically reach the target depth or the water-bearing zone at 200–400 feet. Depth varies based on elevation and proximity to Lake Conroe.',
      },
      {
        question: 'What permits are required for a new well in Conroe?',
        answer:
          'Conroe falls under LSGCD (Lone Star Groundwater Conservation District). A permit is required before drilling. B-E Waterwell handles all permitting for you.',
      },
      {
        question: 'How quickly can you respond to a well emergency in Conroe?',
        answer:
          'We handle emergency service for pump failures and no-water situations. Call us and we will get a technician scheduled to your Conroe property as quickly as possible.',
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
      'Water well drilling and pump replacement in Spring, TX. B-E Waterwell Services serves all of Spring and North Harris County. Licensed TDLR. Call (281) 448-4447.',
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
          'Most Spring-area wells draw from the target depth at 220–380 feet. This aquifer provides good yield but may require pressure tanks sized appropriately.',
      },
      {
        question: 'Who regulates water wells in Spring, TX?',
        answer:
          'Spring falls in Harris County, regulated by the Harris-Galveston Subsidence District (HGSD). We handle all permit applications.',
      },
      {
        question: 'How do I know if my Spring well pump needs replacing?',
        answer:
          'Signs include low pressure, no water, cycling on/off rapidly, or unusually high electricity bills. We offer diagnostic estimates for Spring-area customers.',
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
          'Wells in the south Montgomery County corridor typically range 200–350 feet to reach the target depth or the water-bearing zone depending on the property location.',
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
      'Water well drilling and pump replacement in Tomball, TX. 45+ years serving NW Houston and Harris County. Licensed TDLR. Call (281) 448-4447.',
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
          'Tomball-area wells typically reach the water-bearing zone at 180–320 feet. We assess depth requirements before quoting any new well.',
      },
      {
        question: 'Do I need a permit to drill a well in Tomball?',
        answer:
          'Yes. Tomball is in Harris County and falls under the Harris-Galveston Subsidence District. Permits are required. We handle all applications.',
      },
      {
        question: 'My Tomball well has low pressure — what should I check?',
        answer:
          'Low pressure typically indicates a failing submersible pump, waterlogged pressure tank, or drop in aquifer yield. Call us for a diagnostic.',
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
          'Cypress-area wells typically draw from the target depth at 200–360 feet. We test yield and water quality as part of every new well completion.',
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
          'Humble-area wells typically reach 240–420 feet to access the target depth. Depth can vary significantly near Lake Houston due to subsurface geology.',
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
          'Yes. We handle emergency pump service for all our service areas including Humble and the Lake Houston corridor — call us and we will respond as quickly as we can.',
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
      'Water well drilling, pump replacement, and well rehabilitation in Kingwood, TX. Serving the Lake Houston area since 1979. Licensed TDLR. Call (281) 448-4447.',
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
          'We handle emergency service for Kingwood-area wells. Call us as soon as you notice a problem and we will get a technician scheduled to your property as quickly as possible.',
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
      'Montgomery, TX is the original settlement of Montgomery County — a small town with big rural character and some of the most actively farmed and ranched land in the service area. Rural properties here often have larger lots, deeper wells, and greater demand for reliable water supply. B-E Waterwell Services has served the Montgomery area for over four decades with deep knowledge of the local the water-bearing zone and LSGCD regulations.',
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
          'Montgomery area well water from the target depth is generally clean with moderate hardness. Iron and tannins can occur in shallower intervals — proper casing depth is key.',
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
          'Pinehurst wells generally run 190–340 feet to reach reliable groundwater. Shallower wells can encounter iron-bearing zones that require proper casing.',
      },
      {
        question: 'My Pinehurst well is over 30 years old — should I replace it?',
        answer:
          'Not necessarily. We can inspect and rehabilitate many older wells cost-effectively. We assess condition before recommending replacement versus rehabilitation.',
      },
      {
        question: 'Do you handle pressure tank replacement in Pinehurst?',
        answer:
          'Yes — pressure tank replacement is one of our most common service calls in Pinehurst. We carry common parts and work to complete the job as efficiently as possible.',
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
  {
    slug: 'anderson-tx',
    city: 'Anderson',
    state: 'TX',
    county: 'Grimes County',
    tagline: 'Grimes County Water Well Experts',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling, pump replacement, and well rehabilitation in Anderson, TX. B-E Waterwell Services has served Grimes County since 1979. Licensed TDLR contractor. Call (281) 448-4447.',
    intro:
      'Anderson is the historic county seat of Grimes County — a small, rural community where private water wells have always been a way of life. The rolling terrain west of Houston here is different country than the Gulf Coast plain, and well depth varies considerably from one property to the next. B-E Waterwell Services has drilled and serviced wells across Grimes County for over four decades, and we assess every site before we drill.',
    aquiferDepth: 'Varies by location',
    nearbyAreas: [
      { city: 'Navasota', slug: 'navasota-tx', distance: '10 mi' },
      { city: 'Montgomery', slug: 'montgomery-tx', distance: '30 mi' },
      { city: 'Millican', slug: 'millican-tx', distance: '22 mi' },
      { city: 'Washington', slug: 'washington-tx', distance: '18 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '40 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells drilled in Anderson, TX?',
        answer:
          'Well depth varies by location across Grimes County. The geology here differs from the Gulf Coast, so we assess every property and review available logs before drilling rather than assuming a fixed depth.',
      },
      {
        question: 'Do I need a permit to drill a well near Anderson?',
        answer:
          'Most likely, yes. We verify the requirements with your local Groundwater Conservation District for your specific property and handle the permitting as part of our drilling service.',
      },
      {
        question: 'Does B-E Waterwell service rural acreage around Anderson?',
        answer:
          'Yes. We regularly drill and service residential, livestock, and irrigation wells on rural Grimes County tracts. We have been doing this work since 1979 and have serviced 5,000+ wells.',
      },
      {
        question: 'What does a well consultation in Anderson cost?',
        answer:
          'Pricing depends on your location, well depth, static water level, and equipment — call us to discuss your project. We provide a written estimate before any work begins.',
      },
    ],
  },
  {
    slug: 'navasota-tx',
    city: 'Navasota',
    state: 'TX',
    county: 'Grimes County',
    tagline: 'Navasota & Grimes County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Navasota, TX. B-E Waterwell Services serves Grimes County with 45+ years of experience. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Navasota sits along the Brazos River in southern Grimes County, a working town surrounded by farms, ranches, and growing residential acreage. Many properties out here depend entirely on private water wells, and the river-corridor geology means depth and yield can vary widely. B-E Waterwell Services has served the Navasota area for decades and inspects each property before recommending a drilling plan.',
    aquiferDepth: 'Varies by location',
    nearbyAreas: [
      { city: 'Anderson', slug: 'anderson-tx', distance: '10 mi' },
      { city: 'Washington', slug: 'washington-tx', distance: '12 mi' },
      { city: 'Millican', slug: 'millican-tx', distance: '18 mi' },
      { city: 'Chappell Hill', slug: 'chappell-hill-tx', distance: '20 mi' },
      { city: 'Somerville', slug: 'somerville-tx', distance: '24 mi' },
    ],
    faqs: [
      {
        question: 'How deep are wells drilled near Navasota, TX?',
        answer:
          'Depth varies across the Brazos River corridor in Grimes County. We assess every property and review local well records before drilling rather than quoting a fixed depth.',
      },
      {
        question: 'Can you drill agricultural and livestock wells near Navasota?',
        answer:
          'Yes — farm, ranch, and irrigation wells are a specialty. We have serviced 5,000+ wells since 1979 and work on properties of all sizes throughout the Navasota area.',
      },
      {
        question: 'Who regulates water wells around Navasota?',
        answer:
          'We confirm the applicable Groundwater Conservation District for your property before permitting and handle the application for you.',
      },
      {
        question: 'My Navasota well lost pressure — can you help?',
        answer:
          'Yes. We diagnose and repair pump and pressure-tank problems. Emergency service available — call us at (281) 448-4447.',
      },
    ],
  },
  {
    slug: 'hockley-tx',
    city: 'Hockley',
    state: 'TX',
    county: 'Harris County',
    tagline: 'Hockley & Northwest Harris County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Hockley, TX. B-E Waterwell Services serves northwest Harris County since 1979. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Hockley is rural northwest Harris County — open land along US-290 where ranchettes and acreage homesites rely heavily on private water wells. As this corridor develops, both new drilling and rehabilitation of older wells keep our crews busy. B-E Waterwell Services has worked the Hockley area for decades and knows how local conditions vary from one tract to the next.',
    aquiferDepth: '200–360 ft',
    nearbyAreas: [
      { city: 'Waller', slug: 'waller-tx', distance: '8 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '14 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '12 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '18 mi' },
      { city: 'Hempstead', slug: 'hempstead-tx', distance: '16 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells in Hockley, TX?',
        answer:
          'Many Hockley-area wells fall in the 200–360 foot range, but depth varies by property. We assess each site before drilling and confirm requirements for your location.',
      },
      {
        question: 'Do I need a permit to drill a well in Hockley?',
        answer:
          'Hockley is in Harris County. We verify the applicable district and subsidence requirements for your property and handle all permitting as part of the job.',
      },
      {
        question: 'Can you install an irrigation well in Hockley?',
        answer:
          'Yes — irrigation and livestock wells are common requests in this area. Pricing depends on your location, well depth, static water level, and equipment — call us to discuss your project.',
      },
      {
        question: 'Do you service older wells in the Hockley area?',
        answer:
          'Yes. We rehabilitate, re-pump, and inspect existing wells throughout northwest Harris County. We have serviced 5,000+ wells since 1979.',
      },
    ],
  },
  {
    slug: 'hempstead-tx',
    city: 'Hempstead',
    state: 'TX',
    county: 'Waller County',
    tagline: 'Hempstead & Waller County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Hempstead, TX. B-E Waterwell Services serves Waller County with 45+ years of experience. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Hempstead, the county seat of Waller County, sits at the western edge of the Houston region where farmland and ranch country take over. Private wells are the norm for properties outside town, and the area\'s varied geology means each well deserves a careful look before drilling. B-E Waterwell Services has served Waller County since 1979 and brings that experience to every Hempstead-area job.',
    aquiferDepth: '160–320 ft',
    nearbyAreas: [
      { city: 'Waller', slug: 'waller-tx', distance: '10 mi' },
      { city: 'Hockley', slug: 'hockley-tx', distance: '16 mi' },
      { city: 'Chappell Hill', slug: 'chappell-hill-tx', distance: '16 mi' },
      { city: 'Brenham', slug: 'brenham-tx', distance: '26 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '30 mi' },
    ],
    faqs: [
      {
        question: 'How deep are wells drilled in Hempstead, TX?',
        answer:
          'Many Waller County wells fall in the 160–320 foot range, but depth and yield vary by location. We assess every property before drilling.',
      },
      {
        question: 'What district covers water wells in Hempstead?',
        answer:
          'Waller County is covered by groundwater districts that vary by area. We verify the applicable Groundwater Conservation District for your property and handle the permit.',
      },
      {
        question: 'Do you drill wells for farms and ranches near Hempstead?',
        answer:
          'Yes — agricultural, livestock, and irrigation wells are a specialty. We have serviced 5,000+ wells since 1979 across Waller County.',
      },
      {
        question: 'How much does a new well cost in Hempstead?',
        answer:
          'Pricing depends on your location, well depth, static water level, and equipment — call us to discuss your project. We provide a written estimate before any work begins.',
      },
    ],
  },
  {
    slug: 'washington-tx',
    city: 'Washington',
    state: 'TX',
    county: 'Washington County',
    tagline: 'Washington & Washington County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Washington, TX. B-E Waterwell Services serves Washington County since 1979. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Washington, TX — historic Washington-on-the-Brazos — anchors a stretch of rural Washington County where ranches and rural homes depend on private wells. The terrain here, west of Houston along the Brazos, differs from the Gulf Coast, and well conditions vary from tract to tract. B-E Waterwell Services assesses every property before drilling and has served this region for over four decades.',
    aquiferDepth: 'Varies by location',
    nearbyAreas: [
      { city: 'Navasota', slug: 'navasota-tx', distance: '12 mi' },
      { city: 'Chappell Hill', slug: 'chappell-hill-tx', distance: '12 mi' },
      { city: 'Brenham', slug: 'brenham-tx', distance: '16 mi' },
      { city: 'Anderson', slug: 'anderson-tx', distance: '18 mi' },
      { city: 'Somerville', slug: 'somerville-tx', distance: '22 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells near Washington, TX?',
        answer:
          'Depth varies by location in Washington County; the geology here differs from the Gulf Coast. We assess every property and review local records before drilling.',
      },
      {
        question: 'Do I need a permit to drill near Washington, TX?',
        answer:
          'In most cases, yes. We confirm the applicable Groundwater Conservation District for your property and handle the permitting for you.',
      },
      {
        question: 'Can you service ranch and livestock wells in this area?',
        answer:
          'Yes. Livestock, irrigation, and residential wells are all part of our work. We have serviced 5,000+ wells since 1979.',
      },
      {
        question: 'Do you offer emergency well service near Washington?',
        answer:
          'Emergency service available — call us at (281) 448-4447 and we will get a technician scheduled as quickly as possible.',
      },
    ],
  },
  {
    slug: 'chappell-hill-tx',
    city: 'Chappell Hill',
    state: 'TX',
    county: 'Washington County',
    tagline: 'Chappell Hill & Washington County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Chappell Hill, TX. B-E Waterwell Services serves Washington County since 1979. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Chappell Hill is a historic small community in eastern Washington County, surrounded by rolling pastureland, small farms, and acreage homesites that rely on private water wells. The geology here, west of the Houston metro, calls for a property-by-property approach. B-E Waterwell Services has drilled and serviced wells throughout this area for decades and reviews each site before recommending a plan.',
    aquiferDepth: 'Varies by location',
    nearbyAreas: [
      { city: 'Brenham', slug: 'brenham-tx', distance: '10 mi' },
      { city: 'Washington', slug: 'washington-tx', distance: '12 mi' },
      { city: 'Hempstead', slug: 'hempstead-tx', distance: '16 mi' },
      { city: 'Navasota', slug: 'navasota-tx', distance: '20 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '24 mi' },
    ],
    faqs: [
      {
        question: 'How deep do wells go in Chappell Hill, TX?',
        answer:
          'Well depth varies across this part of Washington County. We assess each property and review available logs before drilling rather than assuming a fixed depth.',
      },
      {
        question: 'Who regulates water wells around Chappell Hill?',
        answer:
          'We verify the applicable Groundwater Conservation District for your specific property and handle the permit application as part of our service.',
      },
      {
        question: 'Can you rehabilitate an older well in Chappell Hill?',
        answer:
          'Yes. Many older wells can be rehabilitated cost-effectively. We inspect condition before recommending rehabilitation versus replacement.',
      },
      {
        question: 'What does a new well cost in Chappell Hill?',
        answer:
          'Pricing depends on your location, well depth, static water level, and equipment — call us to discuss your project. We provide a written estimate first.',
      },
    ],
  },
  {
    slug: 'millican-tx',
    city: 'Millican',
    state: 'TX',
    county: 'Brazos County',
    tagline: 'Millican & Brazos County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Millican, TX. B-E Waterwell Services serves Brazos County since 1979. Licensed TDLR contractor. Call (281) 448-4447.',
    intro:
      'Millican sits in southern Brazos County, a rural community of farms, ranches, and acreage south of College Station where private wells are essential. The terrain here, west of Houston, varies enough that depth and yield should be evaluated property by property. B-E Waterwell Services has served the Brazos County area for decades and assesses every site before drilling.',
    aquiferDepth: 'Varies by location',
    nearbyAreas: [
      { city: 'Navasota', slug: 'navasota-tx', distance: '18 mi' },
      { city: 'Anderson', slug: 'anderson-tx', distance: '22 mi' },
      { city: 'Somerville', slug: 'somerville-tx', distance: '24 mi' },
      { city: 'Washington', slug: 'washington-tx', distance: '26 mi' },
      { city: 'Brenham', slug: 'brenham-tx', distance: '34 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells near Millican, TX?',
        answer:
          'Depth varies across Brazos County. We assess every property and review local records before drilling rather than quoting a fixed depth.',
      },
      {
        question: 'Do I need a permit to drill a well near Millican?',
        answer:
          'In most cases, yes. We confirm the applicable Groundwater Conservation District for your property and handle the permit application.',
      },
      {
        question: 'Can you drill agricultural wells in the Millican area?',
        answer:
          'Yes — livestock, irrigation, and large-acreage wells are a specialty. We have serviced 5,000+ wells since 1979.',
      },
      {
        question: 'Do you handle pump replacement near Millican?',
        answer:
          'Yes. We diagnose and replace submersible pumps and pressure tanks. Emergency service available — call us at (281) 448-4447.',
      },
    ],
  },
  {
    slug: 'katy-tx',
    city: 'Katy',
    state: 'TX',
    county: 'Fort Bend County',
    tagline: 'Katy & Fort Bend County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Katy, TX. B-E Waterwell Services serves the Fort Bend County area since 1979. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Katy spans the western edge of the Houston metro across parts of Fort Bend, Harris, and Waller counties. While much of the area is on municipal water, acreage properties and rural tracts on the outskirts still rely on private wells. B-E Waterwell Services brings the same licensed, fully insured service to the Katy area that we deliver across our service region, and we assess each property before drilling.',
    aquiferDepth: '200–400 ft',
    nearbyAreas: [
      { city: 'Cypress', slug: 'cypress-tx', distance: '16 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '20 mi' },
      { city: 'Hockley', slug: 'hockley-tx', distance: '22 mi' },
      { city: 'Hempstead', slug: 'hempstead-tx', distance: '28 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '26 mi' },
    ],
    faqs: [
      {
        question: 'Do properties in Katy, TX use private water wells?',
        answer:
          'Much of Katy is on municipal water, but acreage tracts and rural properties on the outskirts in Fort Bend, Harris, and Waller counties often rely on private wells.',
      },
      {
        question: 'How deep are wells drilled in the Katy area?',
        answer:
          'Many Katy-area wells fall in the 200–400 foot range, but depth varies by location and county. We assess every property before drilling.',
      },
      {
        question: 'What permits are required for a well near Katy?',
        answer:
          'Requirements vary by county and district. We verify the applicable Groundwater Conservation District or subsidence district for your property and handle permitting.',
      },
      {
        question: 'How much does a new well cost in Katy?',
        answer:
          'Pricing depends on your location, well depth, static water level, and equipment — call us to discuss your project. We provide a written estimate before any work begins.',
      },
    ],
  },
  {
    slug: 'somerville-tx',
    city: 'Somerville',
    state: 'TX',
    county: 'Burleson County',
    tagline: 'Somerville & Burleson County Well Services',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling and pump services in Somerville, TX. B-E Waterwell Services serves Burleson County since 1979. Licensed TDLR contractor. Call (281) 448-4447.',
    intro:
      'Somerville sits in southeastern Burleson County near Lake Somerville, a rural area of farms, ranches, and lake-area homesites where private wells are the norm. The geology in this part of the state, well west of the Gulf Coast, varies from one tract to the next. B-E Waterwell Services has served the Burleson County area for decades and reviews each property before recommending a drilling plan.',
    aquiferDepth: 'Varies by location',
    nearbyAreas: [
      { city: 'Brenham', slug: 'brenham-tx', distance: '20 mi' },
      { city: 'Washington', slug: 'washington-tx', distance: '22 mi' },
      { city: 'Millican', slug: 'millican-tx', distance: '24 mi' },
      { city: 'Navasota', slug: 'navasota-tx', distance: '24 mi' },
      { city: 'Chappell Hill', slug: 'chappell-hill-tx', distance: '26 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells near Somerville, TX?',
        answer:
          'Depth varies across Burleson County and near Lake Somerville. We assess every property and review available records before drilling.',
      },
      {
        question: 'Who regulates wells in the Somerville area?',
        answer:
          'We verify the applicable Groundwater Conservation District for your specific property and handle the permit application as part of our service.',
      },
      {
        question: 'Can you drill wells for ranches and lake-area homes near Somerville?',
        answer:
          'Yes — residential, livestock, and irrigation wells are all part of our work. We have serviced 5,000+ wells since 1979.',
      },
      {
        question: 'Do you offer emergency service in the Somerville area?',
        answer:
          'Emergency service available — call us at (281) 448-4447 and we will get a technician scheduled as quickly as possible.',
      },
    ],
  },
  {
    slug: 'brenham-tx',
    city: 'Brenham',
    state: 'TX',
    county: 'Washington County',
    tagline: 'Brenham & Washington County Well Experts',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Brenham, TX. B-E Waterwell Services serves Washington County since 1979. Licensed TDLR. Call (281) 448-4447.',
    intro:
      'Brenham is the heart of Washington County — a thriving small city surrounded by rolling ranch country, dairies, and rural acreage that depends on private water wells. The terrain here, west of the Houston metro, differs from the Gulf Coast, so we evaluate each property individually. B-E Waterwell Services has served the Brenham area for over four decades and assesses every site before drilling.',
    aquiferDepth: 'Varies by location',
    nearbyAreas: [
      { city: 'Chappell Hill', slug: 'chappell-hill-tx', distance: '10 mi' },
      { city: 'Washington', slug: 'washington-tx', distance: '16 mi' },
      { city: 'Somerville', slug: 'somerville-tx', distance: '20 mi' },
      { city: 'Hempstead', slug: 'hempstead-tx', distance: '26 mi' },
      { city: 'Navasota', slug: 'navasota-tx', distance: '28 mi' },
    ],
    faqs: [
      {
        question: 'How deep are water wells in Brenham, TX?',
        answer:
          'Well depth varies across Washington County; the geology here differs from the Gulf Coast. We assess every property and review local records before drilling.',
      },
      {
        question: 'Do I need a permit to drill a well near Brenham?',
        answer:
          'In most cases, yes. We confirm the applicable Groundwater Conservation District for your property and handle the permitting for you.',
      },
      {
        question: 'Can you drill wells for dairies, ranches, and farms near Brenham?',
        answer:
          'Yes — agricultural, livestock, and irrigation wells are a specialty. We have serviced 5,000+ wells since 1979 across the region.',
      },
      {
        question: 'What does a new well cost in Brenham?',
        answer:
          'Pricing depends on your location, well depth, static water level, and equipment — call us to discuss your project. We provide a written estimate before any work begins.',
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
