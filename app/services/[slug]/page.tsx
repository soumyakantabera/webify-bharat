import { notFound } from "next/navigation";
import { RedirectStub, redirectMetadata } from "@/components/RedirectStub";
import { oldSlugs, redirectFor } from "@/lib/redirects";

export const dynamicParams = false;

export function generateStaticParams() {
  return oldSlugs("/services/").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return redirectMetadata(redirectFor(`/services/${slug}`) ?? "/systems");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const to = redirectFor(`/services/${slug}`);
  if (!to) notFound();
  return <RedirectStub to={to} />;
}
