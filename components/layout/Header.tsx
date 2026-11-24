import Link from "next/link";
import Ad from "@/components/ads/Ad";
import Icon from "@/components/common/Icon";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import LocalTime from "@/components/common/LocalTime";
import Logo from "@/components/common/Logo";
import SocialLinks from "@/components/common/SocialLinks";
import T from "@/components/common/T";
import { INFO_LINKS, NAV, SITE } from "@/data/site";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

/**
 * Utility bar + logo/leaderboard header, followed by the sticky navigation.
 * Returned as siblings so the <nav> can stick for the whole page height.
 */
export default function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="hidden whitespace-nowrap border-b border-line bg-page text-xs text-ink/70 md:block">
          <div className="wrap flex h-9 items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <span className="flex min-w-44 items-center gap-1.5">
                <Icon name="calendar" className="size-3.5" />
                <LocalTime />
              </span>
              <span className="hidden items-center gap-1.5 lg:flex" title="Demo weather placeholder">
                <Icon name="cloud" className="size-3.5" />
                <T {...SITE.weather} />
              </span>
              <span className="hidden items-center gap-1.5 lg:flex">
                <Icon name="pin" className="size-3.5" />
                <T ml="മഞ്ചേരി, മലപ്പുറം" en="Manjeri, Malappuram" />
              </span>
            </div>
            <div className="flex items-center gap-4">
              {INFO_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-brand">
                  <T {...l.label} />
                </Link>
              ))}
              <span aria-hidden className="h-4 w-px bg-line" />
              <SocialLinks iconClass="size-3.5" />
            </div>
          </div>
        </div>

        <div className="wrap flex items-center justify-between gap-6 py-3 lg:py-4">
          <Logo className="h-12 w-auto sm:h-14 lg:h-[78px]" preload />
          <Ad placement="HEADER_LEADERBOARD" className="hidden min-w-0 max-w-[728px] flex-1 lg:block" />
          <div className="hidden shrink-0 flex-col items-end gap-2.5 xl:flex">
            <Link href="/live" className="inline-flex items-center gap-2 bg-brand px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
              <span className="size-2 animate-pulse rounded-full bg-white" />
              <T ml="തത്സമയം കാണൂ" en="Watch Live" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-muted">
              <T ml="ഫോളോ ചെയ്യൂ" en="Follow us" />
              <SocialLinks className="text-ink" />
            </div>
          </div>
          <Link href="/live" className="inline-flex items-center gap-1.5 bg-brand px-3 py-1.5 text-xs font-bold text-white lg:hidden">
            <span className="size-1.5 animate-pulse rounded-full bg-white" />
            LIVE
          </Link>
        </div>
      </header>

      <nav aria-label="Main" className="sticky top-0 z-40 bg-ink text-white shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
        <div className="wrap flex h-12 items-center gap-1">
          <MobileMenu>
            <MobileMenuContent />
          </MobileMenu>
          <NavLinks />
          <Link href="/search" aria-label="Search" className="grid size-10 shrink-0 place-items-center text-white/80 hover:text-white">
            <Icon name="search" className="size-5" />
          </Link>
          <LanguageSwitcher className="shrink-0" />
        </div>
      </nav>
    </>
  );
}

function MobileMenuContent() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="border-b border-line px-5 pb-4 pt-5">
        <Logo className="h-11 w-auto" />
      </div>
      <ul className="flex-1 divide-y divide-line px-5">
        {NAV.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="flex items-center justify-between py-3 font-display text-lg font-semibold hover:text-brand">
              <T {...item.label} />
              <Icon name="chevronRight" className="size-4 text-muted" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="space-y-4 bg-page px-5 py-5 text-sm">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {INFO_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="font-medium hover:text-brand">
              <T {...l.label} />
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <SocialLinks iconClass="size-5" />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
