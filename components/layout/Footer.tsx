import { cacheLife } from "next/cache";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import Logo from "@/components/common/Logo";
import SocialLinks from "@/components/common/SocialLinks";
import T from "@/components/common/T";
import { SECTIONS } from "@/data/categories";
import { INFO_LINKS, SITE } from "@/data/site";
import { sectionHref } from "@/lib/utils";

/** Cached so the prerendered shell can show the current year without reading the clock per request. */
async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const QUICK_LINKS = [
  { href: "/", label: { ml: "ഹോം", en: "Home" } },
  { href: "/videos", label: { ml: "വീഡിയോകൾ", en: "Videos" } },
  { href: "/live", label: { ml: "93കേരള ലൈവ്", en: "93Kerala Live" } },
  { href: "/search", label: { ml: "തിരയുക", en: "Search" } },
  ...INFO_LINKS,
];

export default function Footer() {
  const heading = "mb-4 font-display text-base font-bold text-white";
  return (
    <footer className="mt-14 bg-ink pb-20 text-sm text-white/70 lg:pb-0">
      <div className="h-1 bg-linear-to-r from-brand to-accent" />
      <div className="wrap grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1.3fr]">
        <div>
          <div className="inline-block rounded bg-white px-4 py-3">
            <Logo className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-sm leading-relaxed">
            <T
              ml="മഞ്ചേരി ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന മലയാളം–ഇംഗ്ലീഷ് ഡിജിറ്റൽ വാർത്താ മാധ്യമം. മലപ്പുറത്തിന്റെയും കേരളത്തിന്റെയും വാർത്തകൾ വേഗത്തിലും വിശ്വസനീയമായും."
              en="A Malayalam and English digital news network based in Manjeri – news from Malappuram and Kerala, fast and reliable."
            />
          </p>
          <SocialLinks className="mt-5 text-white" iconClass="size-5" />
        </div>
        <div>
          <h2 className={heading}>
            <T ml="ക്വിക്ക് ലിങ്കുകൾ" en="Quick Links" />
          </h2>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  <T {...l.label} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={heading}>
            <T ml="വാർത്താ വിഭാഗങ്ങൾ" en="News Categories" />
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {SECTIONS.map((s) => (
              <li key={s.slug}>
                <Link href={sectionHref(s)} className="hover:text-white">
                  <T {...s.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={heading}>
            <T ml="ബന്ധപ്പെടുക" en="Contact" />
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-2.5">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-accent" />
              <T {...SITE.contact.address} />
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {SITE.contact.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.contact.email}`} className="hover:text-white">
                {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-5 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © <Year /> 93Kerala. <T ml="എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം." en="All rights reserved." />
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              <T ml="സ്വകാര്യതാ നയം" en="Privacy Policy" />
            </Link>
            <Link href="/terms" className="hover:text-white">
              <T ml="നിബന്ധനകളും വ്യവസ്ഥകളും" en="Terms and Conditions" />
            </Link>
            <Link href="/admin" className="hover:text-white">
              Admin (demo)
            </Link>
          </div>
        </div>
        <p className="wrap pb-5 text-[11px] text-white/40">
          <T
            ml="ഡെമോ പതിപ്പ്: ഈ സൈറ്റിലെ വാർത്തകൾ, വീഡിയോകൾ, പരസ്യങ്ങൾ എന്നിവയെല്ലാം പ്രദർശനാവശ്യത്തിനുള്ള സാങ്കൽപിക ഉള്ളടക്കമാണ്."
            en="Demo build: all stories, videos and advertisements on this site are fictional sample content for demonstration."
          />
        </p>
      </div>
    </footer>
  );
}
