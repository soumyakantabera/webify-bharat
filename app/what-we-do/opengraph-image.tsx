import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Plan it. Build it. Run it. Grow it.";

export default function Image() {
  return ogImage({ title: "Plan it. Build it. Run it. Grow it.", kicker: "What we do", accent: "rani" });
}
