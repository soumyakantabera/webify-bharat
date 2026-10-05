# Webify Bharat — Business Readiness Checklist

Companion to `content-plan.md` and `image-prompts.md`. Your answers are filled in. Items marked ☐ are **placeholders you complete before launch**.

> I'm not a lawyer or chartered accountant. Treat the legal and tax notes as a list of questions to confirm with a CA and a lawyer, not as advice.

---

## 1. Decisions (settled)

| Question | Your answer |
|---|---|
| Business model | **One-stop custom solutions company.** Every build is made for one client. |
| How you build | Adapt your own prototypes or existing stack · from scratch · on open source (Odoo, ERPNext) · budget route (Zoho/Odoo) · around the client's suite (Google Workspace, Microsoft 365, Tally) |
| ERP / CRM | Custom-built per client, or configured Odoo/Zoho; employee portals; role-based access-restricted systems |
| Branding | Client's brand (white-label) or Webify's — client chooses |
| Target customer | All MSMEs, by need. Featured: retail/kirana, restaurants & cloud kitchens, clinics, coaching, manufacturers & traders, exporters |
| Region | **Pan-India, fully remote via WhatsApp** |
| Team | Founder(s) + freelancers |
| Pricing model | **Low setup + monthly stage plans** with limits and add-ons; no minimum commitment. Mid-market, + GST. | Setup cost varies by route (lowest when adapting a prototype); CRM/ERP on Zoho/Odoo/Microsoft/Google is custom-priced, with licences billed by the vendor |
| Support promise | **Reply within a few hours, 7 days a week** |
| Sales channel | WhatsApp only; prototypes shown on request |
| Site language | English (light Hinglish); client deliverables in any language as an add-on |

**Note on the earlier checklist:** it assumed a subscription ERP/CRM product and 22 languages. Neither applies now. You sell custom builds, and languages are a per-client add-on with a native reviewer, not a site-wide cost.

---

## 2. Legal & compliance (before taking money)

| ☐ | Item | Placeholder / note | Ask your CA or lawyer |
|---|---|---|---|
| ☐ | Business structure | Repo says **Sole proprietorship**. `[[confirm]]` | Once you hold client data in CRMs/ERPs, does an LLP or Pvt Ltd make sense for liability? |
| ☐ | Business bank account | `[[bank, account name]]` | — |
| ☐ | **GST registration** | `GSTIN: [[ ]]` | **The site says prices are "incl. 18% GST" — you can only charge GST once registered.** Until then, prices must not say "incl. GST". Also ask: threshold rules for services and inter-state clients. |
| ☐ | **Filing registrations for clients (Webify File)** | You file GST/Udyam/IEC yourselves | Confirm what authorisation you need to file on a client's behalf (e.g. GST practitioner enrolment or client-side OTP/consent process), and how to document consent. For **EU IOSS**, non-EU sellers generally need an EU-established intermediary, and UK VAT may need an agent — plan partners for these. |
| ☐ | Udyam (MSME) | `UDYAM-[[ ]]` | — |
| ☐ | Trademark: name + logo | `[[application no.]]` | Run a conflict search first ("Webify" is common). Which classes for software + services (commonly 9, 35, 42)? |
| ☐ | Domain + email in business name | `[[domain]]`, `[[hello@domain]]` | Replace the Gmail address on the site once ready |
| ☐ | Terms of service | `lib/legal.ts` | State that **IP/code remains with Webify Bharat**, client gets a usage licence for the deployed system, data-export on exit, change-request rules, plan scopes |
| ☐ | Privacy policy (DPDP Act) | `lib/legal.ts` | Covers your website + WhatsApp chats |
| ☐ | Refund & cancellation policy | `lib/legal.ts` | Required by payment gateways |
| ☐ | **Client contract template** (MSA + per-project scope) | `[[template link]]` | Deliverables, timeline, 40/40/20 payment terms, acceptance, **IP retained by Webify (usage licence to client)**, data export, support |
| ☐ | **Data processing agreement** for CRM/ERP clients | `[[template]]` | Under DPDP, the client is usually the data fiduciary and you the processor — confirm duties |
| ☐ | Freelancer agreement: **NDA + IP assignment** | `[[template]]` | Work freelancers do must belong to you so you can transfer it to clients |
| ☐ | Your own payment gateway (to collect from clients) | `[[Razorpay / Cashfree merchant ID]]` | Gateways usually need a live site, legal pages and KYC first |
| ☐ | WhatsApp Business (verified business profile) | `[[number]]` | Meta business verification if you move to the API later |
| ☐ | Open-source licence review | — | Odoo Community is LGPL; Odoo Enterprise is proprietary; ERPNext is GPL. Ask what you must share when you customise and deliver these |
| ☐ | **Reseller/partner status (needed for ₹0 setups)** | Required before advertising ₹0 | Zoho / Odoo partner programmes can give margin on licences — decide later |
| ☐ | Logo usage | `lib/logos.ts` | Follow each brand's guidelines; "works with" wording only |

---

## 3. Money

### 3.1 Pricing structure (decided — full list in `content-plan.md` §10)
- **Model:** low setup + higher monthly plans, four stages with limits, over-limit charges and add-ons. Mid-market, round numbers, + 18% GST (gated on GSTIN).
- **Stages (setup / monthly):** Starter ₹5,000 / ₹3,000 · Business ₹10,000 / ₹7,500 · Command ₹15,000 / ₹18,000 · Custom from ₹50,000 / from ₹40,000.
- **Commitment:** none (30 days' notice). Annual prepay = 2 months free.
- **Care:** built into every monthly plan.
- **Reach, Compass, partner products:** as in §10.4–10.5; partner standard setup ₹0.
- **Code:** stays with Webify Bharat; clients own domain, brand, content, data and accounts.

### 3.2 Payback check (the key number for this model)

Low setup means **each client must stay long enough to repay the build**. Fill this for each stage:

| | Starter | Business | Command |
|---|---|---|---|
| Your real build cost (hours × rate + freelancers) | ₹[[ ]] | ₹[[ ]] | ₹[[ ]] |
| Setup fee collected | ₹5,000 | ₹10,000 | ₹15,000 |
| **Unrecovered build cost** | ₹[[ ]] | ₹[[ ]] | ₹[[ ]] |
| Monthly running cost per client (hosting, tools, support time) | ₹[[ ]] | ₹[[ ]] | ₹[[ ]] |
| Monthly margin (plan − running cost) | ₹[[ ]] | ₹[[ ]] | ₹[[ ]] |
| **Payback month** = unrecovered ÷ monthly margin | [[ ]] | [[ ]] | [[ ]] |

Healthy target: **payback within 4–6 months**. If a stage takes longer:
- reuse more of the prototype (lower build cost), or
- bill custom work beyond the stage separately (§10.3 "custom feature development"), or
- push annual prepay (10 for 12) at signup.

Track **monthly churn** closely. With no minimum commitment, a client leaving before payback is a loss.

### 3.3 Unit economics (track monthly)
- Conversations started on WhatsApp: `[[ ]]`
- → Prototype walkthroughs: `[[ ]]`
- → Scopes sent: `[[ ]]`
- → Paid projects: `[[ ]]`
- Average project value: `₹[[ ]]`
- Upgrade rate (stage moves per month): `[[ ]]`
- Monthly churn: `[[ ]]%` · average client lifetime: `[[ ]]` months
- Cost to get one client (ads, time): `₹[[ ]]`
- Break-even: `[[ ]]` projects / month to cover your fixed costs of `₹[[ ]]`

### 3.4 Payment terms (decided)
- **Starter / Business / Command:** setup + first month upfront; monthly billing from launch.
- **Custom:** 40% start · 40% preview · 20% before launch on the setup fee.
- Use auto-debit / UPI AutoPay or recurring payment links (Razorpay/Cashfree subscriptions) for monthly plans to reduce missed payments.
- Collected via payment link shared on WhatsApp (your Razorpay/Cashfree; Stripe for overseas clients).

### 3.5 Funding & accounts
- Funding: `[[bootstrapped / other]]`
- Accounting tool: `[[Zoho Books / Tally / other]]` · monthly review date: `[[ ]]`

---

## 4. Product & technology

| ☐ | Item | Recommended default |
|---|---|---|
| ☐ | **Client data separation** | One Vercel project + one database per client. No shared multi-client database for CRM/ERP data |
| ☐ | Account ownership & code | Client owns domain, gateway account, WhatsApp number, licences and data; you get delegated access. **Code stays with you** — contract must state the client receives a licence to use the deployed system while plans are active, plus data export on exit |
| ☐ | Access control | Role-based access in every CRM/ERP/portal build; least-privilege access for freelancers; remove access when a project ends |
| ☐ | Backups | Automated daily backups for any client database; test a restore once per quarter |
| ☐ | Monitoring | Uptime check per client site; error alerts to your WhatsApp/email |
| ☐ | Credentials | Shared password manager, never in chats or code |
| ☐ | **Prototype library** | Keep your 8 prototypes in private repos, documented, ready to fork. This is what makes the "lowest setup cost" route real |
| ☐ | Data migration | Standard import process from Excel / Tally / Google Sheets — often decides CRM/ERP adoption |
| ☐ | Integrations readiness | Know the setup steps and lead times for: Razorpay, Cashfree, Stripe, WhatsApp Business API, Zoho, Odoo, Google Workspace, Microsoft 365, Tally, Shiprocket |
| ☐ | QA checklist | Test on a low-end Android phone and a slow connection before every launch |
| ☐ | Handover pack | Logins list, short walkthrough video, how-to notes, care-plan details |
| ☐ | Analytics | Vercel Analytics events on your own site (`wa_click`, `estimator_send`, `prototype_request`) |

---

## 5. Sales process (WhatsApp)

| Stage | What you do | WhatsApp label |
|---|---|---|
| 1. New message | Reply within a few hours; ask 3 questions: business type, city, what's not working / what they want | `New` |
| 2. Discovery | 20–30 min call or chat ("chai-pe-charcha") | `Discovery` |
| 3. Prototype walkthrough | Show 1–3 relevant prototypes by screen-share or short video | `Prototype shown` |
| 4. Scope | Send written scope + price (PDF) within `[[48]]` hours | `Scope sent` |
| 5. Kick-off | Payment link → start date | `Won` |
| 6. Build → launch | Updates in a project chat | `In build` / `Live` |
| 7. Care / upsell | Offer optional care; check in at 30 and 90 days | `Care` |
| — | Not now | `Later` / `Lost` (note the reason) |

☐ Set up in WhatsApp Business: business profile, labels above, quick replies for the 3 opening questions, greeting message, away message (honest: "We'll reply within a few hours").
☐ Templates to write: discovery questions, walkthrough script, scope/quote template, follow-up messages (day 2, day 7).

---

## 6. Support & operations

| ☐ | Item | Default |
|---|---|---|
| ☐ | "Few hours, 7 days" roster | Who covers which days/hours: `[[ ]]`. Include weekends and festivals |
| ☐ | What Software Care vs Website Care include | e.g. fixes, small changes (`[[x]]` hours), backups, uptime checks, monthly check-in |
| ☐ | Escalation | Urgent issue (site/payments down) → who is called, within how long |
| ☐ | Release process | Preview link on Vercel → client approval → production |
| ☐ | Incident notes | One short note per incident: what broke, fix, prevention |
| ☐ | Refund handling | Steps that match your refund policy |
| ☐ | Weekly metrics | 15 minutes every `[[Monday]]`: §3.3 numbers + open projects |

---

## 7. People

| Role | Who | Status |
|---|---|---|
| Founder(s) — sales, scope, delivery lead | `[[names]]` | ✓ |
| Designer (UI/brand) | `[[freelancer]]` | ☐ |
| Full-stack developer (Next.js) | `[[freelancer]]` | ☐ |
| Odoo / Zoho consultant | `[[freelancer]]` | ☐ |
| Content writer (English + Hinglish) | `[[freelancer]]` | ☐ |
| Native-language reviewers (per client need) | `[[pool]]` | ☐ |

☐ Vetting: a small paid test task before real client work.
☐ Every freelancer signs NDA + IP assignment.
☐ Offboarding: remove access the day a project ends.

---

## 8. Proof & validation (cheap, do early)

| ☐ | Step | Target |
|---|---|---|
| ☐ | Talk to MSME owners in your featured trades | 10–20 conversations |
| ☐ | Run paid pilots (prototype route = fast) | 3–5 projects |
| ☐ | Ask for written consent to feature the project | Every pilot |
| ☐ | Turn pilots into case studies | → `/showcase` on the site |
| ☐ | Collect real testimonials | → switch `published: true` on the site |
| ☐ | Learn which add-ons people actually pay for | Adjust tiers and prices |

---

## 9. Site placeholders to fill (maps to `content-plan.md`)

| Placeholder | File |
|---|---|
| Legal name, constitution, address, GSTIN, Udyam, phone | `lib/site.ts → BUSINESS` |
| All `₹ TODO` prices, care price, white-label policy, setup note | `lib/offers.ts` |
| Typical timelines per route | `MiniGantt` data |
| Prototype teaser names + integrations | `lib/prototypes.ts` |
| Legal pages (reviewed) | `lib/legal.ts` |
| Email on business domain | `lib/site.ts → SITE.email` |
| Generated images | `/public/images/v2/` (see `image-prompts.md`) |

---

## 10. Suggested order (next 90 days)

| When | Do |
|---|---|
| **Weeks 1–2** | Register (structure, bank, GST, Udyam) · domain + email · trademark search · draft contracts (client, freelancer, data processing) |
| **Weeks 2–4** | Generate P1 images · Claude Code Phases 1–2 · legal pages reviewed · gateway KYC for your own collections · WhatsApp Business set up with labels and templates |
| **Weeks 4–6** | Claude Code Phases 3–5 · fill all placeholders · soft launch · start 10–20 owner conversations |
| **Weeks 6–12** | 3–5 paid pilots via the prototype route · first case studies · tune prices from real costs · enable `/showcase` |
