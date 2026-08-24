import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { industryArticles } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { WhatsAppCta } from "@/components/icons";
import { getIndustry, industries, industryFeatures, WA_CHAT } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`industry:${slug}`);
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const label = industry.title.toLowerCase();

  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
            <PageLead icon={industry.slug} kicker="Industry solution" />
            <h1>
              Digital systems for <span>{industry.title}</span>
            </h1>
            <p className="muted-copy">
              {industry.description} We connect the customer-facing experience with the
              operational tools behind it.
            </p>
            <WhatsAppCta href={WA_CHAT}>Discuss your business</WhatsAppCta>
          </div>
          <img src={`/images/real/${industry.photo}`} alt={industry.title} />
        </div>
      </section>

      <SeoChunk pageKey={`industry:${industry.slug}`} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Real business + digital system
              </div>
              <h2>
                Where operations meet <span>technology.</span>
              </h2>
            </div>
            <p>
              We start with what happens on the floor, at the counter and with the
              customer — then connect the digital tools around it.
            </p>
          </div>
          <div className="system-pair">
            <div>
              <img
                src={`/images/real/${industry.photo}`}
                alt={`${industry.title} business`}
              />
              <div className="pair-copy">
                <h3>The real operation</h3>
                <p>
                  Customers, staff, transactions and daily processes stay grounded in how
                  the business actually runs.
                </p>
              </div>
            </div>
            <div className="system-illustration">
              <img
                src={`/images/industries/${industry.illustration}`}
                alt={`${industry.title} digital system illustration`}
              />
              <div className="pair-copy">
                <h3>The connected system</h3>
                <p>
                  Website, communication, payments, automation and reporting are designed
                  around that operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> What changes
              </div>
              <h2>
                Less juggling.
                <br />
                <span>More visibility.</span>
              </h2>
            </div>
            <p>
              A connected system reduces manual follow-ups, gives customers a smoother
              experience and helps the owner see what is actually happening.
            </p>
          </div>
          <div className="feature-grid">
            {industryFeatures.map((feature, index) => (
              <div className="feature" key={feature}>
                <div className="icon">{index + 1}</div>
                <h3>{feature}</h3>
                <p>Designed around the daily realities of {label} businesses.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {industryArticles[industry.slug] ? (
        <ArticleBlock article={industryArticles[industry.slug]} />
      ) : null}

      <FaqSection block={getFaq(`industry:${industry.slug}`)} />
    </Layout>
  );
}
