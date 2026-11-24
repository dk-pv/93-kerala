import Link from "next/link";
import type { ReactNode } from "react";
import Img from "@/components/common/Img";
import T from "@/components/common/T";
import { getAd, PLACEMENT_FORMAT, type AdFormat } from "@/data/advertisements";
import type { Ad as AdType, AdPlacement } from "@/types";

// Formats switch on the slot's own width (container queries), not the viewport:
// the same billboard is 970×250 on the homepage, narrower in an article column, 300×250 on phones.
const FRAME: Record<AdFormat, string> = {
  leaderboard: "aspect-[320/100] max-w-[468px] @2xl:aspect-[728/90] @2xl:max-w-[728px]",
  billboard: "aspect-[300/250] max-w-[336px] @2xl:aspect-[970/250] @2xl:max-w-[970px]",
  skyscraper: "aspect-[300/600] max-w-[300px]",
  rectangle: "aspect-[300/250] max-w-[300px]",
  sticky: "h-14 max-w-[468px]",
};

/**
 * Renders the creative booked for a placement. Each placement maps to one IAB format
 * (see PLACEMENT_FORMAT); creatives without a headline render as a plain image banner.
 */
export default function Ad({ placement, className = "", label = true }: { placement: AdPlacement; className?: string; label?: boolean }) {
  const ad = getAd(placement);
  if (!ad) return null;
  const format = PLACEMENT_FORMAT[placement];
  const external = /^https?:\/\//.test(ad.url);
  const frame = `group relative mx-auto block w-full overflow-hidden ring-1 ring-black/10 ${FRAME[format]}`;
  const style = { background: ad.theme.bg, color: ad.theme.fg };
  const body = (
    <>
      {ad.headline ? <Creative ad={ad} format={format} /> : <Img src={ad.image} alt={ad.brand} fill sizes="970px" className="object-cover" />}
      <span className="absolute right-1 top-1 rounded-sm bg-black/45 px-1 text-[9px] font-bold leading-4 tracking-wide text-white">AD</span>
    </>
  );

  return (
    <aside aria-label="Advertisement" data-placement={placement} className={`@container ${className}`}>
      {label && (
        <p className="mb-1 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          <T ml="പരസ്യം" en="Advertisement" />
        </p>
      )}
      {external ? (
        <a href={ad.url} target="_blank" rel="sponsored noopener noreferrer" className={frame} style={style}>
          {body}
        </a>
      ) : (
        <Link href={ad.url} className={frame} style={style}>
          {body}
        </Link>
      )}
    </aside>
  );
}

function Creative({ ad, format }: { ad: AdType; format: AdFormat }) {
  const { accent, bg } = ad.theme;
  const brand = (cls = "") => (
    <p className={`truncate text-[10px] font-extrabold uppercase tracking-[0.16em] ${cls}`} style={{ color: accent }}>
      {ad.brand}
    </p>
  );
  const cta = (cls = "") =>
    ad.cta && (
      <span
        className={`inline-flex items-center justify-center rounded-full font-bold transition-transform group-hover:scale-[1.03] ${cls}`}
        style={{ background: accent, color: bg }}
      >
        <T {...ad.cta} />
      </span>
    );
  const photo = (sizes: string, cls = "") => (
    <div className={`relative overflow-hidden ${cls}`}>
      <Img src={ad.image} alt="" fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
  );
  const headline = (cls: string): ReactNode => (
    <p className={`font-display font-bold leading-snug ${cls}`}>
      <T {...ad.headline!} />
    </p>
  );
  const tagline = (cls = "") =>
    ad.tagline && (
      <p className={`text-xs opacity-80 ${cls}`}>
        <T {...ad.tagline} />
      </p>
    );

  switch (format) {
    case "leaderboard":
      return (
        <div className="flex h-full">
          {photo("240px", "w-[36%] @2xl:w-[30%]")}
          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-3 @2xl:px-5">
            <div className="min-w-0">
              {brand()}
              {headline("line-clamp-2 text-sm @2xl:text-lg")}
            </div>
            {cta("hidden shrink-0 px-4 py-2 text-xs @md:inline-flex")}
          </div>
        </div>
      );
    case "billboard":
      return (
        <div className="grid h-full grid-rows-[46%_1fr] @2xl:grid-cols-[1fr_1.15fr] @2xl:grid-rows-1">
          {photo("(min-width: 768px) 460px, 336px", "min-h-0")}
          <div
            className="flex min-h-0 flex-col justify-center gap-1.5 border-t-4 p-4 @2xl:gap-2 @2xl:border-l-4 @2xl:border-t-0 @2xl:p-5 @4xl:p-6"
            style={{ borderColor: accent }}
          >
            {brand("text-[11px]")}
            {headline("line-clamp-3 text-base @2xl:text-lg @3xl:text-xl @4xl:text-2xl")}
            {tagline("hidden @3xl:block @3xl:text-sm")}
            {cta("mt-1 self-start px-4 py-1.5 text-xs @3xl:px-5 @3xl:py-2 @3xl:text-sm")}
          </div>
        </div>
      );
    case "skyscraper":
      return (
        <div className="flex h-full flex-col">
          {photo("300px", "flex-[1.3]")}
          <div className="flex flex-1 flex-col items-center justify-center gap-2.5 px-5 text-center">
            {brand("text-[11px]")}
            {headline("text-2xl")}
            {tagline("text-sm")}
            {cta("mt-2 w-full py-2.5 text-sm")}
          </div>
        </div>
      );
    case "rectangle":
      return (
        <div className="flex h-full flex-col">
          {photo("300px", "h-[50%]")}
          <div className="flex flex-1 flex-col justify-center gap-1 px-4">
            {brand()}
            {headline("line-clamp-2 text-base")}
            {tagline("line-clamp-1")}
            {cta("mt-1 self-start px-3 py-1 text-xs")}
          </div>
        </div>
      );
    case "sticky":
      return (
        <div className="flex h-full items-center gap-3 pr-3">
          {photo("56px", "h-full w-14 shrink-0")}
          <div className="min-w-0 flex-1">
            {brand("text-[9px]")}
            {headline("truncate text-sm leading-tight")}
          </div>
          {cta("shrink-0 px-3 py-1.5 text-xs")}
        </div>
      );
  }
}
