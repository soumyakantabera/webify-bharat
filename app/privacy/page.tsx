import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { HeroShot } from "@/components/HeroShot";
import { LegalDoc } from "@/components/LegalDoc";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What Webify Bharat India keeps when you message us, and what we do not do with it.",
};

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <LegalDoc
            kicker="Privacy"
            title="Your number is for the work, not a list we sell."
            lede="WhatsApp and the contact form are how a project starts. This page says what we keep."
            sections={privacy}
          />
          <HeroShot kind="legal" />
        </div>
      </section>
    </Layout>
  );
}
