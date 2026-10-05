import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { LogoChip } from "@/components/LogoChip";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Img, PhotoBento } from "@/components/collage";
import { GlossaryChip, WeAreStrip } from "@/components/clarity";
import { PageHero, SectionHead } from "@/components/tiles";
import { GapBridge, PlatformLayers } from "@/components/svg/positioning";
import { logosIn } from "@/lib/logos";
import { pageMetadata } from "@/lib/page-seo";
import { pillars, type Pillar } from "@/lib/pillars";
import { SITE } from "@/lib/site";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("what-we-do");

const GAP = [
  { exists: "Great apps: Zoho, Odoo, Tally, Google Workspace, Microsoft 365, store builders", lack: "Someone to choose the right one, set it up, customise it and make it fit their workflow", fit: "We plan, configure or build it — in your brand", icon: "SquaresFour" },
  { exists: "Payment apps & gateways: UPI, Razorpay, Cashfree, Stripe", lack: "Someone to connect payments to invoices, WhatsApp and books", fit: "We wire it all together (Webify Connect)", icon: "CreditCard" },
  { exists: "Marketplaces & aggregators: Zomato, Swiggy, Amazon, IndiaMART", lack: "A channel of their own for regular customers", fit: "We build your own channel alongside them", icon: "Storefront" },
  { exists: "Ad platforms & search: Google, Meta, Bing — and now AI assistants", lack: "Know-how and time to run ads, SEO and AI visibility", fit: "We run Reach marketing for you", icon: "Megaphone" },
  { exists: "Freelancers & agencies", lack: "Someone who stays after launch", fit: "Care, built into your monthly plan", icon: "Lifebuoy" },
];

const DEEP: Record<Pillar["slug"], { who: string; price: string; crop: string }> = {
  strategy: { who: "You're starting out, unsure where to begin, or choosing between Zoho, Odoo, Google, Microsoft and a custom build.", price: "Paid sessions: ₹5,000 · ₹15,000 · ₹30,000. The first WhatsApp chat is free.", crop: "60% 50%" },
  systems: { who: "Your tools don't talk to each other — or you don't have any yet.", price: "Inside every monthly plan: setup from ₹5,000, plans from ₹3,000/month.", crop: "30% 50%" },
  marketing: { who: "Customers can't find you on Google, maps, ads or AI assistants.", price: "From ₹8,000/month. Ad spend is paid to Google or Meta directly.", crop: "60% 40%" },
  care: { who: "Every client. It keeps your system running, secure and improving.", price: "Built into every monthly plan — never sold separately.", crop: "0% 70%" },
};

export default function WhatWeDo() {
  return (
    <Layout
      cta={{
        title: "Tell us where you are. We'll tell you which pillar to start with.",
        message: WA_MSG.default,
        webu: "pointing",
      }}
    >
      <PageHero
        kicker="What we do"
        title="Plan it. Build it. Run it. Grow it."
        sub={SITE.description}
        cta={<WhatsAppCTA context="hero" />}
        visual={<PhotoBento cells={[...pillars.map((p) => ({ slot: p.photo, alt: `${p.name}: ${p.oneLine}` })), { icon: <Icon name="ChatCircleDots" size={28} />, label: "One team on WhatsApp", tone: "mehendi" as const }]} />}
      />

      <section className="section surface-2" id="gap" aria-labelledby="gap-title">
        <div className="container">
          <SectionHead kicker="The gap we fill" id="gap-title" title="The tools are great. The gap is everything in between. That's us." />
          <GapBridge className="wwd-bridge" />
          <ol className="gap-table">
            {GAP.map((g) => (
              <li key={g.exists}>
                <span className="gt-icon"><Icon name={g.icon} size={24} /></span>
                <div><small>What exists</small><p>{g.exists}</p></div>
                <div><small>What's missing</small><p>{g.lack}</p></div>
                <div className="gt-fit"><small>Where we fit</small><p>{g.fit}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="pillars" aria-labelledby="pillars-title">
        <div className="container">
          <SectionHead kicker="Four pillars" id="pillars-title" title="Four things we do. Pick one, or all four." />
          <div className="zigzag">
            {pillars.map((p) => {
              const d = DEEP[p.slug];
              return (
                <article key={p.slug} className="zz-row" style={{ ["--accent" as string]: `var(${p.colour})` }}>
                  <Img slot={p.photo} mask="arch" crop={d.crop} className="zz-photo" width={600} height={760} />
                  <div className="zz-copy">
                    <p className="kicker"><Icon name={p.icon} size={18} /> {p.product}</p>
                    <h3>{p.name}: {p.oneLine}</h3>
                    <p><strong>For you if:</strong> {d.who}</p>
                    <ul className="mini-chips">
                      {p.inside.map((i) => <li key={i}>{i}</li>)}
                    </ul>
                    <p className="price-note">{d.price}</p>
                    <Link href={p.href} className="text-link">
                      {p.slug === "care" ? "What's included" : `Explore ${p.name.toLowerCase()}`} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="platform" aria-labelledby="platform-title">
        <div className="container split">
          <PlatformLayers />
          <div>
            <SectionHead kicker="Software, and a service" id="platform-title" title="Your own software, on our proven base — and we run it." />
            <dl className="layer-defs">
              <div>
                <dt>Webify Platform <GlossaryChip term="PaaS">(PaaS)</GlossaryChip></dt>
                <dd>Our proven base, so you don&apos;t pay to reinvent the wheel.</dd>
              </div>
              <div>
                <dt>Your software <GlossaryChip term="SaaS">(SaaS)</GlossaryChip></dt>
                <dd>
                  Your own software, in your brand — <GlossaryChip term="White-label">white-labelled</GlossaryChip> if you like. Websites, a <GlossaryChip term="CRM" /> or <GlossaryChip term="ERP" />, staff portals.
                </dd>
              </div>
              <div>
                <dt>Managed service</dt>
                <dd>
                  Your monthly plan keeps it running, secure and improving. Add marketing — <GlossaryChip term="SEO" />, <GlossaryChip term="SEM / Ads">ads</GlossaryChip> and <GlossaryChip term="AI visibility" /> — when you&apos;re ready.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="we-are" aria-labelledby="we-are-title">
        <div className="container">
          <SectionHead kicker="To be clear" id="we-are-title" title="What we are — and what we're not." />
          <WeAreStrip />
        </div>
      </section>

      <section className="section surface-2" id="works-with" aria-labelledby="works-title">
        <div className="container">
          <SectionHead kicker="Works with" id="works-title" title="We build around the tools you already know." sub="Shown only to indicate compatibility — we're not a partner of these companies unless stated." />
          <ul className="logo-honeycomb">
            {logosIn("software", "pay", "channel").map((l) => (
              <li key={l.id}>
                <LogoChip logo={l} />
              </li>
            ))}
          </ul>
          <p className="center-note">
            <Link href="/integrations" className="text-link">How we work with your tools →</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
