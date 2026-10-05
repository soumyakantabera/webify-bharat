import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PhotoBento } from "@/components/collage";
import { IndustryTile } from "@/components/industries";
import { PageHero, SectionHead } from "@/components/tiles";
import { industryPages } from "@/lib/industries";
import { pageMetadata } from "@/lib/page-seo";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("industries");

export default function IndustriesPage() {
  return (
    <Layout cta={{ title: "Tell us about your trade. We'll show you how we'd build for it.", message: WA_MSG.default, webu: "pointing" }}>
      <BreadcrumbLd seoKey={"industries"} />
      <PageHero
        kicker="Industries"
        title="Every trade works differently. So does every build."
        sub="A kirana, a clinic and a dealer network each need different things. Pick yours to see a typical day, the usual headaches and how we'd build around them."
        cta={<WhatsAppCTA message={WA_MSG.default} context="hero" label="Talk about my business" />}
        visual={<PhotoBento cells={industryPages.map((i) => ({ slot: i.tileCrop ? i.photo2 : i.photo, alt: i.name, href: `/industries/${i.slug}`, label: i.name }))} />}
      />

      <section className="section surface-2" id="industries" aria-labelledby="ind-title">
        <div className="container">
          <SectionHead kicker="Pick your trade" id="ind-title" title="Seven trades we know well. Built fresh for each business." />
          <div className="industry-grid-v2">
            {industryPages.map((ind) => (
              <IndustryTile key={ind.slug} ind={ind} />
            ))}
            <div className="industry-tile is-other">
              <span className="industry-tile-body">
                <span className="industry-tile-icon">
                  <Icon name="Sparkle" size={22} />
                </span>
                <h3 className="industry-tile-name">Not listed? We build for any business.</h3>
                <span className="industry-tile-line">Salons, gyms, travel, logistics, services — tell us how your day runs and we'll tailor from there.</span>
                <WhatsAppCTA message={WA_MSG.default} context="industries-other" label="Tell us about yours" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
