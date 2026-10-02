export const SITE = {
  name: "Webify Bharat",
  tagline: "Own your customers. ₹0 per lead.",
  description:
    "Webify Bharat builds websites, WhatsApp Business, UPI payment gateways and analytics for Indian MSMEs — own your customers, ₹0 per organic lead, no Justdial or Zomato tax. City pages for every state capital.",
  whatsapp: "918336097642",
  whatsappDisplay: "8336097642",
} as const;

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const WA_CONSULT = waLink("Hi, I'd like to book a free consult");
export const WA_PROJECT = waLink("Hi, I'd like to discuss a project");
export const WA_SERVICES = waLink("Hi, I'd like to know more about your services");
export const WA_PACKAGES = waLink("Hi, I'd like to know more about your packages");
export const WA_CHAT = waLink("Hi, I'd like to discuss my business");
export const WA_BARE = `https://wa.me/${SITE.whatsapp}`;

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  photo: string;
  headline: string;
  story: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Website & Digital Presence",
    description:
      "A website you own — so Google and WhatsApp send you customers at ₹0 per lead, not a Justdial bill.",
    image: "website.png",
    photo: "business-owner.webp",
    headline: "Own the front door. Stop renting it.",
    story:
      "A strong website is the address you control: trust, WhatsApp, UPI, and enquiries that do not pay a marketplace tax.",
    featured: true,
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Portals",
    description:
      "Your own store and catalogue — keep the customer and the margin, instead of handing both to a marketplace.",
    image: "ecommerce.png",
    photo: "ecommerce.webp",
    headline: "Online selling still happens in the real world",
    story:
      "Catalogs, orders and fulfillment need to match how your team actually packs, dispatches and supports customers.",
    featured: true,
  },
  {
    slug: "payments",
    title: "Payment Gateway Setup",
    description: "UPI, cards and secure checkout integrations with clean customer journeys.",
    image: "payments.png",
    photo: "payments.webp",
    headline: "Make paying feel effortless",
    story:
      "The best payment setup disappears into the customer journey: fast, familiar and easy to reconcile.",
  },
  {
    slug: "whatsapp",
    title: "WhatsApp API & Campaigns",
    description: "A WhatsApp system on your number — every chat is yours, with no per-lead fee.",
    image: "whatsapp.png",
    photo: "whatsapp.webp",
    headline: "The inbox you own is the cheapest front desk in India",
    story:
      "Turn enquiries, updates and follow-ups into a repeatable system. The customer who messaged you does not belong to Justdial.",
  },
  {
    slug: "analytics",
    title: "Analytics & BI",
    description: "Tracking, reports and dashboards that turn business activity into decisions.",
    image: "analytics.png",
    photo: "analytics-review.webp",
    headline: "Numbers should lead to decisions",
    story:
      "We bring the important numbers into one view so owners and managers can review performance without digging through disconnected tools.",
  },
  {
    slug: "compliance",
    title: "Bookkeeping & Compliance",
    description:
      "Invoices, bookkeeping workflows, compliance visibility and operational control.",
    image: "compliance.png",
    photo: "bookkeeping-compliance.webp",
    headline: "Cleaner operations make compliance easier",
    story:
      "Organized invoices, bookkeeping workflows and due-date visibility reduce last-minute scrambling and improve control.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Industry = {
  slug: string;
  title: string;
  description: string;
  photo: string;
  illustration: string;
};

export const industries: Industry[] = [
  {
    slug: "retail",
    title: "Retail",
    description: "Inventory, catalog, payments and sales insights for modern stores.",
    photo: "retail.webp",
    illustration: "retail.png",
  },
  {
    slug: "restaurant",
    title: "Restaurants",
    description: "QR ordering, UPI and WhatsApp on your terms — not a 25% aggregator cut on every plate.",
    photo: "restaurant.webp",
    illustration: "restaurant.png",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Appointments, reminders, payments and reporting for clinics.",
    photo: "healthcare.webp",
    illustration: "healthcare.png",
  },
  {
    slug: "education",
    title: "Education",
    description: "Admissions, fees, student communication and institute dashboards.",
    photo: "education.webp",
    illustration: "education.png",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Listings, lead capture, follow-up systems and sales visibility.",
    photo: "real-estate.webp",
    illustration: "realestate.png",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Inventory, production tracking, reports and operational dashboards.",
    photo: "manufacturing.webp",
    illustration: "manufacturing.png",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const plans = [
  {
    name: "Launch",
    price: "₹9,999",
    desc: "Get a professional digital foundation.",
    features: [
      "Business website",
      "Basic analytics",
      "WhatsApp setup",
      "Core SEO foundation",
      "Launch support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹19,999",
    desc: "Connect sales, payments and automation.",
    features: [
      "Everything in Launch",
      "Payment gateway",
      "WhatsApp automation",
      "Analytics dashboard",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Command",
    price: "₹39,999",
    desc: "A connected operating system for growth.",
    features: [
      "Everything in Growth",
      "Advanced BI dashboard",
      "Custom integrations",
      "Operational automation",
      "Dedicated support",
    ],
    popular: false,
  },
] as const;

export const workItems = [
  {
    title: "Retail transformation",
    industry: "Retail",
    summary: "Store + catalog + payments + insights",
    image: "/images/real/retail.webp",
  },
  {
    title: "Restaurant growth system",
    industry: "Restaurant",
    summary: "Orders + QR payments + WhatsApp",
    image: "/images/real/restaurant.webp",
  },
  {
    title: "Clinic operating system",
    industry: "Healthcare",
    summary: "Appointments + reminders + reports",
    image: "/images/real/healthcare.webp",
  },
  {
    title: "Management reporting system",
    industry: "Analytics",
    summary: "KPIs + reporting + decision visibility",
    image: "/images/real/analytics-review.webp",
  },
  {
    title: "Finance operations workflow",
    industry: "Compliance",
    summary: "Bookkeeping + records + compliance visibility",
    image: "/images/real/bookkeeping-compliance.webp",
  },
  {
    title: "Digital operations roadmap",
    industry: "Consulting",
    summary: "Discovery + priorities + implementation plan",
    image: "/images/real/consultation.webp",
  },
] as const;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "website-growth",
    title: "How to build a business website that gets enquiries in India",
    excerpt: "Best practices for websites that build trust and generate enquiries.",
    image: "/images/blog/website.png",
    body: [
      "A website earns its keep when a stranger can understand what you do, trust that you are real, and take the next step without hunting. For most Indian SMBs that next step is a WhatsApp message, a call, or a simple enquiry form — not a ten-page brochure.",
      "Start with one clear promise on the first screen. Pair it with a real photograph of the business, a primary action, and proof that you actually deliver (reviews, numbers, or a short case). Decorative hero videos and stock skylines do not convert.",
      "Then make every important page answer three questions: who is this for, what happens next, and how fast can we start. Fast load times, mobile-first layout, and a visible phone or WhatsApp button are not optional extras — they are the conversion system.",
      "Once the site is live, measure enquiries, not vanity traffic. Track which pages send WhatsApp taps, which services get read, and where people drop. That is how a website becomes a growth asset instead of a digital visiting card.",
    ],
  },
  {
    slug: "payment-trends",
    title: "UPI and checkout: payment trends Indian SMEs should know",
    excerpt: "What Indian businesses should know about smoother digital payments.",
    image: "/images/blog/payments.png",
    body: [
      "Customers already know how they want to pay: UPI first, cards when needed, and as little friction as possible. The businesses that convert well make payment feel like a natural last step, not a separate project.",
      "A clean checkout is more than a gateway logo. It is a trusted amount, a familiar method, an instant confirmation, and a record that accounts can reconcile the same day. Failed payments, unclear statuses and delayed settlements quietly kill repeat sales.",
      "For stores, clinics, institutes and service businesses the same pattern holds: collect at the moment of commitment, send a receipt automatically, and keep a simple trail for GST and bookkeeping. WhatsApp receipts often outperform email for this.",
      "If you are still collecting via personal UPI or handwritten notes, the first upgrade is not a complex ERP. It is a named business account, a proper payment link or QR, and a dashboard that shows what actually came in today.",
    ],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp automation for Indian businesses (without sounding like a bot)",
    excerpt: "How to turn customer conversations into repeatable workflows.",
    image: "/images/blog/whatsapp.png",
    body: [
      "WhatsApp is already your front desk. The question is whether it is a chaotic inbox or a system. Automation does not mean sounding like a robot — it means the second, third and tenth customer get the same useful answer as the first.",
      "The highest-leverage flows are boring on purpose: welcome and menu, business hours, price lists, appointment reminders, order status, and a clean handoff to a human when the query is unusual. Those six cover most SMB volume.",
      "Broadcasts work when they are permissioned, useful and rare. Transactional messages (confirmations, reminders, invoices) outperform promotional blasts. Keep the brand voice warm, short, and in the language your customers actually use.",
      "Connect WhatsApp to the rest of the operation: website lead forms, payment confirmations, and a simple CRM so no enquiry dies in a personal phone. That is when conversations start compounding into revenue.",
    ],
  },
  {
    slug: "analytics-guide",
    title: "Analytics for MSMEs: the Monday numbers that matter",
    excerpt: "The business metrics worth tracking before building complex dashboards.",
    image: "/images/blog/analytics.png",
    body: [
      "Most businesses do not need a 40-tile dashboard. They need a weekly view of a handful of numbers that change decisions: enquiries, conversions, collections, and a few operational bottlenecks.",
      "Start with the questions the owner already asks on Monday. How many people reached out? How many became paying customers? How much money actually landed? What is stuck — stock, appointments, follow-ups, deliveries?",
      "Only then instrument the site and tools. Google Analytics without a conversion event is a weather report. Pair traffic with WhatsApp clicks, form starts, payments, and repeat customers. One screen. Same definitions every week.",
      "When those basics are trusted, layer in channel mix, product mix, and staff or location comparisons. Fancy BI is useful after the numbers are believed. Until then, a clean weekly review beats a neglected data warehouse.",
    ],
  },
  {
    slug: "gst-compliance",
    title: "GST compliance gets easier when operations produce the books",
    excerpt: "How better operational systems make compliance easier to manage.",
    image: "/images/blog/gst.png",
    body: [
      "Compliance pain is usually an operations problem wearing an accounts costume. Invoices issued late, cash collected off-system, and expenses sitting in WhatsApp chats make GST filing a scramble every cycle.",
      "The practical fix is to make the daily work produce the records. When a sale, a payment and an invoice are the same event, the books stay close to reality. When they are three separate afterthoughts, filing season becomes archaeology.",
      "A lightweight stack — numbered invoices, a payment trail, expense capture, and a due-date list — is enough for most growing SMBs. The goal is visibility, not a 200-feature finance suite nobody opens.",
      "Once records are current, your CA or internal accounts team can file with confidence. You spend less time reconstructing last month and more time seeing which work is actually profitable.",
    ],
  },
  {
    slug: "business-growth",
    title: "From disconnected tools to one digital operating system",
    excerpt: "A practical roadmap from disconnected tools to one operating system.",
    image: "/images/blog/growth.png",
    body: [
      "Growth stalls when every new customer adds more coordination: another spreadsheet, another group chat, another person who knows the real status. Tools pile up, but the business still runs on memory.",
      "A useful digital operating system is small. Website for demand. Payments for collection. WhatsApp for conversation. A simple record of customers and jobs. A weekly numbers view. Anything that does not serve those five is optional.",
      "Sequence matters. First, be findable and contactable. Second, collect money cleanly. Third, stop losing follow-ups. Fourth, measure. Fifth, automate the repetitive middle. Skipping to automation on a messy process only scales the mess.",
      "Pick one bottleneck this quarter — usually enquiries, payments, or follow-ups — and make it boringly reliable. Compounding comes from a system the team actually uses, not from buying the next platform.",
    ],
  },
  {
    slug: "justdial-vs-own-website",
    title: "Justdial vs your own website: what Indian SMEs actually pay",
    excerpt:
      "Lead packs bill you every time someone already wanted you. An owned site, Maps pin and WhatsApp number do not.",
    image: "/images/blog/website.png",
    body: [
      "Justdial and IndiaMART sell visibility. The invoice is a subscription or a lead pack. The customer who searched your category may also have searched your name. If they land on a directory instead of you, you pay rent on intent you already earned with your board, GSTIN and word of mouth.",
      "IndiaMART tends to fit B2B product sellers who want inbound RFQs. Justdial fits local services. Both put the relationship on their login. Your own website plus Google Business Profile plus WhatsApp is the alternative: one-time build, hosting, and ₹0 extra when that person messages you.",
      "Run the maths for a year. Pack fees plus time spent on junk leads versus a mobile-first site that ranks for your brand and locality. Most shops, clinics and factories that already have demand win with owned channels. Keep a directory only if it still sends unique, profitable work after you have a real URL.",
      "Webify Bharat builds that owned layer — website design for small business India, local SEO, click-to-WhatsApp, UPI — so Google and Bing send you customers you keep.",
    ],
  },
  {
    slug: "zomato-commission-vs-own-ordering",
    title: "Zomato commission vs your own QR, menu and UPI",
    excerpt:
      "Aggregators are discovery. Regulars should order on a channel you own — menu, WhatsApp, UPI — without a 15–30% cut.",
    image: "/images/blog/growth.png",
    body: [
      "Zomato and Swiggy work when a stranger is browsing. They charge commission, plus ads to stay visible in their own app. For the guest who already likes your food, that tax is optional. A restaurant website with menu, Maps, WhatsApp parcel chat and table QR-to-UPI keeps dine-in and direct delivery on your books.",
      "Digital marketing for restaurants in India is not “more Reels”. It is Google for intent, WhatsApp for the regular, and the aggregator for overflow. If 40% of orders are repeats, moving even half of those off the platform is real margin.",
      "We do not pretend you should delete Zomato tomorrow. We make sure you are not paying platform rent on people who would have come anyway.",
    ],
  },
  {
    slug: "whatsapp-business-api-india",
    title: "WhatsApp Business API in India: when the app is not enough",
    excerpt:
      "The Business app breaks at volume. The API adds inbox, templates and automation on your number — with India among the lowest message rates.",
    image: "/images/blog/whatsapp.png",
    body: [
      "Search “best WhatsApp Business API provider India” and you will find BSPs — Gupshup, Infobip, Wati, Interakt and others. The API (WhatsApp Business Platform) is what you need when one phone cannot hold the queue: multi-agent inbox, message templates, catalogues, and flows for reminders and order status.",
      "Utility and authentication messages in India are cheap compared with Western rate cards. Marketing templates cost more and need quality. The win for SMEs is operational: appointment reminders, fee receipts, dispatch updates — not spam blasts.",
      "Webify Bharat does not pretend to be a BSP. We design the website-to-WhatsApp loop, the flows, and the integration so the number stays yours and no Justdial-style lead fee sits on the chat.",
    ],
  },
  {
    slug: "upi-payment-gateway-msme",
    title: "UPI payment gateway for small business: stop using personal QR",
    excerpt:
      "Named checkout, payment links and WhatsApp receipts beat a GPay QR in the bio — for settlements, refunds and GST.",
    image: "/images/blog/payments.png",
    body: [
      "Personal UPI is how India learned to pay. It is a poor ledger for a GSTIN. Mix personal and business, lose refund trails, and filing becomes screenshots. A payment gateway — Razorpay, Cashfree, PayU and peers — gives UPI, cards, net-banking, payment links and a settlement report.",
      "KYC needs a bank account and business proof. That is the hurdle. After it, checkout on your website and WhatsApp receipts are the customer experience people already expect.",
      "If you searched “UPI payment gateway for small business India” or “Razorpay vs personal QR”, the answer is: named gateway the moment volume or GST makes the mix painful. Webify Bharat integrates that into the site and inbox you already use.",
    ],
  },
  {
    slug: "google-business-profile-india",
    title: "Google Business Profile in India: Maps pack, “near me”, and why the website still matters",
    excerpt:
      "Most GBP views are category searches, not your brand name. The profile wins the pack; the website you own wins the next click and the WhatsApp.",
    image: "/images/blog/website.png",
    body: [
      "Local SEO statistics in 2026 keep repeating three facts. “Near me” intent is huge. The Map Pack sits above the blue links. A large share of Google Business Profile impressions come from category queries — dentist, plumber, restaurant — not from people who already know your name. Complete, verified GBP with the right primary category, photos, hours and review replies is how you enter that pack.",
      "GBP is not a website. After the pack, Indian buyers still name-search you and open WhatsApp. If the URL in the profile is a Justdial page, you rented the click. Point GBP at a site you control, keep NAP identical (name, address, phone), and put click-to-call plus click-to-WhatsApp on mobile.",
      "AI Overviews now answer a slice of local queries. They cite businesses with clear, owned pages and consistent listings. Webify Bharat builds that URL and lines it up with Maps — so category discovery becomes an enquiry you keep at ₹0 extra.",
    ],
  },
  {
    slug: "website-cost-india-2026",
    title: "Website design cost in India in 2026 (and what ₹9,999 actually buys)",
    excerpt:
      "Public quotes run from a few thousand for a template to lakhs for a catalogue. Always ask if 18% GST is in the number.",
    image: "/images/blog/website.png",
    body: [
      "There is no single “website making cost in India”. Freelancer templates can start around ₹5,000–₹12,000. Conversion-focused local sites with WhatsApp, Maps and basic SEO commonly land in the ₹15,000–₹60,000 band. Small e-commerce with gateway and GST often starts higher. Agency custom work can be ₹2 lakh and up. Reddit and agency blogs in 2026 all show that spread.",
      "Webify Bharat Launch is ₹9,999 as a professional foundation: business website, analytics, WhatsApp setup, SEO basics. Growth (₹19,999) and Command (₹39,999) add payments, automation and BI. Compare scope, not the first integer. Confirm whether 18% GST is extra — most Indian quotes are exclusive unless stated.",
      "The expensive choice is the cheap site you replace in six months, or a year of Justdial packs for people who would have Googled you anyway. Pay once for a URL you own.",
    ],
  },
  {
    slug: "razorpay-vs-cashfree-vs-payu",
    title: "Razorpay vs Cashfree vs PayU for Indian SMEs: fees are not the whole story",
    excerpt:
      "Headline TDR sits near 2% on cards. UPI success rate, settlement time, KYC friction and dashboard quality decide who you actually keep.",
    image: "/images/blog/payments.png",
    body: [
      "Founders search “cheapest payment gateway India 2026” and land on Razorpay, Cashfree, PayU, Instamojo, Easebuzz. Domestic card TDR clusters around 1.7–2%. UPI is cheaper. Annual maintenance and international cards change the total. Published comparisons in 2026 still warn: success rate and T+ settlement move net revenue more than 0.1% of TDR.",
      "For most MSME websites we default to a well-documented Indian gateway the CA and staff will actually log into — often Razorpay or Cashfree — then match KYC to your entity. Instamojo-class tools can be enough for very small volume. The wrong choice is staying on a personal GPay QR once GST and refunds exist.",
      "Webify Bharat is not a gateway reseller. We integrate checkout, payment links and WhatsApp receipts on your site, and we will say if KYC is the blocker before we pretend the button will go live tomorrow.",
    ],
  },
  {
    slug: "hindi-hinglish-business-website",
    title: "Hindi and Hinglish websites: English-only UI loses the counter",
    excerpt:
      "If the shop runs in Hindi, Tamil or Bengali, the site and WhatsApp buttons should too. Bilingual beats a US-English template.",
    image: "/images/blog/website.png",
    body: [
      "India’s internet is mobile and multilingual. A site that only speaks agency English fails the customer who thinks in Hindi, Hinglish, Tamil or Bengali. Buttons should say what the counter says: “WhatsApp karein”, “Fees bharein”, “Order now”. Google also uses on-page language as a relevance signal for vernacular queries.",
      "You do not always need a full duplicate site. Often a Hindi headline, bilingual service names, and WhatsApp templates in the language staff already type are enough. Unicode, font loading (not just Latin), and avoiding broken krutidev leftovers matter.",
      "Webify Bharat writes and builds that way when the business is not an English-first brand. The LLM-visible entity stays “Webify Bharat” in English; the customer-facing layer matches the floor.",
    ],
  },
  {
    slug: "local-seo-near-me-india",
    title: "“Near me” SEO in India: Map Pack, service pages, and reviews you reply to",
    excerpt:
      "On-page city pages, GBP category, and real photos beat buying another directory listing.",
    image: "/images/blog/growth.png",
    body: [
      "Local ranking factors still stack like this: relevance (category + on-page), distance, and prominence (reviews, links, brand searches). White-hat local SEO in India is not 200 fake citations. It is a verified Google Business Profile, matching NAP on an owned website, dedicated service pages (“AC repair in [area]”), and reviews you actually answer.",
      "Directory spam (Justdial, Sulekha, IndiaMART) can help in a few trades and hurt in others. If the listing does not send unique, profitable work, stop paying. Put the same energy into photos, Q&A on GBP, and a page that loads on a mid-range Android over 4G.",
      "Webify Bharat builds those service pages and lines them up with Maps. That is how “near me” becomes an owned WhatsApp, not a lead pack.",
    ],
  },
  {
    slug: "clinic-whatsapp-appointments-india",
    title: "Clinic websites and WhatsApp appointments in India (without buying a hospital EMR)",
    excerpt:
      "Patients book and pay the way they already live: Google, WhatsApp, UPI. Reminders cut no-shows. You may not need a ₹50,000 clinic suite on day one.",
    image: "/images/blog/whatsapp.png",
    body: [
      "Clinic software in India now starts in the low hundreds of rupees a month. WhatsApp-first reception products exist. Hospital EMRs cost much more. Most independent clinics need a simpler public layer first: a site that proves the doctor is real, GBP for “clinic near me”, a WhatsApp number that can take a slot, UPI for fees, and reminder messages the day before.",
      "We do not replace your clinical record. We stop lost calls and cash-only chaos at the door. If you later add an Indian clinic OS, the website and WhatsApp should still be yours — not rented from a directory.",
    ],
  },
  {
    slug: "bing-places-copilot-india",
    title: "Bing Places and Copilot: why Indian SMEs should still list off Google",
    excerpt:
      "Google wins Indian search. Copilot, Bing Chat and some Windows defaults still read Bing Places. NAP insurance is free.",
    image: "/images/blog/analytics.png",
    body: [
      "Google is the default in India. Bing’s share is smaller, but Microsoft Copilot and Bing Chat retrieve Bing Places and web pages when they answer “best [trade] in [city]”. Listing on Bing Places for Business is free: Microsoft account, NAP, hours, photos, same as GBP.",
      "Keep name, address and phone identical to Google and the website. Conflicting citations confuse both search engines and LLMs. Webify Bharat treats Bing Places as cheap insurance next to GBP — not as a paid directory.",
      "If you only have time for one profile, do Google first. If you have twenty minutes, do Bing second. Then spend the rest of the week on the website those listings point to.",
    ],
  },
  {
    slug: "gst-website-quote-india",
    title: "GST on website quotes in India: 18% and why “cheap” is not cheaper",
    excerpt:
      "Most agency and freelancer numbers are exclusive of GST. Ask. Then compare owned build cost to a year of lead packs.",
    image: "/images/blog/gst.png",
    body: [
      "Indian web quotes are usually exclusive of 18% GST unless the line says inclusive. A ₹75,000 proposal becomes ₹88,500. A ₹9,999 Launch becomes more on the tax invoice if you are billed GST. Always line up two quotes on the same tax basis, and check whether hosting, WhatsApp BSP fees and gateway MDR are in or out.",
      "GST-compliant invoices from your vendor are not optional theatre if you will claim input credit. The same discipline should apply to your own customer invoices — numbered, tied to a payment, exportable for your CA.",
      "Webify Bharat will state tax treatment in the proposal. The strategic comparison is still: one owned system versus a year of Justdial, IndiaMART or aggregator commission on customers you already had.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const navLinks = [
  { to: "/services", label: "Services", icon: "services" },
  { to: "/industries", label: "Industries", icon: "industries" },
  { to: "/cities", label: "Cities", icon: "industries" },
  { to: "/work", label: "Work", icon: "work" },
  { to: "/pricing", label: "Pricing", icon: "pricing" },
  { to: "/about", label: "About", icon: "about" },
  { to: "/blog", label: "Blog", icon: "blog" },
] as const;

export const serviceFeatures = [
  "Strategy & setup",
  "Mobile-first experience",
  "Automation-ready workflows",
  "Analytics & tracking",
  "Secure integrations",
  "Ongoing optimization",
] as const;

export const industryFeatures = [
  "Digital presence",
  "Customer enquiries",
  "Payments & collections",
  "Automation",
  "Reporting & insights",
  "Operational control",
] as const;
