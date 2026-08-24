import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Webify Bharat | Digital Operations. Real Growth.",
    template: "%s | Webify Bharat",
  },
  description:
    "Websites, payments, WhatsApp automation, analytics and business systems for Indian businesses.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://webify-bharat.vercel.app"),
  openGraph: {
    title: "Webify Bharat | Digital Operations. Real Growth.",
    description:
      "Websites, payments, WhatsApp automation, analytics and business systems for Indian businesses.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
