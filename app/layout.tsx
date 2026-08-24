import type { Metadata } from "next";
import { sora, manrope, jetbrains } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Webify Bharat | Own your customers. ₹0 per lead.",
    template: "%s",
  },
  description:
    "Webify Bharat builds websites, WhatsApp Business, UPI gateways and analytics for Indian MSMEs. Own your customers. ₹0 per organic lead. No Justdial or Zomato tax.",
  keywords: [
    "Webify Bharat",
    "website design for small business India",
    "WhatsApp Business API India",
    "UPI payment gateway",
    "Justdial alternative",
    "Zomato commission",
    "MSME digital",
    "Google Business Profile",
    "local SEO India",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://webify-bharat.vercel.app"),
  openGraph: {
    title: "Webify Bharat | Digital Operations. Real Growth.",
    description:
      "Full control of your website, WhatsApp and customer list. No per-lead fee. No aggregator commission on people who already want you.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
