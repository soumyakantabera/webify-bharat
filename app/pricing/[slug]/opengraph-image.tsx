import { getStage } from "@/lib/offers";
import { getOffer, offers } from "@/lib/legacy-offers";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat pricing";

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stage = getStage(slug);
  if (stage) return ogImage({ title: `${stage.name}: ${stage.tagline}`, kicker: "Pricing", accent: "peacock" });
  const offer = getOffer(slug);
  return ogImage({ title: offer ? `${offer.name}. ${offer.desc}` : "Start small. Pay monthly.", kicker: "Pricing", accent: "peacock" });
}
