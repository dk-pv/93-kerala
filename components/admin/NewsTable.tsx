"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/common/Icon";
import type { NewsStatus } from "@/data/admin";
import StatusBadge from "./StatusBadge";

export type NewsRow = {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryName: string;
  author: string;
  status: NewsStatus;
  views?: number;
  updated: string;
  href?: string;
};

const STATUSES: NewsStatus[] = ["Published", "Pending review", "Draft", "Scheduled"];
const views = new Intl.NumberFormat("en-IN");
const control = "h-9 border border-line bg-white px-3 text-sm outline-none focus:border-ink";

/** Client-side search and filters over the demo rows. */
export default function NewsTable({ rows, categories }: { rows: NewsRow[]; categories: { slug: string; name: string }[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const q = query.trim().toLowerCase();
  const shown = rows.filter(
    (r) =>
      (status === "all" || r.status === status) &&
      (category === "all" || r.category === category) &&
      (!q || `${r.title} ${r.titleEn ?? ""} ${r.author}`.toLowerCase().includes(q)),
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4">
        <label className="relative min-w-56 flex-1">
          <span className="sr-only">Search news</span>
          <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search by headline or author…" className={`${control} w-full pl-9`} />
        </label>
        <label>
          <span className="sr-only">Status</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={control}>
            <option value="all">All statuses</option>
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={control}>
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <span className="ml-auto text-xs text-muted">
          {shown.length} of {rows.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
              <th className="py-3 pr-4 font-semibold">Headline</th>
              <th className="py-3 pr-4 font-semibold">Category</th>
              <th className="py-3 pr-4 font-semibold">Author</th>
              <th className="py-3 pr-4 font-semibold">Status</th>
              <th className="py-3 pr-4 text-right font-semibold">Views</th>
              <th className="py-3 font-semibold">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {shown.map((r) => (
              <tr key={r.id} className="align-top hover:bg-page">
                <td className="max-w-md py-3 pr-4">
                  {r.href ? (
                    <Link href={r.href} className="font-semibold leading-snug hover:text-brand">
                      {r.title}
                    </Link>
                  ) : (
                    <span className="font-semibold leading-snug">{r.title}</span>
                  )}
                  {r.titleEn && <p className="mt-0.5 line-clamp-1 text-xs text-muted">{r.titleEn}</p>}
                </td>
                <td className="whitespace-nowrap py-3 pr-4">{r.categoryName}</td>
                <td className="whitespace-nowrap py-3 pr-4 text-muted">{r.author}</td>
                <td className="py-3 pr-4">
                  <StatusBadge status={r.status} />
                </td>
                <td className="py-3 pr-4 text-right tabular-nums">{r.views ? views.format(r.views) : "—"}</td>
                <td className="whitespace-nowrap py-3 text-muted">{r.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {shown.length === 0 && <p className="py-10 text-center text-sm text-muted">No articles match these filters.</p>}
      </div>
    </div>
  );
}
