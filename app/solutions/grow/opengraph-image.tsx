import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "You’ve got customers. Let’s get you more — and keep more of what they pay.";

export default function Image() {
  return ogImage({ title: "You’ve got customers. Let’s get you more — and keep more of what they pay.", kicker: "Grow", accent: "mehendi" });
}
