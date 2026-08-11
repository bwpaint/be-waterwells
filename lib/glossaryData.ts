/**
 * Waterwell Glossary of Terms.
 *
 * Term list was derived from the site's own copy — every entry here (other than
 * the well-type entries requested by the client) appears somewhere in the
 * service, county, or city pages. Definitions are plain-English first, technical
 * second, because the audience is a homeowner or property manager, not a driller.
 *
 * `href` links the term to the service page that covers it, so the glossary
 * feeds internal link equity outward rather than sitting as a dead end.
 */

export type GlossaryCategory =
  | 'Well Types'
  | 'Well Construction'
  | 'Pumps & Water Systems'
  | 'Water Quality & Rehabilitation'
  | 'Regulation & Permitting'
  | 'Measurement & Testing';

export interface GlossaryTerm {
  /** Display name. */
  term: string;
  /** Anchor id — deep-linkable as /resources/waterwell-glossary#pressure-tank */
  slug: string;
  /** Alternate names or abbreviations, shown after the term. */
  aka?: string[];
  category: GlossaryCategory;
  definition: string;
  /** Related service page, when one exists. */
  href?: string;
  hrefLabel?: string;
}

export const CATEGORY_ORDER: GlossaryCategory[] = [
  'Well Types',
  'Well Construction',
  'Pumps & Water Systems',
  'Water Quality & Rehabilitation',
  'Regulation & Permitting',
  'Measurement & Testing',
];

export const glossaryTerms: GlossaryTerm[] = [
  // ─── Well Types ──────────────────────────────────────────────
  {
    term: 'Residential Water Well',
    slug: 'residential-water-well',
    category: 'Well Types',
    definition:
      'A private well serving a single home. In the Houston area these are usually four to five inch cased wells with a submersible pump and a pressure tank. Because the casing is under five inches and serves one dwelling, most are exempt from Harris-Galveston Subsidence District permitting.',
    href: '/services/residential',
    hrefLabel: 'Residential services',
  },
  {
    term: 'Commercial Water Well',
    slug: 'commercial-water-well',
    category: 'Well Types',
    definition:
      'A well serving a business, agricultural operation, or other non-residential property. Larger casing, higher yield requirements, and — unlike most residential wells — a permit from the governing groundwater or subsidence district.',
    href: '/services/commercial',
    hrefLabel: 'Commercial & agricultural',
  },
  {
    term: 'Irrigation Water Well',
    slug: 'irrigation-water-well',
    category: 'Well Types',
    definition:
      'A well drilled specifically to supply landscape, pasture, crop, or turf watering rather than drinking water. Sized for sustained high-volume delivery, and often the most economical option on acreage where metered municipal water would be prohibitive.',
    href: '/services/commercial',
    hrefLabel: 'Irrigation wells',
  },
  {
    term: 'Public Water Supply Well',
    slug: 'public-water-supply-well',
    category: 'Well Types',
    definition:
      'A well that supplies a regulated public water system — one serving at least 25 people or 15 connections. These carry TCEQ design, siting, sanitary control, and monitoring requirements well beyond a private well, including approved plans and ongoing water quality reporting.',
  },
  {
    term: 'Community Water Supply System',
    slug: 'community-water-supply-system',
    category: 'Well Types',
    definition:
      'A water system serving a fixed population year-round — a subdivision, mobile home park, or small municipality. Typically combines one or more supply wells with storage, disinfection, and a distribution network under TCEQ oversight.',
  },
  {
    term: 'Fire Protection Water Well',
    slug: 'fire-protection-water-well',
    category: 'Well Types',
    definition:
      'A high-volume well dedicated to fire suppression — feeding sprinkler systems, standpipes, or fire storage tanks. Sized to sustain a required flow rate for a required duration, which usually means a larger borehole and pump than a domestic well of the same depth.',
  },
  {
    term: 'Water Plant & Distribution System',
    slug: 'water-plant-distribution-system',
    category: 'Well Types',
    definition:
      'The infrastructure between the well and the tap: ground and elevated storage, booster pumps, treatment and disinfection, pressure maintenance, and the buried mains that carry water to each connection.',
  },
  {
    term: 'Airlift Water Well System',
    slug: 'airlift-water-well-system',
    aka: ['Air lift'],
    category: 'Well Types',
    definition:
      'A method of lifting water by injecting compressed air into the well, aerating the column so it becomes light enough to rise. Used both as a development technique to clean a new well and as a pumping method where a conventional pump is impractical.',
  },
  {
    term: 'Submersible System',
    slug: 'submersible-system',
    category: 'Pumps & Water Systems',
    definition:
      'The standard modern well setup: a sealed pump and motor assembly lowered into the water and pushing water up the drop pipe, rather than a surface pump attempting to draw water up. Quieter, more efficient, and capable of far greater depth than suction-based alternatives.',
    href: '/services/residential',
    hrefLabel: 'Pump services',
  },
  {
    term: 'Hand Pump System',
    slug: 'hand-pump-system',
    category: 'Pumps & Water Systems',
    definition:
      'A manually operated pump that requires no electricity. Usually installed alongside an electric pump as an emergency backup for extended outages, on shallow wells where the static water level is within reach of the pump mechanism.',
  },
  {
    term: 'Solar Water Well System',
    slug: 'solar-water-well-system',
    category: 'Pumps & Water Systems',
    definition:
      'A well pump driven by photovoltaic panels rather than grid power, usually pumping into a storage tank during daylight so supply is available around the clock. Common on remote acreage, pasture, and livestock watering where running power to the wellhead is costly.',
  },

  // ─── Well Construction ───────────────────────────────────────
  {
    term: 'Borehole',
    slug: 'borehole',
    category: 'Well Construction',
    definition:
      'The drilled hole itself, before casing and equipment are installed. Its diameter determines what casing and pump will fit and how much annular space is available for grout.',
  },
  {
    term: 'Casing',
    slug: 'casing',
    aka: ['Well casing'],
    category: 'Well Construction',
    definition:
      'The pipe lining the borehole. It holds the hole open, seals out shallow contaminated water, and houses the pump. Most Houston-area residential wells use Schedule 40 PVC. Casing diameter also determines permit exemption status under the subsidence districts.',
    href: '/services/water-well-drilling',
    hrefLabel: 'Well drilling',
  },
  {
    term: 'Well Screen',
    slug: 'well-screen',
    aka: ['Screen'],
    category: 'Well Construction',
    definition:
      'The slotted or perforated section of casing set across the water-bearing zone. It lets water in while holding back formation sand. Slot size is matched to the formation — too large and the well produces sand, too small and it clogs.',
  },
  {
    term: 'Annulus',
    slug: 'annulus',
    category: 'Well Construction',
    definition:
      'The ring-shaped space between the outside of the casing and the wall of the borehole. Sealing it correctly is what prevents surface water and shallow contamination from travelling down alongside the casing into the aquifer.',
  },
  {
    term: 'Grout / Pressure Cement',
    slug: 'grout',
    aka: ['Pressure cementing'],
    category: 'Well Construction',
    definition:
      'Cement or bentonite pumped into the annulus to seal it. Pressure cementing forces the seal upward from depth, which produces a more reliable barrier than pouring from the surface. This is the single most important step for protecting a well from contamination.',
  },
  {
    term: 'Production Sand',
    slug: 'production-sand',
    category: 'Well Construction',
    definition:
      'Graded sand placed in the annulus around the screen. It filters formation material before it reaches the screen and stabilises the zone. If it shifts or settles over time, a well can begin producing sand or lose yield.',
  },
  {
    term: 'Float Shoe',
    slug: 'float-shoe',
    category: 'Well Construction',
    definition:
      'A one-way valve fitted at the bottom of the casing string. It lets the casing be floated into place and allows cement to be pumped down and up the annulus without flowing back in.',
  },
  {
    term: 'Liner',
    slug: 'liner',
    category: 'Well Construction',
    definition:
      'A secondary length of casing set inside an existing well, usually to seal off a damaged or corroded section without abandoning the entire well.',
  },
  {
    term: 'Wellhead',
    slug: 'wellhead',
    aka: ['Well head'],
    category: 'Well Construction',
    definition:
      'Everything at the surface where the well terminates — the top of the casing, cap, discharge piping, and electrical connections. Its condition is the first thing worth inspecting when a well develops problems.',
  },
  {
    term: 'Sanitary Cap',
    slug: 'sanitary-cap',
    aka: ['Well cap'],
    category: 'Well Construction',
    definition:
      'A sealed, vermin-proof cover on top of the casing with a screened vent. It keeps insects, rodents, and surface water out while still allowing the well to breathe as the water level moves.',
  },
  {
    term: 'Pitless Adapter',
    slug: 'pitless-adapter',
    category: 'Well Construction',
    definition:
      'A fitting that carries the water line out through the side of the casing below the frost line, so the connection stays buried and protected instead of sitting in an above-ground or pit enclosure.',
  },
  {
    term: 'Drop Pipe',
    slug: 'drop-pipe',
    category: 'Well Construction',
    definition:
      'The pipe running from the submersible pump up to the wellhead, carrying both the water and the weight of the pump. Its material and rating have to match the setting depth.',
  },
  {
    term: 'Torque Arrestor',
    slug: 'torque-arrestor',
    category: 'Well Construction',
    definition:
      'A rubber-and-metal collar fitted above the pump to absorb the twisting force at start-up and keep the pump centred so it does not bang against the casing.',
  },
  {
    term: 'Rotary Drilling',
    slug: 'rotary-drilling',
    aka: ['Mud rotary'],
    category: 'Well Construction',
    definition:
      'The standard method for water wells in this region: a rotating bit cuts the hole while drilling fluid carries cuttings to the surface and holds the borehole open. Fast and well suited to the sand and clay sequences beneath the Houston area.',
    href: '/services/water-well-drilling',
    hrefLabel: 'Well drilling',
  },
  {
    term: 'Well Development',
    slug: 'well-development',
    category: 'Well Construction',
    definition:
      'The step after drilling and before the pump goes in — surging, airlifting, or pumping the well hard to pull fine material out of the formation. A properly developed well produces clearer water and more yield for its whole life. Skipping it is a common shortcut.',
  },
  {
    term: 'Multi-Zone Completion',
    slug: 'multi-zone-completion',
    category: 'Well Construction',
    definition:
      'A well screened across more than one water-bearing zone so it draws from several formations at once. Used where no single zone yields enough on its own.',
  },
  {
    term: 'Plugging & Abandonment',
    slug: 'plugging-abandonment',
    category: 'Well Construction',
    definition:
      'Permanently sealing a well that is no longer in use. Texas requires it — an open abandoned well is both a physical hazard and a direct pathway for surface contamination into the aquifer.',
  },

  // ─── Pumps & Water Systems ───────────────────────────────────
  {
    term: 'Submersible Pump',
    slug: 'submersible-pump',
    category: 'Pumps & Water Systems',
    definition:
      'The pump that sits down in the well, below water level, pushing water to the surface. Most residential wells in this area use a half to one-and-a-half horsepower unit depending on depth and household demand.',
    href: '/services/residential',
    hrefLabel: 'Pump replacement',
  },
  {
    term: 'Pressure Tank',
    slug: 'pressure-tank',
    category: 'Pumps & Water Systems',
    definition:
      'The tank that stores water under pressure so your pump does not have to start every time a tap opens. Correct sizing is what determines pump lifespan — an undersized or failed tank is the most common cause of a prematurely burned-out pump.',
    href: '/services/residential',
    hrefLabel: 'Pressure tank systems',
  },
  {
    term: 'Bladder Tank',
    slug: 'bladder-tank',
    aka: ['Captive air tank'],
    category: 'Pumps & Water Systems',
    definition:
      'A pressure tank with a flexible internal bladder separating air from water. Because the two never touch, it does not become waterlogged the way an older conventional tank does.',
  },
  {
    term: 'Pre-Charge',
    slug: 'pre-charge',
    aka: ['Precharge'],
    category: 'Pumps & Water Systems',
    definition:
      'The air pressure set inside a pressure tank before any water enters it, normally a couple of PSI below the pump cut-in pressure. Wrong pre-charge causes short-cycling even when every component is otherwise healthy.',
  },
  {
    term: 'Waterlogged Tank',
    slug: 'waterlogged',
    category: 'Pumps & Water Systems',
    definition:
      'A pressure tank that has lost its air cushion and filled with water. The pump then starts and stops rapidly because there is no stored pressure to draw down. A classic cause of sudden pump failure.',
  },
  {
    term: 'Pressure Switch',
    slug: 'pressure-switch',
    category: 'Pumps & Water Systems',
    definition:
      'The switch that starts the pump when pressure falls to the cut-in setting and stops it at cut-out. Usually a small grey or black box on the pipe near the pressure tank, and one of the most common failure points in the whole system.',
  },
  {
    term: 'Control Box',
    slug: 'control-box',
    category: 'Pumps & Water Systems',
    definition:
      'The enclosure housing the starting components for a single-phase submersible motor. Vulnerable to power surges — a single voltage spike during a storm can destroy one instantly.',
  },
  {
    term: 'Check Valve',
    slug: 'check-valve',
    category: 'Pumps & Water Systems',
    definition:
      'A one-way valve that stops water draining back down the well when the pump shuts off. A failed check valve causes pressure loss and makes the pump cycle far more than it should.',
  },
  {
    term: 'Snifter Valve',
    slug: 'snifter-valve',
    category: 'Pumps & Water Systems',
    definition:
      'A small valve that admits a metered amount of air into a conventional pressure tank on each pump cycle, replacing the air cushion that gradually dissolves into the water. Capping one will waterlog the tank.',
  },
  {
    term: 'Air Volume Control',
    slug: 'air-volume-control',
    aka: ['AVC'],
    category: 'Pumps & Water Systems',
    definition:
      'The counterpart to a snifter valve — it bleeds off excess air so a conventional tank keeps the right balance of air to water.',
  },
  {
    term: 'Constant Pressure System',
    slug: 'constant-pressure-system',
    category: 'Pumps & Water Systems',
    definition:
      'A system that varies pump speed to hold steady household pressure regardless of how many fixtures are running, instead of cycling between a cut-in and cut-out point. Noticeably better performance in homes with several bathrooms or irrigation zones.',
    href: '/services/residential',
    hrefLabel: 'Residential systems',
  },
  {
    term: 'Variable Frequency Drive',
    slug: 'variable-frequency-drive',
    aka: ['VFD'],
    category: 'Pumps & Water Systems',
    definition:
      'The controller that makes a constant pressure system work, adjusting motor speed continuously to match demand. Also reduces start-stop wear, which is what actually kills most pumps.',
  },
  {
    term: 'Short-Cycling',
    slug: 'short-cycling',
    aka: ['Short cycling'],
    category: 'Pumps & Water Systems',
    definition:
      'A pump switching on and off rapidly instead of running in steady cycles. Nearly always caused by a waterlogged tank, wrong pre-charge, or a failing pressure switch — and it will destroy a pump far faster than continuous running.',
  },
  {
    term: 'Cavitation',
    slug: 'cavitation',
    category: 'Pumps & Water Systems',
    definition:
      'Vapour bubbles forming and collapsing inside a pump when it cannot get enough water. It sounds like gravel rattling and physically erodes the impellers. Usually a sign the water level has dropped below what the pump setting assumed.',
  },
  {
    term: 'Pump Curve',
    slug: 'pump-curve',
    category: 'Measurement & Testing',
    definition:
      'The manufacturer chart showing how much water a pump delivers at a given pressure and depth. Matching the curve to the well and the household is the difference between a properly sized system and one that fails early.',
  },
  {
    term: 'Transfer Switch',
    slug: 'transfer-switch',
    category: 'Pumps & Water Systems',
    definition:
      'A switch that safely isolates the well pump circuit from the grid so a generator can power it during an outage. It is what makes generator backup legal and safe — never use extension cords or a suicide cord to backfeed a pump.',
    href: '/services/residential',
    hrefLabel: 'Generator prep kits',
  },
  {
    term: 'Generator Prep Kit',
    slug: 'generator-prep-kit',
    category: 'Pumps & Water Systems',
    definition:
      'A pre-wired transfer switch and outlet installed at the well circuit so a portable or standby generator can be connected in minutes when the power goes out. B-E supplies and installs the prep kit; the generator itself comes from your electrician or supplier.',
    href: '/services/residential',
    hrefLabel: 'Generator prep kits',
  },

  // ─── Water Quality & Rehabilitation ──────────────────────────
  {
    term: 'Well Rehabilitation',
    slug: 'well-rehabilitation',
    category: 'Water Quality & Rehabilitation',
    definition:
      'Restoring yield and water quality in an existing well rather than drilling a new one — cleaning the screen and formation of the mineral scale and bacterial growth that build up over years. Far less expensive than replacement when the well itself is structurally sound.',
    href: '/services/well-rehabilitation',
    hrefLabel: 'Well rehabilitation',
  },
  {
    term: 'Biofouling',
    slug: 'biofouling',
    category: 'Water Quality & Rehabilitation',
    definition:
      'Bacterial slime accumulating on the screen and in the formation around a well, progressively choking off the water it can produce. One of the most common reasons an older well loses yield without anything actually breaking.',
  },
  {
    term: 'Iron Bacteria',
    slug: 'iron-bacteria',
    category: 'Water Quality & Rehabilitation',
    definition:
      'Naturally occurring bacteria that feed on dissolved iron and produce a reddish-brown slime. Not a health hazard, but it stains fixtures and laundry, causes odour, and clogs screens and plumbing.',
  },
  {
    term: 'Encrustation',
    slug: 'encrustation',
    category: 'Water Quality & Rehabilitation',
    definition:
      'Mineral scale — usually calcium or iron — building up on and in the well screen until water can no longer pass freely. The mineral counterpart to biofouling, and often present alongside it.',
  },
  {
    term: 'Shock Chlorination',
    slug: 'shock-chlorination',
    aka: ['Chlorination'],
    category: 'Water Quality & Rehabilitation',
    definition:
      'Disinfecting a well by introducing chlorine at proper concentration, letting it stand, then flushing it out. Used after any work that opens the well, and to address bacterial contamination. Concentration matters — too weak accomplishes nothing, too strong damages equipment.',
  },
  {
    term: 'Acidizing',
    slug: 'acidizing',
    category: 'Water Quality & Rehabilitation',
    definition:
      'A rehabilitation method using acid to dissolve mineral scale from the screen and surrounding formation. Used where encrustation rather than bacteria is the limiting factor.',
  },
  {
    term: 'Surging',
    slug: 'surging',
    category: 'Water Quality & Rehabilitation',
    definition:
      'Moving water forcefully in and out of the formation to break loose accumulated material. Used both in developing a new well and in rehabilitating an old one.',
  },
  {
    term: 'Hardness',
    slug: 'hardness',
    category: 'Water Quality & Rehabilitation',
    definition:
      'The dissolved calcium and magnesium content of water. Hard water is not a health concern but causes scale in fixtures and water heaters and reduces soap effectiveness. Common in Houston-area groundwater.',
  },
  {
    term: 'Sulfur',
    slug: 'sulfur',
    aka: ['Hydrogen sulfide'],
    category: 'Water Quality & Rehabilitation',
    definition:
      'Dissolved hydrogen sulfide, responsible for the rotten-egg smell some wells produce. Treatable, and more frequently encountered on the east side of Harris County than the northwest.',
  },
  {
    term: 'Coliform Bacteria',
    slug: 'coliform',
    category: 'Water Quality & Rehabilitation',
    definition:
      'A group of bacteria used as the standard indicator of whether surface contamination has reached a well. Their presence does not necessarily mean illness-causing organisms are present, but it does mean the well is not properly sealed.',
  },

  // ─── Regulation & Permitting ─────────────────────────────────
  {
    term: 'TDLR',
    slug: 'tdlr',
    aka: ['Texas Department of Licensing and Regulation'],
    category: 'Regulation & Permitting',
    definition:
      'The state agency licensing water well drillers and pump installers in Texas. Every licensed driller must file a report on every well completed, which is how the state well record database is built.',
  },
  {
    term: 'Groundwater Conservation District',
    slug: 'groundwater-conservation-district',
    aka: ['GCD'],
    category: 'Regulation & Permitting',
    definition:
      'A local district that regulates groundwater production within its boundaries — registration, permitting, spacing, and production limits. Which district governs your property depends entirely on the county, and requirements vary widely between them.',
  },
  {
    term: 'Subsidence District',
    slug: 'subsidence-district',
    aka: ['HGSD', 'Harris-Galveston Subsidence District'],
    category: 'Regulation & Permitting',
    definition:
      'The regulatory body governing groundwater withdrawal in Harris and Galveston counties, created because heavy pumping caused measurable ground sinking. Fort Bend County has its own equivalent. Wells with casing under five inches serving a single-family dwelling are generally exempt from permitting.',
  },
  {
    term: 'Subsidence',
    slug: 'subsidence',
    category: 'Regulation & Permitting',
    definition:
      'Ground surface sinking caused by removing more groundwater than an aquifer can replace, compacting the clays between water-bearing sands. It is why the Houston region regulates groundwater production more tightly than most of Texas — and it is not reversible.',
  },
  {
    term: 'Municipal Utility District',
    slug: 'municipal-utility-district',
    aka: ['MUD'],
    category: 'Regulation & Permitting',
    definition:
      'A local political subdivision that provides water and sewer service to a defined area, common across suburban Harris and Fort Bend counties. If your property sits inside a MUD, the district supplies your water — which is usually the deciding factor in whether a private well is an option at all.',
    href: '/service-area/county/harris-county-tx',
    hrefLabel: 'Areas we serve',
  },
  {
    term: 'Regional Water Authority',
    slug: 'water-authority',
    category: 'Regulation & Permitting',
    definition:
      'An entity created to deliver surface water to districts within its boundaries so they can meet subsidence-district reduction mandates. This is the mechanism behind the ongoing groundwater-to-surface-water conversion across western and northern Harris County.',
  },
  {
    term: 'Well Permit',
    slug: 'well-permit',
    category: 'Regulation & Permitting',
    definition:
      'Authorisation from the governing groundwater or subsidence district to drill or operate a well. Whether you need one depends on location, casing diameter, and use. B-E handles the filing as part of any job that requires it.',
  },

  // ─── Measurement & Testing ───────────────────────────────────
  {
    term: 'Aquifer',
    slug: 'aquifer',
    category: 'Measurement & Testing',
    definition:
      'A body of water-bearing rock or sediment capable of yielding usable quantities of water to a well. The Houston area draws principally from a stacked sequence of sand and clay formations of differing depth and character.',
  },
  {
    term: 'Water Table',
    slug: 'water-table',
    category: 'Measurement & Testing',
    definition:
      'The upper surface of the saturated zone — the depth below which the ground is fully saturated with water. In the outcrop areas northwest of Houston it generally sits within roughly ten to thirty feet of the surface.',
  },
  {
    term: 'Static Water Level',
    slug: 'static-water-level',
    category: 'Measurement & Testing',
    definition:
      'The depth to water in a well when the pump has been off long enough for the level to stabilise. The baseline every other measurement is compared against, and the number that reveals whether a well is declining over time.',
  },
  {
    term: 'Drawdown',
    slug: 'drawdown',
    category: 'Measurement & Testing',
    definition:
      'How far the water level in a well falls while the pump is running. Excessive drawdown means the well cannot supply water as fast as the pump is removing it — a sign of either an oversized pump or a well losing capacity.',
  },
  {
    term: 'Yield',
    slug: 'yield',
    aka: ['Well yield'],
    category: 'Measurement & Testing',
    definition:
      'How much water a well can reliably produce, measured in gallons per minute. Yield is a property of the well and formation, not of the pump — fitting a bigger pump to a low-yield well does not produce more water, it just pumps the well down.',
  },
  {
    term: 'GPM',
    slug: 'gpm',
    aka: ['Gallons per minute'],
    category: 'Measurement & Testing',
    definition:
      'The standard unit for water flow. A typical single-family home needs somewhere between six and twelve GPM depending on fixture count; irrigation and livestock demand can be considerably higher.',
  },
  {
    term: 'Flow Test',
    slug: 'flow-test',
    aka: ['Yield test'],
    category: 'Measurement & Testing',
    definition:
      'Pumping a well at a controlled rate while measuring drawdown and recovery, to establish what it can sustainably produce. Standard practice on a new well, and the honest way to answer "how good is this well?" before a purchase.',
  },
  {
    term: 'Recharge',
    slug: 'recharge',
    category: 'Measurement & Testing',
    definition:
      'Water moving from the surface down into an aquifer, replenishing what is withdrawn. Where recharge is slower than production over the long term, water levels decline and — in this region — subsidence follows.',
  },
];
