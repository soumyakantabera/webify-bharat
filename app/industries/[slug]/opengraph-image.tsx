import { getIndustry, industries } from "@/lib/site";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat for your industry";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = getIndustry(slug)?.title ?? "your trade";
  return ogImage({ title: `Built around how ${name.toLowerCase()} actually works.`, kicker: name, accent: "rani" });
}
