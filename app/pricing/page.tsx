import type { Metadata } from "next";
export const metadata: Metadata = { title: "Pricing" };

import Layout from "@/components/Layout";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { WhatsAppCta } from "@/components/icons";
import { plans, WA_PACKAGES } from "@/lib/site";

export default function PricingPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <PageLead icon="pricing" kicker="Pricing" />
          <h1>
            Start simple.
            <br />
            <span>Build as you grow.</span>
          </h1>
          <p className="muted-copy" style={{ maxWidth: 650 }}>
            Clear starting points for common needs. Final scope depends on your actual
            business workflow and integrations.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container pricing-grid">
          {plans.map((plan) => (
            <div
              className={`price-card${plan.popular ? " popular" : ""}`}
              key={plan.name}
            >
              {plan.popular ? <span className="badge">Most popular</span> : null}
              <h2 style={{ marginTop: 12 }}>{plan.name}</h2>
              <p className="muted-copy" style={{ fontSize: 15 }}>
                {plan.desc}
              </p>
              <div className="price">
                {plan.price}
                <small> starting</small>
              </div>
              <ul className="list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <WhatsAppCta href={WA_PACKAGES}>Choose {plan.name}</WhatsAppCta>
            </div>
          ))}
        </div>
      </section>
      <FaqSection block={getFaq("pricing")} />
    </Layout>
  );
}
