import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
export const metadata: Metadata = pageMetadata("blog");

import Link from "next/link";
import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { blogIndexArticle } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { IconArrow } from "@/components/icons";
import { posts } from "@/lib/site";

export default function BlogPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container page-copy">
          <PageLead icon="blog" kicker="Insights" />
          <h1>
            Practical ideas for <span>smarter business.</span>
          </h1>
          <p className="muted-copy">
            Straightforward guides on websites, payments, WhatsApp, analytics and
            digital operations.
          </p>
        </div>
      </section>

      <SeoChunk pageKey="blog" />
      <section className="section">
        <div className="container blog-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card"
            >
              <img src={post.image} alt={post.title} />
              <div className="content">
                <span className="badge">Insights</span>
                <h3 style={{ marginTop: 12 }}>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="card-link">
                  Read article <IconArrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ArticleBlock article={blogIndexArticle} />

      <FaqSection block={getFaq("blog")} />
    </Layout>
  );
}
