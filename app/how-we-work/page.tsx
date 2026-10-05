import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { BazaarStrip } from "@/components/collage";
import { KanbanStrip, MiniGantt, ProcessRoadmap } from "@/components/process";
import { PageHero, PromiseOrb, SectionHead } from "@/components/tiles";
import { TailorTape } from "@/components/svg/TailorTape";
import { pageMetadata } from "@/lib/page-seo";
import { NEEDS_FROM_YOU, TYPICAL_TIMELINES } from "@/lib/process";
import { resolveImage } from "@/lib/images";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("how-we-work");

const STRIP = ["IMG-R01", "/images/snapshots/work.webp", "IMG-R03", "IMG-R04", "IMG-R05"]
  .map((s) => resolveImage(s)?.src)
  .filter((s): s is string => Boolean(s));

export default function HowWeWork() {
  return (
    <Layout cta={{ title: "Stop 1 is one WhatsApp message.", message: WA_MSG.default, webu: "waving" }}>
      <BreadcrumbLd seoKey={"how-we-work"} />
      <PageHero
        kicker="How we work"
        tone="marigold"
        title="Simple from the first hello: one WhatsApp chat, start to launch."
        sub="We listen first, show you what we've built and map how you work — then build, launch and stay. No tech jargon, no forms to fill."
        accent={{ phrase: "Chai-pe-charcha", meaning: "it starts with a chat over chai." }}
        cta={<WhatsAppCTA context="hero" />}
        visual={<TailorTape />}
      />

      <BazaarStrip photos={STRIP} className="process-strip" />

      <section className="section" id="roadmap" aria-labelledby="roadmap-title">
        <div className="container">
          <SectionHead kicker="Eleven stops" id="roadmap-title" title="From hello to a system that keeps improving." align="center" />
          <ProcessRoadmap />
        </div>
      </section>

      {TYPICAL_TIMELINES.published ? (
        <section className="section surface-2" id="timelines" aria-labelledby="timelines-title">
          <div className="container">
            <SectionHead kicker="Timelines" id="timelines-title" title="Typical durations by path." />
            <MiniGantt />
          </div>
        </section>
      ) : null}

      <section className="section surface-2" id="needs" aria-labelledby="needs-title">
        <div className="container">
          <SectionHead kicker="What we need from you" id="needs-title" title="A few things from you. We handle the rest." />
          <KanbanStrip items={NEEDS_FROM_YOU} />
        </div>
      </section>

      <section className="section" id="promises" aria-labelledby="promises-title">
        <div className="container">
          <SectionHead kicker="Our promises" id="promises-title" title="Three things you can hold us to." align="center" />
          <div className="orb-row">
            <PromiseOrb icon="FileText">Scope in writing — before you pay.</PromiseOrb>
            <PromiseOrb icon="ChatCircleDots">Updates on WhatsApp, as we build.</PromiseOrb>
            <PromiseOrb icon="Key">Your domain, data and accounts stay yours.</PromiseOrb>
          </div>
        </div>
      </section>
    </Layout>
  );
}
