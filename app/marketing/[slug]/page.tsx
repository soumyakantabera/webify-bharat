import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import { glossify } from "@/components/clarity/glossify";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PhotoUiLayer } from "@/components/collage";
import { BlockTile, Honeycomb } from "@/components/blocks";
import { GlossaryChip } from "@/components/clarity";
import { FaqList } from "@/components/FaqList";
import { PageHero, SectionHead, StickerCard } from "@/components/tiles";
import { AdCardMock, AiAnswerMock, BroadcastBubbles, MapPinCard, SearchResultMock } from "@/components/svg/mocks";
import { getBlock } from "@/lib/blocks";
import { pageMetadata } from "@/lib/page-seo";
import { getReachService, reachServices, type ReachSlug } from "@/lib/reach";

export const dynamicParams = false;

export function generateStaticParams() {
  return reachServices.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`reach:${slug}`);
}

const GLOSS_TERM: Partial<Record<ReachSlug, string>> = { seo: "SEO", ads: "SEM / Ads", "ai-visibility": "AI visibility" };
const TONE: Record<ReachSlug, string> = { seo: "rani", ads: "marigold", local: "mehendi", "ai-visibility": "rani", campaigns: "marigold" };

function Mock({ slug }: { slug: ReachSlug }) {
  if (slug === "seo") return <SearchResultMock />;
  if (slug === "ads") return <AdCardMock />;
  if (slug === "local") return <MapPinCard />;
  if (slug === "ai-visibility") return <AiAnswerMock />;
  return <div className="phone-sm"><BroadcastBubbles /></div>;
}

const STEPS = [
  { icon: "MagnifyingGlass", name: "Audit", text: "Where you show up today, and what's in the way." },
  { icon: "FileText", name: "Plan", text: "A short plan with priorities and a budget, in writing." },
  { icon: "Wrench", name: "Do", text: "We do the work, month after month." },
  { icon: "ChartLineUp", name: "Report monthly", text: "What changed, what it brought in, what's next." },
];

export default async function ReachPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getReachService(slug);
  if (!r) notFound();
  const term = GLOSS_TERM[r.slug];
  const others = reachServices.filter((o) => o.slug !== r.slug);
  return (
    <Layout cta={{ title: r.promise, message: r.waMessage, webu: "pointing" }}>
      <BreadcrumbLd seoKey={`reach:${slug}`} />
      <PageHero
        kicker={r.name}
        tone={TONE[r.slug]}
        title={r.headline}
        sub={
          <>
            {term ? <GlossaryChip term={term}>{r.kicker}</GlossaryChip> : glossify(r.kicker)}. Honest work, reported every month.
          </>
        }
        cta={<WhatsAppCTA message={r.waMessage} context="hero" label={`Talk about ${r.short}`} />}
        visual={
          <PhotoUiLayer slot={r.photo} priority stickers={[]}>
            <div className="sig-art"><Mock slug={r.slug} /></div>
          </PhotoUiLayer>
        }
      />

      <section className="section" id="why" aria-labelledby="why-title">
        <div className="container">
          <SectionHead kicker="Why it matters" id="why-title" title={`Why ${r.short.toLowerCase()} is worth doing.`} />
          <div className="sticker-grid">
            {r.why.map((w) => (
              <StickerCard key={w.title} icon={r.icon} title={w.title} tone={TONE[r.slug]}>{w.text}</StickerCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="what" aria-labelledby="what-title">
        <div className="container">
          <SectionHead kicker="What we do" id="what-title" title="The work, in plain words." />
          <Honeycomb items={r.whatWeDo} accent={r.colour} />
        </div>
      </section>

      <section className="section" id="how" aria-labelledby="how-title">
        <div className="container">
          <SectionHead kicker="How it works" id="how-title" title="Audit → plan → do → report monthly." />
          <ol className="mini-road">
            {STEPS.map((s, i) => (
              <li key={s.name}>
                <span className="mini-road-dot"><Icon name={s.icon} size={20} /></span>
                <span className="mono">Step {i + 1}</span>
                <strong>{s.name}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
          <div className="caveat-box" role="note">
            <Icon name="ShieldCheck" size={22} />
            <p><strong>The honest part:</strong> {r.caveat}</p>
          </div>
        </div>
      </section>

      <section className="section surface-2" id="related" aria-labelledby="related-title">
        <div className="container">
          <SectionHead kicker="Works best with" id="related-title" title="Pairs well with" sub={`Other Reach services: ${others.map((o) => o.short).join(", ")}.`} />
          <div className="related-grid">
            {r.related.map((b) => <BlockTile key={b} block={getBlock(b)!} />)}
          </div>
          <ul className="reach-chips">
            {others.map((o) => (
              <li key={o.slug} style={{ ["--accent" as string]: `var(${o.colour})` }}>
                <Link href={`/marketing/${o.slug}`}><Icon name={o.icon} size={18} /> {o.short}</Link>
              </li>
            ))}
          </ul>
          <div className="price-note-box">
            <Icon name="Tag" size={22} />
            <div>
              <strong>{r.pricingNote}</strong> <Link href="/pricing#reach" className="text-link">All Reach plans <Arw /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <SectionHead kicker="Poochho — ask us" id="faq-title" title={`${r.short}: questions, answered.`} />
          <FaqList items={r.faqs.map((f, i) => ({ key: `${r.slug}-${i}`, q: f.q, a: f.a, category: "process" as const }))} />
        </div>
      </section>
    </Layout>
  );
}
