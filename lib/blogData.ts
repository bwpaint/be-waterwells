export interface BlogPost {
  title: string;
  slug: string;
  categorySlug: string;
  date: string;
  excerpt: string;
  published?: boolean;
}

export const blogPosts: BlogPost[] = [
  // ── Water Well Drilling ──
  {
    title: 'How Much Does Water Well Drilling Cost in the Houston area? (2025 Guide)',
    slug: 'water-well-drilling-cost-north-houston-2025',
    categorySlug: 'water-well-drilling',
    date: '2025-04-10',
    excerpt: "Residential waterwell cost in Montgomery and Harris counties comes down to depth, casing, and pump spec. Here's exactly what drives it and what to watch out for.",
  },
  {
    title: 'Switching from City Water to a Private Well in Houston TX',
    slug: 'switching-city-water-private-well-houston',
    categorySlug: 'water-well-drilling',
    date: '2025-03-22',
    excerpt: 'Thinking about going off the municipal water grid? Here is the real ROI calculation for the Houston area homeowners with acreage.',
    published: false,
  },
  {
    title: 'How Deep Does a Water Well Need to Be in Montgomery County TX?',
    slug: 'water-well-depth-montgomery-county-tx',
    categorySlug: 'water-well-drilling',
    date: '2025-02-18',
    excerpt: 'Montgomery County wells typically reach 180–320 ft to the Jasper Aquifer. Harris County often requires 220–440 ft. Here is the full breakdown by area.',
  },
  {
    title: 'Do You Need a Permit to Drill a Well in Texas? Step-by-Step Guide',
    slug: 'water-well-permit-texas-process-guide',
    categorySlug: 'water-well-drilling',
    date: '2025-01-30',
    excerpt: 'Yes — every new well in Texas requires a Groundwater Conservation District permit. Here is the exact process for Montgomery and Harris counties.',
  },
  // ── Emergency Well Services ──
  {
    title: 'Well Stopped Working? Here Is What to Check First (Texas Guide)',
    slug: 'well-stopped-working-what-to-check-texas',
    categorySlug: 'emergency-well-services',
    date: '2025-04-05',
    excerpt: 'Before you call, run through these 5 checks. Most no-water emergencies have a simple fix — here is how to find it in 10 minutes.',
  },
  {
    title: 'No Water After a Power Outage or Storm in the Houston area',
    slug: 'no-water-after-storm-power-outage-north-houston',
    categorySlug: 'emergency-well-services',
    date: '2025-03-01',
    excerpt: 'Storm knocked out your well? The cause is almost always one of three things. Here is how to diagnose it and who to call.',
  },
  {
    title: 'Well Pump Emergency Repair vs. Replacement: The Cost Guide',
    slug: 'well-pump-emergency-repair-vs-replacement-cost-guide',
    categorySlug: 'emergency-well-services',
    date: '2025-02-10',
    excerpt: 'Is it worth repairing a 15-year-old pump at 2am, or should you replace it? Here is the honest cost breakdown.',
  },
  // ── Well Pump Services ──
  {
    title: 'Signs Your Well Pump Is Failing (Before You Lose All Water)',
    slug: 'signs-well-pump-failing-north-houston',
    categorySlug: 'well-pump-services',
    date: '2025-04-15',
    excerpt: 'Fluctuating pressure, air spurts, and high electric bills are all red flags. Catch these early and you can avoid a midnight emergency call.',
  },
  {
    title: 'How Long Do Submersible Well Pumps Last in Texas?',
    slug: 'submersible-well-pump-lifespan-texas',
    categorySlug: 'well-pump-services',
    date: '2025-03-08',
    excerpt: "The average submersible pump lasts 8–15 years. Texas's heat, sandy soil, and aquifer chemistry all affect that number. Here's what to expect.",
  },
  {
    title: 'Well Pump Pulling Sand: Causes and Fixes in the Houston area',
    slug: 'well-pump-pulling-sand-causes-fixes-north-houston',
    categorySlug: 'well-pump-services',
    date: '2025-02-20',
    excerpt: 'Sandy, gritty water from your well is a warning sign. In Montgomery County soils it usually means one of three things — here is how to diagnose it.',
  },
  {
    title: 'Constant Pressure Well System vs. Standard Pump: Which Is Right for You?',
    slug: 'constant-pressure-well-system-vs-standard-pump-comparison',
    categorySlug: 'well-pump-services',
    date: '2025-01-14',
    excerpt: 'City-like water pressure from a private well is possible. Here is a side-by-side cost and performance comparison for the Houston area homeowners.',
  },
  // ── Water Well Systems ──
  {
    title: 'Why Is My Well Pump Short Cycling? (And How to Fix It)',
    slug: 'well-pump-short-cycling-causes-fix-texas',
    categorySlug: 'water-well-systems',
    date: '2025-04-20',
    excerpt: "If your pump kicks on and off every few seconds, your pressure tank is the likely culprit. Here's the full diagnostic guide.",
  },
  {
    title: 'What Size Generator Do I Need for My Well Pump in Texas?',
    slug: 'generator-size-well-pump-texas-guide',
    categorySlug: 'water-well-systems',
    date: '2025-03-15',
    excerpt: 'Sizing a generator for a well pump is not complicated if you know the starting and running watts. Here is the math and the recommended models.',
  },
  {
    title: 'How to Keep Your Well Running During a Power Outage (Hurricane Season Guide)',
    slug: 'keep-well-running-power-outage-hurricane-season-houston',
    categorySlug: 'water-well-systems',
    date: '2025-05-02',
    excerpt: 'Before hurricane season, there are three options for well backup power. Here is the cost and complexity breakdown for each.',
  },
  {
    title: 'Pressure Tank Replacement Cost in Texas: What to Expect',
    slug: 'pressure-tank-replacement-cost-texas',
    categorySlug: 'water-well-systems',
    date: '2025-02-05',
    excerpt: 'Pressure tank replacement cost in the Houston area depends on tank size and labor. Here is what drives it and the red flags to avoid.',
  },
  // ── Well Maintenance ──
  {
    title: 'How Often Should You Service Your Water Well in Texas?',
    slug: 'how-often-service-water-well-texas',
    categorySlug: 'well-maintenance',
    date: '2025-04-28',
    excerpt: 'The Texas Department of Licensing recommends annual inspection. Here is a practical maintenance calendar for the Houston area well owners.',
    published: false,
  },
  {
    title: 'Water Well Inspection for Home Buyers in Texas: Complete Guide',
    slug: 'water-well-inspection-home-buyers-texas-guide',
    categorySlug: 'well-maintenance',
    date: '2025-03-18',
    excerpt: 'FHA, VA, and USDA loans all have specific well inspection requirements. Here is what buyers, sellers, and realtors need to know in the Houston area.',
    published: false,
  },
  {
    title: 'Well Rehabilitation vs. Drilling a New Well: The Cost Comparison',
    slug: 'well-rehabilitation-vs-new-well-drilling-cost-comparison',
    categorySlug: 'well-maintenance',
    date: '2025-02-12',
    excerpt: 'When a well starts losing pressure or yield, the choice between rehab and replacement can save or cost you thousands. Here is how we help clients decide.',
  },
  {
    title: 'Iron Bacteria in Texas Water Wells: Causes, Signs, and Treatment',
    slug: 'iron-bacteria-texas-water-well-treatment',
    categorySlug: 'well-maintenance',
    date: '2025-01-22',
    excerpt: 'Reddish-brown slime, sulfur smell, and stained fixtures are the telltale signs. Iron bacteria is common in the Houston area groundwater — here is how to treat it.',
  },
];

export function getBlogPostsByCategory(categorySlug: string, count = 4): BlogPost[] {
  return blogPosts
    .filter((p) => p.categorySlug === categorySlug && p.published !== false)
    .slice(0, count);
}

export function getRecentBlogPosts(count = 4): BlogPost[] {
  return [...blogPosts]
    .filter((p) => p.published !== false)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts]
    .filter((p) => p.published !== false)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
