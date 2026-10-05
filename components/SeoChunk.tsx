import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Ban,
  Building2,
  CircleDollarSign,
  Clock,
  FileCheck,
  Globe,
  Languages,
  LayoutGrid,
  Lock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";
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

const HEADLINES: Record<string, { kicker: string; title: ReactNode }> = {
  "/": {
    kicker: "What Webify Bharat is",
    title: (
      <>
        Own the customer. <span>Stop renting</span> the lead.
      </>
    ),
  },
  "/systems": {
    kicker: "Services",
    title: (
      <>
        One stack. <span>You own it.</span>
      </>
    ),
  },
  "/industries": {
    kicker: "Industries",
    title: (
      <>
        Same system. <span>Different leak.</span>
      </>
    ),
  },
  "/cities": {
    kicker: "Cities",
    title: (
      <>
        Every capital. <span>Your city.</span>
      </>
    ),
  },
  "/prototypes": {
    kicker: "Work",
    title: (
      <>
        Systems, <span>not mockups.</span>
      </>
    ),
  },
  "/pricing": {
    kicker: "Pricing",
    title: (
      <>
        Pay to build. <span>Not per lead.</span>
      </>
    ),
  },
  "/about": {
    kicker: "About",
    title: (
      <>
        India. MSME. <span>Your login.</span>
      </>
    ),
  },
  "/blog": {
    kicker: "Insights",
    title: (
      <>
        Guides owners <span>actually ask for.</span>
      </>
    ),
  },
  "/contact": {
    kicker: "Contact",
    title: (
      <>
        Five lines. <span>Then we talk.</span>
      </>
    ),
  },
};

function iconFor(term: string): LucideIcon {
  const key = term.toLowerCase();
  if (key.includes("own") || key.includes("number")) return IconKey as unknown as LucideIcon;
  if (key.includes("lead") || key.includes("price") || key.includes("tax") || key.includes("rupee") || key.includes("\u20b9")) return CircleDollarSign;
  if (key.includes("whatsapp") || key.includes("chat") || key.includes("call")) return MessageCircle;
  if (key.includes("map") || key.includes("city") || key.includes("local")) return MapPin;
  if (key.includes("language") || key.includes("hindi")) return Languages;
  if (key.includes("lock") || key.includes("retainer")) return Lock;
  if (key.includes("gst") || key.includes("invoice") || key.includes("compl")) return FileCheck;
  if (key.includes("retail") || key.includes("store")) return Store;
  if (key.includes("proof") || key.includes("publish") || key.includes("fit")) return ShieldCheck;
  if (key.includes("start") || key.includes("week") || key.includes("first")) return Clock;
  if (key.includes("stack") || key.includes("what") || key.includes("offer") || key.includes("entity")) return Building2;
  if (key.includes("who") || key.includes("for") || key.includes("team")) return Users;
  if (key.includes("google") || key.includes("site") || key.includes("web")) return Globe;
  return LayoutGrid;
}

function FactIcon({ term }: { term: string }) {
  const Icon = iconFor(term);
  return <Icon size={15} strokeWidth={2.4} aria-hidden />;
}

function ClaimPanel({ seo, pageKey }: { seo: PageSeo; pageKey: string }) {
  const preset = HEADLINES[seo.path];
  const crumb = seo.crumbs[seo.crumbs.length - 1]?.name ?? "This page";
  const kicker = preset?.kicker ?? crumb;
  const title = preset?.title ?? (
    <>
      {crumb}. <span>In short.</span>
    </>
  );
  const notFact = seo.facts.find((f) => /^not\b/i.test(f.term));
  const facts = seo.facts.filter((f) => f !== notFact);
  const pills = notFact ? notFact.value.split(/,\s*/).filter(Boolean) : [];
  const showZero = pageKey === "home";

  return (
    <section className="section claim-wrap">
      <div className="container">
        <div className="claim-panel">
          <div className={showZero ? "claim-top" : "claim-top claim-top-plain"}>
            <div>
              <div className="eyebrow">
                <span className="eyebrow-icon">
                  <IconKey size={13} />
                </span>
                {kicker}
              </div>
              <h2>{title}</h2>
              {seo.answer ? <p className="seo-answer">{seo.answer}</p> : null}
            </div>
            {showZero ? (
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
            ) : null}
          </div>
          {facts.length ? (
            <dl className={`key-facts claim-facts claim-facts-${Math.min(facts.length, 4)}`}>
              {facts.map((f) => (
                <div key={f.term}>
                  <span className="trust-icon">
                    <FactIcon term={f.term} />
                  </span>
                  <div>
                    <dt>{f.term}</dt>
                    <dd>{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          ) : null}
          {notFact ? (
            <div className="claim-not">
              <div className="claim-not-copy">
                <div className="claim-not-label">
                  <span className="claim-not-icon">
                    <Ban size={13} strokeWidth={2.4} aria-hidden />
                  </span>
                  {notFact.term}
                </div>
                <h3>
                  {pageKey === "home"
                    ? "Rent on people who already wanted you"
                    : pills.length > 1
                      ? notFact.term
                      : notFact.value}
                </h3>
              </div>
              {pills.length > 1 ? (
                <div className="claim-pills">
                  {pills.map((pill) => (
                    <span className="claim-pill" key={pill}>
                      {pill}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
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
  const hasClaim = Boolean(seo.answer) || seo.facts.length > 0;
  return (
    <>
      <PageJsonLd seo={seo} />
      {hasClaim ? <ClaimPanel seo={seo} pageKey={pageKey} /> : null}
    </>
  );
}
