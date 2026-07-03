import { SITE_URL } from '../../lib/siteConfig';

export interface Crumb {
  name: string;
  path: string; // e.g. '/services'
}

/** Renders BreadcrumbList structured data for the current page. */
export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
