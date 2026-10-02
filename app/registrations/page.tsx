import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { PageLead } from "@/components/PageIcons";
import { WhatsAppCta } from "@/components/icons";
import { FilingMark } from "@/components/FilingMark";
import { registrations } from "@/lib/registrations";
import { HeroShot } from "@/components/HeroShot";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "GST, Udyam, IEC, UK VAT and EU IOSS filings",
  description:
    "Registration filings for Indian businesses. Government fee and our fee are two numbers. GST ₹4,999, Udyam ₹2,499, IEC ₹4,999 plus ₹500 DGFT. 18% GST is inside our fee.",
};

const chat = waLink("Hi, I want to ask about a registration filing.");

export default function RegistrationsPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
          <PageLead icon="registrations" kicker="Registrations" />
          <h1>
            The paper, filed properly.
            <br />
            <span>Not a ₹499 mill.</span>
          </h1>
          <p className="muted-copy">
            Take Launch and our GST and Udyam fees are already in it. Growth adds IEC.
            Command takes the lot, UK and EU included. Buying a filing on its own is the
            price below. The department’s receipt, if any, is never our markup.
          </p>
          <div className="offer-actions">
            <WhatsAppCta href={chat}>Ask which filing you need</WhatsAppCta>
            <Link className="btn btn-secondary" href="/registrations/charges">
              Additional charges
            </Link>
          </div>
          </div>
          <HeroShot kind="registrations" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> India</div>
              <h2>GST, Udyam, and the export code.</h2>
            </div>
            <p>Our fee includes 18% GST. The portal fee, if any, is extra and receipted to you.</p>
          </div>
          <div className="pricing-grid">
            {registrations.slice(0, 3).map((item) => (
              <RegCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> Selling abroad</div>
              <h2>UK VAT and EU IOSS. Only if your own site needs them.</h2>
            </div>
            <p>Marketplace-only sales are often covered by the marketplace. Do not buy a registration you do not need.</p>
          </div>
          <div className="pricing-grid">
            {registrations.slice(3).map((item) => (
              <RegCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function RegCard({ item }: { item: (typeof registrations)[number] }) {
  return (
    <article className={`price-card price-card-filing tone-${item.slug}`}>
      <div className="price-card-top">
        <div className="filing-head">
          <FilingMark slug={item.slug} mark={item.mark} size={48} />
          <p className="price-best-for">Filed on {item.portal}</p>
        </div>
        <h2>
          <Link href={`/registrations/${item.slug}`}>{item.name}</Link>
        </h2>
        <p className="price-desc">{item.forWhom}</p>
        <div className="reg-prices">
          <div>
            <span>Alone</span>
            <strong>{item.ourFee}</strong>
            <small>no website</small>
          </div>
          <div className="fee-in">
            <span>With {item.ridesWith}</span>
            <strong>₹0</strong>
            <small>our fee</small>
          </div>
        </div>
      </div>
      <div className="price-card-cta">
        <Link className="btn btn-secondary price-cta" href={`/registrations/${item.slug}`}>
          What you need
        </Link>
        <Link className="btn btn-primary price-cta" href="/registrations/charges">
          Extra charges
        </Link>
      </div>
    </article>
  );
}
