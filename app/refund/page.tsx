import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { LegalDoc } from "@/components/LegalDoc";
import { BreadcrumbLd } from "@/components/SeoLd";
import { refund } from "@/lib/legal";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("refund");

export default function Page() {
  return (
    <Layout cta={{ title: "Questions about this policy? Ask us.", message: "Hi! I have a question about your cancellation and refund policy.", webu: "thinking" }}>
      <BreadcrumbLd seoKey="refund" />
      <LegalDoc kicker="Cancellations & refunds" title="Cancellations and refunds." lede="How stopping a plan works, what happens to your data, and when fees can and can't be refunded." doc={refund} />
    </Layout>
  );
}
