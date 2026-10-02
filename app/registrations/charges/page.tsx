import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { PageLead } from "@/components/PageIcons";

export const metadata: Metadata = {
  title: "Additional charges — what is not in the card price",
  description:
    "Hosting, domain, gateway MDR, WhatsApp conversation fees, DSC, and government filing fees. Each is named before you pay. None is folded into the card.",
};

const rows = [
  ["Hosting and care", "After a site is live", "The host, or us if we resell", "Quoted before go-live. Month to month. You can leave."],
  ["Domain", "If you do not already have one", "The registrar", "Your login. We do not keep the only access."],
  ["Gateway MDR", "Every successful payment", "Your Razorpay, Cashfree, or PayU account", "Their rate. Not in the build fee."],
  ["WhatsApp conversation charges", "API, not the free Business app", "Meta", "Outside the build fee. We do not invent a per-message rupee."],
  ["Digital signature", "A company or LLP that cannot e-sign", "The certifying authority", "Pass-through, only if the portal requires it."],
  ["Bank certificate", "The bank rejects a PDF statement", "The bank", "Their charge. Usually an IEC case."],
  ["IEC government fee", "A new code", "DGFT", "₹500, receipt in your name."],
  ["IEC detail change", "Address, bank, or ownership", "DGFT", "₹200, plus our fee only if you ask us to file it."],
  ["IEC update, April–June", "Same details, once a year", "DGFT", "₹0 at the portal."],
  ["Translation or apostille", "UK or EU asks for it", "The translator", "Pass-through, quoted first."],
  ["EU intermediary", "IOSS for a seller outside the EU", "That firm", "Their invoice. Separate from our ₹24,999."],
  ["UK fiscal representative", "Only if HMRC requires one", "That firm", "Quoted before you pay. Not inside ₹29,999."],
  ["A refile of new facts", "You changed the story after we filed", "Us", "The first fee covers one clean refile of the same facts."],
  ["Ads, 40 blogs a month, incorporation, CA certification", "Almost never", "Not us", "Out of every package and every filing."],
];

export default function ChargesPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container page-copy">
          <PageLead icon="pricing" kicker="Additional charges" />
          <h1>
            Two bills, both visible.
            <br />
            <span>Nothing folded in.</span>
          </h1>
          <p className="muted-copy">
            The card price is our work, and 18% GST is inside it. Anything below is
            either a government or vendor charge, or a later job. We quote it before
            you pay.
          </p>
          <Link className="btn btn-secondary" href="/registrations">All filings</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="charge-table" role="table">
            <div className="charge-row charge-head" role="row">
              <span>Item</span>
              <span>When</span>
              <span>Who is paid</span>
              <span>How it is shown</span>
            </div>
            {rows.map((row) => (
              <div className="charge-row" role="row" key={row[0]}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
