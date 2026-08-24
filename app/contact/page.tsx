import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact" };

import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import { SITE, WA_BARE } from "@/lib/site";

export default function ContactPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Contact
          </div>
          <h1>
            Tell us what you want to <span>improve.</span>
          </h1>
          <p className="muted-copy" style={{ maxWidth: 650 }}>
            Website, payments, WhatsApp, analytics or a messy combination of all four —
            start with the business problem.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <ContactForm />
          <div className="contact-story">
            <img
              src="/images/real/consultation.webp"
              alt="Webify Bharat consultation with an Indian business owner"
            />
            <div className="contact-story-body">
              <div className="eyebrow">
                <span className="dot" /> Discovery first
              </div>
              <h2>Talk through the business, not just the technology.</h2>
              <p>
                We’ll understand what you are trying to improve, what is already working
                and what would create the biggest practical difference.
              </p>
              <a className="btn btn-secondary" href={WA_BARE}>
                WhatsApp {SITE.whatsappDisplay} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
