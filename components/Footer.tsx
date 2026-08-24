import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <span className="logo-mark">WB</span>
              <span>Webify Bharat</span>
            </div>
            <p>Digital Operations. Real Growth.</p>
            <p>
              Websites, payments, WhatsApp automation, analytics and business systems for
              Indian businesses.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/services/websites">Websites</Link>
            <Link href="/services/payments">Payments</Link>
            <Link href="/services/whatsapp">WhatsApp</Link>
            <Link href="/services/analytics">Analytics</Link>
          </div>
          <div>
            <h4>Industries</h4>
            <Link href="/industries/retail">Retail</Link>
            <Link href="/industries/restaurant">Restaurants</Link>
            <Link href="/industries/healthcare">Healthcare</Link>
            <Link href="/industries/education">Education</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
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
