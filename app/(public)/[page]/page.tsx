import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import Icon from "@/components/common/Icon";
import SocialLinks from "@/components/common/SocialLinks";
import T from "@/components/common/T";
import { AD_FORMATS, PLACEMENT_FORMAT } from "@/data/advertisements";
import { PAGES } from "@/data/pages";
import { SITE } from "@/data/site";

// Fully static; unknown slugs render completely before responding, so notFound() sends a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return Object.keys(PAGES).map((page) => ({ page }));
}

export async function generateMetadata({ params }: PageProps<"/[page]">): Promise<Metadata> {
  const slug = (await params).page;
  const p = PAGES[slug];
  return p ? { title: `${p.title.ml} | ${p.title.en}`, description: p.intro.en, alternates: { canonical: `/${slug}` } } : {};
}

const PLACEMENT_INFO: Record<string, { ml: string; en: string }> = {
  HEADER_LEADERBOARD: { ml: "എല്ലാ പേജുകളുടെയും മുകളിൽ, ലോഗോയ്ക്കരികിൽ", en: "Top of every page, beside the logo" },
  HOME_SIDEBAR: { ml: "ഹോംപേജ് പ്രധാന വാർത്തകൾക്കരികിൽ", en: "Homepage, next to top stories" },
  HOME_INFEED_1: { ml: "ഹോംപേജ് – പ്രധാന വാർത്തകൾക്ക് താഴെ", en: "Homepage, below top stories" },
  HOME_INFEED_2: { ml: "ഹോംപേജ് – വീഡിയോ വിഭാഗത്തിന് താഴെ", en: "Homepage, below the video section" },
  ARTICLE_TOP: { ml: "വാർത്താ പേജിന്റെ മുകളിൽ", en: "Above article content" },
  ARTICLE_MIDDLE: { ml: "വാർത്തയുടെ ഉള്ളിൽ", en: "Inside article content" },
  ARTICLE_BOTTOM: { ml: "വാർത്തയുടെ അവസാനം", en: "Below article content" },
  SIDEBAR: { ml: "വാർത്താ, വിഭാഗ പേജുകളുടെ സൈഡ്ബാർ", en: "Article and section sidebars" },
  MOBILE_STICKY: { ml: "മൊബൈലിൽ സ്ക്രീനിന്റെ താഴെ", en: "Pinned to the bottom on mobile" },
};

export default async function InfoPage({ params }: PageProps<"/[page]">) {
  const slug = (await params).page;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 lg:px-6">
      <Breadcrumb items={[{ label: page.title }]} />
      <article className="border border-line bg-white px-5 py-8 md:px-10">
        <h1 className="font-display text-3xl font-bold md:text-4xl">
          <T {...page.title} />
        </h1>
        <p className="mt-4 border-l-4 border-brand pl-4 text-lg leading-relaxed text-ink/80">
          <T {...page.intro} />
        </p>
        {page.sections.map((s, i) => (
          <section key={i} className="mt-8">
            <h2 className="font-display text-xl font-bold">
              <T {...s.heading} />
            </h2>
            <p className="mt-2 leading-[1.85] text-ink/85">
              <T {...s.body} />
            </p>
          </section>
        ))}

        {slug === "advertise" && (
          <section className="mt-10">
            <h2 className="mb-3 font-display text-xl font-bold">
              <T ml="പരസ്യ ഇടങ്ങൾ" en="Ad placements" />
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-ink text-white">
                  <tr>
                    <th className="px-3 py-2.5 font-semibold">Placement</th>
                    <th className="px-3 py-2.5 font-semibold">
                      <T ml="സ്ഥാനം" en="Position" />
                    </th>
                    <th className="px-3 py-2.5 font-semibold">Desktop</th>
                    <th className="px-3 py-2.5 font-semibold">Mobile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {Object.entries(PLACEMENT_FORMAT).map(([placement, format]) => (
                    <tr key={placement} className="odd:bg-page">
                      <td className="px-3 py-2.5 font-mono text-xs font-semibold">{placement}</td>
                      <td className="px-3 py-2.5">
                        <T {...PLACEMENT_INFO[placement]} />
                      </td>
                      <td className="px-3 py-2.5 tabular-nums">{AD_FORMATS[format].size}</td>
                      <td className="px-3 py-2.5 tabular-nums">{AD_FORMATS[format].mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {(slug === "advertise" || slug === "contact") && (
          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { icon: "mail" as const, label: { ml: "വാർത്താ ഡെസ്ക്", en: "News desk" }, value: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
              { icon: "megaphone" as const, label: { ml: "പരസ്യ വിഭാഗം", en: "Advertising" }, value: SITE.contact.ads, href: `mailto:${SITE.contact.ads}` },
              { icon: "phone" as const, label: { ml: "ഫോൺ / വാട്സാപ്പ്", en: "Phone / WhatsApp" }, value: SITE.contact.phone, href: `tel:${SITE.contact.phone.replace(/\s/g, "")}` },
              { icon: "pin" as const, label: { ml: "വിലാസം", en: "Address" }, value: <T {...SITE.contact.address} /> },
            ].map((c, i) => (
              <div key={i} className="flex gap-3 border border-line p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <div className="min-w-0 text-sm">
                  <p className="font-semibold">
                    <T {...c.label} />
                  </p>
                  {c.href ? (
                    <a href={c.href} className="break-words text-muted hover:text-brand">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-muted">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 sm:col-span-2">
              <span className="text-sm font-semibold">
                <T ml="സോഷ്യൽ മീഡിയയിൽ ഫോളോ ചെയ്യൂ:" en="Follow us:" />
              </span>
              <SocialLinks iconClass="size-5" />
            </div>
            <p className="text-xs text-muted sm:col-span-2">
              <T ml="(ഡെമോ കോൺടാക്റ്റ് വിവരങ്ങൾ – ലോഞ്ചിന് മുമ്പ് മാറ്റും.)" en="(Demo contact details – to be replaced before launch.)" />
            </p>
          </section>
        )}
      </article>
    </div>
  );
}
