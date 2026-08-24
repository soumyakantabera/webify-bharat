import type { Metadata } from "next";
export const metadata: Metadata = { title: "Services" };

import Link from "next/link";
import Layout from "@/components/Layout";
import { services } from "@/lib/site";

export default function ServicesPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Services
          </div>
          <h1>
            Digital systems that connect to <span>real work.</span>
          </h1>
          <p className="muted-copy" style={{ maxWidth: 700 }}>
            Illustrations explain the technology. Real photography shows the business
            context it is meant to improve.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container bento">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`card service-card${service.featured ? " featured" : ""}`}
            >
              <div className="card-media">
                <img src={`/images/services/${service.image}`} alt={service.title} />
              </div>
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">Explore service →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
