import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import { glossify } from "@/components/clarity/glossify";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { LogoChip } from "@/components/LogoChip";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ArchWindows, Img } from "@/components/collage";
import { RentOwnStepper } from "@/components/blocks";
import { DaySlide } from "@/components/industries";
import { PrototypeTeaser } from "@/components/prototypes/PrototypeTeaser";
import { FaqList } from "@/components/FaqList";
import { StoryRail } from "@/components/slides/StoryRail";
import { BlockStack } from "@/components/svg/BlockStack";
import { MapPinCard, SearchResultMock } from "@/components/svg/mocks";
import { FlipCard, PageHero, SectionHead } from "@/components/tiles";
import { getBlock } from "@/lib/blocks";
import { getChannelSet } from "@/lib/channels";
import { getIndustryPage, industryPages } from "@/lib/industries";
import { getLogo } from "@/lib/logos";
import { pageMetadata } from "@/lib/page-seo";
import { publishedPrototypes } from "@/lib/prototypes";
import { waIndustry, waPrototypes } from "@/lib/wa";

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`industry:${slug}`);
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustryPage(slug);
  if (!ind) notFound();
  const message = waIndustry(ind.waLabel);
  const channel = getChannelSet(ind.channel);
  const own = publishedPrototypes.filter((p) => p.industry === ind.prototype);
  const protos = own.length ? own : publishedPrototypes.filter((p) => p.industry === "any");
  const accent = { ["--accent" as string]: `var(${ind.colour})` };
  const polaroids = [ind.photo2, ind.photo3].filter(Boolean) as string[];

  return (
    <Layout cta={{ title: `Tell us how your ${ind.place} runs. We'll build around it.`, message, label: `Talk about my ${ind.place}`, webu: "pointing" }}>
      <BreadcrumbLd seoKey={`industry:${slug}`} />
      <div className="industry-page" style={accent}>
        <PageHero
          kicker={ind.name}
          title={`Built around how ${ind.howNoun} actually works.`}
          sub={ind.sub}
          cta={<WhatsAppCTA message={message} context="hero" label={`Talk about my ${ind.place}`} />}
          visual={
            <div className="ind-hero-art">
              <ArchWindows slots={[ind.photo]} priority />
              <div className="ind-polaroids">
                {polaroids.map((p, i) => (
                  <figure key={p} className={`ind-polaroid ind-polaroid-${i + 1}`}>
                    <span className="washi washi-l" aria-hidden="true" />
                    <Img slot={p} mask="none" width={360} height={300} />
                  </figure>
                ))}
              </div>
            </div>
          }
        />

        <section className="section surface-2" id="day" aria-labelledby="day-title">
          <div className="container">
            <SectionHead kicker="A day, made easier" id="day-title" title={`A day in your ${ind.place}.`} sub="Each moment names the block that quietly helps. Illustrative — your day shapes your build." />
            <StoryRail label={`A day in your ${ind.place}`} slides={ind.day.map((m) => ({ id: m.time, node: <DaySlide moment={m} accent={ind.colour} /> }))} />
          </div>
        </section>

        <section className="section" id="pain-fix" aria-labelledby="pf-title">
          <div className="container">
            <SectionHead kicker="Sound familiar?" id="pf-title" title="The usual headaches — and what we'd build instead." sub="Flip a card to see the fix." />
            <div className="flip-grid">
              {ind.pains.map((p, i) => {
                const block = getBlock(p.block);
                return (
                  <FlipCard
                    key={p.pain}
                    id={`${ind.slug}-pain-${i}`}
                    label={p.pain}
                    flipLabel="See the fix"
                    front={
                      <>
                        <span className="pain-mark" aria-hidden="true">
                          “
                        </span>
                        <span className="flip-quote">{p.pain}</span>
                      </>
                    }
                    back={
                      <>
                        <span className="flip-title">
                          {block ? <Icon name={block.icon} size={20} /> : null} {block?.name}
                        </span>
                        <span className="flip-quote">{p.fix}</span>
                      </>
                    }
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="section surface-2" id="stack" aria-labelledby="stack-title">
          <div className="container ind-stack">
            <div>
              <SectionHead kicker="Starting stack" id="stack-title" title={`A typical starting stack for ${ind.howNoun}.`} sub="A starting point — we tailor from here." />
              <ul className="ind-stack-links">
                {ind.stack.map((b) => {
                  const block = getBlock(b)!;
                  return (
                    <li key={b}>
                      <Link href={`/systems/${b}`}>
                        <Icon name={block.icon} size={20} />
                        <span>
                          <strong>{block.name}</strong> {glossify(block.becomes)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <BlockStack highlight={ind.stack} label={`Blocks ${ind.howNoun} usually starts with`} />
          </div>
        </section>

        {channel ? (
          <section className="section ind-burst" id="rent-own" aria-labelledby="ro-title">
            <div className="container">
              <SectionHead kicker="Rent + Own" id="ro-title" title="Keep the apps for new customers. Own the channel for regulars." />
              <div className="ro-logos" aria-label="Apps we work alongside">
                <span>Works alongside</span>
                {ind.marketplaces.map((m) => {
                  const logo = getLogo(m);
                  return logo ? <LogoChip key={m} logo={logo} showNote={false} /> : null;
                })}
              </div>
              <RentOwnStepper set={channel} />
            </div>
          </section>
        ) : null}

        <section className="section" id="local" aria-labelledby="local-title">
          <div className="container local-tile">
            <div className="local-art" aria-hidden="true">
              <MapPinCard className="local-map" />
              <SearchResultMock query={ind.nearMe} className="local-search" />
            </div>
            <div>
              <SectionHead kicker="Get found" id="local-title" title={`Be found for “${ind.nearMe}”.`} sub="Google Business Profile, maps, reviews and city pages — set up properly, then kept up to date." />
              <Link href="/marketing/local" className="text-link">
                How Reach Local works <Arw />
              </Link>
            </div>
          </div>
        </section>

        <section className="section surface-2" id="prototype" aria-labelledby="proto-title">
          <div className="container">
            <SectionHead kicker="Prototype Room" id="proto-title" title={own.length ? `We've already built for ${ind.label}.` : "Start from something that already works."} sub="Concept views only. Ask on WhatsApp and we'll walk you through it — then rebuild it around you." />
            <div className="proto-row">
              {protos.map((p) => (
                <PrototypeTeaser key={p.slug} proto={p} />
              ))}
            </div>
            <div className="center-cta">
              <WhatsAppCTA message={waPrototypes(ind.waLabel)} context="industry-prototypes" variant="ghost" label={own.length ? `Show me the ${ind.place} prototype` : "Show me a prototype like this"} />
            </div>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-title">
          <div className="container narrow">
            <SectionHead kicker="Poochho — ask us" id="faq-title" title={`${ind.name}: questions, answered.`} />
            <FaqList items={ind.faqs.map((f, i) => ({ key: `${ind.slug}-${i}`, q: f.q, a: f.a, category: "custom" as const }))} />
          </div>
        </section>
      </div>
    </Layout>
  );
}
