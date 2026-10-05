import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat — built for your business, not for everyone's.";

export default function Image() {
  return ogImage({ title: "Your own software and marketing — planned, built, run and grown for you.", kicker: "Webify Bharat", accent: "rani" });
}
