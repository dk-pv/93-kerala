import Link from "next/link";
import type { Text } from "@/types";
import Icon from "./Icon";
import T from "./T";

export default function Breadcrumb({ items }: { items: { label: Text; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand">
            <Icon name="home" className="size-3.5" />
            <T ml="ഹോം" en="Home" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex min-w-0 items-center gap-1.5">
            <Icon name="chevronRight" className="size-3.5 shrink-0" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand">
                <T {...item.label} />
              </Link>
            ) : (
              <span aria-current="page" className="line-clamp-1 text-ink">
                <T {...item.label} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
