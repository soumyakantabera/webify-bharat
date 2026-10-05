import type { Metadata } from "next";
import QRCode from "qrcode";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Webu } from "@/components/Webu";
import { ArchWindows } from "@/components/collage";
import { BreadcrumbLd } from "@/components/SeoLd";
import { RangoliRoad } from "@/components/svg/RangoliRoad";
import { PageHero, PromiseOrb, SectionHead } from "@/components/tiles";
import { pageMetadata } from "@/lib/page-seo";
import { BUSINESS, filled, SITE } from "@/lib/site";
import { WA_MSG } from "@/lib/wa";
import { waLink } from "@/lib/wa-link";

export const metadata: Metadata = pageMetadata("contact");

const MESSAGE = WA_MSG.default;

export default async function ContactPage() {
  const qr = await QRCode.toString(waLink(MESSAGE), { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#1B1030", light: "#ffffff" } });
  const phone = filled(BUSINESS.phone) ? BUSINESS.phone : null;

  return (
    <Layout cta={{ title: "One message is all it takes.", message: MESSAGE, webu: "waving" }}>
      <BreadcrumbLd seoKey="contact" />
      <PageHero
        kicker="Contact"
        title="The fastest way to reach us is WhatsApp."
        sub="Tell us your business, your city and what you need. A real person replies."
        cta={<WhatsAppCTA message={MESSAGE} context="hero" label="WhatsApp us" />}
        visual={<Webu state="waving" size={220} title="Webu, our mascot, waving hello" />}
      />

      <section className="section surface-2" id="reach" aria-labelledby="reach-title">
        <div className="container">
          <h2 id="reach-title" className="sr-only">Ways to reach us</h2>
          <div className="contact-grid">
            <div className="contact-main">
              <Icon name="ChatCircleDots" size={36} />
              <h3>WhatsApp us</h3>
              <p>Tell us your business, city and what you need.</p>
              <WhatsAppCTA message={MESSAGE} context="contact-main" label="Open WhatsApp" />
              <div className="contact-qr">
                <div className="contact-qr-code" aria-hidden="true" dangerouslySetInnerHTML={{ __html: qr }} />
                <span>On a computer? Scan with your phone.</span>
              </div>
            </div>
            <div className="contact-photo">
              <ArchWindows slots={["/images/snapshots/contact.webp"]} />
            </div>
            <div className="contact-info">
              <a href={`mailto:${SITE.email}`} className="contact-tile">
                <Icon name="EnvelopeSimple" size={24} />
                <span>
                  <strong>Email</strong>
                  {SITE.email}
                </span>
              </a>
              {phone ? (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="contact-tile">
                  <Icon name="PhoneCall" size={24} />
                  <span>
                    <strong>Phone</strong>
                    {phone}
                  </span>
                </a>
              ) : null}
              <div className="contact-tile">
                <Icon name="MapPin" size={24} />
                <span>
                  <strong>Registered office, Kolkata</strong>
                  We work remotely across India.
                </span>
              </div>
            </div>
          </div>
          <PromiseOrb icon="ClockCountdown">
            <strong>{SITE.replyPromise}</strong>
          </PromiseOrb>
        </div>
      </section>

      <section className="section" id="send" aria-labelledby="send-title">
        <div className="container">
          <SectionHead kicker="What to send us" id="send-title" title="Three things help us reply properly." align="center" />
          <ul className="send-chips">
            <li>
              <Icon name="Storefront" size={22} /> Your business type
            </li>
            <li>
              <Icon name="MapPin" size={22} /> Your city
            </li>
            <li>
              <Icon name="RocketLaunch" size={22} /> Launch, Organise or Grow
            </li>
          </ul>
        </div>
      </section>

      <section className="section surface-2" id="next" aria-labelledby="next-title">
        <div className="container narrow">
          <SectionHead kicker="What happens next" id="next-title" title="From hello to a written scope." align="center" />
          <RangoliRoad
            scooter={false}
            stops={[
              { label: "You message us", detail: "A real person replies within a few hours.", colour: "#25D366" },
              { label: "A short chat", detail: "We ask how your business works and what you need.", colour: "#E6007E" },
              { label: "Written scope + price", detail: "On WhatsApp, before you pay anything.", colour: "#FF6B00" },
            ]}
          />
        </div>
      </section>
    </Layout>
  );
}
