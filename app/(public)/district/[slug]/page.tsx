import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionPage from "@/components/news/SectionPage";
import { SECTIONS } from "@/data/categories";
import { getSection } from "@/lib/news";

export const instant = false;

export function generateStaticParams() {
  return SECTIONS.filter((s) => s.kind === "district").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/district/[slug]">): Promise<Metadata> {
  const s = getSection((await params).slug);
  return s ? { title: `${s.name.ml} വാർത്തകൾ | ${s.name.en} News`, description: s.description.en } : {};
}

export default async function DistrictPage({ params, searchParams }: PageProps<"/district/[slug]">) {
  const section = getSection((await params).slug);
  if (section?.kind !== "district") notFound();
  return <SectionPage section={section} searchParams={searchParams} />;
}
