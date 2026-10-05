import type { BlockSlug } from "@/lib/blocks";

/** Webify Reach — marketing (content-plan §2.4c, §9.7d, §10.4). */
export type ReachSlug = "seo" | "ads" | "local" | "ai-visibility" | "campaigns";

export type ReachService = {
  slug: ReachSlug;
  name: string;
  short: string;
  kicker: string;
  promise: string;
  headline: string;
  whatWeDo: string[];
  caveat: string;
  colour: string;
  icon: string;
  photo: string;
  mock: string;
  waMessage: string;
  /** Three stat-free reasons it matters (§9.7d #2). */
  why: { title: string; text: string }[];
  /** Price line from §10.4. */
  pricingNote: string;
  related: BlockSlug[];
  faqs: { q: string; a: string }[];
};

export const reachServices: ReachService[] = [
  {
    slug: "seo",
    name: "Reach Search",
    short: "Search (SEO)",
    kicker: "SEO · search engine optimisation",
    promise: "Show up on Google when people search for what you sell.",
    headline: "Show up on Google when people search for what you sell.",
    whatWeDo: ["Keyword plan", "On-page SEO", "Speed", "Content", "Technical fixes", "Monthly report"],
    caveat: "SEO takes months, and no one can guarantee a rank.",
    colour: "--rani",
    icon: "MagnifyingGlass",
    photo: "IMG-B01",
    mock: "SearchResultMock",
    waMessage: "Hi! I want my business to show up on Google.",
    why: [
      { title: "People search before they buy", text: "Most customers look you up — or look up what you sell — before they visit, call or order." },
      { title: "Organic results don't charge per click", text: "Once you rank, each visit from search doesn't cost you a fee." },
      { title: "It compounds", text: "Good pages and clean technical work keep paying back month after month." },
    ],
    pricingNote: "Reach Search: ₹15,000/month (Starter) or ₹30,000/month (Growth). We recommend at least 6 months.",
    related: ["site", "pulse"],
    faqs: [
      { q: "How long does SEO take?", a: "Usually months, not weeks. We recommend at least six months and report progress every month." },
      { q: "Can you guarantee a first-page rank?", a: "No one honestly can. We do the work that improves your chances and show you what changed." },
      { q: "Do I need a new website first?", a: "Not always. We start with an audit; if your current site is holding results back, we'll say so plainly." },
    ],
  },
  {
    slug: "ads",
    name: "Reach Ads",
    short: "Ads & SEM",
    kicker: "SEM · Google & Meta ads",
    promise: "Ads that bring enquiries, not just clicks.",
    headline: "Ads that bring enquiries, not just clicks.",
    whatWeDo: ["Google Search & Maps ads", "Meta (Facebook/Instagram) ads", "Landing pages", "Conversion tracking to WhatsApp"],
    caveat: "Ad spend is paid directly to Google or Meta, separate from our fee.",
    colour: "--marigold",
    icon: "Target",
    photo: "IMG-B04",
    mock: "AdCardMock",
    waMessage: "Hi! I want to run Google / Meta ads that bring enquiries.",
    why: [
      { title: "Results start quickly", text: "Ads can bring enquiries while slower work like SEO builds up." },
      { title: "You choose who sees them", text: "By city, area, search words and interests — not everyone." },
      { title: "Every enquiry is tracked", text: "Ads lead to WhatsApp or your site, so you can see what each rupee brought in." },
    ],
    pricingNote: "Reach Ads: ₹10,000 setup, then ₹15,000/month up to ₹1L ad spend, 12% of spend above that. Ad spend is paid to Google or Meta directly.",
    related: ["site", "chat"],
    faqs: [
      { q: "Do I pay for ads through you?", a: "No. Ad spend is paid directly to Google or Meta. Our fee covers planning, running and reporting." },
      { q: "What should I spend on ads?", a: "It depends on your city and category. We suggest a starting budget in your scope and adjust it from real results." },
      { q: "Where do the ads send people?", a: "To a landing page or straight to WhatsApp, with tracking so enquiries are counted." },
    ],
  },
  {
    slug: "local",
    name: "Reach Local",
    short: "Local & maps",
    kicker: "Local SEO · maps & listings",
    promise: "Be the shop people find on the map.",
    headline: "Be the shop people find on the map.",
    whatWeDo: ["Google Business Profile", "Bing Places", "Apple Maps", "Reviews flow", "Local citations", "City pages"],
    caveat: "Each map platform's own rules apply.",
    colour: "--mehendi",
    icon: "MapPin",
    photo: "IMG-I-RET-1",
    mock: "MapPinCard",
    waMessage: "Hi! I want my business to be found on Google Maps.",
    why: [
      { title: "Maps is where nearby customers look", text: "“Near me” searches show the map first." },
      { title: "Reviews build trust", text: "A steady flow of genuine reviews helps people choose you." },
      { title: "Consistency matters", text: "The same name, address and hours everywhere helps search engines and AI tools trust your details." },
    ],
    pricingNote: "Reach Local: ₹8,000/month; setup ₹0 for plan clients (₹5,000 otherwise). Business plans include Local Lite.",
    related: ["site", "chat"],
    faqs: [
      { q: "What's the difference from Local Lite?", a: "Local Lite (in Business plans) is monthly Google profile posts. The full plan adds a reviews flow, citations and Bing and Apple Maps." },
      { q: "Can you get me more reviews?", a: "We set up an easy, honest way to ask happy customers. We never buy or fake reviews." },
      { q: "Do I need a shop address?", a: "Service-area businesses can still be listed; we'll set it up the way each platform allows." },
    ],
  },
  {
    slug: "ai-visibility",
    name: "Reach AI",
    short: "AI visibility",
    kicker: "AI visibility · ChatGPT, Gemini, Perplexity, Copilot",
    promise: "When customers ask ChatGPT or Gemini, your business should be in the answer.",
    headline: "When customers ask AI, your business should be in the answer.",
    whatWeDo: ["Structured data", "llms.txt", "Consistent business info across the web", "FAQ & answer-style content", "AI-assistant visibility checks"],
    caveat: "No one can guarantee AI mentions. We improve the signals AI tools read.",
    colour: "--indigo",
    icon: "Sparkle",
    photo: "IMG-B05",
    mock: "AiAnswerMock",
    waMessage: "Hi! Can you check how my business appears in ChatGPT and other AI assistants?",
    why: [
      { title: "Customers now ask AI assistants", text: "More people ask ChatGPT-style tools for recommendations instead of searching." },
      { title: "AI tools repeat what they can verify", text: "Clear, consistent, structured information about you is what they read." },
      { title: "Few small businesses do this yet", text: "Getting your details right now is easier than catching up later." },
    ],
    pricingNote: "Reach AI: audit ₹15,000, then ₹20,000/month (₹10,000/month alongside Reach Search). Command plans include AI Basic.",
    related: ["site", "pulse"],
    faqs: [
      { q: "What is AI visibility?", a: "Making sure AI assistants like ChatGPT, Gemini and Perplexity can find clear, correct information about your business when customers ask." },
      { q: "Can you guarantee ChatGPT mentions me?", a: "No. No one can. We improve the signals these tools use and check how you appear every month." },
      { q: "What do you actually change?", a: "Structured data, an llms.txt file, consistent business details across the web, and answer-style FAQ content." },
    ],
  },
  {
    slug: "campaigns",
    name: "Reach Campaigns",
    short: "Campaigns",
    kicker: "WhatsApp & social campaigns",
    promise: "Bring regulars back.",
    headline: "Bring your regulars back.",
    whatWeDo: ["WhatsApp broadcasts (opt-in)", "Festival campaigns", "Social posting plan"],
    caveat: "WhatsApp / Meta message charges apply.",
    colour: "--peacock",
    icon: "MegaphoneSimple",
    photo: "IMG-R04",
    mock: "BroadcastBubbles",
    waMessage: "Hi! I want to run WhatsApp and social campaigns for my regulars.",
    why: [
      { title: "Regulars are your best customers", text: "Bringing someone back is easier than finding someone new." },
      { title: "WhatsApp gets read", text: "Opt-in messages on WhatsApp reach people where they already are." },
      { title: "Festivals and seasons matter", text: "A planned calendar beats last-minute posts." },
    ],
    pricingNote: "Reach Campaigns: ₹10,000/month. WhatsApp and Meta message charges are extra.",
    related: ["chat", "store"],
    faqs: [
      { q: "Will you spam my customers?", a: "No. We only message people who opted in, and every message has a way to stop." },
      { q: "Who pays the WhatsApp message charges?", a: "They're billed by Meta or the provider, separately from our fee." },
      { q: "Do you post on Instagram and Facebook too?", a: "Yes — a social posting plan is part of Campaigns." },
    ],
  },
];

export type ReachPlan = { name: string; setup: string; monthly: string; notes: string };

/** §10.4 */
export const reachPlans: ReachPlan[] = [
  { name: "Reach Local (full)", setup: "₹0 for plan clients · ₹5,000 otherwise", monthly: "₹8,000", notes: "Business includes Local Lite; full plan adds reviews flow, citations, Bing/Apple Maps" },
  { name: "Reach Search — Starter / Growth", setup: "—", monthly: "₹15,000 / ₹30,000", notes: "No guaranteed ranks; we recommend 6 months" },
  { name: "Reach Ads (Google & Meta)", setup: "₹10,000", monthly: "₹15,000 (≤ ₹1L spend), 12% above", notes: "Ad spend paid to Google/Meta" },
  { name: "Reach AI (full)", setup: "Audit ₹15,000", monthly: "₹20,000 · ₹10,000 with Search", notes: "Command includes AI Basic" },
  { name: "Reach Campaigns", setup: "—", monthly: "₹10,000", notes: "Message charges extra" },
  { name: "Reach Growth bundle", setup: "₹0", monthly: "₹30,000", notes: "Search Starter + Local + AI add-on" },
];

export const REACH_WHY =
  "Your customers search on Google, check maps, scroll Instagram — and now ask AI assistants. Most small businesses are invisible in at least one of those places. Reach fixes that.";

export function getReachService(slug: string) {
  return reachServices.find((s) => s.slug === slug);
}

/** Marketing hub FAQ (§9.7c #8). */
export const REACH_HUB_FAQS = [
  { key: "guarantee", q: "Can you guarantee rankings or AI mentions?", a: "No one honestly can. We do the work that improves your chances and report results every month." },
  { key: "seo-time", q: "How long does SEO take?", a: "Usually months, not weeks — we recommend at least six months." },
  { key: "ad-budget", q: "Is there a minimum ad budget?", a: "We suggest a starting budget for your city and category in the written scope. Ad spend is paid to Google or Meta directly; our fee starts at ₹15,000/month for up to ₹1L of spend." },
  { key: "ai-visibility", q: "What is AI visibility?", a: "Making sure AI assistants like ChatGPT, Gemini and Perplexity can find clear, correct information about your business when customers ask." },
  { key: "new-site", q: "Do I need a new website first?", a: "Not always. We start with an audit and tell you plainly if your current site is holding results back." },
];
