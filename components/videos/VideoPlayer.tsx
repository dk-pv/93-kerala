"use client";

import { useState } from "react";
import Icon from "@/components/common/Icon";
import Img from "@/components/common/Img";
import T from "@/components/common/T";
import type { Text } from "@/types";
import { LiveBadge } from "./VideoCard";

/**
 * Poster first, YouTube iframe only after the click — keeps pages light and
 * avoids loading YouTube until the reader asks for it.
 */
export default function VideoPlayer({
  src,
  poster,
  title,
  live = false,
  preload = false,
}: {
  src: string;
  poster: string;
  title: Text;
  live?: boolean;
  preload?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <div className="relative aspect-video bg-black">
        <iframe
          src={`${src}${src.includes("?") ? "&" : "?"}autoplay=1`}
          title={title.en ?? title.ml}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }
  return (
    <button type="button" onClick={() => setPlaying(true)} className="group relative block aspect-video w-full overflow-hidden bg-black text-left">
      <Img src={poster} alt="" fill preload={preload} sizes="(min-width: 1024px) 860px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
      <span className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/10" />
      {live && <LiveBadge className="absolute left-4 top-4" />}
      <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-2xl ring-8 ring-white/15 transition-transform group-hover:scale-110 md:size-20">
        <Icon name="play" className="size-8 translate-x-0.5" />
        <span className="sr-only">Play</span>
      </span>
      <span className="absolute inset-x-0 bottom-0 p-4 text-white md:p-6">
        <span className="block font-display text-lg font-bold leading-snug md:text-2xl">
          <T {...title} />
        </span>
      </span>
    </button>
  );
}
