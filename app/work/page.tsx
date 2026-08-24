import type { Metadata } from "next";
export const metadata: Metadata = { title: "Work" };

import Layout from "@/components/Layout";
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
      <section className="section">
        <div className="container industry-grid">
          {workItems.map((item) => (
            <article className="industry-card real-photo" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="content">
                <span className="badge">{item.industry}</span>
                <h3 style={{ marginTop: 12 }}>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FaqSection block={getFaq("work")} />
    </Layout>
  );
}
