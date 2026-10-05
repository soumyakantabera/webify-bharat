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
