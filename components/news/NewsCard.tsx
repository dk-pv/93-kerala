import Link from "next/link";
import Icon from "@/components/common/Icon";
import Img from "@/components/common/Img";
import T from "@/components/common/T";
import { getSection } from "@/lib/news";
import { formatViews, sectionHref, timeAgo } from "@/lib/utils";
import type { Article } from "@/types";

type Variant = "lead" | "card" | "overlay" | "list" | "row" | "compact";

/** Section badge; sits above the card's stretched link so it stays clickable. */
export function CategoryBadge({ slug, plain = false, className = "" }: { slug: string; plain?: boolean; className?: string }) {
  const s = getSection(slug);
  if (!s) return null;
  const style = plain
    ? "text-[11px] font-bold uppercase tracking-wide text-brand hover:underline"
    : "bg-brand px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-brand-dark";
  return (
    <Link href={sectionHref(s)} className={`relative z-10 inline-block ${style} ${className}`}>
      <T {...s.name} />
    </Link>
  );
}

export function Meta({ a, views = true, place = true, className = "" }: { a: Article; views?: boolean; place?: boolean; className?: string }) {
  const district = place && a.district ? getSection(a.district) : undefined;
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted ${className}`}>
      <span className="inline-flex items-center gap-1">
        <Icon name="clock" className="size-3.5" />
        <T {...timeAgo(a.minutesAgo)} />
      </span>
      {views && (
        <span className="inline-flex items-center gap-1">
          <Icon name="eye" className="size-3.5" />
          {formatViews(a.views)}
          <span className="sr-only">views</span>
        </span>
      )}
      {district && (
        <span className="inline-flex items-center gap-1 font-medium">
          <Icon name="pin" className="size-3.5 text-accent" />
          <T {...district.name} />
        </span>
      )}
    </div>
  );
}

function Title({ a, className }: { a: Article; className: string }) {
  return (
    <h3 className={`font-display font-bold ${className}`}>
      <Link href={`/news/${a.slug}`} className="transition-colors after:absolute after:inset-0 hover:text-brand">
        <T {...a.title} />
      </Link>
    </h3>
  );
}

function Photo({ a, sizes, preload, className }: { a: Article; sizes: string; preload?: boolean; className: string }) {
  return (
    <div className={`relative overflow-hidden bg-line ${className}`}>
      <Img
        src={a.image}
        alt={a.title.ml}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

export default function NewsCard({
  a,
  variant = "card",
  preload = false,
  summary = false,
  badge = true,
  sizes,
}: {
  a: Article;
  variant?: Variant;
  preload?: boolean;
  summary?: boolean;
  badge?: boolean;
  sizes?: string;
}) {
  switch (variant) {
    case "lead":
      return (
        <article className="group relative">
          <Photo a={a} preload={preload} sizes={sizes ?? "(min-width: 1024px) 640px, 100vw"} className="aspect-[16/9]" />
          <div className="mt-4">
            {badge && <CategoryBadge slug={a.category} />}
            <Title a={a} className="mt-2 text-[clamp(1.375rem,1rem+1.6vw,2rem)] leading-[1.35]" />
            <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink/75">
              <T {...a.summary} />
            </p>
            <Meta a={a} className="mt-3" />
          </div>
        </article>
      );
    case "overlay":
      return (
        <article className="group relative aspect-[16/10] overflow-hidden bg-ink text-white">
          <Img src={a.image} alt={a.title.ml} fill preload={preload} sizes={sizes ?? "(min-width: 1024px) 620px, 100vw"} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
            {badge && <CategoryBadge slug={a.category} />}
            <Title a={a} className="mt-2 line-clamp-3 text-xl leading-snug md:text-2xl" />
            <Meta a={a} className="mt-2 text-white/80!" />
          </div>
        </article>
      );
    case "list":
      return (
        <article className="group relative flex gap-4 py-4">
          <Photo a={a} sizes="(min-width: 640px) 208px, 128px" className="aspect-[16/10] w-32 shrink-0 sm:w-52" />
          <div className="min-w-0 flex-1">
            {badge && <CategoryBadge slug={a.category} plain />}
            <Title a={a} className="mt-0.5 line-clamp-3 text-base leading-[1.45] sm:text-lg" />
            {summary && (
              <p className="mt-1 hidden text-sm leading-relaxed text-ink/70 sm:line-clamp-2">
                <T {...a.summary} />
              </p>
            )}
            <Meta a={a} className="mt-2" />
          </div>
        </article>
      );
    case "row":
      return (
        <article className="group relative flex gap-3">
          <Photo a={a} sizes="128px" className="aspect-[4/3] w-28 shrink-0 sm:w-32" />
          <div className="min-w-0">
            {badge && <CategoryBadge slug={a.category} plain />}
            <Title a={a} className="line-clamp-3 text-[15px] leading-[1.45]" />
            <Meta a={a} views={false} className="mt-1" />
          </div>
        </article>
      );
    case "compact":
      return (
        <article className="group relative py-3">
          <Title a={a} className="line-clamp-2 text-[15px] font-semibold leading-[1.45]" />
          <Meta a={a} views={false} place={false} className="mt-1" />
        </article>
      );
    default:
      return (
        <article className="group relative">
          <Photo a={a} preload={preload} sizes={sizes ?? "(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"} className="aspect-[16/10]" />
          {badge && <CategoryBadge slug={a.category} className="mt-3" />}
          <Title a={a} className="mt-1.5 line-clamp-3 text-[17px] leading-[1.45]" />
          {summary && (
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink/70">
              <T {...a.summary} />
            </p>
          )}
          <Meta a={a} className="mt-2" />
        </article>
      );
  }
}
