import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
export const metadata: Metadata = pageMetadata("work");

import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { workArticle } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { workItems } from "@/lib/site";

export default function WorkPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container page-copy">
          <PageLead icon="work" kicker="Work" />
          <h1>
            Systems designed around <span>real operations.</span>
          </h1>
          <p className="muted-copy">
            Illustrative case-study formats until client work is approved for publication.
          </p>
        </div>
      </section>

      <SeoChunk pageKey="work" />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Illustrative, not a client claim
              </div>
              <h2>
                Same search. <span>Different owner.</span>
              </h2>
            </div>
            <p>
              A worked example, not a client. A published number waits until that business
              approves it. Nothing on this page is a result.
            </p>
          </div>
          <div className="control-grid">
            <article className="control-card rent">
              <img
                src="/images/services/ecommerce.png"
                alt="Directory listing illustration in the Webify Bharat style"
                width={800}
                height={800}
              />
              <p className="control-kicker">Before</p>
              <h3>The enquiry sits on a directory.</h3>
              <ul>
                <li>A lead pack or listing fee</li>
                <li>The follow-up belongs to their login</li>
                <li>You pay again when they already wanted you</li>
              </ul>
            </article>
            <article className="control-card own">
              <img
                src="/images/services/website.png"
                alt="Owned website illustration in the Webify Bharat style"
                width={800}
                height={800}
              />
              <p className="control-kicker">After</p>
              <h3>That search lands on your site.</h3>
              <ul>
                <li>Website, Maps and WhatsApp in your name</li>
                <li>The chat stays on your number</li>
                <li>No extra fee on that organic enquiry</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container industry-grid">
          {workItems.map((item) => (
            <article className="industry-card real-photo" key={item.title}>
              <img src={item.image} alt="" />
              <p className="staged-note">Staged. Not a customer.</p>
              <div className="content">
                <span className="badge">{item.industry}</span>
                <h3 style={{ marginTop: 12 }}>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ArticleBlock article={workArticle} />

      <FaqSection block={getFaq("work")} />
    </Layout>
  );
}
