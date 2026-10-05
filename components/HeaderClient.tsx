"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/nav";

type Menu = { id: string; label: string; panel: ReactNode; mobile: ReactNode };

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function HeaderClient({
  logo,
  ribbon,
  menus,
  mainLinks,
  replyNote,
  cta,
  mobileCta,
  dockCta,
  icons,
}: {
  logo: ReactNode;
  ribbon: ReactNode;
  menus: Menu[];
  mainLinks: NavLink[];
  replyNote: string;
  cta: ReactNode;
  mobileCta: ReactNode;
  dockCta: ReactNode;
  icons: Record<"home" | "what" | "pricing" | "menu" | "close" | "caret", ReactNode>;
}) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setSheet(false);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Scroll: shrink header, drive the progress line.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Escape closes; click outside closes desktop menus.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (openMenu) {
        const btn = document.getElementById(`mn-btn-${openMenu}`);
        setOpenMenu(null);
        btn?.focus();
      }
      if (sheet) setSheet(false);
    };
    const onDown = (e: PointerEvent) => {
      if (openMenu && navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [openMenu, sheet]);

  // Lock page scroll behind the mobile sheet.
  useEffect(() => {
    document.body.classList.toggle("nav-open", sheet);
    return () => document.body.classList.remove("nav-open");
  }, [sheet]);

  const hoverOpen = (id: string | null) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenMenu(id), id ? 80 : 180);
  };

  const dismissRibbon = () => {
    try {
      localStorage.setItem("wb-ribbon", "off");
    } catch {
      /* private mode */
    }
    document.documentElement.dataset.ribbon = "off";
  };

  return (
    <>
      <div className="ribbon" role="region" aria-label="Announcement">
        <div className="container ribbon-inner">
          <p>{ribbon}</p>
          <button type="button" className="ribbon-close" onClick={dismissRibbon} aria-label="Dismiss announcement">
            {icons.close}
          </button>
        </div>
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container sh-inner">
          <Link href="/" className="sh-logo" aria-label="Webify Bharat home">
            {logo}
          </Link>

          <nav className="sh-nav" aria-label="Primary" ref={navRef}>
            <ul className="sh-list">
              {menus.slice(0, 2).map((m) => (
                <MenuItem key={m.id} menu={m} open={openMenu === m.id} setOpen={setOpenMenu} hoverOpen={hoverOpen} caret={icons.caret} />
              ))}
              {mainLinks.map((l) => (
                <li key={l.href} className="sh-item">
                  <Link href={l.href} className={`sh-link${isActive(pathname, l.href) ? " is-active" : ""}`} aria-current={isActive(pathname, l.href) ? "page" : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
              {menus.slice(2).map((m) => (
                <MenuItem key={m.id} menu={m} open={openMenu === m.id} setOpen={setOpenMenu} hoverOpen={hoverOpen} caret={icons.caret} />
              ))}
            </ul>
          </nav>

          <div className="sh-right">
            <span className="sh-reply">{replyNote}</span>
            {cta}
            <button
              type="button"
              className="sh-burger"
              aria-expanded={sheet}
              aria-controls="mobile-sheet"
              aria-label={sheet ? "Close menu" : "Open menu"}
              onClick={() => setSheet((v) => !v)}
            >
              {sheet ? icons.close : icons.menu}
            </button>
          </div>
        </div>
        <div className="sh-progress" ref={progress} aria-hidden="true" />
      </header>

      <div id="mobile-sheet" className={`mobile-sheet${sheet ? " is-open" : ""}`} hidden={!sheet}>
        <nav aria-label="Mobile">
          {menus.map((m) => (
            <div key={m.id} className="ms-section">
              <button
                type="button"
                className="ms-toggle"
                aria-expanded={section === m.id}
                aria-controls={`ms-${m.id}`}
                onClick={() => setSection((s) => (s === m.id ? null : m.id))}
              >
                {m.label}
                {icons.caret}
              </button>
              <div id={`ms-${m.id}`} className="ms-panel" hidden={section !== m.id}>
                {m.mobile}
              </div>
            </div>
          ))}
          {[...mainLinks, { href: "/contact", label: "Contact" }].map((l) => (
            <Link key={l.href} href={l.href} className="ms-link">
              {l.label}
            </Link>
          ))}
          <div className="ms-cta">
            {mobileCta}
            <p>{replyNote}</p>
          </div>
        </nav>
      </div>

      <nav className="mobile-dock" aria-label="Quick links">
        <Link href="/" className={`dock-item${pathname === "/" ? " is-active" : ""}`}>
          {icons.home}
          <span>Home</span>
        </Link>
        <Link href="/what-we-do" className={`dock-item${isActive(pathname, "/what-we-do") ? " is-active" : ""}`}>
          {icons.what}
          <span>What we do</span>
        </Link>
        <span className="dock-wa">{dockCta}</span>
        <Link href="/pricing" className={`dock-item${isActive(pathname, "/pricing") ? " is-active" : ""}`}>
          {icons.pricing}
          <span>Pricing</span>
        </Link>
        <button type="button" className={`dock-item${sheet ? " is-active" : ""}`} aria-expanded={sheet} aria-controls="mobile-sheet" onClick={() => setSheet((v) => !v)}>
          {sheet ? icons.close : icons.menu}
          <span>Menu</span>
        </button>
      </nav>
    </>
  );
}

function MenuItem({
  menu,
  open,
  setOpen,
  hoverOpen,
  caret,
}: {
  menu: Menu;
  open: boolean;
  setOpen: (id: string | null) => void;
  hoverOpen: (id: string | null) => void;
  caret: ReactNode;
}) {
  return (
    <li className={`sh-item has-menu${open ? " is-open" : ""}`} onPointerEnter={() => hoverOpen(menu.id)} onPointerLeave={() => hoverOpen(null)}>
      <button
        type="button"
        id={`mn-btn-${menu.id}`}
        className="sh-link sh-menu-btn"
        aria-expanded={open}
        aria-controls={`mega-${menu.id}`}
        onClick={() => setOpen(open ? null : menu.id)}
      >
        {menu.label}
        {caret}
      </button>
      <div id={`mega-${menu.id}`} className={`mega mega-${menu.id}`} hidden={!open}>
        {menu.panel}
      </div>
    </li>
  );
}
