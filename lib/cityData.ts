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
  /** 2 sourced, non-well local-interest facts (landmark, history, annual
      event) that ground the page geographically for local SEO. Every entry
      must be independently verifiable against a real source — do not add
      anything that can't be checked. */
  localHighlights?: { title: string; text: string }[];
  /** Omit entirely when no sourced depth record exists for the area. */
  aquiferDepth?: string;
  /** Liability disclaimer rendered directly above any depth figure. */
  depthDisclaimer?: string;
  /** Local water districts (MUD / UD / WCID) serving this area. */
  waterDistricts?: { name: string; detail: string }[];
  /** Permitting note specific to this area's regulating authority. */
  permitNote?: string;
  /** Outbound citations to primary regulatory or data sources. */
  references?: { label: string; url: string }[];
  /** Call-to-action shown under the water districts block. */
  areaNote?: string;
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
    slug: 'klein-tx',
    city: 'Klein',
    state: 'TX',
    county: 'Harris County',
    isHQ: false,
    tagline: 'Water Well Drilling, Pump Replacement & Rehabilitation in Klein, TX',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — water well drilling, pump replacement, and well rehabilitation in Klein, TX. Serving Klein and northwest Harris County since 1979. TDLR licensed. Call (281) 448-4447.',
    intro:
      'Klein sits in northwest Harris County, and its water picture is more layered than most of the areas we serve. Much of Klein is inside a municipal utility district that supplies water to the home, while properties on larger acreage outside those district boundaries stay on private wells. B-E Waterwell Services has drilled and serviced wells across this corner of Harris County since 1979 — new wells where district water does not reach, pump replacement and pressure systems on existing wells, and rehabilitation on older wells that have lost yield.',
    depthDisclaimer:
      'We were unable to pull past well-depth records for this area. Depth varies site to site, and we do not publish a figure we cannot source. Contact B-E Waterwell Services and we will discuss what to expect on your specific property.',
    waterDistricts: [
      {
        name: 'Kleinwood Municipal Utility District',
        detail:
          'Operates two water wells — the first completed in 1974 and a second added in the 1980s drawing from the Evangeline aquifer — while also purchasing surface water through the North Harris County Regional Water Authority. If your property is inside Kleinwood MUD, the district supplies your water.',
      },
      {
        name: 'Cypress Klein Utility District',
        detail:
          'Serves the western side of the Klein area. District coverage here is the main factor in whether a property is on supplied water or a private well.',
      },
      {
        name: 'Harris County MUD 157',
        detail:
          'A groundwater-sourced district inside the Klein ISD boundary, northwest toward Tomball. Still draws from its own wells rather than purchased surface water.',
      },
    ],
    permitNote:
      'Klein falls under the Harris-Galveston Subsidence District. A well with a casing diameter of less than five inches that serves only a single-family dwelling is exempt from HGSD permit requirements — which covers most residential wells. Larger wells, irrigation wells, and commercial wells do require a permit, and B-E Waterwell handles that filing as part of the job.',
    references: [
      { label: 'Harris-Galveston Subsidence District — permitting rules', url: 'https://hgsubsidence.org/permits/' },
      { label: 'TWDB Groundwater Data — look up filed well records near your address', url: 'https://www.twdb.texas.gov/groundwater/data/index.asp' },
      { label: 'TWDB Submitted Driller\'s Report database', url: 'https://www.twdb.texas.gov/groundwater/data/drillersdb.asp' },
    ],
    nearbyAreas: [
      { city: 'Spring', slug: 'spring-tx', distance: '5 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '10 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '12 mi' },
      { city: 'The Woodlands', slug: 'woodlands-tx', distance: '14 mi' },
      { city: 'Magnolia', slug: 'magnolia-tx', distance: '20 mi' },
      { city: 'Houston', slug: 'houston-tx', distance: '22 mi' },
    ],
    faqs: [
      {
        question: 'Do I need a permit to drill a water well in Klein, TX?',
        answer:
          'Usually not, for a standard residential well. Klein is inside the Harris-Galveston Subsidence District, and HGSD exempts wells with a casing diameter under five inches that serve only a single-family dwelling. Irrigation, commercial, and larger-diameter wells do require a permit. B-E Waterwell handles the permitting on any job that needs it.',
      },
      {
        question: 'Can I drill a well in Klein if my property is inside a MUD?',
        answer:
          'It depends on your district and your deed restrictions. Much of Klein sits inside Kleinwood MUD, Cypress Klein Utility District, or Harris County MUD 157, and those districts supply water to the home. Properties outside district boundaries — typically larger acreage — are the ones that rely on private wells. Call us and we will tell you what applies to your address.',
      },
      {
        question: 'How deep are water wells in the Klein area?',
        answer:
          'We were unable to pull past well-depth records specific to Klein, so we will not publish a number we cannot stand behind. What we can tell you is that wells in this area draw from the Chicot and Evangeline aquifers — Kleinwood MUD\'s own second well is completed in the Evangeline. Depth is site-specific: contact B-E Waterwell Services and we will assess your property before quoting.',
      },
      {
        question: 'Why does Klein have both well water and surface water?',
        answer:
          'In 1999 the State of Texas and the Harris-Galveston Subsidence District required districts in this region to convert from groundwater to surface water to slow land subsidence. That is why districts like Kleinwood now blend their own well production with surface water purchased through the North Harris County Regional Water Authority.',
      },
      {
        question: 'Does B-E Waterwell service existing wells in Klein?',
        answer:
          'Yes, and it is a large share of our work here. We replace pumps, install and size pressure tanks, and rehabilitate older wells that have lost yield. We replace pumps rather than repair them — a rebuilt pump on a well this depth tends to fail again sooner than it is worth.',
      },
    ],
  },
  {
    slug: 'jersey-village-tx',
    city: 'Jersey Village',
    state: 'TX',
    county: 'Harris County',
    isHQ: false,
    tagline: 'Water Well Drilling, Pump Replacement & Rehabilitation in Jersey Village, TX',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — water well drilling, pump replacement, and well rehabilitation in Jersey Village, TX. Serving northwest Harris County since 1979. TDLR licensed. Call (281) 448-4447.',
    intro:
      'Jersey Village is a good illustration of how quickly the water picture changes in northwest Harris County. Until October 2000 the city ran its own network of groundwater wells. Today it buys treated water from the City of Houston, with deep wells completed in the Evangeline and Chicot aquifers still making up part of the supply. Properties around the city limits that never connected to that system remain on private wells, and that is where B-E Waterwell works — new wells, pump replacement, pressure systems, and rehabilitation of older wells.',
    depthDisclaimer:
      'We were unable to pull past well-depth records for this area. Depth varies site to site, and we do not publish a figure we cannot source. Contact B-E Waterwell Services and we will discuss what to expect on your specific property.',
    waterDistricts: [
      {
        name: 'City of Jersey Village',
        detail:
          'Supplied its residents from a network of city-owned groundwater wells prior to October 2000. The city now contracts with the City of Houston for treated surface water, with deep wells in the Evangeline and Chicot aquifers still supplying part of the total.',
      },
      {
        name: 'West Harris County Regional Water Authority',
        detail:
          'Created by the Texas legislature in 2001 to cut groundwater use across western Harris County. Since 2010 the City of Houston surface-water supply point has been the Jersey Village Pump Station on Fairview Street north of FM 529.',
      },
    ],
    permitNote:
      'This area falls under the Harris-Galveston Subsidence District. A well with a casing diameter of less than five inches that serves only a single-family dwelling is exempt from HGSD permit requirements — which covers most residential wells. Irrigation, commercial, and larger-diameter wells do require a permit, and B-E Waterwell handles that filing as part of the job.',
    references: [
      { label: 'https://hgsubsidence.org/permits/', url: 'Harris-Galveston Subsidence District — permitting rules' },
      { label: 'https://www.twdb.texas.gov/groundwater/data/index.asp', url: 'TWDB Groundwater Data — look up filed well records near your address' },
      { label: 'https://www.whcrwa.com/about-whcrwa/groundwater-reduction-plan/', url: 'West Harris County Regional Water Authority — groundwater reduction plan' },
    ],
    nearbyAreas: [
      { city: 'Klein', slug: 'klein-tx', distance: '10 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '8 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '14 mi' },
      { city: 'Hockley', slug: 'hockley-tx', distance: '16 mi' },
      { city: 'Houston', slug: 'houston-tx', distance: '17 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '15 mi' },
    ],
    faqs: [
      {
        question: 'Can I drill a water well in Jersey Village?',
        answer:
          'On property inside the city system you are already on supplied water. Acreage around the city limits that never connected is where private wells make sense. HGSD exempts wells under five inches of casing serving a single-family dwelling from permitting, so a standard residential well usually does not need a permit.',
      },
      {
        question: 'Why did Jersey Village stop using its own wells?',
        answer:
          'The city moved to purchased City of Houston water in October 2000, and in 2001 the legislature created the West Harris County Regional Water Authority specifically to reduce groundwater pumping in this part of the county. Deep Evangeline and Chicot wells still contribute part of the supply.',
      },
      {
        question: 'How deep are wells around Jersey Village?',
        answer:
          'We were unable to pull past well-depth records specific to Jersey Village, and we will not publish a number we cannot source. Wells in this part of Harris County draw from the Chicot and Evangeline aquifers. Contact B-E Waterwell Services and we will assess your site before quoting.',
      },
      {
        question: 'Do you service existing wells in the Jersey Village area?',
        answer:
          'Yes. Pump replacement, pressure tank sizing and installation, and rehabilitation of wells that have lost yield make up most of our work in built-out parts of Harris County.',
      },
    ],
  },
  {
    slug: 'bridgeland-tx',
    city: 'Bridgeland',
    state: 'TX',
    county: 'Harris County',
    isHQ: false,
    tagline: 'Water Well Drilling, Pump Replacement & Rehabilitation near Bridgeland, TX',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — water well drilling, pump replacement, and well rehabilitation around Bridgeland and Cypress, TX. Serving northwest Harris County since 1979. Call (281) 448-4447.',
    intro:
      'Bridgeland is a master-planned community in the Cypress area of northwest Harris County, and water inside its boundaries is handled by an unusually large group of districts. That means most homes inside Bridgeland are on district water rather than private wells. The acreage surrounding the development is a different story — properties on the edges of Cypress and toward Hockley and Waller still rely on private wells, and that is where B-E Waterwell works.',
    depthDisclaimer:
      'We were unable to pull past well-depth records for this area. Depth varies site to site, and we do not publish a figure we cannot source. Contact B-E Waterwell Services and we will discuss what to expect on your specific property.',
    waterDistricts: [
      {
        name: 'Bridgeland Water Agency',
        detail:
          'A non-profit representing the districts inside the Bridgeland community — Harris County MUD 418, 419, 489, 490, 491, 492 and 493, plus Harris County WCID 157 and 158. If your address is inside Bridgeland, one of these districts supplies your water.',
      },
      {
        name: 'West Harris County Regional Water Authority',
        detail:
          'Created by the legislature in 2001 to reduce groundwater use in western Harris County. It met the Subsidence District mandate of more than 30 percent surface water by 2010, with a 60 percent target set for 2025. Bridgeland is among the Cypress-area communities converting to surface water.',
      },
    ],
    permitNote:
      'This area falls under the Harris-Galveston Subsidence District. A well with a casing diameter of less than five inches that serves only a single-family dwelling is exempt from HGSD permit requirements — which covers most residential wells. Irrigation, commercial, and larger-diameter wells do require a permit, and B-E Waterwell handles that filing as part of the job.',
    references: [
      { label: 'https://hgsubsidence.org/permits/', url: 'Harris-Galveston Subsidence District — permitting rules' },
      { label: 'https://www.twdb.texas.gov/groundwater/data/index.asp', url: 'TWDB Groundwater Data — look up filed well records near your address' },
      { label: 'https://bridgelandwater.com/', url: 'Bridgeland Water Agency' },
      { label: 'https://www.whcrwa.com/faq/', url: 'West Harris County Regional Water Authority — FAQ' },
    ],
    areaNote:
      'District boundaries in this area do not follow property lines in any obvious way, and whether a well is an option for you comes down to your specific address. If there is any confusion about which district covers your property, or whether a well makes sense for what you are trying to do, contact B-E Waterwell Services and we will sort it out with you.',
    nearbyAreas: [
      { city: 'Cypress', slug: 'cypress-tx', distance: '5 mi' },
      { city: 'Hockley', slug: 'hockley-tx', distance: '9 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '12 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '14 mi' },
      { city: 'Klein', slug: 'klein-tx', distance: '16 mi' },
      { city: 'Katy', slug: 'katy-tx', distance: '18 mi' },
    ],
    faqs: [
      {
        question: 'Can I have a water well in Bridgeland?',
        answer:
          'Inside the Bridgeland community your water comes from one of the districts represented by the Bridgeland Water Agency, so a private well is generally neither needed nor permitted by deed restriction. On surrounding acreage outside those district boundaries, private wells are common and we drill them regularly.',
      },
      {
        question: 'Which districts serve Bridgeland?',
        answer:
          'The Bridgeland Water Agency represents Harris County MUD 418, 419, 489, 490, 491, 492 and 493, along with Harris County WCID 157 and 158.',
      },
      {
        question: 'Is Bridgeland on well water or surface water?',
        answer:
          'It is converting. The West Harris County Regional Water Authority passed 30 percent surface water by 2010 under the Subsidence District mandate, with a 60 percent target for 2025, and Bridgeland is among the Cypress-area communities making that switch.',
      },
      {
        question: 'How deep are wells near Bridgeland?',
        answer:
          'We were unable to pull past well-depth records specific to this area, and we do not publish figures we cannot source. Wells around Cypress draw from the Chicot and Evangeline aquifers. Contact B-E Waterwell Services and we will assess your property.',
      },
    ],
  },
  {
    slug: 'cinco-ranch-tx',
    city: 'Cinco Ranch',
    state: 'TX',
    county: 'Fort Bend County',
    isHQ: false,
    tagline: 'Water Well Drilling, Pump Replacement & Rehabilitation near Cinco Ranch, TX',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — water well drilling, pump replacement, and well rehabilitation around Cinco Ranch and Katy, TX. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Cinco Ranch is a master-planned community in the Katy area, roughly 25 miles west of Houston, sitting mainly in Fort Bend County. Water inside the community runs through the Cinco municipal utility districts, which are under Fort Bend Subsidence District mandates to cut groundwater use. Outside those district boundaries — on the acreage west and south toward Fulshear and Brookshire — private wells remain the norm, and that is where B-E Waterwell works.',
    depthDisclaimer:
      'We were unable to pull past well-depth records for this area. Depth varies site to site, and we do not publish a figure we cannot source. Contact B-E Waterwell Services and we will discuss what to expect on your specific property.',
    waterDistricts: [
      {
        name: 'Cinco Municipal Utility Districts',
        detail:
          'A group of districts including Cinco MUD 1, 5, 10 and 12, plus Cinco Southwest MUD 1, which serves the southwest portion of the community. Cinco MUD 1 alone serves more than 32,000 residents.',
      },
      {
        name: 'North Fort Bend Water Authority',
        detail:
          'The authority created to deliver surface water to districts in this area so they can meet subsidence mandates. Cinco MUD 10 began receiving NFBWA surface water on June 30, 2026.',
      },
      {
        name: 'Fort Bend Subsidence District',
        detail:
          'Holds jurisdiction over groundwater in Fort Bend County and mandated a 30 percent reduction in groundwater use by 2015 and 60 percent by 2025. Irrigation is a major driver here — close to 40 percent of the roughly 2.1 billion gallons used annually in Cinco MUD 1 goes to irrigation.',
      },
    ],
    permitNote:
      'Cinco Ranch falls under the Fort Bend Subsidence District rather than Harris-Galveston, and permitting requirements are similar. B-E Waterwell handles the filing as part of every job that requires one.',
    references: [
      { label: 'https://www.twdb.texas.gov/groundwater/data/index.asp', url: 'TWDB Groundwater Data — look up filed well records near your address' },
      { label: 'https://www.cincomuds.org/', url: 'Cinco MUDs — district information' },
      { label: 'https://www.bgeinc.com/cinco-ranch-white-paper/', url: 'Cinco Ranch water and wastewater overview' },
    ],
    areaNote:
      'District boundaries in this area do not follow property lines in any obvious way, and whether a well is an option for you comes down to your specific address. If there is any confusion about which district covers your property, or whether a well makes sense for what you are trying to do, contact B-E Waterwell Services and we will sort it out with you.',
    nearbyAreas: [
      { city: 'Katy', slug: 'katy-tx', distance: '4 mi' },
      { city: 'Houston', slug: 'houston-tx', distance: '25 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '15 mi' },
      { city: 'Hockley', slug: 'hockley-tx', distance: '20 mi' },
      { city: 'Waller', slug: 'waller-tx', distance: '22 mi' },
      { city: 'Hempstead', slug: 'hempstead-tx', distance: '30 mi' },
    ],
    faqs: [
      {
        question: 'Can I drill a well in Cinco Ranch?',
        answer:
          'Inside the Cinco MUD boundaries your water is supplied by the district. On acreage outside those boundaries — west and south toward Fulshear and Brookshire — private wells are common. Permitting runs through the Fort Bend Subsidence District and we handle it.',
      },
      {
        question: 'Which subsidence district covers Cinco Ranch?',
        answer:
          'The Fort Bend Subsidence District. It mandated a 30 percent reduction in groundwater use by 2015 and 60 percent by 2025, which is why the Cinco districts are converting to surface water through the North Fort Bend Water Authority.',
      },
      {
        question: 'How deep are wells around Cinco Ranch?',
        answer:
          'We were unable to pull past well-depth records specific to this area and we will not publish a figure we cannot source. Wells in the west Houston corridor generally run deeper than the counties north of Houston. Contact B-E Waterwell Services for an assessment of your site.',
      },
      {
        question: 'Do you install irrigation wells near Katy?',
        answer:
          'Yes. Irrigation is a large share of water use in this corridor — close to 40 percent of annual use in Cinco MUD 1 alone — and irrigation wells on acreage outside district boundaries are a regular part of our work.',
      },
    ],
  },
  {
    slug: 'rivercrest-tx',
    city: 'Rivercrest',
    state: 'TX',
    county: 'Harris County',
    isHQ: false,
    tagline: 'Water Well Drilling, Pump Replacement & Rehabilitation in Rivercrest, Houston, TX',
    heroSubtitle: 'Drilling · Pumps · Rehabilitation',
    metaDescription:
      'B-E Waterwell Services — water well drilling, pump replacement, and well rehabilitation in Rivercrest, Houston, TX 77042. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Rivercrest is an enclave of large wooded estates in west Houston, inside Beltway 8, bordered by Buffalo Bayou to the north and Westheimer to the south. Lots here commonly run three to four acres, and that changes the water picture entirely — many properties carry both a City of Houston connection and a private well, with the well handling irrigation and landscape demand across acreage that municipal service was never priced for. B-E Waterwell drills, services, and rehabilitates those wells.',
    depthDisclaimer:
      'We were unable to pull past well-depth records for this area. Depth varies site to site, and we do not publish a figure we cannot source. Contact B-E Waterwell Services and we will discuss what to expect on your specific property.',
    waterDistricts: [
      {
        name: 'City of Houston',
        detail:
          'Provides public water service to the Rivercrest area. Many estates here run a dual system — city water to the house, private well for irrigation and landscape demand across the acreage.',
      },
      {
        name: 'Harris-Galveston Subsidence District',
        detail:
          'Holds groundwater jurisdiction over this part of Houston. Its single-family exemption is what makes a private residential well practical on a lot this size.',
      },
    ],
    permitNote:
      'This area falls under the Harris-Galveston Subsidence District. A well with a casing diameter of less than five inches that serves only a single-family dwelling is exempt from HGSD permit requirements — which covers most residential wells. Irrigation, commercial, and larger-diameter wells do require a permit, and B-E Waterwell handles that filing as part of the job.',
    references: [
      { label: 'https://hgsubsidence.org/permits/', url: 'Harris-Galveston Subsidence District — permitting rules' },
      { label: 'https://www.twdb.texas.gov/groundwater/data/index.asp', url: 'TWDB Groundwater Data — look up filed well records near your address' },
    ],
    nearbyAreas: [
      { city: 'Houston', slug: 'houston-tx', distance: '12 mi' },
      { city: 'Katy', slug: 'katy-tx', distance: '15 mi' },
      { city: 'Cypress', slug: 'cypress-tx', distance: '18 mi' },
      { city: 'Klein', slug: 'klein-tx', distance: '22 mi' },
      { city: 'Spring', slug: 'spring-tx', distance: '25 mi' },
      { city: 'Tomball', slug: 'tomball-tx', distance: '26 mi' },
    ],
    faqs: [
      {
        question: 'Can I have a private water well in Rivercrest?',
        answer:
          'Yes, and many properties here do. Lots in Rivercrest average close to four acres, and a dual arrangement — City of Houston water to the house, private well for irrigation — is common. HGSD exempts wells under five inches of casing serving a single-family dwelling from permitting.',
      },
      {
        question: 'Why would I want a well if I already have city water?',
        answer:
          'Irrigation. Watering three or four acres of established landscape on municipal water gets expensive quickly, and a private irrigation well is not subject to the same volumetric cost. It is the main reason wells exist on large lots inside the Beltway.',
      },
      {
        question: 'How deep are wells in the Rivercrest area?',
        answer:
          'We were unable to pull past well-depth records specific to Rivercrest and we do not publish numbers we cannot source. Wells in this part of Harris County draw from the Chicot and Evangeline aquifers. Contact B-E Waterwell Services and we will assess your property.',
      },
      {
        question: 'Do you service existing wells in west Houston?',
        answer:
          'Yes. Pump replacement, pressure tank sizing, and rehabilitation of older wells that have lost yield are a large part of what we do inside the Beltway.',
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
    localHighlights: [
      {
        title: 'The Historic Magnolia Depot',
        text: "Magnolia's downtown grew up around the rail line that reached the area in 1902. The original depot was relocated and restored in 2005, and the Magnolia Historical Society now runs it as a small museum and event space — home to the town's annual Depot Day festival every April.",
      },
      {
        title: "Unity Park's Wetlands Trail",
        text: 'The city park has 2.5 miles of walking trails through a wetlands area where alligators and red-shouldered hawks are regularly spotted, plus a splash pad, amphitheater, and skate park.',
      },
    ],
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
    localHighlights: [
      {
        title: 'Lake Conroe',
        text: 'The 19,640-acre reservoir on the West Fork San Jacinto River was completed in January 1973 by the San Jacinto River Authority and the City of Houston. It still functions as a water-supply reservoir alongside its reputation as a boating and fishing lake.',
      },
      {
        title: "Texas's Official Cajun Catfish Festival",
        text: 'Held every October in downtown Conroe, the festival was designated by the Texas Legislature in 1995 as the official Cajun catfish festival of the State of Texas.',
      },
    ],
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
    localHighlights: [
      {
        title: 'Renamed Tomball in 1907',
        text: "The town started out as a rail stop called Peck. It was renamed Tomball on December 2, 1907 for Thomas Henry Ball, the attorney who helped route the Trinity and Brazos Valley Railway through — and it's still Harris County's northernmost town.",
      },
      {
        title: 'German Heritage Festival, Twice a Year',
        text: 'Old downtown Tomball marks the German families who settled the area starting in 1840 with a festival the last weekend of March and an open-air German Christmas Market in December.',
      },
    ],
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
    localHighlights: [
      {
        title: 'Named for the MKT Railroad',
        text: "Originally called Cane Island, the town took its name from the Missouri-Kansas-Texas Railroad — 'the Katy' — after the line reached the site around 1893. The 1898 depot later became a museum run by the Katy Historical Society.",
      },
      {
        title: 'Rice Harvest Festival, 40+ Years Running',
        text: "Rice farming replaced cotton and corn as the area's dominant crop starting in 1901, and the city's Rice Harvest Festival — parade included — has run every October at the Historic Town Square for more than four decades.",
      },
    ],
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
    localHighlights: [
      {
        title: "Blue Bell Creameries' Hometown",
        text: "Brenham is where Blue Bell makes its ice cream. There's no factory walk-through anymore, but the Visitor Center, Observation Deck, and Ice Cream Parlor are open to visitors on weekdays.",
      },
      {
        title: "Maifest — Texas's Oldest Festival",
        text: 'What started as a German spring Volksfest became Maifest when the Brenham Fire Department took over organizing it in 1880. Held every May, it\'s widely recognized as the oldest continuously run festival in Texas.',
      },
    ],
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
