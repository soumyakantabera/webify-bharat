import { cities } from "@/lib/cities";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat in your city";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  return ogImage({ title: `Custom digital systems for ${city?.name ?? "your city's"} businesses.`, kicker: city ? `${city.name}, ${city.state}` : "Cities", accent: "indigo" });
}
