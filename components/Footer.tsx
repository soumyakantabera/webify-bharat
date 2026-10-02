import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { WhatsAppCta } from "@/components/icons";
import { SITE, WA_CHAT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo" aria-label="Webify Bharat home">
              <BrandLogo variant="dark" />
            </Link>
            <p>Websites, WhatsApp, UPI, and the filings around them.</p>
            <p>
              Launch is for a name people already search. GST, Udyam, and IEC are priced
              separately, with the government fee on its own line.
            </p>
            <p>
              <a href={`https://wa.me/${SITE.whatsapp}`}>+91 83360 97642</a>
            </p>
            <WhatsAppCta href={WA_CHAT} className="btn btn-primary footer-wa">
              Chat on WhatsApp
            </WhatsAppCta>
          </div>
          <div>
            <h4>Filings</h4>
            <Link href="/registrations/gst">GST</Link>
            <Link href="/registrations/udyam">Udyam</Link>
            <Link href="/registrations/iec">IEC</Link>
            <Link href="/registrations/charges">Additional charges</Link>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/industries">Industries</Link>
            <Link href="/cities">Cities</Link>
            <Link href="/cities/mumbai">Mumbai</Link>
            <Link href="/cities/bengaluru">Bengaluru</Link>
            <Link href="/cities/delhi">Delhi</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Webify Bharat.</span>
          <span>Built for fast, secure digital growth.</span>
        </div>
      </div>
    </footer>
  );
}
