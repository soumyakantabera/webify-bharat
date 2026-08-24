import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { PageLead } from "@/components/PageIcons";
import { CheckItem, WhatsAppCta } from "@/components/icons";
import { FaqSection } from "@/components/FaqSection";
import { cities, getCity } from "@/lib/cities";
import { WA_CHAT } from "@/lib/site";
import { cityPageSeo } from "@/lib/page-seo-cities";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = cityPageSeo(slug);
  if (!seo) return { title: "City | Webify Bharat" };
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `https://webify-bharat.vercel.app${seo.path}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://webify-bharat.vercel.app${seo.path}`,
      locale: "en_IN",
      type: "website",
      siteName: "Webify Bharat",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const faqBlock = {
    kicker: `${city.name} FAQ`,
    title: `Questions from`,
    accent: `${city.name} owners.`,
    intro: `Straight answers for ${city.state} businesses comparing owned digital systems with marketplaces and directories.`,
    items: city.faqs,
  };

  const related = cities
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .slice(0, 4);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
            <PageLead icon="industries" kicker={`${city.state} · ${city.region}`} />
            <h1>
              {city.name}: <span>{city.headline}</span>
            </h1>
            <p className="muted-copy">{city.lead}</p>
            <WhatsAppCta href={WA_CHAT}>Discuss your {city.name} business</WhatsAppCta>
          </div>
          <img
            src={`/images/real/${city.photo}`}
            alt={`${city.name} businesses going digital with Webify Bharat`}
            width={800}
            height={520}
            loading="eager"
          />
        </div>
      </section>

      <SeoChunk pageKey={`city:${city.slug}`} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Major industries
              </div>
              <h2>
                What is moving online in <span>{city.name}</span>
              </h2>
            </div>
            <p>
              {city.hub
                ? `Note: ${city.hub}.`
                : `Local trades, services and F&B across ${city.name} are shifting discovery to Google and WhatsApp.`}
            </p>
          </div>
          <div className="feature-grid">
            {city.industries.map((ind, i) => (
              <div className="feature" key={ind}>
                <div className="icon">{i + 1}</div>
                <h3>{ind}</h3>
                <p>
                  Owned website + WhatsApp + UPI so {city.name} customers find you without a
                  per-lead bill.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {city.sections.map((sec) => (
        <section className="section section-soft" key={sec.heading}>
          <div className="container" style={{ maxWidth: 720 }}>
            <div className="eyebrow">
              <span className="dot" /> {city.name}
            </div>
            <h2 style={{ marginTop: 12 }}>{sec.heading}</h2>
            {sec.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="muted-copy" style={{ marginTop: 14 }}>
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="control-grid">
            <article className="control-card rent">
              <p className="control-kicker">Marketplace & app rent</p>
              <h3>Amazon, Flipkart, food apps, directories</h3>
              <p className="muted-copy" style={{ marginTop: 12 }}>
                {city.marketplacePain}
              </p>
              <ul>
                <li>Referral fees, ads and returns on marketplaces</li>
                <li>Food aggregator commission on every plate</li>
                <li>Directory lead packs for people who already wanted you</li>
              </ul>
            </article>
            <article className="control-card own">
              <p className="control-kicker">Owned in {city.name}</p>
              <h3>Your site. Your WhatsApp. UPI you control.</h3>
              <p className="muted-copy" style={{ marginTop: 12 }}>
                {city.cloudKitchen}
              </p>
              <ul>
                {city.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Stack for {city.name}
              </div>
              <h2>
                Single outlet or multi outlet — <span>same idea.</span>
              </h2>
            </div>
            <p>
              One shop, one kitchen, or many branches: the system is site + chat + pay +
              record. Platforms stay optional fuel.
            </p>
          </div>
          <div className="values">
            {city.stack.map((s) => (
              <CheckItem key={s}>{s}</CheckItem>
            ))}
          </div>
        </div>
      </section>

      <FaqSection block={faqBlock} />

      {related.length ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>
                  More cities in <span>{city.region}</span>
                </h2>
              </div>
            </div>
            <div className="industry-grid">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}`}
                  className="industry-card real-photo city-card"
                >
                  <img
                    src={`/images/real/${c.photo}`}
                    alt={`${c.name} digital systems`}
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                  <div className="content">
                    <span className="badge">{c.state}</span>
                    <h3 style={{ marginTop: 12 }}>{c.name}</h3>
                    <p>{c.headline}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              <Link href="/cities">All capital cities →</Link>
            </p>
          </div>
        </section>
      ) : null}

      <section className="section section-soft">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Build the {city.name} channel you own.</h2>
              <p>
                Website, WhatsApp, UPI — organic leads at ₹0 extra. Marketplaces optional.
              </p>
              <WhatsAppCta href={WA_CHAT}>Chat on WhatsApp</WhatsAppCta>
            </div>
            <div className="cta-photo">
              <img
                src="/images/real/growth-success.webp"
                alt={`${city.name} business growth with owned digital systems`}
                width={640}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
