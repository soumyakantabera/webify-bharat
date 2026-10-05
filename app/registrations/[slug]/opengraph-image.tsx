import { getRegistration, registrations } from "@/lib/registrations";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Registration filed for you by Webify Bharat";

export function generateStaticParams() {
  return registrations.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reg = getRegistration(slug);
  return ogImage({ title: `${reg?.name ?? "Your registration"} — filed for you.`, kicker: "Registrations", accent: "indigo" });
}
