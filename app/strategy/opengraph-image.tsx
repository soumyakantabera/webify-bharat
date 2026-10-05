import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Know what to build before you spend a rupee on it.";

export default function Image() {
  return ogImage({ title: "Know what to build before you spend a rupee on it.", kicker: "Strategy", accent: "indigo" });
}
