import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { BlockTile } from "@/components/blocks";
import { BlogCard } from "@/components/blog";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { FaqList } from "@/components/FaqList";
import { BreadcrumbLd, LdScript, SITE_URL } from "@/components/SeoLd";
import { BlogCover } from "@/components/svg/BlogCover";
import { SectionHead } from "@/components/tiles";
import { getBlock } from "@/lib/blocks";
import { getCategory } from "@/lib/blog-categories";
import { pageMetadata } from "@/lib/page-seo";
import { getPost, publishedPosts, readMinutes, relatedPosts } from "@/lib/posts";
import { waPost } from "@/lib/wa";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`blog:${slug}`);
}

const anchor = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const cat = getCategory(post.category);
  const block = getBlock(post.block)!;
  const ctaAt = Math.max(1, Math.round(post.sections.length * 0.4));
  const message = waPost(post.title);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    dateModified: post.updated,
    datePublished: post.updated,
    inLanguage: "en-IN",
    articleSection: cat.name,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
    author: { "@type": "Organization", name: "Webify Bharat", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Webify Bharat", url: SITE_URL },
  };

  return (
    <Layout cta={{ title: "Have a question about this? Ask us on WhatsApp.", message, label: "Ask about this", webu: "thinking" }}>
      <ReadingProgress />
      <LdScript data={article} />
      <BreadcrumbLd seoKey={`blog:${post.slug}`} />

      <header className="post-hero" style={{ ["--cat" as string]: cat.bg }}>
        <div className="container post-hero-grid">
          <div>
            <p className="kicker">
              <Link href={`/blog?topic=${cat.slug}#all-guides`}>{cat.name}</Link> · <span className="mono">{readMinutes(post)} min read</span>
            </p>
            <h1 id="page-title">{post.title}</h1>
            <p className="hero-sub">{post.excerpt}</p>
            <div className="hero-actions">
              <WhatsAppCTA message={message} context="hero" variant="ghost" label="Ask about this" />
            </div>
          </div>
          <div className="post-cover" aria-hidden="true">
            <BlogCover category={post.category} />
          </div>
        </div>
      </header>

      <div className="container post-layout">
        <aside className="post-toc" aria-label="On this page">
          <p className="post-toc-title">On this page</p>
          <ol>
            {post.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${anchor(s.heading)}`}>{s.heading}</a>
              </li>
            ))}
            {post.faqs?.length ? (
              <li>
                <a href="#post-faq">Questions</a>
              </li>
            ) : null}
          </ol>
        </aside>

        <article className="post-body">
          <div className="tldr" role="note" aria-label="In short">
            <p className="tldr-title">In short</p>
            <ul>
              {post.tldr.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          {post.sections.map((s, i) => (
            <div key={s.heading}>
              {i === ctaAt ? (
                <aside className="post-inline-cta" aria-label="Related building block">
                  <p className="kicker">How we help</p>
                  <BlockTile block={block} />
                </aside>
              ) : null}
              <section id={anchor(s.heading)} aria-labelledby={`${anchor(s.heading)}-h`}>
                <h2 id={`${anchor(s.heading)}-h`}>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            </div>
          ))}
          {post.faqs?.length ? (
            <section id="post-faq" aria-labelledby="post-faq-h">
              <h2 id="post-faq-h">Questions</h2>
              <FaqList items={post.faqs.map((f, i) => ({ key: `${post.slug}-${i}`, q: f.q, a: f.a, category: "custom" as const }))} />
            </section>
          ) : null}
          <p className="post-updated">Last updated {new Date(post.updated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}.</p>
        </article>
      </div>

      <section className="section surface-2" id="related" aria-labelledby="related-title">
        <div className="container">
          <SectionHead kicker="Keep reading" id="related-title" title="Related guides." />
          <div className="blog-grid is-three">
            {relatedPosts(post).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
