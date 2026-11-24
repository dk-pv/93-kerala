import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Icon, { type IconName } from "@/components/common/Icon";
import Logo from "@/components/common/Logo";

export const metadata: Metadata = {
  title: "Admin Dashboard (Demo)",
  robots: { index: false, follow: false },
};

type Item = { label: string; icon: IconName; href?: string };

// Items with an href jump to a section of the demo dashboard; the rest arrive with the backend.
const GROUPS: { title: string; items: Item[] }[] = [
  { title: "Overview", items: [{ label: "Dashboard", icon: "grid", href: "/admin" }] },
  {
    title: "Content",
    items: [
      { label: "All News", icon: "newspaper", href: "#news" },
      { label: "Create News", icon: "filePlus" },
      { label: "Drafts", icon: "file", href: "#news" },
      { label: "Pending Review", icon: "hourglass", href: "#news" },
      { label: "Published News", icon: "checkCircle", href: "#news" },
      { label: "Categories", icon: "folder" },
      { label: "Media Library", icon: "image" },
    ],
  },
  {
    title: "Advertising",
    items: [
      { label: "Advertisers", icon: "briefcase", href: "#campaigns" },
      { label: "Advertisement Campaigns", icon: "megaphone", href: "#campaigns" },
      { label: "Ad Placements", icon: "layout", href: "#placements" },
    ],
  },
  {
    title: "Video",
    items: [
      { label: "Video Management", icon: "video" },
      { label: "YouTube Live", icon: "live" },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Analytics", icon: "chart", href: "#analytics" },
      { label: "Users & Roles", icon: "users" },
      { label: "Settings", icon: "settings" },
    ],
  },
];

const itemClass = "flex shrink-0 items-center gap-3 rounded px-3 py-2 text-sm whitespace-nowrap";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f3f4f6] lg:grid lg:grid-cols-[264px_minmax(0,1fr)]">
      <aside className="border-b border-line bg-white lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <Logo className="h-10 w-auto" />
          <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#a3430f]">Demo</span>
        </div>
        <nav aria-label="Admin" className="no-scrollbar flex gap-1 overflow-x-auto p-3 lg:block lg:space-y-5 lg:overflow-visible">
          {GROUPS.map((g) => (
            <div key={g.title} className="contents lg:block">
              <p className="hidden px-3 pb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted lg:block">{g.title}</p>
              {g.items.map((item, i) =>
                item.href ? (
                  item.href.startsWith("/") ? (
                    <Link key={item.label} href={item.href} className={`${itemClass} bg-ink font-semibold text-white`}>
                      <Icon name={item.icon} className="size-4" />
                      {item.label}
                    </Link>
                  ) : (
                    <a key={item.label} href={item.href} className={`${itemClass} text-ink/80 hover:bg-page hover:text-ink`}>
                      <Icon name={item.icon} className="size-4" />
                      {item.label}
                    </a>
                  )
                ) : (
                  <span key={i} aria-disabled="true" title="Available after backend integration" className={`${itemClass} cursor-not-allowed text-ink/35`}>
                    <Icon name={item.icon} className="size-4" />
                    {item.label}
                    <span className="ml-auto rounded border border-line px-1 text-[9px] font-semibold uppercase tracking-wide">Soon</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </nav>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-line bg-white/95 px-4 backdrop-blur md:px-6 lg:px-8">
          <div>
            <p className="text-xs text-muted">93Kerala Newsroom</p>
            <h1 className="text-lg font-bold leading-tight">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hidden items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink sm:inline-flex">
              View site <Icon name="arrowRight" className="size-3.5" />
            </Link>
            <button
              type="button"
              disabled
              title="Available after backend integration"
              className="inline-flex cursor-not-allowed items-center gap-1.5 bg-brand px-3 py-2 text-sm font-bold text-white opacity-60"
            >
              <Icon name="plus" className="size-4" /> Create News
            </button>
            <span title="Demo editor account" className="grid size-9 place-items-center rounded-full bg-ink text-xs font-bold text-white">
              ED
            </span>
          </div>
        </header>
        <main className="p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
