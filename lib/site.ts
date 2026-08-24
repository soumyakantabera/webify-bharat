export const SITE = {
  name: "Webify Bharat",
  tagline: "Digital Operations. Real Growth.",
  description:
    "Websites, payments, WhatsApp automation, analytics and business systems for Indian businesses.",
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
      "Fast, conversion-focused websites built to help your business look credible and get found.",
    image: "website.png",
    photo: "business-owner.webp",
    headline: "Your website should feel like part of the business",
    story:
      "A strong website is not decoration. It should make it easier for customers to understand, trust and contact you.",
    featured: true,
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Portals",
    description:
      "Catalogs, online stores, customer portals and order flows that make selling simpler.",
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
    description: "Automated replies, lead nurturing, broadcasts and transactional messaging.",
    image: "whatsapp.png",
    photo: "whatsapp.webp",
    headline: "Customer conversations are operational work",
    story:
      "Turn enquiries, updates and follow-ups into a repeatable system without losing the human tone.",
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
    description: "Online ordering, QR payments, WhatsApp and repeat-customer systems.",
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
    title: "Website Growth",
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
    title: "Payment Trends",
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
    title: "WhatsApp Automation",
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
    title: "Analytics Guide",
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
    title: "GST & Compliance",
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
    title: "Business Growth",
    excerpt: "A practical roadmap from disconnected tools to one operating system.",
    image: "/images/blog/growth.png",
    body: [
      "Growth stalls when every new customer adds more coordination: another spreadsheet, another group chat, another person who knows the real status. Tools pile up, but the business still runs on memory.",
      "A useful digital operating system is small. Website for demand. Payments for collection. WhatsApp for conversation. A simple record of customers and jobs. A weekly numbers view. Anything that does not serve those five is optional.",
      "Sequence matters. First, be findable and contactable. Second, collect money cleanly. Third, stop losing follow-ups. Fourth, measure. Fifth, automate the repetitive middle. Skipping to automation on a messy process only scales the mess.",
      "Pick one bottleneck this quarter — usually enquiries, payments, or follow-ups — and make it boringly reliable. Compounding comes from a system the team actually uses, not from buying the next platform.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
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

export const faqs = [
  {
    q: "How do we start?",
    a: "A short discovery call on WhatsApp or a consult. We map the current operation, pick the highest-impact first move, and share a clear scope before any build starts.",
  },
  {
    q: "Are the package prices fixed?",
    a: "They are starting points for common scopes. Final pricing follows your actual workflows, integrations and content. You will see the scope in writing before work begins.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Websites are often the front door. We also set up payments, WhatsApp automation, analytics and operational workflows so the business can run as one system.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused Launch website is often weeks, not months. Growth and Command work depends on integrations. We sequence so you get a usable first version quickly.",
  },
] as const;
