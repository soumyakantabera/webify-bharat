import type { Metadata } from "next";
import { asset } from "@/lib/asset";

/**
 * Static redirect page for the GitHub Pages export, where next.config
 * redirects don't run. On Vercel the 301 in next.config.ts wins first.
 */
export function redirectMetadata(destination: string): Metadata {
  return {
    title: "Moved | Webify Bharat",
    robots: { index: false, follow: true },
    alternates: { canonical: destination },
  };
}

export function RedirectStub({ to }: { to: string }) {
  // The Pages export uses trailingSlash, so point straight at the folder URL.
  const href = process.env.NEXT_PUBLIC_BASE_PATH ? `${asset(to)}/` : asset(to);
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
