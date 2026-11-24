import { SITE } from "@/data/site";
import Icon, { type IconName } from "./Icon";

const LINKS: { name: IconName; label: string; href: string }[] = [
  { name: "youtube", label: "YouTube", href: SITE.social.youtube },
  { name: "instagram", label: "Instagram", href: SITE.social.instagram },
  { name: "facebook", label: "Facebook", href: SITE.social.facebook },
];

export default function SocialLinks({ className = "", iconClass = "size-4" }: { className?: string; iconClass?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {LINKS.map((l) => (
        <li key={l.name}>
          <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`93Kerala on ${l.label}`} className="block transition-colors hover:text-brand">
            <Icon name={l.name} className={iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
}
