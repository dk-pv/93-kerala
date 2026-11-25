# 93Kerala – digital news portal (frontend demo)

Bilingual (Malayalam / English) news portal frontend for 93Kerala, Manjeri. **Frontend only:** every story, video, ad and dashboard figure is fictional sample data from `data/`. There is no database, CMS, auth, ad tracking or live-stream detection yet.

Next.js 16 (App Router, Cache Components, Partial Prefetching) · React 19 · TypeScript · Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev                      # http://localhost:3000
npm run build && npm run start   # production build (use this for demos)
```

The first build needs internet access to download the Google fonts. Images are local (`public/images`), so a demo needs no network except for the YouTube player.

| Route | Page |
|---|---|
| `/` | Homepage |
| `/news/[slug]` | Article |
| `/category/[slug]`, `/district/[slug]` | Section pages (e.g. `/category/politics`, `/district/manjeri`) |
| `/videos`, `/live` | Video news, YouTube live (demo embed) |
| `/search?q=` | Search |
| `/about`, `/advertise`, `/contact`, `/privacy`, `/terms` | Info pages |
| `/admin` | Admin dashboard preview (visual demo, no auth) |

## Configuration

| Setting | Where |
|---|---|
| YouTube live embed | `NEXT_PUBLIC_YOUTUBE_LIVE_EMBED_URL`, e.g. `https://www.youtube.com/embed/live_stream?channel=<CHANNEL_ID>`. Default is YouTube's own embed demo video. |
| Absolute site URL (canonical links, Open Graph, sitemap) | `NEXT_PUBLIC_SITE_URL` |
| Search-engine indexing | `NEXT_PUBLIC_ALLOW_INDEXING=true`. Off by default, so `robots.txt` blocks crawlers while the site holds fictional demo stories. |
| Social links, contact details, weather text | `data/site.ts` (values marked `TODO` are placeholders) |

## How it is organised

```
app/(public)/     public pages (shared header, ticker, footer, mobile sticky ad)
app/admin/        dashboard preview with its own layout
components/       layout, news, ads, videos, admin, common
data/             all demo content: news, categories, videos, advertisements, admin, pages, site
lib/news.ts       read helpers over data/ (swap these for API calls)
types/index.ts    shared types (Article, Ad, Video, Section, Text)
```

**Bilingual text.** Every text field is `{ ml, en? }` (`Text` type), which maps to `*_ml` / `*_en` columns. Both languages are rendered and CSS shows one, based on `<html data-lang>`. An inline script applies the saved choice before first paint, so pages stay fully static and the choice survives navigation. When `en` is missing, Malayalam shows in both modes. Article pages say so in English mode rather than machine-translate.

**Ads.** `data/advertisements.ts` holds one creative per placement (`HEADER_LEADERBOARD`, `HOME_SIDEBAR`, `HOME_INFEED_1/2`, `ARTICLE_TOP/MIDDLE/BOTTOM`, `MOBILE_STICKY`, `SIDEBAR`). `components/ads/Ad.tsx` renders it in the placement's IAB format and sizes it by slot width (container queries). A creative without `headline` renders as a plain image banner, so uploaded banner images also work. To connect an ad server, replace the `ADS` array with the API response; the shape stays the same.

**Rendering.** All article, section and info pages are prerendered (`generateStaticParams`). Only search results and section pagination (`?page=`) render per request, behind `<Suspense>`. Unknown URLs return a real 404: article and info pages via `ensureStatic = "navigation"`, section pages via `proxy.ts` (their streamed list would otherwise start a 200 response first).

**Times.** Demo stories store `minutesAgo` so they always look current. The CMS will return `publishedAt` timestamps; update `timeAgo()` in `lib/utils.ts` and `LocalTime` to take a date.

## Needs backend integration

- CMS / database for articles, categories, authors, media, with an editorial workflow (draft → review → publish)
- Admin authentication, roles and every admin action (create/edit, approvals, media library, settings)
- Ad server: campaigns, scheduling, rotation, impression and click tracking, reporting
- Analytics (the dashboard figures are static samples)
- YouTube Data API for the video list, and the real channel / live-stream URL
- Weather API (utility bar shows a fixed placeholder)
- Search backend (currently substring match over demo data)
- RSS, structured data (NewsArticle) and a sitemap fed by the CMS; contact form or newsletter if wanted
- Real contact details, social URLs, privacy policy and terms

## Demo media

Stock photos are placeholders to be replaced with newsroom photography. They come from Unsplash (Unsplash License) and from CC0 / public-domain photos found via Openverse (WordPress Photo Directory, Flickr), per their license metadata. Fictional stories use them captioned "പ്രതീകാത്മക ചിത്രം / Representative image". Ad brands (Ponnolam, KadaFresh, Voltra, etc.) are invented.
