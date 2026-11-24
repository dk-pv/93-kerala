"use client";

import { useSyncExternalStore } from "react";
import T from "./T";

const noSubscribe = () => () => {};

/**
 * Absolute date in the reader's clock, `minutesAgo` before now. Rendered only in the
 * browser (server snapshot is empty), so prerendered pages never freeze the build date.
 */
export default function LocalTime({ minutesAgo = 0, withTime = false }: { minutesAgo?: number; withTime?: boolean }) {
  const value = useSyncExternalStore(
    noSubscribe,
    () => {
      const d = new Date(Date.now() - minutesAgo * 60_000);
      const opts: Intl.DateTimeFormatOptions = withTime
        ? { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" }
        : { weekday: "long", day: "numeric", month: "long", year: "numeric" };
      return `${d.toLocaleString("ml-IN", opts)}|${d.toLocaleString("en-IN", opts)}`;
    },
    () => "",
  );
  if (!value) return null;
  const [ml, en] = value.split("|");
  return <T ml={ml} en={en} />;
}
