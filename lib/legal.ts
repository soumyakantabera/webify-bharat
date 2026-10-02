import { BUSINESS } from "@/lib/site";

export type LegalSection = { heading: string; body: string[] };

export const legalUpdated = "2 October 2026";

export const terms: LegalSection[] = [
  {
    heading: "Who you are dealing with",
    body: [
      `These terms are between you and ${BUSINESS.legalName}, a sole proprietorship at ${BUSINESS.address}. This website is fully managed and developed by ${BUSINESS.legalName}, and solely owned by ${BUSINESS.legalName}. Write to ${BUSINESS.email}.`,
      "A package, an addon, or a filing on this site is the work described on that page. It is not a promise of enquiries, rankings, or sales.",
    ],
  },
  {
    heading: "What we deliver",
    body: [
      "We deliver the agreed output: the pages, the WhatsApp setup, the checkout path, the consulting notes, or the filing we submit in your name. Delivery is that output, handed over or filed.",
      "After delivery, what the business does with it is yours. A site can be live and still not sell. A filing can be submitted and still wait on the department. A consulting note only works if you apply it.",
    ],
  },
  {
    heading: "No guarantee of more sales",
    body: [
      "We do not guarantee that sales, leads, bookings, or revenue will increase. Search, ads, season, price, staff follow-up, and your offer all sit outside the build.",
      "Any result after delivery depends on how you apply what we handed over, and on your own strategy. We are not your sales team unless a later, written scope says so.",
    ],
  },
  {
    heading: "Your part",
    body: [
      "You send accurate content, access, and KYC. A wrong PAN, a missing photo, or a late reply moves the date. We do not invent claims about your business.",
      "Government portals decide filings. We prepare and submit. Approval, a query, or a rejection is the department’s, not a failed delivery.",
    ],
  },
  {
    heading: "Fees",
    body: [
      "The price on the card includes 18% GST on our fee. A portal receipt, such as the ₹500 IEC fee to DGFT, is paid to that department in your name. It is not our fee and we do not mark it up.",
      "Hosting, a domain, gateway charges, and WhatsApp conversation fees stay outside the build price, as listed on the additional charges page.",
    ],
  },
];

export const privacy: LegalSection[] = [
  {
    heading: "What we collect",
    body: [
      "If you write on WhatsApp or use the contact form, we receive what you send: your name, number, city, and what you want built or filed.",
      "We also see ordinary site logs, such as the page you opened. We do not run a lead marketplace and we do not buy contact lists.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use it to reply, to do the work you asked for, and to keep a record of what was agreed. WhatsApp messages sit on WhatsApp. The site is hosted so the pages can load.",
      "We do not sell your number. We do not hand your customer list to another business.",
    ],
  },
  {
    heading: "How long, and who else sees it",
    body: [
      "We keep the thread for as long as the project, the invoice, or a legal question needs it. Then we delete what we no longer have a reason to hold.",
      "A filing means your documents go to the portal you asked us to use, such as GST, Udyam, or DGFT. That department’s own rules apply once the form is there.",
    ],
  },
  {
    heading: "Asking about your information",
    body: [
      "To ask what we hold, or to ask us to correct it, message +91 83360 97642 on WhatsApp. Say your name and the number you used.",
    ],
  },
];

export const refund: LegalSection[] = [
  {
    heading: "Delivery is the output, not a sales result",
    body: [
      "Our fee is for the work we agreed: the site, the addon, the filing, or the consulting we actually deliver. It is not a fee for a higher turnover.",
      "Once that output is delivered, the job we charged for is done. A quiet month after go-live is not an undelivered project.",
    ],
  },
  {
    heading: "Why there is no refund",
    body: [
      "There is no refund of our fee. Not after delivery, and not because sales, enquiries, or bookings did not rise.",
      "What happens next depends on how you apply the work, and on your own strategy: your prices, your follow-up, your ads, your stock, your offer. Those are not things we can take back, so we do not refund them.",
    ],
  },
  {
    heading: "What we will do instead",
    body: [
      "If the agreed output is not what the page described, tell us and we correct that output. A missing page in the scope gets built. A filing error we made gets fixed. That is a correction, not a refund.",
      "Money already paid to a department, a domain registry, a gateway, or Meta stays with them. We cannot refund a receipt that was never ours.",
    ],
  },
  {
    heading: "Before we start",
    body: [
      "If you do not want to proceed, say so before we start producing the work. Once we have started, the fee stands. The refund rule does not change because the market was slow.",
    ],
  },
];
