/** Webify Compass — paid strategy consulting (content-plan §2.4d, §10.5). */
export type CompassOffer = {
  slug: "session" | "audit" | "roadmap";
  name: string;
  what: string;
  deliverable: string;
  price: string;
  amount: number;
};

export const compassOffers: CompassOffer[] = [
  { slug: "session", name: "Compass Session", what: "60–90 min strategy call: goals, current tools, gaps, quick wins", deliverable: "60–90 min call", price: "₹5,000", amount: 5000 },
  { slug: "audit", name: "Compass Audit", what: "Written digital audit: website, payments, WhatsApp, tools, search & AI visibility", deliverable: "Written audit", price: "₹15,000", amount: 15000 },
  { slug: "roadmap", name: "Compass Roadmap", what: "Build-vs-buy recommendation (custom vs Zoho/Odoo vs Google/Microsoft), phased plan, budget ranges", deliverable: "Roadmap PDF", price: "₹30,000", amount: 30000 },
];

/**
 * Owner to confirm (content-plan §14 #10). Default: Compass fees are 100%
 * credited against a setup signed within 60 days.
 */
export const COMPASS_CREDIT = {
  compassCreditable: true,
  percent: 100,
  withinDays: 60,
  line: "100% credited against your setup if you sign within 60 days.",
} as const;

export const COMPASS_FREE_RULE =
  "The first WhatsApp chat is always free. Compass is the paid, deeper work.";

/* ---------- Compass Advisory — ongoing finance, profit & marketing advisory ---------- */

/**
 * Ongoing advisory plans: management accounts, year-end statements, profitability,
 * marketing strategy and live online review sessions. Same billing rules as the
 * stage plans: month to month, 30 days' notice, annual prepay = pay 10 months, get 12.
 */
export type AdvisoryPlan = {
  slug: "monthly" | "growth" | "turnaround";
  name: string;
  icon: string;
  tagline: string;
  bestFor: string;
  monthly: string;
  annual: string;
  monthlyAmount: number;
  /** Live online review sessions per month (60 min each). */
  sessions: string;
  popular: boolean;
  features: string[];
};

export const advisoryPlans: AdvisoryPlan[] = [
  {
    slug: "monthly",
    name: "Compass Monthly",
    icon: "ChartLineUp",
    tagline: "Know your numbers every month.",
    bestFor: "Profitable, but flying blind",
    monthly: "₹15,000",
    annual: "₹1,50,000/yr",
    monthlyAmount: 15000,
    sessions: "1 live session a month",
    popular: false,
    features: [
      "Monthly report: profit & loss and cash position",
      "Quarterly profitability check",
      "Year-end pack: P&L, balance sheet, cash flow and annual report",
      "1 live online review a month (60 min)",
      "Questions on WhatsApp between sessions",
    ],
  },
  {
    slug: "growth",
    name: "Compass Growth",
    icon: "TrendUp",
    tagline: "Grow sales without losing margin.",
    bestFor: "Growing, and margins slipping",
    monthly: "₹30,000",
    annual: "₹3,00,000/yr",
    monthlyAmount: 30000,
    sessions: "2 live sessions a month",
    popular: true,
    features: [
      "Everything in Compass Monthly",
      "Monthly profit by product, service or branch",
      "12-month budget, tracked against actuals",
      "Marketing strategy: review what you do now, plan what's next — refreshed every quarter",
      "2 live online reviews a month (60 min, fortnightly)",
    ],
  },
  {
    slug: "turnaround",
    name: "Compass Turnaround",
    icon: "Lifebuoy",
    tagline: "Out of losses, week by week.",
    bestFor: "Making sales but losing money",
    monthly: "₹50,000",
    annual: "₹5,00,000/yr",
    monthlyAmount: 50000,
    sessions: "Weekly live session",
    popular: false,
    features: [
      "Everything in Compass Growth",
      "Weekly live online review (60 min) on your situation",
      "13-week cash-flow forecast, updated every week",
      "Cost, pricing and product-mix fix plan",
      "New marketing strategy built with you, adjusted every month",
      "Bank- or investor-ready report once a year",
      "Priority replies on WhatsApp",
    ],
  },
];

/** Comparison rows for the advisory plans (true = included, false = not, string = detail). */
export const advisoryCompare: { label: string; cells: [boolean | string, boolean | string, boolean | string] }[] = [
  { label: "Monthly P&L and cash report", cells: [true, true, true] },
  { label: "Year-end P&L, balance sheet, cash flow, annual report", cells: [true, true, true] },
  { label: "Profitability review", cells: ["Quarterly", "Monthly, by product / branch", "Monthly + fix plan"] },
  { label: "Budget vs actual", cells: [false, true, true] },
  { label: "Cash-flow forecast", cells: [false, false, "13 weeks, weekly"] },
  { label: "Marketing strategy", cells: [false, "Review + quarterly plan", "New strategy, monthly"] },
  { label: "Live online sessions (60 min)", cells: ["1 a month", "2 a month", "Every week"] },
  { label: "Bank / investor-ready report", cells: ["Add-on", "Add-on", "Once a year"] },
  { label: "WhatsApp support", cells: [true, true, "Priority"] },
];

/** Pay as you go — one-off work, no plan needed. */
export const advisoryOneOffs: { slug: string; name: string; what: string; deliverable: string; price: string }[] = [
  {
    slug: "year-end",
    name: "Year-End Pack",
    what: "Profit & loss, balance sheet, cash flow and a plain-language annual report for one completed financial year",
    deliverable: "Statements + report",
    price: "from ₹35,000",
  },
  {
    slug: "profit",
    name: "Profitability Review",
    what: "Where you make and lose money — by product, service, customer or branch — with the fixes in order",
    deliverable: "Written review + call",
    price: "₹25,000",
  },
  {
    slug: "marketing",
    name: "Marketing Strategy",
    what: "Review of your current marketing and spend, then a new strategy and 90-day plan with budget",
    deliverable: "Strategy + 90-day plan",
    price: "₹30,000",
  },
];

export const advisoryAddons: { name: string; price: string; note: string }[] = [
  { name: "Extra live session (60 min, online)", price: "₹5,000 each", note: "Any plan, booked in advance" },
  { name: "Extra company, branch or brand", price: "+₹7,500/month", note: "Reported separately and combined" },
  { name: "Earlier year's pack (catch-up)", price: "₹30,000 per year", note: "For years before you joined" },
  { name: "12-month budget & forecast", price: "₹20,000", note: "Included in Growth and Turnaround" },
  { name: "Bank / investor-ready report", price: "₹25,000", note: "For a loan or funding. Included yearly in Turnaround" },
  { name: "Marketing Strategy refresh", price: "₹15,000", note: "For Monthly-plan clients" },
  { name: "Books clean-up before reporting", price: "Quoted", note: "When books are incomplete or behind" },
];

/** Two ways to start (after the financial year closes, or any month). */
export const ADVISORY_START = [
  {
    icon: "CalendarCheck",
    title: "After your financial year closes",
    text: "From April, we prepare last year's year-end pack from your books, then start the monthly cycle for the new year.",
  },
  {
    icon: "RocketLaunch",
    title: "Any month, starting with us",
    text: "Join mid-year: monthly reports start straight away, and your first year-end pack covers the full year from your books.",
  },
];

export const ADVISORY_RULES = [
  "We work from your books — Tally, Zoho Books, Excel, or bank statements and bills.",
  "Statutory audit, tax filings and signed financial statements are done by a Chartered Accountant — yours, or one we coordinate with. Their fees are billed by them.",
  "Live sessions are online (Google Meet or Zoom), booked in advance. Unused sessions don't carry over.",
  "No lock-in: stop with 30 days' notice. Annual prepay: pay 10 months, get 12.",
  "We can't promise profit. We promise clear numbers, a plan, and follow-through every week.",
];
