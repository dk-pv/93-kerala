import type { Section, Text } from "@/types";

/** "2 മണിക്കൂർ മുമ്പ്" / "2 hrs ago" — pure, so it can render on the server. */
export function timeAgo(minutes: number): Text {
  if (minutes < 60) return { ml: `${minutes} മിനിറ്റ് മുമ്പ്`, en: `${minutes} min ago` };
  const h = Math.floor(minutes / 60);
  if (h < 24) return { ml: `${h} മണിക്കൂർ മുമ്പ്`, en: `${h} hr${h > 1 ? "s" : ""} ago` };
  const d = Math.floor(h / 24);
  return { ml: `${d} ദിവസം മുമ്പ്`, en: `${d} day${d > 1 ? "s" : ""} ago` };
}

const compact = new Intl.NumberFormat("en-IN", { notation: "compact", maximumFractionDigits: 1 });
export const formatViews = (n: number) => compact.format(n);

export const sectionHref = (s: Pick<Section, "kind" | "slug">) =>
  `${s.kind === "district" ? "/district" : "/category"}/${s.slug}`;
