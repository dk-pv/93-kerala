"use client";

import { useState } from "react";
import Icon, { type IconName } from "./Icon";
import T from "./T";

const TARGETS: { name: IconName; label: string; url: string; color: string }[] = [
  { name: "whatsapp", label: "WhatsApp", url: "https://wa.me/?text=", color: "bg-[#25d366]" },
  { name: "facebook", label: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=", color: "bg-[#1877f2]" },
  { name: "x", label: "X", url: "https://twitter.com/intent/tweet?url=", color: "bg-ink" },
];

/** Share links use the live page URL, so they work on any domain the site is deployed to. */
export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const open = (base: string, name: IconName) => {
    const url = location.href;
    const payload = name === "whatsapp" ? `${title} ${url}` : url;
    window.open(base + encodeURIComponent(payload), "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-muted">
        <T ml="പങ്കുവയ്ക്കൂ" en="Share" />
      </span>
      {TARGETS.map((t) => (
        <button
          key={t.name}
          type="button"
          onClick={() => open(t.url, t.name)}
          aria-label={`Share on ${t.label}`}
          className={`grid size-9 place-items-center rounded-full text-white transition-opacity hover:opacity-85 ${t.color}`}
        >
          <Icon name={t.name} className="size-4" />
        </button>
      ))}
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(location.href);
            setCopied(true);
          } catch {
            // Clipboard API is missing on non-HTTPS origins (e.g. a LAN demo): let the reader copy by hand.
            window.prompt("Copy link", location.href);
          }
        }}
        aria-label="Copy link"
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-white px-3 text-xs font-semibold hover:border-ink"
      >
        <Icon name={copied ? "check" : "link"} className="size-3.5" />
        {copied ? <T ml="പകർത്തി" en="Copied" /> : <T ml="ലിങ്ക്" en="Copy link" />}
      </button>
    </div>
  );
}
