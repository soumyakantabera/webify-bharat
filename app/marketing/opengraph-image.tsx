import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Get found where your customers look.";

export default function Image() {
  return ogImage({ title: "Get found where your customers look.", kicker: "Marketing", accent: "marigold" });
}
