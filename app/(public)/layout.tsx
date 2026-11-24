import type { ReactNode } from "react";
import Ad from "@/components/ads/Ad";
import MobileStickyAd from "@/components/ads/MobileStickyAd";
import BreakingNews from "@/components/layout/BreakingNews";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { BREAKING } from "@/data/news";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only z-50 bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:left-2 focus:top-2">
        Skip to content
      </a>
      <Header />
      <BreakingNews items={BREAKING} />
      <main id="main">{children}</main>
      <Footer />
      <MobileStickyAd>
        <Ad placement="MOBILE_STICKY" label={false} />
      </MobileStickyAd>
    </>
  );
}
