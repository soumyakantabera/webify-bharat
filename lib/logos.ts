/**
 * Ecosystem logos (content-plan §5).
 * `file` points at /public/images/logos/<id>.svg|webp — CC0 marks from Simple
 * Icons and svg-logos (npm) in each brand's own colour, plus owner-supplied
 * wordmarks (UPI, BHIM, RuPay, Cashfree, Tally). Brands with no
 * openly licensed mark stay a text chip. Never hotlink; never redraw a mark.
 *
 * Wording rules: "Payments we set up", "Works with", "Compared to".
 * Never "partner", "certified" or "official" unless true.
 */

export type LogoGroup = "pay" | "upi" | "build" | "channel" | "software" | "gov" | "marketplace";

export type Logo = {
  id: string;
  name: string;
  group: LogoGroup;
  /** Local SVG (CC0, from Simple Icons / svg-logos). Absent = text chip. */
  file?: string;
  /** The file is a full wordmark (name included), so the chip shows it alone. */
  wordmark?: boolean;
  href?: string;
  note?: string;
};

export const logos: Logo[] = [
  // §5.1 Payments we set up
  { id: "upi", name: "UPI", file: "/images/logos/upi.webp", wordmark: true, group: "pay" },
  { id: "razorpay", name: "Razorpay", file: "/images/logos/razorpay.svg", group: "pay" },
  { id: "cashfree", name: "Cashfree", file: "/images/logos/cashfree.webp", wordmark: true, group: "pay" },
  { id: "stripe", name: "Stripe", file: "/images/logos/stripe.svg", group: "pay", note: "international" },
  { id: "paypal", name: "PayPal", file: "/images/logos/paypal.svg", group: "pay", note: "on request" },
  { id: "gpay", name: "GPay", file: "/images/logos/gpay.svg", wordmark: true, group: "upi" },
  { id: "phonepe", name: "PhonePe", file: "/images/logos/phonepe.svg", group: "upi" },
  { id: "paytm", name: "Paytm", file: "/images/logos/paytm.svg", wordmark: true, group: "upi" },
  { id: "bhim", name: "BHIM", file: "/images/logos/bhim.webp", wordmark: true, group: "upi" },
  { id: "rupay", name: "RuPay", file: "/images/logos/rupay.webp", wordmark: true, group: "upi" },
  { id: "visa", name: "Visa", file: "/images/logos/visa.svg", wordmark: true, group: "upi" },
  { id: "mastercard", name: "Mastercard", file: "/images/logos/mastercard.svg", group: "upi" },
  { id: "amex", name: "Amex", file: "/images/logos/amex.svg", group: "upi" },

  // §5.2 What we build on
  { id: "github-pages", name: "GitHub Pages", file: "/images/logos/github-pages.svg", wordmark: true, group: "build" },
  { id: "nextjs", name: "Next.js", file: "/images/logos/nextjs.svg", group: "build" },
  { id: "github", name: "GitHub", file: "/images/logos/github.svg", group: "build" },
  { id: "cloudflare", name: "Cloudflare DNS", file: "/images/logos/cloudflare.svg", group: "build" },

  // §5.3 Channels & tools we connect
  { id: "whatsapp", name: "WhatsApp Business API", file: "/images/logos/whatsapp.svg", group: "channel" },
  { id: "google", name: "Google", file: "/images/logos/google.svg", group: "channel" },
  { id: "google-maps", name: "Maps / Business Profile", file: "/images/logos/google-maps.svg", group: "channel" },
  { id: "google-analytics", name: "Analytics", file: "/images/logos/google-analytics.svg", group: "channel" },
  { id: "meta", name: "Meta", file: "/images/logos/meta.svg", group: "channel" },
  { id: "bing", name: "Bing", file: "/images/logos/bing.svg", group: "channel" },
  { id: "google-ads", name: "Google Ads", file: "/images/logos/google-ads.svg", group: "channel" },
  { id: "instagram", name: "Instagram", file: "/images/logos/instagram.svg", group: "channel" },
  { id: "shiprocket", name: "Shiprocket", file: "/images/logos/shiprocket.webp", group: "channel" },

  // §5.3a Business software we build on or integrate
  { id: "odoo", name: "Odoo", file: "/images/logos/odoo.svg", wordmark: true, group: "software" },
  { id: "erpnext", name: "ERPNext", file: "/images/logos/erpnext.svg", group: "software" },
  { id: "zoho", name: "Zoho", file: "/images/logos/zoho.svg", wordmark: true, group: "software" },
  { id: "tally", name: "Tally", file: "/images/logos/tally.webp", wordmark: true, group: "software" },
  { id: "google-workspace", name: "Google Workspace", file: "/images/logos/google-workspace.svg", wordmark: true, group: "software" },
  { id: "gmail", name: "Gmail", file: "/images/logos/gmail.svg", group: "software" },
  { id: "google-drive", name: "Drive", file: "/images/logos/google-drive.svg", group: "software" },
  { id: "google-sheets", name: "Sheets", file: "/images/logos/google-sheets.svg", group: "software" },
  { id: "microsoft-365", name: "Microsoft 365", file: "/images/logos/microsoft-365.svg", group: "software" },

  // §5.4 Government portals we file on
  { id: "gst", name: "GST", group: "gov", href: "https://www.gst.gov.in" },
  { id: "udyam", name: "Udyam", group: "gov", href: "https://udyamregistration.gov.in" },
  { id: "dgft", name: "DGFT (IEC)", group: "gov", href: "https://www.dgft.gov.in" },
  { id: "uk-vat", name: "UK VAT", group: "gov" },
  { id: "eu-ioss", name: "EU IOSS", group: "gov" },

  // §5.5 Marketplaces & apps we complement (greyscale, never framed as opponents)
  { id: "justdial", name: "Justdial", file: "/images/logos/justdial.webp", wordmark: true, group: "marketplace" },
  { id: "sulekha", name: "Sulekha", file: "/images/logos/sulekha.webp", wordmark: true, group: "marketplace" },
  { id: "indiamart", name: "IndiaMART", file: "/images/logos/indiamart.webp", group: "marketplace" },
  { id: "zomato", name: "Zomato", file: "/images/logos/zomato.svg", wordmark: true, group: "marketplace" },
  { id: "swiggy", name: "Swiggy", file: "/images/logos/swiggy.svg", group: "marketplace" },
  { id: "amazon", name: "Amazon", file: "/images/logos/amazon.svg", group: "marketplace" },
  { id: "flipkart", name: "Flipkart", file: "/images/logos/flipkart.svg", group: "marketplace" },
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

/** Look up by id ("google-sheets") or display name ("Google Sheets", "Microsoft"). */
export function findLogo(name: string) {
  const key = name.toLowerCase().replace(/\s+/g, "-");
  return logos.find((l) => l.id === key || l.name.toLowerCase() === name.toLowerCase()) ?? logos.find((l) => l.id.startsWith(`${key}-`));
}

export function getLogo(id: string) {
  return logos.find((l) => l.id === id);
}
