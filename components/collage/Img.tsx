import { asset } from "@/lib/asset";
import { resolveImage } from "@/lib/images";
import { ImageSlot } from "./ImageSlot";

export type Mask = "none" | "petal" | "arch" | "blob" | "circle" | "polaroid" | "rounded";
export type Tone = "rani" | "haldi" | "peacock" | "indigo" | "marigold" | "mehendi";

/**
 * <Img slot="IMG-H01" /> — renders a slot from lib/images.ts (content-plan §17.1).
 * Accepts a slot id or an existing /images/... path. Never renders a broken
 * image: an unknown slot falls back to the tinted <ImageSlot> placeholder.
 */
export function Img({
  slot,
  alt,
  mask = "rounded",
  tone,
  crop,
  zoom,
  className,
  width = 800,
  height = 600,
  priority = false,
  decorative = false,
  grain = false,
}: {
  slot: string;
  alt?: string;
  mask?: Mask;
  /** Duotone tint colour (applies when the slot's treatment is duotone, or forced here). */
  tone?: Tone;
  /** Override the slot's crop (object-position). */
  crop?: string;
  /** Override the slot's zoom (scale around the crop point). */
  zoom?: number;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  decorative?: boolean;
  /** Film-grain overlay (§17.3 #13). */
  grain?: boolean;
}) {
  const img = resolveImage(slot);
  if (!img) return <ImageSlot id={slot} tint={tone} className={className} />;
  const duotone = tone ?? (img.treatment === "duotone" ? "indigo" : undefined);
  const cls = [
    "wb-img",
    `mask-${mask}`,
    duotone ? `is-duotone tone-${duotone}` : "",
    img.treatment === "blur" ? "is-blur" : "",
    grain ? "is-grain" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} data-img={slot}>
      <img
        src={asset(img.src)}
        alt={decorative ? "" : (alt ?? img.alt)}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        style={(zoom ?? img.zoom) ? { objectPosition: crop ?? img.crop, transform: `scale(${zoom ?? img.zoom})`, transformOrigin: crop ?? img.crop } : { objectPosition: crop ?? img.crop }}
      />
    </span>
  );
}
