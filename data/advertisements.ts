import type { Ad, AdPlacement } from "@/types";

/*
 * DEMO ADS — fictional brands and creatives. One creative per placement;
 * replace this array with the ad server / CMS response (same shape).
 * `url` points to the Advertise page so demo clicks stay on-site.
 */
const img = (name: string) => `/images/${name}.jpg`;

export const ADS: Ad[] = [
  {
    id: "ponnolam-wedding",
    placement: "HEADER_LEADERBOARD",
    brand: "Ponnolam Gold & Diamonds",
    headline: { ml: "വിവാഹ സീസൺ ഓഫർ: പണിക്കൂലിയിൽ 50% വരെ ഇളവ്", en: "Wedding season: up to 50% off making charges" },
    cta: { ml: "ഷോറൂം സന്ദർശിക്കൂ", en: "Visit showroom" },
    image: img("ad-jewellery"),
    url: "/advertise",
    theme: { bg: "#120e09", fg: "#f6e7c8", accent: "#d6a64b" },
  },
  {
    id: "nilavu-silks",
    placement: "HOME_SIDEBAR",
    brand: "Nilavu Wedding Silks",
    headline: { ml: "കല്യാണപ്പട്ടിന്റെ പുതിയ ശേഖരം", en: "The new bridal silk collection" },
    tagline: { ml: "കാഞ്ചീപുരം · ബനാറസ് · കസവ്", en: "Kanchipuram · Banarasi · Kasavu" },
    cta: { ml: "ഇപ്പോൾ കാണൂ", en: "Explore now" },
    image: img("ad-silk-model"),
    url: "/advertise",
    theme: { bg: "#5b0f1d", fg: "#fff4e0", accent: "#e9b949" },
  },
  {
    id: "kadafresh-weekend",
    placement: "HOME_INFEED_1",
    brand: "KadaFresh Hypermarket",
    headline: { ml: "വാരാന്ത്യ മെഗാ സെയിൽ: പച്ചക്കറികൾക്ക് 40% വരെ കിഴിവ്", en: "Weekend Mega Sale: up to 40% off fresh vegetables" },
    tagline: { ml: "മഞ്ചേരി · മലപ്പുറം · പെരിന്തൽമണ്ണ | ഹോം ഡെലിവറി ലഭ്യം", en: "Manjeri · Malappuram · Perinthalmanna | Home delivery available" },
    cta: { ml: "ഓഫറുകൾ കാണൂ", en: "See offers" },
    image: img("ad-supermarket"),
    url: "/advertise",
    theme: { bg: "#0b5d3b", fg: "#ffffff", accent: "#ffcc29" },
  },
  {
    id: "voltra-ev",
    placement: "HOME_INFEED_2",
    brand: "Voltra Electric",
    headline: { ml: "പെട്രോൾ വേണ്ട, ഇനി വോൾട്ര", en: "Leave petrol behind. Go Voltra." },
    tagline: { ml: "ഒറ്റ ചാർജിൽ 450 കി.മീ. | മലപ്പുറം ഷോറൂമിൽ ടെസ്റ്റ് ഡ്രൈവ്", en: "450 km on a single charge | Test drives at our Malappuram showroom" },
    cta: { ml: "ടെസ്റ്റ് ഡ്രൈവ് ബുക്ക് ചെയ്യൂ", en: "Book a test drive" },
    image: img("ad-ev-charging"),
    url: "/advertise",
    theme: { bg: "#0a1f44", fg: "#ffffff", accent: "#3ee6c1" },
  },
  {
    id: "arivu-academy",
    placement: "ARTICLE_TOP",
    brand: "Arivu Academy",
    headline: { ml: "NEET · JEE · KEAM 2027 ക്രാഷ് ബാച്ചുകൾ ആരംഭിക്കുന്നു", en: "NEET · JEE · KEAM 2027 crash batches begin" },
    cta: { ml: "സീറ്റ് ഉറപ്പാക്കൂ", en: "Reserve a seat" },
    image: img("ad-books"),
    url: "/advertise",
    theme: { bg: "#1d3a8a", fg: "#ffffff", accent: "#ff7a35" },
  },
  {
    id: "medora-hospital",
    placement: "ARTICLE_MIDDLE",
    brand: "Medora Multispeciality Hospital",
    headline: { ml: "24×7 എമർജൻസി & ട്രോമ കെയർ", en: "24×7 Emergency & Trauma Care" },
    tagline: { ml: "മഞ്ചേരി | അപ്പോയിന്റ്മെന്റിന് വിളിക്കൂ", en: "Manjeri | Call for appointments" },
    cta: { ml: "ഡോക്ടറെ കാണൂ", en: "Book appointment" },
    image: img("surgeons"),
    url: "/advertise",
    theme: { bg: "#ffffff", fg: "#0c4a6e", accent: "#0284c7" },
  },
  {
    id: "greenvale-villas",
    placement: "ARTICLE_BOTTOM",
    brand: "Greenvale Homes",
    headline: { ml: "മഞ്ചേരിയിൽ പ്രീമിയം വില്ലകൾ – ₹68 ലക്ഷം മുതൽ", en: "Premium villas in Manjeri – from ₹68 lakh" },
    tagline: { ml: "ഗേറ്റഡ് കമ്മ്യൂണിറ്റി | ബാങ്ക് ലോൺ സൗകര്യം", en: "Gated community | Bank loans available" },
    cta: { ml: "സൈറ്റ് വിസിറ്റ്", en: "Book a site visit" },
    image: img("ad-villa"),
    url: "/advertise",
    theme: { bg: "#1f2a1f", fg: "#ffffff", accent: "#9bd36a" },
  },
  {
    id: "phonehub-exchange",
    placement: "MOBILE_STICKY",
    brand: "PhoneHub Mobiles",
    headline: { ml: "എക്സ്ചേഞ്ച് ഓഫർ: ₹15,000 വരെ", en: "Exchange offer: up to ₹15,000" },
    cta: { ml: "വാങ്ങൂ", en: "Shop" },
    image: img("ad-phone"),
    url: "/advertise",
    theme: { bg: "#111827", fg: "#ffffff", accent: "#e31b36" },
  },
  {
    id: "kayal-retreats",
    placement: "SIDEBAR",
    brand: "Kayal Retreats",
    headline: { ml: "കായൽ ഹൗസ്ബോട്ട് പാക്കേജുകൾ", en: "Backwater houseboat packages" },
    tagline: { ml: "ഡിസംബർ ബുക്കിങ്ങിന് 20% ഇളവ്", en: "20% off December bookings" },
    cta: { ml: "ബുക്ക് ചെയ്യൂ", en: "Book now" },
    image: img("ad-houseboat"),
    url: "/advertise",
    theme: { bg: "#04364a", fg: "#ffffff", accent: "#ffb703" },
  },
];

/** IAB-style formats; each placement renders in exactly one format. */
export const AD_FORMATS = {
  leaderboard: { size: "728 × 90", mobile: "320 × 100" },
  billboard: { size: "970 × 250", mobile: "300 × 250" },
  skyscraper: { size: "300 × 600", mobile: "—" },
  rectangle: { size: "300 × 250", mobile: "300 × 250" },
  sticky: { size: "320 × 50", mobile: "320 × 50" },
} as const;

export type AdFormat = keyof typeof AD_FORMATS;

export const PLACEMENT_FORMAT: Record<AdPlacement, AdFormat> = {
  HEADER_LEADERBOARD: "leaderboard",
  HOME_SIDEBAR: "skyscraper",
  HOME_INFEED_1: "billboard",
  HOME_INFEED_2: "billboard",
  ARTICLE_TOP: "leaderboard",
  ARTICLE_MIDDLE: "rectangle",
  ARTICLE_BOTTOM: "billboard",
  MOBILE_STICKY: "sticky",
  SIDEBAR: "rectangle",
};

export const getAd = (placement: AdPlacement) => ADS.find((a) => a.placement === placement);
