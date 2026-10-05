import type { BlogCategorySlug } from "@/lib/blog-categories";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ReactElement } from "react";
import { ImageResponse } from "next/og";
import { BlogCover } from "@/components/svg/BlogCover";
import { RangoliMandala } from "@/components/svg/positioning";
import { Webu } from "@/components/Webu";

/**
 * One Open Graph template for every route (content-plan §17.3 #3):
 * 1200×630, page title in Baloo Da 2, a pillar/path colour band, a rangoli corner,
 * a small Webu and the logo. Rendered at build time with next/og.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export const OG_ACCENTS = {
  rani: "#E6007E",
  marigold: "#FF6B00",
  mehendi: "#4F8A10",
  peacock: "#00A6A6",
  indigo: "#2B1E6B",
  haldi: "#FFB400",
} as const;
export type OgAccent = keyof typeof OG_ACCENTS;

const root = process.cwd();
let assets: Promise<{ display: Buffer; manrope: Buffer; mark: string; webu: string; mandala: string }> | undefined;

async function svgUri(el: ReactElement) {
  const { renderToStaticMarkup } = await import("react-dom/server");
  const markup = renderToStaticMarkup(el).replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
  return `data:image/svg+xml;base64,${Buffer.from(markup).toString("base64")}`;
}

function loadAssets() {
  assets ??= (async () => {
    const [display, manrope, markSvg] = await Promise.all([
      readFile(join(root, "assets/og/baloo-da-2-700.ttf")),
      readFile(join(root, "assets/og/manrope-600.ttf")),
      readFile(join(root, "public/brand/logo/webify-bharat-horizontal.svg"), "utf8"),
    ]);
    return {
      display,
      manrope,
      mark: `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`,
      webu: await svgUri(<Webu state="waving" size={150} />),
      mandala: await svgUri(<RangoliMandala />),
    };
  })();
  return assets;
}

export type OgInput = {
  title: string;
  kicker?: string;
  accent?: OgAccent;
  /** Blog posts use their generated cover as the right-hand art. */
  /** Blog category slug — renders that category's cover beside the title. */
  blogPost?: BlogCategorySlug;
};

/** The bundled Baloo Da 2/Manrope subsets have no ₹ glyph, so write it out for OG text. */
const safe = (t: string) => t.replace(/₹\s?/g, "Rs ");

export async function ogImage({ title: rawTitle, kicker: rawKicker, accent = "rani", blogPost }: OgInput) {
  const title = safe(rawTitle);
  const kicker = rawKicker ? safe(rawKicker) : undefined;
  const a = await loadAssets();
  const colour = OG_ACCENTS[accent];
  const cover = blogPost ? await svgUri(<BlogCover category={blogPost} showLabel={false} />) : null;
  const titleSize = title.length > 70 ? 50 : title.length > 44 ? 58 : 66;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#FBFAF7", fontFamily: "Manrope", position: "relative" }}>
        <div style={{ width: 24, height: "100%", background: colour, display: "flex" }} />
        {cover ? (
          <img src={cover} width={520} height={273} style={{ position: "absolute", right: 48, bottom: 200, borderRadius: 28 }} />
        ) : (
          <img src={a.mandala} width={420} height={420} style={{ position: "absolute", right: -110, top: -110, opacity: 0.9 }} />
        )}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 64px 52px", flex: 1 }}>
          <img src={a.mark} height={72} width={226} />
          <div style={{ display: "flex", flexDirection: "column", maxWidth: cover ? 560 : 860 }}>
            {kicker ? (
              <div style={{ display: "flex", alignSelf: "flex-start", background: colour, color: accent === "haldi" ? "#1B1030" : "#fff", fontSize: 22, letterSpacing: 2, textTransform: "uppercase", padding: "8px 18px", borderRadius: 999, marginBottom: 22 }}>
                {kicker}
              </div>
            ) : null}
            <div style={{ fontFamily: "Baloo Da 2", fontSize: titleSize, lineHeight: 1.08, color: "#1B1030", letterSpacing: -0.5 }}>{title}</div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#4A4458" }}>Built for your business. Not for everyone&apos;s.</div>
        </div>
        <img src={a.webu} width={150} height={160} style={{ position: "absolute", right: 56, bottom: 28 }} />
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Baloo Da 2", data: a.display, weight: 700, style: "normal" },
        { name: "Manrope", data: a.manrope, weight: 600, style: "normal" },
      ],
    },
  );
}
