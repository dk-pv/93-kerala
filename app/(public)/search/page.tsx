import type { Metadata } from "next";
import Form from "next/form";
import Link from "next/link";
import { Suspense } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Icon from "@/components/common/Icon";
import T from "@/components/common/T";
import NewsCard from "@/components/news/NewsCard";
import TrendingNews from "@/components/news/TrendingNews";
import { SECTIONS } from "@/data/categories";
import { search, trending } from "@/lib/news";
import { sectionHref } from "@/lib/utils";

export const metadata: Metadata = { title: "തിരയുക | Search" };

const POPULAR = ["മഴ", "മഞ്ചേരി", "കരിപ്പൂർ", "ഫുട്ബോൾ", "KSRTC", "Gulf"];

export default function SearchPage({ searchParams }: PageProps<"/search">) {
  return (
    <div className="wrap py-6">
      <Breadcrumb items={[{ label: { ml: "തിരയുക", en: "Search" } }]} />
      <h1 className="font-display text-3xl font-bold md:text-4xl">
        <T ml="വാർത്തകൾ തിരയുക" en="Search news" />
      </h1>
      <Suspense fallback={<SearchForm />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

function SearchForm({ q = "" }: { q?: string }) {
  return (
    <Form action="/search" role="search" className="mt-4 flex max-w-2xl">
      <label htmlFor="q" className="sr-only">
        Search
      </label>
      <input
        id="q"
        key={q}
        name="q"
        type="search"
        defaultValue={q}
        autoFocus={!q}
        placeholder="വാർത്തകൾ, സ്ഥലങ്ങൾ, വിഭാഗങ്ങൾ… / Search news, places, sections…"
        className="h-12 min-w-0 flex-1 border border-r-0 border-line bg-white px-4 text-base outline-none focus:border-ink"
      />
      <button type="submit" aria-label="Search" className="grid h-12 w-14 place-items-center bg-brand text-white hover:bg-brand-dark">
        <Icon name="search" className="size-5" />
      </button>
    </Form>
  );
}

function Chips({ terms }: { terms: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {terms.map((t) => (
        <Link key={t} href={`/search?q=${encodeURIComponent(t)}`} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm hover:border-ink">
          {t}
        </Link>
      ))}
    </div>
  );
}

async function Results({ searchParams }: { searchParams: PageProps<"/search">["searchParams"] }) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw ?? "").trim().slice(0, 100);
  const { articles, sections } = search(q);

  return (
    <>
      <SearchForm q={q} />
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          {!q ? (
            <div className="space-y-6 border border-line bg-white p-5">
              <div>
                <h2 className="mb-3 font-display text-lg font-bold">
                  <T ml="ജനപ്രിയ തിരച്ചിലുകൾ" en="Popular searches" />
                </h2>
                <Chips terms={POPULAR} />
              </div>
              <div>
                <h2 className="mb-3 font-display text-lg font-bold">
                  <T ml="വിഭാഗങ്ങൾ" en="Browse sections" />
                </h2>
                <div className="flex flex-wrap gap-2">
                  {SECTIONS.map((s) => (
                    <Link key={s.slug} href={sectionHref(s)} className="bg-ink px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand">
                      <T {...s.name} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : articles.length + sections.length === 0 ? (
            <div className="border border-line bg-white px-6 py-14 text-center">
              <Icon name="search" className="mx-auto size-10 text-line" />
              <p className="mt-4 font-display text-xl font-bold">
                <T ml={`“${q}” എന്നതിന് ഫലങ്ങളൊന്നും കണ്ടെത്തിയില്ല`} en={`No results for “${q}”`} />
              </p>
              <p className="mt-2 text-sm text-muted">
                <T ml="മറ്റൊരു വാക്ക് ഉപയോഗിച്ച് ശ്രമിക്കൂ, അല്ലെങ്കിൽ ഇവ നോക്കൂ:" en="Try another word, or explore these:" />
              </p>
              <div className="mt-5 flex justify-center">
                <Chips terms={POPULAR} />
              </div>
            </div>
          ) : (
            <div className="border border-line bg-white p-4 md:p-5">
              <p className="text-sm text-muted">
                <T ml={`“${q}” – ${articles.length} വാർത്തകൾ`} en={`${articles.length} stories for “${q}”`} />
              </p>
              {sections.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2 border-b border-line pb-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-muted">
                    <T ml="വിഭാഗങ്ങൾ" en="Sections" />
                  </span>
                  {sections.map((s) => (
                    <Link key={s.slug} href={sectionHref(s)} className="bg-brand px-3 py-1 text-sm font-semibold text-white hover:bg-brand-dark">
                      <T {...s.name} />
                    </Link>
                  ))}
                </div>
              )}
              <div className="divide-y divide-line">
                {articles.map((a) => (
                  <NewsCard key={a.slug} a={a} variant="list" summary />
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="border border-line bg-white p-4 md:p-5">
          <TrendingNews items={trending(6)} />
        </aside>
      </div>
    </>
  );
}
