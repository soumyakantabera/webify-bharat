import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { LegalDoc } from "@/components/LegalDoc";
import { refund } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund policy",
  description:
    "Webify Bharat India does not refund fees after delivery. A website or a filing is not a guarantee that sales will increase.",
};

export default function RefundPage() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <LegalDoc
            kicker="Refunds"
            title="No refund once the output is delivered."
            lede="We charge for the site, the filing, or the consulting we hand over. We do not charge for a sales increase, and we do not refund when sales stay flat."
            sections={refund}
          />
        </div>
      </section>
    </Layout>
  );
}
