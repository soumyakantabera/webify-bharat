import type { BlockSlug } from "@/lib/blocks";
import type { BlogCategorySlug } from "@/lib/blog-categories";

/**
 * Blog posts (content-plan §9.14). Practical guides, no invented statistics,
 * no market-rate claims, and no headline framed as a contest ("vs", "beat").
 * Platforms are named as tools a business can use, never as opponents.
 * Drafts (`published: false`) are outlines for the owner to approve — they are
 * never rendered, linked or listed in the sitemap.
 */
export type PostSection = { heading: string; paragraphs: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategorySlug;
  /** Short "TL;DR" bullets at the top of the post. */
  tldr: string[];
  sections: PostSection[];
  /** Block offered as the inline CTA tile around 40% of the way down. */
  block: BlockSlug;
  faqs?: { q: string; a: string }[];
  /** Series rail on the hub (§9.14). */
  series?: string;
  featured?: boolean;
  published: boolean;
  /** ISO date of the last meaningful edit. */
  updated: string;
};

const U = "2026-10-05";

export const posts: Post[] = [
  // ---------- Get found ----------
  {
    slug: "website-growth",
    title: "How to build a business website that gets enquiries",
    excerpt: "What a small-business website needs on the first screen, on every page and after launch, so visitors actually get in touch.",
    category: "get-found",
    block: "site",
    series: "Get found",
    featured: true,
    published: true,
    updated: U,
    tldr: ["Say what you do and who it's for on the first screen.", "Make the next step obvious — usually a WhatsApp button.", "Measure enquiries, not visits."],
    sections: [
      {
        heading: "The first screen does most of the work",
        paragraphs: [
          "A visitor decides quickly whether they're in the right place. The first screen should say what you do, who it's for, and how to reach you — with a real photo of the business rather than stock imagery.",
          "For most Indian small businesses the next step is a WhatsApp message or a call, not a long form. Put that button where a thumb can reach it on a phone.",
        ],
      },
      {
        heading: "Every page answers three questions",
        paragraphs: [
          "Who is this for? What happens after I get in touch? How soon can we start? A page that answers those three is doing its job; a page that doesn't is decoration.",
          "Fast loading on a mid-range phone, readable text and a visible contact button aren't extras — they decide whether people stay.",
        ],
      },
      {
        heading: "After launch, measure what matters",
        paragraphs: [
          "Count WhatsApp taps, calls and form starts per page. Those tell you which pages bring customers. Traffic on its own is a weather report.",
          "Review the numbers monthly and change one thing at a time — a headline, a photo, the order of sections — so you can see what helped.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a big website?", a: "Usually not. A few clear pages that answer real questions do more than many thin ones." },
      { q: "Should the website have a contact form?", a: "Offer the channel your customers already use. For most, that's WhatsApp, with a call option alongside." },
    ],
  },
  {
    slug: "google-business-profile-india",
    title: "Google Business Profile: getting found on Maps, and why your website still matters",
    excerpt: "How to set up your Google Business Profile properly, and why it works best pointing at a website you control.",
    category: "get-found",
    block: "site",
    series: "Get found",
    published: true,
    updated: U,
    tldr: ["Many people find local businesses through Maps before anything else.", "Complete, verified profiles with real photos and replies to reviews do best.", "Point the profile at your own website and WhatsApp."],
    sections: [
      {
        heading: "Set the profile up completely",
        paragraphs: [
          "Choose the most accurate primary category, add your hours, services, real photos and a short description in plain language. Verify the profile so Google trusts it.",
          "Reply to reviews — good and bad — politely and briefly. It shows the business is active and that a person reads them.",
        ],
      },
      {
        heading: "Keep your details identical everywhere",
        paragraphs: [
          "Your business name, address and phone number should match on Google, your website and any other listing. Mismatched details confuse both people and search engines.",
        ],
      },
      {
        heading: "The profile is not a website",
        paragraphs: [
          "After someone finds you on Maps, they often want more: prices, photos, timings, a way to message. Link the profile to a website you control, with click-to-call and WhatsApp buttons that work on a phone.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-near-me-india",
    title: "“Near me” searches: service pages, Maps and reviews you reply to",
    excerpt: "What helps a local business show up when people search for a service nearby — without buying junk listings.",
    category: "get-found",
    block: "site",
    series: "Get found",
    published: true,
    updated: U,
    tldr: ["Relevance, distance and reputation decide local results.", "A page per service and area helps people and search engines.", "Real reviews and replies beat bulk directory listings."],
    sections: [
      {
        heading: "What local search looks at",
        paragraphs: [
          "Search engines broadly weigh how relevant you are to the search, how close you are to the person searching, and how well-known and well-reviewed you are. You can't move your shop, but you can work on the other two.",
        ],
      },
      {
        heading: "Pages for what you actually do",
        paragraphs: [
          "A dedicated page for each main service — and for the areas you serve, where it makes sense — helps the right searches find you. Write them for people first: what you do, where, how long it takes, how to book.",
        ],
      },
      {
        heading: "Listings: quality over quantity",
        paragraphs: [
          "A few accurate listings with matching details help. Hundreds of low-quality listings rarely do. If a paid listing sends you good customers, keep it; if not, put that effort into photos, reviews and your own pages.",
        ],
      },
    ],
  },
  {
    slug: "hindi-hinglish-business-website",
    title: "Hindi, Hinglish and regional-language websites: speak like your counter",
    excerpt: "When a second language on your website helps, and how to add one without building two sites.",
    category: "get-found",
    block: "site",
    published: true,
    updated: U,
    tldr: ["If your customers think in Hindi, Tamil or Bengali, your buttons should too.", "You often don't need a full duplicate site.", "Proper fonts and real translation matter."],
    sections: [
      {
        heading: "Match the language of the shop floor",
        paragraphs: [
          "If your staff and customers talk in Hindi, Hinglish or a regional language, a site that only speaks formal English can feel distant. Buttons and key lines in the customer's language make the next step feel natural.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "Often a translated headline, service names in both languages and WhatsApp replies in the language your team already types are enough. A full second-language version can come later if customers use it.",
        ],
      },
      {
        heading: "Do it properly",
        paragraphs: [
          "Use proper Unicode fonts that load quickly on phones, and have a fluent person check the translation. Machine translation alone often reads oddly.",
        ],
      },
    ],
  },

  // ---------- Payments ----------
  {
    slug: "upi-payment-gateway-msme",
    title: "UPI for your business: moving from a personal QR to a payment gateway",
    excerpt: "Why a business payment gateway makes refunds, receipts and GST easier — and what you need to get one.",
    category: "payments",
    block: "pay",
    series: "Get paid properly",
    featured: true,
    published: true,
    updated: U,
    tldr: ["A personal QR mixes shop money and home money.", "A gateway gives receipts, refunds and a clean report.", "KYC needs business proof and a bank account."],
    sections: [
      {
        heading: "Why a personal QR stops working",
        paragraphs: [
          "Personal UPI is how most of India learned to pay, and it's fine to start with. But once business and household money share one account, refunds, reconciliation and GST filing get messy.",
        ],
      },
      {
        heading: "What a payment gateway adds",
        paragraphs: [
          "A gateway such as Razorpay or Cashfree accepts UPI, cards and net-banking into your business account, sends receipts automatically, shows failed payments and refunds, and gives your CA a report to work from.",
          "You can use it on your website, as payment links on WhatsApp, or as a QR at the counter.",
        ],
      },
      {
        heading: "What you need to get started",
        paragraphs: [
          "The gateway will ask for KYC: business proof, PAN and a bank account in the business's name. That's usually the slowest step, so start it early. Gateway fees are charged by the provider.",
        ],
      },
    ],
  },
  {
    slug: "razorpay-vs-cashfree-vs-payu",
    title: "Choosing a payment gateway: what to look at besides the fee",
    excerpt: "Razorpay, Cashfree, PayU and others all accept UPI and cards. Here's what to compare before you pick one.",
    category: "payments",
    block: "pay",
    series: "Get paid properly",
    published: true,
    updated: U,
    tldr: ["Check current fees on each provider's own pricing page.", "Settlement time, KYC and the dashboard matter as much as the rate.", "Pick one your staff and CA will actually use."],
    sections: [
      {
        heading: "Read the provider's own pricing",
        paragraphs: [
          "Fees differ by payment method, volume and business type, and they change. Always read the current rates on the provider's own site rather than a comparison article — including this one.",
        ],
      },
      {
        heading: "What else to compare",
        paragraphs: [
          "How quickly money reaches your bank. How smooth KYC is for your type of business. Whether the dashboard is easy for your staff. Whether it supports payment links, subscriptions or international cards if you need them.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We usually set up Razorpay or Cashfree for Indian payments and Stripe for international customers, matched to your entity and KYC. If KYC is going to be the blocker, we say so before promising a go-live date.",
        ],
      },
    ],
  },
  {
    slug: "payment-trends",
    title: "A smoother checkout: small changes that help customers pay",
    excerpt: "How to make paying you feel like a natural last step, online and at the counter.",
    category: "payments",
    block: "pay",
    published: true,
    updated: U,
    tldr: ["Let people pay the way they already do — usually UPI.", "Confirm instantly and send a receipt.", "Keep a record your accounts can reconcile."],
    sections: [
      {
        heading: "Collect at the moment of commitment",
        paragraphs: [
          "The best time to take payment is when the customer has decided — at booking, at checkout, at the counter. A payment link on WhatsApp works well for orders and bookings that start in chat.",
        ],
      },
      {
        heading: "Confirm, then record",
        paragraphs: [
          "A clear amount, a familiar method, an instant confirmation and an automatic receipt make customers comfortable. The same event should create the record your accounts need, so nothing is typed twice.",
        ],
      },
    ],
  },

  // ---------- WhatsApp ----------
  {
    slug: "whatsapp-business-api-india",
    title: "WhatsApp Business API: when the app on one phone isn't enough",
    excerpt: "What the WhatsApp Business Platform adds over the free app, and when a small business should switch.",
    category: "whatsapp",
    block: "chat",
    series: "WhatsApp that works",
    featured: true,
    published: true,
    updated: U,
    tldr: ["The free app is fine for one person and a few chats.", "The API adds shared inboxes, pre-approved messages and automation on your number.", "Conversation charges are billed by Meta."],
    sections: [
      {
        heading: "Signs you've outgrown the app",
        paragraphs: [
          "Several people need to answer the same number. Customers wait because one phone holds every conversation. Reminders and order updates depend on someone remembering.",
        ],
      },
      {
        heading: "What the API adds",
        paragraphs: [
          "The WhatsApp Business Platform lets several staff answer from one number, send pre-approved messages for reminders and receipts, and run simple flows for bookings and order status — with a person stepping in for anything unusual.",
        ],
      },
      {
        heading: "Costs to plan for",
        paragraphs: [
          "Meta charges per conversation, with different rates for different message types. Those charges are billed by Meta or its partners, not included in our fee. We design flows that keep useful messages and avoid spammy ones.",
        ],
      },
    ],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp automation that doesn't sound like a bot",
    excerpt: "The handful of WhatsApp flows that save the most time — and how to keep them warm and human.",
    category: "whatsapp",
    block: "chat",
    series: "WhatsApp that works",
    published: true,
    updated: U,
    tldr: ["Automate the boring, repeated answers.", "Always offer an easy way to reach a person.", "Send useful messages, rarely."],
    sections: [
      {
        heading: "Start with the repeated questions",
        paragraphs: [
          "Timings, price lists, location, booking, order status, payment confirmations. These come up every day and deserve the same good answer every time.",
        ],
      },
      {
        heading: "Keep a person close",
        paragraphs: [
          "Anything unusual should reach a human quickly. Write messages the way your staff would say them, in the language your customers use, and keep them short.",
        ],
      },
      {
        heading: "Broadcasts: permission first",
        paragraphs: [
          "Only message people who have opted in, and only when you have something useful to say. Confirmations and reminders are welcome; frequent promotions get muted.",
        ],
      },
    ],
  },
  {
    slug: "clinic-whatsapp-appointments-india",
    title: "Clinic appointments on WhatsApp — without a hospital system",
    excerpt: "How independent clinics can take bookings, reminders and fees on WhatsApp while clinical records stay where they are.",
    category: "whatsapp",
    block: "chat",
    published: true,
    updated: U,
    tldr: ["Most clinics need a simple public and front-desk layer first.", "Online slots and reminders reduce phone tag.", "Clinical records stay in your existing system."],
    sections: [
      {
        heading: "The front desk is where time goes",
        paragraphs: [
          "Patients look you up, check timings and want a slot. When that happens over calls, mornings disappear into phone tag. Online slots on your website and WhatsApp let patients book themselves.",
        ],
      },
      {
        heading: "Reminders and fees at booking",
        paragraphs: [
          "A WhatsApp reminder before each appointment, with an easy way to reschedule, helps fewer slots go empty. Taking the consultation fee at booking keeps payments in one place.",
        ],
      },
      {
        heading: "What we don't replace",
        paragraphs: [
          "We build the public and front-desk layer: website, booking, reminders, payments and follow-ups. Your clinical records stay in the system you use.",
        ],
      },
    ],
  },

  // ---------- Rent + Own ----------
  {
    slug: "justdial-vs-own-website",
    title: "Directory listings and your own website: use both, own the relationship",
    excerpt: "Directories help strangers find you. Your own website and WhatsApp keep the customers who already know you.",
    category: "rent-own",
    block: "site",
    series: "Rent + Own",
    featured: true,
    published: true,
    updated: U,
    tldr: ["Directories are good for being found by new customers.", "People who search your name should land on you.", "Check what each paid listing actually brings."],
    sections: [
      {
        heading: "What directories are good for",
        paragraphs: [
          "Listings on Justdial, Sulekha or IndiaMART can put you in front of people searching a category who don't know you yet. That's useful, especially early on.",
        ],
      },
      {
        heading: "Where your own channel matters",
        paragraphs: [
          "Customers who already know your name, or were referred to you, should find your own website and WhatsApp — not a listing page shared with others in your category.",
          "Your own site, Google Business Profile and WhatsApp number keep enquiries coming straight to you, with no fee per enquiry.",
        ],
      },
      {
        heading: "Review your paid listings",
        paragraphs: [
          "Once a year, look at what each paid listing brought: how many enquiries, how many became customers, and whether they would have found you anyway. Keep what works.",
        ],
      },
    ],
  },
  {
    slug: "zomato-commission-vs-own-ordering",
    title: "Delivery apps and direct ordering: keep both, and give regulars a direct path",
    excerpt: "Delivery apps bring new customers. A direct menu, WhatsApp and UPI give your regulars another way to order.",
    category: "rent-own",
    block: "store",
    series: "Rent + Own",
    published: true,
    updated: U,
    tldr: ["Delivery apps are useful for reaching new customers.", "Regulars can be offered a direct way to order.", "Check your own contract for what each order costs you."],
    sections: [
      {
        heading: "Why the apps are worth keeping",
        paragraphs: [
          "Zomato and Swiggy put your kitchen in front of people browsing for food. For new customers, that reach is hard to replicate.",
        ],
      },
      {
        heading: "A direct path for regulars",
        paragraphs: [
          "Customers who already love your food can be offered a direct menu on your website or WhatsApp, with UPI payment and order updates. Many will happily use it for repeat orders.",
        ],
      },
      {
        heading: "Do your own maths",
        paragraphs: [
          "Your platform contract sets what each order costs you. Compare that with the cost of running your own ordering for regulars, using your real numbers — not an industry average.",
        ],
      },
    ],
  },

  // ---------- Costs & GST ----------
  {
    slug: "website-cost-india-2026",
    title: "What a business website costs in India — and what to ask before you pay",
    excerpt: "Quotes vary widely. Here's how to compare them fairly, and how our setup-plus-monthly pricing works.",
    category: "costs-gst",
    block: "site",
    series: "Costs, clearly",
    published: true,
    updated: U,
    tldr: ["Compare scope, not just the first number.", "Ask what's included after launch: hosting, updates, support.", "Ask whether tax is included."],
    sections: [
      {
        heading: "Why quotes vary so much",
        paragraphs: [
          "A template site, a custom-designed site, and a site with a store, payments and WhatsApp automation are very different jobs. Quotes reflect that, so compare what's actually included.",
        ],
      },
      {
        heading: "Questions to ask every vendor",
        paragraphs: [
          "Who hosts it, and what does that cost each month? Who updates it? What happens if something breaks? Who owns the domain and the accounts? Is tax included in the price?",
        ],
      },
      {
        heading: "How our pricing works",
        paragraphs: [
          "We charge a small setup fee and one monthly plan that covers hosting, updates and support. The pricing page shows each stage, its limits and what's included, and the estimator gives you a rough number in a minute.",
        ],
      },
    ],
  },
  {
    slug: "gst-website-quote-india",
    title: "GST on software and website quotes: how to compare like with like",
    excerpt: "Check whether a quote includes GST, and what the invoice should show if you claim input credit.",
    category: "costs-gst",
    block: "ledger",
    series: "Costs, clearly",
    published: true,
    updated: U,
    tldr: ["Check whether each quote includes or excludes GST.", "Compare quotes on the same tax basis.", "A proper tax invoice matters if you claim input credit."],
    sections: [
      {
        heading: "Inclusive or exclusive?",
        paragraphs: [
          "Two quotes can look different simply because one includes GST and the other doesn't. Ask each vendor, and compare on the same basis.",
        ],
      },
      {
        heading: "What a proper invoice shows",
        paragraphs: [
          "If you're GST-registered and plan to claim input credit, the vendor's invoice needs their GSTIN, yours, the tax breakup and the correct details. Your CA can confirm what you need.",
        ],
      },
      {
        heading: "Our invoices",
        paragraphs: [
          "Our pricing page states how tax applies to our fees. Third-party costs — gateway fees, WhatsApp charges, licences — are billed by those providers.",
        ],
      },
    ],
  },
  {
    slug: "gst-compliance",
    title: "Easier GST filing starts with daily operations",
    excerpt: "When every sale creates its invoice and payment record, filing stops being a monthly scramble.",
    category: "costs-gst",
    block: "ledger",
    published: true,
    updated: U,
    tldr: ["Filing pain usually starts in day-to-day operations.", "Make each sale, payment and invoice one event.", "Your CA files faster from clean records."],
    sections: [
      {
        heading: "The scramble has a cause",
        paragraphs: [
          "Invoices issued late, cash collected off the books and expenses sitting in chats make every filing period a reconstruction job.",
        ],
      },
      {
        heading: "One event, one record",
        paragraphs: [
          "When a sale, its payment and its invoice are created together, the books stay close to reality. Payment matching and due-date reminders take care of most of the rest.",
        ],
      },
      {
        heading: "Work with your CA",
        paragraphs: [
          "We set up invoicing and exports; your CA files and advises. Clean exports mean they spend time on advice, not on chasing missing bills.",
        ],
      },
    ],
  },
  {
    slug: "analytics-guide",
    title: "The few numbers worth checking every Monday",
    excerpt: "Before building a big dashboard, track the handful of numbers that change decisions.",
    category: "costs-gst",
    block: "pulse",
    published: true,
    updated: U,
    tldr: ["Start with the questions you already ask.", "Track enquiries, conversions, collections and bottlenecks.", "Same definitions every week."],
    sections: [
      {
        heading: "Start with your questions",
        paragraphs: [
          "How many people got in touch? How many became customers? How much money actually came in? What's stuck? Those questions, not a template dashboard, should decide what you track.",
        ],
      },
      {
        heading: "One screen, same definitions",
        paragraphs: [
          "Put those few numbers on one screen and define them once. Comparing week to week only works if the numbers mean the same thing each time.",
        ],
      },
    ],
  },
  {
    slug: "business-growth",
    title: "From scattered apps to one system: a practical order of steps",
    excerpt: "A sensible sequence for connecting your website, payments, WhatsApp and records — one bottleneck at a time.",
    category: "costs-gst",
    block: "connect",
    published: true,
    updated: U,
    tldr: ["Fix one bottleneck at a time.", "Be findable, get paid cleanly, stop losing follow-ups, then measure.", "Automate only processes that already work."],
    sections: [
      {
        heading: "Why tools pile up",
        paragraphs: [
          "Each new problem gets a new app, and soon the real status of an order lives in someone's memory. More tools rarely fix that; connecting the right ones does.",
        ],
      },
      {
        heading: "A sensible order",
        paragraphs: [
          "First, be easy to find and contact. Second, collect money cleanly. Third, stop losing follow-ups. Fourth, measure. Fifth, automate the repeated middle. Automating a messy process only speeds up the mess.",
        ],
      },
    ],
  },

  // ---------- AI & search ----------
  {
    slug: "bing-places-copilot-india",
    title: "Bing Places and AI assistants: an easy listing worth adding",
    excerpt: "Google comes first, but a free Bing Places listing helps Microsoft's search and assistants show correct details.",
    category: "ai-search",
    block: "site",
    published: true,
    updated: U,
    tldr: ["Do Google Business Profile first.", "Bing Places is free and quick to set up.", "Keep details identical everywhere."],
    sections: [
      {
        heading: "Why bother with Bing",
        paragraphs: [
          "Google is the main search engine for most people in India. But Microsoft's search and assistants draw on Bing's data, and a listing costs nothing but a little time.",
        ],
      },
      {
        heading: "Keep details consistent",
        paragraphs: [
          "Use exactly the same business name, address, phone and hours as on Google and your website. Consistent details help search engines and AI assistants describe you correctly.",
        ],
      },
    ],
  },

  // ---------- Drafts: outlines for owner approval (§9.14) ----------
  ...(
    [
      ["gst-or-udyam-first", "GST or Udyam first? A plain guide for new businesses", "start"],
      ["payment-gateway-documents", "Documents you need for a payment gateway account", "start"],
      ["home-business-launch-checklist", "A launch checklist for a home business", "start"],
      ["stripe-for-indian-exporters", "Stripe for Indian exporters: getting paid from abroad", "payments"],
      ["why-templates-cost-more-later", "Why templates can cost more later", "custom"],
      ["what-custom-should-include", "What “custom” should actually include", "custom"],
      ["what-is-ai-visibility", "What is AI visibility for small businesses?", "ai-search"],
      ["how-ai-assistants-pick-businesses", "How AI assistants decide which businesses to mention", "ai-search"],
      ["seo-or-ads-first", "SEO or ads: where to start on a small budget", "ai-search"],
    ] as const
  ).map(
    ([slug, title, category]): Post => ({
      slug,
      title,
      excerpt: "Outline — awaiting owner approval.",
      category,
      block: "site",
      published: false,
      updated: U,
      tldr: [],
      sections: [],
    }),
  ),
];

export const publishedPosts = posts.filter((p) => p.published);

export function getPost(slug: string) {
  return publishedPosts.find((p) => p.slug === slug);
}

/** Rough reading time from the post's text (200 words a minute). */
export function readMinutes(post: Post) {
  const words = [post.excerpt, ...post.tldr, ...post.sections.flatMap((s) => [s.heading, ...s.paragraphs])].join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function relatedPosts(post: Post, count = 3) {
  const same = publishedPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = publishedPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...rest].slice(0, count);
}
