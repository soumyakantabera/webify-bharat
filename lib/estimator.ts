/**
 * Scope estimator maths (content-plan §10.1–10.4, §10.7). Pure functions, no UI.
 *
 * Over-limit charges are pro-rated per unit, matching the worked example in
 * §10.2 (6 users + 250 products on Business = ₹7,500 + ₹1,800 + ₹1,500).
 * Owner to confirm whether blocks of 100 should round up instead.
 */
import { addons, getStage, limitRows, overLimits, type LimitKey } from "@/lib/offers";

export type PlanSlug = "starter" | "business" | "command";
export const PLAN_SLUGS: PlanSlug[] = ["starter", "business", "command"];

export type Needs = {
  users: number;
  products: number;
  orders: number;
  locations: number;
  integrations: number;
};

export type FeatureId = "payments" | "whatsapp" | "staff" | "invoicing" | "international" | "crm";

export const FEATURES: { id: FeatureId; label: string }[] = [
  { id: "payments", label: "Online payments (Razorpay / Cashfree)" },
  { id: "whatsapp", label: "WhatsApp automations" },
  { id: "invoicing", label: "GST invoicing & payment matching" },
  { id: "staff", label: "Staff portal with roles" },
  { id: "international", label: "International payments (Stripe)" },
  { id: "crm", label: "Full CRM / ERP" },
];

/** How each stage provides a feature: included, via a monthly add-on, or not available. */
const FEATURE_RULES: Record<FeatureId, Record<PlanSlug, "included" | { addon: string } | "no">> = {
  payments: { starter: { addon: "payments" }, business: "included", command: "included" },
  whatsapp: { starter: { addon: "wa-api" }, business: "included", command: "included" },
  invoicing: { starter: "no", business: { addon: "ledger" }, command: "included" },
  staff: { starter: "no", business: { addon: "team" }, command: "included" },
  international: { starter: { addon: "stripe" }, business: { addon: "stripe" }, command: "included" },
  crm: { starter: "no", business: "no", command: "included" },
};

export type Line = { label: string; amount: number };

export type StageQuote = {
  stage: PlanSlug;
  feasible: boolean;
  reason?: string;
  setup: number;
  base: number;
  lines: Line[];
  monthly: number;
};

const addonAmount = (slug: string) => addons.find((a) => a.slug === slug)?.amount ?? 0;
const addonName = (slug: string) => addons.find((a) => a.slug === slug)?.name ?? slug;

function limitOf(stage: PlanSlug, key: LimitKey) {
  return limitRows.find((r) => r.key === key)!.cells[stage];
}

export function quoteStage(stage: PlanSlug, needs: Needs, features: FeatureId[]): StageQuote {
  const s = getStage(stage)!;
  const lines: Line[] = [];
  let feasible = true;
  let reason: string | undefined;

  // Store / bookings on Starter come from add-ons (§10.3).
  if (stage === "starter") {
    if (needs.products > 50) {
      feasible = false;
      reason = "More than 50 products needs a full store (Business or above).";
    } else if (needs.products > 0) {
      lines.push({ label: addonName("small-store"), amount: addonAmount("small-store") });
    } else if (needs.orders > 0) {
      lines.push({ label: addonName("booking"), amount: addonAmount("booking") });
    }
  }

  // Over-limit charges (§10.2), pro-rated per unit.
  for (const key of ["users", "products", "orders", "locations", "integrations"] as const) {
    const need = needs[key];
    const limit = limitOf(stage, key);
    if (typeof limit !== "number") {
      if (key === "integrations" && need > 0) {
        if (stage === "business") lines.push({ label: `${addonName("integration")} (${need})`, amount: need * addonAmount("integration") });
        else {
          feasible = false;
          reason = "Integrations start on Business.";
        }
      }
      continue;
    }
    if (need <= limit) continue;
    const rule = overLimits.find((o) => o.key === key);
    const price = rule?.cells[stage];
    if (!rule || price == null) continue;
    const units = (need - limit) / rule.unitSize;
    lines.push({ label: `${rule.label} (${Number.isInteger(units) ? units : units.toFixed(1)})`, amount: Math.round(units * price) });
  }

  // Features (§10.1 includes, §10.3 add-ons).
  for (const f of features) {
    const rule = FEATURE_RULES[f][stage];
    if (rule === "no") {
      feasible = false;
      reason = `${FEATURES.find((x) => x.id === f)!.label} isn't available on ${s.name}.`;
    } else if (rule !== "included") {
      lines.push({ label: addonName(rule.addon), amount: addonAmount(rule.addon) });
    }
  }

  const base = s.monthlyAmount;
  return { stage, feasible, reason, setup: s.setupAmount, base, lines, monthly: base + lines.reduce((t, l) => t + l.amount, 0) };
}

export function quoteAll(needs: Needs, features: FeatureId[]) {
  const quotes = PLAN_SLUGS.map((st) => quoteStage(st, needs, features));
  const feasible = quotes.filter((q) => q.feasible);
  const best = feasible.reduce<StageQuote | undefined>((b, q) => (!b || q.monthly < b.monthly ? q : b), undefined);
  return { quotes, best };
}

/** Reach plans with fixed numbers for the estimator (§10.4). */
export const REACH_OPTIONS: { id: string; label: string; monthly: number; setup: number; note?: string }[] = [
  { id: "local", label: "Reach Local (full)", monthly: 8000, setup: 0, note: "Setup ₹0 for plan clients" },
  { id: "search", label: "Reach Search — Starter", monthly: 15000, setup: 0 },
  { id: "search-growth", label: "Reach Search — Growth", monthly: 30000, setup: 0 },
  { id: "ads", label: "Reach Ads (up to ₹1L spend)", monthly: 15000, setup: 10000, note: "Ad spend paid to Google/Meta" },
  { id: "ai", label: "Reach AI (full)", monthly: 20000, setup: 15000, note: "₹10,000/month with Reach Search; audit as setup" },
  { id: "campaigns", label: "Reach Campaigns", monthly: 10000, setup: 0, note: "Message charges extra" },
  { id: "bundle", label: "Reach Growth bundle", monthly: 30000, setup: 0, note: "Search Starter + Local + AI add-on" },
];

/** Reach monthly total, applying the "AI ₹10,000 with Search" rule. */
export function reachTotals(ids: string[]) {
  const picked = REACH_OPTIONS.filter((r) => ids.includes(r.id));
  const hasSearch = ids.includes("search") || ids.includes("search-growth");
  const monthly = picked.reduce((t, r) => t + (r.id === "ai" && hasSearch ? 10000 : r.monthly), 0);
  const setup = picked.reduce((t, r) => t + r.setup, 0);
  return { picked, monthly, setup };
}

/** Optional monthly extras offered on top of any stage (§10.3). */
export const EXTRA_ADDONS = ["language", "priority", "catalogue"] as const;

export const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;
