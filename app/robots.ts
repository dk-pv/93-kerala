import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * The demo is full of fictional stories, so crawling stays off unless
 * NEXT_PUBLIC_ALLOW_INDEXING=true is set at launch with real content.
 */
export default function robots(): MetadataRoute.Robots {
  const live = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  return {
    rules: live ? { userAgent: "*", allow: "/", disallow: "/admin" } : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
