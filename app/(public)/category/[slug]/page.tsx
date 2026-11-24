import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionPage from "@/components/news/SectionPage";
import { SECTIONS } from "@/data/categories";
import { getSection } from "@/lib/news";

export const instant = false;

export function generateStaticParams() {
  return SECTIONS.filter((s) => s.kind === "category").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/category/[slug]">): Promise<Metadata> {
  const s = getSection((await params).slug);
  return s ? { title: `${s.name.ml} | ${s.name.en}`, description: s.description.en } : {};
}

export default async function CategoryPage({ params, searchParams }: PageProps<"/category/[slug]">) {
  const section = getSection((await params).slug);
  if (section?.kind !== "category") notFound();
  return <SectionPage section={section} searchParams={searchParams} />;
}
