import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import { glossify } from "@/components/clarity/glossify";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Img } from "@/components/collage";
import { RedirectStub, redirectMetadata } from "@/components/RedirectStub";
import { PageHero, SectionHead } from "@/components/tiles";
import { addons, featureRows, getStage, limitRows, stages } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { oldSlugs, redirectFor } from "@/lib/redirects";
import { gstNote } from "@/lib/site";
import { waTier } from "@/lib/wa";

export const dynamicParams = false;

export function generateStaticParams() {
  // Old slugs render static redirect stubs for the GitHub Pages export.
  return [...stages.map((s) => s.slug), ...oldSlugs("/pricing/")].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const moved = redirectFor(`/pricing/${slug}`);
  if (moved) return redirectMetadata(moved);
  return pageMetadata(`stage:${slug}`);
}

const START = [
  { icon: "ChatCircleDots", text: "Message us on WhatsApp — a real person replies within a few hours." },
  { icon: "Flask", text: "Free discovery chat and a private prototype walkthrough." },
  { icon: "FileText", text: "A written scope and price on WhatsApp." },
  { icon: "Link", text: "Pay the setup and first month by payment link — your start date is locked." },
  { icon: "RocketLaunch", text: "We design, build and launch. Monthly billing starts at launch." },
];

export default async function StagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const moved = redirectFor(`/pricing/${slug}`);
  if (moved) return <RedirectStub to={moved} />;
  const stage = getStage(slug);
  if (!stage) notFound();
  const gst = gstNote();
  const idx = stages.findIndex((s) => s.slug === stage.slug);
  const next = stages[idx + 1];
  const included = featureRows.filter((r) => r.cells[stage.slug] !== false);
  const popular = addons.filter((a) => a.availableOn === "All" || a.availableOn.includes(stage.name));
  const monthly = stage.monthly.replace(/^from\s+/, "");

  return (
    <Layout cta={{ title: `Interested in ${stage.name}? We'll scope it for you.`, message: waTier(stage.name), label: "Get my quote", webu: "pointing" }}>
      <BreadcrumbLd seoKey={`stage:${slug}`} />
      <PageHero
        kicker={`Pricing · ${stage.name}`}
        title={
          <>
            <Icon name={stage.icon} size={22} className="stage-ic" /> {stage.name}: {stage.tagline}
          </>
        }
        sub={
          <>
            <span className="mono hero-price">{stage.from ? "from " : ""}{monthly}/month</span> + <span className="mono">{stage.setup}</span> setup{gst ? ` (${gst})` : ""}. Best for {stage.bestFor.toLowerCase()}.
          </>
        }
        cta={<WhatsAppCTA message={waTier(stage.name)} context="hero" label="Get my quote" />}
        visual={<Img slot={stage.photo} mask="arch" priority width={700} height={800} className="stage-hero-photo" />}
      />

      <section className="section" id="included" aria-labelledby="inc-title">
        <div className="container split is-top">
          <div>
            <SectionHead kicker="Everything included" id="inc-title" title={`What ${stage.name} includes.`} />
            <ul className="ticks">
              {included.map((r) => {
                const v = r.cells[stage.slug];
                return (
                  <li key={r.label}>
                    {glossify(r.label)}
                    {typeof v === "string" ? <strong> — {v}</strong> : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <SectionHead kicker="Limits" title="Room to grow." />
            <dl className="limit-list">
              {limitRows.map((r) => {
                const v = r.cells[stage.slug];
                return (
                  <div key={r.key}>
                    <dt>{r.label}</dt>
                    <dd className="mono">{v === null ? "—" : v === "agreed" ? "Agreed" : v === "unlimited" ? "Unlimited" : v.toLocaleString("en-IN")}</dd>
                  </div>
                );
              })}
            </dl>
            <p className="caveat">Over a limit? We message you at 80% with both options and which is cheaper. Nothing is charged without your OK.</p>
          </div>
        </div>
      </section>

      {stage.slug !== "custom" ? (
        <section className="section surface-2" id="addons" aria-labelledby="addons-title">
          <div className="container">
            <SectionHead kicker="Popular add-ons" id="addons-title" title={`Add-ons that work with ${stage.name}.`} />
            <ul className="addon-chips">
              {popular.map((a) => (
                <li key={a.slug}>
                  <span>{a.name}</span>
                  <span className="mono">{a.price}{a.kind === "monthly" && !/\//.test(a.price) ? "/mo" : ""}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section" id="next" aria-labelledby="next-title">
        <div className="container split">
          <Img slot={stage.slug === "custom" ? "IMG-B09" : "IMG-B11"} mask="rounded" width={800} height={600} />
          <div>
            {next ? (
              <>
                <SectionHead kicker="When to move up" id="next-title" title={`When ${next.name} makes more sense.`} sub={`${next.name} (${next.monthly}/month) adds: ${next.keyFeatures.slice(1, 4).join(", ").toLowerCase()}. Once you need two or three over-limit add-ons, moving up is usually cheaper — we'll tell you when.`} />
                <Link href={`/pricing/${next.slug}`} className="text-link">See {next.name} <Arw /></Link>
              </>
            ) : (
              <SectionHead kicker="Who it's for" id="next-title" title="Built from zero, run for you." sub="For unique workflows, multi-unit businesses and platforms. We start with a Compass session, then quote a setup with 40% at start, 40% at preview and 20% before launch." />
            )}
            <p><Link href="/pricing#compare" className="text-link">Compare all stages <Arw /></Link></p>
          </div>
        </div>
      </section>

      <section className="section surface-2" id="start" aria-labelledby="start-title">
        <div className="container narrow">
          <SectionHead kicker="Steps to start" id="start-title" title="How to start on this stage." />
          <ol className="start-steps">
            {START.map((s) => (
              <li key={s.text}>
                <Icon name={s.icon} size={22} /> {s.text}
              </li>
            ))}
          </ol>
          <p className="caveat">{stage.terms}</p>
        </div>
      </section>
    </Layout>
  );
}
