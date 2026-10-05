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

const MAIN_ICONS: Record<string, string> = { "/how-we-work": "PencilSimpleLine", "/pricing": "Tag", "/prototypes": "Flask" };

/** Phone menu: everything the desktop mega-menus offer, fully open — photos, icons, chips. */
function MobileMenu() {
  return (
    <div className="mx">
      <ul className="mx-quick">
        {[...MAIN_LINKS, { href: "/contact", label: "Contact" }].map((l) => (
          <li key={l.href}>
            <Link href={l.href}>
              <Icon name={MAIN_ICONS[l.href] ?? "ChatCircleDots"} size={20} />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <section className="mx-sec" aria-labelledby="mx-what">
        <div className="mx-head">
          <h2 id="mx-what">What we do</h2>
          <Link href="/what-we-do" className="mx-all">Overview <Arw /></Link>
        </div>
        <ul className="mx-pillars">
          {WHAT_WE_DO.map((p) => (
            <li key={p.slug} style={{ ["--accent" as string]: `var(${p.colour})` }}>
              <Link href={p.href}>
                <Img slot={p.photo} mask="none" className="mx-photo" width={320} height={180} decorative />
                <span className="mx-pillar-body">
                  <span className="mx-pillar-ic"><Icon name={p.icon} size={18} /></span>
                  <strong>{p.name}</strong>
                  <small>{p.product}</small>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {WHAT_WE_DO.filter((p) => p.slug === "systems" || p.slug === "marketing").map((p) => (
          <div key={p.slug} className="mx-chipset" style={{ ["--accent" as string]: `var(${p.colour})` }}>
            <span className="mx-label">{p.slug === "systems" ? "The 11 blocks" : "Marketing services"}</span>
            <ul className="mx-chips">
              {p.groups.flatMap((g) => g.links).map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    {l.icon ? <Icon name={l.icon} size={16} /> : null}
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-sec" aria-labelledby="mx-who">
        <div className="mx-head">
          <h2 id="mx-who">Who it&apos;s for</h2>
          <Link href="/industries" className="mx-all">All industries <Arw /></Link>
        </div>
        <ul className="mx-paths">
          {WHO_FOR.paths.map((p) => (
            <li key={p.href} style={{ ["--accent" as string]: `var(${p.colour})` }}>
              <Link href={p.href}>
                <span className="mx-path-ic"><Icon name={p.icon!} size={20} /></span>
                <span>
                  <strong>{p.label}</strong>
                  <small>{p.desc}</small>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <span className="mx-label">By industry</span>
        <ul className="mx-grid">
          {WHO_FOR.trades.map((t) => (
            <li key={t.href}>
              <Link href={t.href}>
                <Icon name={t.icon!} size={20} />
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="mx-label">Anywhere in India</span>
        <ul className="mx-chips is-plain">
          {WHO_FOR.cities.map((c) => (
            <li key={c.href}>
              <Link href={c.href}>
                <Icon name="MapPin" size={14} />
                {c.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={WHO_FOR.allCities.href} className="is-more">{WHO_FOR.allCities.label} <Arw /></Link>
          </li>
        </ul>
      </section>

      <section className="mx-sec" aria-labelledby="mx-res">
        <div className="mx-head">
          <h2 id="mx-res">Resources</h2>
        </div>
        <ul className="mx-grid">
          {RESOURCES.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>
                <Icon name={r.icon!} size={20} />
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-cta">
        <WhatsAppCTA context="mobile-menu" className="ms-wa" />
        <p>{SITE.replyShort}</p>
      </div>
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
          { id: "what", label: "What we do", panel: <WhatPanel />, mobile: null },
          { id: "who", label: "Who it's for", panel: <WhoPanel />, mobile: null },
          { id: "resources", label: "Resources", panel: <ResourcesPanel />, mobile: null },
        ]}
        mainLinks={MAIN_LINKS}
        replyNote={SITE.replyShort}
        cta={<WhatsAppCTA context="header" className="nav-wa" />}
        mobileMenu={<MobileMenu />}
        mobileWa={<WhatsAppCTA variant="dock" context="header-mobile" label="WhatsApp" />}
        icons={{
          menu: <Icon name="List" size={22} weight="bold" />,
          close: <Icon name="X" size={22} weight="bold" />,
          caret: <Icon name="CaretDown" size={14} weight="bold" />,
        }}
      />
    </>
  );
}
