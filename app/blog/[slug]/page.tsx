import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { getPost, posts, WA_CHAT } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Insights" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Layout>
      <section className="page-hero">
        <div className="container article">
          <div className="eyebrow">
            <span className="dot" /> Insights
          </div>
          <h1>{post.title}</h1>
          <p className="muted-copy">{post.excerpt}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container article">
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: "100%",
              height: 320,
              objectFit: "cover",
              borderRadius: 28,
              marginBottom: 32,
            }}
          />
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <a className="btn btn-primary" href={WA_CHAT}>
              Talk this through →
            </a>
            <Link href="/blog" className="btn btn-secondary">
              All insights
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
