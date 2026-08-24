import type { Metadata } from "next";
export const metadata: Metadata = { title: "Insights" };

import Link from "next/link";
import Layout from "@/components/Layout";
import { posts } from "@/lib/site";

export default function BlogPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Insights
          </div>
          <h1>
            Practical ideas for <span>smarter business.</span>
          </h1>
          <p className="muted-copy" style={{ maxWidth: 700 }}>
            Straightforward guides on websites, payments, WhatsApp, analytics and
            digital operations.
          </p>
        </div>
      </section>
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
                <span className="card-link">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
