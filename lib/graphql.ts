/**
 * WPGraphQL client placeholder
 *
 * When xCloud WordPress is configured:
 * 1. Set NEXT_PUBLIC_WPGRAPHQL_ENDPOINT in .env.local
 * 2. Replace the static cityData imports with queries below
 * 3. Optionally add ISR: export const revalidate = 3600;
 */

const endpoint = process.env.NEXT_PUBLIC_WPGRAPHQL_ENDPOINT;

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  if (!endpoint) {
    throw new Error(
      'NEXT_PUBLIC_WPGRAPHQL_ENDPOINT is not set. ' +
        'Add it to .env.local when your xCloud WordPress instance is ready.'
    );
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    next: { revalidate: 3600 }, // ISR — revalidate every hour (Next.js extended fetch)
  } as any);

  if (!res.ok) {
    throw new Error(`WPGraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(`WPGraphQL errors: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}

// ── Example query stubs (activate when CMS is live) ─────────────

// export const GET_ALL_PAGES = `
//   query GetAllPages {
//     pages(first: 100) {
//       nodes { slug title content date modified }
//     }
//   }
// `;

// export const GET_PAGE_BY_SLUG = `
//   query GetPageBySlug($slug: String!) {
//     pageBy(uri: $slug) {
//       title content excerpt featuredImage { node { sourceUrl altText } }
//       seo { metaDesc title }
//     }
//   }
// `;
