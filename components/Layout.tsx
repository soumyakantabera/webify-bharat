import type { ReactNode } from "react";
import QRCode from "qrcode";
import Footer, { type CtaBand } from "./Footer";
import Header from "./Header";
import Motion from "./Motion";
import { OrgJsonLd } from "./JsonLd";
import { WaEnhancer } from "./WaEnhancer";
import { WA_DEFAULT } from "@/lib/wa";

let qrCache: string | undefined;

/** Static QR code for the WhatsApp popover, generated at build time (content-plan §4.1). */
async function waQr() {
  qrCache ??= await QRCode.toString(WA_DEFAULT, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#1B1030", light: "#ffffff" },
  });
  return qrCache;
}

export default async function Layout({ children, cta }: { children: ReactNode; cta?: CtaBand }) {
  const qrSvg = await waQr();
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <OrgJsonLd />
      <Motion />
      <Header />
      <main id="main-content">{children}</main>
      <Footer cta={cta} />
      <WaEnhancer qrSvg={qrSvg} href={WA_DEFAULT} />
    </>
  );
}
