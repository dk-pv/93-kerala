import type { Metadata } from "next";
import Ad from "@/components/ads/Ad";
import AdvertisePromo from "@/components/ads/AdvertisePromo";
import Icon from "@/components/common/Icon";
import SectionHeading from "@/components/common/SectionHeading";
import ShareButtons from "@/components/common/ShareButtons";
import T from "@/components/common/T";
import NewsCard from "@/components/news/NewsCard";
import SubscribeButton from "@/components/videos/SubscribeButton";
import VideoCard, { LiveBadge } from "@/components/videos/VideoCard";
import VideoPlayer from "@/components/videos/VideoPlayer";
import { SITE } from "@/data/site";
import { VIDEOS } from "@/data/videos";
import { latest } from "@/lib/news";

export const metadata: Metadata = {
  title: "93Kerala Live | തത്സമയം",
  description: "Watch 93Kerala's live news broadcast.",
  alternates: { canonical: "/live" },
};

export default function LivePage() {
  const live = VIDEOS.find((v) => v.live) ?? VIDEOS[0];
  return (
    <div className="wrap py-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <LiveBadge className="py-1 text-xs" />
            <h1 className="font-display text-2xl font-bold md:text-3xl">
              93Kerala <T ml="ലൈവ്" en="Live" />
            </h1>
            <span className="text-sm text-muted">
              <T ml="തത്സമയ വാർത്താ സംപ്രേഷണം" en="Live news broadcast" />
            </span>
          </div>

          <div className="ring-1 ring-black/10">
            <VideoPlayer src={SITE.liveEmbedUrl} poster={live.thumbnail} title={live.title} live preload />
          </div>
          <p className="flex items-start gap-2 border border-t-0 border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <Icon name="info" className="mt-0.5 size-4 shrink-0" />
            <T
              ml="ഡെമോ സംയോജനം: ഈ പ്ലെയറിൽ ഇപ്പോൾ ഒരു സാമ്പിൾ യൂട്യൂബ് വീഡിയോയാണ്. 93കേരളയുടെ യഥാർഥ ലൈവ് സ്ട്രീം URL ബന്ധിപ്പിക്കുന്നതോടെ തത്സമയ സംപ്രേഷണം ഇവിടെ ലഭ്യമാകും."
              en="Demonstration integration: this player currently shows a sample YouTube video. 93Kerala's live stream appears here once the channel's live URL is connected."
            />
          </p>

          <div className="mt-5 border border-line bg-white p-5">
            <h2 className="font-display text-xl font-bold leading-snug md:text-2xl">
              <T {...live.title} />
            </h2>
            <p className="mt-2 text-muted">
              <T
                ml="മലപ്പുറം ജില്ലയിലെ മഴക്കെടുതി, ഗതാഗത നിയന്ത്രണങ്ങൾ, ദുരിതാശ്വാസ ക്യാമ്പുകൾ എന്നിവയെക്കുറിച്ചുള്ള തത്സമയ വിവരങ്ങൾ 93കേരള സംഘം നൽകുന്നു."
                en="The 93Kerala team brings live updates on rain damage, traffic restrictions and relief camps across Malappuram district."
              />
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <SubscribeButton />
                <span className="text-sm text-muted">
                  <T ml="ലൈവ് അറിയിപ്പുകൾക്കായി" en="for live alerts" />
                </span>
              </div>
              <ShareButtons title={live.title.ml} />
            </div>
          </div>

          <section className="mt-8">
            <SectionHeading title={{ ml: "ബന്ധപ്പെട്ട വീഡിയോകൾ", en: "Related Videos" }} href="/videos" />
            <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
              {VIDEOS.filter((v) => !v.live)
                .slice(0, 4)
                .map((v) => (
                  <VideoCard key={v.id} v={v} />
                ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="border border-t-4 border-line border-t-brand bg-white p-4 md:p-5">
            <SectionHeading title={{ ml: "പുതിയ വാർത്തകൾ", en: "Latest News" }} as="h2" />
            <div className="divide-y divide-line">
              {latest(6).map((a) => (
                <NewsCard key={a.slug} a={a} variant="compact" />
              ))}
            </div>
          </div>
          <Ad placement="SIDEBAR" />
          <AdvertisePromo />
        </aside>
      </div>
    </div>
  );
}
