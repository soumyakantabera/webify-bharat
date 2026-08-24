import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
export const metadata: Metadata = pageMetadata("about");

import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { aboutArticle } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";

export default function AboutPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
            <PageLead icon="about" kicker="About Webify Bharat" />
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

      <SeoChunk pageKey="about" />

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
              className="about-team-img"
              src="/images/brand/about-team.png"
              alt="Webify Bharat brand story illustration"
            />
            <div className="about-logo-plate">
              <img
                className="about-logo-plate-img"
                src="/images/logo/webify-bharat-logo.png"
                alt="Webify Bharat"
              />
              <p className="about-logo-plate-tag">
                We help Indian businesses go digital, automate operations and grow
                with smart technology solutions.
              </p>
            </div>
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
      <ArticleBlock article={aboutArticle} />

      <FaqSection block={getFaq("about")} />
    </Layout>
  );
}
