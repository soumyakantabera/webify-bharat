import type { Metadata, Viewport } from "next";
import { asset } from "@/lib/asset";
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
import { Analytics } from "@vercel/analytics/next";
import { jetbrains, manrope, sora } from "./fonts";

/** Vercel Analytics only exists on Vercel; the GitHub Pages export has no endpoint. */
const onVercel = !process.env.NEXT_PUBLIC_BASE_PATH;

export const viewport: Viewport = {
  themeColor: "#2B1E6B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webify-bharat.vercel.app"),
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
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="preload" href={asset("/fonts/sora.woff2")} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={asset("/fonts/manrope.woff2")} as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={manrope.className}>
        {children}
        {onVercel ? <Analytics /> : null}
      </body>
    </html>
  );
}
