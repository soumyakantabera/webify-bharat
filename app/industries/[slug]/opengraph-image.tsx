import { getIndustryPage, industryPages } from "@/lib/industries";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat for your industry";

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustryPage(slug);
  return ogImage({ title: `Built around how ${ind?.howNoun ?? "your business"} actually works.`, kicker: ind?.name ?? "Industries", accent: "rani" });
}
