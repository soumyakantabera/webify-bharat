/**
 * Ecosystem logos (content-plan §5).
 * `file` points at /public/images/logos/<id>.svg once the owner adds the
 * official SVG from the brand's press kit. Until then `file` is undefined and
 * the UI renders a text wordmark chip (Sora 600). Never hotlink.
 *
 * Wording rules: "Payments we set up", "Works with", "Compared to".
 * Never "partner", "certified" or "official" unless true.
 */

export type LogoGroup = "pay" | "upi" | "build" | "channel" | "software" | "gov" | "marketplace";

export type Logo = {
  id: string;
  name: string;
  group: LogoGroup;
  file?: string;
  href?: string;
  note?: string;
};

export const logos: Logo[] = [
  // §5.1 Payments we set up
  { id: "upi", name: "UPI", group: "pay" },
  { id: "razorpay", name: "Razorpay", group: "pay" },
  { id: "cashfree", name: "Cashfree", group: "pay" },
  { id: "stripe", name: "Stripe", group: "pay", note: "international" },
  { id: "paypal", name: "PayPal", group: "pay", note: "on request" },
  { id: "gpay", name: "GPay", group: "upi" },
  { id: "phonepe", name: "PhonePe", group: "upi" },
  { id: "paytm", name: "Paytm", group: "upi" },
  { id: "bhim", name: "BHIM", group: "upi" },
  { id: "rupay", name: "RuPay", group: "upi" },
  { id: "visa", name: "Visa", group: "upi" },
  { id: "mastercard", name: "Mastercard", group: "upi" },
  { id: "amex", name: "Amex", group: "upi" },

  // §5.2 What we build on
  { id: "github-pages", name: "GitHub Pages", group: "build" },
  { id: "nextjs", name: "Next.js", group: "build" },
  { id: "github", name: "GitHub", group: "build" },
  { id: "cloudflare", name: "Cloudflare DNS", group: "build" },

  // §5.3 Channels & tools we connect
  { id: "whatsapp", name: "WhatsApp Business API", group: "channel" },
  { id: "google", name: "Google", group: "channel" },
  { id: "google-maps", name: "Maps / Business Profile", group: "channel" },
  { id: "google-analytics", name: "Analytics", group: "channel" },
  { id: "instagram", name: "Instagram", group: "channel" },
  { id: "shiprocket", name: "Shiprocket", group: "channel" },

  // §5.3a Business software we build on or integrate
  { id: "odoo", name: "Odoo", group: "software" },
  { id: "erpnext", name: "ERPNext", group: "software" },
  { id: "zoho", name: "Zoho", group: "software" },
  { id: "tally", name: "Tally", group: "software" },
  { id: "google-workspace", name: "Google Workspace", group: "software" },
  { id: "gmail", name: "Gmail", group: "software" },
  { id: "google-drive", name: "Drive", group: "software" },
  { id: "google-sheets", name: "Sheets", group: "software" },
  { id: "microsoft-365", name: "Microsoft 365", group: "software" },

  // §5.4 Government portals we file on
  { id: "gst", name: "GST", group: "gov", href: "https://www.gst.gov.in" },
  { id: "udyam", name: "Udyam", group: "gov", href: "https://udyamregistration.gov.in" },
  { id: "dgft", name: "DGFT (IEC)", group: "gov", href: "https://www.dgft.gov.in" },
  { id: "uk-vat", name: "UK VAT", group: "gov" },
  { id: "eu-ioss", name: "EU IOSS", group: "gov" },

  // §5.5 Marketplaces & apps we complement (greyscale, never framed as opponents)
  { id: "justdial", name: "Justdial", group: "marketplace" },
  { id: "sulekha", name: "Sulekha", group: "marketplace" },
  { id: "indiamart", name: "IndiaMART", group: "marketplace" },
  { id: "zomato", name: "Zomato", group: "marketplace" },
  { id: "swiggy", name: "Swiggy", group: "marketplace" },
  { id: "amazon", name: "Amazon", group: "marketplace" },
  { id: "flipkart", name: "Flipkart", group: "marketplace" },
];

export const LOGO_GROUP_LABEL: Record<LogoGroup, string> = {
  pay: "Payments we set up",
  upi: "Payment methods your customers use",
  build: "Built on",
  channel: "Works with",
  software: "Works with",
  gov: "Portals we file on",
  marketplace: "Apps we work alongside",
};

/** Required footer disclaimer (§5.6, §8). */
export const TRADEMARK_DISCLAIMER =
  "All trademarks belong to their owners and are shown only to indicate compatibility or comparison.";

export function logosIn(...groups: LogoGroup[]) {
  return logos.filter((l) => groups.includes(l.group));
}

export function getLogo(id: string) {
  return logos.find((l) => l.id === id);
}
