import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { LegalDoc } from "@/components/LegalDoc";
import { BreadcrumbLd } from "@/components/SeoLd";
import { terms } from "@/lib/legal";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("terms");

export default function Page() {
  return (
    <Layout cta={{ title: "Questions about this policy? Ask us.", message: "Hi! I have a question about your terms.", webu: "thinking" }}>
      <BreadcrumbLd seoKey="terms" />
      <LegalDoc kicker="Terms" title="Terms of service, in plain language." lede="How our plans, payments, ownership and responsibilities work." doc={terms} />
    </Layout>
  );
}
