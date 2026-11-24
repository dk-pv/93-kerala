"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/types";

const subscribe = (cb: () => void) => {
  window.addEventListener("langchange", cb);
  return () => window.removeEventListener("langchange", cb);
};
const current = (): Lang => (document.documentElement.dataset.lang === "en" ? "en" : "ml");

function setLang(lang: Lang) {
  const html = document.documentElement;
  html.dataset.lang = lang;
  html.lang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  window.dispatchEvent(new Event("langchange"));
}

export function useLang() {
  return useSyncExternalStore(subscribe, current, () => "ml" as Lang);
}

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const lang = useLang();
  const btn = (value: Lang, label: string, title: string) => (
    <button
      type="button"
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      title={title}
      className={`px-2.5 py-1 text-xs font-bold transition-colors ${
        lang === value ? "bg-brand text-white" : "text-current opacity-75 hover:opacity-100"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label="Language / ഭാഷ" className={`inline-flex overflow-hidden rounded border border-current/30 ${className}`}>
      {btn("ml", "മല", "മലയാളം")}
      {btn("en", "EN", "English")}
    </div>
  );
}
