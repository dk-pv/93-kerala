import { SECTIONS } from "@/data/categories";
import { ARTICLES } from "@/data/news";
import type { Article } from "@/types";

/*
 * Read-side helpers over the demo data. When the CMS API arrives, these become
 * async fetches (wrapped in "use cache") with the same return shapes.
 */

const byRecency = (a: Article, b: Article) => a.minutesAgo - b.minutesAgo;

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
export const getSection = (slug: string) => SECTIONS.find((s) => s.slug === slug);

export const latest = (n = ARTICLES.length) => [...ARTICLES].sort(byRecency).slice(0, n);
export const trending = (n: number) => [...ARTICLES].sort((a, b) => b.views - a.views).slice(0, n);
export const featured = () => ARTICLES.filter((a) => a.featured);

/** Stories in a topic section, or in a district (a parent district includes its children). */
export function inSection(slug: string) {
  const section = getSection(slug);
  if (!section) return [];
  if (section.kind === "category") return ARTICLES.filter((a) => a.category === slug).sort(byRecency);
  return ARTICLES.filter((a) => a.district === slug || getSection(a.district ?? "")?.parent === slug).sort(byRecency);
}

export function related(article: Article, n: number) {
  return ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category)
    .concat(ARTICLES.filter((a) => a.slug !== article.slug && a.category !== article.category && a.district === article.district))
    .slice(0, n);
}

export function search(query: string) {
  const q = query.trim().normalize("NFC").toLowerCase();
  if (!q) return { articles: [], sections: [] };
  const has = (s?: string) => !!s && s.normalize("NFC").toLowerCase().includes(q);
  return {
    sections: SECTIONS.filter((s) => has(s.name.ml) || has(s.name.en) || has(s.slug)),
    articles: ARTICLES.filter((a) => has(a.title.ml) || has(a.title.en) || has(a.summary.ml) || has(a.summary.en)).sort(byRecency),
  };
}
