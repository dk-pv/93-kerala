import Link from "next/link";
import { Suspense } from "react";
import Ad from "@/components/ads/Ad";
import AdvertisePromo from "@/components/ads/AdvertisePromo";
import Breadcrumb from "@/components/common/Breadcrumb";
import Pagination from "@/components/common/Pagination";
import SectionHeading from "@/components/common/SectionHeading";
import T from "@/components/common/T";
import { SECTIONS } from "@/data/categories";
import { getSection, inSection, trending } from "@/lib/news";
import { sectionHref } from "@/lib/utils";
import type { Article, Section } from "@/types";
import NewsCard from "./NewsCard";
import TrendingNews from "./TrendingNews";

const PAGE_SIZE = 5;
const panel = "border border-line bg-white p-4 md:p-5";
type SearchParams = Promise<Record<string, string | string[] | undefined>>;

/** Shared layout for /category/[slug] and /district/[slug]. */
export default function SectionPage({ section, searchParams }: { section: Section; searchParams: SearchParams }) {
  const articles = inSection(section.slug);
  const [lead, ...rest] = articles;
  const parent = section.parent ? getSection(section.parent) : undefined;
  const children = SECTIONS.filter((s) => s.parent === section.slug);
  const crumbs = [...(parent ? [{ label: parent.name, href: sectionHref(parent) }] : []), { label: section.name }];

  return (
    <div className="wrap py-6">
      <Breadcrumb items={crumbs} />
      <header className="mb-6 border-b-4 border-ink pb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
          {section.kind === "district" ? <T ml="പ്രാദേശിക വാർത്തകൾ" en="Local News" /> : <T ml="വിഭാഗം" en="Section" />}
        </p>
        <h1 className="mt-1 font-display text-4xl font-bold md:text-5xl">
          <T {...section.name} />
        </h1>
        <p className="mt-2 max-w-2xl text-muted">
          <T {...section.description} />
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="text-muted">
            {articles.length} <T ml="വാർത്തകൾ" en="stories" />
          </span>
          {children.map((c) => (
            <Link key={c.slug} href={sectionHref(c)} className="rounded-full border border-line bg-white px-3 py-1 hover:border-ink">
              <T {...c.name} />
            </Link>
          ))}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-6">
          {lead ? (
            <div className={`${panel} grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]`}>
              <NewsCard a={lead} variant="lead" preload />
              <div className="grid content-start gap-6 sm:grid-cols-2 xl:grid-cols-1">
                {rest.slice(0, 2).map((a) => (
                  <NewsCard key={a.slug} a={a} />
                ))}
              </div>
            </div>
          ) : (
            <p className={`${panel} py-16 text-center text-muted`}>
              <T ml="ഈ വിഭാഗത്തിൽ വാർത്തകളൊന്നുമില്ല." en="No stories in this section yet." />
            </p>
          )}
          {rest.length > 2 && (
            <div className={panel}>
              <SectionHeading title={{ ml: "കൂടുതൽ വാർത്തകൾ", en: "More stories" }} />
              <Suspense fallback={<ListSkeleton />}>
                <PagedList articles={rest.slice(2)} searchParams={searchParams} basePath={sectionHref(section)} />
              </Suspense>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <Ad placement="SIDEBAR" />
          <div className={panel}>
            <TrendingNews items={trending(5)} />
          </div>
          <AdvertisePromo className="lg:sticky lg:top-16" />
        </aside>
      </div>
    </div>
  );
}

/** Reads ?page= — the only request-time part of the page, so it streams behind Suspense. */
async function PagedList({ articles, searchParams, basePath }: { articles: Article[]; searchParams: SearchParams; basePath: string }) {
  const raw = (await searchParams).page;
  const pages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const page = Math.min(pages, Math.max(1, Number(Array.isArray(raw) ? raw[0] : raw) || 1));
  return (
    <>
      <div className="divide-y divide-line">
        {articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((a) => (
          <NewsCard key={a.slug} a={a} variant="list" summary />
        ))}
      </div>
      <Pagination page={page} pages={pages} basePath={basePath} />
    </>
  );
}

function ListSkeleton() {
  return (
    <div className="divide-y divide-line" aria-hidden>
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="flex gap-4 py-4">
          <div className="aspect-[16/10] w-32 shrink-0 animate-pulse bg-line sm:w-52" />
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-3 w-20 animate-pulse bg-line" />
            <div className="h-4 w-full animate-pulse bg-line" />
            <div className="h-4 w-2/3 animate-pulse bg-line" />
          </div>
        </div>
      ))}
    </div>
  );
}
