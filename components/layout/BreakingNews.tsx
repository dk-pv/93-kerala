"use client";

import Link from "next/link";
import { useRef } from "react";
import Icon from "@/components/common/Icon";
import T from "@/components/common/T";
import type { Text } from "@/types";

/**
 * CSS-driven marquee (headlines rendered twice, track slides by 50%).
 * Prev/next jump the running animation to the neighbouring headline.
 */
export default function BreakingNews({ items }: { items: { text: Text; slug: string }[] }) {
  const track = useRef<HTMLDivElement>(null);

  function step(dir: 1 | -1) {
    const el = track.current;
    const anim = el?.getAnimations()[0];
    if (!el || !anim) return;
    const half = el.scrollWidth / 2;
    const duration = Number(anim.effect?.getComputedTiming().duration) || 1;
    const pos = ((Number(anim.currentTime) % duration) / duration) * half;
    const starts = Array.from(el.children, (c) => (c as HTMLElement).offsetLeft).filter((x) => x < half - 1);
    const target =
      dir > 0
        ? (starts.find((s) => s > pos + 2) ?? half)
        : ([...starts].reverse().find((s) => s < pos - 2) ?? starts[starts.length - 1]);
    anim.currentTime = (target / half) * duration;
  }

  return (
    <div className="border-b border-line bg-white">
      <div className="wrap flex h-11 items-center gap-3">
        <span className="flex shrink-0 items-center gap-2 bg-brand px-2.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-white" />
          </span>
          <span className="sm:hidden">
            <T ml="ബ്രേക്കിങ്" en="Breaking" />
          </span>
          <span className="hidden sm:inline">
            <T ml="ബ്രേക്കിങ് ന്യൂസ്" en="Breaking News" />
          </span>
        </span>
        <span title="Sample headlines for demonstration" className="hidden shrink-0 border border-line px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted md:inline">
          Demo
        </span>
        <div className="ticker relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_3%,#000_95%,transparent)]">
          <div ref={track} className="ticker-track flex w-max" style={{ animationDuration: `${items.length * 9}s` }}>
            {[...items, ...items].map((item, i) => {
              const clone = i >= items.length;
              return (
                <span key={i} className="flex shrink-0 items-center" aria-hidden={clone || undefined}>
                  <Link
                    href={`/news/${item.slug}`}
                    tabIndex={clone ? -1 : undefined}
                    className="whitespace-nowrap px-5 text-sm font-semibold transition-colors hover:text-brand"
                  >
                    <T {...item.text} />
                  </Link>
                  <span aria-hidden className="size-1.5 rotate-45 bg-brand" />
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex shrink-0 gap-1">
          <button type="button" onClick={() => step(-1)} aria-label="Previous headline" className="grid size-7 place-items-center border border-line hover:border-ink">
            <Icon name="chevronLeft" />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next headline" className="grid size-7 place-items-center border border-line hover:border-ink">
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>
    </div>
  );
}
