import type { Metadata } from "next";
import { asset } from "@/lib/asset";

/**
 * Static redirect page for the GitHub Pages export, where next.config
 * has no server-side redirects.
 */
export function redirectMetadata(destination: string): Metadata {
  return {
    title: "Moved | Webify Bharat",
    robots: { index: false, follow: true },
    alternates: { canonical: destination },
  };
}

export function RedirectStub({ to }: { to: string }) {
  // The export uses trailingSlash, so point straight at the folder URL.
  const href = `${asset(to)}/`.replace(/\/\/$/, "/");
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(href)})` }} />
      <main style={{ padding: "48px 16px", fontFamily: "var(--font-body), sans-serif" }}>
        <p>
          This page has moved to <a href={href}>{href}</a>.
        </p>
      </main>
    </>
  );
}
