import { Arw } from "@/components/Glyph";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Icon } from "@/components/Icon";
import { Img } from "@/components/collage";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import HeaderClient from "@/components/HeaderClient";
import { IndiaDotMap } from "@/components/svg/IndiaDotMap";
import { MAIN_LINKS, RESOURCES, WHAT_WE_DO, WHO_FOR, WORKS_WITH_STRIP, type NavLink } from "@/lib/nav";
import { SITE } from "@/lib/site";

/**
 * Global header (content-plan §7). Server-rendered menus and icons; the
 * client part only handles open/close, scroll state and the mobile dock.
 */

function LinkList({ links, className = "mm-links" }: { links: NavLink[]; className?: string }) {
  return (
    <ul className={className}>
      {links.map((l) => (
        <li key={l.href + l.label}>
          <Link href={l.href}>
            {l.icon ? <Icon name={l.icon} size={18} /> : null}
            <span>{l.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function WhatPanel() {
  return (
    <div className="mega-inner">
      <div className="mega-cols mega-cols-4">
        {WHAT_WE_DO.map((p) => (
          <div className="mega-col mega-pillar" key={p.slug} style={{ ["--accent" as string]: `var(${p.colour})` }}>
            <Link href={p.href} className="mega-pillar-head">
              <Img slot={p.photo} mask="rounded" className="mega-photo" width={320} height={140} decorative />
              <span className="mega-pillar-title">
                <Icon name={p.icon} size={22} />
                <span>
                  <strong>{p.name}</strong>
                  <small>{p.product}</small>
                </span>
              </span>
            </Link>
            <p className="mega-oneline">{p.oneLine}</p>
            {p.groups.map((g, i) => (
              <div key={g.label ?? i} className="mega-group">
                {g.label ? <span className="mega-group-label">{g.label}</span> : null}
                <LinkList links={g.links} className={p.slug === "systems" ? "mm-chips" : "mm-links"} />
              </div>
            ))}
            <Link href={p.href} className="mega-more">
              {p.slug === "care" ? "See what's included" : `All of ${p.name.toLowerCase()}`} <Arw />
            </Link>
          </div>
        ))}
      </div>
      <Link href={WORKS_WITH_STRIP.href} className="mega-strip">
        <Icon name="PlugsConnected" size={18} />
        {WORKS_WITH_STRIP.text} <Arw />
      </Link>
    </div>
  );
}

function WhoPanel() {
  return (
    <div className="mega-inner">
      <div className="mega-cols mega-cols-3">
        <div className="mega-col">
          <span className="mega-col-title">By stage</span>
          <ul className="mm-paths">
            {WHO_FOR.paths.map((p) => (
              <li key={p.href} style={{ ["--accent" as string]: `var(${p.colour})` }}>
                <Link href={p.href}>
                  <span className="mm-path-icon"><Icon name={p.icon!} size={22} /></span>
                  <span>
                    <strong>{p.label}</strong>
                    <small>{p.desc}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mega-col">
          <span className="mega-col-title">By industry</span>
          <LinkList links={WHO_FOR.trades} />
          <Link href={WHO_FOR.anyOther.href} className="mega-more">{WHO_FOR.anyOther.label} <Arw /></Link>
        </div>
        <div className="mega-col">
          <span className="mega-col-title">Anywhere in India</span>
          <p className="mega-oneline">Fully remote over WhatsApp.</p>
          <LinkList links={WHO_FOR.cities} className="mm-chips" />
          <Link href={WHO_FOR.allCities.href} className="mega-more">{WHO_FOR.allCities.label} <Arw /></Link>
          <IndiaDotMap compact linkDots={false} className="mega-map" />
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel() {
  return (
    <div className="mega-inner mega-small">
      <LinkList links={RESOURCES} className="mm-links mm-grid" />
    </div>
  );
}

function MobileWhat() {
  return (
    <div className="ms-groups">
      <Link href="/what-we-do" className="ms-overview">Overview: what we do <Arw /></Link>
      {WHAT_WE_DO.map((p) => (
        <div key={p.slug} className="ms-group" style={{ ["--accent" as string]: `var(${p.colour})` }}>
          <Link href={p.href} className="ms-group-head">
            <Icon name={p.icon} size={20} />
            <strong>{p.name}</strong>
            <small>{p.product}</small>
          </Link>
          {p.slug === "systems" || p.slug === "marketing" ? (
            <LinkList links={p.groups.flatMap((g) => g.links)} className="mm-chips" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function MobileWho() {
  return (
    <div className="ms-groups">
      <LinkList links={WHO_FOR.paths.map((p) => ({ href: p.href, label: p.label, icon: p.icon }))} />
      <span className="mega-group-label">By industry</span>
      <LinkList links={WHO_FOR.trades} />
      <span className="mega-group-label">Anywhere in India</span>
      <LinkList links={[...WHO_FOR.cities, WHO_FOR.allCities]} className="mm-chips" />
    </div>
  );
}

const RIBBON_SCRIPT = `try{if(localStorage.getItem("wb-ribbon")==="off")document.documentElement.dataset.ribbon="off"}catch(e){}`;

export default function Header() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: RIBBON_SCRIPT }} />
      <HeaderClient
        logo={<BrandLogo />}
        ribbon={
          <>
            <Icon name="Scissors" size={16} weight="bold" className="ribbon-ic" /> <strong>Your customers, your system — every build made for one business.</strong>{" "}
            <WhatsAppCTA variant="ghost" context="ribbon" className="ribbon-cta">
              WhatsApp us <Arw />
            </WhatsAppCTA>
          </>
        }
        menus={[
          { id: "what", label: "What we do", panel: <WhatPanel />, mobile: <MobileWhat /> },
          { id: "who", label: "Who it's for", panel: <WhoPanel />, mobile: <MobileWho /> },
          { id: "resources", label: "Resources", panel: <ResourcesPanel />, mobile: <LinkList links={RESOURCES} /> },
        ]}
        mainLinks={MAIN_LINKS}
        replyNote={SITE.replyShort}
        cta={<WhatsAppCTA context="header" className="nav-wa" />}
        mobileCta={<WhatsAppCTA context="mobile-menu" className="ms-wa" />}
        dockCta={<WhatsAppCTA variant="dock" context="dock" label="WhatsApp" />}
        icons={{
          home: <Icon name="House" size={22} />,
          what: <Icon name="SquaresFour" size={22} />,
          pricing: <Icon name="Tag" size={22} />,
          menu: <Icon name="List" size={22} weight="bold" />,
          close: <Icon name="X" size={22} weight="bold" />,
          caret: <Icon name="CaretDown" size={14} weight="bold" />,
        }}
      />
    </>
  );
}
