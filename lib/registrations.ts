import { waLink } from "@/lib/site";

export type Registration = {
  slug: string;
  name: string;
  portal: string;
  portalUrl: string;
  ourFee: string;
  govFee: string;
  govNote: string;
  forWhom: string;
  refuse: string;
  documents: string[];
  notIncluded: string[];
};

export const registrations: Registration[] = [
  {
    slug: "gst",
    name: "GST registration",
    portal: "gst.gov.in",
    portalUrl: "https://www.gst.gov.in",
    ourFee: "₹4,999",
    govFee: "₹0",
    govNote: "The portal does not charge to apply. Our invoice is the only fee.",
    forWhom: "A business that must charge GST, or wants a GSTIN before the first taxable invoice.",
    refuse: "This is a registration filing. It is not a return plan, not input-credit advice, and not a CA opinion.",
    documents: ["PAN", "Aadhaar", "Bank proof", "Address proof", "Photograph", "Authorised signatory, if it is a company"],
    notIncluded: ["Monthly or quarterly returns", "A notice reply", "A second entity"],
  },
  {
    slug: "udyam",
    name: "Udyam registration",
    portal: "udyamregistration.gov.in",
    portalUrl: "https://udyamregistration.gov.in",
    ourFee: "₹2,499",
    govFee: "₹0",
    govNote: "Udyam is free on the government portal. Anyone charging a “government fee” for it is adding one.",
    forWhom: "The MSME record for a proprietorship, partnership, or company that already has Aadhaar and PAN.",
    refuse: "Not a loan, not a subsidy application, and not a tender qualification.",
    documents: ["Aadhaar of the proprietor or authorised person", "PAN", "Bank account"],
    notIncluded: ["MSME schemes", "A loan file", "A change of activity after the certificate"],
  },
  {
    slug: "iec",
    name: "IEC (import export code)",
    portal: "dgft.gov.in",
    portalUrl: "https://www.dgft.gov.in",
    ourFee: "₹4,999",
    govFee: "₹500",
    govNote: "₹500 is paid on the DGFT portal. The receipt is in your name. We do not fold it into our fee. An April–June update on the same details is ₹0 at DGFT.",
    forWhom: "A business that imports or exports goods. IEC follows your PAN. It is not your GSTIN.",
    refuse: "Not a customs broker, not shipping, and not an export-incentive claim.",
    documents: ["PAN", "Address proof", "Bank proof", "Aadhaar e-sign, or a DSC if the entity cannot e-sign"],
    notIncluded: ["A digital signature token", "A bank certificate if the bank rejects a PDF", "A detail change after issue (DGFT charges ₹200 for that)"],
  },
  {
    slug: "uk-vat",
    name: "UK VAT registration",
    portal: "gov.uk",
    portalUrl: "https://www.gov.uk/register-for-vat",
    ourFee: "₹29,999",
    govFee: "£0",
    govNote: "HMRC does not charge to apply. If they require a UK fiscal representative, that firm’s fee is quoted before you pay and is not inside ₹29,999.",
    forWhom: "Your own website selling goods of £135 or less to a UK consumer. Marketplace-only sales are often the marketplace’s VAT, not yours.",
    refuse: "We do not promise a number HMRC will not issue. If your goods or setup need a UK presence we cannot provide, we say so before the invoice.",
    documents: ["Business proof and PAN", "Passport or equivalent of the authorised person", "Shop URL", "What you sell and where the goods ship from"],
    notIncluded: ["VAT returns after the number", "A fiscal representative", "Goods above £135"],
  },
  {
    slug: "eu-vat",
    name: "EU IOSS coordination",
    portal: "EU Import One-Stop Shop",
    portalUrl: "https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en",
    ourFee: "₹24,999",
    govFee: "Quoted",
    govNote: "A seller outside the EU cannot hold an IOSS number alone. An EU intermediary files it. Their fee is a separate invoice, shown before you pay. ₹24,999 is our coordination, not their fee.",
    forWhom: "Your own website, goods outside the EU at the sale, a consignment of €150 or less, sold to an EU consumer.",
    refuse: "We are not your IOSS number. Marketplace-only orders are often covered by the marketplace. Consignments over €150 are a different customs path.",
    documents: ["The intermediary’s document list, not a shorter one we invent", "Shop URL", "What you sell and the ship-from country"],
    notIncluded: ["The intermediary’s own fee", "Monthly IOSS returns, unless scoped later", "Customs brokerage"],
  },
];

export function getRegistration(slug: string) {
  return registrations.find((item) => item.slug === slug);
}

export function registrationChat(item: Registration) {
  return waLink(
    `Hi, I want help with ${item.name}. Our fee ${item.ourFee} incl. GST, government fee ${item.govFee} separate.`,
  );
}
