import Icon from "@/components/common/Icon";
import T from "@/components/common/T";
import { SITE } from "@/data/site";

export default function SubscribeButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.social.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#ff0000] px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#cc0000] ${className}`}
    >
      <Icon name="youtube" className="size-5" />
      <T ml="സബ്സ്ക്രൈബ് ചെയ്യൂ" en="Subscribe" />
    </a>
  );
}
