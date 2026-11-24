import type { Section } from "@/types";

export const SECTIONS: Section[] = [
  {
    slug: "manjeri",
    kind: "district",
    parent: "malappuram",
    name: { ml: "മഞ്ചേരി", en: "Manjeri" },
    description: {
      ml: "മഞ്ചേരി നഗരസഭയിൽ നിന്നും സമീപ പ്രദേശങ്ങളിൽ നിന്നുമുള്ള ഏറ്റവും പുതിയ വാർത്തകൾ.",
      en: "The latest from Manjeri municipality and its neighbourhoods.",
    },
  },
  {
    slug: "malappuram",
    kind: "district",
    name: { ml: "മലപ്പുറം", en: "Malappuram" },
    description: {
      ml: "മലപ്പുറം ജില്ലയിലെ പ്രാദേശിക വാർത്തകൾ, വികസനം, കായികം, സംസ്കാരം.",
      en: "Local news, development, sport and culture from across Malappuram district.",
    },
  },
  {
    slug: "kerala",
    kind: "category",
    name: { ml: "കേരളം", en: "Kerala" },
    description: { ml: "സംസ്ഥാനത്തെ പ്രധാന വാർത്തകൾ.", en: "Top stories from across the state." },
  },
  {
    slug: "india",
    kind: "category",
    name: { ml: "ഇന്ത്യ", en: "India" },
    description: { ml: "ദേശീയ വാർത്തകൾ.", en: "National news." },
  },
  {
    slug: "world",
    kind: "category",
    name: { ml: "ലോകം", en: "World" },
    description: { ml: "ഗൾഫ് ഉൾപ്പെടെ ലോകത്തെ പ്രധാന വാർത്തകൾ.", en: "World news, with a focus on the Gulf." },
  },
  {
    slug: "politics",
    kind: "category",
    name: { ml: "രാഷ്ട്രീയം", en: "Politics" },
    description: { ml: "രാഷ്ട്രീയ വാർത്തകളും വിശകലനങ്ങളും.", en: "Political news and analysis." },
  },
  {
    slug: "crime",
    kind: "category",
    name: { ml: "ക്രൈം", en: "Crime" },
    description: { ml: "കുറ്റകൃത്യങ്ങൾ, കോടതി, പൊലീസ് വാർത്തകൾ.", en: "Crime, courts and police." },
  },
  {
    slug: "sports",
    kind: "category",
    name: { ml: "കായികം", en: "Sports" },
    description: { ml: "ഫുട്ബോൾ, ക്രിക്കറ്റ്, കായിക വാർത്തകൾ.", en: "Football, cricket and more." },
  },
  {
    slug: "entertainment",
    kind: "category",
    name: { ml: "വിനോദം", en: "Entertainment" },
    description: { ml: "സിനിമ, സംഗീതം, ഒടിടി.", en: "Cinema, music and streaming." },
  },
  {
    slug: "business",
    kind: "category",
    name: { ml: "ബിസിനസ്", en: "Business" },
    description: { ml: "വിപണി, വ്യാപാരം, സമ്പദ്‌വ്യവസ്ഥ.", en: "Markets, trade and the economy." },
  },
  {
    slug: "education",
    kind: "category",
    name: { ml: "വിദ്യാഭ്യാസം", en: "Education" },
    description: { ml: "സ്കൂൾ, സർവകലാശാല, പരീക്ഷാ വാർത്തകൾ.", en: "Schools, universities and exams." },
  },
  {
    slug: "health",
    kind: "category",
    name: { ml: "ആരോഗ്യം", en: "Health" },
    description: { ml: "ആരോഗ്യ വാർത്തകളും മുന്നറിയിപ്പുകളും.", en: "Health news and advisories." },
  },
];
