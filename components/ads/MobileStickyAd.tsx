"use client";

import { useState, type ReactNode } from "react";
import Icon from "@/components/common/Icon";

/** Dismissible bottom anchor ad, shown on small screens only. */
export default function MobileStickyAd({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close advertisement"
        className="absolute -top-7 right-2 grid size-7 place-items-center rounded-t bg-white text-muted shadow-[0_-2px_6px_rgba(0,0,0,0.08)]"
      >
        <Icon name="close" className="size-4" />
      </button>
      {children}
    </div>
  );
}
