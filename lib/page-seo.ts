import { getBlock } from "./blocks";
import { SITE_URL } from "./site-url";
import { getStage } from "./offers";
import { getReachService } from "./reach";
import { getIndustryPage } from "./industries";
import { citiesIndexSeo, cityPageSeo } from "./page-seo-cities";
import { getPost } from "./posts";
import { getRegistration } from "./registrations";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  crumbs: { name: string; path: string }[];
  facts: { term: string; value: string }[];
  answer: string;
};

const brand = "Webify Bharat";

function page(
  title: string,
  description: string,
  path: string,
  keywords: string[],
  crumbs: PageSeo["crumbs"],
  facts: PageSeo["facts"],
  answer = "",
): PageSeo {
  return {
    title: title.includes(brand) ? title : `${title} | ${brand}`,
    description,
    path,
    keywords,
    crumbs: [{ name: "Home", path: "/" }, ...crumbs],
    facts,
    answer,
  };
}

export const PAGE_SEO: Record<string, PageSeo> = {
  home: page(
    "Custom Business Software, All in One Place | Webify Bharat",
    "Custom software for your whole business — website, billing, payments, WhatsApp, CRM and marketing in one place. Easy to use, your brand, your data.",
    "/",
    ["Webify Bharat", "custom software for small business India", "all in one business software India", "one-stop business software", "easy business software for MSME", "MSME CRM ERP", "WhatsApp Business API", "website design India", "AI visibility"],
    [],
    [
      { term: "What it is", value: "Custom software and marketing for Indian MSMEs, built and run for you" },
      { term: "You own", value: "Domain, brand, content, data and accounts" },
      { term: "Pricing", value: "Setup from ₹5,000, plans from ₹3,000/month, no lock-in" },
      { term: "Contact", value: "WhatsApp — replies within a few hours, 7 days a week" },
    ],
  ),
  "what-we-do": page(
    "What we do: strategy, systems, marketing and care",
    "Four things Webify Bharat does for your business: paid strategy (Compass), your own software (11 blocks), marketing on Google, maps, ads and AI (Reach), and care built into every plan.",
    "/what-we-do",
    ["what Webify Bharat does", "custom software MSME", "digital strategy India", "SEO and AI visibility"],
    [{ name: "What we do", path: "/what-we-do" }],
    [],
  ),
  organise: page(
    "Organise: one custom system for a running business",
    "Your business already works. We map how you sell, collect and follow up — then build one custom system around it, connected to the tools you already use.",
    "/solutions/organise",
    ["custom system for small business", "replace Excel and WhatsApp chaos", "MSME CRM India"],
    [{ name: "Solutions", path: "/solutions/organise" }, { name: "Organise", path: "/solutions/organise" }],
    [],
  ),
  launch: page(
    "Launch: set up a new business from scratch",
    "Registrations, brand, website, payments, WhatsApp and books — a new business set up and ready on launch day, with our fee and government fees shown separately.",
    "/solutions/launch",
    ["start a business India", "GST Udyam registration help", "new business website and payments"],
    [{ name: "Solutions", path: "/solutions/launch" }, { name: "Launch", path: "/solutions/launch" }],
    [],
  ),
  grow: page(
    "Grow: more customers, and keep more of what they pay",
    "Direct ordering, dealer portals, international payments, automation, dashboards and marketing on Google, maps, ads and AI — for businesses already selling.",
    "/solutions/grow",
    ["grow small business online India", "direct ordering restaurant", "dealer portal", "international payments Stripe India"],
    [{ name: "Solutions", path: "/solutions/grow" }, { name: "Grow", path: "/solutions/grow" }],
    [],
  ),
  "how-we-work": page(
    "How we work: no templates, a process that starts with you",
    "From one WhatsApp message to a live system: free discovery chat, private prototype walkthrough, written scope and price, design, build, launch and monthly care.",
    "/how-we-work",
    ["how Webify Bharat works", "custom website process", "software project process India"],
    [{ name: "How we work", path: "/how-we-work" }],
    [],
  ),
  industries: page(
    "Industries: retail, restaurants, clinics, coaching, manufacturing, exporters, real estate",
    "Every trade works differently, so every Webify Bharat build does too. Custom websites, stores, payments, WhatsApp systems and CRM/ERP for retail, restaurants, clinics, coaching, manufacturers, exporters and real estate.",
    "/industries",
    ["software for small business India", "custom website by industry", "restaurant ordering system", "clinic appointment booking", "dealer portal"],
    [{ name: "Industries", path: "/industries" }],
    [],
  ),
  prototypes: page(
    "Prototype Room: we've already built for businesses like yours",
    "Eight working prototypes — restaurant ordering, clinic booking, coaching admissions, retail, dealer portal, CRM/ERP, employee portal and exporter payments. Ask on WhatsApp for a walkthrough; your build is customised for your business.",
    "/prototypes",
    ["software prototype small business", "restaurant ordering demo", "clinic booking demo", "CRM ERP demo India"],
    [{ name: "Prototypes", path: "/prototypes" }],
    [],
  ),
  systems: page(
    "Systems: the 11 building blocks, tailored for your business",
    "Website, store, payments, WhatsApp, CRM/ERP, staff portal, business email, GST invoicing, registrations, dashboards and integrations — eleven blocks Webify Bharat tailors and combines for one business.",
    "/systems",
    ["custom software for small business India", "CRM ERP for MSME", "website and payments setup", "WhatsApp Business API setup"],
    [{ name: "Systems", path: "/systems" }],
    [],
  ),
  strategy: page(
    "Strategy: Webify Compass — know what to build before you spend",
    "Paid strategy sessions, digital audits and roadmaps for Indian MSMEs: build vs buy, Zoho or Odoo vs Google or Microsoft vs custom, with budget ranges. Session ₹5,000, audit ₹15,000, roadmap ₹30,000.",
    "/strategy",
    ["digital strategy small business India", "Zoho vs Odoo vs custom", "business software roadmap"],
    [{ name: "Strategy", path: "/strategy" }],
    [],
  ),
  marketing: page(
    "Marketing: get found on Google, maps, ads and AI — Webify Reach",
    "SEO, Google and Meta ads, local maps listings, AI visibility and WhatsApp campaigns for Indian MSMEs. Honest work, no guaranteed rankings, ad spend paid to the platforms directly.",
    "/marketing",
    ["SEO for small business India", "Google Business Profile management", "AI visibility ChatGPT business", "Meta ads for local business"],
    [{ name: "Marketing", path: "/marketing" }],
    [],
  ),
  integrations: page(
    "Integrations: use our stack, or keep yours — Zoho, Odoo, Tally, Google, Microsoft",
    "Five ways we build: adapt our prototype, from scratch, on open source, the budget route on Zoho or Odoo, or around the tools you already use. White-label on every plan.",
    "/integrations",
    ["Zoho setup India", "Odoo implementation small business", "Tally integration", "Google Workspace setup"],
    [{ name: "Integrations", path: "/integrations" }],
    [],
  ),
  pricing: page(
    "Pricing: setup from ₹5,000, plans from ₹3,000/month, no lock-in",
    "Four stages — Starter, Business, Command and Custom — with clear limits, add-ons and over-limit charges you approve first. Third-party costs shown separately. Estimate your scope and get an exact quote on WhatsApp.",
    "/pricing",
    ["website and software pricing India", "monthly plan small business software", "CRM pricing India"],
    [{ name: "Pricing", path: "/pricing" }],
    [
      { term: "Starter", value: "₹3,000/month + ₹5,000 setup" },
      { term: "Business", value: "₹7,500/month + ₹10,000 setup" },
      { term: "Command", value: "₹18,000/month + ₹15,000 setup" },
      { term: "Custom", value: "from ₹40,000/month + from ₹50,000 setup" },
    ],
  ),
  about: page(
    "About Webify Bharat: no two businesses should get the same website",
    "Webify Bharat builds and runs custom software for Indian businesses — websites, stores, payments, WhatsApp, CRM/ERP and marketing — fully remote over WhatsApp, from Kolkata.",
    "/about",
    ["about Webify Bharat", "custom software company India", "small business software Kolkata"],
    [{ name: "About", path: "/about" }],
    [],
  ),
  blog: page(
    "Blog: practical guides for Indian business owners",
    "Plain-language guides on getting found, getting paid, WhatsApp, GST and running a small business on one system.",
    "/blog",
    ["small business guide India", "UPI payment gateway guide", "WhatsApp Business API guide", "Google Business Profile guide"],
    [{ name: "Blog", path: "/blog" }],
    [],
  ),
  contact: page(
    "Contact: the fastest way to reach us is WhatsApp",
    "WhatsApp Webify Bharat with your business type, city and what you need. We reply within a few hours, 7 days a week.",
    "/contact",
    ["contact Webify Bharat", "Webify Bharat WhatsApp"],
    [{ name: "Contact", path: "/contact" }],
    [],
  ),
  faq: page(
    "FAQ: questions about custom work, pricing, ownership and support",
    "Answers on templates, prototypes, what you own, how you pay, limits, lock-in, registrations, integrations, marketing and support.",
    "/faq",
    ["Webify Bharat FAQ", "custom website questions", "monthly plan questions"],
    [{ name: "FAQ", path: "/faq" }],
    [],
  ),
  registrations: page(
    "Registrations: GST, Udyam and IEC filed for you",
    "We file GST, Udyam and IEC for Indian businesses, and coordinate UK VAT and EU IOSS with a registered agent. Our fee and the government fee are shown separately.",
    "/registrations",
    ["GST registration service", "Udyam registration help", "IEC registration India"],
    [{ name: "Registrations", path: "/registrations" }],
    [],
  ),
  "registrations-charges": page(
    "Registrations: charges outside our fee",
    "Government fees, gateway fees, WhatsApp charges, licences and other costs billed by someone else — listed before you pay.",
    "/registrations/charges",
    ["registration government fees", "additional charges"],
    [{ name: "Registrations", path: "/registrations" }, { name: "Charges", path: "/registrations/charges" }],
    [],
  ),
  terms: page("Terms of service", "The terms for Webify Bharat's monthly plans, custom builds, registrations and marketing services, in plain language.", "/terms", ["Webify Bharat terms"], [{ name: "Terms", path: "/terms" }], []),
  privacy: page("Privacy policy", "What Webify Bharat collects, why, how long we keep it and your rights under India's Digital Personal Data Protection Act — including WhatsApp conversations.", "/privacy", ["Webify Bharat privacy", "DPDP"], [{ name: "Privacy", path: "/privacy" }], []),
  refund: page("Cancellations and refunds", "How cancelling a monthly plan works, what happens to your data, and when fees can and can't be refunded.", "/refund", ["Webify Bharat refund policy"], [{ name: "Refunds", path: "/refund" }], []),
};

const ANSWERS: Record<string, string> = {
  home: "Webify Bharat builds and runs your own business software — and markets your business — so every tool you use actually works for you.",
};

export function getPageSeo(key: string): PageSeo {
  if (PAGE_SEO[key]) {
    const s = PAGE_SEO[key];
    return { ...s, answer: ANSWERS[key] ?? s.answer };
  }

  if (key.startsWith("block:")) {
    const b = getBlock(key.slice(6));
    if (b) {
      return page(
        `${b.name}: ${b.headline}`,
        `${b.becomes}. ${b.oneLiner} ${b.example}`,
        `/systems/${b.slug}`,
        [b.name, ...b.capabilities.slice(0, 4)],
        [{ name: "Systems", path: "/systems" }, { name: b.name, path: `/systems/${b.slug}` }],
        [],
      );
    }
  }

  if (key.startsWith("reach:")) {
    const r = getReachService(key.slice(6));
    if (r) {
      return page(
        `${r.name}: ${r.headline}`,
        `${r.promise} ${r.whatWeDo.slice(0, 4).join(", ")}. ${r.caveat}`,
        `/marketing/${r.slug}`,
        [r.kicker, r.short, "small business India"],
        [{ name: "Marketing", path: "/marketing" }, { name: r.short, path: `/marketing/${r.slug}` }],
        [],
      );
    }
  }

  if (key.startsWith("stage:")) {
    const st = getStage(key.slice(6));
    if (st) {
      return page(
        `${st.name} plan: ${st.tagline} ${st.monthly}/month`,
        `${st.name}: ${st.monthly}/month and ${st.setup} setup. ${st.bestFor}. Limits, included features, add-ons and how to start.`,
        `/pricing/${st.slug}`,
        [`${st.name} plan`, "small business software pricing India"],
        [{ name: "Pricing", path: "/pricing" }, { name: st.name, path: `/pricing/${st.slug}` }],
        [],
      );
    }
  }

  if (key.startsWith("industry:")) {
    const ind = getIndustryPage(key.slice(9));
    if (ind) {
      return page(
        ind.seoTitle,
        ind.seoDescription,
        `/industries/${ind.slug}`,
        ind.keywords,
        [{ name: "Industries", path: "/industries" }, { name: ind.name, path: `/industries/${ind.slug}` }],
        [],
      );
    }
  }

  if (key === "cities") return citiesIndexSeo;
  if (key.startsWith("city:")) {
    const c = cityPageSeo(key.slice(5));
    if (c) return c;
  }

  if (key.startsWith("blog:")) {
    const post = getPost(key.slice(5));
    if (post) {
      return page(
        post.title,
        post.excerpt,
        `/blog/${post.slug}`,
        [post.title, "small business India"],
        [{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }],
        [],
      );
    }
  }

  if (key.startsWith("registration:")) {
    const r = getRegistration(key.slice(13));
    if (r) {
      return page(
        `${r.name}: filed for you`,
        `${r.forWhom} Filed on ${r.portal}. Our fee ${r.ourFee}; government fee ${r.govFee}, paid in your name.`,
        `/registrations/${r.slug}`,
        [r.name, `${r.short} registration help`],
        [{ name: "Registrations", path: "/registrations" }, { name: r.name, path: `/registrations/${r.slug}` }],
        [],
      );
    }
  }

  const fallback = PAGE_SEO.home;
  return { ...fallback, answer: ANSWERS[key] ?? fallback.answer };
}

export function seoHead(key: string) {
  const s = getPageSeo(key);
  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { name: "keywords", content: s.keywords.join(", ") },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:url", content: `${SITE_URL}${s.path}` },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${s.path}` }],
  };
}

export function pageMetadata(key: string) {
  const s = getPageSeo(key);
  const base = SITE_URL;
  return {
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: `${base}${s.path}` },
    openGraph: {
      title: s.title,
      description: s.description,
      url: `${base}${s.path}`,
      locale: "en_IN" as const,
      type: "website" as const,
      siteName: "Webify Bharat",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: s.title,
      description: s.description,
    },
    robots: { index: true, follow: true },
  };
}
