"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { WhatsAppCta } from "@/components/icons";
import { navLinks, WA_CONSULT } from "@/lib/site";

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Webify Bharat home">
          <BrandLogo />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={isActive(pathname, item.to) ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <WhatsAppCta href={WA_CONSULT} className="btn btn-primary nav-cta">
          Talk to an Expert
        </WhatsAppCta>
        <button
          type="button"
          className="mobile-menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="container mobile-drawer" id="mobile-nav">
          {navLinks.map((item) => (
            <Link key={item.to} href={item.to}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
          <WhatsAppCta href={WA_CONSULT} className="btn btn-primary">
            Talk to an Expert
          </WhatsAppCta>
        </div>
      ) : null}
    </header>
  );
}
