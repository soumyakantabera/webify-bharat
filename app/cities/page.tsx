import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { PageLead } from "@/components/PageIcons";
import { WhatsAppCta } from "@/components/icons";
import { cities } from "@/lib/cities";
import { WA_CHAT } from "@/lib/site";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("cities");

const regions = ["North", "South", "East", "West", "Central", "Northeast", "UT"] as const;

export default function CitiesPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container page-copy">
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

          {regions.map((region) => {
            const list = cities.filter((c) => c.region === region);
            if (!list.length) return null;
            return (
              <div key={region} style={{ marginBottom: 48 }}>
                <h3 style={{ marginBottom: 16 }}>{region}</h3>
                <div className="industry-grid">
                  {list.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/cities/${city.slug}`}
                      className="industry-card real-photo"
                    >
                      <img
                        src={`/images/real/${city.photo}`}
                        alt={`${city.name} business digital systems`}
                      />
                      <div className="content">
                        <span className="badge">{city.state}</span>
                        <h3 style={{ marginTop: 12 }}>{city.name}</h3>
                        <p>{city.headline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
                src="/images/real/growth-success.webp"
                alt="Indian business owner growing with owned digital channels"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
