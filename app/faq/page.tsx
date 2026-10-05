import type { Metadata } from "next";
import { glossify } from "@/components/clarity/glossify";
import Layout from "@/components/Layout";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Webu } from "@/components/Webu";
import { FaqExplorer } from "@/components/faq/FaqExplorer";
import { BreadcrumbLd, LdScript } from "@/components/SeoLd";
import { PageHero } from "@/components/tiles";
import { CORE_FAQS, FAQ_CATEGORIES } from "@/lib/faq-core";
import { pageMetadata } from "@/lib/page-seo";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("faq");

const ASK = "Hi! I have a question that isn't on your FAQ.";

export default function FaqPage() {
  return (
    <Layout cta={{ title: "Didn't find your answer? Ask us directly.", message: ASK, webu: "thinking" }}>
      <BreadcrumbLd seoKey="faq" />
      <LdScript
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: CORE_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <PageHero
        kicker="Poochho — ask us"
        title="Questions, answered."
        sub="Straight answers on custom work, pricing, what you own, registrations and support. Search, or pick a topic."
        cta={<WhatsAppCTA message={WA_MSG.default} context="hero" variant="ghost" label="Ask on WhatsApp" />}
        visual={<Webu state="thinking" size={220} className="faq-webu" />}
      />
      <section className="section surface-2" id="questions" aria-label="Questions">
        <div className="container narrow">
          <FaqExplorer
            categories={FAQ_CATEGORIES}
            items={CORE_FAQS.map((f) => ({ ...f, qNode: glossify(f.q), aNode: glossify(f.a) }))}
            notHere={
              <div className="faq-not-here">
                <strong>Not here? WhatsApp us.</strong>
                <span>We reply within a few hours, 7 days a week.</span>
                <WhatsAppCTA message={ASK} context="faq-not-here" label="WhatsApp us" />
              </div>
            }
          />
        </div>
      </section>
    </Layout>
  );
}
