import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { WhatsAppCta } from "@/components/icons";
import { getPost, posts, WA_CHAT } from "@/lib/site";
import { hdSrc } from "@/lib/hd-images";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`blog:${slug}`);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const image = hdSrc(post.image);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container article page-copy">
          <PageLead icon="article" kicker="Insights" />
          <h1>{post.title}</h1>
          <p className="muted-copy">{post.excerpt}</p>
        </div>
      </section>

      <SeoChunk pageKey={`blog:${post.slug}`} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container article">
          <div className="blog-hero-media">
            <Image
              src={image}
              alt={post.title}
              width={1600}
              height={900}
              quality={95}
              priority
              sizes="(max-width: 760px) 100vw, 760px"
              className="blog-hero-img"
            />
          </div>
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>
      <FaqSection block={getFaq(`blog:${post.slug}`)} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container article">
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <WhatsAppCta href={WA_CHAT}>Talk this through</WhatsAppCta>
            <Link href="/blog" className="btn btn-secondary">
              All insights
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
