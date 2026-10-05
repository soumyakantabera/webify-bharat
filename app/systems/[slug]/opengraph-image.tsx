import { blocks, getBlock } from "@/lib/blocks";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "A Webify Bharat building block";

export function generateStaticParams() {
  return blocks.map((b) => ({ slug: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const block = getBlock(slug);
  return ogImage({ title: block?.headline ?? "Your own software, built to fit.", kicker: block?.name ?? "Systems", accent: "peacock" });
}
