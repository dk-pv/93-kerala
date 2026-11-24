import Link from "next/link";
import T from "@/components/common/T";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NewsCard from "@/components/news/NewsCard";
import { latest } from "@/lib/news";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="wrap py-14">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-7xl font-bold text-brand">404</p>
          <h1 className="mt-3 font-display text-2xl font-bold">
            <T ml="ഈ പേജ് കണ്ടെത്താനായില്ല" en="This page could not be found" />
          </h1>
          <p className="mt-2 text-muted">
            <T ml="ലിങ്ക് മാറിയിരിക്കാം അല്ലെങ്കിൽ നീക്കം ചെയ്തിരിക്കാം." en="The link may have changed or been removed." />
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/" className="bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              <T ml="ഹോംപേജിലേക്ക്" en="Go to homepage" />
            </Link>
            <Link href="/search" className="border border-ink px-5 py-2.5 text-sm font-bold hover:bg-ink hover:text-white">
              <T ml="തിരയുക" en="Search" />
            </Link>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latest(4).map((a) => (
            <NewsCard key={a.slug} a={a} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
