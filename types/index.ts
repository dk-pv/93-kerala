/**
 * Bilingual text. Malayalam is the newsroom's primary language; `en` is filled
 * only when an English version exists (it is never machine-translated).
 * Maps 1:1 to `*_ml` / `*_en` columns in the future CMS database.
 */
export type Text = { ml: string; en?: string };

export type Lang = "ml" | "en";

export type Section = {
  slug: string;
  kind: "category" | "district";
  name: Text;
  description: Text;
  /** District that contains this one (Manjeri → Malappuram). */
  parent?: string;
};

export type Author = { name: Text; role: Text };

export type Article = {
  slug: string;
  /** Topic section slug (kerala, crime, sports …). */
  category: string;
  /** Location section slug, for local news. */
  district?: string;
  title: Text;
  summary: Text;
  body: { ml: string[]; en?: string[] };
  /** Path under /public. */
  image: string;
  /** Defaults to "Representative image" for stock photos. */
  caption?: Text;
  gallery?: string[];
  author: string;
  /**
   * Demo stand-in for `publishedAt`: minutes before "now", so sample stories
   * always look current. The CMS API will return real ISO timestamps instead.
   */
  minutesAgo: number;
  updatedMinutesAgo?: number;
  views: number;
  featured?: boolean;
};

export type VideoCategory = "news" | "local" | "sports" | "entertainment" | "interviews";

export type Video = {
  id: string;
  title: Text;
  thumbnail: string;
  duration: string;
  category: VideoCategory;
  views: number;
  minutesAgo: number;
  live?: boolean;
};

export type AdPlacement =
  | "HEADER_LEADERBOARD"
  | "HOME_SIDEBAR"
  | "HOME_INFEED_1"
  | "HOME_INFEED_2"
  | "ARTICLE_TOP"
  | "ARTICLE_MIDDLE"
  | "ARTICLE_BOTTOM"
  | "MOBILE_STICKY"
  | "SIDEBAR";

export type Ad = {
  id: string;
  placement: AdPlacement;
  brand: string;
  /** Optional: an ad without a headline renders as a plain image banner. */
  headline?: Text;
  tagline?: Text;
  cta?: Text;
  image: string;
  url: string;
  theme: { bg: string; fg: string; accent: string };
};
