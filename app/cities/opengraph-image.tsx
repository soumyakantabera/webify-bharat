import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "From Leh to Port Blair — we build for your business, wherever you are.";

export default function Image() {
  return ogImage({ title: "From Leh to Port Blair — we build for your business, wherever you are.", kicker: "Pan-India, remote", accent: "indigo" });
}
