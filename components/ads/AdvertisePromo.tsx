import Link from "next/link";
import Icon from "@/components/common/Icon";
import T from "@/components/common/T";

/** House ad promoting 93Kerala's own ad inventory. */
export default function AdvertisePromo({ className = "" }: { className?: string }) {
  return (
    <Link href="/advertise" className={`group block overflow-hidden bg-ink p-6 text-white ${className}`}>
      <div className="mb-4 h-1 w-12 bg-linear-to-r from-brand to-accent" />
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
        <T ml="പരസ്യം നൽകാൻ" en="Advertise with us" />
      </p>
      <p className="mt-2 font-display text-xl font-bold leading-snug">
        <T ml="മലപ്പുറത്തെ ലക്ഷക്കണക്കിന് വായനക്കാരിലേക്ക് നിങ്ങളുടെ ബ്രാൻഡ്" en="Put your brand in front of Malappuram's readers" />
      </p>
      <p className="mt-2 text-sm text-white/70">
        <T ml="വെബ്സൈറ്റ്, യൂട്യൂബ്, ഇൻസ്റ്റഗ്രാം — ഒറ്റ പാക്കേജിൽ." en="Website, YouTube and Instagram in one package." />
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-accent">
        <T ml="ബന്ധപ്പെടുക" en="Get in touch" />
        <Icon name="arrowRight" className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
