import Link from "next/link";
import { BlogCover } from "@/components/svg/BlogCover";
import { getCategory } from "@/lib/blog-categories";
import { readMinutes, type Post } from "@/lib/posts";

/** Blog card: generated category cover, category chip, title, excerpt, reading time. */
export function BlogCard({ post, large = false, headingLevel = "h3" }: { post: Post; large?: boolean; headingLevel?: "h2" | "h3" }) {
  const cat = getCategory(post.category);
  const H = headingLevel;
  return (
    <Link href={`/blog/${post.slug}`} className={`blog-card-v2${large ? " is-large" : ""}`} style={{ ["--cat" as string]: cat.bg, ["--cat-ink" as string]: cat.ink }}>
      <span className="blog-card-cover" aria-hidden="true">
        <BlogCover category={post.category} showLabel={false} />
      </span>
      <span className="blog-card-body">
        <span className="blog-chip">{cat.name}</span>
        <H className="blog-card-title">{post.title}</H>
        <span className="blog-card-excerpt">{post.excerpt}</span>
        <span className="blog-card-meta mono">{readMinutes(post)} min read</span>
      </span>
    </Link>
  );
}
