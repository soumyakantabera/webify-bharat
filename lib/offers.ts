/**
 * Pricing — single source of truth (content-plan §10).
 * Low setup + monthly stage plans, limits, over-limit charges and add-ons.
 * All prices exclude GST; "+ GST" is shown only once GSTIN is live (see gstLive() in lib/site.ts).
 */

export type StageSlug = "starter" | "business" | "command" | "custom";

export type Stage = {
  slug: StageSlug;
  name: string;
  /** Phosphor icon name for the stage (rendered with <Icon />). */
  icon: string;
  tagline: string;
  /** Display strings, e.g. "₹5,000" or "from ₹50,000". */
  setup: string;
  monthly: string;
  annual: string;
  /** Numeric values for the estimator; `from` marks a minimum. */
  setupAmount: number;
  monthlyAmount: number;
  from?: boolean;
  bestFor: string;
  popular: boolean;
  /** Six headline features for stage cards (§10.8). */
  keyFeatures: string[];
  /** Four headline limits for stage cards (§10.8). */
  keyLimits: string[];
  /** Plan payment terms (§10.6). */
  terms: string;
  /** Image slot for the stage card strip (§9.9). */
  photo: string;
};

export const stages: Stage[] = [
  {
    slug: "starter",
    name: "Starter",
    icon: "Plant",
    tagline: "Get online properly.",
    setup: "₹5,000",
    monthly: "₹3,000",
    annual: "₹30,000/yr",
    setupAmount: 5000,
    monthlyAmount: 3000,
    bestFor: "Shops, clinics, consultants, tutors",
    popular: false,
    keyFeatures: [
      "Custom-designed website (mobile-first)",
      "Hosting, SSL, backups, uptime monitoring",
      "Google Business Profile setup",
      "SEO & AI-ready basics",
      "WhatsApp click-to-chat",
      "Business email setup",
    ],
    keyLimits: ["6 pages", "1 user", "1 location", "1 change hour / month"],
    terms: "Setup + first month upfront; monthly billing from launch.",
    photo: "IMG-H01",
  },
  {
    slug: "business",
    name: "Business",
    icon: "Star",
    tagline: "Sell, get paid, follow up.",
    setup: "₹10,000",
    monthly: "₹7,500",
    annual: "₹75,000/yr",
    setupAmount: 10000,
    monthlyAmount: 7500,
    bestFor: "Businesses taking orders, bookings and payments online",
    popular: true,
    keyFeatures: [
      "Everything in Starter",
      "Online store or booking module",
      "Razorpay / Cashfree payments",
      "WhatsApp Business API + automations",
      "Lead & customer tracker (Desk Lite)",
      "Owner dashboard + Reach Local Lite",
    ],
    keyLimits: ["15 pages", "3 users", "100 products", "300 orders or bookings / month"],
    terms: "Setup + first month upfront; monthly billing from launch.",
    photo: "IMG-B02",
  },
  {
    slug: "command",
    name: "Command",
    icon: "Buildings",
    tagline: "Run the whole business on one system.",
    setup: "₹15,000",
    monthly: "₹18,000",
    annual: "₹1,80,000/yr",
    setupAmount: 15000,
    monthlyAmount: 18000,
    bestFor: "Teams with staff, stock, dealers or outlets",
    popular: false,
    keyFeatures: [
      "Everything in Business",
      "Full CRM/ERP (Desk)",
      "Staff portal with roles & access control",
      "GST invoicing & payment matching",
      "Stripe international payments + integrations",
      "Reach AI Basic + monthly review call",
    ],
    keyLimits: ["15 users", "1,000 products", "2,000 orders or bookings / month", "3 locations"],
    terms: "Setup + first month upfront; monthly billing from launch.",
    photo: "IMG-H05",
  },
  {
    slug: "custom",
    name: "Custom",
    icon: "Scissors",
    tagline: "Built from zero, run for you.",
    setup: "from ₹50,000",
    monthly: "from ₹40,000",
    annual: "Quoted",
    setupAmount: 50000,
    monthlyAmount: 40000,
    from: true,
    bestFor: "Unique workflows, multi-unit, platforms",
    popular: false,
    keyFeatures: [
      "Everything in Command",
      "Built from zero for your workflow",
      "Custom owner dashboard",
      "Dedicated account lead",
      "Priority support + agreed SLA",
      "Quoted after a Compass session",
    ],
    keyLimits: ["Users: agreed", "Products: agreed", "Orders: agreed", "Locations: agreed"],
    terms: "40% start · 40% preview · 20% before launch on the setup fee; monthly from launch.",
    photo: "IMG-B09",
  },
];

export const PLAN_STAGES = stages.filter((s) => s.slug !== "custom");

/* ---------- Features (§10.1) ---------- */

export type FeatureCell = boolean | string;
export type FeatureGroup = "Website" | "Sell & pay" | "Run the business" | "Marketing" | "Support";

export type FeatureRow = {
  label: string;
  group: FeatureGroup;
  cells: Record<StageSlug, FeatureCell>;
};

const all = (v: FeatureCell = true): Record<StageSlug, FeatureCell> => ({ starter: v, business: v, command: v, custom: v });

export const featureRows: FeatureRow[] = [
  { label: "Custom-designed website (mobile-first)", group: "Website", cells: all() },
  { label: "Hosting, SSL, backups, uptime monitoring", group: "Website", cells: all() },
  { label: "Google Business Profile setup", group: "Marketing", cells: all() },
  { label: "SEO & AI-ready basics (schema, llms.txt)", group: "Marketing", cells: all() },
  { label: "WhatsApp click-to-chat", group: "Website", cells: all() },
  { label: "Business email setup (Google/Microsoft, licence extra)", group: "Website", cells: all("₹0") },
  { label: "White-label (your brand everywhere)", group: "Website", cells: all() },
  { label: "Online store or booking module", group: "Sell & pay", cells: { starter: false, business: true, command: "Both", custom: true } },
  { label: "Razorpay / Cashfree payments", group: "Sell & pay", cells: { starter: false, business: true, command: true, custom: true } },
  { label: "WhatsApp Business API + automations", group: "Sell & pay", cells: { starter: false, business: true, command: true, custom: true } },
  { label: "Lead & customer tracker (Desk Lite)", group: "Run the business", cells: { starter: false, business: true, command: "Full Desk", custom: "Full Desk" } },
  { label: "Owner dashboard (Pulse)", group: "Run the business", cells: { starter: false, business: "Basic", command: "Advanced", custom: "Custom" } },
  { label: "Reach Local Lite (monthly Google profile posts)", group: "Marketing", cells: { starter: false, business: true, command: true, custom: true } },
  { label: "Full CRM/ERP (Desk) — our prototype, or Odoo/Zoho configured", group: "Run the business", cells: { starter: false, business: false, command: true, custom: true } },
  { label: "Staff portal with roles & access control (Team)", group: "Run the business", cells: { starter: false, business: false, command: true, custom: true } },
  { label: "GST invoicing & payment matching (Ledger)", group: "Run the business", cells: { starter: false, business: false, command: true, custom: true } },
  { label: "Stripe international payments", group: "Sell & pay", cells: { starter: false, business: false, command: true, custom: true } },
  { label: "Integrations (Tally / Zoho / Shiprocket / Sheets)", group: "Run the business", cells: { starter: false, business: false, command: true, custom: true } },
  { label: "Reach AI Basic (quarterly AI-visibility check + fixes)", group: "Marketing", cells: { starter: false, business: false, command: true, custom: true } },
  { label: "Registrations filed (our fee)", group: "Run the business", cells: { starter: false, business: "GST + Udyam", command: "GST + Udyam + IEC", custom: "As needed" } },
  { label: "Monthly review call", group: "Support", cells: { starter: false, business: false, command: true, custom: true } },
  { label: "Dedicated account lead", group: "Support", cells: { starter: false, business: false, command: false, custom: true } },
  { label: "Support", group: "Support", cells: { starter: "Few hours, 7 days", business: "Few hours, 7 days", command: "Priority", custom: "Priority + agreed SLA" } },
];

/* ---------- Limits (§10.1) ---------- */

export type LimitKey = "pages" | "users" | "products" | "orders" | "automations" | "integrations" | "locations" | "changeHours" | "storageGb";

/** `null` = not available on this stage; `"agreed"` = set per contract. */
export type LimitValue = number | null | "agreed";

export const limitRows: { key: LimitKey; label: string; cells: Record<StageSlug, LimitValue> }[] = [
  { key: "pages", label: "Website pages", cells: { starter: 6, business: 15, command: 30, custom: "agreed" } },
  { key: "users", label: "Users / logins", cells: { starter: 1, business: 3, command: 15, custom: "agreed" } },
  { key: "products", label: "Products in store", cells: { starter: null, business: 100, command: 1000, custom: "agreed" } },
  { key: "orders", label: "Orders or bookings / month", cells: { starter: null, business: 300, command: 2000, custom: "agreed" } },
  { key: "automations", label: "WhatsApp automations", cells: { starter: null, business: 3, command: 10, custom: "agreed" } },
  { key: "integrations", label: "Integrations", cells: { starter: null, business: null, command: 3, custom: "agreed" } },
  { key: "locations", label: "Locations / branches", cells: { starter: 1, business: 1, command: 3, custom: "agreed" } },
  { key: "changeHours", label: "Change hours / month (non-rollover)", cells: { starter: 1, business: 3, command: 6, custom: "agreed" } },
  { key: "storageGb", label: "Data storage (GB)", cells: { starter: 2, business: 10, command: 50, custom: "agreed" } },
];

/* ---------- Over-limit charges (§10.2) ---------- */

/** Monthly ₹ per unit; `unitSize` is how many of the limit one unit buys. `null` = not offered. */
export const overLimits: { key: LimitKey; label: string; unitSize: number; cells: Record<"starter" | "business" | "command", number | null> }[] = [
  { key: "pages", label: "Extra page", unitSize: 1, cells: { starter: 300, business: 300, command: 200 } },
  { key: "users", label: "Extra user", unitSize: 1, cells: { starter: 600, business: 600, command: 400 } },
  { key: "products", label: "+100 products", unitSize: 100, cells: { starter: null, business: 1000, command: 500 } },
  { key: "orders", label: "+100 orders/bookings", unitSize: 100, cells: { starter: null, business: 750, command: 400 } },
  { key: "automations", label: "Extra WhatsApp automation", unitSize: 1, cells: { starter: null, business: 1000, command: 750 } },
  { key: "integrations", label: "Extra integration", unitSize: 1, cells: { starter: null, business: null, command: 2000 } },
  { key: "locations", label: "Extra location", unitSize: 1, cells: { starter: 2000, business: 2000, command: 1500 } },
  { key: "changeHours", label: "Extra change hour", unitSize: 1, cells: { starter: 1500, business: 1500, command: 1200 } },
  { key: "storageGb", label: "+10 GB storage", unitSize: 10, cells: { starter: 500, business: 500, command: 300 } },
];

export const OVER_LIMIT_RULE =
  "At 80% of any limit we message you on WhatsApp with both options — a small add-on or the next stage — and tell you which is cheaper. Nothing is charged without your OK.";

export const OVER_LIMIT_EXAMPLE =
  "A Business client with 6 users and 250 products would pay ₹7,500 + ₹1,800 + ₹1,500 = ₹10,800/month. Command at ₹18,000 adds a full CRM, staff portal, invoicing and integrations — we'll tell you when moving up makes sense.";

/* ---------- Add-ons (§10.3) ---------- */

export type Addon = {
  slug: string;
  name: string;
  kind: "monthly" | "one-time";
  availableOn: string;
  price: string;
  /** Numeric monthly/one-time amount when fixed; undefined when quoted or ranged. */
  amount?: number;
};

export const addons: Addon[] = [
  { slug: "payments", name: "Online payments (Razorpay/Cashfree)", kind: "monthly", availableOn: "Starter", price: "₹1,000", amount: 1000 },
  { slug: "booking", name: "Booking module", kind: "monthly", availableOn: "Starter", price: "₹1,500", amount: 1500 },
  { slug: "small-store", name: "Small store (≤ 50 products)", kind: "monthly", availableOn: "Starter", price: "₹2,000", amount: 2000 },
  { slug: "wa-api", name: "WhatsApp Business API + 1 automation", kind: "monthly", availableOn: "Starter", price: "₹2,000", amount: 2000 },
  { slug: "desk-lite", name: "Desk Lite (lead tracker, 2 users)", kind: "monthly", availableOn: "Starter", price: "₹2,500", amount: 2500 },
  { slug: "team", name: "Staff portal (Team, ≤ 10 users)", kind: "monthly", availableOn: "Business", price: "₹4,000", amount: 4000 },
  { slug: "ledger", name: "GST invoicing & payment matching (Ledger)", kind: "monthly", availableOn: "Business", price: "₹2,500", amount: 2500 },
  { slug: "stripe", name: "Stripe international payments", kind: "monthly", availableOn: "Starter, Business", price: "₹1,500", amount: 1500 },
  { slug: "integration", name: "Integration (Tally / Zoho / Shiprocket / Sheets)", kind: "monthly", availableOn: "Business", price: "₹2,000 each", amount: 2000 },
  { slug: "language", name: "Regional-language version of the site", kind: "monthly", availableOn: "All", price: "₹1,500 per language", amount: 1500 },
  { slug: "catalogue", name: "Catalogue management (we update products)", kind: "monthly", availableOn: "Business, Command", price: "₹3,000 / ₹6,000" },
  { slug: "priority", name: "Priority support", kind: "monthly", availableOn: "Starter, Business", price: "₹1,000", amount: 1000 },
  { slug: "brand", name: "Logo & brand basics", kind: "one-time", availableOn: "All", price: "₹10,000", amount: 10000 },
  { slug: "content", name: "Content writing", kind: "one-time", availableOn: "All", price: "₹1,500 per page · ₹2,500 per article" },
  { slug: "migration", name: "Data migration (Excel or Tally into your system)", kind: "one-time", availableOn: "All", price: "from ₹10,000", amount: 10000 },
  { slug: "custom-dev", name: "Custom feature development", kind: "one-time", availableOn: "All", price: "₹2,500/hour or quoted" },
  { slug: "partner-custom", name: "Partner product customisation (Zoho/Odoo)", kind: "one-time", availableOn: "All", price: "from ₹25,000", amount: 25000 },
  { slug: "mailbox", name: "Mailbox migration (Google/Microsoft)", kind: "one-time", availableOn: "All", price: "₹500 per mailbox", amount: 500 },
  { slug: "gst", name: "GST registration (non-plan / extra entity)", kind: "one-time", availableOn: "All", price: "₹5,000 (plan clients ₹3,000)", amount: 5000 },
  { slug: "udyam", name: "Udyam registration", kind: "one-time", availableOn: "All", price: "₹2,500 (plan clients ₹1,500)", amount: 2500 },
  { slug: "iec", name: "IEC", kind: "one-time", availableOn: "All", price: "₹5,000 + ₹500 DGFT fee (plan clients ₹3,500)", amount: 5000 },
  { slug: "uk-eu", name: "UK VAT / EU IOSS (with registered overseas agent)", kind: "one-time", availableOn: "All", price: "Quoted (agent fees separate)" },
];

/* ---------- Model, terms, partners (§10.0, §10.6) ---------- */

export const PRICING_MODEL_LINE =
  "Small setup fee to start. One monthly plan that runs everything. Grow into the next stage when you outgrow your limits.";

export const ANNUAL_RULE = "Annual prepay: pay 10 months, get 12.";
export const COMMITMENT_RULE = "No lock-in. Month-to-month with 30 days' notice.";

export const OWNERSHIP_LINE =
  "Yours: domain, brand, content, data and accounts. Ours: the software we build, host and support — that's what your monthly plan covers.";

export const PAYMENT_TERMS = [
  "Starter / Business / Command: setup + first month paid upfront via WhatsApp payment link, then the build starts. Monthly billing starts at launch.",
  "Custom: 40% start · 40% preview · 20% before launch on the setup fee; monthly from launch.",
  "Downgrade: any time; features above the new stage switch off, data kept 30 days.",
  "Cancel: 30 days' notice; full data & content export; system switched off.",
];

export const THIRD_PARTY_COSTS = [
  "Ad spend",
  "WhatsApp conversation charges",
  "Payment gateway fees",
  "Software licences (Zoho, Odoo, Google, Microsoft)",
  "Domain renewal",
  "Government fees",
];

/**
 * Partner products (§10.0): licences at vendor price, standard setup ₹0.
 * business-readiness §2: reseller/partner status is required before advertising ₹0.
 * Keep `published: false` until the owner confirms partner status.
 */
export const PARTNER_SETUP = {
  published: false,
  line: "Using Zoho, Google or Microsoft? Standard setup ₹0 — you pay only the licence.",
  products: ["Zoho", "Odoo", "Google Workspace", "Microsoft 365"],
} as const;

/* ---------- Helpers ---------- */

export function getStage(slug: string) {
  return stages.find((s) => s.slug === slug);
}

export function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}
