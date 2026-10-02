import Link from "next/link";
import Layout from "@/components/Layout";
import { HeroShot } from "@/components/HeroShot";

export default function NotFound() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
          <div className="eyebrow">
            <span className="dot" /> Page not found
          </div>
          <h1>
            This page is not on the <span>map.</span>
          </h1>
          <p className="muted-copy">
            The link may be outdated. Head home, or tell us what you were looking for.
          </p>
          <div className="hero-actions" >
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
          </div>
          <HeroShot kind="missing" />
        </div>
      </section>
    </Layout>
  );
}
