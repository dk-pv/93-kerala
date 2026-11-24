import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import T from "@/components/common/T";
import SubscribeButton from "@/components/videos/SubscribeButton";
import VideoBrowser from "@/components/videos/VideoBrowser";
import VideoCard from "@/components/videos/VideoCard";
import VideoPlayer from "@/components/videos/VideoPlayer";
import { SITE } from "@/data/site";
import { VIDEOS } from "@/data/videos";

export const metadata: Metadata = { title: "വീഡിയോ | Videos" };

export default function VideosPage() {
  const [featured, ...rest] = VIDEOS;
  const newest = [...rest].sort((a, b) => a.minutesAgo - b.minutesAgo).slice(0, 4);
  return (
    <div className="wrap py-6">
      <Breadcrumb items={[{ label: { ml: "വീഡിയോ", en: "Videos" } }]} />
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b-4 border-ink pb-5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">93Kerala TV</p>
          <h1 className="mt-1 flex items-center gap-3 font-display text-4xl font-bold md:text-5xl">
            <T ml="വീഡിയോ വാർത്തകൾ" en="Video News" />
          </h1>
          <p className="mt-2 max-w-2xl text-muted">
            <T ml="മലപ്പുറത്തുനിന്നും കേരളത്തിൽനിന്നുമുള്ള വാർത്താ വീഡിയോകൾ, അഭിമുഖങ്ങൾ, തത്സമയ സംപ്രേഷണം." en="News videos, interviews and live coverage from Malappuram and across Kerala." />
          </p>
        </div>
        <SubscribeButton />
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <VideoPlayer src={SITE.liveEmbedUrl} poster={featured.thumbnail} title={featured.title} live={featured.live} preload />
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
            <Icon name="info" className="size-3.5" />
            <T ml="ഡെമോ പ്ലെയർ – യഥാർഥ യൂട്യൂബ് ചാനൽ ബന്ധിപ്പിക്കുന്നതോടെ 93കേരള വീഡിയോകൾ ലഭ്യമാകും." en="Demo player – 93Kerala's own videos appear once the YouTube channel is connected." />
          </p>
        </div>
        <div className="border border-line bg-white p-4">
          <h2 className="mb-4 font-display text-lg font-bold">
            <T ml="ഏറ്റവും പുതിയ വീഡിയോകൾ" en="Latest Videos" />
          </h2>
          <div className="space-y-4">
            {newest.map((v) => (
              <VideoCard key={v.id} v={v} row />
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <SectionHeading title={{ ml: "എല്ലാ വീഡിയോകളും", en: "All Videos" }} />
        <VideoBrowser videos={VIDEOS} />
      </section>
    </div>
  );
}
