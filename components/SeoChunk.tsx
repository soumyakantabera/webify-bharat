import { Ban, Building2, Globe } from "lucide-react";
import { getPageSeo, type PageSeo } from "@/lib/page-seo";
import { citiesIndexSeo, cityPageSeo } from "@/lib/page-seo-cities";
import { IconKey, IconRupee } from "./icons";

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

function HomeClaim({ answer }: { answer: string }) {
  return (
    <section className="section claim-wrap">
      <div className="container">
        <div className="claim-panel">
          <div className="claim-top">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-icon">
                  <IconKey size={13} />
                </span>
                What Webify Bharat is
              </div>
              <h2>
                Own the customer. <span>Stop renting</span> the lead.
              </h2>
              <p className="seo-answer">{answer}</p>
            </div>
            <div className="claim-zero">
              <p className="claim-zero-kicker">
                <span className="claim-zero-icon">
                  <IconRupee size={15} />
                </span>
                Organic lead
              </p>
              <strong>₹0</strong>
              <p>Extra cost per Google, Maps or WhatsApp enquiry.</p>
            </div>
          </div>
          <dl className="key-facts claim-facts">
            <div>
              <span className="trust-icon">
                <Building2 size={15} strokeWidth={2.4} aria-hidden />
              </span>
              <div>
                <dt>What it is</dt>
                <dd>Digital operations partner for Indian MSMEs</dd>
              </div>
            </div>
            <div>
              <span className="trust-icon">
                <IconKey size={15} />
              </span>
              <div>
                <dt>You own</dt>
                <dd>Domain, WhatsApp number, customer list</dd>
              </div>
            </div>
            <div>
              <span className="trust-icon">
                <Globe size={15} strokeWidth={2.4} aria-hidden />
              </span>
              <div>
                <dt>How they arrive</dt>
                <dd>Google, Maps and WhatsApp — no per-lead invoice</dd>
              </div>
            </div>
          </dl>
          <div className="claim-not">
            <div className="claim-not-copy">
              <div className="claim-not-label">
                <span className="claim-not-icon">
                  <Ban size={13} strokeWidth={2.4} aria-hidden />
                </span>
                Not this
              </div>
              <h3>Rent on people who already wanted you</h3>
            </div>
            <div className="claim-pills">
              <span className="claim-pill">Justdial packs</span>
              <span className="claim-pill">IndiaMART rent</span>
              <span className="claim-pill">Aggregator commission</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeoChunk({ pageKey }: { pageKey: string }) {
  const seo = resolveSeo(pageKey);
  if (pageKey === "home") {
    return (
      <>
        <PageJsonLd seo={seo} />
        <HomeClaim answer={seo.answer} />
      </>
    );
  }
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
