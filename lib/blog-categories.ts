/**
 * Blog categories (content-plan §9.14) and cover recipes (§17.4).
 * Post → category lives on each post in lib/posts.ts.
 * Covers are generated SVG (components/svg/BlogCover.tsx) — no photos.
 */
export type BlogCategorySlug =
  | "start"
  | "payments"
  | "whatsapp"
  | "get-found"
  | "rent-own"
  | "costs-gst"
  | "custom"
  | "ai-search";

export type BlogCategory = {
  slug: BlogCategorySlug;
  name: string;
  /** Background colour (hex, so OG images can use it too). */
  bg: string;
  /** Ink for icons and text on that background. */
  ink: string;
  icons: string[];
};

export const blogCategories: BlogCategory[] = [
  { slug: "start", name: "Start a business", bg: "#FF6B00", ink: "#FFFFFF", icons: ["custom:kirana", "Key", "Plant"] },
  { slug: "payments", name: "Payments", bg: "#007373", ink: "#FFFFFF", icons: ["DeviceMobile", "custom:upi-arrow", "custom:rupee-coin"] },
  { slug: "whatsapp", name: "WhatsApp", bg: "#3D6B0C", ink: "#FFFFFF", icons: ["ChatCircleDots", "ChatsCircle", "ChatCircleDots"] },
  { slug: "get-found", name: "Get found", bg: "#E6007E", ink: "#FFFFFF", icons: ["MapPin", "Storefront"] },
  { slug: "rent-own", name: "Rent + Own", bg: "#2B1E6B", ink: "#FFFFFF", icons: ["Key", "custom:kirana", "SquaresFour"] },
  { slug: "costs-gst", name: "Costs & GST", bg: "#FFB400", ink: "#1B1030", icons: ["Calculator", "custom:gst-stamp", "Receipt"] },
  { slug: "custom", name: "Custom vs template", bg: "#B8005F", ink: "#FFFFFF", icons: ["custom:tailor-tape", "Storefront"] },
  { slug: "ai-search", name: "AI & search", bg: "#2B1E6B", ink: "#FFFFFF", icons: ["Sparkle", "ChatCircleDots", "MagnifyingGlass"] },
];

export function getCategory(slug: BlogCategorySlug) {
  return blogCategories.find((c) => c.slug === slug)!;
}
