export type Article = {
  kicker: string;
  title: string;
  accent?: string;
  lead?: string;
  paragraphs: string[];
  bullets?: string[];
};

export const entityDefine: Article = {
  kicker: "Definition",
  title: "What is",
  accent: "Webify Bharat?",
  lead: "Webify Bharat builds the website, WhatsApp, and UPI checkout the owner controls. The card price includes 18% GST. An organic enquiry after launch has no per-lead fee. GST, Udyam, and IEC are filed separately, with the government fee on its own line.",
  paragraphs: [
    "Indian buyers search on Google, check Google Maps, then message on WhatsApp. If your name has no owned website, a personal UPI QR, and a Justdial pack, you are paying rent on people who already wanted you. Webify Bharat replaces that leak with a stack you own: mobile-first business website, Google Business Profile alignment, WhatsApp Business API or inbox workflows, Razorpay / Cashfree / UPI payment gateway, and a simple analytics view in INR.",
    "We work with kirana and retail stores, restaurants, clinics, tuition centres, real-estate desks and manufacturing SMEs across India. You do not need a Bengaluru HQ or a Pvt Ltd to start. PAN, a bank account and a phone are enough for a site; KYC is added when you want a named payment gateway and GST invoices.",
  ],
  bullets: [
    "Own the customer list, domain and WhatsApp number",
    "No per-lead fee on organic Google, Maps or WhatsApp enquiries",
    "UPI-first checkout, GST-ready invoices, Hindi/Hinglish copy when needed",
    "Built for MSME workflows — not US SaaS theatre",
  ],
};


export const searchResearchArticle: Article = {
  kicker: "2026 search research",
  title: "How Indian customers actually",
  accent: "find a local business.",
  paragraphs: [
    "Local SEO research in 2026 is blunt. A large share of “near me” and category searches still open the Google Map Pack first — dentist in Noida, plumber near me, restaurant in Pune. Google Business Profile (GBP) gets most of its impressions from category queries, not branded ones. About four in ten local queries can trigger an AI Overview. If your name is missing from Maps, your site, and a citable paragraph, both Google and Bing Copilot skip you.",
    "The journey after the pack is Indian-specific: call or WhatsApp, then a name search. 97% of people still check some online presence before they visit. A Justdial card or an Instagram grid is not a substitute for NAP-consistent GBP, a fast mobile website, and a click-to-chat button. Bing Places for Business is the free Microsoft twin — smaller than Google in India, but Copilot and Bing Chat read it. We set both when it is cheap insurance.",
    "On-page still matters: dedicated service pages, city and category language, internal links, and photos that look like the shop. Reviews you reply to. Hours that are true on festival weeks. Webify Bharat builds the owned URL those listings point at — so the click is yours, not a directory’s.",
  ],
  bullets: [
    "Google Business Profile + Maps pack for “near me” and category search",
    "Owned website for the name search after WhatsApp or a shop board",
    "Bing Places so Copilot and Bing have the same NAP as Google",
    "WhatsApp and UPI on that URL — ₹0 extra per organic enquiry",
  ],
};


export const industryArticles: Record<string, Article> = {
  retail: {
    kicker: "Retail India",
    title: "Store websites, catalogue and UPI",
    accent: "for kirana to brand retail.",
    paragraphs: [
      "Retail search intent in India is local: “shop near me”, Maps, then WhatsApp for stock and price. A Justdial listing rents that click. An owned site plus Google Business Profile plus UPI checkout keeps the customer and the margin. We connect catalogue, inventory notes, WhatsApp order chat and a daily collection view.",
      "Kirana, boutiques and multi-store retail all hit the same leak: personal QR, stock in a notebook, and Instagram DMs that vanish. A WhatsApp catalogue or site catalogue with sizes and GST-ready bills is the upgrade. Marketplaces stay for extra reach; repeats should land on your number.",
    ],
  },
  restaurant: {
    kicker: "Restaurants",
    title: "QR menu and UPI — without",
    accent: "a 20% aggregator cut.",
    paragraphs: [
      "Zomato and Swiggy are useful for discovery. Commission on every plate (often mid-teens to high twenties, plus ads) is expensive for guests who already know you. A restaurant website with menu, Google Maps embed, WhatsApp table or parcel chat, and QR-to-UPI on the table keeps regulars on your books.",
      "Digital marketing for restaurants in India is Google for intent, WhatsApp for the regular, and the aggregator for overflow. If a large share of orders are repeats, moving even part of those off the platform is real margin. We do not tell you to delete Zomato. We stop you paying platform rent on people who would have come anyway.",
    ],
  },
  healthcare: {
    kicker: "Clinics & healthcare",
    title: "Appointments, reminders and",
    accent: "payments for Indian clinics.",
    paragraphs: [
      "Patients Google the doctor (“dentist near me”, “clinic in [area]”), check Maps, then WhatsApp the reception. No-shows drop when reminders go on WhatsApp. Collections improve when UPI links replace cash-only counters. Dedicated clinic software exists from a few hundred rupees a month — we are not an EMR. We are the public layer: clinic website, GBP, appointment capture, reminder copy, and named payments.",
      "Do not buy ads into an unanswered phone. First: a page that proves the practice is real, a number that replies, and a receipt the accountant can file.",
    ],
  },
  education: {
    kicker: "Education",
    title: "Admissions, fees and parent",
    accent: "WhatsApp for institutes.",
    paragraphs: [
      "Tuition centres, schools and coaching brands lose admissions in the gap between Instagram and a missing website. Parents want batch timings, fees on UPI, receipts, and a number that answers. CBSE/ICSE/state-board copy should be plain, not startup English.",
      "Webify Bharat sets institute sites, enquiry forms, fee links and WhatsApp updates in the language the desk already uses. That is how “tuition classes near me” becomes an owned enquiry instead of a Justdial pack.",
    ],
  },
  "real-estate": {
    kicker: "Real estate",
    title: "Project pages and lead follow-up",
    accent: "you actually own.",
    paragraphs: [
      "Portals sell the same lead to five brokers. An owned site for a project or local desk, with listing pages, WhatsApp capture and a follow-up list, keeps the buyer on your number. Photos, maps, site-visit CTAs — without locking you into a national portal’s auction.",
      "RERA-sensitive copy stays factual. We do not invent inventory. We make sure the Google search for the project name hits you first, not only a listing site.",
    ],
  },
  manufacturing: {
    kicker: "Manufacturing MSME",
    title: "Factory-direct presence vs",
    accent: "IndiaMART lead packs.",
    paragraphs: [
      "IndiaMART works for some B2B discovery. Subscription plus competing quotes is rent. A manufacturer website with product specs, GST-ready enquiry, WhatsApp to the sales desk and a simple order status view lets repeat OEM and dealer buyers skip the portal.",
      "Buyers still search HS codes, material and city. Dedicated product pages beat a single PDF. We build that factory-direct layer so the RFQ is yours.",
    ],
  },
};

export const aboutArticle: Article = {
  kicker: "About the studio",
  title: "Digital operations for",
  accent: "Bharat’s real businesses.",
  paragraphs: [
    "Webify Bharat started from a simple observation: Indian MSMEs already sell. They lose money on rented channels — Justdial packs, aggregator commission, Meta clicks for their own brand name — and run the day from WhatsApp memory. We build the owned alternative.",
    "The team ships websites, WhatsApp Business workflows, UPI gateways and reporting. We are not a lead-selling directory and not a Silicon Valley SaaS wrapper. Stack choices settle in INR, speak UPI, and leave the customer list on your side of the login.",
    "Webify Bharat builds the website, WhatsApp, and UPI checkout an Indian shop keeps. You pay to build and host. An organic enquiry after that has no per-lead fee. Ads, gateway MDR, and WhatsApp conversation charges are extra. This does not buy people who search the category instead of your name.",
  ],
};



export const industriesIndexArticle: Article = {
  kicker: "Industries we know",
  title: "Retail, food, clinics, tuition,",
  accent: "property and the factory floor.",
  paragraphs: [
    "Generic “digital transformation” decks fail because a restaurant’s leak is Zomato commission, a clinic’s leak is no-shows, and a factory’s leak is IndiaMART quote wars. Webify Bharat ships the same owned stack — site, WhatsApp, UPI, reporting — with copy and workflows that match the floor.",
    "Pick your trade. Each industry page answers the search that owners actually type: restaurant website with QR menu, clinic appointment WhatsApp, tuition fee UPI, real-estate project page, manufacturer catalogue. Same partner, different bottleneck.",
  ],
};

export const workArticle: Article = {
  kicker: "Proof of work",
  title: "Systems around shops, clinics",
  accent: "and plants — not mock startups.",
  paragraphs: [
    "Case studies here are formatted around real Indian operations: retail catalogues, restaurant QR + WhatsApp, clinic reminders, reporting and compliance workflows. Named client logos go up only when publication is approved. Until then, the pattern is the product: enquiry you own, payment you can reconcile, a Monday number the owner believes.",
    "If you are comparing agencies on Dribbble shots, look instead for UPI, GST and WhatsApp in the workflow. That is the work that ranks and converts in this market.",
  ],
};

export const contactArticle: Article = {
  kicker: "How to brief us",
  title: "What to send for a useful",
  accent: "first conversation.",
  paragraphs: [
    "Searches like “web design company near me”, “WhatsApp API agency India” and “UPI website developer” dump you into directories. Skip the pack. Send five lines: what you sell, city, what is breaking (Maps, inbox, collections, GST), and a link or photo of the current setup.",
    "The first working conversation is free. We will say if you need a marketplace, a CA, or us. WhatsApp is the door because that is where Indian owners already are; a video call can follow.",
  ],
};

export const blogIndexArticle: Article = {
  kicker: "Insights",
  title: "Guides we wrote because",
  accent: "owners kept asking.",
  paragraphs: [
    "These notes track live Indian search demand: website cost, Justdial vs own site, Zomato commission, WhatsApp Business API, UPI vs personal QR, Google Business Profile, Razorpay vs Cashfree vs PayU, Hindi/Hinglish sites, clinic WhatsApp, Bing Places and Copilot. Written so Google, Bing and LLMs can cite a straight answer — not a keyword cloud.",
    "Use them as a briefing. Then build the system, do not collect blog posts.",
  ],
};
