"use client";

import { useRef, type ReactNode } from "react";
import Icon from "@/components/common/Icon";

/** Slide-in drawer built on native <dialog>: focus trap, Esc and backdrop close come for free. */
export default function MobileMenu({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-label="Open menu"
        className="-ml-2 grid size-10 shrink-0 place-items-center text-white lg:hidden"
      >
        <Icon name="menu" className="size-6" />
      </button>
      <dialog
        ref={ref}
        aria-label="Menu"
        // Close on backdrop click (target is the dialog itself) or after following a link.
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target === ref.current || target.closest("a")) ref.current?.close();
        }}
        className="m-0 h-dvh max-h-none w-[86vw] max-w-sm overflow-y-auto bg-white p-0 text-ink backdrop:bg-black/55"
      >
        <button
          type="button"
          onClick={() => ref.current?.close()}
          aria-label="Close menu"
          className="absolute right-3 top-4 grid size-9 place-items-center rounded-full hover:bg-page"
        >
          <Icon name="close" className="size-5" />
        </button>
        {children}
      </dialog>
    </>
  );
}
