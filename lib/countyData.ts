import { cities } from './cityData';

export interface CountyData {
  slug: string;
  /** Full name as it appears in body copy, e.g. "Montgomery County". */
  name: string;
  state: string;
  /** Groundwater Conservation District with jurisdiction. */
  district: string;
  districtNote: string;
  depthRange: string;
  tagline: string;
  metaDescription: string;
  intro: string;
  notes: string[];
  /** Neighborhood-level areas served, rendered as anchored sections. */
  areas?: { name: string; slug: string; body: string }[];
}

export const counties: CountyData[] = [
  {
    slug: 'montgomery-county-tx',
    name: 'Montgomery County',
    state: 'TX',
    district: 'Lone Star Groundwater Conservation District (LSGCD)',
    districtNote:
      'All wells in Montgomery County are registered through LSGCD. B-E Waterwell handles the filing as part of every job.',
    depthRange: '180–320 ft',
    tagline: 'Water Well Drilling & Service in Montgomery County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation across Montgomery County, TX — Magnolia, Conroe, The Woodlands, Montgomery, and Pinehurst. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Montgomery County is home base. B-E Waterwell Services has operated out of Magnolia since 1979, and more of our work happens in this county than anywhere else. Wells here typically run between 180 and 320 feet, though the northern and western reaches of the county can run deeper.',
    notes: [
      'Our shop is in Magnolia, so response times across the county are the fastest we offer.',
      'Groundwater in this county is generally good quality but carries enough iron to be worth planning for at installation.',
      'Lake Conroe area properties often sit on mixed-depth wells — we assess each site rather than assuming a county-wide number.',
    ],
  },
  {
    slug: 'harris-county-tx',
    name: 'Harris County',
    state: 'TX',
    district: 'Harris-Galveston Subsidence District (HGSD)',
    districtNote:
      'HGSD regulates well permitting in Harris County, and requirements are stricter than surrounding counties because of historic subsidence. We handle the permitting.',
    depthRange: '180–440 ft',
    tagline: 'Water Well Drilling & Service in Harris County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation across Harris County, TX — Tomball, Cypress, Spring, Humble, Kingwood, Hockley, and Houston. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Harris County covers more ground and more geological variation than anywhere else we work. Northwest Harris around Tomball and Cypress typically runs 180 to 360 feet. East Harris — Humble, Kingwood, and the Lake Houston corridor — commonly runs deeper, 240 to 440 feet.',
    notes: [
      'Permitting runs through HGSD and carries more documentation than other counties in our service area.',
      'East Harris County wells frequently encounter sulfur, which is treatable but worth knowing about before you drill.',
      'Depth varies more within this county than any other we serve — a quote based on a neighbor’s well is often wrong.',
    ],
    areas: [
      {
        name: 'Spring Branch',
        slug: 'spring-branch',
        body:
          'Spring Branch sits inside Beltway 8 in northwest Houston and is served by the City of Houston water system, so homes here are on municipal supply rather than private wells. Where wells still make sense is on the larger remaining lots along the bayou corridors, where irrigation demand across a big landscaped property is expensive to meet on metered city water. Wells serving a single-family dwelling with casing under five inches are exempt from Harris-Galveston Subsidence District permitting.',
      },
      {
        name: 'Memorial',
        slug: 'memorial',
        body:
          'The Memorial corridor is one of the few places inside Beltway 8 where groundwater is still part of the public supply. Memorial Villages Water Authority, founded in 1962, draws from wells completed in the Evangeline aquifer and blends that with surface water purchased from the City of Houston, producing roughly 1.3 billion gallons a year for Hedwig Village and the portions of Piney Point Village and Hunters Creek Village north of Buffalo Bayou. Private wells on the large estate lots through this corridor are typically irrigation wells running alongside a municipal connection.',
      },
      {
        name: 'Aldine',
        slug: 'aldine',
        body:
          'Aldine is unincorporated north Harris County, and water service here is a patchwork — municipal utility districts cover much of the developed area while properties outside district boundaries remain on private wells. Because the boundaries are not obvious from the street, the practical first step is confirming whether your address falls inside a district. We do that check as part of any site visit.',
      },
      {
        name: 'Pasadena',
        slug: 'pasadena',
        body:
          'Pasadena runs its own water system in southeastern Harris County, combining surface water purchased from the City of Houston with production from its own wells — the Cascade, Deepwater, Guthrie, Pansy, Red Bluff, Sycamore, Tulip and Westside wells among them, alongside ground and elevated storage across the city. Inside city service, homes are on municipal supply. Private well work here skews toward commercial and industrial sites and acreage on the outskirts rather than residential drilling.',
      },
    ],
  },
  {
    slug: 'waller-county-tx',
    name: 'Waller County',
    state: 'TX',
    district: 'LSGCD or Brazos Valley GCD, depending on location',
    districtNote:
      'Waller County straddles two districts. Which one has jurisdiction depends on where the property sits, and we determine that before filing.',
    depthRange: '160–300 ft',
    tagline: 'Water Well Drilling & Service in Waller County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Waller County, TX — Waller and Hempstead. Agricultural and rural residential wells. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Waller County is open country — farms, ranches, and rural residential acreage where city water was never an option. Wells here are typically shallower than the rest of our service area, commonly 160 to 300 feet, and agricultural demand drives a lot of the work.',
    notes: [
      'Jurisdiction is split between two groundwater districts, so permitting depends on the exact property location.',
      'Irrigation and livestock demand means sizing the pump to real daily draw matters more here than in a subdivision.',
      'Shallower wells generally mean lower drilling cost per job than eastern Harris County.',
    ],
  },
  {
    slug: 'grimes-county-tx',
    name: 'Grimes County',
    state: 'TX',
    district: 'Bluebonnet Groundwater Conservation District',
    districtNote:
      'Grimes County wells register through Bluebonnet GCD. We file on your behalf as part of the job.',
    depthRange: '200–400 ft',
    tagline: 'Water Well Drilling & Service in Grimes County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Grimes County, TX — Navasota and Anderson. Rural and ranch wells. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Grimes County sits at the edge of the Brazos Valley, and we have worked here for four decades. Properties are mostly rural — ranch land, homesteads, and acreage where a private well is the only practical water source.',
    notes: [
      'Conditions change across the county, so target depth is assessed per site rather than assumed.',
      'Ranch and livestock applications are common and need pumps sized for sustained draw, not peak household use.',
      'Older wells in this county are frequently good rehabilitation candidates rather than replacements.',
    ],
  },
  {
    slug: 'washington-county-tx',
    name: 'Washington County',
    state: 'TX',
    district: 'Bluebonnet Groundwater Conservation District',
    districtNote:
      'Washington County registers through Bluebonnet GCD. Permitting is handled as part of every drilling job.',
    depthRange: '200–450 ft',
    tagline: 'Water Well Drilling & Service in Washington County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Washington County, TX — Brenham, Chappell Hill, and Washington. Ranch and homestead wells. TDLR licensed. Call (281) 448-4447.',
    intro:
      'Washington County is ranch and homestead country around Brenham and Chappell Hill. Conditions differ from the Houston side of our service area, which changes both target depth and water chemistry.',
    notes: [
      'Conditions differ from Montgomery and Harris counties, so depth expectations do not transfer.',
      'Estate and acreage properties often need distribution planning beyond the wellhead itself.',
      'Water chemistry here differs from the Houston-side counties — worth testing at installation.',
    ],
  },
  {
    slug: 'fort-bend-county-tx',
    name: 'Fort Bend County',
    state: 'TX',
    district: 'Fort Bend Subsidence District',
    districtNote:
      'Fort Bend has its own subsidence district with permitting requirements similar to Harris County. We handle the filing.',
    depthRange: '250–500 ft',
    tagline: 'Water Well Drilling & Service in Fort Bend County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Fort Bend County, TX — Katy and the west Houston corridor. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Fort Bend County covers the west Houston growth corridor around Katy. Development has pushed into areas where city water has not followed, and wells here generally run deeper than the northern counties we serve.',
    notes: [
      'Subsidence district permitting applies, similar in scope to Harris County requirements.',
      'Deeper target depths mean higher-horsepower pumps than a typical Montgomery County residential well.',
      'New construction on acreage is a significant share of the work here.',
    ],
  },
  {
    slug: 'brazos-county-tx',
    name: 'Brazos County',
    state: 'TX',
    district: 'Brazos Valley Groundwater Conservation District',
    districtNote:
      'Brazos Valley GCD handles registration for this county. Filing is included in every drilling job.',
    depthRange: '250–500 ft',
    tagline: 'Water Well Drilling & Service in Brazos County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in south Brazos County, TX — Millican and surrounding rural areas. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'We serve the southern end of Brazos County, including Millican and the surrounding rural acreage. Conditions here differ from the Houston-side counties, and target depths reflect that.',
    notes: [
      'Multiple options depending on depth and required yield.',
      'Predominantly rural residential and agricultural applications.',
      'Site assessment matters here — formation depth varies meaningfully across short distances.',
    ],
  },
  {
    slug: 'burleson-county-tx',
    name: 'Burleson County',
    state: 'TX',
    district: 'Brazos Valley Groundwater Conservation District',
    districtNote:
      'Burleson County registers through Brazos Valley GCD. We file as part of the job.',
    depthRange: '250–500 ft',
    tagline: 'Water Well Drilling & Service in Burleson County, TX',
    metaDescription:
      'Water well drilling, pump replacement, and rehabilitation in Burleson County, TX — Somerville and the Lake Somerville area. TDLR licensed since 1979. Call (281) 448-4447.',
    intro:
      'Burleson County is the western edge of our service area, centered on Somerville and the lake. Rural wells, pump work, and rehabilitation on aging systems make up most of what we do here.',
    notes: [
      'Lake Somerville area properties are frequently seasonal or secondary residences with intermittent-use wells.',
      'Rehabilitation is often the better call than replacement on older wells in this county.',
      'Same conditions and permitting district as neighboring Brazos County.',
    ],
  },
];

export function getCountyBySlug(slug: string): CountyData | undefined {
  return counties.find((c) => c.slug === slug);
}

/** Cities we serve within a given county, drawn from the existing city data. */
export function getCitiesInCounty(countyName: string) {
  return cities
    .filter((c) => c.county === countyName)
    .map((c) => ({ city: c.city, slug: c.slug, isHQ: c.isHQ }));
}

/** Map a county name as written in body copy to its page path. */
export const COUNTY_PATHS: Record<string, string> = counties.reduce(
  (acc, c) => ({ ...acc, [c.name]: `/service-area/county/${c.slug}` }),
  {} as Record<string, string>
);
