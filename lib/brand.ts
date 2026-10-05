/**
 * Brand guide data for /brand (content-plan §2.0.7, §2.6, §6.2, §6.3, §17.3 #15).
 */

export type Swatch = { name: string; token: string; hex: string; role: string };

export const PALETTE: { group: string; swatches: Swatch[] }[] = [
  {
    group: "Base",
    swatches: [
      { name: "Surface", token: "--surface", hex: "#FBFAF7", role: "Page background" },
      { name: "Surface 2", token: "--surface-2", hex: "#F4F1EA", role: "Alternate sections" },
      { name: "Card", token: "--card", hex: "#FFFFFF", role: "Tiles and cards" },
      { name: "Kajal ink", token: "--ink", hex: "#1B1030", role: "Body text" },
      { name: "Ink 2", token: "--ink-2", hex: "#4A4458", role: "Secondary text" },
      { name: "Muted", token: "--muted", hex: "#6F6A7A", role: "Captions" },
      { name: "Line", token: "--line", hex: "#E7E2DA", role: "Borders" },
    ],
  },
  {
    group: "Rangoli accents",
    swatches: [
      { name: "Rani Pink", token: "--rani", hex: "#E6007E", role: "Organise path, highlights, focus ring" },
      { name: "Haldi", token: "--haldi", hex: "#FFB400", role: "Badges — ink text only" },
      { name: "Peacock", token: "--peacock", hex: "#00A6A6", role: "Payments, trust" },
      { name: "Indigo", token: "--indigo", hex: "#2B1E6B", role: "Headings on light, dark sections" },
      { name: "Marigold", token: "--marigold", hex: "#FF6B00", role: "Launch path" },
      { name: "Mehendi", token: "--mehendi", hex: "#4F8A10", role: "Grow path, success" },
      { name: "Blush", token: "--blush", hex: "#FFF0F6", role: "Soft pink tint" },
      { name: "WhatsApp", token: "--wa", hex: "#25D366", role: "Primary CTA only — ink text" },
    ],
  },
  {
    group: "Text-safe shades (small text on white)",
    swatches: [
      { name: "Rani ink", token: "--rani-ink", hex: "#B8005F", role: "Links, small accent text" },
      { name: "Peacock ink", token: "--peacock-ink", hex: "#007373", role: "Small accent text" },
      { name: "Marigold ink", token: "--marigold-ink", hex: "#B34A00", role: "Small accent text" },
      { name: "Mehendi ink", token: "--mehendi-ink", hex: "#3D6B0C", role: "Small accent text" },
    ],
  },
];

export const GRADIENTS = [
  { name: "Holi", token: "--g-holi", use: "Home hero band, scroll progress" },
  { name: "Peacock", token: "--g-peacock", use: "Burst sections" },
  { name: "Mehendi", token: "--g-mehendi", use: "Grow burst" },
  { name: "Dusk", token: "--g-dusk", use: "Pre-footer CTA band" },
];

function luminance(hex: string) {
  const n = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG 2.x contrast ratio between two hex colours. */
export function contrast(a: string, b: string) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

export const TYPE_SCALE = [
  { role: "H1", font: "Sora 700", size: "56 / 36", sample: "Built for your business." },
  { role: "H2", font: "Sora 700", size: "40 / 28", sample: "Four things we do." },
  { role: "H3", font: "Sora 600", size: "24 / 20", sample: "Webify Desk" },
  { role: "Kicker", font: "Manrope 700, uppercase", size: "13", sample: "Your software · your marketing" },
  { role: "Body", font: "Manrope 500", size: "18 / 16", sample: "We learn how you work and build the system around it." },
  { role: "Small", font: "Manrope 500", size: "14", sample: "Prices exclude GST and third-party costs." },
  { role: "Numbers", font: "JetBrains Mono 600", size: "context", sample: "₹7,500 / month" },
  { role: "Hinglish accent", font: "Sora italic 600", size: "20 / 18", sample: "Aapka business. Aapke hisaab se." },
];

export const LOGO_FILES = [
  { file: "webify-bharat-horizontal.svg", name: "Full colour, horizontal", bg: "light" },
  { file: "webify-bharat-stacked.svg", name: "Full colour, stacked", bg: "light" },
  { file: "webify-bharat-mark.svg", name: "Mark only", bg: "light" },
  { file: "webify-bharat-mono-ink.svg", name: "Mono ink", bg: "light" },
  { file: "webify-bharat-mono-white.svg", name: "Mono white", bg: "dark" },
  { file: "webify-bharat-on-gradient.svg", name: "On gradient", bg: "none" },
] as const;

export const LOGO_DO = [
  "Use the files on this page as they are.",
  "Keep clear space of half the mark's height on every side.",
  "Keep the mark at least 24px tall on screens.",
  "Use mono white on indigo or photos; mono ink on light tints.",
];

export const LOGO_DONT = [
  "Redraw, stretch, rotate or re-colour the mark.",
  "Set the wordmark in another font.",
  "Place the full-colour logo on busy photos or gradients.",
  "Add effects — shadows, outlines, glows.",
];

/** §2.6 Voice. */
export const VOICE_RULES = [
  "Warm, clear, professional English. Short sentences.",
  "Rupees, not jargon — every technical term gets a plain-words chip.",
  "Every claim carries its caveat (no guaranteed rankings, ad spend billed separately).",
  "Never frame other companies as rivals: we fill gaps and work alongside them.",
  "At most one Hinglish accent per section, always with its English meaning nearby.",
  "Never invent numbers, ratings, client counts or testimonials.",
];

/** §6.3 approved Hinglish sprinkles. */
export const HINGLISH = [
  { phrase: "Aapka business. Aapke hisaab se.", meaning: "Your business, your way.", where: "Hero" },
  { phrase: "Chai-pe-charcha", meaning: "A chat over chai — the free discovery chat", where: "Process" },
  { phrase: "Seedha hisaab", meaning: "Straight accounts", where: "Pricing" },
  { phrase: "Har business alag hai", meaning: "Every business is different", where: "CTA band" },
  { phrase: "Chalo, shuru karein", meaning: "Let's get started", where: "Final CTA" },
  { phrase: "Poochho", meaning: "Ask", where: "FAQ kicker" },
  { phrase: "Yeh page kho gaya", meaning: "This page wandered off", where: "404" },
];

/** §2.0.7 plain-words glossary. */
export const GLOSSARY = [
  { term: "SaaS", plain: "Software you use; we run it." },
  { term: "PaaS", plain: "Our base platform." },
  { term: "CRM", plain: "Customer & lead tracker." },
  { term: "ERP", plain: "One system for orders, stock, billing." },
  { term: "SEO", plain: "Showing up in Google's unpaid (organic) results." },
  { term: "SEM / Ads", plain: "Paid search & social ads." },
  { term: "AI visibility", plain: "Being found and described correctly by ChatGPT-style assistants." },
  { term: "White-label", plain: "Your brand on everything." },
  { term: "Template", plain: "The same design sold to everyone (we don't do this)." },
  { term: "Prototype", plain: "Our tested starting point, rebuilt for your business and brand." },
];
