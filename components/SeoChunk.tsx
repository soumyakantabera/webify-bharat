import { getPageSeo, type PageSeo } from "@/lib/page-seo";
import { citiesIndexSeo, cityPageSeo } from "@/lib/page-seo-cities";

const BASE = "https://webify-bharat.vercel.app";

function resolveSeo(pageKey: string): PageSeo {
  if (pageKey === "cities") return citiesIndexSeo;
  if (pageKey.startsWith("city:")) {
    return cityPageSeo(pageKey.slice(5)) ?? getPageSeo("home");
  }
  return getPageSeo(pageKey);
}

function PageJsonLd({ seo }: { seo: PageSeo }) {
  const isArticle = seo.path.startsWith("/blog/") && seo.path !== "/blog";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": isArticle ? ["WebPage", "Article"] : "WebPage",
        "@id": `${BASE}${seo.path}#webpage`,
        url: `${BASE}${seo.path}`,
        name: seo.title,
        headline: seo.title,
        description: seo.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${BASE}/#org` },
        keywords: seo.keywords.join(", "),
        abstract: seo.answer || seo.description,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".seo-answer", ".key-facts", "h1"],
        },
        author: { "@id": `${BASE}/#org` },
        publisher: { "@id": `${BASE}/#org` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: seo.crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: `${BASE}${c.path}`,
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function KeyFacts({ facts }: { facts: PageSeo["facts"] }) {
  if (!facts.length) return null;
  return (
    <section className="section key-facts-wrap">
      <div className="container">
        <dl className="key-facts">
          {facts.map((f) => (
            <div key={f.term}>
              <dt>{f.term}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function SeoChunk({ pageKey }: { pageKey: string }) {
  const seo = resolveSeo(pageKey);
  return (
    <>
      <PageJsonLd seo={seo} />
      {seo.answer ? (
        <section className="section" style={{ paddingBottom: 0, paddingTop: 20 }}>
          <div className="container">
            <p className="seo-answer">{seo.answer}</p>
          </div>
        </section>
      ) : null}
      <KeyFacts facts={seo.facts} />
    </>
  );
}
