import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Motion from "./Motion";
import { OrgJsonLd } from "./JsonLd";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <OrgJsonLd />
      <Motion />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
