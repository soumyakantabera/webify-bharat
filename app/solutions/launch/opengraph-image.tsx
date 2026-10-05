import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "From idea to open-for-business. We set up all of it.";

export default function Image() {
  return ogImage({ title: "From idea to open-for-business. We set up all of it.", kicker: "Launch", accent: "marigold" });
}
