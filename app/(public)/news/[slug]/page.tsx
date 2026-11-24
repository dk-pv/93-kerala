import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Ad from "@/components/ads/Ad";
import Breadcrumb from "@/components/common/Breadcrumb";
import Icon from "@/components/common/Icon";
import Img from "@/components/common/Img";
import LocalTime from "@/components/common/LocalTime";
import SectionHeading from "@/components/common/SectionHeading";
import ShareButtons from "@/components/common/ShareButtons";
import T from "@/components/common/T";
import NewsCard, { CategoryBadge } from "@/components/news/NewsCard";
import TrendingNews from "@/components/news/TrendingNews";
import { ARTICLES, AUTHORS } from "@/data/news";
import { getArticle, getSection, latest, related, trending } from "@/lib/news";
import { sectionHref, timeAgo } from "@/lib/utils";

// Fully static; unknown slugs render completely before responding, so notFound() sends a real 404.
export const ensureStatic = "navigation";

const REPRESENTATIVE = { ml: "പ്രതീകാത്മക ചിത്രം", en: "Representative image" };
const panel = "border border-line bg-white p-4 md:p-5";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.title.ml,
    description: a.summary.ml,
    openGraph: { type: "article", title: a.title.ml, description: a.summary.ml, images: [a.image] },
  };
}

export default async function ArticlePage({ params }: PageProps<"/news/[slug]">) {
  const a = getArticle((await params).slug);
  if (!a) notFound();

  const section = getSection(a.category)!;
  const district = a.district ? getSection(a.district) : undefined;
  const author = AUTHORS[a.author];
  const initials = (author.name.en ?? "")
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  // Paragraphs are paired by index so each one can switch language independently.
  const paragraphs = a.body.ml.map((ml, i) => ({ ml, en: a.body.en?.[i] }));
  const adAfter = paragraphs.length > 2 ? 1 : 0;
  const photos = a.gallery?.length ? [a.image, ...a.gallery] : [];

  return (
    <div className="wrap py-6">
      <Breadcrumb items={[{ label: section.name, href: sectionHref(section) }, { label: a.title }]} />
      <Ad placement="ARTICLE_TOP" className="mb-6" />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0 border border-line bg-white px-4 py-6 sm:px-8 lg:px-10 lg:py-8">
          <header>
            <div className="flex flex-wrap items-center gap-3">
              <CategoryBadge slug={a.category} />
              {district && (
                <Link href={sectionHref(district)} className="inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-brand">
                  <Icon name="pin" className="size-3.5 text-accent" />
                  <T {...district.name} />
                </Link>
              )}
            </div>
            <h1 className="mt-3 font-display text-[1.7rem] font-bold leading-[1.35] md:text-[2.4rem]">
              <T {...a.title} />
            </h1>
            {a.title.en && (
              // The other language's headline, as a secondary line.
              <p className="mt-2 text-lg font-medium leading-snug text-muted md:text-xl">
                <span lang="en" className="lang-ml">
                  {a.title.en}
                </span>
                <span lang="ml" className="lang-en">
                  {a.title.ml}
                </span>
              </p>
            )}
            <p className="mt-5 border-l-4 border-brand pl-4 text-lg leading-relaxed text-ink/80">
              <T {...a.summary} />
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4">
              <div className="flex items-center gap-3">
                <span aria-hidden className="grid size-11 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white">
                  {initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">
                    <T {...author.name} />
                  </p>
                  <p className="text-xs text-muted">
                    <T {...author.role} />
                  </p>
                </div>
              </div>
              <dl className="grid gap-1 text-xs text-muted sm:text-right">
                <div className="flex flex-wrap gap-1 sm:justify-end">
                  <dt>
                    <T ml="പ്രസിദ്ധീകരിച്ചത്:" en="Published:" />
                  </dt>
                  <dd className="text-ink">
                    <LocalTime minutesAgo={a.minutesAgo} withTime /> (<T {...timeAgo(a.minutesAgo)} />)
                  </dd>
                </div>
                {a.updatedMinutesAgo !== undefined && (
                  <div className="flex flex-wrap gap-1 sm:justify-end">
                    <dt>
                      <T ml="അപ്ഡേറ്റ് ചെയ്തത്:" en="Updated:" />
                    </dt>
                    <dd className="text-ink">
                      <T {...timeAgo(a.updatedMinutesAgo)} />
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </header>

          <figure className="mt-6">
            <div className="relative aspect-[16/9] overflow-hidden bg-line">
              <Img src={a.image} alt={a.title.ml} fill preload sizes="(min-width: 1024px) 780px, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              <T {...(a.caption ?? REPRESENTATIVE)} />
            </figcaption>
          </figure>

          <div className="mt-7 space-y-5 text-[17px] leading-[1.9] md:text-lg">
            {!a.body.en && (
              <p className="lang-en flex items-start gap-2 border border-line bg-page px-4 py-3 text-sm leading-relaxed text-muted">
                <Icon name="info" className="mt-0.5 size-4 shrink-0" />
                The full report is currently available in Malayalam only.
              </p>
            )}
            {paragraphs.map((p, i) => (
              <Fragment key={i}>
                <p>
                  <T {...p} />
                </p>
                {i === adAfter && <Ad placement="ARTICLE_MIDDLE" className="border-y border-line py-5" />}
              </Fragment>
            ))}
          </div>

          {photos.length > 0 && (
            <section className="mt-8">
              <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold">
                <Icon name="image" className="size-5 text-brand" />
                <T ml="ചിത്രങ്ങൾ" en="Photo gallery" />
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {photos.map((src, i) => (
                  <figure key={src} className="group relative aspect-[4/3] overflow-hidden bg-line">
                    <Img src={src} alt={`${a.title.ml} – ${i + 1}`} fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </figure>
                ))}
              </div>
            </section>
          )}

          <div className="mt-8 border-t border-line pt-5">
            <ShareButtons title={a.title.ml} />
          </div>

          <p className="mt-6 flex items-start gap-2 bg-page p-4 text-xs leading-relaxed text-muted">
            <Icon name="info" className="size-4 shrink-0" />
            <T
              ml="ഇത് പ്രദർശനാവശ്യത്തിനായി തയാറാക്കിയ സാങ്കൽപിക വാർത്തയാണ്; യഥാർഥ സംഭവങ്ങളുമായി ബന്ധമില്ല."
              en="This is a fictional sample story created for demonstration and does not describe real events."
            />
          </p>

          <Ad placement="ARTICLE_BOTTOM" className="mt-8" />

          <section className="mt-10">
            <SectionHeading title={{ ml: "ബന്ധപ്പെട്ട വാർത്തകൾ", en: "Related News" }} href={sectionHref(section)} />
            <div className="grid gap-6 sm:grid-cols-2">
              {related(a, 4).map((r) => (
                <NewsCard key={r.slug} a={r} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
              ))}
            </div>
          </section>
        </article>

        <aside className="space-y-6">
          <Ad placement="SIDEBAR" />
          <div className={panel}>
            <TrendingNews items={trending(5)} />
          </div>
          <div className={`${panel} lg:sticky lg:top-16`}>
            <SectionHeading title={{ ml: "പുതിയ വാർത്തകൾ", en: "Latest News" }} as="h3" />
            <div className="divide-y divide-line">
              {latest(6)
                .filter((x) => x.slug !== a.slug)
                .slice(0, 5)
                .map((x) => (
                  <NewsCard key={x.slug} a={x} variant="compact" />
                ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
