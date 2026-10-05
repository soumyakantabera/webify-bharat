import { getBlock } from "./blocks";
import { getStage } from "./offers";
import { getReachService } from "./reach";
import { getIndustryPage } from "./industries";
import { citiesIndexSeo, cityPageSeo } from "./page-seo-cities";
import { getPost } from "./site";

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
    "Webify Bharat | Custom software & marketing for Indian MSMEs",
    "Webify Bharat builds and runs your own business software — and markets your business — so every tool you use actually works for you. Websites, payments, WhatsApp, CRM/ERP, SEO and AI visibility, made for your business.",
    "/",
    ["Webify Bharat", "custom software for small business India", "MSME CRM ERP", "WhatsApp Business API", "website design India", "AI visibility"],
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
    "About Webify Bharat — MSME digital operations, India",
    "Webify Bharat is a digital operations studio for Indian MSMEs. We build owned websites, WhatsApp and UPI — not lead directories or US SaaS wrappers.",
    "/about",
    ["Webify Bharat", "digital agency India MSME", "about Webify Bharat"],
    [{ name: "About", path: "/about" }],
    [
      { term: "Entity", value: "Webify Bharat — India, MSME digital operations" },
      { term: "Offer", value: "Website, WhatsApp, UPI, analytics, GST-ready ops" },
      { term: "Fit", value: "Family-run and GST-registered firms, not only startups" },
    ],
  ),
  blog: page(
    "Insights: websites, UPI, WhatsApp, GST and local SEO in India",
    "Practical guides for Indian business owners: Justdial vs own site, Zomato commission, WhatsApp API, Google Business Profile, Razorpay vs Cashfree, Hindi websites.",
    "/blog",
    ["MSME blog India", "local SEO India", "UPI guide", "WhatsApp Business API guide"],
    [{ name: "Insights", path: "/blog" }],
    [
      { term: "For", value: "Owners who already sell in India" },
      { term: "Not", value: "Series-B growth-hacking theatre" },
    ],
  ),
  contact: page(
    "Contact Webify Bharat — WhatsApp consult for Indian businesses",
    "Brief us in five lines: what you sell, city, what is breaking. First working conversation is free. Website, UPI, WhatsApp, analytics.",
    "/contact",
    ["contact Webify Bharat", "website developer India WhatsApp"],
    [{ name: "Contact", path: "/contact" }],
    [
      { term: "First call", value: "Free working conversation — we say if we are the fit" },
      { term: "Brief", value: "Trade, city, leak, link or photo of the current setup" },
    ],
  ),
};

const ANSWERS: Record<string, string> = {
  home: "Webify Bharat builds and runs your own business software — and markets your business — so every tool you use actually works for you.",
  services: "Webify Bharat services are the Indian MSME stack: website design, e-commerce on your domain, UPI payment gateway, WhatsApp Business API, analytics and GST-ready invoices. Start with the leak, then connect the next piece.",
  pricing: "Webify Bharat pricing starts at ₹9,999 (Launch), ₹19,999 (Growth) and ₹39,999 (Command), all inclusive of 18% GST. You pay to build the system, not per organic lead.",
  about: "Webify Bharat is an India-based digital operations studio for MSMEs. We are not a lead-selling directory and not a US SaaS wrapper. Stack choices settle in INR and leave the customer list on your login.",
  blog: "Webify Bharat insights answer live Indian search demand: website cost, Justdial vs own site, WhatsApp API, UPI vs personal QR, Google Business Profile, Razorpay vs Cashfree, Hindi websites, Bing Places.",
  contact: "Contact Webify Bharat with five lines: what you sell, city, what is breaking, and a link or photo. The first working conversation is free; WhatsApp is the door.",
};

const POST_SEO: Record<string, { keywords: string[]; answer: string }> = {
  "website-growth": {
    keywords: ["business website India", "website that gets enquiries"],
    answer: "An Indian business website earns its keep when a stranger understands the offer, trusts you are real, and can WhatsApp or pay without hunting.",
  },
  "payment-trends": {
    keywords: ["UPI checkout", "digital payments MSME"],
    answer: "Indian customers pay UPI first. A named gateway with instant confirmation beats a personal QR for GST and refunds.",
  },
  "whatsapp-automation": {
    keywords: ["WhatsApp automation India", "WhatsApp flows SME"],
    answer: "WhatsApp automation for SMEs is welcome menus, reminders, receipts and a human handoff — not spam blasts.",
  },
  "analytics-guide": {
    keywords: ["MSME analytics", "Google Analytics India"],
    answer: "Track enquiries, conversions and collections weekly. Analytics without those events is a weather report.",
  },
  "gst-compliance": {
    keywords: ["GST operations MSME", "invoice workflow"],
    answer: "GST pain is late invoices and cash off-system. Make sale, payment and invoice the same event.",
  },
  "business-growth": {
    keywords: ["MSME digital operating system", "small business growth India"],
    answer: "Growth needs a small system: website, payments, WhatsApp, a customer record, a weekly number. Automate last.",
  },
  "justdial-vs-own-website": {
    keywords: ["Justdial alternative", "Justdial vs website", "IndiaMART vs own site"],
    answer: "Justdial and IndiaMART bill you for visibility. An owned website, Maps pin and WhatsApp number charge ₹0 extra when that person messages you.",
  },
  "zomato-commission-vs-own-ordering": {
    keywords: ["Zomato commission", "restaurant QR UPI", "Swiggy alternative"],
    answer: "Aggregators are discovery. Regulars should order on your menu, WhatsApp and UPI so you do not pay 15–30% on guests who already know you.",
  },
  "whatsapp-business-api-india": {
    keywords: ["WhatsApp Business API India", "WhatsApp BSP"],
    answer: "Use the WhatsApp Business app until volume breaks. The API adds inbox, templates and automation on your number, with India among the lowest message rates.",
  },
  "upi-payment-gateway-msme": {
    keywords: ["UPI payment gateway small business", "Razorpay vs personal QR"],
    answer: "A personal UPI QR is not a GST ledger. A named payment gateway gives UPI, cards, links, receipts and settlements.",
  },
  "google-business-profile-india": {
    keywords: ["Google Business Profile India", "Map Pack", "near me SEO"],
    answer: "Most Google Business Profile views are category searches. Point Maps at a website you own, keep NAP identical, add WhatsApp.",
  },
  "website-cost-india-2026": {
    keywords: ["website cost India 2026", "website design price MSME"],
    answer: "Indian website quotes range from a few thousand rupees for a template to lakhs for catalogues. Webify Bharat Launch starts at ₹9,999 including 18% GST.",
  },
  "razorpay-vs-cashfree-vs-payu": {
    keywords: ["Razorpay vs Cashfree", "PayU TDR", "cheapest payment gateway India"],
    answer: "Card TDR clusters near 2% in India. Pick on UPI success rate, settlement and KYC — not 0.1% of fee. Personal GPay is the wrong baseline.",
  },
  "hindi-hinglish-business-website": {
    keywords: ["Hindi website design", "Hinglish website India"],
    answer: "If the counter runs in Hindi or Hinglish, English-only UI loses the customer. Bilingual buttons and WhatsApp copy are usually enough.",
  },
  "local-seo-near-me-india": {
    keywords: ["local SEO India", "near me SEO", "Google Map Pack"],
    answer: "Local SEO in India is verified GBP, matching NAP on your site, service pages for the area, and reviews you reply to — not 200 fake citations.",
  },
  "clinic-whatsapp-appointments-india": {
    keywords: ["clinic WhatsApp India", "doctor appointment WhatsApp"],
    answer: "Clinics need a public layer first: website, Maps, WhatsApp slots, UPI, reminders. That is not a hospital EMR.",
  },
  "bing-places-copilot-india": {
    keywords: ["Bing Places India", "Copilot local SEO"],
    answer: "Google wins Indian search. Bing Places is free NAP insurance so Copilot and Bing Chat can cite the same name, address and phone.",
  },
  "gst-website-quote-india": {
    keywords: ["GST on website quote", "18% GST web design"],
    answer: "Webify Bharat package prices on the pricing page include 18% GST. Always compare other vendors on the same tax basis.",
  },
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
    const slug = key.slice(5);
    const post = getPost(slug);
    const extra = POST_SEO[slug];
    return page(
      post?.title ?? "Insight",
      extra?.answer ?? post?.excerpt ?? "Practical guide for Indian MSMEs from Webify Bharat.",
      `/blog/${slug}`,
      extra?.keywords ?? ["Webify Bharat insights", "MSME India"],
      [
        { name: "Insights", path: "/blog" },
        { name: post?.title ?? slug, path: `/blog/${slug}` },
      ],
      [{ term: "Direct answer", value: extra?.answer ?? "Practical operating guide for Indian owners" }],
      extra?.answer ?? "",
    );
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
      { property: "og:url", content: `https://webify-bharat.vercel.app${s.path}` },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `https://webify-bharat.vercel.app${s.path}` }],
  };
}

export function pageMetadata(key: string) {
  const s = getPageSeo(key);
  const base = "https://webify-bharat.vercel.app";
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
