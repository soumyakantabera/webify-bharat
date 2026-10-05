import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { LogoChip } from "@/components/LogoChip";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PhotoBento } from "@/components/collage";
import { GlossaryChip } from "@/components/clarity";
import { BlockFilterGrid, BlockTile } from "@/components/blocks";
import { TabbedShowcase } from "@/components/slides/TabbedShowcase";
import { PageHero, SectionHead } from "@/components/tiles";
import { BlockStack } from "@/components/svg/BlockStack";
import { BLOCK_FILTERS, BLOCK_REPEAT_LINE, blocks, getBlock } from "@/lib/blocks";
import { getLogo } from "@/lib/logos";
import { pageMetadata } from "@/lib/page-seo";
import { getTrade, SHOWCASE_TRADES } from "@/lib/trades";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("systems");

const PHOTO_TILES = new Set(["site", "store", "pay", "desk", "team"]);
const HONEY = ["razorpay", "cashfree", "stripe", "whatsapp", "google-workspace", "microsoft-365", "zoho", "odoo", "tally", "shiprocket", "google-sheets", "vercel"];

export default function SystemsHub() {
  return (
    <Layout cta={{ title: "Not sure which blocks you need? That's our job.", message: WA_MSG.default, webu: "thinking" }}>
      <PageHero
        kicker="Systems · the 11 blocks"
        tone="rani"
        title="Pick the blocks. We tailor every one."
        sub={
          <>
            Your website, store, payments, WhatsApp, a <GlossaryChip term="CRM" /> or <GlossaryChip term="ERP" />, staff portals and more — each built for how your business works. {BLOCK_REPEAT_LINE}
          </>
        }
        cta={<WhatsAppCTA context="hero" />}
        visual={<PhotoBento cells={["site", "store", "pay", "desk", "team"].map((s) => ({ slot: getBlock(s)!.photo, alt: getBlock(s)!.becomes }))} />}
      />

      <section className="section" id="blocks" aria-labelledby="blocks-title">
        <div className="container">
          <SectionHead kicker="The blocks" id="blocks-title" title="Eleven blocks. Each one built for you." />
          <BlockFilterGrid
            label="Filter blocks"
            filters={BLOCK_FILTERS}
            items={[
              ...blocks.map((b) => ({ id: b.slug, filter: b.filter, node: <BlockTile block={b} photo={PHOTO_TILES.has(b.slug)} /> })),
              {
                id: "integrations",
                filter: "always",
                node: (
                  <Link href="/integrations" className="block-tile is-integrations">
                    <span className="block-tile-icon"><Icon name="PlugsConnected" size={28} /></span>
                    <span className="block-tile-name">Integrations</span>
                    <span className="block-tile-line">Use our stack, or keep yours — Zoho, Odoo, Tally, Google, Microsoft.</span>
                    <span className="block-tile-more" aria-hidden="true">Explore →</span>
                  </Link>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="burst burst-dusk" id="combine" aria-labelledby="combine-title">
        <div className="container">
          <SectionHead id="combine-title" title="How blocks combine — pick a business." sub="Every combination is a starting point. Yours will be different." align="center" />
          <div className="on-light">
            <TabbedShowcase
              label="Business type"
              tabs={SHOWCASE_TRADES.map((slug) => {
                const t = getTrade(slug)!;
                return {
                  id: slug,
                  label: (
                    <>
                      <Icon name={t.icon} size={20} /> {t.name}
                    </>
                  ),
                  panel: (
                    <div className="showcase-panel">
                      <BlockStack highlight={t.blocks} label={`Blocks for ${t.name}`} />
                      <div>
                        <h3>{t.blocks.map((b) => getBlock(b)!.short).join(" + ")}</h3>
                        <ul className="ticks">{t.organise.map((o) => <li key={o}>{o}</li>)}</ul>
                      </div>
                    </div>
                  ),
                };
              })}
            />
          </div>
        </div>
      </section>

      <section className="section" id="integrations" aria-labelledby="int-title">
        <div className="container">
          <SectionHead kicker="Works with" id="int-title" title="Built around the tools you already use." sub="Shown only to indicate compatibility." />
          <ul className="logo-honeycomb">
            {HONEY.map((id) => getLogo(id)).filter(Boolean).map((l) => (
              <li key={l!.id}><LogoChip logo={l!} showNote={false} /></li>
            ))}
          </ul>
          <p className="center-note"><Link href="/integrations" className="text-link">How we work with your tools →</Link></p>
        </div>
      </section>
    </Layout>
  );
}
