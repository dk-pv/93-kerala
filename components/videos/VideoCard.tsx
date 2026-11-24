import Link from "next/link";
import Icon from "@/components/common/Icon";
import Img from "@/components/common/Img";
import T from "@/components/common/T";
import { SITE } from "@/data/site";
import { formatViews, timeAgo } from "@/lib/utils";
import type { Video } from "@/types";

export function LiveBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 bg-brand px-2 py-0.5 text-[11px] font-extrabold tracking-wider text-white ${className}`}>
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75 motion-reduce:hidden" />
        <span className="relative inline-flex size-2 rounded-full bg-white" />
      </span>
      LIVE
    </span>
  );
}

/** Live items open the on-site player; others link out to YouTube (placeholder channel URL). */
export default function VideoCard({ v, dark = false, row = false }: { v: Video; dark?: boolean; row?: boolean }) {
  const linkClass = "after:absolute after:inset-0 transition-colors hover:text-brand";
  return (
    <article className={`group relative ${row ? "flex gap-3" : ""}`}>
      <div className={`relative aspect-video overflow-hidden bg-ink ${row ? "w-36 shrink-0" : ""}`}>
        <Img src={v.thumbnail} alt="" fill sizes={row ? "144px" : "(min-width: 1024px) 300px, 50vw"} className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
        <span className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
        <span
          className={`absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand/90 text-white shadow-lg transition-transform group-hover:scale-110 ${row ? "size-8" : "size-11"}`}
        >
          <Icon name="play" className={`translate-x-px ${row ? "size-3.5" : "size-5"}`} />
        </span>
        {v.live ? (
          <LiveBadge className="absolute left-2 top-2" />
        ) : (
          <span className="absolute bottom-1.5 right-1.5 bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-white">{v.duration}</span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className={`line-clamp-2 font-display text-[15px] font-semibold leading-[1.45] ${row ? "" : "mt-2"} ${dark ? "text-white" : ""}`}>
          {v.live ? (
            <Link href="/live" className={linkClass}>
              <T {...v.title} />
            </Link>
          ) : (
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <T {...v.title} />
            </a>
          )}
        </h3>
        <p className={`mt-1 text-xs ${dark ? "text-white/60" : "text-muted"}`}>
          {formatViews(v.views)} <T ml="കാഴ്ചകൾ" en="views" /> · <T {...timeAgo(v.minutesAgo)} />
        </p>
      </div>
    </article>
  );
}
