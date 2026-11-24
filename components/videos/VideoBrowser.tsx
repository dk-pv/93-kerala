"use client";

import { useState } from "react";
import T from "@/components/common/T";
import { VIDEO_CATEGORIES } from "@/data/videos";
import type { Video, VideoCategory } from "@/types";
import VideoCard from "./VideoCard";

export default function VideoBrowser({ videos }: { videos: Video[] }) {
  const [category, setCategory] = useState<VideoCategory | "all">("all");
  const shown = category === "all" ? videos : videos.filter((v) => v.category === category);
  return (
    <div>
      <div className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:px-0">
        {VIDEO_CATEGORIES.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCategory(c.slug)}
            aria-pressed={category === c.slug}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              category === c.slug ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"
            }`}
          >
            <T {...c.name} />
          </button>
        ))}
      </div>
      {shown.length ? (
        <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((v) => (
            <VideoCard key={v.id} v={v} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-muted">
          <T ml="ഈ വിഭാഗത്തിൽ വീഡിയോകളില്ല." en="No videos in this category yet." />
        </p>
      )}
    </div>
  );
}
