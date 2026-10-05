import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ArchWindows, Img } from "@/components/collage";
import { CityExplorer } from "@/components/cities/CityExplorer";
import { CityTile } from "@/components/cities/CityTile";
import { IndiaDotMap } from "@/components/svg/IndiaDotMap";
import { PageHero, SectionHead, StickerCard } from "@/components/tiles";
import { cities, cityGreeting, CITY_ZONES } from "@/lib/cities";
import { pageMetadata } from "@/lib/page-seo";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("cities");

export default function CitiesPage() {
  const banners: Record<string, React.ReactNode> = {
    all: <Img slot="IMG-C03" mask="rounded" width={900} height={300} />,
    ...Object.fromEntries(CITY_ZONES.map((z) => [z.id, <Img key={z.id} slot={z.banner} mask="rounded" width={900} height={300} />])),
  };

  return (
    <Layout cta={{ title: "Wherever you are, we're one WhatsApp away.", message: WA_MSG.default, webu: "scooter" }}>
      <BreadcrumbLd seoKey={"cities"} />
      <PageHero
        kicker="Cities"
        title="From Leh to Port Blair — we build for your business, wherever you are."
        sub="We work fully remote over WhatsApp — wherever you are. Same team, same process, same prices in every city."
        cta={<WhatsAppCTA message={WA_MSG.default} context="hero" label="Talk about my business" />}
        visual={<ArchWindows slots={["IMG-C01", "IMG-C02", "IMG-C05"]} tone="indigo" priority />}
        tone="indigo"
      />

      <section className="section surface-2" id="find-city" aria-labelledby="find-title">
        <div className="container">
          <SectionHead kicker={`${cities.length} cities`} id="find-title" title="Find your city." sub="Pick a region, or hover the map." />
          <CityExplorer
            zones={CITY_ZONES.map((z) => ({ id: z.id, label: z.label }))}
            banners={banners}
            map={<IndiaDotMap />}
            items={cities.map((c) => ({ slug: c.slug, zone: c.zone, name: c.name, state: c.state, greeting: cityGreeting(c), node: <CityTile city={c} /> }))}
          />
        </div>
      </section>

      <section className="section" id="remote" aria-labelledby="remote-title">
        <div className="container">
          <SectionHead kicker="How remote works" id="remote-title" title="No office visit needed. Ever." align="center" />
          <div className="sticker-grid is-three">
            <StickerCard icon="ChatCircleDots" title="WhatsApp first" tone="mehendi">
              Questions, updates and approvals happen in one chat with the team building your system.
            </StickerCard>
            <StickerCard icon="DeviceMobile" title="Screen-share walkthroughs" tone="peacock">
              We show progress on a short call or video — you don't need a laptop to follow along.
            </StickerCard>
            <StickerCard icon="Key" title="Everything in your name" tone="haldi">
              Domain, accounts and data are yours, wherever you're based.
            </StickerCard>
          </div>
        </div>
      </section>
    </Layout>
  );
}
