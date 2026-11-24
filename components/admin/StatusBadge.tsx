import Icon, { type IconName } from "@/components/common/Icon";

// Status always pairs color with an icon and a label, so it never relies on color alone.
const STYLES: Record<string, { cls: string; icon: IconName }> = {
  Published: { cls: "bg-[#0ca30c]/10 text-[#006300]", icon: "checkCircle" },
  Active: { cls: "bg-[#0ca30c]/10 text-[#006300]", icon: "checkCircle" },
  "Pending review": { cls: "bg-[#fab219]/20 text-[#7a4f00]", icon: "hourglass" },
  Paused: { cls: "bg-[#fab219]/20 text-[#7a4f00]", icon: "clock" },
  Scheduled: { cls: "bg-[#2a78d6]/10 text-[#1d5aa6]", icon: "calendar" },
  Draft: { cls: "bg-ink/5 text-ink/70", icon: "file" },
  Ended: { cls: "bg-ink/5 text-ink/60", icon: "check" },
};

export default function StatusBadge({ status }: { status: string }) {
  const s = STYLES[status] ?? STYLES.Draft;
  return (
    <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ${s.cls}`}>
      <Icon name={s.icon} className="size-3.5" />
      {status}
    </span>
  );
}
