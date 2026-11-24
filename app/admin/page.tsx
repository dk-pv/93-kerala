import type { ReactNode } from "react";
import NewsTable, { type NewsRow } from "@/components/admin/NewsTable";
import StatusBadge from "@/components/admin/StatusBadge";
import ViewsChart from "@/components/admin/ViewsChart";
import Icon from "@/components/common/Icon";
import { CAMPAIGNS, DAILY_VIEWS, STATS, UNPUBLISHED } from "@/data/admin";
import { ADS, AD_FORMATS, PLACEMENT_FORMAT } from "@/data/advertisements";
import { SECTIONS } from "@/data/categories";
import { AUTHORS } from "@/data/news";
import { getSection, latest } from "@/lib/news";
import { timeAgo } from "@/lib/utils";

const num = new Intl.NumberFormat("en-IN");

function Card({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border border-line bg-white p-5">
      <div className="mb-4">
        <h2 className="text-base font-bold">{title}</h2>
        {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

export default function AdminDashboard() {
  const categoryName = (slug: string) => getSection(slug)?.name.en ?? slug;
  const rows: NewsRow[] = [
    ...UNPUBLISHED.map((d) => ({ ...d, categoryName: categoryName(d.category) })),
    ...latest(16).map((a) => ({
      id: a.slug,
      title: a.title.ml,
      titleEn: a.title.en,
      category: a.category,
      categoryName: categoryName(a.category),
      author: AUTHORS[a.author].name.en ?? "",
      status: "Published" as const,
      views: a.views,
      updated: timeAgo(a.minutesAgo).en ?? "",
      href: `/news/${a.slug}`,
    })),
  ];
  const categories = SECTIONS.filter((s) => s.kind === "category").map((s) => ({ slug: s.slug, name: s.name.en ?? s.slug }));
  const campaigns = ADS.map((ad) => ({ ad, ...CAMPAIGNS[ad.id] }));
  const byPlacement = [...campaigns].sort((a, b) => b.clicks - a.clicks);
  const maxClicks = byPlacement[0].clicks;

  return (
    <div className="space-y-6">
      <p className="flex items-start gap-2 border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <Icon name="info" className="mt-0.5 size-4 shrink-0" />
        <span>
          <strong>Frontend demo.</strong> Figures and tables use sample data and are not connected to a database, analytics or an ad server. Editing actions
          are disabled until the backend is built.
        </span>
      </p>

      <section aria-label="Key figures" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className={`flex items-start gap-4 border border-line bg-white p-5 ${i === STATS.length - 1 ? "sm:col-span-2" : ""}`}>
            <span className="grid size-10 shrink-0 place-items-center rounded bg-brand/10 text-brand">
              <Icon name={s.icon} className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted">{s.label}</p>
              <p className="mt-0.5 text-3xl font-semibold tracking-tight">{s.value}</p>
              <p className="mt-1 text-xs text-muted">{s.note}</p>
            </div>
          </div>
        ))}
      </section>

      <div id="analytics" className="grid scroll-mt-20 gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Card title="Page views" subtitle="Last 14 days · sample data">
          <ViewsChart data={DAILY_VIEWS} />
        </Card>
        <Card id="placements" title="Ad clicks by placement" subtitle="Current campaigns · sample data">
          <ul className="space-y-3.5">
            {byPlacement.map((c) => (
              <li key={c.ad.id}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="truncate font-mono text-xs font-semibold">{c.ad.placement}</span>
                  <span className="font-semibold tabular-nums">{num.format(c.clicks)}</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-[#2a78d6]/12">
                  <div className="h-full rounded-full bg-[#2a78d6]" style={{ width: `${(c.clicks / maxClicks) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card id="news" title="News management" subtitle="Drafts, review queue and published stories">
        <NewsTable rows={rows} categories={categories} />
      </Card>

      <Card id="campaigns" title="Advertisement campaigns" subtitle="One campaign per placement · sample data">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                <th className="py-3 pr-4 font-semibold">Advertiser</th>
                <th className="py-3 pr-4 font-semibold">Placement</th>
                <th className="py-3 pr-4 font-semibold">Flight</th>
                <th className="py-3 pr-4 text-right font-semibold">Impressions</th>
                <th className="py-3 pr-4 text-right font-semibold">Clicks</th>
                <th className="py-3 pr-4 text-right font-semibold">CTR</th>
                <th className="py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {campaigns.map((c) => (
                <tr key={c.ad.id} className="hover:bg-page">
                  <td className="py-3 pr-4">
                    <span className="flex items-center gap-2.5">
                      <span aria-hidden className="size-3 shrink-0 rounded-sm" style={{ background: c.ad.theme.bg, outline: `2px solid ${c.ad.theme.accent}` }} />
                      <span className="font-semibold">{c.ad.brand}</span>
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="font-mono text-xs font-semibold">{c.ad.placement}</span>
                    <span className="block text-xs text-muted">{AD_FORMATS[PLACEMENT_FORMAT[c.ad.placement]].size}</span>
                  </td>
                  <td className="whitespace-nowrap py-3 pr-4 text-muted">
                    {c.start} – {c.end}
                  </td>
                  <td className="py-3 pr-4 text-right tabular-nums">{c.impressions ? num.format(c.impressions) : "—"}</td>
                  <td className="py-3 pr-4 text-right tabular-nums">{c.clicks ? num.format(c.clicks) : "—"}</td>
                  <td className="py-3 pr-4 text-right tabular-nums">{c.impressions ? `${((c.clicks / c.impressions) * 100).toFixed(2)}%` : "—"}</td>
                  <td className="py-3">
                    <StatusBadge status={c.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
