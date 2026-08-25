import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./pricing-ui.css";
import "./home-pricing.css";
import "./blog-images.css";
import "./about-brand.css";
import "./city-cards.css";
import "./perf-a11y.css";
import "./button-anim.css";
import { jetbrains, manrope, sora } from "./fonts";

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webify-bharat.vercel.app"),
  title: {
    default: "Webify Bharat | Website, WhatsApp & UPI for Indian MSMEs",
    template: "%s",
  },
  description:
    "Webify Bharat builds websites, WhatsApp Business, UPI gateways and analytics for Indian MSMEs. Own your customers. ₹0 per organic lead.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/sora.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" as="image" href="/images/hero/digital-growth-dashboard.png" />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
