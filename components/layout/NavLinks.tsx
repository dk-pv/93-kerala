"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/common/Icon";
import T from "@/components/common/T";
import { NAV } from "@/data/site";

/** Main navigation with the current section highlighted. */
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="no-scrollbar flex min-w-0 flex-1 items-stretch overflow-x-auto">
      {NAV.map((item) => {
        const home = item.href === "/";
        const active = home ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative flex h-12 items-center gap-1.5 px-2.5 text-sm font-semibold transition-colors hover:text-white lg:px-1.5 xl:px-3 xl:text-[15px] ${
                active ? "text-white after:absolute after:inset-x-1.5 after:bottom-0 after:h-[3px] after:bg-brand" : "text-white/75"
              }`}
            >
              {item.href === "/live" && <span aria-hidden className="size-2 rounded-full bg-brand motion-safe:animate-pulse" />}
              {home ? (
                <>
                  <Icon name="home" className="size-[18px]" />
                  <span className="sr-only">
                    <T {...item.label} />
                  </span>
                </>
              ) : (
                <T {...item.label} />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
