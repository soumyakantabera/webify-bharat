import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "We’ve already built for businesses like yours.";

export default function Image() {
  return ogImage({ title: "We’ve already built for businesses like yours.", kicker: "Prototype Room", accent: "indigo" });
}
