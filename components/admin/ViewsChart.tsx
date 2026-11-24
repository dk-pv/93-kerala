"use client";

import { useState } from "react";

const full = new Intl.NumberFormat("en-IN");
// One compact style (K/M) to match the stat tiles; full values keep Indian digit grouping.
const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
const SERIES = "#2a78d6"; // validated against the white card surface

/**
 * Single-series column chart in plain HTML (labels stay crisp at any width).
 * Hover/focus tooltip per column, peak value labelled, table view below.
 */
export default function ViewsChart({ data }: { data: { day: string; views: number }[] }) {
  const [active, setActive] = useState<number | null>(null);
  const step = 50_000;
  const max = Math.ceil(Math.max(...data.map((d) => d.views)) / step) * step;
  const ticks = Array.from({ length: max / step + 1 }, (_, i) => i * step);
  const peak = data.reduce((p, d, i) => (d.views > data[p].views ? i : p), 0);
  const pct = (v: number) => (v / max) * 100;

  return (
    <div>
      <div className="relative ml-11 h-56">
        {ticks.map((t) => (
          <div key={t} className={`absolute inset-x-0 border-t ${t === 0 ? "border-[#c3c2b7]" : "border-[#e1e0d9]"}`} style={{ bottom: `${pct(t)}%` }}>
            <span className="absolute -left-11 w-9 -translate-y-1/2 text-right text-[11px] tabular-nums text-muted">{t ? compact.format(t) : "0"}</span>
          </div>
        ))}
        <div className="absolute inset-0 flex items-end">
          {data.map((d, i) => (
            <button
              key={d.day}
              type="button"
              aria-label={`${d.day}: ${full.format(d.views)} page views`}
              onPointerEnter={() => setActive(i)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="relative flex h-full flex-1 items-end justify-center outline-none focus-visible:bg-[#2a78d6]/5"
            >
              <span
                className={`w-3/5 max-w-6 rounded-t transition-opacity ${active !== null && active !== i ? "opacity-50" : ""}`}
                style={{ height: `${pct(d.views)}%`, background: SERIES }}
              />
              {i === peak && active === null && (
                <span className="absolute text-[11px] font-semibold text-ink" style={{ bottom: `calc(${pct(d.views)}% + 4px)` }}>
                  {compact.format(d.views)}
                </span>
              )}
              {active === i && (
                <span
                  className={`pointer-events-none absolute z-10 whitespace-nowrap rounded border border-line bg-white px-2.5 py-1.5 text-left shadow-lg ${
                    i < 2 ? "left-0" : i > data.length - 3 ? "right-0" : "left-1/2 -translate-x-1/2"
                  }`}
                  style={{ bottom: `calc(${pct(d.views)}% + 8px)` }}
                >
                  <span className="block text-sm font-bold tabular-nums text-ink">{full.format(d.views)}</span>
                  <span className="block text-[11px] text-muted">{d.day} · page views</span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="ml-11 mt-1.5 flex" aria-hidden>
        {data.map((d) => (
          <span key={d.day} className="flex-1 text-center text-[11px] tabular-nums text-muted">
            {d.day.split(" ")[0]}
          </span>
        ))}
      </div>
      <p className="ml-11 mt-0.5 text-[11px] text-muted">November</p>

      <details className="mt-4 text-sm">
        <summary className="cursor-pointer text-muted hover:text-ink">View as table</summary>
        <table className="mt-2 w-full max-w-sm text-left">
          <thead>
            <tr className="border-b border-line text-xs text-muted">
              <th className="py-1.5 font-semibold">Day</th>
              <th className="py-1.5 text-right font-semibold">Page views</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.day} className="border-b border-line/60">
                <td className="py-1">{d.day}</td>
                <td className="py-1 text-right tabular-nums">{full.format(d.views)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
