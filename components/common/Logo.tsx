import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Kerala 93 News Network Logo.png";

/** The client's original logo (transparent PNG, 3:1). Needs a light background. */
export default function Logo({ className = "h-14 w-auto", preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Link href="/" aria-label="93Kerala – Home" className="inline-block shrink-0">
      <Image src={logo} alt="93Kerala – Malappuram's News Network" className={className} preload={preload} sizes="300px" />
    </Link>
  );
}
