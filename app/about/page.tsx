import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { BusinessDetails } from "@/components/BusinessDetails";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { GlossaryChip, WeAreStrip } from "@/components/clarity";
import { Img, PolaroidCluster } from "@/components/collage";
import { BreadcrumbLd } from "@/components/SeoLd";
import { IndiaDotMap } from "@/components/svg/IndiaDotMap";
import { PathFork } from "@/components/svg/PathFork";
import { GapBridge } from "@/components/svg/positioning";
import { TailorTape } from "@/components/svg/TailorTape";
import { FlipCard, PageHero, SectionHead } from "@/components/tiles";
import { cities } from "@/lib/cities";
import { pageMetadata } from "@/lib/page-seo";
import { paths } from "@/lib/paths";
import { SITE } from "@/lib/site";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("about");

const STORY = [
  { photo: "IMG-P01", kicker: "Why we started", title: "Owners were renting their own customers.", text: "We kept meeting businesses whose regulars reached them through someone else's listing, app or inbox — and whose tools didn't talk to each other. Good businesses, on systems that didn't fit them." },
  { photo: "IMG-I-RET-1", kicker: "What we learned", title: "Templates don't fit real counters.", text: "A clinic, a kirana and a dealer network each run differently. Off-the-shelf setups make the business bend to the software. We'd rather build the software around the business." },
  { photo: "IMG-A03", kicker: "Where we're going", title: "A custom system for every pincode.", text: "Your own website, payments, WhatsApp, records and marketing — built for how you work, run for you, at a monthly price a small business can plan for." },
];

const VALUES = [
  { icon: "custom:tailor-tape", title: "Custom", text: "No templates, ever. Every build starts from how your business actually works." },
  { icon: "HandHeart", title: "Honest", text: "No invented numbers, no guaranteed rankings, no surprise fees. If we're not the right fit, we say so." },
  { icon: "Key", title: "Owned", text: "Your domain, brand, data and accounts stay yours. Leave any day with a full data export." },
  { icon: "MapPin", title: "Local", text: "Built for Indian businesses: UPI, GST, WhatsApp and the languages your customers speak." },
];

export default function AboutPage() {
  return (
    <Layout cta={{ title: "Tell us how your business works. We'll build around it.", message: WA_MSG.default, webu: "waving" }}>
      <BreadcrumbLd seoKey="about" />
      <PageHero
        kicker="About"
        title="We believe no two businesses should get the same website."
        sub={SITE.description}
        cta={<WhatsAppCTA message={WA_MSG.default} context="hero" label="Talk to us" />}
        visual={
          <div className="about-hero-art">
            <TailorTape className="about-tape" />
          </div>
        }
        tone="haldi"
      />

      <section className="section surface-2" id="category" aria-labelledby="cat-title">
        <div className="container two-col">
          <div>
            <SectionHead
              kicker="What we are"
              id="cat-title"
              title="Your own software, built for you and run for you."
              sub={
                <>
                  Great tools exist — Zoho, Odoo, Google, Microsoft, Razorpay. The gap is choosing, setting up, customising and connecting them for one business, or building custom where they don't fit. That's our job, delivered as a managed service (<GlossaryChip term="SaaS" />-style monthly plans, but built for you).
                </>
              }
            />
            <WeAreStrip rows={4} />
          </div>
          <GapBridge className="about-gap" />
        </div>
      </section>

      <section className="section" id="story" aria-labelledby="story-title">
        <div className="container">
          <SectionHead kicker="Our story" id="story-title" title="Why Webify Bharat exists." />
          <div className="story-zigzag">
            {STORY.map((s, i) => (
              <article key={s.title} className={`story-row${i % 2 ? " is-flip" : ""}`}>
                <Img slot={s.photo} mask="rounded" className="story-art" width={640} height={420} />
                <div>
                  <p className="kicker">{s.kicker}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section burst-holi" id="values" aria-labelledby="values-title">
        <div className="container">
          <SectionHead kicker="What we stand for" id="values-title" title="Four promises, kept on every build." align="center" />
          <div className="flip-grid values-grid">
            {VALUES.map((v) => (
              <FlipCard
                key={v.title}
                id={`value-${v.title.toLowerCase()}`}
                label={v.title}
                flipLabel="What it means"
                front={
                  <span className="value-front">
                    <Icon name={v.icon} size={44} />
                    <span className="value-title">{v.title}</span>
                  </span>
                }
                back={
                  <>
                    <span className="flip-title">{v.title}</span>
                    <span className="flip-quote">{v.text}</span>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="what-we-do" aria-labelledby="wwd-title">
        <div className="container two-col">
          <PathFork className="about-fork" />
          <div>
            <SectionHead kicker="What we do" id="wwd-title" title="Three paths, one team." sub="Wherever your business is today, we start there." />
            <ul className="about-paths">
              {paths.map((p) => (
                <li key={p.slug} style={{ ["--accent" as string]: `var(${p.colour})` }}>
                  <Link href={p.href}>
                    <Icon name={p.icon} size={22} />
                    <span>
                      <strong>{p.name}</strong> — {p.oneLine}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/what-we-do" className="text-link">
              Everything we do <Arw />
            </Link>
          </div>
        </div>
      </section>

      <section className="section surface-2" id="where" aria-labelledby="where-title">
        <div className="container two-col">
          <div>
            <SectionHead kicker="Where we work" id="where-title" title="Based in Kolkata. Working across India." sub={`Fully remote over WhatsApp, with city pages for ${cities.length} cities — and we work with businesses anywhere in India.`} />
            <Link href="/cities" className="text-link">
              Find your city <Arw />
            </Link>
          </div>
          <IndiaDotMap className="about-map" />
        </div>
      </section>

      <section className="section" id="team" aria-labelledby="team-title">
        <div className="container two-col">
          <div>
            <SectionHead kicker="Our team setup" id="team-title" title="Founders plus trusted specialists, fully remote." sub="A small founding team owns every project and works with specialist freelancers for design, development and marketing. You always know who's responsible for your work." />
            <p className="center-note is-left">Team photos will appear here once we have real ones to share.</p>
          </div>
          <PolaroidCluster
            items={[
              { slot: "IMG-A01", caption: "Plans before pixels" },
              { slot: "IMG-A02", caption: "Sketched for you" },
            ]}
          />
        </div>
      </section>

      <section className="section surface-2" id="details" aria-labelledby="details-title">
        <div className="container narrow">
          <SectionHead kicker="Business details" id="details-title" title="Who you're dealing with." />
          <BusinessDetails />
        </div>
      </section>
    </Layout>
  );
}
