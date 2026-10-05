import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Pick the blocks. We tailor every one.";

export default function Image() {
  return ogImage({ title: "Pick the blocks. We tailor every one.", kicker: "Systems", accent: "peacock" });
}
