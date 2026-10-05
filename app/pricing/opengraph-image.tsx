import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Start small. Pay monthly. Grow into the next stage.";

export default function Image() {
  return ogImage({ title: "Start small. Pay monthly. Grow into the next stage.", kicker: "Pricing", accent: "peacock" });
}
