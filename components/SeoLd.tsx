import { getPageSeo } from "@/lib/page-seo";
import { SITE_URL } from "@/lib/site-url";

const BASE = SITE_URL;

/** Generic JSON-LD script tag. */
export function LdScript({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** BreadcrumbList for a page, from its crumbs in lib/page-seo.ts (content-plan §13). */
export function BreadcrumbLd({ seoKey }: { seoKey: string }) {
  const { crumbs } = getPageSeo(seoKey);
  if (crumbs.length < 2) return null;
  return (
    <LdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${BASE}${c.path}` })),
      }}
    />
  );
}

export { BASE as SITE_URL };
