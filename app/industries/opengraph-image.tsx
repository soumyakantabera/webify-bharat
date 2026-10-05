import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Every trade works differently. So does every build.";

export default function Image() {
  return ogImage({ title: "Every trade works differently. So does every build.", kicker: "Industries", accent: "rani" });
}
