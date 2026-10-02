export function FilingMark({
  slug,
  mark,
  size = 40,
}: {
  slug: string;
  mark: string;
  size?: number;
}) {
  return (
    <span className={`mark mark-${slug}`} style={{ width: size, height: size }} aria-hidden>
      {mark}
    </span>
  );
}
