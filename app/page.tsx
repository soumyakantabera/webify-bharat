import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Webu } from "@/components/Webu";
import { ArchWindows, BazaarStrip, Img, PhotoBento, RangoliCollage } from "@/components/collage";
import { GlossaryChip, WeAreStrip } from "@/components/clarity";
import { FaqList } from "@/components/FaqList";
import { PrototypeTeaser } from "@/components/prototypes/PrototypeTeaser";
import { StoryRail } from "@/components/slides/StoryRail";
import { FlipCard, PathCard, SectionHead, TierTicket } from "@/components/tiles";
import { BlockStack } from "@/components/svg/BlockStack";
import { AiAnswerMock, MockScreen, SearchResultMock } from "@/components/svg/mocks";
import { FiveRoutes, FourPillars, GapBridge } from "@/components/svg/positioning";
import { RangoliRoad } from "@/components/svg/RangoliRoad";
import { getBlock } from "@/lib/blocks";
import { BUILD_ROUTES, WHITE_LABEL_LINE } from "@/lib/build-routes";
import { COMPASS_CREDIT, compassOffers } from "@/lib/compass";
import { pickFaqs } from "@/lib/faq-core";
import { PARTNER_SETUP, stages } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { paths } from "@/lib/paths";
import { pillars } from "@/lib/pillars";
import { publishedPrototypes } from "@/lib/prototypes";
import { reachServices } from "@/lib/reach";
import { gstNote, SITE } from "@/lib/site";
import { trades } from "@/lib/trades";
import { WA_MSG, waIndustry } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("home");

/** §2.0.2 — the gap we fill. */
const GAP_ROWS = [
  { exists: "Zoho, Odoo, Tally, Google, Microsoft", lack: "Someone to choose, set up and customise them", fit: "We plan, configure or build it — in your brand" },
  { exists: "UPI, Razorpay, Cashfree, Stripe", lack: "Payments connected to invoices, WhatsApp and books", fit: "We wire it all together" },
  { exists: "Zomato, Swiggy, Amazon, IndiaMART", lack: "A channel of your own for regulars", fit: "We build it alongside them" },
  { exists: "Google, Meta, Bing — and AI assistants", lack: "Know-how and time for ads, SEO and AI visibility", fit: "We run your marketing" },
  { exists: "Freelancers & agencies", lack: "Someone who stays after launch", fit: "Your monthly plan includes care" },
];

const BENTO_ICONS = ["site", "chat", "ledger"] as const;

const WHY = [
  { icon: "custom:tailor-tape", label: "Custom, not templates", tone: "rani" as const },
  { icon: "PlugsConnected", label: "Works with your tools", tone: "peacock" as const },
  { icon: "Tag", label: "White-label, free", tone: "marigold" as const },
  { icon: "Key", label: "Your data stays yours", tone: "indigo" as const },
  { icon: "custom:rupee-coin", label: "Honest pricing", tone: "haldi" as const },
  { icon: "ClockCountdown", label: "Replies in a few hours, 7 days", tone: "mehendi" as const },
];

export default function Home() {
  const gst = gstNote();
  const faqs = pickFaqs(["competing", "templates", "strategy-paid", "guarantee", "own", "reply"]);

  return (
    <Layout>
      {/* 1 · Hero */}
      <section className="home-hero" id="hero" aria-labelledby="hero-title">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="kicker">Your software · your marketing · run for you</p>
            <h1 id="hero-title">Built for your business. Not for everyone&apos;s.</h1>
            <p className="hinglish accent-line">
              {SITE.accent} <span>— your business, your way.</span>
            </p>
            <p className="hero-sub">{SITE.description}</p>
            <div className="hero-actions">
              <WhatsAppCTA context="hero" />
              <Link href="/what-we-do" className="btn-ghost">
                What we do →
              </Link>
            </div>
            <ul className="trust-chips">
              <li><Icon name="custom:tailor-tape" size={18} /> Custom, not templates</li>
              <li><Icon name="PlugsConnected" size={18} /> Works with Zoho, Google, Microsoft, Tally</li>
              <li><Icon name="ChatCircleDots" size={18} /> Replies in a few hours, 7 days</li>
            </ul>
          </div>
          <RangoliCollage
            large="IMG-H01"
            small={["IMG-H02", "IMG-H03", "IMG-H04", "IMG-H05"]}
            priority
            phone={<MockScreen variant="retail" />}
            stickers={[
              { text: "UPI received ✅" },
              { text: "New lead from Google" },
              { text: "Mentioned by AI assistant ✨" },
            ]}
          />
        </div>
      </section>

      {/* 2 · What we are / aren't */}
      <section className="section-tight surface-2" id="we-are" aria-label="What we are and what we're not">
        <div className="container">
          <WeAreStrip
            rows={3}
            aside={[
              <Img key="a" slot="/images/snapshots/contact.webp" mask="circle" width={140} height={140} alt="Small office team at work" crop="30% 50%" />,
              <Img key="b" slot="/images/snapshots/services.webp" mask="circle" width={140} height={140} alt="A founder planning their business" />,
            ]}
          />
        </div>
      </section>

      {/* 3 · Four pillars */}
      <section className="section" id="pillars" aria-labelledby="pillars-title">
        <div className="container">
          <div className="pillars-head">
            <SectionHead kicker="What we do" id="pillars-title" title="Four things we do. All made for your business." />
            <FourPillars className="pillars-art" />
          </div>
          <div className="pillar-grid">
            {pillars.map((p) => (
              <article key={p.slug} className="pillar-card" style={{ ["--accent" as string]: `var(${p.colour})` }}>
                <Img slot={p.photo} mask="none" className="pillar-photo" width={600} height={340} />
                <div className="pillar-body">
                  <span className="pillar-icon"><Icon name={p.icon} size={26} /></span>
                  <h3>
                    {p.name} <small>{p.product}</small>
                  </h3>
                  <p>{p.oneLine}</p>
                  <ul className="mini-chips">
                    {p.inside.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <Link href={p.href} className="text-link">
                    {p.slug === "care" ? "What's included" : `Explore ${p.name.toLowerCase()}`} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · The gap (burst) */}
      <section className="burst burst-holi" id="gap" aria-labelledby="gap-title">
        <div className="container">
          <SectionHead id="gap-title" title="The tools are great. The gap is everything in between. That's us." align="center" />
          <div className="gap-art">
            <GapBridge />
          </div>
          <ul className="gap-rows">
            {GAP_ROWS.map((g) => (
              <li key={g.exists}>
                <span className="gap-exists">{g.exists}</span>
                <span className="gap-lack">{g.lack}</span>
                <span className="gap-fit">{g.fit}</span>
              </li>
            ))}
          </ul>
        </div>
        <BazaarStrip className="gap-bazaar" />
      </section>

      {/* 5 · Three paths */}
      <section className="section" id="paths" aria-labelledby="paths-title">
        <div className="container">
          <SectionHead kicker="Three paths" id="paths-title" title="Where is your business today?" />
          <div className="path-grid">
            {[paths[0], paths[1], paths[2]].map((p) => (
              <PathCard key={p.slug} path={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6 · Systems bento */}
      <section className="section surface-2" id="systems" aria-labelledby="systems-title">
        <div className="container">
          <SectionHead
            kicker="Systems"
            id="systems-title"
            title="Your own software. Eleven blocks, built to fit."
            sub={
              <>
                Websites, stores, payments, WhatsApp, a <GlossaryChip term="CRM" /> or <GlossaryChip term="ERP" />, staff portals and more — combined and tailored for one business.
              </>
            }
          />
          <div className="systems-bento">
            <div className="sb-cell sb-stack">
              <BlockStack compact />
              <Link href="/systems" className="text-link">All 11 blocks →</Link>
            </div>
            {(["pay", "desk", "team"] as const).map((slug) => {
              const b = getBlock(slug)!;
              return (
                <Link key={slug} href={`/systems/${slug}`} className={`sb-cell sb-photo sb-${slug}`}>
                  <Img slot={b.photo} mask="none" width={600} height={400} />
                  <span className="sb-label">
                    <strong>{b.name}</strong>
                    <small>{b.becomes}</small>
                  </span>
                </Link>
              );
            })}
            {BENTO_ICONS.map((slug) => {
              const b = getBlock(slug)!;
              return (
                <Link key={slug} href={`/systems/${slug}`} className={`sb-cell sb-icon sb-${slug}`} style={{ ["--accent" as string]: `var(${b.colour})` }}>
                  <Icon name={b.icon} size={30} />
                  <strong>{b.name}</strong>
                  <small>{b.example}</small>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 · Marketing spotlight */}
      <section className="section" id="marketing" aria-labelledby="marketing-title">
        <div className="container split">
          <div className="mk-visual">
            <Img slot="IMG-B01" mask="rounded" className="mk-photo" width={900} height={700} />
            <div className="mk-search"><SearchResultMock /></div>
            <div className="mk-ai"><AiAnswerMock /></div>
          </div>
          <div>
            <SectionHead kicker="New for most small businesses" id="marketing-title" title="Customers now ask Google, maps — and AI. Be the answer." />
            <p>
              <GlossaryChip term="SEO" />, ads, map listings and <GlossaryChip term="AI visibility" />: we make sure your business shows up where customers look first.
            </p>
            <ul className="reach-chips">
              {reachServices.map((r) => (
                <li key={r.slug} style={{ ["--accent" as string]: `var(${r.colour})` }}>
                  <Link href={`/marketing/${r.slug}`}>
                    <Icon name={r.icon} size={18} /> {r.short}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="caveat">No guaranteed rankings — just the right work, done consistently.</p>
            <WhatsAppCTA message={WA_MSG.marketing} context="marketing" label="Help me get found" />
          </div>
        </div>
      </section>

      {/* 8 · Which one are you? */}
      <section className="section surface-2" id="trades" aria-labelledby="trades-title">
        <div className="container">
          <SectionHead kicker="Who it's for" id="trades-title" title="Which one are you?" sub="Tap a card to see what we'd build. Not listed? We build for any business." />
          <div className="flip-grid">
            {trades.map((t) => (
              <FlipCard
                key={t.slug}
                id={`home-${t.slug}`}
                label={t.name}
                front={
                  <>
                    <Img slot={t.photo} mask="none" className="flip-photo" crop="50% 92%" width={400} height={260} decorative />
                    <span className="flip-title">
                      <Icon name={t.icon} size={22} /> {t.name}
                    </span>
                    <span className="flip-quote">Sound familiar? “{t.pain}”</span>
                  </>
                }
                back={
                  <>
                    <span className="flip-title">{t.name}</span>
                    <span className="flip-sub">We&apos;d combine</span>
                    <ul className="mini-chips">
                      {t.blocks.map((b) => (
                        <li key={b}>{getBlock(b)!.name}</li>
                      ))}
                    </ul>
                    <ul className="flip-points">
                      {t.organise.slice(0, 2).map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                    <WhatsAppCTA message={waIndustry(t.waLabel)} context={`trade-${t.slug}`} label="Talk about my business" />
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9 · Strategy first */}
      <section className="section" id="strategy" aria-labelledby="strategy-title">
        <div className="container split is-reverse">
          <div>
            <SectionHead kicker="Strategy · Webify Compass" id="strategy-title" title="Not sure what you need? Start with a strategy session." />
            <ul className="offer-list">
              {compassOffers.map((o) => (
                <li key={o.slug}>
                  <span>
                    <strong>{o.name}</strong>
                    <small>{o.what}</small>
                  </span>
                  <span className="mono offer-price">
                    {o.price}
                    {gst ? <small> {gst}</small> : null}
                  </span>
                </li>
              ))}
            </ul>
            <p className="caveat">
              Paid, practical, no sales pitch. {COMPASS_CREDIT.compassCreditable ? COMPASS_CREDIT.line : null} The first WhatsApp chat is always free.
            </p>
            <WhatsAppCTA message={WA_MSG.strategy} context="strategy" label="Book a strategy session" />
          </div>
          <ArchWindows slots={["/images/snapshots/work.webp", "/images/snapshots/pricing.webp", "IMG-R03"]} />
        </div>
      </section>

      {/* 10 · Five ways we build */}
      <section className="section surface-2" id="routes" aria-labelledby="routes-title">
        <div className="container">
          <SectionHead kicker="Five ways we build" id="routes-title" title="We work with your tools, not against them." sub="Every route ends in a system made for one business. The route only changes where we start — and the setup cost." />
          <div className="routes-art">
            <FiveRoutes />
          </div>
          <div className="route-grid">
            {BUILD_ROUTES.map((r) => (
              <article key={r.slug} className="route-tile">
                <Img slot={r.photo} mask="none" className="route-thumb" width={400} height={200} decorative />
                <div className="route-body">
                  <span className="route-icon"><Icon name={r.icon} size={22} /></span>
                  <h3>{r.name}</h3>
                  <p>{r.line}</p>
                  <span className="cost-chip">{r.cost}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="center-note">
            <Icon name="Tag" size={18} /> {WHITE_LABEL_LINE}
          </p>
        </div>
      </section>

      {/* 11 · How it works */}
      <section className="section" id="how" aria-labelledby="how-title">
        <div className="container">
          <SectionHead kicker="How it works" id="how-title" title="From one WhatsApp message to a system that runs your business." />
          <RangoliRoad />
          <p className="center-note">
            <Link href="/how-we-work" className="text-link">See every step →</Link>
          </p>
        </div>
      </section>

      {/* 12 · Prototype teaser */}
      <section className="section surface-dark" id="prototypes" aria-labelledby="proto-title">
        <div className="container">
          <SectionHead kicker="Prototype Room" id="proto-title" title="We've already built for businesses like yours. Ask to see." sub="Concept views below. Real walkthroughs happen privately on WhatsApp — then we rebuild it around you." />
          <StoryRail label="Prototypes" slides={publishedPrototypes.map((p) => ({ id: p.slug, node: <PrototypeTeaser proto={p} /> }))} />
        </div>
      </section>

      {/* 13 · Pricing teaser */}
      <section className="section" id="pricing" aria-labelledby="pricing-title">
        <div className="container">
          <SectionHead kicker="Pricing" id="pricing-title" title="Start small. Pay monthly. Grow into the next stage." accent={{ phrase: "Seedha hisaab.", meaning: "straight accounts." }} />
          <div className="ticket-row">
            {stages.map((s) => (
              <TierTicket key={s.slug} stage={s} />
            ))}
          </div>
          <p className="center-note">
            Start small. No lock-in.{gst ? ` Prices ${gst}.` : ""} Third-party costs (gateway, WhatsApp, licences, ads) are separate.{" "}
            <Link href="/pricing" className="text-link">Full pricing →</Link>
          </p>
          {PARTNER_SETUP.published ? <p className="partner-strip">{PARTNER_SETUP.line}</p> : null}
        </div>
      </section>

      {/* 14 · Why Webify */}
      <section className="section surface-2" id="why" aria-labelledby="why-title">
        <div className="container">
          <SectionHead kicker="Why Webify" id="why-title" title="A partner who stays — and tells you what things really cost." />
          <PhotoBento
            cells={[
              { slot: "IMG-B11" },
              ...WHY.slice(0, 3).map((w) => ({ icon: <Icon name={w.icon} size={28} />, label: w.label, tone: w.tone })),
              { slot: "IMG-B07" },
              ...WHY.slice(3).map((w) => ({ icon: <Icon name={w.icon} size={28} />, label: w.label, tone: w.tone })),
              { slot: "/images/snapshots/registrations.webp", alt: "Accounts and registrations on a desk" },
            ]}
          />
        </div>
      </section>

      {/* 15 · Proof slot */}
      <section className="section-tight" id="proof" aria-labelledby="proof-title">
        <div className="container">
          <div className="proof-tile">
            <Webu state="pointing" size={110} />
            <div>
              <h2 id="proof-title">Our first client stories are being written.</h2>
              <p>Want yours featured? We&apos;ll only publish with your written consent.</p>
            </div>
            <WhatsAppCTA message={WA_MSG.featured} context="proof" variant="ghost" label="Tell us about your business" />
          </div>
        </div>
      </section>

      {/* 16 · Mini FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <SectionHead kicker="Poochho — ask us" id="faq-title" title="Quick answers" />
          <FaqList items={faqs} />
          <p className="center-note">
            <Link href="/faq" className="text-link">All questions →</Link>
          </p>
        </div>
      </section>
      {/* 17 · Pre-footer band — rendered by the global footer */}
    </Layout>
  );
}
