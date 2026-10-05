import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Your business already works. Let’s make your tools work the same way.";

export default function Image() {
  return ogImage({ title: "Your business already works. Let’s make your tools work the same way.", kicker: "Organise", accent: "rani" });
}
