import type { MetadataRoute } from "next";
import { SECTIONS } from "@/data/categories";
import { ARTICLES } from "@/data/news";
import { PAGES } from "@/data/pages";
import { sectionHref } from "@/lib/utils";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/videos",
    "/live",
    ...SECTIONS.map(sectionHref),
    ...ARTICLES.map((a) => `/news/${a.slug}`),
    ...Object.keys(PAGES).map((p) => `/${p}`),
  ];
  return paths.map((p) => ({ url: `${SITE}${p}` }));
}
