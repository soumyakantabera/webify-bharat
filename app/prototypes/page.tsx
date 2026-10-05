import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { Webu } from "@/components/Webu";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PrototypeFilter } from "@/components/prototypes/PrototypeFilter";
import { PrototypeTeaser } from "@/components/prototypes/PrototypeTeaser";
import { MockScreen } from "@/components/svg/mocks";
import { BlueprintGrid, FiveRoutes } from "@/components/svg/positioning";
import { SectionHead } from "@/components/tiles";
import { pageMetadata } from "@/lib/page-seo";
import { publishedPrototypes } from "@/lib/prototypes";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("prototypes");

const GROUPS = [
  { id: "sell", label: "Sell" },
  { id: "book", label: "Book" },
  { id: "teach", label: "Teach" },
  { id: "make", label: "Make" },
  { id: "export", label: "Export" },
  { id: "manage", label: "Manage (CRM/ERP)" },
  { id: "team", label: "Team" },
];

const WALKTHROUGH = [
  { icon: "ChatCircleDots", title: "You message us", text: "Tell us what you sell and how your day runs." },
  { icon: "SquaresFour", title: "We pick 1–3 prototypes", text: "The ones closest to your business." },
  { icon: "DeviceMobile", title: "A short walkthrough", text: "Screen-share or a video, right on WhatsApp." },
  { icon: "FileText", title: "A written scope", text: "What we'd change for you, and what it costs." },
];

export default function PrototypesPage() {
  const groups = GROUPS.filter((g) => publishedPrototypes.some((p) => p.group === g.id));
  const pinned = publishedPrototypes.slice(0, 4);

  return (
    <Layout cta={{ title: "Ask for a walkthrough. We'll pick the ones closest to your business.", message: WA_MSG.prototypes, label: "Show me prototypes", webu: "curtain" }}>
      <BreadcrumbLd seoKey={"prototypes"} />
      <section className="proto-hero" id="hero" aria-labelledby="page-title">
        <BlueprintGrid className="proto-hero-grid" notes={[]} />
        <div className="container phv-grid">
          <div className="phv-copy">
            <p className="kicker">Prototype Room</p>
            <h1 id="page-title">We've already built for businesses like yours.</h1>
            <p className="hero-sub">
              Eight working prototypes. Ask on WhatsApp and we'll walk you through the ones closest to your business — then rebuild it around you.
            </p>
            <div className="hero-actions">
              <WhatsAppCTA message={WA_MSG.prototypes} context="hero" label="Show me prototypes" />
            </div>
          </div>
          <div className="phv-visual proto-pinboard" aria-hidden="true">
            {pinned.map((p, i) => (
              <figure key={p.slug} className={`proto-pin proto-pin-${i + 1}`}>
                <span className="washi washi-l" />
                <MockScreen variant={p.image} />
              </figure>
            ))}
            <Webu state="curtain" size={110} className="proto-webu" />
          </div>
        </div>
      </section>

      <section className="section" id="prototypes" aria-labelledby="protos-title">
        <div className="container">
          <SectionHead kicker="Eight prototypes" id="protos-title" title="Pick what's closest to you." sub="Ordering, bookings, admissions, dealer portals, CRM and ERP dashboards, staff portals and exporter payments. Concept views only — the prototypes themselves are shown privately, on WhatsApp." />
          <PrototypeFilter groups={groups} items={publishedPrototypes.map((p) => ({ slug: p.slug, group: p.group, node: <PrototypeTeaser proto={p} /> }))} />
        </div>
      </section>

      <section className="section surface-2" id="why" aria-labelledby="why-title">
        <div className="container two-col">
          <div>
            <SectionHead kicker="Why start from a prototype" id="why-title" title="Proven base → faster launch → lower setup cost." sub="Still rebuilt for your workflow and your brand. A prototype is one of five ways we can start your build." />
          </div>
          <div className="why-routes-wrap">
            <FiveRoutes highlight="prototype" className="why-routes" />
          </div>
        </div>
      </section>

      <section className="section" id="walkthrough" aria-labelledby="walk-title">
        <div className="container">
          <SectionHead kicker="How a walkthrough works" id="walk-title" title="Four steps, all on WhatsApp." align="center" />
          <ol className="walk-steps">
            {WALKTHROUGH.map((s, i) => (
              <li key={s.title}>
                <span className="walk-num mono">{i + 1}</span>
                <Icon name={s.icon} size={26} />
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section surface-2" id="honesty" aria-labelledby="honest-title">
        <div className="container narrow proto-honesty">
          <Icon name="HandHeart" size={30} />
          <h2 id="honest-title">Prototypes start the conversation. Your build is customised for your business.</h2>
          <div className="proto-soon">
            <Webu state="building" size={90} />
            <p>
              <strong>Live client showcase — coming soon.</strong> We'll publish client work only with each client's permission.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
