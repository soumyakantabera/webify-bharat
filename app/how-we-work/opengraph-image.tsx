import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "No templates. A process that starts with you.";

export default function Image() {
  return ogImage({ title: "No templates. A process that starts with you.", kicker: "How we work", accent: "marigold" });
}
