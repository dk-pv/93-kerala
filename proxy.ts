import { NextResponse, type NextRequest } from "next/server";
import { SECTIONS } from "@/data/categories";

/**
 * Section pages stream their ?page= list, so an unknown slug would otherwise start a
 * 200 response before notFound() runs. Rewrite unknown slugs to the 404 page up front.
 */
export function proxy(request: NextRequest) {
  const [, kind, slug] = request.nextUrl.pathname.split("/");
  const known = SECTIONS.some((s) => s.slug === slug && s.kind === (kind === "district" ? "district" : "category"));
  return known ? NextResponse.next() : NextResponse.rewrite(new URL("/_not-found", request.url));
}

export const config = { matcher: ["/category/:slug", "/district/:slug"] };
