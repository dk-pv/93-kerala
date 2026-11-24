import Link from "next/link";
import type { Text } from "@/types";
import Icon from "./Icon";
import T from "./T";

/** Section title with a brand-red marker and an optional "view all" link. */
export default function SectionHeading({
  title,
  href,
  eyebrow,
  dark = false,
  as: H = "h2",
}: {
  title: Text;
  href?: string;
  eyebrow?: Text;
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`@container mb-4 border-b-2 pb-2 ${dark ? "border-white/80" : "border-ink"}`}>
      {eyebrow && (
        <p className="mb-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
          <T {...eyebrow} />
        </p>
      )}
      <div className="flex items-end justify-between gap-3">
        <H className="flex items-center gap-2.5 font-display text-xl font-bold md:text-2xl">
          <span aria-hidden className="h-6 w-1.5 shrink-0 bg-brand" />
          <T {...title} />
        </H>
        {href && (
          <Link
            href={href}
            className={`group inline-flex shrink-0 items-center gap-1 text-xs font-semibold @xs:text-sm ${dark ? "text-white/80 hover:text-white" : "text-muted hover:text-brand"}`}
          >
            <T ml="എല്ലാം കാണുക" en="View all" />
            <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
