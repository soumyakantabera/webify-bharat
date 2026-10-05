import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "GST, Udyam, IEC — filed for you.";

export default function Image() {
  return ogImage({ title: "GST, Udyam, IEC — filed for you.", kicker: "Registrations", accent: "indigo" });
}
