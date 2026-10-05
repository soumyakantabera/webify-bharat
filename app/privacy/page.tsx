import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { LegalDoc } from "@/components/LegalDoc";
import { BreadcrumbLd } from "@/components/SeoLd";
import { privacy } from "@/lib/legal";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("privacy");

export default function Page() {
  return (
    <Layout cta={{ title: "Questions about this policy? Ask us.", message: "Hi! I have a question about your privacy policy.", webu: "thinking" }}>
      <BreadcrumbLd seoKey="privacy" />
      <LegalDoc kicker="Privacy" title="Your data, handled with care." lede="What we collect, why, who sees it and your rights under India's Digital Personal Data Protection Act." doc={privacy} />
    </Layout>
  );
}
