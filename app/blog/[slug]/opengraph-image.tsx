import { categoryFor } from "@/lib/blog-categories";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { getPost, posts } from "@/lib/site";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat article";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/** Blog OG uses the generated category cover (content-plan §17.3 #12). */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogImage({ title: post?.title ?? "Webify Bharat blog", kicker: categoryFor(slug).name, accent: "indigo", blogPost: slug });
}
