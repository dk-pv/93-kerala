import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
import T from "@/components/common/T";
import type { Article } from "@/types";
import { Meta } from "./NewsCard";

/** Numbered most-read list. */
export default function TrendingNews({ items }: { items: Article[] }) {
  return (
    <section>
      <SectionHeading title={{ ml: "കൂടുതൽ വായിച്ചവ", en: "Most Read" }} eyebrow={{ ml: "ട്രെൻഡിങ്", en: "Trending" }} as="h3" />
      <ol className="divide-y divide-line">
        {items.map((a, i) => (
          <li key={a.slug} className="group relative flex gap-3 py-3">
            <span
              aria-hidden
              className={`w-9 shrink-0 font-display text-3xl font-bold leading-none tabular-nums ${i < 3 ? "text-brand" : "text-ink/20"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h4 className="line-clamp-3 font-display text-[15px] font-semibold leading-[1.45]">
                <Link href={`/news/${a.slug}`} className="after:absolute after:inset-0 hover:text-brand">
                  <T {...a.title} />
                </Link>
              </h4>
              <Meta a={a} place={false} className="mt-1" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
