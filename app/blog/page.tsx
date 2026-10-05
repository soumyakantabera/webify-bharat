import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { EmptyState } from "@/components/EmptyState";
import { BlogCard } from "@/components/blog";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { Img } from "@/components/collage";
import { PageHero, SectionHead } from "@/components/tiles";
import { blogCategories } from "@/lib/blog-categories";
import { pageMetadata } from "@/lib/page-seo";
import { publishedPosts } from "@/lib/posts";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("blog");

export default function BlogPage() {
  const featured = publishedPosts.filter((p) => p.featured).slice(0, 4);
  const latest = publishedPosts.filter((p) => !p.featured).slice(0, 3);
  const topics = blogCategories.map((c) => ({ ...c, count: publishedPosts.filter((p) => p.category === c.slug).length })).filter((c) => c.count > 0);
  const series = [...new Set(publishedPosts.map((p) => p.series).filter(Boolean))] as string[];

  return (
    <Layout cta={{ title: "Got a question a guide didn't answer? Ask us.", message: WA_MSG.default, webu: "thinking" }}>
      <BreadcrumbLd seoKey={"blog"} />
      <PageHero
        kicker="Blog"
        title="Practical guides for Indian business owners."
        sub="Plain-language guides on getting found, getting paid, WhatsApp, GST and running your business on one system. No jargon, no invented numbers."
        cta={<WhatsAppCTA message={WA_MSG.default} context="hero" variant="ghost" label="Ask us a question" />}
        visual={<Img slot="/images/snapshots/blog.webp" mask="arch" width={600} height={800} priority alt="Notebook and study material on a desk" />}
        tone="indigo"
      />

      <section className="section" id="featured" aria-labelledby="featured-title">
        <div className="container">
          <SectionHead kicker="Start here" id="featured-title" title="Featured guides." />
          <div className="blog-featured">
            {featured.map((p) => (
              <BlogCard key={p.slug} post={p} large />
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="latest" aria-labelledby="latest-title">
        <div className="container">
          <SectionHead kicker="Latest" id="latest-title" title="Recently updated." />
          <div className="blog-grid is-three">
            {latest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="topics" aria-labelledby="topics-title">
        <div className="container">
          <SectionHead kicker="Topics" id="topics-title" title="Browse by topic." />
          <div className="topic-bento">
            {topics.map((t, i) => (
              <a key={t.slug} href={`?topic=${t.slug}#all-guides`} className={`topic-tile${i === 0 ? " is-wide" : ""}`} style={{ ["--cat" as string]: t.bg, ["--cat-ink" as string]: t.ink }}>
                <Icon name={t.icons[0]} size={28} />
                <strong>{t.name}</strong>
                <span className="mono">
                  {t.count} {t.count === 1 ? "guide" : "guides"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {series.length ? (
        <section className="section surface-2" id="series" aria-labelledby="series-title">
          <div className="container">
            <SectionHead kicker="Series" id="series-title" title="Read them in order." />
            <div className="series-rail">
              {series.map((s) => (
                <article key={s} className="series-card">
                  <h3>{s}</h3>
                  <ol>
                    {publishedPosts
                      .filter((p) => p.series === s)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                        </li>
                      ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section" id="all-guides" aria-labelledby="all-title">
        <div className="container">
          <SectionHead kicker={`${publishedPosts.length} guides`} id="all-title" title="All guides." />
          <BlogSearch
            categories={topics.map((t) => ({ slug: t.slug, name: t.name }))}
            empty={<EmptyState context="blog-empty" />}
            items={publishedPosts.map((p) => ({
              slug: p.slug,
              category: p.category,
              text: [p.title, p.excerpt, ...p.tldr, ...p.sections.flatMap((s) => [s.heading, ...s.paragraphs])].join(" ").toLowerCase(),
              node: <BlogCard post={p} />,
            }))}
          />
        </div>
      </section>
    </Layout>
  );
}
