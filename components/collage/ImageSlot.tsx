import { Webu } from "@/components/Webu";

/**
 * Placeholder for an image slot that has no source yet (content-plan §16.3).
 * A tinted block with Webu building and the slot id in `data-img`.
 */
export function ImageSlot({ id, tint = "indigo", ratio, className }: { id: string; tint?: string; ratio?: string; className?: string }) {
  return (
    <span
      className={`wb-img-slot tone-${tint}${className ? ` ${className}` : ""}`}
      data-img={id}
      style={ratio ? { aspectRatio: ratio.replace(":", " / ") } : undefined}
      aria-hidden="true"
    >
      <Webu state="building" size={56} />
    </span>
  );
}
