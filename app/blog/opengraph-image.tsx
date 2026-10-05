import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Practical guides for Indian business owners.";

export default function Image() {
  return ogImage({ title: "Practical guides for Indian business owners.", kicker: "Blog", accent: "indigo" });
}
