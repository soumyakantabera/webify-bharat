import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { PageLead } from "@/components/PageIcons";
import { WhatsAppCta } from "@/components/icons";
import { cities } from "@/lib/cities";
import { CityBrowser } from "@/components/CityBrowser";
import { HeroShot } from "@/components/HeroShot";
import { WA_CHAT } from "@/lib/site";
import { citiesIndexSeo } from "@/lib/page-seo-cities";

export const metadata: Metadata = {
  title: citiesIndexSeo.title,
  description: citiesIndexSeo.description,
  keywords: citiesIndexSeo.keywords,
  alternates: { canonical: `https://webify-bharat.vercel.app${citiesIndexSeo.path}` },
  openGraph: {
    title: citiesIndexSeo.title,
    description: citiesIndexSeo.description,
    url: `https://webify-bharat.vercel.app${citiesIndexSeo.path}`,
    locale: "en_IN",
    type: "website",
    siteName: "Webify Bharat",
  },
};

export default function CitiesPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
          <PageLead icon="industries" kicker="Cities across India" />
          <h1>
            Digital systems for every <span>state capital.</span>
          </h1>
          <p className="muted-copy">
            Websites, WhatsApp and UPI for MSMEs in India’s capitals — so Amazon,
            Flipkart, food apps and directories stay optional channels, not the only
            customer relationship. Pick your city.
          </p>
          <WhatsAppCta href={WA_CHAT}>Talk about your city business</WhatsAppCta>
          </div>
          <HeroShot kind="cities" />
        </div>
      </section>

      <SeoChunk pageKey="cities" />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Why city pages
              </div>
              <h2>
                Local search is how India <span>buys.</span>
              </h2>
            </div>
            <p>
              “Website design in Jaipur”, “cloud kitchen Hyderabad”, “clinic WhatsApp
              Patna” — owners search by city. These pages answer that intent with owned
              digital systems, not marketplace rent.
            </p>
          </div>

          <CityBrowser
            cities={cities.map((city) => ({
              slug: city.slug,
              name: city.name,
              state: city.state,
              region: city.region,
              photo: city.photo,
              headline: city.headline,
            }))}
          />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Your city is not on a marketplace’s payroll.</h2>
              <p>
                Build a site and WhatsApp system you own. Organic enquiries stay at ₹0
                extra per lead.
              </p>
              <WhatsAppCta href={WA_CHAT}>Chat on WhatsApp</WhatsAppCta>
            </div>
            <div className="cta-photo">
              <img
                src={asset("/images/real/growth-success.webp")}
                alt="Indian business owner growing with owned digital channels"
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
