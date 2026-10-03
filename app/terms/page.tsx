import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { HeroShot } from "@/components/HeroShot";
import { LegalDoc } from "@/components/LegalDoc";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of Webify Bharat India. Delivery is the agreed output. We do not guarantee a rise in sales.",
};

export default function TermsPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <LegalDoc
            kicker="Terms"
            title="The work we sell is the work we deliver."
            lede="Read this with the pricing page. The card is the scope. These terms say what that scope is not."
            sections={terms}
          >
            <HeroShot kind="legal" />
          </LegalDoc>
        </div>
      </section>
    </Layout>
  );
}
