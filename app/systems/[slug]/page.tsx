import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Img, PhotoUiLayer } from "@/components/collage";
import { BlockSignature, BlockTile, blockPricingNote, businessPhoto, Honeycomb, RentOwnStepper } from "@/components/blocks";
import { FaqList } from "@/components/FaqList";
import { FlipCard, PageHero, SectionHead } from "@/components/tiles";
import { blocks, getBlock } from "@/lib/blocks";
import { getChannelSet } from "@/lib/channels";
import { pageMetadata } from "@/lib/page-seo";

const BASE = SITE_URL;

export const dynamicParams = false;

export function generateStaticParams() {
  return blocks.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`block:${slug}`);
}

const STICKER: Record<string, string> = {
  site: "Found on Google ✅",
  store: "Repeat order placed",
  pay: "UPI received ✅",
  chat: "Booking confirmed on WhatsApp",
  pulse: "This week at a glance",
  ledger: "Invoice sent ✅",
  file: "GSTIN received ✅",
  desk: "Follow-up due today",
  team: "Leave approved",
  workspace: "hello@yourbusiness.in",
  connect: "Tally ⇄ Zoho synced ✅",
};

export default async function BlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const block = getBlock(slug);
  if (!block) notFound();
  const channel = block.channelSlug ? getChannelSet(block.channelSlug) : undefined;
  const price = blockPricingNote(block);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: block.name,
    description: `${block.becomes}. ${block.oneLiner}`,
    url: `${BASE}/systems/${block.slug}`,
    provider: { "@type": "Organization", name: "Webify Bharat", url: BASE },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <Layout cta={{ title: `Tell us how you work. We'll tailor ${block.name} around it.`, message: block.waMessage, webu: "pointing" }}>
      <BreadcrumbLd seoKey={`block:${slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero
        kicker={block.name}
        title={block.headline}
        sub={
          <>
            {block.becomes}. {block.oneLiner}
          </>
        }
        cta={<WhatsAppCTA message={block.waMessage} context="hero" label={`Talk about ${block.name}`} />}
        visual={
          <PhotoUiLayer slot={block.photo} priority stickers={[{ text: STICKER[block.slug] }]}>
            <div className="sig-art">
              <BlockSignature slug={block.slug} />
            </div>
          </PhotoUiLayer>
        }
      />

      <section className="section surface-2" id="tailored" aria-labelledby="tailored-title">
        <div className="container">
          <SectionHead kicker="Tailored for" id="tailored-title" title={`${block.short}, built differently for every business.`} sub="Flip a card to see how we'd shape it." />
          <div className="flip-grid">
            {block.tailoredFor.map((t) => {
              const photo = businessPhoto(t.business);
              return (
                <FlipCard
                  key={t.business}
                  id={`${block.slug}-${t.business}`}
                  label={t.business}
                  flipLabel="How we'd build it"
                  front={
                    <>
                      {photo ? <Img slot={photo} mask="none" className="flip-photo" crop="50% 85%" width={400} height={260} decorative /> : null}
                      <span className="flip-title">
                        <Icon name={block.icon} size={22} /> {t.business}
                      </span>
                    </>
                  }
                  back={
                    <>
                      <span className="flip-title">{t.business}</span>
                      <span className="flip-sub">{block.name}, tailored</span>
                      <span className="flip-quote">{t.how}</span>
                    </>
                  }
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="capabilities" aria-labelledby="cap-title">
        <div className="container">
          <SectionHead kicker="What it can include" id="cap-title" title="We include what your business needs. Nothing it doesn't." />
          <Honeycomb items={block.capabilities} accent={block.colour} />
          <p className="center-note">For example — {block.example}</p>
        </div>
      </section>

      {channel ? (
        <section className="section surface-2" id="rent-own" aria-labelledby="ro-title">
          <div className="container">
            <SectionHead kicker="Rent + Own" id="ro-title" title="Keep the apps for what they're good at. Own the rest." />
            <RentOwnStepper set={channel} />
          </div>
        </section>
      ) : null}

      <section className="section" id="related" aria-labelledby="related-title">
        <div className="container">
          <SectionHead kicker="Works best with" id="related-title" title={`Blocks that pair well with ${block.short}.`} />
          <div className="related-grid">
            {block.related.map((r) => (
              <BlockTile key={r} block={getBlock(r)!} />
            ))}
          </div>
          <div className="price-note-box">
            <Icon name="Tag" size={22} />
            <div>
              <strong>{price.included}.</strong>
              {price.addon ? <span> {price.addon}</span> : null}
              <span> Third-party fees (gateway, WhatsApp, licences) are billed by the provider.</span>{" "}
              <Link href="/pricing" className="text-link">See pricing →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-2" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <SectionHead kicker="Poochho — ask us" id="faq-title" title={`${block.name}: questions, answered.`} />
          <FaqList items={block.faqs.map((f, i) => ({ key: `${block.slug}-${i}`, q: f.q, a: f.a, category: "custom" as const }))} />
        </div>
      </section>
    </Layout>
  );
}
