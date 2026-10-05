<p align="center">
  <img src="https://raw.githubusercontent.com/soumyakantabera/webify-bharat/main/public/images/logo/webify-bharat-logo.png" alt="Webify Bharat" height="64">
</p>

<h1 align="center">Webify Bharat — Final Content & Build Plan</h1>
<p align="center"><b>Custom-built for your business. Your business stays yours.</b><br>
Your own software and marketing — planned, built, run and grown for you · Theme: <b>Rangoli Pro</b> · Stack: Next.js 15 on Vercel · Every CTA: WhatsApp<br>Companion files: <code>business-readiness.md</code> (launch checklist) · <code>image-prompts.md</code> (optional, later)</p>

---

## 0. Instructions for Claude Code (read first)

1. **Follow §1 Decisions Log exactly.** Do not reintroduce anything marked ❌ (templates, on-site payments, forms as primary CTA, fake stats, language toggle).
2. **Never invent numbers.** Any value written as `₹ TODO`, `TODO:` or `[[...]]` must stay a visible placeholder in the data file (not in the UI). Do not ship a tile that renders a placeholder. Hide it behind a `published: false` flag until the owner fills it.
3. **One source of truth for data:** extend existing files in `lib/` (`site.ts`, `offers.ts`, `rivals.ts` (rename → `channels.ts`), `registrations.ts`, `cities.ts`, `faqs.ts`, `page-seo.ts`). Reconcile duplicates: `site.ts → plans` and `offers.ts → offers` currently disagree. Merge into `offers.ts`.
4. **Keep existing fonts** (Sora, Manrope, JetBrains Mono — already in `app/fonts.ts`).
5. **Every CTA uses `waLink(text)`** from `lib/site.ts` with a page-specific prefilled message (§4.2).
6. **Accessibility and performance targets in §13 are acceptance criteria**, not suggestions.
7. **Images:** launch uses **only existing repo photos + SVG brand assets** (§17). Every `IMG-*` ID in §16 is a *slot* resolved by `lib/images.ts` per §17.2. `image-prompts.md` is an optional later upgrade. Never a broken image, never a stock hotlink.
8. **AI-generated people are never presented as our team, our clients or testimonials.** They illustrate scenes only.
9. **Clarity rules (§2.0) override style choices.** If a section can't pass the 5-second test, simplify it before adding motion or colour.
10. **No new raster images.** All new sections reuse the photo pool (§16.5, §17.2) or SVG illustrations (§17.3).
11. Follow the Claude Code playbook (§18) and the phase order in §15. Commit per phase.

---

## 1. Decisions log (confirmed by owner)

| # | Topic | Decision |
|---|---|---|
| 1 | Business model | **One-stop custom solutions company.** Every build is business-specific. No templates, no boxed products. Product names are *building blocks* we tailor and combine. |
| 2 | How we build | Four routes, chosen per client: **from scratch** · **on open source** (e.g. Odoo, ERPNext) · **budget route** (configured Zoho / Odoo apps) · **on the client's existing suite** (Google Workspace, Microsoft 365, Tally). Our stack is the default when nothing else is needed or available. |
| 3 | Branding | **White-label available**: the system carries the client's brand, or "Built by Webify Bharat" — client chooses. |
| 4 | ERP / CRM | In scope: **custom CRM/ERP**, employee portals & HR tools, **role-based access-restricted** internal systems, or budget setups on Odoo/Zoho. |
| 5 | Three paths | **Launch** (deploy a new business from scratch) · **Organise** (custom system for a running business) · **Grow** (build up and scale). |
| 6 | Who we serve | **All MSMEs, by need.** Featured trades (because prototypes exist): Retail/kirana · Restaurants & cloud kitchens · Clinics · Coaching · Manufacturers & traders · Exporters. Tiers by segment come later. |
| 7 | Market | **Pan-India, fully remote over WhatsApp.** City pages are SEO entry points, not office locations. |
| 8 | Conversion | **WhatsApp is the only CTA.** No checkout, no on-site payment, no lead form. Email and phone listed on Contact as secondary info only. |
| 9 | Our own invoices | Handled over WhatsApp after a written scope (payment link). ❌ No `/pay` page. |
| 10 | Payments we set up for clients | **Razorpay or Cashfree** (India) · **Stripe** (international). PayPal on request. |
| 11 | Hosting | **Vercel** (Next.js) for what we build; client's own cloud/suite when they require it. |
| 12 | Prototypes | We have prototypes for: restaurant ordering · clinic booking + reminders · coaching admissions + fees · retail/kirana store · manufacturer/dealer portal · CRM/ERP dashboard · employee portal/HR · exporter site + international payments. **Shown only on request via WhatsApp.** Site shows illustrated teasers with the integrations each uses. Public `/showcase` later. |
| 13 | Prototype visuals | **Illustrated SVG mock screens now**, swap to real (blurred) screenshots later via a `kind` field. |
| 14 | Pricing model | **Low setup (₹5,000–₹15,000) + higher monthly plans**, four stages (Starter · Business · Command · Custom) with limits, over-limit charges and add-ons — full list in §10. No minimum commitment; annual prepay = 2 months free. Custom builds: 40/40/20 on setup. **Source code stays with Webify Bharat**; clients own domain, brand, content, data and accounts. *(Earlier wording below kept for context:)* One-time build price + monthly Care. Care is **required** for software we run (CRM/ERP — Desk, staff portals — Team, live integrations — Connect, and any system holding business data); **optional** for websites, stores and simple setups. Prices shown: setup "from" + required monthly + priced add-ons + "custom extras quoted on WhatsApp". All + 18% GST (gated on GSTIN). |
| 15 | Support promise | **"We reply within a few hours, 7 days a week."** Shown on Contact, CTA band, footer, FAQ. |
| 16 | Hero language | **English leads.** Hinglish accent line: *"Aapka business. Aapke hisaab se."* |
| 17 | Site languages | **English only.** Light Hinglish sprinkles (§6.3). City pages open with a local greeting in Roman script (§11). ❌ No language toggle. (Client deliverables can be in any language — that's a build add-on, not the site.) |
| 18 | Theme | **Rangoli Pro**: calm professional base; colour in tiles, icons, path bands and one "burst" section per page. |
| 19 | Mascot | **Webu** included (loaders, 404, empty states, success moments, CTA band). |
| 20 | Fonts | **Keep** Sora · Manrope · JetBrains Mono. |
| 21 | Images | Every page uses **photo collages and grids** (§16) built from **existing repo photos + SVG illustrations** (§17). No image generation for launch; `image-prompts.md` is an optional later upgrade. Retire old teal illustrations. |
| 22 | URLs | `/services` → `/systems` · `/work` → `/prototypes` · new `/solutions/*`, `/how-we-work`, `/integrations`, `/faq`, `/industries/exporters`. 301 redirects for old URLs. |
| 23 | Plan names | **Starter · Business · Command** (avoids clash with Launch/Grow paths). |
| 24 | Legal details | Registration, GST, Udyam, trademark, gateway approval: **all placeholders**, owner completes before launch (see `business-readiness.md`). Placeholder fields are hidden in UI until filled. |
| 25 | Proof | ❌ No invented stats, ratings, client counts, live-activity tickers, fake countdowns. |
| 26 | Dark mode | Light only at launch. |
| 27 | **Category (what we are)** | **Custom software as a service for MSMEs** — each client gets *their own* software, built on our reusable platform (PaaS layer, "Webify Platform"), and run for them as a managed service (SaaS layer). In plain words on the site: *"Your own software. We plan it, build it, run it and help you grow."* |
| 28 | **Stance** | **Gap-filler, not competitor.** We work *with* Zoho, Odoo, Google, Microsoft, Tally, marketplaces and payment apps. The gap: powerful tools exist, but MSMEs have no one to choose, set up, connect, customise, run and market them. No "vs" headlines; no rival-bashing. |
| 29 | **Four pillars** | Everything we sell sits in one of four pillars: **Strategy** (paid consulting) · **Systems** (the 11 blocks) · **Marketing** (Reach) · **Care** (included in every monthly plan). Paths (Launch / Organise / Grow) say *where you are*; pillars say *what we do*. |
| 29a | **Care rule (copy)** | Care is **built into every monthly plan** — hosting, security, backups, support and change hours. Never sell Care separately. Copy: *"Your monthly plan keeps it running, secure and improving."* |
| 30 | **Strategy consulting** | **Paid** strategy sessions and digital roadmaps (product name **Webify Compass**). Session ₹5,000 · Audit ₹15,000 · Roadmap ₹30,000 (§10.3); 100% credited against a setup signed within 60 days (default). |
| 31 | **Marketing** | **Webify Reach**: SEO · online ads (Google, Meta) & SEM · local & maps listings · **AI visibility** (being found and described correctly in ChatGPT, Gemini, Perplexity, Copilot and other AI assistants) · WhatsApp & social campaigns. Honest: no guaranteed rankings or AI mentions; ad spend paid to platforms separately. |
| 32 | **Images & brand assets** | **Launch with zero generated images.** Claude Code builds the full SVG brand kit (logo variants, icons, patterns, Webu, spot illustrations, skylines, mocks, OG images, off-site kit) per §17.3. |

---

## 2. Positioning

### 2.0 Clarity framework (read before writing any copy)

**The risk:** "one-stop" can sound like "does everything, specialises in nothing". Visitors must understand **what we are, what we're not, and what to do next** within 5 seconds.

**2.0.1 The category sentence (used verbatim in hero sub, meta description, `llms.txt`, About opener)**
> **"Webify Bharat builds and runs your own business software — and markets your business — so every tool you use actually works for you."**

**2.0.2 The gap we fill (the core story)**

| What exists today | What MSMEs still lack | Where Webify fits |
|---|---|---|
| Great apps: Zoho, Odoo, Tally, Google Workspace, Microsoft 365, Shopify-type builders | Someone to **choose** the right one, **set it up**, **customise** it and make it **fit their workflow** | We plan, configure or build it — in your brand |
| Payment apps & gateways: UPI, Razorpay, Cashfree, Stripe | Someone to **connect** payments to invoices, WhatsApp and books | We wire it all together (Webify Connect) |
| Marketplaces & aggregators: Zomato, Swiggy, Amazon, IndiaMART | A **channel of their own** for regular customers | We build your own channel *alongside* them |
| Ad platforms & search: Google, Meta, Bing — and now AI assistants | **Know-how and time** to run ads, SEO and AI visibility | We run Reach marketing for you |
| Freelancers & agencies | Someone who **stays after launch** | Webify Care (monthly) |

Headline for this: **"The tools are great. The gap is everything in between. That's us."**

**2.0.3 What we are / what we're not** (shown as a two-column strip on Home + About)

| ✅ We are | ❌ We're not |
|---|---|
| Your software and marketing team, reachable on WhatsApp | Another app you have to learn alone |
| Builders who work with Zoho, Odoo, Google, Microsoft, Tally | A replacement or rival for those tools |
| Custom: every system made for one business | A template shop |
| A partner who stays (Care) | A build-and-disappear agency |
| Honest about costs (licences, ad spend, govt fees shown separately) | A "free" offer with hidden fees |

**2.0.4 The SaaS / PaaS identity — in plain words**

| Layer | Technical term (used only on `/integrations` and `/about`, always explained) | Plain words on the site |
|---|---|---|
| Webify Platform | **PaaS** — our reusable stack, prototypes, integrations and deployment pipeline on Vercel | "Our proven base, so you don't pay to reinvent the wheel." |
| Your software | **SaaS, custom per client** — the system we build on that base for you | "Your own software, in your brand." |
| Managed service | Monthly plan (Care built in) + optional Reach | "We run it and help you grow." |

✏️ SVG `PlatformLayers`: three stacked layers (Platform → Your software → We run & grow it) with the client's logo slot on the middle layer.

**2.0.5 Four pillars (the menu of what we do)**

| Pillar | Product name | One line | What's inside | Accent | Icon |
|---|---|---|---|---|---|
| 🧭 **Strategy** | **Webify Compass** | "Know what to build before you spend." | Paid strategy session · digital audit · tool selection (build vs Zoho/Odoo vs Google/Microsoft) · roadmap & budget | Indigo | `Compass` |
| 🧱 **Systems** | The 11 blocks | "Your own software, built to fit." | Site · Store · Pay · Chat · Desk · Team · Workspace · Ledger · File · Pulse · Connect | Rani | `SquaresFour` |
| 📣 **Marketing** | **Webify Reach** | "Get found — on Google, maps, ads and AI." | SEO · Ads & SEM · Local & maps · AI visibility · WhatsApp & social campaigns | Marigold | `Megaphone` |
| 🛟 **Care** | **Webify Care** | "We keep it running and improving." | Built into every monthly plan: hosting, security updates, backups, fixes, change hours, support (few hours, 7 days) | Peacock | `Lifebuoy` |

**Paths vs pillars (avoid confusion):** Paths answer *"Where is my business?"* (Launch · Organise · Grow). Pillars answer *"What will Webify do?"* (Strategy · Systems · Marketing · Care). Every path page shows which pillars it uses.

**2.0.6 Five-second test (acceptance check for every page hero)**
A first-time visitor must be able to answer: (1) What does Webify do? (2) Is it for a business like mine? (3) What happens if I click? → Hero = category line + one relevant photo + one WhatsApp CTA. Nothing else above the fold competes.

**2.0.7 Plain-words glossary chips** (hover/tap chips wherever a term appears)
SaaS = software you use, we run it · PaaS = our base platform · CRM = customer & lead tracker · ERP = one system for orders, stock, billing · SEO = showing up in Google's unpaid (organic) results · SEM / Ads = paid search & social ads · AI visibility = being found and described correctly by ChatGPT-style assistants · White-label = your brand on everything · **Template** = the same design sold to everyone (we don't do this) · **Prototype** = our tested starting point, rebuilt for your business and brand.

### 2.1 One-liner
> **Webify Bharat builds and runs your own business software — and markets your business — so every tool you use actually works for you.** Strategy, systems, marketing and care for Indian MSMEs: websites, payments, WhatsApp, CRM/ERP, staff portals, SEO, ads and AI visibility — made for your business, in your brand, owned by you.

### 2.2 Headline system
- **Primary (EN):** **"Custom software for your whole business. All in one place."** (changed by the owner; was "Built for your business. Not for everyone's.")
- **Accent (Hinglish, small, Caveat-style handwritten or Sora italic):** *"Aapka business. Aapke hisaab se."*
- **Support line:** *"No templates. From your website to your CRM, we learn how you work and build the system around it — or set up your new business from day zero."*
- **One-stop line (used under hero and on About):** *"One team to plan, build, run and market it — working with the tools you already know."*
- **Gap line:** *"The tools are great. The gap is everything in between. That's us."*

### 2.3 Three paths (site backbone)

| Path | Who | What we do | Colour token | Icon |
|---|---|---|---|---|
| 🗂️ **Organise** | A running business with scattered tools (personal QR, WhatsApp chaos, Excel, directory listings) | Map how *you* work → design and build a custom system around it | `--path-organise` (Rani Pink) | `Kanban` |
| 🚀 **Launch** | A new business or idea, nothing set up | **Business deployment from scratch**: registrations, brand basics, domain, site/store, payments, WhatsApp, books — live and legal | `--path-launch` (Marigold) | `RocketLaunch` |
| 📈 **Grow** | Already online and selling | Build-up: international payments, dealer portals, direct ordering, automation, dashboards, new cities | `--path-grow` (Mehendi) | `TrendUp` |

### 2.4 Building blocks (always tailored)

Copy rule: every block name is followed by *"built for you"* or a tailoring example. Never "plans include Webify X" as if boxed.

| Block | Becomes, for you | Tailoring example | Colour | Icon |
|---|---|---|---|---|
| **Webify Site** | Your website, designed from scratch | Clinic: doctor timings. Mandi trader: daily rate board | Teal | `Globe` |
| **Webify Store** | Your catalogue, ordering or dealer portal | Kirana: repeat-order list. Manufacturer: dealer price tiers | Pink | `ShoppingBag` |
| **Webify Pay** | Payment flows into your bank | Razorpay/Cashfree for India, Stripe for overseas buyers, deposits, part-payments | Peacock | `CreditCard` |
| **Webify Chat** | WhatsApp workflows on your number | Restaurant: menu + table booking. Coaching: fee reminders | Mehendi | `ChatCircleDots` |
| **Webify Pulse** | A dashboard of *your* numbers | The 3–5 numbers the owner actually asks about | Indigo | `ChartLineUp` |
| **Webify Ledger** | GST invoices, payment matching, CA export | Invoice auto-created from every payment | Haldi | `Receipt` |
| **Webify File** | Registrations — **we file them for you** | GST, Udyam, IEC filed by us; UK VAT & EU IOSS coordinated with a registered overseas agent/intermediary | Marigold | custom `Stamp` |
| **Webify Desk** | Your CRM or ERP — leads, customers, orders, stock, follow-ups | Coaching: admissions pipeline. Manufacturer: orders → production → dispatch | Indigo | `Kanban` |
| **Webify Team** | Employee portal, HR and **role-based access** | Attendance, leave, tasks; staff see only what their role allows | Mehendi | `UsersThree` |
| **Webify Workspace** | Business email, docs, drive and calendars | Google Workspace or Microsoft 365 set up, or our own stack if you don't need either | Marigold | `Briefcase` |
| **Webify Connect** | The integration layer tying everything to your existing tools | Tally, Zoho, Odoo, Shiprocket, Google Sheets, webhooks | Dusk | `PlugsConnected` |

**Repeat line:** *"Eleven blocks. Endless combinations. One is yours."*

### 2.4a Five ways we build (shown on Home, How we work, Integrations, Pricing)

Every route ends in a system customised for one business. The route only changes **where we start** — and therefore the **setup cost and time**.

| Route | When we use it | Line | Setup cost | Icon |
|---|---|---|---|---|
| ⚡ **Adapt our prototype / existing stack** | Your need is close to something we've already built (8 prototypes, §9.10) | "Our proven base, rebuilt around you." | **Lowest** — starts at tier price | `Lightning` |
| ✂️ **From scratch** | Unique workflow, or you want no third-party licence costs | "Designed and coded only for you." | Quoted per scope | `Ruler` |
| 🧩 **On open source** | Standard ERP/CRM needs with custom screens on top (Odoo, ERPNext) | "Proven core. Your workflow on top." | Custom pricing | `PuzzlePiece` |
| 💸 **Budget route** | Tight budget, standard needs — configured Zoho / Odoo apps | "Ready apps, set up properly for you." | Custom pricing + vendor licence | `PiggyBank` |
| 🔗 **On what you already use** | You're on Google Workspace, Microsoft 365, Zoho or Tally | "We build around your tools, not over them." | Custom pricing + vendor licence | `PlugsConnected` |

Plus: 🏷️ **Your brand or ours** — every route can be white-labelled in the client's branding.

### 2.4b Integrations we work with

Zoho · Odoo · ERPNext · Tally · Google Workspace (Gmail, Drive, Sheets) · Microsoft 365 · WhatsApp Business API · Razorpay · Cashfree · Stripe · Shiprocket · Google Business Profile. (Wording: "works with" — never "partner".)

### 2.4c Webify Reach — marketing blocks

Small businesses rarely think about search, ads or AI assistants — yet that's where customers look first. Reach makes it simple and honest.

| Block | Plain promise | What we do | Honest caveat | Accent | Icon |
|---|---|---|---|---|---|
| **Reach Search** (SEO) | "Show up on Google when people search for what you sell." | Keyword plan · on-page SEO · speed · content · technical fixes · monthly report | Takes months; no guaranteed rank | Rani | `MagnifyingGlass` |
| **Reach Ads** (SEM & online ads) | "Ads that bring enquiries, not just clicks." | Google Search & Maps ads · Meta (Facebook/Instagram) ads · landing pages · conversion tracking to WhatsApp | Ad spend paid directly to Google/Meta | Marigold | `Target` |
| **Reach Local** | "Be the shop people find on the map." | Google Business Profile · Bing Places · Apple Maps · reviews flow · local citations · city pages | Platform rules apply | Mehendi | `MapPin` |
| **Reach AI** (AI visibility) | "When customers ask ChatGPT or Gemini, your business should be in the answer." | Structured data · `llms.txt` · consistent business info across the web · FAQ & answer-style content · AI-assistant visibility checks | No one can guarantee AI mentions; we improve the signals AI tools read | Indigo | `Sparkle` |
| **Reach Campaigns** | "Bring regulars back." | WhatsApp broadcasts (opt-in) · festival campaigns · social posting plan | WhatsApp/Meta message charges apply | Peacock | `MegaphoneSimple` |

**Why this matters (copy for the Marketing hub):** *"Your customers search on Google, check maps, scroll Instagram — and now ask AI assistants. Most small businesses are invisible in at least one of those places. Reach fixes that."*

✏️ SVGs: `SearchResultMock` (generic results page with your business card highlighted — no Google branding), `AiAnswerMock` (generic AI-assistant chat bubble that recommends "your business" — no ChatGPT/Gemini UI copied), `ReachFunnel` (Search · Maps · Ads · AI → your site → WhatsApp).

### 2.4d Webify Compass — strategy consulting (paid)

| Offer | What you get | Price |
|---|---|---|
| **Compass Session** | 60–90 min strategy call: goals, current tools, gaps, quick wins | ₹5,000 |
| **Compass Audit** | Written digital audit: website, payments, WhatsApp, tools, search & AI visibility | ₹15,000 |
| **Compass Roadmap** | Build-vs-buy recommendation (custom vs Zoho/Odoo vs Google/Microsoft), phased plan, budget ranges | ₹30,000 |

Rule: the **free** WhatsApp discovery chat stays free (it qualifies the need). Compass is the **paid**, deeper work. Default: Compass fees 100% credited against a setup signed within 60 days (`compassCreditable: true`).

### 2.5 Four promises (strip on Home, Pricing, About, footer)
1. ✂️ **Made for you** — no templates, ever.
2. 🔑 **Your business stays yours** — your domain, brand, content, data, payment account and WhatsApp number. Leave any day with a full data export.
3. ₹ **Start small, pay monthly** — setup from ₹5,000, one monthly plan that runs everything, no lock-in, no commission on your own customers.
4. 💬 **Always reachable** — we reply within a few hours, 7 days a week.

### 2.6 Voice
Warm, clear, professional English. Short sentences. Rupees, not jargon (every technical term gets a plain-words chip). Every claim carries its caveat. **Never frame other companies as rivals** — we fill gaps and work alongside them. Max one Hinglish accent per section.

---

## 3. Sales journey (shown on Home and How we work)

✏️ SVG **"Rangoli Road"** — a winding dotted road, each stop a coloured dot that fills as you scroll; Webu rides a scooter along it.

```
💬 WhatsApp hello
   → ☕ Free discovery chat ("chai-pe-charcha")
   → 🧪 Prototype walkthrough (shown privately)
   → 📏 We map your workflow
   → 📐 Written custom scope + price (on WhatsApp)
   → 🔗 Payment link shared on WhatsApp → start date locked
   → 🎨 Design → 🛠️ Build → ✏️ Revise
   → 🚀 Launch on Vercel
   → 🛟 Care & grow, month to month
```

---

## 4. WhatsApp CTA system

### 4.1 Component spec — extend existing `WhatsAppCta` in `components/icons.tsx` (or move to `components/WhatsAppCTA.tsx`)

| Prop | Type | Notes |
|---|---|---|
| `message` | string | Prefilled text (see §4.2). Passed to `waLink()` |
| `variant` | `"primary" \| "ghost" \| "dock" \| "float"` | |
| `label` | string | Default "WhatsApp us" |
| `context` | string | For analytics event `wa_click` with page + section |

Behaviour:
- **Primary:** `#25D366` background, ink text, WhatsApp glyph, 999px radius, jelly-squish on `:active` (scale .96 → 1.02 → 1, 250ms).
- **Desktop:** click opens WhatsApp Web in new tab; hover shows a small popover with a **QR code** (generated at build time, static SVG) + "Scan with your phone".
- **Float:** bottom-right bubble on desktop, appears after 30% scroll; soft pulse once every 12s; hidden when a primary CTA is in view.
- **Mobile:** centre button of the bottom dock (§7.4).
- Fire analytics event `wa_click {page, section, path}` (Vercel Analytics custom event).

### 4.2 Prefilled messages

| Location | Label | Message |
|---|---|---|
| Header / float / default | WhatsApp us | `Hi Webify Bharat! I'd like to discuss a custom solution for my business.` |
| Path: Organise | Organise my business | `Hi! My business is running and I want everything organised into one custom system.` |
| Path: Launch | Launch my business | `Hi! I'm starting a new business and need everything set up from scratch.` |
| Path: Grow | Help me grow | `Hi! My business is online and I want to scale it. Can we talk?` |
| Block page | Talk about [Block] | `Hi! I'm interested in Webify [Block] for my business.` |
| Block: Desk | Talk about a CRM/ERP | `Hi! I'd like a custom CRM/ERP for my business. Can we discuss?` |
| Block: Team | Talk about a staff portal | `Hi! I need an employee portal with role-based access for my team.` |
| Block: Workspace | Set up my workspace | `Hi! I need business email and docs set up (Google / Microsoft / your stack).` |
| Integrations page | Ask about [tool] | `Hi! We use [Zoho/Tally/Odoo/Google/Microsoft]. Can you build around it?` |
| Budget route | Show me the budget route | `Hi! I have a tight budget. Can you set up Zoho or Odoo for us?` |
| Strategy (Compass) | Book a strategy session | `Hi! I'd like a paid strategy session to plan my business's digital setup.` |
| Marketing hub | Help me get found | `Hi! I want more customers from Google, maps, ads and AI assistants.` |
| Reach Search | Talk about SEO | `Hi! I want my business to show up on Google.` |
| Reach Ads | Talk about ads | `Hi! I want to run Google / Meta ads that bring enquiries.` |
| Reach AI | Check my AI visibility | `Hi! Can you check how my business appears in ChatGPT and other AI assistants?` |
| Industry page | Talk about my [industry] | `Hi! I run a [industry] business and want to discuss a custom solution.` |
| City page | I'm in [City] | `Hi! I'm based in [City] and want to discuss my business.` |
| Prototype tile | Show me this prototype | `Hi! I'd like a walkthrough of the "[prototype name]" prototype.` |
| Prototype hub | Show me prototypes | `Hi! I'd like to see prototypes for a [industry] business.` |
| Pricing tier | Get my quote | `Hi! I'm interested in the [Tier] starting point. Can you scope it for me?` |
| Pricing estimator | Send this scope | Auto: `Hi! My rough scope: Path [x]; Tier [x]; Add-ons [list]; Estimated from ₹[x]. Please share an exact quote.` |
| Registration | Start my [filing] | `Hi! I want help with [GST] registration.` |
| Blog post | Ask about this | `Hi! I read "[title]" and have a question.` |
| 404 | WhatsApp us | `Hi! I was looking for something on your site and couldn't find it.` |

---

## 5. Ecosystem logos

### 5.1 Payments we set up for your business
<p>
  <img src="https://www.google.com/s2/favicons?domain=npci.org.in&sz=64" alt="UPI" height="32"> UPI &nbsp;
  <img src="https://cdn.simpleicons.org/razorpay" alt="Razorpay" height="32"> Razorpay &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=cashfree.com&sz=64" alt="Cashfree" height="32"> Cashfree &nbsp;
  <img src="https://cdn.simpleicons.org/stripe" alt="Stripe" height="32"> Stripe (international) &nbsp;
  <img src="https://cdn.simpleicons.org/paypal" alt="PayPal" height="32"> PayPal (on request)
</p>
<p>
  <img src="https://cdn.simpleicons.org/googlepay" alt="Google Pay" height="28"> GPay &nbsp;
  <img src="https://cdn.simpleicons.org/phonepe" alt="PhonePe" height="28"> PhonePe &nbsp;
  <img src="https://cdn.simpleicons.org/paytm" alt="Paytm" height="28"> Paytm &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=bhimupi.org.in&sz=64" alt="BHIM" height="28"> BHIM &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=rupay.co.in&sz=64" alt="RuPay" height="28"> RuPay &nbsp;
  <img src="https://cdn.simpleicons.org/visa" alt="Visa" height="28"> Visa &nbsp;
  <img src="https://cdn.simpleicons.org/mastercard" alt="Mastercard" height="28"> Mastercard &nbsp;
  <img src="https://cdn.simpleicons.org/americanexpress" alt="Amex" height="28"> Amex
</p>

### 5.2 What we build on
<p>
  <img src="https://cdn.simpleicons.org/vercel" alt="Vercel" height="28"> Vercel &nbsp;
  <img src="https://cdn.simpleicons.org/nextdotjs" alt="Next.js" height="28"> Next.js &nbsp;
  <img src="https://cdn.simpleicons.org/github" alt="GitHub" height="28"> GitHub &nbsp;
  <img src="https://cdn.simpleicons.org/cloudflare" alt="Cloudflare" height="28"> Cloudflare DNS
</p>

### 5.3 Channels & tools we connect
<p>
  <img src="https://cdn.simpleicons.org/whatsapp" alt="WhatsApp" height="28"> WhatsApp Business API &nbsp;
  <img src="https://cdn.simpleicons.org/google" alt="Google" height="28"> Google &nbsp;
  <img src="https://cdn.simpleicons.org/googlemaps" alt="Maps" height="28"> Maps / Business Profile &nbsp;
  <img src="https://cdn.simpleicons.org/googleanalytics" alt="GA" height="28"> Analytics &nbsp;
  <img src="https://cdn.simpleicons.org/instagram" alt="Instagram" height="28"> Instagram &nbsp;
  <img src="https://cdn.simpleicons.org/zoho" alt="Zoho" height="28"> Zoho &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=shiprocket.in&sz=64" alt="Shiprocket" height="28"> Shiprocket &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=tallysolutions.com&sz=64" alt="Tally" height="28"> Tally
</p>

### 5.3a Business software we build on or integrate
<p>
  <img src="https://cdn.simpleicons.org/odoo" alt="Odoo" height="28"> Odoo &nbsp;
  <img src="https://cdn.simpleicons.org/erpnext" alt="ERPNext" height="28"> ERPNext &nbsp;
  <img src="https://cdn.simpleicons.org/zoho" alt="Zoho" height="28"> Zoho &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=tallysolutions.com&sz=64" alt="Tally" height="28"> Tally &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=workspace.google.com&sz=64" alt="Google Workspace" height="28"> Google Workspace &nbsp;
  <img src="https://cdn.simpleicons.org/gmail" alt="Gmail" height="28"> Gmail &nbsp;
  <img src="https://cdn.simpleicons.org/googledrive" alt="Drive" height="28"> Drive &nbsp;
  <img src="https://cdn.simpleicons.org/googlesheets" alt="Sheets" height="28"> Sheets &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=64" alt="Microsoft 365" height="28"> Microsoft 365
</p>

### 5.4 Government portals we file on
<p>
  <img src="https://www.google.com/s2/favicons?domain=gst.gov.in&sz=64" alt="GST" height="24"> GST &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=udyamregistration.gov.in&sz=64" alt="Udyam" height="24"> Udyam &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=dgft.gov.in&sz=64" alt="DGFT" height="24"> DGFT (IEC) &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=gov.uk&sz=64" alt="HMRC" height="24"> UK VAT &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=europa.eu&sz=64" alt="EU" height="24"> EU IOSS
</p>

### 5.5 Marketplaces & apps we complement (greyscale, used only in Rent + Own sections)
<p>
  <img src="https://www.google.com/s2/favicons?domain=justdial.com&sz=64" alt="Justdial" height="24"> Justdial &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=sulekha.com&sz=64" alt="Sulekha" height="24"> Sulekha &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=indiamart.com&sz=64" alt="IndiaMART" height="24"> IndiaMART &nbsp;
  <img src="https://cdn.simpleicons.org/zomato" alt="Zomato" height="24"> Zomato &nbsp;
  <img src="https://cdn.simpleicons.org/swiggy" alt="Swiggy" height="24"> Swiggy &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=amazon.in&sz=64" alt="Amazon" height="24"> Amazon &nbsp;
  <img src="https://www.google.com/s2/favicons?domain=flipkart.com&sz=64" alt="Flipkart" height="24"> Flipkart
</p>

### 5.6 Logo implementation rules
- **Claude Code:** create `/public/images/logos/` and a `lib/logos.ts` map `{ id, name, file, group: "pay"|"build"|"channel"|"gov"|"marketplace", href? }`. Use local SVGs. The URLs above are previews only. Where an official SVG isn't available, render a **text wordmark chip** (Sora 600, 14px) — never hotlink favicons in production.
- Partners: greyscale + 70% opacity at rest → full colour on hover. Marketplaces & apps we complement (Justdial, Zomato, Amazon…): greyscale, 55% opacity, never crossed out, never framed as opponents.
- Wording: "Payments we set up", "Works with", "Compared to". Never "partner", "certified" or "official" unless true.
- Footer disclaimer (required).

---

## 6. Design system — "Rangoli Pro"

### 6.1 Principle
> **Calm canvas, colourful details.** A clean off-white base with professional type. Colour appears in tiles, icons, path bands, chips and **one bold "burst" section per page** (gradient background). Indian warmth without looking like a festival flyer.

### 6.2 Tokens — replace `:root` in `app/globals.css`

```css
:root {
  /* Base (professional canvas) */
  --surface: #FBFAF7;      /* off-white page */
  --surface-2: #F4F1EA;    /* alternate section */
  --card: #FFFFFF;
  --ink: #1B1030;          /* Kajal ink, body text */
  --ink-2: #4A4458;        /* secondary text */
  --muted: #6F6A7A;
  --line: #E7E2DA;

  /* Rangoli accents */
  --rani: #E6007E;         /* Rani Pink — Organise path, highlights, focus ring */
  --haldi: #FFB400;        /* Haldi — badges, "most chosen" (dark text only) */
  --peacock: #00A6A6;      /* Peacock — payments, trust */
  --indigo: #2B1E6B;       /* Indigo — headings on light, dark sections */
  --marigold: #FF6B00;     /* Marigold — Launch path */
  --mehendi: #4F8A10;      /* Mehendi — Grow path, success */
  --blush: #FFF0F6;        /* soft pink tint */
  --wa: #25D366;           /* WhatsApp — primary CTA ONLY */

  /* Tints for tile backgrounds (8–10% of accent) */
  --rani-tint: #FDE6F2;  --haldi-tint: #FFF4D6;  --peacock-tint: #DDF5F5;
  --indigo-tint: #ECE9F6; --marigold-tint: #FFEBDD; --mehendi-tint: #E9F2DE;

  /* Paths */
  --path-organise: var(--rani);
  --path-launch: var(--marigold);
  --path-grow: var(--mehendi);

  /* Gradients (burst sections only) */
  --g-holi: linear-gradient(120deg, #E6007E 0%, #FF6B00 55%, #FFB400 100%);
  --g-peacock: linear-gradient(135deg, #00A6A6 0%, #2B1E6B 100%);
  --g-mehendi: linear-gradient(135deg, #4F8A10 0%, #00A6A6 100%);
  --g-dusk: linear-gradient(135deg, #2B1E6B 0%, #E6007E 100%);

  /* Shape */
  --radius-sm: 12px; --radius: 20px; --radius-lg: 28px;
  --shadow-soft: 0 12px 32px rgba(27, 16, 48, 0.08);
  --shadow-sticker: 4px 4px 0 var(--ink);   /* used sparingly: CTA tiles, path cards */

  /* Type (keep repo fonts) */
  --font-display: var(--font-sora), Arial, Helvetica, sans-serif;
  --font-body: var(--font-manrope), Arial, Helvetica, sans-serif;
  --font-mono: var(--font-jetbrains), ui-monospace, monospace;
}
```

**Colour rules**
- Max **2 accent colours per viewport** (plus WhatsApp green on CTAs).
- Gradients only in: hero band (Home), one burst section per page, pre-footer CTA band.
- Haldi always with ink text. Body text never on gradients smaller than 18px.
- Each page has a **lead accent** (§9 page headers list it).

### 6.3 Typography

| Role | Font | Size (desktop / mobile) | Weight |
|---|---|---|---|
| H1 | Sora | 56 / 36 | 700, letter-spacing -0.02em |
| H2 | Sora | 40 / 28 | 700 |
| H3 | Sora | 24 / 20 | 600 |
| Kicker / chip | Manrope | 13, uppercase, 0.08em | 700 |
| Body | Manrope | 18 / 16 | 500, line-height 1.6 |
| Small | Manrope | 14 | 500 |
| Numbers, prices | JetBrains Mono | as context | 600 |
| Hinglish accent | Sora italic, accent colour | 20 / 18 | 600 |

**Approved Hinglish sprinkles (one per section max):**
"Aapka business. Aapke hisaab se." · "Chai-pe-charcha" (discovery chat) · "Seedha hisaab" (pricing) · "Har business alag hai" (CTA band) · "Chalo, shuru karein" (final CTA) · "Poochho" (FAQ kicker) · "Yeh page kho gaya" (404). Always followed or preceded by English meaning on the same screen.

### 6.4 Grid

| Breakpoint | Columns | Gutter | Container |
|---|---|---|---|
| `<640` | 4 | 16px | 100% − 32px |
| `640–1023` | 8 | 24px | 100% − 48px |
| `1024–1439` | 12 | 32px | 1200px |
| `≥1440` | 12 | 40px | 1320px |

Section vertical rhythm: 96px desktop / 64px mobile. Alternate `--surface` and `--surface-2` backgrounds.

### 6.5 Grid patterns

| Pattern | Spec | Used on |
|---|---|---|
| **Bento-9** | 1×(2×2), 2×(2×1), 1×(1×2), 5×(1×1) on 4-col × 4-row desktop grid; stacks on mobile | Home blocks, Blocks hub, Grow |
| **Path triptych** | 3 equal tall cards with coloured top band | Home, Pricing, About, 404 |
| **Sticker grid** | 3–4 up, cards with tint background; ±1.5° rotation **only on hover** (stays professional) | Pains, values, industries |
| **Flip grid** | 4×2 flip cards | Home "Which one are you?", block pages |
| **Ticket row** | 3 tickets + 1 custom, perforated left edge (CSS mask) | Pricing, Home teaser |
| **Honeycomb** | Hex tiles, 6–12 | Integrations, capabilities, "Why us" |
| **Zig-zag** | Alternating image/text rows | Organise, About, Systems pages |
| **Masonry** | Variable-height teasers | Prototype Room |
| **Tabbed showcase** | Tabs left (col 1–4), preview right (col 5–12) | Systems hub, Organise, Grow |
| **Kanban strip** | 3 columns: To share · We prepare · Live | How we work, Launch |

### 6.6 Tile catalogue

| Tile | Anatomy | Hover / interaction |
|---|---|---|
| 🟦 **PathCard** | Colour top band (8px) · icon in tint circle · path name · "for you if…" · 3 outcomes (✓) · WhatsApp CTA | Lift 4px, band grows to 12px, icon wobble |
| 🟦 **BlockTile** | Duotone icon · block name · "Built for you to…" · 2 tailoring chips | Corner sticker-peel, colour tint deepens |
| 🟦 **FlipCard** | Front: emoji/icon + owner's pain (quote style). Back: blocks we'd combine + CTA | Flip on hover (desktop), tap (mobile), Enter/Space (keyboard) |
| 🟦 **IndustryTile** | Industry colour tint · icon · name · 3 block chips | Lift + icon colour fill |
| 🟦 **CityTile** | Skyline glyph SVG · city · state · local greeting (small, italic) | Skyline draws |
| 🟦 **PrototypeTeaser** | Illustrated mock (or blurred screenshot later) · industry chip · name · "What it shows" chips · 🔒 "Walkthrough on WhatsApp" · CTA | Blur lifts slightly, lock icon bounces |
| 🟦 **TierTicket** | Stage name · **monthly price (mono, large)** · setup line (small) · 4 key limits · + GST · included features · popular add-ons with prices · "Custom extras: quoted" · CTA | Lift; "Most chosen" ribbon on Business |
| 🟦 **AddonChip** | Name · price · ✚ toggle | Toggles into estimator tray |
| 🟦 **FilingTile** | Portal logo · filing · our fee · govt fee · CTA | Stamp icon thumps |
| 🟦 **ArticleTile** | Image · category chip · read time · title | Image zoom 1.03 |
| 🟦 **PromiseOrb** | Circle with gradient ring · icon · 3-word promise | Ring rotates once |
| 🟦 **HexTile** | Icon/logo · one-word role | Fill colour on hover |

Base tile: `--card` background, 1px `--line` border, `--radius`, `--shadow-soft`. Path and CTA tiles may use `--shadow-sticker`.

### 6.7 Slides & carousels

| Component | Behaviour | Where |
|---|---|---|
| 🎞️ **HeroDevices** | Phone + laptop frames cycling 3 illustrated custom builds; crossfade 6s; Caveat-style note "built for a sweet shop" | Home hero |
| 🎞️ **PathSwitcher** | 3 tabs (Launch/Organise/Grow); panel slides horizontally; URL hash sync | Home, Pricing |
| 🎞️ **StoryRail** | Instagram-style; progress ticks; tap/arrow to advance; 8s auto only if visible | Prototype teaser, "A day in your business" |
| 🎞️ **BeforeAfter** | Drag handle; left tangled workflow SVG, right clean system | Home, Organise, industries |
| 🎞️ **LaunchCountdown** | Horizontal day cards Day 0 → Launch | Launch |
| 🎞️ **RentOwnStepper** | 3 steps with dots; keyboard arrows | Block pages, industries |
| 🎞️ **Marquee2Lane** | Two logo rows opposite directions, 40s loop, pause on hover | Home, Blocks, Pricing |
| 🎞️ **Deck** | Mobile fallback for grids >4 items: swipe stack | All grids on mobile |

All: visible pause control where auto-playing, swipe on touch, static under `prefers-reduced-motion`.

### 6.8 Motion

| Name | Spec | Where |
|---|---|---|
| Reveal | opacity 0→1, translateY 16→0, 420ms ease-out, 60ms stagger | All sections |
| Rangoli draw | SVG stroke-dashoffset, 1.6s, once | Home hero, burst section headers |
| Block snap | Block tiles slide in and stack with 6px overshoot | Home bento, estimator tray |
| Sticker peel | Corner pseudo-element rotates 8° | BlockTile hover |
| Flip | rotateY 180°, 500ms | FlipCard |
| Number roll | Odometer digits, 900ms | Prices in estimator |
| Line draw (scroll-linked) | Road, money path, connect hub | How we work, Pay block |
| Scooter ride | Webu scooter follows road path via scroll progress | How we work, Home road |
| Gulal burst | 24 colour particles, 700ms, from WhatsApp CTA on click | Primary CTAs only |
| Jelly | Button press | CTAs |
| Wobble | Icon rotate ±3° | Tile hover |

Rules: `transform`/`opacity` only · ≤3 simultaneous · ≤600ms except draws · disable all under `prefers-reduced-motion` · use CSS + IntersectionObserver (extend `components/Motion.tsx`); no heavy animation libraries.

### 6.9 Icons
- **Library:** `@phosphor-icons/react`, **duotone** weight, size 24/32/48; secondary tone = section accent at 30%.
- **Custom SVG icons** (`components/icons/india/*.tsx`): UPI arrow, rupee coin, rupee-with-slash (no per-lead fee), kirana shop, chai cup, scooter, diya, rangoli dot, GST stamp, Udyam badge, mandi scale, auto-rickshaw, tailor's tape.

**Icon map**

| Concept | Icon | Concept | Icon |
|---|---|---|---|
| Organise | `Kanban` | Launch | `RocketLaunch` |
| Grow | `TrendUp` | Custom/tailored | custom tailor's tape |
| Site | `Globe` | Store | `ShoppingBag` |
| Pay | `CreditCard` + UPI arrow | Chat | `ChatCircleDots` |
| Pulse | `ChartLineUp` | Ledger | `Receipt` |
| File | custom stamp | Connect | `PlugsConnected` |
| Desk (CRM/ERP) | `Kanban` | Team (staff portal) | `UsersThree` |
| Workspace | `Briefcase` | Role-based access | `UserCircleGear` |
| From scratch | `Ruler` | Open source | `PuzzlePiece` |
| Budget route | `PiggyBank` | White-label | `Tag` |
| Fast reply | `ClockCountdown` | 7 days a week | `CalendarDots` |
| Strategy | `Compass` | Systems | `SquaresFour` |
| Marketing | `Megaphone` | Care | `Lifebuoy` |
| SEO | `MagnifyingGlass` | Ads / SEM | `Target` |
| Local | `MapPin` | AI visibility | `Sparkle` |
| Campaigns | `MegaphoneSimple` | Gap / bridge | `Bridge` (custom) |
| Ownership | `Key` | No per-lead fee | custom ₹-slash |
| International | `GlobeHemisphereWest` | Prototype | `Flask` |
| Private walkthrough | `LockKey` | Discovery chat | custom chai cup |
| Scope | `Ruler` | Design | `PaintBrush` |
| Revise | `PencilSimpleLine` | Launch day | `Confetti` |
| Care | `Lifebuoy` | Hosting (Vercel) | `CloudArrowUp` |
| Speed | `Lightning` | Security | `ShieldCheck` |
| Phone | `PhoneCall` | Email | `EnvelopeSimple` |
| Location | `MapPin` | Calendar | `CalendarCheck` |
| Retail | `Storefront` | Restaurant | `ForkKnife` |
| Healthcare | `FirstAidKit` | Education | `GraduationCap` |
| Real estate | `Buildings` | Manufacturing | `Factory` |
| Salon | `Scissors` | Gym | `Barbell` |
| CA / legal | `Scales` | Events | `Sparkle` |
| Exporter | `Boat` | NGO | `HandHeart` |

### 6.10 SVG & illustration library (`components/svg/*.tsx`, inline, <15 KB each)

| # | Component | Description | Pages |
|---|---|---|---|
| 1 | `RangoliMandala` | 8-petal pattern, each petal a block colour; draws on load | Home hero bg |
| 2 | `BlockStack` | 11 blocks with icons; `highlight` prop for selected blocks | Home, Blocks, Pricing, block pages |
| 3 | `PathFork` | One road splitting into 3 coloured lanes | Home, About, 404 |
| 4 | `RangoliRoad` | Winding road with stops (§3), scooter | Home, How we work |
| 5 | `MoneyPath` | India: UPI/cards → Razorpay/Cashfree → your bank. Abroad: cards → Stripe → your bank. Branch → Ledger invoice | Pay block, Pricing extras |
| 6 | `ChatFlow` | WhatsApp bubble tree: menu · booking · reminder · human | Chat block |
| 7 | `OwnerDashboard` | 3 KPI cards + sparkline + "stuck" list; "Sample" chip | Pulse block, Grow |
| 8 | `InvoiceFan` | GST invoices fanning out | Ledger block |
| 9 | `FilingStamp` | Rubber stamp "FILED · gst.gov.in" | File block, Registrations |
| 10 | `ConnectHub` | Centre hub, spokes to Tally/Zoho/Sheets/Shiprocket/WhatsApp | Connect block, Organise, Grow |
| 11 | `LaunchRocket` | Rocket rising past milestones | Launch |
| 12 | `GrowthTree` | Branches labelled with growth moves | Grow |
| 13 | `TangledVsClean` | Left tangled lines (QR, Excel, chats, directory), right clean stack | Home, Organise |
| 14 | `RentLadder` | Listing → Lead pack → Ads, coins falling | Block pages, industries, blog |
| 15 | `IndiaDotMap` | 33 dots (from `cities.ts`), pulse west→east, clickable | Cities, About |
| 16 | `CitySkyline` | One-line landmark glyph per city (start with top 10; generic skyline fallback) | City tiles + heroes |
| 17 | `TailorTape` | Measuring tape wrapping a shopfront — "custom" metaphor | Home, How we work, About |
| 18 | `BlueprintGrid` | Blue grid bg with handwritten notes | Prototype Room |
| 19 | `MockScreen` | Illustrated phone/laptop UI mocks per prototype (§9.10) | Prototype Room, Home hero |
| 20 | `Webu` | Mascot, 7 states (§6.12) | Everywhere |
| 21 | Dividers | `WaveDivider`, `MarigoldGarland`, `BlockPrint`, `JaaliBand` | Section breaks (max 1 per page) |
| 22 | `PipelineBoard` | CRM kanban: Enquiry → Demo → Quote → Won, cards sliding between columns | Desk block, coaching & manufacturer pages |
| 23 | `AccessLayers` | Concentric shields: Owner sees all · Manager sees team · Staff sees own tasks | Team block, Desk block |
| 24 | `FiveRoutes` | 5 roads (our prototype / scratch / open source / budget / your tools) meeting at one shop; the prototype road is shortest | Home, How we work, Integrations |
| 25 | `WhiteLabelSwap` | Same screen toggling between "Your Brand" and "Webify" logo placeholders | Home one-stop section, About |
| 26 | `OneStopWheel` | 11 block icons on a rangoli wheel around the business owner | Home, About |
| 28 | `PlatformLayers` | Platform → Your software → We run & grow it; client logo slot on middle layer | Home, About, Integrations |
| 29 | `GapBridge` | Left bank: app logos (greyscale chips). Right bank: an MSME shopfront. Webify is the bridge with 4 pillar planks | Home "the gap", About |
| 30 | `FourPillars` | Four temple-style pillars (Strategy, Systems, Marketing, Care) holding up a shopfront roof | Home, mega-menu |
| 31 | `SearchResultMock` | Generic search results, your business card highlighted (no real brand UI) | Reach Search, Marketing hub |
| 32 | `AiAnswerMock` | Generic AI-assistant chat answer recommending "your business" (no real brand UI) | Reach AI, Marketing hub, Home |
| 33 | `ReachFunnel` | Search · Maps · Ads · AI → your site → WhatsApp | Marketing hub, Grow |
| 27 | Collage masks | Petal, arch (jharokha), rounded-blob and polaroid frames as SVG `clipPath`s | All collages (§16) |

### 6.11 Data visualisation

| Viz | Shows | Where | Notes |
|---|---|---|---|
| `RentVsOwnChart` | 12-month cost: renting (lead packs/commission, user input) vs owning (one-time + care) | Pricing, Grow, block pages, restaurant/retail pages | User enters *their* numbers; no defaults pretending to be facts. Extend existing `ComparisonChart` |
| `EstimateBar` | "From ₹X" band + custom-extras marker | Pricing estimator | Number roll |
| `MiniGantt` | Phases with typical week ranges | How we work, Launch | Label "Typical — depends on scope". Ranges `TODO` owner |
| `ReadinessMeter` | Launch checklist % | Launch | Interactive checkboxes |
| `FeeDonut` | Our fee vs govt fee vs gateway fee | Registrations, Pricing extras | Real fees from `registrations.ts`; gateway as "billed by provider" |
| `OwnerDashboard` | Sample KPIs | Pulse, Grow | "Sample data" chip mandatory |
| `IndiaDotMap` | Cities covered | Cities, About | |

### 6.12 Webu (mascot)
A friendly chai cup with a peacock-feather tuft, rangoli dot cheeks. Flat, 2px ink outline, accent fills.

| State | Use |
|---|---|
| Waving | Pre-footer CTA band, Contact hero |
| Pointing | Next to key CTAs (max once per page) |
| Thinking | Estimator idle, empty states |
| Building (spanner) | Loaders (`loading.tsx`), "coming soon" slots |
| Scooter | RangoliRoad |
| Curtain | Prototype Room hero |
| Torch | 404 |
| Celebrating | After WhatsApp click toast ("Opening WhatsApp…") |

Format: inline SVG components, each <10 KB; optional subtle idle animation (blink every 6s), off under reduced-motion.

---

## 7. Global header

### 7.1 Utility ribbon (32px, `--indigo` bg, white text, dismissible, remembers in `localStorage`)
> ✂️ **Every build is custom-made for one business — yours.** `WhatsApp us →`

### 7.2 Main nav (72px → 56px on scroll, white with blur, bottom border `--line`)

| Left | Centre | Right |
|---|---|---|
| Logo (`BrandLogo`) — mark petals rotate once on load | **What we do ▾** · **Who it's for ▾** · **How we work** · **Pricing** · **Prototypes** · **Resources ▾** | small text "Replies in a few hours · 7 days" (desktop ≥1280 only) · `💬 WhatsApp us` (primary) |

Scroll progress line under header: 2px `--g-holi`.

### 7.3 Mega-menus (white panel, 3 columns, 24px radius, soft shadow)

**Who it's for ▾**
| By stage | By industry | Anywhere in India |
|---|---|---|
| PathCard-mini ×3: Launch · Organise · Grow (colour band, icon, one line) | 7 featured trades with icons + "Any other business → we build for it too" | "Fully remote over WhatsApp" + top 8 cities + "All 33 cities →" + mini `IndiaDotMap` |

**What we do ▾** (first menu — the anti-confusion menu) — 4 columns, one per pillar, each with a small photo header (reused, tinted):
| 🧭 Strategy | 🧱 Systems | 📣 Marketing | 🛟 Care |
|---|---|---|---|
| Compass Session · Audit · Roadmap → `/strategy` | 11 blocks grouped: *Sell & get paid* (Site, Store, Pay) · *Talk* (Chat) · *Run the business* (Desk, Team, Workspace, Ledger, File) · *See & connect* (Pulse, Connect) → `/systems` | Search (SEO) · Ads & SEM · Local · AI visibility · Campaigns → `/marketing` | What's included → `/pricing#care` |
Bottom strip: *"Works with Zoho · Odoo · Tally · Google · Microsoft"* → `/integrations`

**Resources ▾** — Integrations · Blog · Registrations · FAQ · Commission calculator (`/pricing#rent-vs-own`) · About

### 7.4 Mobile
- Top bar: logo + menu (full-screen sheet with accordion sections).
- **Bottom dock** (64px, white, top border): Home · What we do · **💬 (centre, raised 12px, WhatsApp green circle)** · Pricing · Menu.
- Float bubble hidden on mobile (dock replaces it).

---

## 8. Global footer

🧱 **Pre-footer CTA band** (`--g-dusk`, `WaveDivider` top, Webu waving)
> **"Every business is different. Yours deserves a system built for it."**
> *Har business alag hai.*
> `💬 WhatsApp us` · *We reply within a few hours, 7 days a week.*
> Background: faint `BazaarStrip` of market photos at 12% opacity under the gradient.

🧱 **Footer** (`--indigo` bg, white/70% text)

| Column | Links |
|---|---|
| What we do | Strategy · Systems · Marketing · Care |
| Solutions | Launch · Organise · Grow · How we work |
| Systems | Site · Store · Pay · Chat · Desk · Team · Workspace · Ledger · File · Pulse · Connect · Integrations |
| Marketing | SEO · Ads & SEM · Local · AI visibility · Campaigns |
| Industries | 6 + "All industries" |
| Cities | "Pan-India, remote" + top 10 + "All cities" |
| Company | About · Prototypes · Pricing · Registrations · Blog · FAQ · Contact |
| Legal | Terms · Privacy · Refund |

🧱 **Strips**
1. "Payments we set up" — logo row §5.1 (greyscale → colour on hover)
2. "Built on" — Vercel · Next.js
3. Business details from `BUSINESS` in `lib/site.ts` (legal name, address, GSTIN, Udyam) — **TODO: owner to fill GSTIN, Udyam, phone placeholders; hide fields that are still placeholders**
4. "Made in Kolkata for all of Bharat 🇮🇳" · © year · trademark disclaimer: *"All trademarks belong to their owners and are shown only to indicate compatibility or comparison."*

---

## 9. Pages

### 9.0 Site map & routes

| Route | Page | Action |
|---|---|---|
| `/` | Home | Rebuild |
| `/solutions/organise` | Organise path | **New** |
| `/solutions/launch` | Launch path | **New** |
| `/solutions/grow` | Grow path | **New** |
| `/how-we-work` | Process | **New** |
| `/systems` | Systems hub (the 11 blocks) | Move from `/services` |
| `/systems/[slug]` | 11 block pages (`site`, `store`, `pay`, `chat`, `pulse`, `ledger`, `file`, `desk`, `team`, `workspace`, `connect`) | Move + add `file`, `desk`, `team`, `workspace`, `connect` |
| `/integrations` | Integrations & five ways we build | **New** |
| `/strategy` | Webify Compass — paid strategy consulting | **New** |
| `/marketing` | Webify Reach hub | **New** |
| `/marketing/[slug]` | `seo`, `ads`, `local`, `ai-visibility`, `campaigns` | **New** |
| `/what-we-do` | Four pillars overview (also the target of "What we do" on mobile) | **New** |
| `/industries`, `/industries/[slug]` | Industries | Rebuild: 6 existing + **`exporters`** (new); model ready for more |
| `/cities`, `/cities/[slug]` | Cities | Restyle + greetings |
| `/pricing` | Pricing + estimator + Rent + Own | Rebuild |
| `/pricing/[slug]` | `starter`, `business`, `command` | Rename |
| `/prototypes` | Prototype Room | Replaces `/work` |
| `/registrations`, `/registrations/[slug]`, `/registrations/charges` | Filings | Restyle |
| `/about` | About | Rebuild |
| `/blog`, `/blog/[slug]` | Blog | Restyle |
| `/faq` | FAQ | **New** (from `lib/faqs.ts`) |
| `/contact` | Contact (WhatsApp-only) | Rebuild, remove `ContactForm` |
| `/terms`, `/privacy`, `/refund` | Legal | Restyle + summaries |
| `not-found` | 404 | Rebuild |
| `/showcase` | Public case studies | **Later** (not built now) |

**Redirects — add to `next.config.ts`:**
```ts
async redirects() {
  return [
    { source: "/services", destination: "/systems", permanent: true },
    { source: "/services/websites", destination: "/systems/site", permanent: true },
    { source: "/services/ecommerce", destination: "/systems/store", permanent: true },
    { source: "/services/payments", destination: "/systems/pay", permanent: true },
    { source: "/services/whatsapp", destination: "/systems/chat", permanent: true },
    { source: "/services/analytics", destination: "/systems/pulse", permanent: true },
    { source: "/services/compliance", destination: "/systems/ledger", permanent: true },
    { source: "/work", destination: "/prototypes", permanent: true },
    { source: "/solutions/build", destination: "/solutions/organise", permanent: true },
    { source: "/how-we-build", destination: "/how-we-work", permanent: true },
    { source: "/pricing/launch", destination: "/pricing/starter", permanent: true },
    { source: "/pricing/growth", destination: "/pricing/business", permanent: true },
  ];
}
```
Update `app/sitemap.ts`, internal links, `lib/page-seo.ts`, and `public/llms.txt`.

---

### 9.1 🏠 Home `/` — lead accent: Rani · burst: hero

> 🖼️ Images & collages for this page: see §16.4.

**Goal:** In 5 seconds: *they build and run software and marketing for businesses like mine; they work with the tools I know; I message them on WhatsApp.*

**Image rule for Home:** every section except FAQ carries a photo element (reused pool, §16.5). Target ≥ 14 photo placements, from ≤ 12 unique files. Home has **17 sections** — do not add more; new ideas go to inner pages.

| # | Section | Layout | Content | Visual / images / motion |
|---|---|---|---|---|
| 1 | **Hero** | 12-col: copy 1–6, collage 7–12 | Kicker: `ONE-STOP SOFTWARE & MARKETING PARTNER FOR INDIAN BUSINESSES` · **H1: "Custom software for your whole business. All in one place."** · Accent: *Aapka business. Aapke hisaab se.* · **Sub = category sentence (§2.0.1)** · CTAs: `💬 WhatsApp us` + ghost `What we do →` · Trust chips: ✂️ Custom, not templates · 🤝 Works with Zoho, Google, Microsoft, Tally · 💬 Replies in a few hours, 7 days | `RangoliCollage`: IMG-H01 large + H02, H03, H04, H05 · `FloatingUiSticker`s: "UPI received ✅", "New lead from Google", "Mentioned by AI assistant ✨" |
| 2 | **What we are / aren't** | Thin 2-column strip directly under hero | §2.0.3 (3 rows each, short) | Small round photo crops (existing `snapshots/contact`, `snapshots/services`) at strip ends |
| 3 | **Four pillars** | 4 tall cards (pillar colour top band, photo header 16:9) | H2: **"Four things we do. All made for your business."** · Strategy / Systems / Marketing / Care — one line + 4 inside-chips + link each | Photo headers: Strategy = existing `snapshots/work` · Systems = IMG-B09 · Marketing = IMG-B01 · Care = IMG-R05 · `FourPillars` SVG behind heading |
| 4 | **The gap — burst** (absorbs the bazaar strip) | Full-bleed Holi band | H2: **"The tools are great. The gap is everything in between. That's us."** · `GapBridge` SVG · 5 gap rows from §2.0.2 as compact chips | `BazaarStrip` of the 7 market photos running along the bottom edge of the band (full opacity, 120px tall) |
| 5 | **Three paths** | Path triptych with photos | H2: **"Where is your business today?"** · Launch (IMG-P02) · Organise (IMG-P01) · Grow (IMG-P03) · each card lists the pillars it uses as chips | Path-colour tint 15% |
| 6 | **Systems bento** | Bento | H2: **"Your own software. Eleven blocks, built to fit."** · `BlockStack` 2×2 · photo cells IMG-B03 (Pay), IMG-B09 (Desk), IMG-B10 (Team) · icon cells for the rest | Block snap |
| 7 | **Marketing spotlight** | Split: left `AiAnswerMock` + `SearchResultMock` stacked; right copy | Kicker: `NEW FOR MOST SMALL BUSINESSES` · H2: **"Customers now ask Google, maps — and AI. Be the answer."** · 5 Reach chips (Search, Ads, Local, AI, Campaigns) · line: *"No guaranteed rankings — just the right work, done consistently."* · CTA `Help me get found` | Behind mocks: `PhotoUiLayer` with IMG-B01 (woman searching on phone) |
| 8 | **Which one are you?** | Flip grid 4×2, photo fronts | 7 trades + Office/team · back: pillars + blocks we'd use | IMG-I-*-2 squares + IMG-B11 |
| 9 | **Strategy first** | Zig-zag row | H2: **"Not sure what you need? Start with a strategy session."** · Compass Session / Audit / Roadmap · *"Paid, practical, no sales pitch."* · CTA `Book a strategy session` | `ArchWindows`: existing `snapshots/work`, `snapshots/pricing`, IMG-R03 |
| 10 | **Five ways we build** | 5 tiles + `FiveRoutes` | Adapt our prototype · From scratch · Open source · Budget route · Your existing tools · *"We work with your tools, not against them."* | Tile photo thumbs: IMG-B08, A02, B09, N01 crop, B11 |
| 11 | **How it works** | Road | `RangoliRoad` (7 stops) with circular photo thumbs | IMG-R01, existing `snapshots/work`, R03, R04, R05 |
| 12 | **Prototype teaser** | StoryRail (8) | *"We've already built for businesses like yours. Ask to see."* | Illustrated mocks |
| 13 | **Pricing teaser** | Ticket row (4) | Starter ₹3,000/mo · **Business ₹7,500/mo** · Command ₹18,000/mo · Custom from ₹40,000/mo · each with "setup ₹5,000 / ₹10,000 / ₹15,000" · line: *"Start small. No lock-in. + GST."* · strip: *"Using Zoho, Google or Microsoft? Standard setup ₹0."* | Ticket tops use tinted photo strips |
| 14 | **Why Webify** | `PhotoBento` | Custom · Works with your tools · White-label (free) · Your data stays yours · Honest pricing · Replies in a few hours, 7 days | IMG-B11 large + IMG-B05, existing `snapshots/registrations` |
| 15 | **Proof slot** | Wide tile | Webu + *"Our first client stories are being written. Want yours featured?"* | — |
| 16 | **Mini FAQ** | Accordion (6) | Are you competing with Zoho/Google? · Do you use templates? · Is strategy paid? · Can you guarantee Google/AI rankings? · Do I own it? · Reply time? | — |
| 17 | **Pre-footer band** | §8 | | |

---

### 9.1a 🧩 What we do `/what-we-do` — lead accent: Rani · burst: gap

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content | Visual / images |
|---|---|---|---|
| 1 | Hero | **H1: "Plan it. Build it. Run it. Grow it."** · category sentence · CTA | `PhotoBento`: 4 cells = 4 pillar photos (same as Home §3) |
| 2 | The gap | §2.0.2 full table as 5 illustrated rows (app logos greyscale → bridge → shopfront) | `GapBridge` |
| 3 | Pillar deep-dives (4 zig-zag rows) | Each: what it is · who it's for · 4 inside-chips · price note · link | Arch photo per pillar (reuse) |
| 4 | Platform layers | §2.0.4 in plain words, with glossary chips | `PlatformLayers` |
| 5 | We are / we're not | §2.0.3 | — |
| 6 | Works with | Logo honeycomb (greyscale→colour) | — |
| 7 | CTA | *"Tell us where you are. We'll tell you which pillar to start with."* | Webu pointing |

### 9.2 🗂️ `/solutions/organise` — lead accent: Rani · burst: Before/After

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content | Visual |
|---|---|---|---|
| 0 | Pillars used | Chips under hero: 🧭 Strategy (optional) · 🧱 Systems · 🛟 Care | — |
| 1 | Hero | Kicker `ORGANISE` · **H1: "Your business already works. Let's make your tools work the same way."** · Sub: *"We map how you sell, collect and follow up — then build one system around it."* · CTA: `Organise my business` | `TangledVsClean` (right side) |
| 2 | Pain sticker grid (6) | Payments on a personal QR · Orders lost in WhatsApp · Paying for leads who already know you · Excel nobody updates · GST week panic · Five logins, no answers | Rani tint tiles, icons |
| 3 | Burst: Before/After | Owner's day today vs with a custom system | `BeforeAfter` |
| 4 | How we tailor — zig-zag (3) | *We sit with your team* · *We design for your counter, not a demo* · *We connect what you already use* | Photos from `/public/images/real/*` + `ConnectHub` |
| 5 | Typical combinations — tabbed showcase | Tabs: Kirana · Clinic · Restaurant · Manufacturer · Coaching; right panel: `BlockStack` with highlighted blocks + 3 bullets "for this business we'd…" | Caption: *"Starting points. Yours will be different."* |
| 6 | Rent + Own chart | User inputs | `RentVsOwnChart` |
| 7 | CTA band | *"Show us how you work. We'll show you what we'd build."* | Webu pointing |

---

### 9.3 🚀 `/solutions/launch` — lead accent: Marigold · burst: countdown

> 🖼️ Images & collages for this page: see §16.4.

**Business deployment from scratch.**

| # | Section | Content | Visual |
|---|---|---|---|
| 0 | Pillars used | Chips: 🧭 Strategy · 🧱 Systems · 📣 Marketing (Reach Local + Search) · 🛟 Care | — |
| 1 | Hero | Kicker `LAUNCH` · **H1: "From idea to open-for-business. We set up all of it."** · Sub: *"Registrations, brand, website, payments, WhatsApp and books — ready on launch day."* · CTA `Launch my business` | `LaunchRocket` |
| 2 | Launch checklist + `ReadinessMeter` | 🧾 Registrations — GST, Udyam, IEC if exporting (File) · 🏷️ Name, logo, brand basics · 🌐 Domain + business email · 🖥️ Custom website or store (Site/Store) · 💳 Payment gateway account + KYC help — Razorpay/Cashfree, Stripe for abroad (Pay) · 💬 WhatsApp Business number + workflows (Chat) · 📍 Google Business Profile + Maps · 📒 Invoicing from day one (Ledger) · 📊 Owner dashboard (Pulse) | Ticking fills meter; each item shows the block chip |
| 3 | Burst: Launch countdown | Marigold→Haldi gradient. Day cards: Chat → Registrations filed → Brand ready → Site preview → Payments live → **Launch day 🎉**. Durations `TODO` owner (show "depends on approvals") | `LaunchCountdown` |
| 4 | One team instead of six | Sticker tiles: Designer · Developer · Gateway setup · WhatsApp vendor · SEO person · IT/email setup → arrow → Webify · footnote: *"We work alongside your CA — we don't replace them."* | Tiles collapse into one on scroll |
| 5 | Who it's for | First-time founders · Home businesses going formal · New exporters · New branches/franchises · Side-projects turning real | Icon chips |
| 6 | Fee transparency | Our fee vs govt fee (paid in your name) vs gateway fees (billed by provider) | `FeeDonut` |
| 7 | CTA band | *"Chalo, shuru karein. Tell us your idea."* | Webu celebrating |

---

### 9.4 📈 `/solutions/grow` — lead accent: Mehendi · burst: growth branches

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content | Visual |
|---|---|---|---|
| 0 | Pillars used | Chips: 📣 Marketing · 🧱 Systems · 🧭 Strategy | — |
| 1 | Hero | Kicker `GROW` · **H1: "You've got customers. Let's get you more — and keep more of what they pay."** · CTA `Help me grow` | `GrowthTree` |
| 2 | Growth moves — Bento | 2×2 Direct ordering (move regulars off aggregator commission) · 2×1 Sell abroad (Stripe, multi-currency, UK VAT/EU IOSS) · 1×1 Dealer/B2B portal · 1×1 Automation (reminders, follow-ups, payment links) · 1×1 Owner dashboard · 1×1 New city/branch pages · 2×1 Integrations (Tally, Zoho, Shiprocket, Sheets) | Mehendi tints |
| 3 | Burst: Rent + Own | Mehendi gradient, `RentVsOwnChart` with user inputs | |
| 4 | Dashboard preview | `OwnerDashboard` with "Sample data" chip | |
| 3a | **Rent + Own** (moved from Home) | 3 flip cards: *"Keep the apps for new customers. Own the channel for regulars."* | existing market-counter, market-spice, market-electronics (tinted) |
| 4a | **Get found everywhere** | `ReachFunnel` + 5 Reach chips · *"Growth starts with being found — on Google, maps, ads and AI assistants."* → `/marketing` | IMG-B01, existing `snapshots/cities` |
| 5 | Tabbed showcase | "Grow moves by business type" | |
| 6 | CTA band | *"Tell us what's working. We'll build what's next."* | |

---

### 9.5 ⚙️ `/how-we-work` — How we work — lead accent: Marigold→Mehendi

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content |
|---|---|---|
| 1 | Hero | **H1: "No templates. A process that starts with you."** · `RangoliRoad` + `TailorTape` |
| 2 | Vertical roadmap (alternating cards on road; scooter moves with scroll) | See table below |
| 3 | `MiniGantt` | Typical durations per path — **TODO owner: week ranges** |
| 4 | What we need from you — Kanban | Logo · Photos · Product/service list · Payment KYC documents · Bank details — each with *"Don't have it? We'll help."* |
| 5 | Promise orbs (3) | Scope in writing · Updates on WhatsApp · Your domain, data and accounts stay yours |
| 6 | CTA | *"Stop 1 is one WhatsApp message."* |

| Stop | Name | What happens | You get | Accent | Icon |
|---|---|---|---|---|---|
| 1 | Hello on WhatsApp | You message us | A real person replies | WA green | WhatsApp |
| 2 | Chai-pe-charcha | Free discovery chat/call | Clarity on the real problem | Rani | chai cup |
| 3 | Prototype walkthrough | We show prototypes close to your business | See before you commit | Indigo | `Flask` |
| 4 | Measure | We map your workflow | A one-page workflow map | Haldi | `Ruler` |
| 5 | Scope & price | Blocks, timeline, setup + monthly price | Written scope on WhatsApp | Marigold | `FileText` |
| 6 | Kick-off | Setup + first month via payment link on WhatsApp (Custom builds: 40/40/20) | Start date locked | Peacock | `Link` |
| 7 | Design | Custom design in your brand | Clickable preview | Rani | `PaintBrush` |
| 8 | Build | Blocks built, payments/WhatsApp/GST wired | Preview link on Vercel | Indigo | `Wrench` |
| 9 | Revise | Feedback rounds agreed in scope | A version you're happy with | Haldi | `PencilSimpleLine` |
| 10 | Launch | Domain live, payments tested, team trained | Live system + walkthrough video | Mehendi | `RocketLaunch` |
| 11 | Care & grow | Your monthly plan: hosting, backups, fixes, change hours, improvements; move up a stage as you grow | A partner, not a handover PDF | Peacock | `Lifebuoy` |

---

### 9.6 🧱 `/systems` — Systems hub (the 11 blocks) · lead accent: Peacock + Rani · burst: bazaar

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content |
|---|---|---|
| 1 | Hero | **H1: "Pick the blocks. We tailor every one."** · Bazaar-stall illustration (each stall = block; hover lights + tooltip) · Filter chips: All · Sell · Get paid · Talk · Track · Comply · Connect |
| 2 | Block grid | 11 BlockTiles (4×3) + 12th tile "Integrations →", each → `/systems/[slug]`. Tiles for Site, Store, Pay, Desk, Team use a photo background (IMG-B01, B02, B03, B09, B10) under a 75% tint |
| 3 | Burst: How blocks combine | Tabbed showcase: pick a business → `BlockStack` assembles its custom combination |
| 4 | Integrations honeycomb | Razorpay · Cashfree · Stripe · WhatsApp · Google Workspace · Microsoft 365 · Zoho · Odoo · Tally · Shiprocket · Sheets · Vercel → link `/integrations` |
| 5 | CTA | *"Not sure which blocks you need? That's our job."* |

### 9.7 Block page template `/systems/[slug]`

| # | Section | Layout |
|---|---|---|
| 1 | Hero | Block tint background · large duotone icon · H1 headline · sub "Built for you to…" · CTA `Talk about Webify [Block]` · signature SVG right |
| 2 | Tailored for — flip cards (4) | Front: business type. Back: how this block is customised for them |
| 3 | What it can include — honeycomb (6–8) | Caption: *"We include what your business needs. Nothing it doesn't."* |
| 4 | Rent + Own stepper | From `lib/channels.ts` (renamed from `rivals.ts`; reword copy to complementary tone) |
| 5 | Works best with | 2–3 neighbouring BlockTiles |
| 6 | Pricing note | *"Included from [Tier]"* or *"Add-on from ₹X"* — pulled from `offers.ts` |
| 7 | FAQ (3–5) + CTA | |

| Slug | Block | H1 | Signature SVG | Capability hexes | Tailored-for flips |
|---|---|---|---|---|---|
| `site` | Webify Site | **"Your front door, designed for your customers."** | Google result → your site | Custom design · Mobile-first · Local SEO · Maps · Regional touches · WhatsApp button · Speed · Blog | Clinic · Kirana · Coaching · Exporter |
| `store` | Webify Store | **"Your catalogue. Your rules. No landlord."** | Phone catalogue + pincode check | Catalogue · Categories · Variants · Pincode check · Order desk · Dealer tiers · Shiprocket | Kirana · Boutique · Manufacturer · Cloud kitchen |
| `pay` | Webify Pay | **"Money that lands where it should."** | `MoneyPath` | UPI · Cards · Netbanking · Payment links · Deposits/part-pay · Stripe international · Refunds · Reconciliation | Clinic · Restaurant · Exporter · Coaching |
| `chat` | Webify Chat | **"Your WhatsApp, working while you sleep."** | `ChatFlow` | Your number · Auto-replies · Menus · Bookings · Reminders · Opt-in broadcasts · Human handoff | Restaurant · Clinic · Coaching · Real estate |
| `pulse` | Webify Pulse | **"The numbers you'd ask your manager for."** | `OwnerDashboard` | Enquiries · Collections · Stuck orders · Weekly ₹ view · WhatsApp events · Your metrics | Retail · Manufacturer · Multi-outlet · Coaching |
| `ledger` | Webify Ledger | **"Calm filing weeks."** | `InvoiceFan` | GST invoices · Payment matching · Due reminders · CA export · Expense notes | Retail · Manufacturer · Services · Exporter |
| `file` | Webify File | **"Get legal before you get loud."** | `FilingStamp` | GST · Udyam · IEC · UK VAT · EU IOSS · Document checklist | New founder · Exporter · Home business · Growing firm |
| `desk` | Webify Desk | **"A CRM or ERP that works the way you do."** | `PipelineBoard` | Leads & follow-ups · Customers · Quotes & orders · Stock · Production/dispatch · Reports · Built custom, or on Odoo / Zoho / Microsoft / Google | Coaching (admissions) · Manufacturer (orders→dispatch) · Real estate (site visits) · Trader (dealers) |
| `team` | Webify Team | **"Your team sees what they need. Nothing more."** | `AccessLayers` | Staff login · Roles & permissions · Attendance · Leave · Tasks · Documents · Restricted data views · Audit log | Factory · Clinic chain · Coaching staff · Retail outlets |
| `workspace` | Webify Workspace | **"Business email and files, set up properly."** | Envelope + folder SVG | Domain email · Shared drive · Calendars · Google Workspace or Microsoft 365 or our own stack · Migration from personal Gmail · Access for staff | New business · Growing team · Exporter · Any office |
| `connect` | Webify Connect | **"Everything talks to everything."** | `ConnectHub` | Webhooks · APIs · Tally · Zoho · Odoo · Google Sheets · Microsoft 365 · Shiprocket · Custom integrations | Manufacturer · Distributor · Multi-outlet · Retail |

---

### 9.7a 🔗 Integrations `/integrations` — lead accent: Peacock · burst: five routes

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content | Visual / images |
|---|---|---|---|
| 1 | Hero | **H1: "Use our stack, or keep yours. We build around it."** · Sub: *"Zoho, Odoo, Tally, Google Workspace, Microsoft 365 — or something built only for you."* · CTA `Ask about my tools` | `PhotoUiLayer` (§16.2-F): IMG-N01 (bahi-khata ledger beside a laptop) with floating logo chips |
| 2 | Burst: Five ways we build | §2.4a table as 5 route cards with setup-cost chip | `FiveRoutes` SVG |
| 3 | Logo grid by job | Accounting: Tally · Zoho Books · Odoo · CRM/ERP: Zoho CRM · Odoo · ERPNext · Microsoft Dynamics (on request) · Office: Google Workspace · Microsoft 365 · Payments: Razorpay · Cashfree · Stripe · Chat: WhatsApp Business API · Shipping: Shiprocket | Honeycomb, greyscale→colour |
| 4 | "Budget route" explainer | *"Ready apps, configured for you."* What we do (setup, data import, custom fields, staff training) vs what the vendor bills (licences) | 2-column sticker cards |
| 5 | White-label | `WhiteLabelSwap`: *"Your logo on everything we build — or ours. Your choice."* | |
| 6 | Data & access | Role-based access, backups, export any time | `AccessLayers` |
| 7 | CTA | *"Tell us what you use today."* | Webu pointing |

### 9.7b 🧭 Strategy `/strategy` — Webify Compass · lead accent: Indigo · burst: roadmap

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content | Visual / images |
|---|---|---|---|
| 1 | Hero | Kicker `STRATEGY · PAID CONSULTING` · **H1: "Know what to build before you spend a rupee on it."** · Sub: *"A practical plan for your website, payments, software and marketing — including whether Zoho, Odoo, Google, Microsoft or a custom build fits you best."* · CTA `Book a strategy session` | `ArchWindows`: existing `snapshots/work`, `snapshots/contact`, IMG-R03 |
| 2 | Who it's for (sticker grid 4) | Starting a business and unsure where to begin · Using five apps that don't talk · Thinking about a CRM/ERP · Spending on ads with no clear results | Tints, icons |
| 3 | Three offers — tickets | Compass Session · Audit · Roadmap (§2.4d): ₹5,000 · ₹15,000 · ₹30,000 + GST, "credited against your build" chip, deliverable chip ("60-min call", "written audit", "roadmap PDF") | Ticket tops: tinted photo strips (reuse) |
| 4 | Burst: Build vs buy | Decision tree SVG: *Standard need + tight budget → Zoho/Odoo* · *Already on Google/Microsoft → build around it* · *Unique workflow → custom* · *Close to our prototype → adapt* | `DecisionTree` SVG |
| 5 | Sample roadmap (illustrative) | 3 phases on a timeline: Foundations → Systems → Growth, labelled "Sample" | `MiniGantt` |
| 6 | Free vs paid | *Free:* WhatsApp discovery chat. *Paid:* Compass deep work. Note on credit against build (if owner enables) | 2 cards |
| 7 | CTA | *"One session. A clear plan."* | Webu thinking |

---

### 9.7c 📣 Marketing hub `/marketing` — Webify Reach · lead accent: Marigold · burst: AI visibility

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content | Visual / images |
|---|---|---|---|
| 1 | Hero | Kicker `MARKETING · WEBIFY REACH` · **H1: "Get found where your customers look — Google, maps, ads and AI."** · Sub: *"Most small businesses are invisible in at least one of these. We fix that, honestly."* · CTA `Help me get found` | `PhotoUiLayer`: IMG-B01 + `SearchResultMock` card + `AiAnswerMock` bubble floating |
| 2 | Where customers look (4 tiles) | 🔍 Google search · 📍 Maps · 📱 Instagram/Facebook · ✨ AI assistants — each with one plain sentence | Photo tiles: existing `snapshots/cities`, IMG-I-RET-1 crop, IMG-B04, IMG-B05 |
| 3 | Five Reach services — bento | Search · Ads & SEM · Local · **AI visibility (2×2, highlighted "New")** · Campaigns | Icon + mock SVG per tile |
| 4 | Burst: **"What is AI visibility?"** explainer | 3 steps: *AI assistants read the web → they trust consistent, structured business info → we make yours clear, consistent and answer-ready.* Caveat: *"No one can guarantee AI mentions. We improve the signals these tools use."* | `AiAnswerMock` large; Indigo→Rani gradient |
| 5 | How Reach connects to your systems | `ReachFunnel`: ads/search/AI → your Site → WhatsApp (Chat) → CRM (Desk) → dashboard (Pulse) · *"Marketing that lands in your own system, not a spreadsheet."* | `ReachFunnel` SVG |
| 6 | What you pay for | Our monthly fee (from ₹8,000; Local Lite included in Business, AI Basic in Command) · ad spend paid to Google/Meta directly · 30 days' notice to stop | 2 sticker cards |
| 7 | Monthly report preview | Sample report card: enquiries by source, top searches, map views — "Sample data" chip | `OwnerDashboard` variant |
| 8 | FAQ (5) + CTA | Guarantees? How long for SEO? Minimum ad budget? What is AI visibility? Do I need a new website first? | — |

### 9.7d Marketing service template `/marketing/[slug]`

| # | Section | Layout |
|---|---|---|
| 1 | Hero | Service accent tint · plain promise as H1 · technical name as kicker with glossary chip · CTA (§4.2) · `PhotoUiLayer` with the service's photo + mock |
| 2 | Why it matters (3 stat-free reasons) | Sticker tiles |
| 3 | What we do — honeycomb (6) | From §2.4c |
| 4 | How it works — 4-step mini road | Audit → plan → do → report monthly |
| 5 | Honest caveat box | From §2.4c |
| 6 | Works best with | Related Systems blocks + other Reach services |
| 7 | Pricing note + CTA | Price from §10.2 B (e.g. "from ₹15,000/month") + third-party note |

| Slug | H1 | Kicker | Photo (reuse) | Mock SVG |
|---|---|---|---|---|
| `seo` | **"Show up on Google when people search for what you sell."** | SEO · search engine optimisation | IMG-B01 | `SearchResultMock` |
| `ads` | **"Ads that bring enquiries, not just clicks."** | SEM · Google & Meta ads | IMG-B04 | Ad card → WhatsApp bubble |
| `local` | **"Be the shop people find on the map."** | Local SEO · maps & listings | IMG-I-RET-1 | Map pin card |
| `ai-visibility` | **"When customers ask AI, your business should be in the answer."** | AI visibility · ChatGPT, Gemini, Perplexity, Copilot | IMG-B05 | `AiAnswerMock` |
| `campaigns` | **"Bring your regulars back."** | WhatsApp & social campaigns | IMG-R04 | Broadcast bubbles |

### 9.8 🏭 Industries — lead accent: per industry

> 🖼️ Images & collages for this page: see §16.4.

**Hub `/industries`:** **H1: "Every trade works differently. So does every build."** · Industry tiles (7: Retail/kirana, Restaurants & cloud kitchens, Clinics, Coaching & education, Manufacturers & traders, **Exporters (new)**, Real Estate; model supports more) · each tile is a photo card (IMG-I-*-1 crop) with industry colour band · Final tile: *"Not listed? We build for any business."* + CTA.

**Industry colours:** Retail = Rani · Restaurants = Marigold · Healthcare = Peacock · Education = Indigo · Real Estate = Haldi · Manufacturing = Mehendi · Exporters = Dusk (Indigo→Rani).

**Hub collage:** `PhotoBento` — 7 industry photos (1 large rotating + 6 small) above the tile grid.

**Template `/industries/[slug]`**
| # | Section | Content |
|---|---|---|
| 1 | Hero | **"Built around how [industry] actually works."** · real photo from `/public/images/real/` · CTA `Talk about my [industry]` |
| 2 | 🎞️ "A day in your [shop]" StoryRail | 9am → 1pm → 8pm → Monday; each slide names the block helping |
| 3 | Pain → Fix flip cards (4) | |
| 4 | Typical starting stack | `BlockStack` highlighted + *"A starting point — we tailor from here."* |
| 5 | Burst: Rent + Own | Restaurants: Zomato/Swiggy · Retail: Amazon/Flipkart · Manufacturing: IndiaMART · Exporters: marketplace export programs · Healthcare/Education/Real Estate: Justdial/Sulekha |
| 6 | Local search tile | Map-pin animation, *"Be found for '[industry] near me'"* |
| 7 | Prototype teaser | Industry-filtered `PrototypeTeaser` + `Show me the [industry] prototype` |
| 8 | CTA | |

---

### 9.9 💰 Pricing `/pricing` — lead accent: Peacock · burst: estimator

> 🖼️ Images & collages for this page: see §16.4.

**Layout and copy: follow §10.8 exactly** (hero → monthly/annual toggle → four stage cards → comparison table → "When to move up" → add-ons → Reach & Compass → partner strip → extras/ownership/payment terms → estimator → FAQ → CTA). Data from §10.1–10.6.

| Extra detail | Spec |
|---|---|
| Stage cards | Monthly price large (JetBrains Mono), setup small beneath, 6 features ✓, 4 limits, CTA `Get my quote`. Business card raised 8px with Haldi "Most chosen" ribbon |
| Comparison table | Sticky first column and header; features grouped (Website · Sell & pay · Run the business · Marketing · Support); limits block below |
| "When to move up" | Animated stacked bar: Business ₹7,500 + over-limits vs Command ₹18,000, with feature chips Command adds |
| Ownership strip | *"Yours: domain, brand, content, data and accounts. Ours: the software we build, host and support — that's what your monthly plan covers."* |
| Images | Hero arch: existing `snapshots/pricing`; stage card tops: thin tinted strips (IMG-H01 Starter · IMG-B02 Business · IMG-H05 Command · IMG-B09 Custom) |

**Stage detail pages `/pricing/[slug]`** (`starter`, `business`, `command`, `custom`): hero with monthly + setup · everything included · limits · popular add-ons for this stage · "when to move up" · who it's for (photo) · steps to start · CTA `Get my quote`.

---

### 9.10 🧪 Prototype Room `/prototypes` — lead accent: Indigo (dark section) · burst: hero

> 🖼️ Images & collages for this page: see §16.4.

**Rule:** prototypes are **never shown directly** on the site. The page shows illustrated teasers, what each covers, and which integrations it can use. Full walkthroughs happen on WhatsApp after someone asks.

| # | Section | Content | Visual / images |
|---|---|---|---|
| 1 | Hero (dark `--indigo`, `BlueprintGrid` bg) | **H1: "We've already built for businesses like yours."** · Sub: *"Eight working prototypes. Ask on WhatsApp and we'll walk you through the ones closest to your business — then rebuild it around you."* · CTA `Show me prototypes` | Webu with curtain; `PolaroidCluster` of 4 illustrated mock screens pinned to the blueprint |
| 2 | Filter bar | All · Sell · Book · Teach · Make · Export · Manage (CRM/ERP) · Team | FLIP reshuffle |
| 3 | Teaser masonry (8) | Table below | `PrototypeTeaser` |
| 4 | Why start from a prototype | *"Proven base → faster launch → lower setup cost. Still rebuilt for your workflow and brand."* | `FiveRoutes` mini with prototype road highlighted |
| 5 | How a walkthrough works | Message → we pick 1–3 prototypes close to your business → short screen-share or video on WhatsApp → written scope | Mini RangoliRoad |
| 6 | Honesty note | *"Prototypes start the conversation. Your build is customised for your business."* | |
| 7 | Coming soon | *"Live client showcase — coming soon."* | Webu building |

| # | Prototype (teaser name) | Industry | Blocks | Integrations shown as "Works with" chips | Teaser illustration |
|---|---|---|---|---|---|
| 1 | Direct ordering for restaurants & cloud kitchens | restaurant | Site · Store · Pay · Chat | Razorpay/Cashfree · WhatsApp · Google Maps | Phone menu + order toast |
| 2 | Clinic booking + reminders | healthcare | Site · Chat · Pay · Desk | WhatsApp · Google Calendar · Razorpay | Calendar slots + reminder bubble |
| 3 | Coaching admissions + fees | education | Site · Desk · Pay · Chat | Razorpay/Cashfree · WhatsApp · Google Sheets | Admission pipeline + fee receipt |
| 4 | Retail / kirana store | retail | Store · Pay · Ledger · Chat | UPI · Razorpay · Tally · Shiprocket | Catalogue + repeat-order list |
| 5 | Manufacturer / dealer portal | manufacturing | Store · Desk · Ledger · Connect | Tally · Zoho · Odoo | Dealer price tiers + order status |
| 6 | CRM / ERP dashboard | any | Desk · Pulse · Connect | Zoho · Odoo · Microsoft 365 · Google Workspace | Kanban + KPI cards |
| 7 | Employee portal / HR | any | Team · Workspace · Desk | Google Workspace · Microsoft 365 | Role badges + attendance |
| 8 | Exporter site + international payments | exporters | Site · Pay · File | Stripe · PayPal (on request) · DGFT/IEC | Multi-currency checkout + globe |

**Data model — `lib/prototypes.ts`**
```ts
export type Prototype = {
  slug: string;
  name: string;              // teaser name from the table above
  industry: string;          // industries slug or "any"
  blocks: BlockSlug[];       // from lib/blocks.ts
  worksWith: string[];       // logo ids from lib/logos.ts
  shows: string[];           // 3 short chips
  image: string;             // illustrated SVG now
  kind: "illustration" | "screenshot";
  published: boolean;        // teaser visible; the prototype itself is never linked
};
```
Rendering: `illustration` → crisp, "Concept view" chip. `screenshot` (later) → `blur(6px)` + lock overlay. No outbound link to any prototype URL.

---

### 9.11 🌆 Cities — lead accent: Indigo · burst: map

> 🖼️ Images & collages for this page: see §16.4.

**Hub `/cities`:** **H1: "From Leh to Port Blair — we build for your business, wherever you are."** · `IndiaDotMap` (33 dots, hover → CityTile preview) · Region filter chips (North · South · East · West · North-East · Islands & Himalaya) · CityTile grid (4-up desktop) · Intro line: *"We work fully remote over WhatsApp — wherever you are."* · Regional banner collage: `ArchWindows` of IMG-C01…C06 (one per region chip; active chip swaps the banner).

**Template `/cities/[slug]`** (content already in `lib/cities.ts`)
| # | Section | Content |
|---|---|---|
| 1 | Hero | Local greeting line (§11) in Sora italic, accent colour · **H1: "Custom digital systems for [City] businesses."** · `CitySkyline` · CTA `I'm in [City]` |
| 2 | Local industries going digital | Sticker tiles from data |
| 3 | Marketplace pressure vs owned catalogue | Rent + Own (Amazon/Flipkart) |
| 4 | F&B / cloud kitchen direct ordering | From data |
| 5 | Three paths, local framing | Path triptych mini |
| 6 | Nearby cities | 3 CityTiles |
| 7 | CTA | Greeting repeated: *"[Greeting]! Let's talk about your business."* |

---

### 9.12 🧾 Registrations — lead accent: Indigo + Haldi · burst: stamp

> 🖼️ Images & collages for this page: see §16.4.

**Hub:** **H1: "GST, Udyam, IEC — filed for you."** Sub: *"Our fee and the government fee shown separately. Government fees are paid in your name."* · `FilingStamp` thumps on load · FilingTiles from `lib/registrations.ts` · "Part of the Launch path" banner → `/solutions/launch`.

**Detail template:** who it's for → documents checklist (ticks animate) → what's *not* included (existing `notIncluded`, `refuse`) → official portal link → `FeeDonut` → CTA `Start my [filing]`.
**Charges page:** one transparent table (existing).

---

### 9.13 👥 About — lead accent: Haldi · burst: values

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content |
|---|---|---|
| 1 | Hero | **H1: "We believe no two businesses should get the same website."** · `TailorTape` + rangoli frame |
| 1a | Category & gap | Category sentence + `GapBridge` + we are / we're not strip |
| 2 | Story zig-zag (3) | *Why we started:* owners were renting their own customers · *What we learned:* templates don't fit real counters · *Where we're going:* a custom system for every pincode |
| 3 | Burst: values flip cards (4) | Custom · Honest · Owned · Local |
| 4 | What we do | `PathFork` + 3 path links |
| 5 | Where we work | `IndiaDotMap` |
| 6 | Our team setup | Founders + trusted specialist freelancers, fully remote · `PolaroidCluster` of objects/hands only (IMG-A01, A02) — no AI faces presented as the team · real team polaroids `published:false` until photos exist |
| 7 | Business details | `BusinessDetails` component |
| 8 | CTA | |

---

### 9.14 📝 Blog — lead accent: neutral + category colours

> 🖼️ Images & collages for this page: see §16.4.

**Hub:** **H1: "Practical guides for Indian business owners."** · search + category chips · featured 2×2 · latest 3-up · topic bento with counts · series rail.

**Categories & colours:** Start a business (Marigold) · Payments (Peacock) · WhatsApp (Mehendi) · Get found (Rani) · Rent + Own (Indigo) · Costs & GST (Haldi) · Custom vs template (Rani) · AI & search (Indigo). Cover image for AI & search reuses IMG-BL04 with an Indigo duotone.

| Category | Existing slugs | New (owner to approve; Claude Code drafts outline only) |
|---|---|---|
| Start a business | — | GST or Udyam first? · Documents for a payment gateway account · Launch checklist for a home business |
| Payments | upi-payment-gateway-msme · razorpay-vs-cashfree-vs-payu · payment-trends | Stripe for Indian exporters |
| WhatsApp | whatsapp-business-api-india · clinic-whatsapp-appointments-india · whatsapp-automation | — |
| Get found | google-business-profile-india · local-seo-near-me-india · bing-places-copilot-india · hindi-hinglish-business-website · website-growth | — |
| Rent + Own | justdial-vs-own-website · zomato-commission-vs-own-ordering | — |
| Costs & GST | website-cost-india-2026 · gst-website-quote-india · gst-compliance · analytics-guide · business-growth | — |
| Custom vs template | — | Why templates cost more later · What "custom" should include |
| AI & search (new) | bing-places-copilot-india | What is AI visibility for small businesses? · How ChatGPT-style assistants pick businesses to mention · SEO vs ads: where to start on a small budget |

**Post template:** Holi reading-progress bar · sticky TOC · TL;DR box · inline BlockTile CTA at ~40% · related 3 · CTA `Ask about this`.

---

### 9.15 ❓ FAQ `/faq` — lead accent: Rani

> 🖼️ Images & collages for this page: see §16.4.

Kicker *Poochho* · **H1: "Questions, answered."** · Category tabs (colour-coded): Custom work · Process · Payments · Launch & registrations · Ownership & tech · Support · live search · last tile *"Not here? WhatsApp us."* · FAQPage JSON-LD.

**Must-include Q&As (add to `lib/faqs.ts`):**
| Q | A |
|---|---|
| Do you use templates? | No. Every design and build is made for your business. |
| Can I see examples first? | Yes. Message us on WhatsApp and we'll walk you through prototypes close to your business. |
| What do I own? | Your domain, brand, content, data and business accounts (payment gateway, WhatsApp number, Google/Microsoft/Zoho). The software code stays with us — we deploy, host and maintain it for you, which is why a monthly hosting or Care plan applies. |
| Do I get the source code? | No. We deliver a live, managed system rather than a code handover. That's how we keep it secure, updated and supported. You can always export your data. |
| How do I pay? | A small setup fee (₹5,000–₹15,000) plus your first month, then monthly. No lock-in. Custom builds use 40% / 40% / 20% on the setup fee. |
| What happens if I go over my plan's limits? | We message you at 80% with both options — a small add-on or the next stage — and tell you which is cheaper. Nothing is charged without your OK. |
| Can I downgrade? | Yes, any time. Features above the new stage switch off; your data is kept for 30 days. |
| Which payment gateways do you set up? | Razorpay or Cashfree for India, Stripe for international customers. |
| Where is it hosted? | On Vercel — fast and secure. |
| Can you set up a new business from zero? | Yes. Registrations, brand basics, website, payments, WhatsApp and books. |
| How do I pay you? | After you approve a written scope, we share a secure payment link on WhatsApp. |
| Who actually files my GST/Udyam/IEC? | We do, using documents and one-time passwords you share; government fees are paid in your name. For UK VAT and EU IOSS we coordinate with a registered overseas agent/intermediary. |
| What's not included in your price? | Gateway fees, WhatsApp conversation charges, government fees, ads and domain renewals. |
| Is there a lock-in? | No long contracts. Monthly plans run month-to-month with 30 days' notice. If you stop, the hosted system is switched off and you receive a full export of your data and content; your domain and accounts stay with you. |
| Isn't a prototype just a template? | No. A template is the same design sold to everyone. A prototype is our tested starting point that we rebuild for your workflow and brand — it just saves you setup cost. |
| What does setup cost? | It depends on where we start. Adapting one of our prototypes is the lowest setup cost. A brand-new kind of solution is quoted per scope. CRM/ERP on Zoho, Odoo, Microsoft or Google is custom-priced, with licences billed by the vendor. |
| Can you work with Zoho, Tally, Odoo, Google or Microsoft? | Yes. We can build around what you use, set it up for you, or build something custom. |
| Can you build a CRM, ERP or staff portal? | Yes — custom, or on Odoo/Zoho, with role-based access so each person sees only what they should. |
| Can it carry our brand instead of yours? | Yes. Everything can be white-labelled in your brand. |
| How fast do you reply? | Within a few hours, 7 days a week, on WhatsApp. |
| Are you competing with Zoho, Google or Microsoft? | No. We work with them. They make great tools; we choose, set up, customise and connect them for your business — or build custom where they don't fit. |
| What exactly is Webify — software or a service? | Both: your own software, built on our platform, and run for you as a service. You use it; we keep it working. |
| Is the strategy session free? | The first WhatsApp chat is free. Webify Compass (session, audit, roadmap) is paid, deeper work. |
| Can you guarantee Google rankings or ChatGPT mentions? | No one honestly can. We do the work that improves your chances and report results every month. |
| What is AI visibility? | Making sure AI assistants like ChatGPT, Gemini and Perplexity can find clear, correct information about your business when customers ask. |
| Do I pay for ads through you? | Our fee covers managing ads. Ad spend is paid directly to Google or Meta. |
| Do you work outside my city? | Yes. We work fully remote across India over WhatsApp. |

---

### 9.16 📞 Contact `/contact` — lead accent: WhatsApp green + Rani

> 🖼️ Images & collages for this page: see §16.4.

| # | Section | Content |
|---|---|---|
| 1 | Hero | **H1: "The fastest way to reach us is WhatsApp."** · Webu waving with phone |
| 2 | Main tile (2×2) | Big `💬 WhatsApp us` · QR code (desktop) · *"Tell us your business, city and what you need."* |
| 3 | Info tiles (3) | ✉️ Email `webifybharat@gmail.com` (mailto) · 📞 Phone (**TODO** fill or hide) · 📍 Registered office, Kolkata — *"We work remotely across India."* |
| 3a | Promise orb | ⏱️ **We reply within a few hours, 7 days a week.** |
| 4 | What to send us | 3 chips: Your business type · Your city · Launch / Organise / Grow |
| 5 | What happens next | Mini RangoliRoad (3 stops) |
| 6 | Image | Existing `snapshots/contact.webp` in arch mask beside the main tile |

❌ Remove `components/ContactForm.tsx` from the page (keep file unused or delete).

---

### 9.17 ⚖️ Legal `/terms` `/privacy` `/refund`

> 🖼️ Images & collages for this page: see §16.4.
Plain-language summary tiles at top (3–4 sticker tiles) · sticky TOC · "Last updated" · Privacy covers DPDP Act consent and WhatsApp communications. Use existing `lib/legal.ts` + `LegalDoc`.

### 9.18 🔍 404

> 🖼️ Images & collages for this page: see §16.4.
Webu with torch · **"Yeh page kho gaya!"** — *This page wandered off.* · Path triptych mini · CTA `WhatsApp us`.

### 9.19 Loading & empty states
`app/loading.tsx`: Webu building + skeleton tiles (`skeleton.css`). Empty filters: Webu thinking + *"Nothing here yet — but we can build it. WhatsApp us."*

---

## 10. Pricing (final — low setup, monthly plans, stage-based)

### 10.0 Model in one line
> **Small setup fee to start. One monthly plan that runs everything. Grow into the next stage when you outgrow your limits.**

| Principle | Rule |
|---|---|
| **Position** | Mid-market. Monthly plans priced like real business software, not cheap hosting. Round numbers only. |
| **Setup** | **₹5,000–₹15,000** one-time for plan-based builds (made possible by our prototypes and stack). Custom builds from scratch are quoted separately. |
| **Monthly** | Covers hosting, the software, support, a set number of change hours and the features of your stage. |
| **Commitment** | **None.** Month-to-month, 30 days' notice. Annual prepay: **pay 10 months, get 12**. |
| **Stages & limits** | Each plan has clear limits (users, products, orders, automations, locations, change hours). Go over → small monthly add-on charges. Bigger stages include more features **and** cost less per unit — upgrading is always the cheaper option once you're near a limit. |
| **Upgrade nudge (honest)** | At 80% of any limit, we message you on WhatsApp with both options (add-on vs next stage) and which is cheaper. No surprise charges: overage is only billed after you approve. |
| **Code** | Closed deployment — source code stays with Webify Bharat. Client owns domain, brand, content, data and accounts. On exit: full data export; system switched off. |
| **Partner products** | Zoho / Odoo / Google Workspace / Microsoft 365: licences at vendor price; **standard setup ₹0**; customisation paid. |
| **GST** | All prices **+ 18% GST**, shown only once GSTIN is live (gate). |
| **Third-party costs** | Always separate: ad spend, WhatsApp conversation charges, gateway fees, software licences, domain renewal, govt fees. |

### 10.1 The four stages

| | 🌱 **Starter** | ⭐ **Business** (most chosen) | 🏛️ **Command** | ✂️ **Custom** |
|---|---|---|---|---|
| Tagline | "Get online properly." | "Sell, get paid, follow up." | "Run the whole business on one system." | "Built from zero, run for you." |
| **Setup (one-time)** | **₹5,000** | **₹10,000** | **₹15,000** | **from ₹50,000** (quoted after Compass) |
| **Monthly** | **₹3,000** | **₹7,500** | **₹18,000** | **from ₹40,000** |
| Annual prepay (10 for 12) | ₹30,000/yr | ₹75,000/yr | ₹1,80,000/yr | Quoted |
| Best for | Shops, clinics, consultants, tutors | Businesses taking orders, bookings and payments online | Teams with staff, stock, dealers or outlets | Unique workflows, multi-unit, platforms |

**What's included (features stack as you move right)**

| Feature | Starter | Business | Command | Custom |
|---|---|---|---|---|
| Custom-designed website (mobile-first) | ✅ | ✅ | ✅ | ✅ |
| Hosting, SSL, backups, uptime monitoring | ✅ | ✅ | ✅ | ✅ |
| Google Business Profile setup | ✅ | ✅ | ✅ | ✅ |
| SEO & AI-ready basics (schema, `llms.txt`) | ✅ | ✅ | ✅ | ✅ |
| WhatsApp click-to-chat | ✅ | ✅ | ✅ | ✅ |
| Business email setup (Google/Microsoft, licence extra) | ✅ ₹0 | ✅ ₹0 | ✅ ₹0 | ✅ ₹0 |
| White-label (your brand everywhere) | ✅ | ✅ | ✅ | ✅ |
| Online store **or** booking module | — | ✅ | ✅ both | ✅ |
| Razorpay / Cashfree payments | — | ✅ | ✅ | ✅ |
| WhatsApp Business API + automations | — | ✅ | ✅ | ✅ |
| Lead & customer tracker (Desk Lite) | — | ✅ | — (full Desk) | — |
| Owner dashboard (Pulse) | — | ✅ basic | ✅ advanced | ✅ custom |
| Reach Local Lite (monthly Google profile posts) | — | ✅ | ✅ | ✅ |
| **Full CRM/ERP (Desk)** — our prototype, or Odoo/Zoho configured | — | — | ✅ | ✅ |
| Staff portal with roles & access control (Team) | — | — | ✅ | ✅ |
| GST invoicing & payment matching (Ledger) | — | — | ✅ | ✅ |
| Stripe international payments | — | — | ✅ | ✅ |
| Integrations (Tally / Zoho / Shiprocket / Sheets) | — | — | ✅ | ✅ |
| Reach AI Basic (quarterly AI-visibility check + fixes) | — | — | ✅ | ✅ |
| Registrations filed (our fee) | — | GST + Udyam | GST + Udyam + IEC | As needed |
| Monthly review call | — | — | ✅ | ✅ |
| Dedicated account lead | — | — | — | ✅ |
| Support | Few hours, 7 days | Few hours, 7 days | Priority | Priority + agreed SLA |

**Limits (the stage ladder)**

| Limit | Starter | Business | Command | Custom |
|---|---|---|---|---|
| Website pages | 6 | 15 | 30 | Agreed |
| Users / logins | 1 | 3 | 15 | Agreed |
| Products in store | — | 100 | 1,000 | Agreed |
| Orders or bookings / month | — | 300 | 2,000 | Agreed |
| WhatsApp automations | — | 3 | 10 | Agreed |
| Integrations | — | — | 3 | Agreed |
| Locations / branches | 1 | 1 | 3 | Agreed |
| Change hours / month (non-rollover) | 1 | 3 | 6 | Agreed |
| Data storage | 2 GB | 10 GB | 50 GB | Agreed |

### 10.2 Over-limit charges (monthly, only after you approve)

Priced so the next stage becomes cheaper once you need two or three of these.

| Over-limit item | Starter | Business | Command |
|---|---|---|---|
| Extra page | ₹300/page | ₹300/page | ₹200/page |
| Extra user | ₹600 | ₹600 | ₹400 |
| +100 products | — | ₹1,000 | ₹500 |
| +100 orders/bookings | — | ₹750 | ₹400 |
| Extra WhatsApp automation | — | ₹1,000 | ₹750 |
| Extra integration | — | — | ₹2,000 |
| Extra location | ₹2,000 | ₹2,000 | ₹1,500 |
| Extra change hour | ₹1,500 | ₹1,500 | ₹1,200 |
| +10 GB storage | ₹500 | ₹500 | ₹300 |

Example shown on the pricing page: *"A Business client with 6 users and 250 products would pay ₹7,500 + ₹1,800 + ₹1,500 = ₹10,800/month. Command at ₹18,000 adds a full CRM, staff portal, invoicing and integrations — we'll tell you when moving up makes sense."*

### 10.3 Add-ons (unlock features from a higher stage without upgrading)

**Monthly add-ons**

| Add-on | Available on | Monthly |
|---|---|---|
| Online payments (Razorpay/Cashfree) | Starter | ₹1,000 |
| Booking module | Starter | ₹1,500 |
| Small store (≤ 50 products) | Starter | ₹2,000 |
| WhatsApp Business API + 1 automation | Starter | ₹2,000 |
| Desk Lite (lead tracker, 2 users) | Starter | ₹2,500 |
| Staff portal (Team, ≤ 10 users) | Business | ₹4,000 |
| GST invoicing & payment matching (Ledger) | Business | ₹2,500 |
| Stripe international payments | Starter, Business | ₹1,500 |
| Integration (Tally / Zoho / Shiprocket / Sheets) | Business | ₹2,000 each |
| Regional-language version of the site | All | ₹1,500 per language |
| Catalogue management (we update products) | Business, Command | ₹3,000 / ₹6,000 |
| Priority support | Starter, Business | ₹1,000 |
| Reach plans (marketing) | All | See §10.4 |

**One-time add-ons**

| Add-on | Price |
|---|---|
| Logo & brand basics | ₹10,000 |
| Content writing | ₹1,500 per page · ₹2,500 per article |
| Data migration (Excel / Tally → system) | from ₹10,000 |
| Custom feature development | ₹2,500/hour or quoted |
| Partner product customisation (Zoho/Odoo) | from ₹25,000 |
| Mailbox migration (Google/Microsoft) | ₹500 per mailbox |
| GST registration (non-plan / extra entity) | ₹5,000 (plan clients ₹3,000) |
| Udyam registration | ₹2,500 (plan clients ₹1,500) |
| IEC | ₹5,000 + ₹500 DGFT fee (plan clients ₹3,500) |
| UK VAT / EU IOSS (with registered overseas agent) | Quoted (agent fees separate) |

### 10.4 Marketing — Webify Reach (monthly, unchanged model)

| Plan | Setup | Monthly | Notes |
|---|---|---|---|
| Reach Local (full) | ₹0 for plan clients · ₹5,000 otherwise | ₹8,000 | Business includes **Local Lite**; full plan adds reviews flow, citations, Bing/Apple Maps |
| Reach Search — Starter / Growth | — | ₹15,000 / ₹30,000 | No guaranteed ranks; recommend 6 months |
| Reach Ads (Google & Meta) | ₹10,000 | ₹15,000 (≤ ₹1L spend), 12% above | Ad spend paid to Google/Meta |
| Reach AI (full) | Audit ₹15,000 | ₹20,000 · ₹10,000 with Search | Command includes **AI Basic** |
| Reach Campaigns | — | ₹10,000 | Message charges extra |
| Reach Growth bundle | ₹0 | ₹30,000 | Search Starter + Local + AI add-on |

### 10.5 Strategy — Webify Compass
Session ₹5,000 · Audit ₹15,000 · Roadmap ₹30,000. **100% credited** against Command or Custom setup + first months' fees if signed within 60 days. First WhatsApp chat always free.

### 10.6 Payment terms
- **Starter / Business / Command:** setup + first month paid upfront via WhatsApp payment link → build starts. Monthly billing starts at launch.
- **Custom:** 40% start · 40% preview · 20% before launch on the setup fee; monthly from launch.
- **Downgrade:** any time; features above the new stage switch off, data kept 30 days.
- **Cancel:** 30 days' notice; full data & content export; system switched off.

### 10.7 Scope estimator (`components/ScopeEstimator.tsx`)
1. Pick path (Launch / Organise / Grow) → suggests a stage.
2. Enter rough needs (users, products, orders, locations) → estimator **recommends the cheapest stage** (stage + over-limits vs next stage).
3. Toggle add-ons and Reach plans.
4. Output: **Setup ₹X** · **Monthly ₹Y** · **Annual ₹Z (2 months free)** · "+ GST" per gate · third-party costs listed.
5. CTA `💬 Send this scope on WhatsApp`.

### 10.8 Pricing page layout
1. Hero: **"Start small. Pay monthly. Grow into the next stage."** Sub: *"Setup from ₹5,000. Plans from ₹3,000/month. No lock-in."*
2. Monthly / Annual toggle (annual shows "2 months free").
3. **Four stage cards** (Business raised, "Most chosen" ribbon) — setup, monthly, 6 key features, 4 key limits.
4. **Full comparison table** (features + limits), sticky header, ✓/— icons.
5. **"When to move up"** — the worked example from §10.2 as an animated cost bar (stage + over-limits vs next stage).
6. Add-ons (monthly / one-time tabs).
7. Reach plans · Compass.
8. Partner products strip: *"Standard setup ₹0 — you pay only the licence."*
9. What's extra (third-party costs) · What you own · Payment terms.
10. Estimator · FAQ · CTA.

## 11. City greetings (Roman script, English page)

Add `greeting: string` and `greetingLang: string` to each city in `lib/cities.ts`. Display: *"[Greeting], [City]!"* in hero kicker + final CTA. Small caption on hover/tap: "Hello in [language]".

| City slug | Greeting | Language |
|---|---|---|
| mumbai | Namaskar | Marathi |
| bengaluru | Namaskara | Kannada |
| delhi | Namaste | Hindi |
| chennai | Vanakkam | Tamil |
| hyderabad | Namaskaram | Telugu |
| kolkata | Nomoshkar | Bengali |
| jaipur | Khamma Ghani | Rajasthani |
| lucknow | Adaab | Urdu/Hindustani |
| ahmedabad | Kem cho | Gujarati |
| gandhinagar | Kem cho | Gujarati |
| patna | Pranam | Hindi/Bhojpuri |
| bhopal | Namaste | Hindi |
| bhubaneswar | Namaskar | Odia |
| chandigarh | Sat Sri Akal | Punjabi |
| thiruvananthapuram | Namaskaram | Malayalam |
| raipur | Jai Johar | Chhattisgarhi |
| ranchi | Johar | Jharkhand |
| dehradun | Namaste | Hindi/Garhwali |
| shimla | Namaste | Hindi/Pahari |
| panaji | Namaskar | Konkani |
| amaravati | Namaskaram | Telugu |
| dispur | Nomoskar | Assamese |
| itanagar | Namaste | (Hindi widely used) |
| imphal | Khurumjari | Meitei |
| shillong | Khublei | Khasi |
| aizawl | Chibai | Mizo |
| kohima | Kuknalim | Naga |
| agartala | Nomoshkar | Bengali |
| gangtok | Namaste | Nepali |
| srinagar | Salaam | Kashmiri/Urdu |
| puducherry | Vanakkam | Tamil |
| port-blair | Namaste | Hindi |
| leh | Julley | Ladakhi |

⚠️ **Owner: verify the less common ones (Imphal, Shillong, Kohima, Raipur, Ranchi) with a native speaker before publishing.** Claude Code: render greeting only if `greetingVerified !== false`.

---

## 12. Component & file map

| Component | File | Status |
|---|---|---|
| `WhatsAppCTA` (+ QR popover, float, dock) | `components/WhatsAppCTA.tsx` | Extend existing `WhatsAppCta` |
| `Header` (mega-menus, dock), `Footer` (strips) | `components/Header.tsx`, `Footer.tsx` | Rebuild |
| `PathCard`, `PathSwitcher` | `components/paths/*` | New |
| `BlockTile`, `BlockStack` | `components/blocks/*` | New |
| `BentoGrid`, `StickerCard`, `FlipCard`, `TierTicket`, `AddonChip`, `Honeycomb`, `PromiseOrb` | `components/tiles/*` | New |
| `StoryRail`, `Deck`, `Marquee2Lane`, `BeforeAfter`, `TabbedShowcase`, `LaunchCountdown`, `HeroDevices` | `components/slides/*` | New |
| `RangoliRoad`, `MiniGantt` | `components/process/*` | New (replace `ProcessVisual`) |
| `ScopeEstimator`, `RentVsOwnChart`, `EstimateBar`, `FeeDonut`, `ReadinessMeter`, `OwnerDashboard` | `components/viz/*` | New; `RentVsOwnChart` extends `ComparisonChart` |
| `PrototypeTeaser`, `MockScreen` | `components/prototypes/*` | New |
| SVG library (§6.10) | `components/svg/*` | New |
| Custom India icons | `components/icons/india/*` | New |
| `Webu` (states prop) | `components/Webu.tsx` | New |
| `GulalBurst`, `WaveDivider`, `JellyButton` | `components/fx/*` | New |
| `RangoliCollage`, `BazaarStrip`, `PolaroidCluster`, `PhotoBento`, `ArchWindows`, `PhotoUiLayer`, `MasonryWall`, `FloatingUiSticker` | `components/collage/*` | New (§16) |
| `PipelineBoard`, `AccessLayers`, `FiveRoutes`, `WhiteLabelSwap`, `OneStopWheel`, `PlatformLayers`, `GapBridge`, `FourPillars`, `SearchResultMock`, `AiAnswerMock`, `ReachFunnel`, `DecisionTree` | `components/svg/*` | New |
| `PillarCard`, `WeAreStrip`, `GlossaryChip` | `components/clarity/*` | New |
| Data: `lib/pillars.ts`, `lib/reach.ts`, `lib/compass.ts` | `lib/*` | New |
| `RivalBoard` → rename to `RentOwnBoard` (neutral copy); `lib/rivals.ts` → rename to `lib/channels.ts`; `FaqSection`, `JsonLd`, `BusinessDetails`, `CityBrowser`, `LegalDoc`, `SeoChunk` | existing | Restyle to Rangoli Pro |
| `ContactForm` | existing | Remove from use |
| Data | `lib/offers.ts`, `lib/prototypes.ts` (new), `lib/logos.ts` (new), `lib/blocks.ts` (new — 11 blocks, replaces `services` in `site.ts`), `lib/paths.ts` (new), `lib/cities.ts` (+greeting), `lib/faqs.ts` (+new Q&As), `lib/page-seo.ts` (+new routes) | |

**`lib/blocks.ts` shape**
```ts
export type Block = {
  slug: BlockSlug; // "site"|"store"|"pay"|"chat"|"pulse"|"ledger"|"file"|"desk"|"team"|"workspace"|"connect"
  name: string;            // "Webify Site"
  colour: string;          // CSS var name
  icon: string;            // Phosphor name or custom
  oneLiner: string;        // "Built for you to…"
  headline: string;
  capabilities: string[];
  tailoredFor: { business: string; how: string }[];
  channelSlug?: string;    // maps to lib/channels.ts
  includedFrom?: "starter"|"business"|"command";
  photo: string;           // existing /images/real/*
  svg: string;             // signature SVG component name
};
```

**`lib/paths.ts` shape**
```ts
export type Path = {
  slug: "launch"|"organise"|"grow";
  name: string; colour: string; icon: string;
  forYouIf: string; outcomes: string[];
  waMessage: string; suggestedTier: "starter"|"business"|"command";
};
```

---

## 13. Quality & acceptance criteria

**Performance (Vercel)**
- LCP < 2.0s (4G mobile), CLS < 0.05, INP < 200ms, Lighthouse ≥ 95 all categories.
- Hero images AVIF/WebP via `next/image`, `priority` only on hero. SVGs inline, each < 15 KB. No animation library > 10 KB.
- Fonts already self-hosted; keep `display: swap`.

**Accessibility**
- Contrast ≥ 4.5:1; Haldi only with ink text; focus ring 3px `--rani`.
- Flip cards, tabs, sliders fully keyboard-operable with ARIA roles; pause controls on auto-play.
- All motion off under `prefers-reduced-motion`.
- Alt text on every image; decorative SVGs `aria-hidden`.

**SEO**
- One H1 per page; unique title/description in `lib/page-seo.ts` for every new route.
- JSON-LD: Organization (site-wide), Service (per block), FAQPage (`/faq`, block pages), LocalBusiness (city pages, `areaServed`), Article (blog), BreadcrumbList.
- Redirects in place; sitemap updated; `llms.txt` rewritten to "custom-built" positioning with new routes and block names.

**Content honesty (blocking checks)**
- `grep` the built site for: "template", "200+", "4.9", "★", "Cr+", "just booked" → must return zero user-visible matches (except "no templates" / "templates fit everyone…" copy).
- No rendered `TODO` or `₹ TODO` strings.
- Every example-data chart shows a "Sample data" chip.
- Every logo row uses "Payments we set up / Works with / Compared to" wording.

**Clarity (blocking checks)**
- Every page hero passes the five-second test (§2.0.6): category or page purpose in one line, one photo, one CTA.
- No headline contains "vs", "beat", "better than" or a crossed-out partner logo.
- Every technical term (SaaS, PaaS, CRM, ERP, SEO, SEM, AI visibility, white-label) has a `GlossaryChip` on first use per page.
- Marketing pages show the caveat box; no ranking/mention guarantees anywhere.

**Analytics**
- Vercel Analytics events: `wa_click` (page, section, path), `estimator_send` (tier, addons count), `prototype_request` (slug), `flip_open` (tile id).

---

## 14. Owner TODO list (fill before launch)

Full business checklist lives in **`business-readiness.md`**. Site-specific items:

| # | Item | Where |
|---|---|---|
| 1 | Legal name, constitution, GSTIN, Udyam, phone | `lib/site.ts → BUSINESS` |
| 2 | Review §10 prices; confirm partner/reseller status for ₹0 setups; timelines | `lib/offers.ts`, `lib/reach.ts`, `lib/compass.ts` |
| 3 | Typical timelines per route (prototype / scratch / budget) | `MiniGantt`, Launch countdown |
| 4 | Confirm prototype teaser names and integrations | `lib/prototypes.ts` |
| 5 | Verify less-common city greetings | `lib/cities.ts` |
| 6 | Review brand assets on `/brand`; (optional, later) generated images from `image-prompts.md` | §17 |
| 7 | Real testimonials and team photos (with consent) | `published:false` until ready |
| 8 | Official logo SVGs from brand press kits | `/public/images/logos/` |
| 9 | Legal pages reviewed by a lawyer (Terms, Privacy/DPDP, Refund) | `lib/legal.ts` |
| 10 | Confirm Compass credit rule (default: 100% credited within 60 days) | `lib/compass.ts` |

---

## 15. Build order (for Claude Code)

| Phase | Deliverables | Done when |
|---|---|---|
| **0. Setup** | §18.1: files in repo root, `CLAUDE.md`, branch | Claude Code reads the plan |
| **1. Foundations** | Tokens in `globals.css` · Phosphor install · `lib/blocks.ts`, `lib/paths.ts`, `lib/logos.ts`, merged `lib/offers.ts` · `WhatsAppCTA` · `Webu` · core SVGs (BlockStack, PathFork, RangoliRoad, MoneyPath, TangledVsClean, TailorTape) · collage components (§16) with placeholder blocks · retire old images (§16.1) · Header + Footer + mobile dock · redirects | All pages render with new header/footer; redirects pass |
| **1b. Brand & SVG system** | §17.3 items 1–13 + §6.10 diagrams + `/brand` review page | Owner approves assets on `/brand` |
| **2. Home + paths** | Home · `/what-we-do` · `/solutions/launch` · `/solutions/organise` · `/solutions/grow` · `/how-we-work` | Every CTA opens WhatsApp with the right message |
| **3. Pillars + pricing** | `/systems` hub · 11 block pages · `/strategy` · `/marketing` + 5 service pages · `/integrations` · Pricing + estimator + RentVsOwn · tier pages | Estimator sends correct prefilled scope |
| **4. Industries, cities, prototypes** | Industries hub + 7 (incl. exporters) · Cities hub + map + greetings · Prototype Room with illustrated MockScreens | Filters, map and teasers work; screenshot swap tested via `kind` |
| **5. Rest + QA** | Registrations restyle · About · Blog restyle · FAQ · Contact · Legal · 404 · loading/empty states · JSON-LD · sitemap · `llms.txt` · §13 checks | All acceptance criteria pass |
| **6. Off-site brand kit** | §17.3 item 14 | WhatsApp/GBP/print assets exported |
| **Later** | `/showcase` (real case studies) · testimonials deck · dark mode · more industries · optional generated images (`image-prompts.md`) | — |

---

## 16. Imagery & collage system

### 16.1 Audit of existing images (repo `/public/images/`)

| Set | Files | Verdict | Use |
|---|---|---|---|
| `snapshots/market-*` | counter, electronics, flower, grain, mandi, spice, textile (1600×1200) | ✅ **Keep — best assets.** Real-looking, warm, unbranded | `BazaarStrip`, Retail & Cities collages, CTA band backgrounds |
| `snapshots/*` (people) | blog, cities, contact, legal, pricing, registrations, services, work (1600×1200) | ✅ Keep | Page heroes in arch masks (see 16.4) |
| `real/*` (1440×1080) | business-owner, ecommerce, education, healthcare, manufacturing, payments, real-estate, restaurant, retail, whatsapp | ⚠️ **Secondary.** Webify logo appears on *clients'* signs/shirts (looks staged) | Use only cropped (`object-position`) where logos are out of frame; replace with IMG-I-* when generated |
| `real/*` (768×414) | analytics-review, bookkeeping-compliance, consultation, growth-success | ⚠️ Low-res + branded | Small polaroids only, or retire |
| `industries/*.png`, `services/*.png` | 12 illustrations, 1–1.5 MB, old teal palette, invented dashboard numbers | ❌ **Retire** | Delete from use |
| `brand/*.png` | about-team, cta-banner, process | ❌ Retire (text cut off, small) | — |
| `blog/*.png` | 204×280 thumbnails | ❌ Retire → BL01–BL07 | — |
| `hero/*` | dashboard art (fake numbers, old palette) | ❌ Retire | — |

New images go to `/public/images/v2/{id}.webp` (IDs from `image-prompts.md`). Convert to WebP, max 1600px long edge, < 200 KB.

### 16.2 Collage components (`components/collage/*`)

| ID | Component | Spec | Motion |
|---|---|---|---|
| A | **`RangoliCollage`** | 1 large + 4 small photos in petal / arch / blob `clipPath` masks around a central phone `MockScreen`; 2px white stroke + soft shadow per photo; 3 `FloatingUiSticker`s (UI toasts) overlapping photo edges | Photos fade/scale in 80ms stagger; stickers pop; 2° parallax on pointer move (desktop) |
| B | **`BazaarStrip`** | Horizontal filmstrip of 6–8 photos, 4:3, 16px gap, alternating ±2° tilt, rounded 16px | Slow drift 60s loop, pause on hover; static under reduced-motion |
| C | **`PolaroidCluster`** | 3–4 photos with white polaroid frame, washi-tape SVG corners, Sora-italic caption beneath, overlapping at −6°/+4°/−2° | Hover: lifted polaroid straightens |
| D | **`PhotoBento`** | 1 large (2×2) + 4–6 small cells; mixes photos with colour tiles holding an icon + 3-word label | Reveal stagger |
| E | **`ArchWindows`** | 3 photos in jharokha-arch masks side by side (or single arch for page heroes) | Arch outline draws, photo fades in |
| F | **`PhotoUiLayer`** | One photo with 1–3 floating UI cards (WhatsApp bubble, payment success, KPI card) anchored to edges | Cards float 4px loop |
| G | **`MasonryWall`** | Variable-height grid for blog/prototypes | FLIP on filter |
| H | **`FloatingUiSticker`** | Small white card, 12px radius, icon + one line (e.g. "UPI received ₹1,240 ✅") — sample content only, marked `aria-hidden` | Pop-in |

Rules: max **one collage per viewport**; every photo has meaningful `alt`; phone/laptop screens in photos are **blank** — real UI is overlaid in code (AI-generated screen text is unreliable); collages collapse to a 2-up grid or single swipeable deck on mobile.

### 16.3 Image slots
IDs below are **slots** — at launch they resolve to existing photos or SVG scenes via §17.2. `<ImageSlot id="IMG-H01" ratio="2:3" tint="rani" />` renders a tinted block with Webu-building icon and the ID in `data-img`. Never ship a missing file.

### 16.4 Page-by-page image map

| Page | Section | Collage / grid | Images |
|---|---|---|---|
| **Home** | Hero | A `RangoliCollage` | IMG-H01 (large), H02, H03, H04, H05 |
| | We are / aren't | Round crops | existing `snapshots/contact`, `snapshots/services` |
| | Four pillars | Card photo headers | existing `snapshots/work` · IMG-B09 · IMG-B01 · IMG-R05 |
| | The gap (burst) | B at 10% under gradient | existing market set |
| | Three paths | Card tops | IMG-P02, P01, P03 |
| | Systems bento | D photo cells | IMG-B03, B09, B10 |
| | Marketing spotlight | F | IMG-B01 + `SearchResultMock` + `AiAnswerMock` |
| | Which one are you? | Flip fronts | IMG-I-*-2 (7) + B11 |
| | Strategy first | E | existing `snapshots/work`, `snapshots/pricing`, IMG-R03 |
| | Five ways | Thumbs | IMG-B08, A02, B09, N01, B11 |
| | How it works | Road thumbs | IMG-R01, existing `snapshots/work`, R03, R04, R05 |
| | Pricing teaser | Ticket photo strips | IMG-B06, B02, H05 (thin crops) |
| | Why Webify | D | IMG-B11 large, B05, existing `snapshots/registrations` |
| | CTA band | B at 12% | existing market set |
| **What we do** | Hero | D (4 cells) | same 4 pillar photos as Home |
| | Pillar rows | E single arches | `snapshots/work` · B09 · B01 · R05 (different crops from Home) |
| **Strategy** | Hero | E | existing `snapshots/work`, `snapshots/contact`, IMG-R03 |
| | Offer tickets | Photo strips | existing `snapshots/pricing`, A01, A02 |
| **Marketing hub** | Hero | F | IMG-B01 + mocks |
| | Where customers look | Photo tiles | existing `snapshots/cities` · IMG-I-RET-1 · B04 · B05 |
| | AI explainer | Mock only | `AiAnswerMock` |
| **Marketing pages** | Hero | F | seo: B01 · ads: B04 · local: I-RET-1 · ai-visibility: B05 · campaigns: R04 |
| **Organise** | Hero | F | IMG-P01 + "Order missed?" bubble |
| | Tailor zig-zag | E single arches | existing `snapshots/services`, `snapshots/work`, IMG-B08 |
| **Launch** | Hero | C | IMG-P02, B07, B11 |
| | Who it's for | D | IMG-H04, P02, existing `snapshots/registrations` |
| **Grow** | Hero | F | IMG-P03 + "Order from Dubai ✅" sticker |
| | Growth bento | Photo cells | IMG-H04, H05, B02 |
| **How we work** | Hero | B (process strip) | IMG-R01, existing `snapshots/work`, R03, R04, R05 |
| | Roadmap stops | Circle thumbs | same as above + existing `snapshots/contact`, `snapshots/pricing` |
| **Systems hub** | Hero | D | IMG-B01, B02, B03, B09, B10 |
| **Systems pages** | Hero | F (photo + UI sticker) | Site B01 · Store B02 · Pay B03 · Chat B04 · Pulse B05 · Ledger B06 · File B07 · Desk B09 · Team B10 · Workspace B11 · Connect B08 |
| | Tailored-for flips | Flip fronts | matching IMG-I-*-2 |
| **Integrations** | Hero | F | IMG-N01 |
| **Industries hub** | Top | D | IMG-I-*-1 (7) |
| **Industry pages** | Hero | E single arch + C polaroids (2) | IMG-I-{X}-1 hero, IMG-I-{X}-2 + one existing photo (Retail: market-counter · Restaurant: market-spice · Manufacturing: market-grain · Exporters: market-textile) |
| | Day-in-the-life rail | Slide backgrounds (tinted) | I-{X}-1, I-{X}-2, B04, B05 |
| **Pricing** | Hero | E | existing `snapshots/pricing` |
| **Prototype Room** | Hero | C (illustrated mocks) | SVG `MockScreen`s (no photos) |
| **Cities hub** | Hero | E ×3 + region swap | IMG-C01–C06; existing `snapshots/cities` |
| **City pages** | Hero | Single arch | Regional banner IMG-C0x by region + `CitySkyline` |
| **Registrations** | Hero | E | existing `snapshots/registrations` + IMG-B07 |
| **About** | Hero | B | existing market set |
| | Our team setup | C (objects/hands only) | IMG-A01, A02, A03 |
| **Blog** | Hub | G | BL01–BL07 category covers; featured uses existing `snapshots/blog` |
| | Post | Cover | category cover |
| **FAQ** | Hero | — | Webu only |
| **Contact** | Hero | E | existing `snapshots/contact` |
| **Legal** | Hero | — | existing `snapshots/legal` (small) |
| **404 / loading** | — | — | Webu SVG |
| **Mascot** | — | — | IMG-W01 is a *reference sheet* for drawing the SVG, not shipped |

### 16.5 Making the site image-rich without new images

The pool is **55 generated + 15 existing photos**. Reuse is deliberate, but the same photo should never look identical in two places on one page, and never appear twice on the same screen.

| Technique | How | Example |
|---|---|---|
| **Crop variants** | `object-position` presets per use: `wide`, `face`, `hands`, `detail` stored in `lib/images.ts` | IMG-B09: wide team shot on Home, sticky-note detail on Desk page |
| **Masks** | Petal, arch, blob, circle, polaroid `clipPath`s | Same photo as arch on Strategy, circle on the road |
| **Duotone tint** | CSS `mix-blend-mode: multiply` over a pillar/page accent at 15–70% | Market photos in Marigold duotone on Marketing, Indigo on Cities |
| **Photo + UI overlay** | `PhotoUiLayer` with different `FloatingUiSticker`s | IMG-B01 + search card (SEO) vs + AI bubble (AI visibility) |
| **Collage remix** | Different neighbours change the feel | IMG-H04 with exporter photos (Grow) vs founder photos (Launch) |
| **Backdrops** | Blurred (8px) + 10–15% opacity behind gradients | Market set behind CTA band and burst sections |
| **Thin strips** | 4:1 crops as ticket/tile headers | Pricing tickets, offer cards |

**Image density targets**
- Home: ≥ 14 photo placements · major pages (paths, pillars, industries, marketing, strategy): ≥ 5 · detail pages (blocks, services, cities): ≥ 3 · FAQ/legal: 1 small or none.
- Never two adjacent sections without a visual (photo, collage, mock or SVG).
- Mobile: collages collapse to one hero photo + swipe deck; density target halves.

**`lib/images.ts`** (single registry so reuse stays consistent)
```ts
export type ImageAsset = {
  id: string;                 // "IMG-B01" or "EX-market-spice"
  src: string;                // /images/v2/IMG-B01.webp or existing path
  alt: string;
  crops: Partial<Record<"wide"|"face"|"hands"|"detail"|"strip", string>>; // object-position values
  status: "ready" | "pending"; // pending → <ImageSlot> placeholder
};
```

---

## 17. Launch image strategy — existing photos + SVG brand system (no image generation)

**Decision:** the site launches **without any newly generated images**. Every `IMG-*` slot in §16 resolves to an **existing repo photo** (with crop, mask or duotone) or to an **SVG illustration built by Claude Code**. `image-prompts.md` becomes an optional later upgrade: when a generated file is added, flip that slot's `status` and the site uses it automatically.

### 17.1 How slots resolve (`lib/images.ts`)

```ts
export type ImageSlot = {
  id: string;                       // "IMG-H01"
  now: { kind: "photo"; src: string; crop: string; treatment?: "duotone" | "blur" | "none" }
     | { kind: "svg"; component: string };     // what renders at launch
  later?: string;                   // /images/v2/IMG-H01.webp (if generated in future)
  status: "launch" | "upgraded";
  alt: string;
};
// <Img slot="IMG-H01" /> renders `later` when status === "upgraded", otherwise `now`.
```

### 17.2 Slot map (launch)

Existing pool: `snapshots/market-*` (7), `snapshots/*` people (8), `real/*` (10 large + 4 small). `real/*` photos show Webify branding inside client premises → **always crop away signage** with the `crop` value, or apply duotone + 2px blur on backgrounds.

| Slot | Launch source | Crop / treatment | Notes |
|---|---|---|---|
| IMG-H01 kirana UPI | `real/payments.webp` | `object-position: 40% 55%` | Hero large petal |
| IMG-H02 cloud kitchen | `real/restaurant.webp` | `60% 50%` | |
| IMG-H03 clinic | `real/healthcare.webp` | `30% 70%` (crop signage) | |
| IMG-H04 exporter | `real/ecommerce.webp` | `50% 65%` hands + boxes | |
| IMG-H05 factory | `real/manufacturing.webp` | `50% 50%` | |
| IMG-P01 organise (busy counter) | `snapshots/market-counter.webp` | `50% 50%` | |
| IMG-P02 launch (new founder) | `snapshots/services.webp` | `45% 50%` | |
| IMG-P03 grow (dispatch) | `snapshots/market-grain.webp` | `50% 60%` | Movement/scale feel |
| IMG-B01 site / search | `snapshots/cities.webp` | `50% 40%` | Person with phone in lane |
| IMG-B02 store | `real/ecommerce.webp` | `70% 70%` (detail crop) | Different crop from H04 |
| IMG-B03 pay | `real/retail.webp` | `55% 60%` (QR stand) | |
| IMG-B04 chat | `real/whatsapp.webp` | `40% 50%` | |
| IMG-B05 pulse | `real/business-owner.webp` | `35% 55%` (crop signage) | |
| IMG-B06 ledger | `snapshots/pricing.webp` | `50% 60%` | |
| IMG-B07 file | `snapshots/legal.webp` | `50% 55%` | |
| IMG-B08 connect | **SVG** `ConnectScene` | — | Laptop + bahi-khata + phone, flat vector |
| IMG-B09 desk | `snapshots/work.webp` | `50% 45%` | Sticky-note wall |
| IMG-B10 team | `real/education.webp` | `60% 60%` (crop sign) | Staff at desk |
| IMG-B11 workspace | `snapshots/contact.webp` | `50% 50%` | |
| IMG-I-RET-1 / -2 | `market-electronics` / `real/retail` | wide / `30% 60%` | |
| IMG-I-RES-1 / -2 | `real/restaurant` / `market-spice` | `20% 50%` / `50% 50%` | |
| IMG-I-CLI-1 / -2 | `real/healthcare` / **SVG** `ClinicScene` | `70% 50%` / — | |
| IMG-I-EDU-1 / -2 | `real/education` / `snapshots/blog` | `30% 50%` / `50% 50%` | |
| IMG-I-MFG-1 / -2 | `real/manufacturing` / `market-grain` | `30% 50%` / `70% 50%` | |
| IMG-I-EXP-1 / -2 | `market-textile` / **SVG** `ExportScene` | `50% 50%` / — | Boxes + globe + Stripe card |
| IMG-I-RE-1 / -2 | `real/real-estate` (crop sign) / **SVG** `PropertyScene` | `60% 55%` / — | |
| IMG-R01 discovery call | `snapshots/contact` | `30% 50%` (different crop from B11) | |
| IMG-R03 design review | `real/analytics-review` (small) | circle thumb only | |
| IMG-R04 launch day | `real/growth-success` (small) | circle thumb only | |
| IMG-R05 care / support | `real/whatsapp` | `70% 40%` | |
| IMG-N01 old meets new | **SVG** `BahiKhataScene` | — | Red ledger + laptop + chai |
| IMG-C01–C06 regions | market photos + **SVG** regional skyline overlay | duotone in region colour | C01 grain · C02 flower · C03 `snapshots/cities` · C04 textile · C05 mandi · C06 spice |
| IMG-A01 team flat-lay | **SVG** `DeskFlatLay` | — | |
| IMG-A02 wireframe sketch | **SVG** `WireframeSketch` | — | |
| IMG-A03 Kolkata | **SVG** `KolkataSkyline` (Howrah Bridge, tram, taxi) | — | |
| IMG-BL01–BL07 blog covers | **SVG** `BlogCover` generator | — | Category colour + composed icons (§17.4) |
| IMG-W01 mascot ref | not needed | — | Claude Code draws Webu directly |

**Variety rule:** the same photo never appears twice on one screen; reuse across pages always changes crop, mask or treatment (§16.5).


### 17.2a Photo-only mode (**default for now**)

To keep the first build simple, **every slot uses an existing photo — no SVG scenes are required for launch.** The slots that §17.2 maps to SVG fall back to these photos:

| Slot | Existing photo (photo-only mode) | Crop / treatment |
|---|---|---|
| IMG-B08 connect | `snapshots/registrations.webp` | `60% 50%` + floating "Tally ⇄ Zoho synced ✅" sticker |
| IMG-I-CLI-2 | `real/healthcare.webp` | `75% 40%` (second crop) |
| IMG-I-EXP-2 | `real/ecommerce.webp` | `20% 70%` (box detail) |
| IMG-I-RE-2 | `real/real-estate.webp` | `80% 60%` (second crop, sign cropped) |
| IMG-N01 old meets new | `snapshots/registrations.webp` | `40% 55%` + floating ledger-sync sticker |
| IMG-A01 team flat-lay | `snapshots/work.webp` | `70% 50%` |
| IMG-A02 wireframe | `snapshots/blog.webp` | `55% 60%` (notebook detail) |
| IMG-A03 Kolkata | `snapshots/cities.webp` | `50% 50%` + Indigo duotone |
| IMG-BL01–BL07 blog covers | Rotate the 7 `snapshots/market-*` photos | Category-colour duotone + category label chip |
| IMG-C01–C06 regions | As §17.2 (already photos) | Region-colour duotone, no skyline overlay needed |

Set `IMAGE_MODE = "photo"` in `lib/images.ts`. Later, switching to `"mixed"` turns on the SVG scenes from §17.2 without other code changes.

**What is still SVG in photo-only mode** (these are UI, not pictures): icons, logo variants, favicons, patterns/dividers, Webu mascot, diagrams (§6.10), UI mocks, and the India dot map. These are needed for the site to work.

**Claude Code instruction:** *"Use existing images in `/public/images/` only. Do not create illustration scenes. Resolve every IMG slot through §17.2 / §17.2a in photo-only mode."*

### 17.3 Brand asset kit (built by Claude Code)

Everything below is SVG or code-generated, stored in the repo, and previewed on an internal page **`/brand`** (noindex) so the owner can review and download.

| # | Asset | Files / component | Spec |
|---|---|---|---|
| 1 | **Logo system** | `public/brand/logo/*.svg` from existing `wb-mark.svg` | Variants: full colour horizontal, stacked, mark only, mono ink, mono white, on-gradient. **Do not redraw the mark** — reuse its paths; wordmark set in Sora 700. Clear-space = mark height × 0.5; min size 24px mark |
| 2 | Favicons & app icons | `app/icon.svg`, `apple-icon.png`, `manifest.webmanifest` | Generated from mark; maskable icon with Blush background |
| 3 | **Open Graph images** | `app/**/opengraph-image.tsx` (next/og) | 1200×630: page title (Sora), pillar/path colour band, rangoli pattern corner, Webu small, logo. One template, data-driven per route |
| 4 | **Icon set** | Phosphor duotone + `components/icons/india/*` | Custom: UPI arrow, rupee coin, ₹-slash, kirana shop, chai cup, scooter, diya, rangoli dot, GST stamp, Udyam badge, mandi scale, auto-rickshaw, tailor tape, bahi-khata, bridge. 24px grid, 2px stroke, round joins, duotone fill at 30% |
| 5 | **Patterns & dividers** | `components/svg/patterns/*` | Rangoli dot-grid, jaali lattice, block-print border, paisley corner, marigold garland, wave divider, kolam line. Tileable, `currentColor` |
| 6 | **Webu mascot** | `components/Webu.tsx` | 8 states (§6.12), single SVG with state prop, < 10 KB each |
| 7 | **Spot illustrations** *(skip in photo-only mode; later)* | `components/svg/scenes/*` | `ConnectScene`, `ClinicScene`, `ExportScene`, `PropertyScene`, `BahiKhataScene`, `DeskFlatLay`, `WireframeSketch`, `KolkataSkyline`, shopfront, kitchen, classroom, factory. Style: flat vector, 2px ink outline, Rangoli palette, **simple faceless figures**, no gradients except soft shadow |
| 8 | **City skylines** *(optional; later)* | `components/svg/skylines/*` | 10 hand-built (Kolkata, Mumbai, Delhi, Chennai, Bengaluru, Hyderabad, Jaipur, Ahmedabad, Lucknow, Bhubaneswar) + generic fallback; single-line style |
| 9 | **India dot map** | `components/svg/IndiaDotMap.tsx` | 33 dots from `cities.ts` coordinates; simplified outline |
| 10 | **UI mocks** | `components/svg/mocks/*` | `MockScreen` ×8 prototypes, `SearchResultMock`, `AiAnswerMock`, `OwnerDashboard`, `PipelineBoard`, `FloatingUiSticker`, WhatsApp chat mock, UPI success mock. Generic UI, no third-party branding |
| 11 | **Diagrams** | §6.10 list | All diagrams as React SVG components with props |
| 12 | **Blog cover generator** | `components/svg/BlogCover.tsx` + `app/blog/[slug]/opengraph-image.tsx` | Category colour bg + 2–3 composed icons + pattern; same output used as OG |
| 13 | **Photo treatments** | `components/collage/*` + `lib/images.ts` | Masks (petal, arch, blob, circle, polaroid), duotone per accent, grain overlay, blur backdrop |
| 14 | **Off-site brand kit** (exports in `public/brand/kit/`) | SVG/PNG | WhatsApp profile picture (640×640), WhatsApp catalogue cover, Google Business Profile cover (1024×576), LinkedIn/Instagram banner, business card (front/back, 90×50 mm), letterhead (A4), email signature (HTML), proposal/scope cover page, invoice header |
| 15 | **Brand guide page** | `/brand` | Logo do/don't, colours with hex & contrast, type scale, icon grid, patterns, Webu states, photo treatments, voice rules, glossary |

### 17.4 Blog cover recipe (SVG, no photos)
| Category | Background | Icons composed |
|---|---|---|
| Start a business | Marigold | name board + key + sprout |
| Payments | Peacock | phone + UPI arrow + rupee coin |
| WhatsApp | Mehendi | chat bubbles ×3 |
| Get found | Rani | map pin + shopfront |
| Rent + Own | Indigo | key + shop + app tile |
| Costs & GST | Haldi (ink icons) | calculator + stamp + invoice |
| Custom vs template | Rani | tailor tape + shop |
| AI & search | Indigo | sparkle + chat bubble + magnifier |

### 17.5 Image-richness without generation — what makes it work
1. **Photo + SVG layering**: every reused photo gets a `FloatingUiSticker` or mock card on top, so the same photo tells different stories.
2. **Illustration where photos are thin**: About, Integrations, Prototype Room, blog covers, process diagrams are fully SVG — consistent and on-brand.
3. **Patterns everywhere quietly**: rangoli/jaali patterns at 4–6% opacity on section backgrounds give texture without photos.
4. **Density targets (§16.5) still apply** — counting photos *and* illustrations.

---

## 18. Claude Code playbook

### 18.1 Setup (once)
1. Put these files in the **repo root**: `content-plan.md`, `business-readiness.md`, `image-prompts.md` (optional, for later).
2. Create `CLAUDE.md` in the repo root with:
   ```md
   # Project rules
   - Source of truth: content-plan.md. Follow §0 instructions and §1 decisions exactly.
   - Never invent numbers, stats, testimonials or client names. Placeholders stay hidden (published:false).
   - Use existing images in /public/images only (photo-only mode, §17.2a). No new raster images, no illustration scenes for now.
   - Every CTA uses waLink() with the page-specific message (§4.2).
   - Fonts: Sora / Manrope / JetBrains Mono (already in app/fonts.ts).
   - Run `npm run build` and `npm run lint` before finishing any task. Fix all errors.
   - Commit at the end of each phase with message "Phase N: <summary>".
   ```
3. Start a git branch: `git checkout -b redesign-rangoli-pro`.
4. Model choice: **Opus for Phase 1 and 1b** (foundations, data merge, brand system); **Sonnet for Phases 2–5**.

### 18.2 Phases & copy-paste prompts

| Phase | Prompt to paste into Claude Code | Check before moving on |
|---|---|---|
| **1 · Foundations** | "Read content-plan.md fully. Do Phase 1 from §15: design tokens (§6.2), data files (`lib/blocks.ts`, `lib/paths.ts`, `lib/pillars.ts`, `lib/reach.ts`, `lib/compass.ts`, `lib/logos.ts`, `lib/images.ts` per §17.1–17.2, merged `lib/offers.ts` per §10), rename `rivals.ts` → `channels.ts`, WhatsAppCTA (§4), Header/Footer/mobile dock (§7–8), redirects (§9.0). Don't build pages yet." | `npm run build` passes; header menus show 4 pillars; old URLs redirect |
| **1b · Brand & SVG system** | "Photo-only mode (§17.2a). Do §17.3 items 1–6 and 9–13 (skip 7–8) and the diagram list in §6.10: logo variants from `wb-mark.svg`, favicons, OG template, icon set, patterns, Webu (8 states), India dot map, UI mocks, collage components with photo treatments. Build the `/brand` review page (noindex)." | Open `/brand` locally and review every asset |
| **2 · Home + paths** | "Do Phase 2: Home (§9.1, 17 sections, image map §16.4 resolved through §17.2), `/what-we-do`, `/solutions/launch`, `/solutions/organise`, `/solutions/grow`, `/how-we-work`. Pass the five-second test (§2.0.6)." | Every CTA opens WhatsApp with the right prefilled text |
| **3 · Pillars + pricing** | "Do Phase 3: `/systems` hub + 11 pages, `/strategy`, `/marketing` + 5 service pages, `/integrations`, Pricing (§10.8) with monthly/annual toggle, comparison table, over-limit example, add-ons and ScopeEstimator (§10.7), stage pages." | Estimator recommends the cheapest stage and sends the scope |
| **4 · Industries, cities, prototypes** | "Do Phase 4: industries hub + 7 pages, cities hub with IndiaDotMap + greetings (§11), city template, Prototype Room (§9.10) with 8 illustrated MockScreen teasers." | Filters work; no prototype links anywhere |
| **5 · Rest + QA** | "Do Phase 5: registrations, about, blog (with SVG BlogCover), FAQ, contact, legal, 404, loading/empty states, JSON-LD, sitemap, llms.txt, then run every check in §13 and report results." | All §13 checks pass |
| **6 · Off-site brand kit** | "Do §17.3 item 14: export the off-site brand kit to `public/brand/kit/` (SVG + PNG)." | Download and test WhatsApp/GBP images on phone |

### 18.3 Review routine after each phase
1. `npm run dev` → click through every new page on desktop **and** phone width.
2. Five-second test on each hero (§2.0.6).
3. Search the codebase for placeholders: `grep -rn "TODO\|\[\[" app components lib` — none should render in UI.
4. Push the branch → check the **Vercel preview link** on your phone.
5. Merge to main only after Phase 5 QA passes.

### 18.4 Later upgrade (optional)
When you generate real images later (`image-prompts.md`), drop them in `/public/images/v2/`, set each slot's `status: "upgraded"` in `lib/images.ts`, and nothing else changes.

---

<p align="center"><b>Webify Bharat</b> · Custom software for your whole business. All in one place.<br><i>Aapka business. Aapke hisaab se.</i></p>
<p align="center"><sub>All third-party names and logos belong to their owners and are shown only to indicate compatibility or comparison. Prices are starting points, exclude GST, and are confirmed in a written scope.</sub></p>
