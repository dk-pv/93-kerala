import type { Text } from "@/types";

/**
 * Renders bilingual text. Both versions ship in the HTML; CSS keyed on
 * <html data-lang> shows one, so language switching needs no re-render and
 * pages stay fully static. Without an English version, Malayalam shows in both modes.
 */
export default function T({ ml, en }: Text) {
  if (!en || en === ml) return <span lang="ml">{ml}</span>;
  return (
    <>
      <span lang="ml" className="lang-ml">
        {ml}
      </span>
      <span lang="en" className="lang-en">
        {en}
      </span>
    </>
  );
}
