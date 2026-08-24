import type { Metadata } from "next";
export const metadata: Metadata = { title: "Industries" };

import Link from "next/link";
import Layout from "@/components/Layout";
import { industries, WA_BARE } from "@/lib/site";

export default function IndustriesPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div>
            <div className="eyebrow">
              <span className="dot" /> Industries
            </div>
            <h1>
              Built for <span>real businesses.</span>
            </h1>
            <p className="muted-copy">
              Practical digital systems for retail, restaurants, healthcare, education,
              real estate and manufacturing.
            </p>
            <a className="btn btn-primary" href={WA_BARE}>
              Talk to an expert →
            </a>
          </div>
          <img
            src="/images/real/retail.webp"
            alt="Retail business using digital systems"
          />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container industry-grid">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="industry-card real-photo"
            >
              <img src={`/images/real/${industry.photo}`} alt={industry.title} />
              <div className="content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
