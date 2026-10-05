import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { BreadcrumbLd, LdScript, SITE_URL } from "@/components/SeoLd";
import { LogoChip } from "@/components/LogoChip";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ArchWindows } from "@/components/collage";
import { RentOwnStepper } from "@/components/blocks";
import { CitySkyline } from "@/components/cities/CitySkyline";
import { CityTile } from "@/components/cities/CityTile";
import { FaqList } from "@/components/FaqList";
import { WhatsAppChatMock } from "@/components/svg/mocks";
import { PageHero, PathCard, SectionHead, StickerCard } from "@/components/tiles";
import { getChannelSet } from "@/lib/channels";
import { cities, cityGreeting, getCity, getZone, nearbyCities } from "@/lib/cities";
import { getLogo } from "@/lib/logos";
import { addons, getStage } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { paths } from "@/lib/paths";
import { waCity } from "@/lib/wa";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`city:${slug}`);
}

const TONES = ["rani", "marigold", "peacock", "mehendi", "indigo"];

/** Icon for a local-industry sticker, by keyword. */
function industryIcon(name: string) {
  const rules: [RegExp, string][] = [
    [/food|f&b|restaurant|kitchen|hospitality/i, "ForkKnife"],
    [/health|clinic|medical/i, "FirstAidKit"],
    [/educat|coaching|tuition|school/i, "GraduationCap"],
    [/manufactur|industr|mining|textile|handloom|craft/i, "Factory"],
    [/export|logistic|port|trade/i, "Boat"],
    [/real estate|property|construction/i, "Buildings"],
    [/touris|travel|homestay/i, "MapPin"],
    [/IT|tech|startup|software/, "DeviceMobile"],
    [/retail|shop|fashion|wholesale/i, "Storefront"],
    [/financ|bank/i, "Calculator"],
    [/media|film/i, "Megaphone"],
    [/agri|plantation|tea|spice/i, "Plant"],
  ];
  return rules.find(([re]) => re.test(name))?.[1] ?? "Briefcase";
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const greet = cityGreeting(city);
  const message = waCity(city.name);
  const zone = getZone(city.zone);
  const store = getChannelSet("store")!;
  const hasFood = city.industries.some((i) => /food|f&b|restaurant|kitchen|hospitality|touris/i.test(i));
  const starter = getStage("starter")!;
  const language = addons.find((a) => a.slug === "language");
  const faqs = [
    { q: `Do you have an office in ${city.name}?`, a: `No — we work fully remote over WhatsApp, with screen-share walkthroughs. ${city.name} businesses get the same team, process and prices as everywhere else.` },
    { q: `Can my site be in the local language?`, a: `Yes. Sites are built in English by default; a regional-language version is an add-on${language?.price ? ` (${language.price} a month)` : ""}, quoted before you pay.` },
    { q: `What does it cost to start?`, a: `The Starter stage is ${starter.monthly} a month with ${starter.setup} setup. Bigger needs move to Business or Command — see the pricing page, or ask us to scope it.` },
    { q: `Should I stop using marketplaces or directories?`, a: `No. Keep them for reaching new customers if they work for you. We build your own channel for the regulars who already know you.` },
  ];

  return (
    <Layout cta={{ title: greet ? `${city.greeting}! Let's talk about your business.` : `Let's talk about your ${city.name} business.`, message, label: `I'm in ${city.name}`, webu: "waving" }}>
      <BreadcrumbLd seoKey={`city:${slug}`} />
      <LdScript
        data={{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": `${SITE_URL}/cities/${city.slug}#business`,
          name: `Webify Bharat — ${city.name}`,
          url: `${SITE_URL}/cities/${city.slug}`,
          description: `Custom websites, stores, payments, WhatsApp systems and CRM/ERP for ${city.name} businesses, delivered fully remote over WhatsApp.`,
          areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: city.state } },
          address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" },
          parentOrganization: { "@id": `${SITE_URL}/#org` },
        }}
      />
      <div className="city-page">
      <PageHero
        kicker={greet ?? `${city.name} · ${city.state}`}
        title={`Custom digital systems for ${city.name} businesses.`}
        sub={`Websites, stores, payments, WhatsApp systems and CRM/ERP — built for how ${city.name} businesses actually work. We work fully remote over WhatsApp.`}
        cta={<WhatsAppCTA message={message} context="hero" label={`I'm in ${city.name}`} />}
        chips={greet ? <p className="greet-caption">“{city.greeting}” — hello in {city.greetingLang}</p> : null}
        visual={
          <div className="city-hero-art">
            <ArchWindows slots={[zone.banner]} tone="indigo" priority />
            <CitySkyline className="city-hero-skyline" />
          </div>
        }
        tone="indigo"
      />
      </div>

      <section className="section surface-2" id="industries" aria-labelledby="ind-title">
        <div className="container">
          <SectionHead kicker={`${city.state}`} id="ind-title" title={`Local industries going digital in ${city.name}.`} sub="A few of the trades we hear from most — we build for any business." />
          <div className="sticker-grid is-three">
            {city.industries.map((name, i) => (
              <StickerCard key={name} icon={industryIcon(name)} title={name} tone={TONES[i % TONES.length]} />
            ))}
          </div>
          <p className="center-note">
            <Link href="/industries" className="text-link">
              See how we build for each trade →
            </Link>
          </p>
        </div>
      </section>

      <section className="section ind-burst" id="rent-own" aria-labelledby="ro-title" style={{ ["--accent" as string]: "var(--indigo)" }}>
        <div className="container">
          <SectionHead kicker="Rent + Own" id="ro-title" title="Keep the marketplace for new buyers. Own the catalogue for regulars." />
          <div className="ro-logos" aria-label="Apps we work alongside">
            <span>Works alongside</span>
            {["amazon", "flipkart"].map((m) => {
              const logo = getLogo(m);
              return logo ? <LogoChip key={m} logo={logo} showNote={false} /> : null;
            })}
          </div>
          <RentOwnStepper set={store} />
        </div>
      </section>

      {hasFood ? (
        <section className="section" id="food" aria-labelledby="food-title">
          <div className="container local-tile">
            <div className="local-art" aria-hidden="true">
              <WhatsAppChatMock
                className="local-search"
                messages={[
                  { from: "them", text: "Same order as last Friday?" },
                  { from: "you", text: "Yes! Paid by UPI ✅" },
                  { from: "them", text: "Ready in 25 minutes 🍲" },
                ]}
              />
            </div>
            <div>
              <SectionHead kicker="Restaurants & cloud kitchens" id="food-title" title={`Direct orders for ${city.name}'s regulars.`} sub="Keep the delivery apps for new customers. Give regulars a menu they can order from directly, with payments and order updates on WhatsApp." />
              <Link href="/industries/restaurant" className="text-link">
                How we build for restaurants →
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section surface-2" id="paths" aria-labelledby="paths-title">
        <div className="container">
          <SectionHead kicker="Where are you today?" id="paths-title" title={`Starting, organising or growing in ${city.name}?`} />
          <div className="path-grid">
            {paths.map((p) => (
              <PathCard key={p.slug} path={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="nearby" aria-labelledby="nearby-title">
        <div className="container">
          <SectionHead kicker="Nearby" id="nearby-title" title={`Cities near ${city.name}.`} />
          <div className="city-grid is-three">
            {nearbyCities(city).map((c) => (
              <CityTile key={c.slug} city={c} />
            ))}
          </div>
          <p className="center-note">
            <Link href="/cities" className="text-link">
              All {cities.length} cities →
            </Link>
          </p>
        </div>
      </section>

      <section className="section surface-2" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <SectionHead kicker="Poochho — ask us" id="faq-title" title={`${city.name}: questions, answered.`} />
          <FaqList items={faqs.map((f, i) => ({ key: `${city.slug}-${i}`, q: f.q, a: f.a, category: "custom" as const }))} />
        </div>
      </section>
    </Layout>
  );
}
