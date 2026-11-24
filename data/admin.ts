/*
 * ADMIN DEMO DATA — illustrative numbers for the dashboard preview.
 * Not connected to any database, analytics or ad server.
 */

export type NewsStatus = "Published" | "Pending review" | "Draft" | "Scheduled";
export type CampaignStatus = "Active" | "Scheduled" | "Paused" | "Ended";

export const STATS = [
  { label: "Total news", value: "1,284", note: "+38 this week", icon: "newspaper" },
  { label: "Today's news", value: "18", note: "+4 vs yesterday", icon: "filePlus" },
  { label: "Pending approvals", value: "6", note: "2 waiting over 1 hr", icon: "hourglass" },
  { label: "Published articles", value: "1,247", note: "97% of total", icon: "checkCircle" },
  { label: "Active advertisements", value: "8", note: "across 9 placements", icon: "megaphone" },
  { label: "Total views", value: "4.82M", note: "+12.4% vs last month", icon: "eye" },
  { label: "Advertisement clicks", value: "38.6K", note: "1.9% click-through", icon: "pointer" },
] as const;

/** Daily page views, last 14 days (sample). */
export const DAILY_VIEWS = [
  { day: "10 Nov", views: 118400 },
  { day: "11 Nov", views: 124900 },
  { day: "12 Nov", views: 131200 },
  { day: "13 Nov", views: 127800 },
  { day: "14 Nov", views: 142600 },
  { day: "15 Nov", views: 109300 },
  { day: "16 Nov", views: 101700 },
  { day: "17 Nov", views: 136500 },
  { day: "18 Nov", views: 149800 },
  { day: "19 Nov", views: 158200 },
  { day: "20 Nov", views: 151400 },
  { day: "21 Nov", views: 167900 },
  { day: "22 Nov", views: 184300 },
  { day: "23 Nov", views: 176500 },
];

/** Newsroom items that are not live on the site yet (titles are fictional). */
export const UNPUBLISHED: { id: string; title: string; category: string; author: string; status: NewsStatus; updated: string }[] = [
  { id: "d1", title: "മഞ്ചേരി നഗരസഭാ ബജറ്റ്: പ്രധാന പ്രഖ്യാപനങ്ങൾ", category: "politics", author: "Fathima Sherin", status: "Draft", updated: "10 min ago" },
  { id: "d2", title: "ജില്ലാ ഫുട്ബോൾ ലീഗ്: മത്സരക്രമം പ്രഖ്യാപിച്ചു", category: "sports", author: "Jishnu Raj", status: "Pending review", updated: "25 min ago" },
  { id: "d3", title: "നിലമ്പൂർ തേക്ക് മ്യൂസിയത്തിൽ പുതിയ ഗാലറി", category: "kerala", author: "Rasheed Palakkal", status: "Pending review", updated: "1 hr ago" },
  { id: "d4", title: "വിദ്യാർഥികൾക്ക് സൗജന്യ ബസ് യാത്ര: ഉത്തരവിറങ്ങി", category: "education", author: "Staff Reporter", status: "Scheduled", updated: "Publishes 6:00 pm" },
  { id: "d5", title: "തിരൂർ മത്സ്യമാർക്കറ്റ് നവീകരണം അന്തിമഘട്ടത്തിൽ", category: "business", author: "Rasheed Palakkal", status: "Draft", updated: "2 hrs ago" },
  { id: "d6", title: "കോട്ടയ്ക്കലിൽ ആയുർവേദ സെമിനാർ സമാപിച്ചു", category: "health", author: "Staff Reporter", status: "Pending review", updated: "3 hrs ago" },
];

/** Campaign figures keyed by ad id (see data/advertisements.ts). */
export const CAMPAIGNS: Record<string, { start: string; end: string; impressions: number; clicks: number; status: CampaignStatus }> = {
  "ponnolam-wedding": { start: "01 Nov", end: "31 Dec", impressions: 412300, clicks: 6120, status: "Active" },
  "nilavu-silks": { start: "05 Nov", end: "05 Dec", impressions: 228900, clicks: 5240, status: "Active" },
  "kadafresh-weekend": { start: "20 Nov", end: "30 Nov", impressions: 186400, clicks: 4870, status: "Active" },
  "voltra-ev": { start: "15 Nov", end: "15 Jan", impressions: 151200, clicks: 2210, status: "Active" },
  "arivu-academy": { start: "01 Nov", end: "30 Nov", impressions: 264800, clicks: 3980, status: "Active" },
  "medora-hospital": { start: "10 Oct", end: "10 Dec", impressions: 301500, clicks: 5630, status: "Active" },
  "greenvale-villas": { start: "01 Dec", end: "31 Jan", impressions: 0, clicks: 0, status: "Scheduled" },
  "phonehub-exchange": { start: "18 Nov", end: "08 Dec", impressions: 342700, clicks: 7410, status: "Paused" },
  "kayal-retreats": { start: "12 Nov", end: "20 Dec", impressions: 175600, clicks: 3140, status: "Active" },
};
