import { getStage, stages } from "@/lib/offers";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat pricing";

export function generateStaticParams() {
  return stages.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stage = getStage(slug);
  return ogImage({ title: stage ? `${stage.name}: ${stage.tagline}` : "Start small. Pay monthly.", kicker: stage ? `${stage.monthly}/month` : "Pricing", accent: "peacock" });
}
