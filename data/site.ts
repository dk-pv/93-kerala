import type { Text } from "@/types";

/**
 * Site-wide settings. Values marked TODO are demo placeholders to be replaced
 * with the client's real details before launch.
 */
export const SITE = {
  name: "93Kerala",
  tagline: { ml: "മലപ്പുറത്തിന്റെ വാർത്താ ശൃംഖല", en: "Malappuram's News Network" } as Text,
  social: {
    // TODO: replace with the channel / page URLs.
    youtube: "https://www.youtube.com/results?search_query=93kerala",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  /**
   * YouTube embed used by the live player. Demo default: YouTube's own embed
   * demo video. For the real channel use
   * https://www.youtube.com/embed/live_stream?channel=<CHANNEL_ID>
   */
  liveEmbedUrl:
    process.env.NEXT_PUBLIC_YOUTUBE_LIVE_EMBED_URL ?? "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
  contact: {
    // TODO: demo placeholders.
    address: {
      ml: "93കേരള ന്യൂസ് ഡെസ്ക്, മഞ്ചേരി, മലപ്പുറം, കേരളം – 676121",
      en: "93Kerala News Desk, Manjeri, Malappuram, Kerala – 676121",
    } as Text,
    phone: "+91 98765 43210",
    email: "news@93kerala.com",
    ads: "ads@93kerala.com",
  },
  /** Placeholder until a weather API is connected. */
  weather: { ml: "മഞ്ചേരി 27°C · മഴ", en: "Manjeri 27°C · Rain" } as Text,
};

export type NavItem = { href: string; label: Text };

export const NAV: NavItem[] = [
  { href: "/", label: { ml: "ഹോം", en: "Home" } },
  { href: "/district/manjeri", label: { ml: "മഞ്ചേരി", en: "Manjeri" } },
  { href: "/district/malappuram", label: { ml: "മലപ്പുറം", en: "Malappuram" } },
  { href: "/category/kerala", label: { ml: "കേരളം", en: "Kerala" } },
  { href: "/category/india", label: { ml: "ഇന്ത്യ", en: "India" } },
  { href: "/category/world", label: { ml: "ലോകം", en: "World" } },
  { href: "/category/politics", label: { ml: "രാഷ്ട്രീയം", en: "Politics" } },
  { href: "/category/crime", label: { ml: "ക്രൈം", en: "Crime" } },
  { href: "/category/sports", label: { ml: "കായികം", en: "Sports" } },
  { href: "/category/entertainment", label: { ml: "വിനോദം", en: "Entertainment" } },
  { href: "/videos", label: { ml: "വീഡിയോ", en: "Videos" } },
  { href: "/live", label: { ml: "ലൈവ്", en: "Live" } },
];

export const INFO_LINKS: NavItem[] = [
  { href: "/about", label: { ml: "ഞങ്ങളെക്കുറിച്ച്", en: "About Us" } },
  { href: "/advertise", label: { ml: "പരസ്യം നൽകാൻ", en: "Advertise With Us" } },
  { href: "/contact", label: { ml: "ബന്ധപ്പെടുക", en: "Contact" } },
];
