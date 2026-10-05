import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";
import "./pricing-ui.css";
import "./home-pricing.css";
import "./blog-images.css";
import "./about-brand.css";
import "./perf-a11y.css";
import "./button-anim.css";
import "./site-motion.css";
import "./lazy-load.css";
import "./skeleton.css";
import "./photo-caption.css";
import "./claim-panel.css";
import "./offer-pages.css";
import "./pro-chart.css";
import "./color-tiles.css";
import "./service-grid.css";
import "./hero-shot.css";
import "./hero-overlay.css";
import "./rangoli.css";
import "./sections.css";
import "./pillars.css";
import "./places.css";
import "./rest.css";
import "./flat.css";
import { baloo, jetbrains, manrope } from "./fonts";

export const viewport: Viewport = {
  themeColor: "#2B1E6B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Webify Bharat | Custom software & marketing for Indian MSMEs",
    template: "%s",
  },
  description:
    "Webify Bharat builds and runs your own business software — and markets your business — so every tool you use actually works for you.",
  // Icons come from app/favicon.ico, app/icon.svg and app/apple-icon.png (content-plan §17.3 #2).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
