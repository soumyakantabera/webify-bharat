import { getCategory } from "@/lib/blog-categories";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { getPost, publishedPosts } from "@/lib/posts";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Webify Bharat guide";

export function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogImage({ title: post?.title ?? "Practical guides for Indian business owners.", kicker: post ? getCategory(post.category).name : "Blog", accent: "indigo", blogPost: post?.category });
}
