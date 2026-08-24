import type { Metadata } from "next";
export const metadata: Metadata = { title: "Pricing" };

import Layout from "@/components/Layout";
import { WhatsAppCta } from "@/components/icons";
import { faqs, plans, WA_PACKAGES } from "@/lib/site";

export default function PricingPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Pricing
          </div>
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
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> FAQ
              </div>
              <h2>
                Straight answers <span>before you start.</span>
              </h2>
            </div>
            <p>If the scope is unusual, we would rather say so on the first call.</p>
          </div>
          <div className="faq">
            {faqs.map((item) => (
              <div className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
