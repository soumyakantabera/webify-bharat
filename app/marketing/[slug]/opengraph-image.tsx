import { getReachService, reachServices } from "@/lib/reach";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Reach — marketing services";

export function generateStaticParams() {
  return reachServices.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getReachService(slug);
  return ogImage({ title: service?.headline ?? "Get found where your customers look.", kicker: service?.name ?? "Marketing", accent: "marigold" });
}
