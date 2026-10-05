import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Webu } from "@/components/Webu";
import { PathCard } from "@/components/tiles";
import { paths } from "@/lib/paths";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = { title: "Page not found | Webify Bharat", robots: { index: false } };

export default function NotFound() {
  return (
    <Layout cta={{ title: "Tell us what you were looking for.", message: WA_MSG.notFound, webu: "torch" }}>
      <section className="not-found" aria-labelledby="page-title">
        <div className="container not-found-grid">
          <Webu state="torch" size={200} title="Webu searching with a torch" />
          <div>
            <p className="kicker">404</p>
            <h1 id="page-title" className="hinglish-h1">Yeh page kho gaya!</h1>
            <p className="hero-sub">This page wandered off. Pick where your business is today, or tell us what you were looking for.</p>
            <div className="hero-actions">
              <WhatsAppCTA message={WA_MSG.notFound} context="404" label="WhatsApp us" />
            </div>
          </div>
        </div>
      </section>
      <section className="section surface-2" aria-label="Where to go next">
        <div className="container">
          <div className="path-grid">
            {paths.map((p) => (
              <PathCard key={p.slug} path={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
