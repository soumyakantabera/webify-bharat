import { getIndustry, getPost, getService } from "./site";

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
    "Website, WhatsApp & UPI for Indian MSMEs | Own your customers",
    "Webify Bharat builds websites, WhatsApp Business, UPI gateways and analytics for Indian MSMEs. ₹0 per organic lead. No Justdial pack or Zomato tax on people who already want you.",
    "/",
    [
      "Webify Bharat",
      "website design for small business India",
      "WhatsApp Business API",
      "UPI payment gateway",
      "Justdial alternative",
      "MSME digital",
    ],
    [],
    [
      { term: "What it is", value: "Digital operations partner for Indian MSMEs" },
      { term: "You own", value: "Domain, WhatsApp number, customer list" },
      { term: "Organic leads", value: "₹0 extra per Google, Maps or WhatsApp enquiry" },
      { term: "Not this", value: "Justdial packs, IndiaMART rent, aggregator commission" },
    ],
  ),
  services: page(
    "Services: website, WhatsApp, UPI, analytics for MSMEs",
    "Website design, e-commerce, payment gateway, WhatsApp Business API, analytics and GST-ready workflows for Indian small businesses — one owned stack.",
    "/services",
    ["website development India", "WhatsApp API setup", "UPI integration", "MSME services"],
    [{ name: "Services", path: "/services" }],
    [
      { term: "Stack", value: "Site, WhatsApp, UPI, reporting, GST-ready invoices" },
      { term: "Start", value: "Fix the leak: no site, messy inbox, or personal QR" },
      { term: "Lock-in", value: "No 3-year retainer. Month-to-month care after launch" },
      { term: "Language", value: "Hindi, Hinglish or English — match the counter" },
    ],
  ),
  industries: page(
    "Industries: retail, restaurants, clinics, education, property, manufacturing",
    "Owned websites, WhatsApp and UPI for Indian retail, restaurants (vs Zomato cut), clinics, tuition, real estate and factory-direct manufacturers.",
    "/industries",
    ["restaurant website India", "clinic WhatsApp", "manufacturer website", "retail UPI"],
    [{ name: "Industries", path: "/industries" }],
    [
      { term: "Retail", value: "Catalogue, WhatsApp order chat, UPI, not Justdial rent" },
      { term: "Restaurants", value: "QR menu and UPI for regulars; aggregator optional" },
      { term: "Clinics", value: "GBP, appointments, reminders, named payments" },
      { term: "Factories", value: "Product pages vs IndiaMART quote wars" },
    ],
  ),
  work: page(
    "Work: digital systems for real Indian operations",
    "Illustrative systems for retail, restaurants, clinics, reporting and compliance. Named case studies publish only with permission.",
    "/work",
    ["Webify Bharat work", "MSME website case study India"],
    [{ name: "Work", path: "/work" }],
    [
      { term: "Proof", value: "Workflows around UPI, GST and WhatsApp — not Dribbble shots" },
      { term: "Publish", value: "Named logos only when the client agrees" },
    ],
  ),
  pricing: page(
    "Pricing in INR: Launch ₹9,999, Growth ₹19,999, Command ₹39,999 incl. GST",
    "Website and digital operations packages for Indian MSMEs. All listed starting prices include 18% GST. Hosting month-to-month after launch.",
    "/pricing",
    ["website cost India", "website design price MSME", "WhatsApp API charges India"],
    [{ name: "Pricing", path: "/pricing" }],
    [
      { term: "Launch", value: "₹9,999 incl. GST — site, analytics, WhatsApp setup" },
      { term: "Growth", value: "₹19,999 incl. GST — payments + automation + dashboard" },
      { term: "Command", value: "₹39,999 incl. GST — BI and custom integrations" },
      { term: "Tax", value: "18% GST included in every listed price" },
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

const serviceSeo: Record<
  string,
  { title: string; description: string; keywords: string[]; facts: PageSeo["facts"] }
> = {
  websites: {
    title: "Website design for small business India | Webify Bharat",
    description:
      "Mobile-first business websites with local SEO, Google Business Profile alignment, click-to-WhatsApp and UPI. Own the URL. ₹0 extra per organic enquiry.",
    keywords: ["website design for small business India", "local SEO website", "MSME website"],
    facts: [
      { term: "Outcome", value: "Name search and Maps click land on a site you own" },
      { term: "Includes", value: "Mobile-first pages, WhatsApp CTA, on-page SEO, schema basics" },
      { term: "Not", value: "A Justdial profile pretending to be your website" },
    ],
  },
  ecommerce: {
    title: "E-commerce & catalogues you own | Webify Bharat",
    description:
      "D2C and dealer portals on your domain with UPI checkout. Keep repeat buyers off marketplace commission.",
    keywords: ["ecommerce website India", "D2C store UPI", "dealer portal"],
    facts: [
      { term: "Own", value: "Catalogue, checkout, customer list" },
      { term: "Optional", value: "Amazon/Flipkart for extra reach — not for every repeat" },
    ],
  },
  payments: {
    title: "UPI payment gateway setup for Indian businesses",
    description:
      "Razorpay, Cashfree or PayU-class checkout, payment links and WhatsApp receipts. Stop mixing GST money with personal GPay.",
    keywords: ["UPI payment gateway", "Razorpay integration", "payment links India"],
    facts: [
      { term: "Methods", value: "UPI, cards, net-banking, payment links" },
      { term: "Replace", value: "Personal QR in the bio" },
    ],
  },
  whatsapp: {
    title: "WhatsApp Business API & inbox for Indian SMEs",
    description:
      "Your number, menus, reminders and catalogues. No per-lead fee when a customer messages you. API when the green app breaks.",
    keywords: ["WhatsApp Business API India", "WhatsApp automation SME"],
    facts: [
      { term: "Number", value: "Stays yours — not a directory’s" },
      { term: "API", value: "When one phone cannot hold the queue" },
    ],
  },
  analytics: {
    title: "Analytics & BI for Indian MSMEs | Monday numbers",
    description:
      "Track WhatsApp clicks, payments and collections in INR. Not a 40-tile vanity dashboard.",
    keywords: ["Google Analytics small business India", "MSME dashboard"],
    facts: [{ term: "Weekly", value: "Enquiries, conversions, money landed, what is stuck" }],
  },
  compliance: {
    title: "Bookkeeping workflows & GST-ready invoices | Webify Bharat",
    description:
      "Numbered invoices tied to payments so GSTR is not archaeology. We are not your CA.",
    keywords: ["GST invoice website", "bookkeeping workflow MSME"],
    facts: [
      { term: "Goal", value: "Sale, payment and invoice as one event" },
      { term: "Not", value: "Legal or CA advice" },
    ],
  },
};

const industrySeo: Record<
  string,
  { title: string; description: string; keywords: string[]; facts: PageSeo["facts"] }
> = {
  retail: {
    title: "Retail websites, catalogue and UPI | Webify Bharat",
    description:
      "Kirana to brand retail: owned site, WhatsApp catalogue, UPI, Google Business Profile. Stop renting Justdial clicks.",
    keywords: ["retail website India", "kirana UPI", "shop near me SEO"],
    facts: [
      { term: "Leak", value: "Personal QR and DMs" },
      { term: "Fix", value: "Catalogue + WhatsApp + UPI you own" },
    ],
  },
  restaurant: {
    title: "Restaurant website, QR menu and UPI without aggregator tax",
    description:
      "Menu, Maps, WhatsApp parcel and table QR-to-UPI. Keep Zomato for strangers; keep regulars on your books.",
    keywords: ["restaurant website India", "QR menu UPI", "Zomato commission alternative"],
    facts: [
      { term: "Aggregator", value: "Discovery" },
      { term: "Owned QR", value: "Regulars without 15–30% cut" },
    ],
  },
  healthcare: {
    title: "Clinic website, WhatsApp appointments and UPI | India",
    description:
      "Patients Google, check Maps, then WhatsApp. We build the public layer — not an EMR.",
    keywords: ["clinic website India", "WhatsApp appointment", "dentist near me"],
    facts: [
      { term: "Public layer", value: "Site, GBP, WhatsApp, UPI" },
      { term: "Not", value: "Hospital EMR replacement" },
    ],
  },
  education: {
    title: "Institute website, admissions and fee UPI | Webify Bharat",
    description:
      "Tuition and school sites with enquiry forms, fee links and parent WhatsApp in the desk’s language.",
    keywords: ["tuition website India", "school fee UPI", "coaching institute website"],
    facts: [{ term: "Parents want", value: "Timings, UPI fees, a number that answers" }],
  },
  "real-estate": {
    title: "Real estate project pages and WhatsApp capture you own",
    description:
      "Listing pages, maps and follow-up on your number — not a portal that sells the lead five times.",
    keywords: ["real estate website India", "project landing page", "RERA listing site"],
    facts: [
      { term: "Portals", value: "Shared leads" },
      { term: "Owned page", value: "Buyer on your WhatsApp" },
    ],
  },
  manufacturing: {
    title: "Manufacturer website vs IndiaMART lead packs",
    description:
      "Factory-direct product specs, GST-ready enquiry and dealer WhatsApp. Repeat OEM buyers skip the portal.",
    keywords: ["manufacturer website India", "IndiaMART alternative", "B2B catalogue"],
    facts: [
      { term: "IndiaMART", value: "Discovery + quote wars" },
      { term: "Factory-direct", value: "Spec pages you own" },
    ],
  },
};

const ANSWERS: Record<string, string> = {
  home: "Webify Bharat is a digital operations partner for Indian MSMEs: we build the website, WhatsApp and UPI checkout you own, so Google, Maps and chat send customers at ₹0 per organic lead — not a Justdial pack or Zomato cut.",
  services: "Webify Bharat services are the Indian MSME stack: website design, e-commerce on your domain, UPI payment gateway, WhatsApp Business API, analytics and GST-ready invoices. Start with the leak, then connect the next piece.",
  industries: "We ship the same owned stack for retail, restaurants, clinics, tuition, real estate and manufacturing — each trade has a different leak (Justdial, Zomato, no-shows, IndiaMART) and a matching workflow.",
  work: "Webify Bharat work is systems around UPI, WhatsApp and GST for real Indian operations. Named case studies publish only with client permission.",
  pricing: "Webify Bharat pricing starts at ₹9,999 (Launch), ₹19,999 (Growth) and ₹39,999 (Command), all inclusive of 18% GST. You pay to build the system, not per organic lead.",
  about: "Webify Bharat is an India-based digital operations studio for MSMEs. We are not a lead-selling directory and not a US SaaS wrapper. Stack choices settle in INR and leave the customer list on your login.",
  blog: "Webify Bharat insights answer live Indian search demand: website cost, Justdial vs own site, WhatsApp API, UPI vs personal QR, Google Business Profile, Razorpay vs Cashfree, Hindi websites, Bing Places.",
  contact: "Contact Webify Bharat with five lines: what you sell, city, what is breaking, and a link or photo. The first working conversation is free; WhatsApp is the door.",
  "service:websites": "A Webify Bharat business website is a mobile-first URL you own, aligned with Google Business Profile, with WhatsApp and optional UPI — so name search and Maps clicks are not rented from Justdial.",
  "service:ecommerce": "Webify Bharat e-commerce is a catalogue and checkout on your domain with UPI, so repeat buyers skip marketplace commission.",
  "service:payments": "Payment gateway setup means a named Indian gateway (Razorpay, Cashfree, PayU class) with UPI, cards and WhatsApp receipts — not a personal GPay QR.",
  "service:whatsapp": "WhatsApp for Webify Bharat clients stays on your number: Business app until volume breaks, then WhatsApp Business API. No per-lead fee when a customer messages you.",
  "service:analytics": "Analytics here means Monday numbers in INR: enquiries, WhatsApp clicks, payments, collections — not a 40-tile vanity dashboard.",
  "service:compliance": "Bookkeeping workflows make sale, payment and invoice one event so GST filing is not archaeology. Webify Bharat is not your CA.",
  "industry:retail": "For Indian retail, Webify Bharat connects catalogue, WhatsApp order chat, UPI and Google Business Profile so “shop near me” is not a Justdial rent.",
  "industry:restaurant": "For restaurants, a menu site, Maps, WhatsApp and table QR-to-UPI keep regulars off 15–30% aggregator commission; Zomato stays optional discovery.",
  "industry:healthcare": "For clinics, we build the public layer — website, Maps, WhatsApp appointments, UPI — not a hospital EMR.",
  "industry:education": "For institutes, parents want timings, fee UPI and a number that answers. That is the site and WhatsApp we build.",
  "industry:real-estate": "For real estate, owned project pages and WhatsApp capture beat portals that sell the same lead five times.",
  "industry:manufacturing": "For manufacturers, spec pages and GST-ready enquiry let repeat OEM buyers skip IndiaMART quote wars.",
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

  if (key.startsWith("service:")) {
    const slug = key.slice(8);
    const svc = getService(slug);
    const extra = serviceSeo[slug];
    return page(
      extra?.title ?? svc?.title ?? "Service",
      extra?.description ?? svc?.description ?? "",
      `/services/${slug}`,
      extra?.keywords ?? [],
      [
        { name: "Services", path: "/services" },
        { name: svc?.title ?? slug, path: `/services/${slug}` },
      ],
      extra?.facts ?? [],
      ANSWERS[key] ?? "",
    );
  }

  if (key.startsWith("industry:")) {
    const slug = key.slice(9);
    const ind = getIndustry(slug);
    const extra = industrySeo[slug];
    return page(
      extra?.title ?? ind?.title ?? "Industry",
      extra?.description ?? ind?.description ?? "",
      `/industries/${slug}`,
      extra?.keywords ?? [],
      [
        { name: "Industries", path: "/industries" },
        { name: ind?.title ?? slug, path: `/industries/${slug}` },
      ],
      extra?.facts ?? [],
      ANSWERS[key] ?? "",
    );
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
