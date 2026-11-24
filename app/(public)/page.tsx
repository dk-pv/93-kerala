import Link from "next/link";
import Ad from "@/components/ads/Ad";
import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import T from "@/components/common/T";
import NewsCard from "@/components/news/NewsCard";
import TrendingNews from "@/components/news/TrendingNews";
import SubscribeButton from "@/components/videos/SubscribeButton";
import VideoCard from "@/components/videos/VideoCard";
import VideoPlayer from "@/components/videos/VideoPlayer";
import { SITE } from "@/data/site";
import { VIDEOS } from "@/data/videos";
import { featured, inSection, latest, trending } from "@/lib/news";
import type { Article, Text } from "@/types";

const panel = "border border-line bg-white p-4 md:p-5";

export default function HomePage() {
  const [lead, ...top] = featured();
  const used = new Set(featured().map((a) => a.slug));
  const fresh = (list: Article[]) => list.filter((a) => !used.has(a.slug));

  // Manjeri and Malappuram lead the local block (wider columns, red accent, summaries).
  const local: { href: string; title: Text; items: Article[]; priority?: boolean }[] = [
    { href: "/district/manjeri", title: { ml: "മഞ്ചേരി", en: "Manjeri" }, items: fresh(inSection("manjeri")), priority: true },
    {
      href: "/district/malappuram",
      title: { ml: "മലപ്പുറം", en: "Malappuram" },
      items: fresh(inSection("malappuram")).filter((a) => a.district === "malappuram"),
      priority: true,
    },
    { href: "/category/kerala", title: { ml: "കേരളം", en: "Kerala" }, items: fresh(inSection("kerala")).filter((a) => !a.district) },
    { href: "/category/india", title: { ml: "ദേശീയം", en: "National" }, items: fresh(inSection("india")) },
  ];

  const grids: { href: string; title: Text; eyebrow: Text; items: Article[] }[] = [
    { href: "/category/sports", title: { ml: "കായികം", en: "Sports" }, eyebrow: { ml: "കളിക്കളം", en: "On the field" }, items: inSection("sports") },
    { href: "/category/entertainment", title: { ml: "വിനോദം", en: "Entertainment" }, eyebrow: { ml: "സിനിമ · സംഗീതം", en: "Cinema · Music" }, items: inSection("entertainment") },
  ];

  const [liveVideo, ...videos] = VIDEOS;

  return (
    <>
      {/* 1 · Featured */}
      <section className="wrap pt-6" aria-label="Top stories">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)_300px]">
          <div className={panel}>
            <NewsCard a={lead} variant="lead" preload />
          </div>
          <div className={`${panel} border-t-4 border-t-brand`}>
            <h2 className="mb-1 font-display text-lg font-bold">
              <T ml="പ്രധാന വാർത്തകൾ" en="Top Stories" />
            </h2>
            <div className="divide-y divide-line">
              {top.map((a) => (
                <div key={a.slug} className="py-3.5 last:pb-0">
                  <NewsCard a={a} variant="row" />
                </div>
              ))}
            </div>
          </div>
          <Ad placement="HOME_SIDEBAR" className="hidden xl:block" />
        </div>
      </section>

      {/* 2 · In-feed ad */}
      <Ad placement="HOME_INFEED_1" className="wrap mt-8" />

      {/* 3 · Local news */}
      <section className="wrap mt-8" aria-label="Local news">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1.2fr_1.2fr_1fr_1fr]">
          {local.map((col) => (
            <div key={col.href} className={`${panel} border-t-4 ${col.priority ? "border-t-brand" : "border-t-ink"}`}>
              <SectionHeading
                title={col.title}
                href={col.href}
                eyebrow={col.priority ? { ml: "പ്രാദേശിക വാർത്തകൾ", en: "Local News" } : { ml: "വാർത്തകൾ", en: "News" }}
              />
              <NewsCard a={col.items[0]} summary={col.priority} />
              <div className="mt-3 divide-y divide-line border-t border-line">
                {col.items.slice(1, 4).map((a) => (
                  <NewsCard key={a.slug} a={a} variant="compact" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 · Latest + trending */}
      <section className="wrap mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className={panel}>
          <SectionHeading title={{ ml: "ഏറ്റവും പുതിയ വാർത്തകൾ", en: "Latest News" }} eyebrow={{ ml: "ഇപ്പോൾ", en: "Just in" }} />
          <div className="divide-y divide-line">
            {latest(8).map((a) => (
              <NewsCard key={a.slug} a={a} variant="list" summary />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className={panel}>
            <TrendingNews items={trending(6)} />
          </div>
          <Ad placement="SIDEBAR" />
        </div>
      </section>

      {/* 5 · Video */}
      <section className="mt-10 bg-ink py-10 text-white" aria-label="Video news">
        <div className="wrap">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">93Kerala TV</p>
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold md:text-3xl">
                <Icon name="video" className="size-7 text-brand" />
                <T ml="93കേരള വീഡിയോ വാർത്തകൾ" en="93Kerala Video News" />
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/videos" className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-white/80 hover:text-white">
                <T ml="എല്ലാ വീഡിയോകളും" en="All videos" />
                <Icon name="arrowRight" />
              </Link>
              <SubscribeButton />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div>
              <VideoPlayer src={SITE.liveEmbedUrl} poster={liveVideo.thumbnail} title={liveVideo.title} live />
              <Link href="/live" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white">
                <T ml="93കേരള ലൈവ് പേജ് തുറക്കുക" en="Open the 93Kerala Live page" />
                <Icon name="arrowRight" />
              </Link>
            </div>
            <div className="grid content-start gap-x-5 gap-y-6 sm:grid-cols-2">
              {videos.slice(0, 4).map((v) => (
                <VideoCard key={v.id} v={v} dark />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 · In-feed ad */}
      <Ad placement="HOME_INFEED_2" className="wrap mt-10" />

      {/* 7 · Sports + entertainment */}
      <section className="wrap mt-8 grid gap-6 lg:grid-cols-2">
        {grids.map((g) => (
          <div key={g.href} className={panel}>
            <SectionHeading title={g.title} eyebrow={g.eyebrow} href={g.href} />
            <NewsCard a={g.items[0]} variant="overlay" />
            <div className="mt-5 grid gap-x-5 gap-y-6 sm:grid-cols-2">
              {g.items.slice(1, 5).map((a) => (
                <NewsCard key={a.slug} a={a} badge={false} sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
