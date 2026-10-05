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
