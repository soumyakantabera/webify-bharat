import type { BlockSlug } from "@/lib/blocks";
import type { MockVariant } from "@/components/svg/mocks/MockScreen";

/**
 * Prototype teasers (content-plan §9.10). Prototypes are never linked or shown
 * directly: the site shows an illustrated concept view; walkthroughs happen on
 * WhatsApp. `kind: "screenshot"` (later) renders blurred with a lock overlay.
 * Owner to confirm names and integrations (§14 #4).
 */
export type Prototype = {
  slug: string;
  name: string;
  industry: string;
  /** Filter group on the Prototype Room (§9.10 #2). */
  group: "sell" | "book" | "teach" | "make" | "export" | "manage" | "team";
  blocks: BlockSlug[];
  /** Logo ids from lib/logos.ts, shown as "Works with" chips. */
  worksWith: string[];
  shows: string[];
  image: MockVariant;
  kind: "illustration" | "screenshot";
  published: boolean;
};

export const prototypes: Prototype[] = [
  { slug: "restaurant-ordering", name: "Direct ordering for restaurants & cloud kitchens", industry: "restaurant", group: "sell", blocks: ["site", "store", "pay", "chat"], worksWith: ["razorpay", "cashfree", "whatsapp", "google-maps"], shows: ["Phone menu", "Order toast", "Payment"], image: "restaurant", kind: "illustration", published: true },
  { slug: "clinic-booking", name: "Clinic booking + reminders", industry: "healthcare", group: "book", blocks: ["site", "chat", "pay", "desk"], worksWith: ["whatsapp", "google-workspace", "razorpay"], shows: ["Calendar slots", "Reminders", "Fees at booking"], image: "clinic", kind: "illustration", published: true },
  { slug: "coaching-admissions", name: "Coaching admissions + fees", industry: "education", group: "teach", blocks: ["site", "desk", "pay", "chat"], worksWith: ["razorpay", "cashfree", "whatsapp", "google-sheets"], shows: ["Admissions pipeline", "Fee receipts", "Parent updates"], image: "coaching", kind: "illustration", published: true },
  { slug: "retail-store", name: "Retail / kirana store", industry: "retail", group: "sell", blocks: ["store", "pay", "ledger", "chat"], worksWith: ["upi", "razorpay", "tally", "shiprocket"], shows: ["Catalogue", "Repeat orders", "GST invoices"], image: "retail", kind: "illustration", published: true },
  { slug: "dealer-portal", name: "Manufacturer / dealer portal", industry: "manufacturing", group: "make", blocks: ["store", "desk", "ledger", "connect"], worksWith: ["tally", "zoho", "odoo"], shows: ["Dealer price tiers", "Order status", "Tally sync"], image: "manufacturer", kind: "illustration", published: true },
  { slug: "crm-erp", name: "CRM / ERP dashboard", industry: "any", group: "manage", blocks: ["desk", "pulse", "connect"], worksWith: ["zoho", "odoo", "microsoft-365", "google-workspace"], shows: ["Pipeline", "Key numbers", "Integrations"], image: "crm", kind: "illustration", published: true },
  { slug: "employee-portal", name: "Employee portal / HR", industry: "any", group: "team", blocks: ["team", "workspace", "desk"], worksWith: ["google-workspace", "microsoft-365"], shows: ["Role badges", "Attendance", "Leave"], image: "hr", kind: "illustration", published: true },
  { slug: "exporter-site", name: "Exporter site + international payments", industry: "exporters", group: "export", blocks: ["site", "pay", "file"], worksWith: ["stripe", "paypal", "dgft"], shows: ["Multi-currency checkout", "Catalogue", "IEC ready"], image: "exporter", kind: "illustration", published: true },
];

export const publishedPrototypes = prototypes.filter((p) => p.published);
