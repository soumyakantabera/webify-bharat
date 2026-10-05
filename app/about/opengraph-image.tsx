import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "We believe no two businesses should get the same website.";

export default function Image() {
  return ogImage({ title: "We believe no two businesses should get the same website.", kicker: "About", accent: "haldi" });
}
