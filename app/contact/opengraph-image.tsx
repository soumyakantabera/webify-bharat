import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The fastest way to reach us is WhatsApp.";

export default function Image() {
  return ogImage({ title: "The fastest way to reach us is WhatsApp.", kicker: "Contact", accent: "mehendi" });
}
