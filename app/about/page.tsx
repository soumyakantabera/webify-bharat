import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div>
            <div className="eyebrow">
              <span className="dot" /> About Webify Bharat
            </div>
            <h1>
              Helping businesses operate <span>smarter online.</span>
            </h1>
            <p className="muted-copy">
              We build practical digital systems for Indian businesses — from the
              customer-facing website to payments, WhatsApp, reporting and operational
              workflows.
            </p>
          </div>
          <img
            src="/images/real/business-owner.webp"
            alt="Indian small business owner at her workspace"
          />
        </div>
      </section>

      <section className="section">
        <div className="container process-wrap">
          <div>
            <div className="eyebrow">
              <span className="dot" /> Who we build for
            </div>
            <h2 className="display-h2">
              Real businesses.
              <br />
              <span>Practical digital leverage.</span>
            </h2>
            <p className="muted-copy">
              The visual identity is modern, but the work is grounded in everyday
              business: enquiries, payments, follow-ups, inventory, reporting and
              customer service.
            </p>
          </div>
          <div className="about-visual">
            <img
              src="/images/brand/about-team.png"
              alt="Webify Bharat brand story illustration"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>
                Our approach is <span>simple.</span>
              </h2>
            </div>
            <p>
              Understand the business first. Use modern technology where it creates
              leverage. Keep the experience clear enough that teams actually use it.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature">
              <div className="icon">1</div>
              <h3>Business first</h3>
              <p>We start with goals, bottlenecks and customer journeys — not tools.</p>
            </div>
            <div className="feature">
              <div className="icon">2</div>
              <h3>Modern by default</h3>
              <p>Fast web stacks, secure integrations and measurable workflows.</p>
            </div>
            <div className="feature">
              <div className="icon">3</div>
              <h3>Built for ownership</h3>
              <p>Clear systems your team can understand and grow with.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-photo-grid">
          <article className="story-photo-card">
            <img
              src="/images/real/consultation.webp"
              alt="Digital consultation with an Indian business owner"
            />
            <div className="content">
              <span className="badge">Discovery</span>
              <h3>Understand before building.</h3>
              <p>
                We map the current operation and identify the most valuable improvements
                first.
              </p>
            </div>
          </article>
          <article className="story-photo-card">
            <img
              src="/images/real/growth-success.webp"
              alt="Successful growing Indian retail business"
            />
            <div className="content">
              <span className="badge">Outcome</span>
              <h3>Build for stronger operations.</h3>
              <p>
                The goal is not more software. It is a business that runs with more
                clarity, consistency and confidence.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
