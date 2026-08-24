import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { OrgJsonLd } from "./JsonLd";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <OrgJsonLd />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
