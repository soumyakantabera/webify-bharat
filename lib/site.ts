import { WA_NUMBER } from "@/lib/wa-link";
export const SITE = {
  name: "Webify Bharat",
  tagline: "Stop renting your own customers.",
  accent: "Aapka business. Aapke hisaab se.",
  /** Category sentence (content-plan §2.0.1) — used verbatim in hero sub, meta, llms.txt, About. */
  description:
    "Own your customers instead of renting them: one custom system for your website, orders, payments, WhatsApp and marketing — simple for your staff, and run for you every month.",
  replyPromise: "We reply within a few hours, 7 days a week.",
  replyShort: "Replies in a few hours · 7 days",
  whatsapp: WA_NUMBER,
  whatsappDisplay: "8336097642",
  email: "webifybharat@gmail.com",
} as const;

/**
 * Business details (business-readiness §2, content-plan §14 #1).
 * Placeholder values are written as `[[...]]` and are hidden in the UI until
 * the owner fills them — use `filled()` before rendering any field.
 */
export const BUSINESS = {
  legalName: "Webify Bharat India",
  constitution: "Sole proprietorship",
  address: "108, Shri Krishna Nagar, Kolkata 700 056, India",
  gstin: "[[GSTIN]]",
  udyam: "[[UDYAM-]]",
  phone: "[[phone]]",
  email: SITE.email,
} as const;

/** True when a business field holds a real value, not a placeholder. */
export function filled(value: string | undefined | null): value is string {
  if (!value) return false;
  const v = value.trim();
  if (!v || v.includes("[[") || /TODO/i.test(v)) return false;
  // Legacy placeholder styles such as "xxxx" or "...".
  if (/^[x.\-]+$/i.test(v)) return false;
  return true;
}

/** Prices may say "+ GST" only once a GSTIN is registered (business-readiness §2). */
export function gstLive() {
  return filled(BUSINESS.gstin);
}

/** Suffix for any price: "+ GST" when registered, otherwise nothing. */
export function gstNote() {
  return gstLive() ? "+ GST" : "";
}

export { waLink } from "@/lib/wa-link";
import { waLink } from "@/lib/wa-link";

export const WA_CHAT = waLink("Hi, I'd like to discuss my business");
export const WA_BARE = `https://wa.me/${SITE.whatsapp}`;


export const serviceFeatures = [
  "Strategy & setup",
  "Mobile-first experience",
  "Automation-ready workflows",
  "Analytics & tracking",
  "Secure integrations",
  "Ongoing optimization",
] as const;

