import type { ReactNode } from "react";
import { MARKET_SET } from "@/lib/images";
import { Img, type Tone } from "./Img";
import { FloatingUiSticker } from "./FloatingUiSticker";

export { Img } from "./Img";
export { ImageSlot } from "./ImageSlot";
export { FloatingUiSticker } from "./FloatingUiSticker";

/**
 * Collage system (content-plan §16.2). Rules: max one collage per viewport,
 * meaningful alt on every photo, collapse to a 2-up grid / single photo on mobile.
 */

type StickerSpec = { text: string; icon?: ReactNode };

/** A — 1 large + 4 small photos in petal / arch / blob masks around a phone, with UI stickers. */
export function RangoliCollage({
  large,
  small,
  stickers = [],
  phone,
  priority = false,
}: {
  large: string;
  small: string[];
  stickers?: StickerSpec[];
  /** Content for the central phone screen. Falls back to a blank frame. */
  phone?: ReactNode;
  priority?: boolean;
}) {
  const masks = ["arch", "blob", "circle", "petal"] as const;
  return (
    <div className="rangoli-collage">
      <Img slot={large} mask="petal" className="rc-large" width={900} height={1100} priority={priority} />
      {small.slice(0, 4).map((id, i) => (
        <Img key={id + i} slot={id} mask={masks[i]} className={`rc-small rc-small-${i + 1}`} width={400} height={400} />
      ))}
      <div className="rc-phone" aria-hidden="true">
        <div className="rc-phone-screen">{phone}</div>
      </div>
      {stickers.slice(0, 3).map((s, i) => (
        <FloatingUiSticker key={s.text} icon={s.icon} className={`rc-sticker rc-sticker-${i + 1}`}>
          {s.text}
        </FloatingUiSticker>
      ))}
    </div>
  );
}

/** B — horizontal filmstrip of 6–8 photos with alternating tilt; slow drift, pauses on hover. */
export function BazaarStrip({
  photos = MARKET_SET.map((m) => m.src),
  opacity,
  className,
  decorative = false,
}: {
  photos?: readonly string[];
  opacity?: number;
  className?: string;
  decorative?: boolean;
}) {
  const loop = [...photos, ...photos];
  return (
    <div
      className={`bazaar-strip${className ? ` ${className}` : ""}`}
      style={opacity !== undefined ? { opacity } : undefined}
      aria-hidden={decorative || undefined}
    >
      <div className="bazaar-track">
        {loop.map((src, i) => (
          <Img
            key={`${src}-${i}`}
            slot={src}
            mask="rounded"
            className="bazaar-cell"
            width={320}
            height={240}
            decorative={decorative || i >= photos.length}
            alt={MARKET_SET.find((m) => m.src === src)?.alt}
          />
        ))}
      </div>
    </div>
  );
}

/** C — 3–4 polaroids with washi-tape corners and handwritten captions. */
export function PolaroidCluster({ items }: { items: { slot: string; caption: string }[] }) {
  return (
    <div className="polaroid-cluster">
      {items.slice(0, 4).map((item, i) => (
        <figure key={item.slot + i} className={`polaroid polaroid-${i + 1}`}>
          <span className="washi washi-l" aria-hidden="true" />
          <span className="washi washi-r" aria-hidden="true" />
          <Img slot={item.slot} mask="none" width={480} height={480} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export type BentoCell = { slot: string; alt?: string } | { icon: ReactNode; label: string; tone: Tone };

/** D — 1 large (2×2) + 4–6 small cells mixing photos and colour tiles. */
export function PhotoBento({ cells }: { cells: BentoCell[] }) {
  return (
    <div className="photo-bento">
      {cells.slice(0, 7).map((cell, i) =>
        "slot" in cell ? (
          <Img key={cell.slot + i} slot={cell.slot} alt={cell.alt} mask="rounded" className={`pb-cell${i === 0 ? " pb-large" : ""}`} width={i === 0 ? 900 : 480} height={i === 0 ? 900 : 480} />
        ) : (
          <div key={cell.label} className={`pb-cell pb-tile tone-${cell.tone}`}>
            <span className="pb-icon">{cell.icon}</span>
            <span className="pb-label">{cell.label}</span>
          </div>
        ),
      )}
    </div>
  );
}

/** E — photos in jharokha-arch masks side by side (or one arch for a page hero). */
export function ArchWindows({ slots, tone, priority = false }: { slots: string[]; tone?: Tone; priority?: boolean }) {
  return (
    <div className={`arch-windows count-${Math.min(slots.length, 3)}`}>
      {slots.slice(0, 3).map((id, i) => (
        <Img key={id + i} slot={id} mask="arch" tone={tone} className="arch-window" width={600} height={800} priority={priority && i === 0} />
      ))}
    </div>
  );
}

/** F — one photo with 1–3 floating UI cards anchored to its edges. */
export function PhotoUiLayer({
  slot,
  stickers,
  mask = "rounded",
  priority = false,
  children,
}: {
  slot: string;
  stickers: StickerSpec[];
  mask?: "rounded" | "arch" | "blob";
  priority?: boolean;
  /** Optional mock/SVG overlay (e.g. SearchResultMock). */
  children?: ReactNode;
}) {
  return (
    <div className="photo-ui-layer">
      <Img slot={slot} mask={mask} width={1000} height={760} priority={priority} />
      {children ? <div className="pul-overlay">{children}</div> : null}
      {stickers.slice(0, 3).map((s, i) => (
        <FloatingUiSticker key={s.text} icon={s.icon} className={`pul-sticker pul-sticker-${i + 1}`}>
          {s.text}
        </FloatingUiSticker>
      ))}
    </div>
  );
}

/** G — variable-height grid for blog and prototype teasers. */
export function MasonryWall({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`masonry-wall${className ? ` ${className}` : ""}`}>{children}</div>;
}

/**
 * Blurred photo backdrop for burst sections and CTA bands (§16.5): 8px blur,
 * 10–15% opacity, sits behind a gradient. Decorative.
 */
export function BlurBackdrop({ slot, opacity = 0.14, className }: { slot: string; opacity?: number; className?: string }) {
  return (
    <div className={`blur-backdrop${className ? ` ${className}` : ""}`} style={{ opacity }} aria-hidden="true">
      <Img slot={slot} mask="none" decorative width={1600} height={900} />
    </div>
  );
}
