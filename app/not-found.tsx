import Link from "next/link";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Page not found
          </div>
          <h1>
            This page is not on the <span>map.</span>
          </h1>
          <p className="muted-copy">
            The link may be outdated. Head home, or tell us what you were looking for.
          </p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
