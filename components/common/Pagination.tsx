import Link from "next/link";
import Icon from "./Icon";
import T from "./T";

export default function Pagination({ page, pages, basePath }: { page: number; pages: number; basePath: string }) {
  if (pages <= 1) return null;
  const href = (p: number) => (p === 1 ? basePath : `${basePath}?page=${p}`);
  const cell = "grid h-10 min-w-10 place-items-center border px-3 text-sm font-semibold";
  return (
    <nav aria-label="Pagination" className="mt-8 flex flex-wrap items-center justify-center gap-1.5">
      {page > 1 ? (
        <Link href={href(page - 1)} className={`${cell} border-line bg-white hover:border-ink`}>
          <span className="flex items-center gap-1">
            <Icon name="chevronLeft" /> <T ml="മുൻപത്തെ" en="Prev" />
          </span>
        </Link>
      ) : null}
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) =>
        p === page ? (
          <span key={p} aria-current="page" className={`${cell} border-ink bg-ink text-white`}>
            {p}
          </span>
        ) : (
          <Link key={p} href={href(p)} className={`${cell} border-line bg-white hover:border-ink`}>
            {p}
          </Link>
        ),
      )}
      {page < pages ? (
        <Link href={href(page + 1)} className={`${cell} border-line bg-white hover:border-ink`}>
          <span className="flex items-center gap-1">
            <T ml="അടുത്തത്" en="Next" /> <Icon name="chevronRight" />
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
