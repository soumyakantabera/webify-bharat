import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Use our stack, or keep yours. We build around it.";

export default function Image() {
  return ogImage({ title: "Use our stack, or keep yours. We build around it.", kicker: "Integrations", accent: "peacock" });
}
