import { waLink } from "@/lib/wa-link";

/**
 * Prefilled WhatsApp messages (content-plan §4.2).
 * Every CTA on the site picks one of these and passes it through `waLink()`.
 */
export const WA_MSG = {
  default: "Hi Webify Bharat! I'd like to discuss a custom solution for my business.",
  organise: "Hi! My business is running and I want everything organised into one custom system.",
  launch: "Hi! I'm starting a new business and need everything set up from scratch.",
  grow: "Hi! My business is online and I want to scale it. Can we talk?",
  desk: "Hi! I'd like a custom CRM/ERP for my business. Can we discuss?",
  team: "Hi! I need an employee portal with role-based access for my team.",
  workspace: "Hi! I need business email and docs set up (Google / Microsoft / your stack).",
  budget: "Hi! I have a tight budget. Can you set up Zoho or Odoo for us?",
  strategy: "Hi! I'd like a paid strategy session to plan my business's digital setup.",
  marketing: "Hi! I want more customers from Google, maps, ads and AI assistants.",
  seo: "Hi! I want my business to show up on Google.",
  ads: "Hi! I want to run Google / Meta ads that bring enquiries.",
  aiVisibility: "Hi! Can you check how my business appears in ChatGPT and other AI assistants?",
  featured: "Hi! I'd like my business to be one of your first client stories.",
  notFound: "Hi! I was looking for something on your site and couldn't find it.",
} as const;

export const waBlock = (block: string) => `Hi! I'm interested in ${block} for my business.`;
export const waTool = (tool: string) => `Hi! We use ${tool}. Can you build around it?`;
export const waIndustry = (industry: string) =>
  `Hi! I run a ${industry} business and want to discuss a custom solution.`;
export const waCity = (city: string) => `Hi! I'm based in ${city} and want to discuss my business.`;
export const waPrototype = (name: string) => `Hi! I'd like a walkthrough of the "${name}" prototype.`;
export const waPrototypes = (industry: string) => `Hi! I'd like to see prototypes for a ${industry} business.`;
export const waTier = (tier: string) =>
  `Hi! I'm interested in the ${tier} starting point. Can you scope it for me?`;
export const waCompass = (offer: string) => `Hi! I'd like to book a ${offer}.`;
export const waFiling = (filing: string) => `Hi! I want help with ${filing} registration.`;
export const waPost = (title: string) => `Hi! I read "${title}" and have a question.`;
export const waEstimate = (o: { path: string; tier: string; addons: string[]; from: string }) =>
  `Hi! My rough scope: Path ${o.path}; Tier ${o.tier}; Add-ons ${o.addons.length ? o.addons.join(", ") : "none"}; Estimated from ${o.from}. Please share an exact quote.`;

export const WA_DEFAULT = waLink(WA_MSG.default);
