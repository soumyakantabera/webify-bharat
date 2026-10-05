import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { BreadcrumbLd } from "@/components/SeoLd";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("registrations-charges");

const ROWS: [string, string, string][] = [
  ["Government fees", "The department (e.g. DGFT's IEC fee)", "Paid on the portal, receipt in your name. Never marked up."],
  ["Payment gateway fees", "Razorpay, Cashfree or Stripe", "Their published rate, charged on each payment."],
  ["WhatsApp conversation charges", "Meta or its partners", "Billed per conversation when you use the WhatsApp Business API."],
  ["Software licences", "Zoho, Odoo, Google, Microsoft", "Billed by the vendor, in your account."],
  ["Domain renewal", "Your domain registrar", "Renewed in your name, so the domain stays yours."],
  ["Ad spend", "Google or Meta", "Paid directly to the platform."],
  ["Digital signature (DSC)", "A certifying authority", "Only if a portal requires one for your entity."],
  ["Overseas agent or intermediary", "A registered UK or EU firm", "For UK VAT or EU IOSS. Quoted before you pay."],
  ["Translation or attestation", "A translator or notary", "Only if a foreign authority asks for it. Quoted first."],
];

export default function ChargesPage() {
  return (
    <Layout cta={{ title: "Want a full list for your case? Ask us.", message: "Hi! Can you list every charge for my registration?", webu: "thinking" }}>
      <BreadcrumbLd seoKey="registrations-charges" />
      <section className="section" aria-labelledby="page-title">
        <div className="container">
          <div className="sec-head">
            <p className="kicker">Registrations · charges</p>
            <h1 id="page-title" className="page-h1">Charges outside our fee.</h1>
            <p className="sec-sub">These are billed by someone else. We list them before you pay, so nothing is folded into our number.</p>
          </div>
          <div className="table-scroll">
            <table className="addon-table charges-table">
              <thead>
                <tr>
                  <th scope="col">Charge</th>
                  <th scope="col">Who bills it</th>
                  <th scope="col">How it works</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([a, b, c]) => (
                  <tr key={a}>
                    <th scope="row">{a}</th>
                    <td>{b}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="center-cta">
            <WhatsAppCTA message="Hi! Can you list every charge for my registration?" context="charges" variant="ghost" label="Ask about my case" />
          </div>
          <p className="center-note">
            <Link href="/registrations" className="text-link">
              <Arw dir="left" /> All filings
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
