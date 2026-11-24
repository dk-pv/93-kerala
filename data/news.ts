import type { Article, Author, Text } from "@/types";

/*
 * DEMO CONTENT — every story below is fictional sample content written to
 * demonstrate the portal. None of it is verified news.
 * Order matters only for `featured`: the first featured story is the homepage lead.
 */

const img = (name: string) => `/images/${name}.jpg`;

export const AUTHORS: Record<string, Author> = {
  fathima: { name: { ml: "ഫാത്തിമ ഷെറിൻ", en: "Fathima Sherin" }, role: { ml: "മഞ്ചേരി ബ്യൂറോ", en: "Manjeri Bureau" } },
  rasheed: { name: { ml: "റഷീദ് പാലക്കൽ", en: "Rasheed Palakkal" }, role: { ml: "മലപ്പുറം ബ്യൂറോ", en: "Malappuram Bureau" } },
  anoop: { name: { ml: "അനൂപ് കൃഷ്ണൻ", en: "Anoop Krishnan" }, role: { ml: "സീനിയർ കറസ്പോണ്ടന്റ്", en: "Senior Correspondent" } },
  athira: { name: { ml: "ആതിര മോഹൻ", en: "Athira Mohan" }, role: { ml: "കൾച്ചർ ഡെസ്ക്", en: "Culture Desk" } },
  jishnu: { name: { ml: "ജിഷ്ണു രാജ്", en: "Jishnu Raj" }, role: { ml: "സ്പോർട്സ് ഡെസ്ക്", en: "Sports Desk" } },
  staff: { name: { ml: "സ്വന്തം ലേഖകൻ", en: "Staff Reporter" }, role: { ml: "93കേരള", en: "93Kerala" } },
  desk: { name: { ml: "93കേരള ഡെസ്ക്", en: "93Kerala Desk" }, role: { ml: "വാർത്താ ഡെസ്ക്", en: "News Desk" } },
};

export const ARTICLES: Article[] = [
  // ───────────── Featured (homepage top block) ─────────────
  {
    slug: "manjeri-bypass-work-fast-tracked",
    category: "kerala",
    district: "manjeri",
    featured: true,
    title: {
      ml: "മഞ്ചേരി നഗരത്തിൽ ഗതാഗതക്കുരുക്ക് രൂക്ഷം; ബൈപ്പാസ് നിർമാണം വേഗത്തിലാക്കാൻ തീരുമാനം",
      en: "Traffic congestion worsens in Manjeri town; bypass construction to be fast-tracked",
    },
    summary: {
      ml: "ജസീല ജംഗ്ഷൻ മുതൽ കച്ചേരിപ്പടി വരെ രാവിലെയും വൈകിട്ടും മണിക്കൂറുകൾ നീളുന്ന കുരുക്ക് ഒഴിവാക്കാൻ ബൈപ്പാസിന്റെ ശേഷിക്കുന്ന ജോലികൾ ആറുമാസത്തിനകം പൂർത്തിയാക്കാൻ ജില്ലാ വികസന സമിതി നിർദേശം നൽകി.",
      en: "The district development committee has ordered the remaining bypass work to be finished within six months to end the hours-long morning and evening jams between Jaseela Junction and Kacheripadi.",
    },
    body: {
      ml: [
        "മഞ്ചേരി നഗരത്തിലെ ഗതാഗതക്കുരുക്കിന് പരിഹാരമായി വിഭാവനം ചെയ്ത ബൈപ്പാസ് റോഡിന്റെ നിർമാണം വേഗത്തിലാക്കാൻ ജില്ലാ വികസന സമിതി യോഗം തീരുമാനിച്ചു. ശേഷിക്കുന്ന 2.4 കിലോമീറ്റർ ഭാഗത്തിന്റെ പണി ആറുമാസത്തിനകം പൂർത്തിയാക്കണമെന്ന് പൊതുമരാമത്ത് വകുപ്പിന് നിർദേശം നൽകി.",
        "രാവിലെ എട്ടുമുതൽ പത്തുവരെയും വൈകിട്ട് നാലുമുതൽ ഏഴുവരെയും ജസീല ജംഗ്ഷൻ, കച്ചേരിപ്പടി, സെൻട്രൽ ജംഗ്ഷൻ എന്നിവിടങ്ങളിൽ വാഹനങ്ങൾ മണിക്കൂറുകളോളം കുടുങ്ങിക്കിടക്കുന്നതായി യോഗത്തിൽ ചൂണ്ടിക്കാട്ടി. മെഡിക്കൽ കോളേജിലേക്കുള്ള ആംബുലൻസുകളും കുരുക്കിൽപ്പെടുന്നത് പതിവാണ്.",
        "സ്ഥലമേറ്റെടുപ്പുമായി ബന്ധപ്പെട്ട തർക്കങ്ങൾ ഭൂരിഭാഗവും പരിഹരിച്ചതായി അധികൃതർ അറിയിച്ചു. നഷ്ടപരിഹാരത്തുകയുടെ വിതരണം ഈ മാസം അവസാനത്തോടെ പൂർത്തിയാകും.",
        "ബൈപ്പാസ് യാഥാർഥ്യമാകുന്നതോടെ നിലമ്പൂർ, പെരിന്തൽമണ്ണ, അരീക്കോട് ഭാഗങ്ങളിലേക്കുള്ള വാഹനങ്ങൾക്ക് നഗരത്തിൽ പ്രവേശിക്കാതെ കടന്നുപോകാനാകും. നഗരത്തിലെ ഗതാഗതത്തിരക്ക് 40 ശതമാനം വരെ കുറയുമെന്നാണ് പ്രതീക്ഷ.",
        "താൽക്കാലിക പരിഹാരമെന്ന നിലയിൽ തിരക്കേറിയ സമയങ്ങളിൽ കൂടുതൽ ട്രാഫിക് പൊലീസിനെ വിന്യസിക്കും. സ്വകാര്യ ബസുകളുടെ സ്റ്റോപ്പുകൾ പുനഃക്രമീകരിക്കാനും വഴിയോര പാർക്കിങ് നിയന്ത്രിക്കാനും തീരുമാനമായി.",
        "“ബൈപ്പാസ് യാഥാർഥ്യമാകുന്നത് നഗരത്തിലെ വ്യാപാരികൾക്കും യാത്രക്കാർക്കും ഒരുപോലെ ആശ്വാസമാകും,” എന്ന് മഞ്ചേരിയിലെ വ്യാപാരി സംഘടനാ ഭാരവാഹികൾ പ്രതികരിച്ചു.",
      ],
      en: [
        "The district development committee has decided to fast-track construction of the bypass planned to ease traffic congestion in Manjeri town. The Public Works Department has been told to finish the remaining 2.4-km stretch within six months.",
        "The meeting noted that vehicles stay stuck for hours at Jaseela Junction, Kacheripadi and Central Junction between 8 and 10 am and between 4 and 7 pm. Ambulances heading to the medical college are routinely caught in the jams.",
        "Officials said most disputes over land acquisition have been resolved, and compensation will be fully disbursed by the end of this month.",
        "Once the bypass opens, vehicles bound for Nilambur, Perinthalmanna and Areekode can skip the town centre entirely. Congestion in town is expected to fall by up to 40 per cent.",
        "As an interim measure, more traffic police will be deployed during peak hours. Private bus stops will be reorganised and roadside parking restricted.",
        "“The bypass will be a relief for traders and commuters alike,” office-bearers of a Manjeri traders' association said.",
      ],
    },
    image: img("town-aerial"),
    gallery: [img("town-aerial-2"), img("bus")],
    author: "fathima",
    minutesAgo: 38,
    updatedMinutesAgo: 12,
    views: 24800,
  },
  {
    slug: "malappuram-heavy-rain-orange-alert",
    category: "kerala",
    district: "malappuram",
    featured: true,
    title: {
      ml: "മലപ്പുറം ജില്ലയിൽ ശക്തമായ മഴ; വിവിധ പ്രദേശങ്ങളിൽ ജാഗ്രതാ നിർദേശം",
      en: "Heavy rain lashes Malappuram district; alert issued in several areas",
    },
    summary: {
      ml: "അടുത്ത 48 മണിക്കൂർ ഓറഞ്ച് അലർട്ട്. താഴ്ന്ന പ്രദേശങ്ങളിൽ വെള്ളക്കെട്ട്; നിലമ്പൂർ മേഖലയിൽ മലയോര യാത്രയ്ക്ക് നിയന്ത്രണം.",
      en: "Orange alert for the next 48 hours. Low-lying areas are waterlogged and hill travel in the Nilambur region is restricted.",
    },
    body: {
      ml: [
        "തുലാവർഷം ശക്തിപ്രാപിച്ചതോടെ മലപ്പുറം ജില്ലയിൽ കനത്ത മഴ തുടരുന്നു. അടുത്ത 48 മണിക്കൂർ ജില്ലയിൽ ഓറഞ്ച് അലർട്ട് പ്രഖ്യാപിച്ചതായി ജില്ലാ ദുരന്തനിവാരണ അതോറിറ്റി അറിയിച്ചു.",
        "തിരൂർ, പൊന്നാനി, കോട്ടയ്ക്കൽ എന്നിവിടങ്ങളിലെ താഴ്ന്ന പ്രദേശങ്ങളിൽ വെള്ളക്കെട്ട് രൂപപ്പെട്ടു. പലയിടങ്ങളിലും റോഡുകളിൽ വെള്ളം കയറിയതിനാൽ ഗതാഗതം തടസ്സപ്പെട്ടു.",
        "നിലമ്പൂർ, കരുവാരക്കുണ്ട് മേഖലകളിലെ മലയോരപ്രദേശങ്ങളിൽ രാത്രിയാത്രയ്ക്ക് നിയന്ത്രണം ഏർപ്പെടുത്തി. ചാലിയാർ, കടലുണ്ടിപ്പുഴ എന്നിവയുടെ തീരത്ത് താമസിക്കുന്നവർ ജാഗ്രത പാലിക്കണം.",
        "മത്സ്യത്തൊഴിലാളികൾ കടലിൽ പോകരുതെന്ന് നിർദേശമുണ്ട്. ആവശ്യമെങ്കിൽ ആളുകളെ മാറ്റിപ്പാർപ്പിക്കാൻ എല്ലാ താലൂക്കുകളിലും ക്യാമ്പുകൾ സജ്ജമാക്കിയിട്ടുണ്ട്.",
        "അടിയന്തര സാഹചര്യങ്ങളിൽ ജില്ലാ കൺട്രോൾ റൂമിലെ 1077 എന്ന ടോൾ ഫ്രീ നമ്പറിൽ ബന്ധപ്പെടാം.",
      ],
      en: [
        "Heavy rain continues in Malappuram district as the northeast monsoon gains strength. The District Disaster Management Authority has declared an orange alert for the next 48 hours.",
        "Low-lying areas in Tirur, Ponnani and Kottakkal are waterlogged, and traffic has been disrupted where roads went under water.",
        "Night travel has been restricted in the hill areas of Nilambur and Karuvarakundu. Residents along the Chaliyar and Kadalundi rivers have been asked to stay alert.",
        "Fishermen have been told not to venture into the sea. Relief camps are ready in every taluk in case people need to be moved.",
        "In an emergency, call the district control room on the toll-free number 1077.",
      ],
    },
    image: img("rain-road"),
    gallery: [img("flood-street"), img("flood-street-2"), img("flood-wading"), img("paddy-waterlogged")],
    author: "rasheed",
    minutesAgo: 20,
    updatedMinutesAgo: 5,
    views: 42500,
  },
  {
    slug: "manjeri-mdma-seized-two-arrested",
    category: "crime",
    district: "manjeri",
    featured: true,
    title: {
      ml: "മഞ്ചേരിയിൽ വൻ ലഹരിവേട്ട; 120 ഗ്രാം എംഡിഎംഎയുമായി രണ്ടുപേർ പിടിയിൽ",
      en: "Major drug bust in Manjeri; two held with 120 grams of MDMA",
    },
    summary: {
      ml: "ബെംഗളൂരുവിൽ നിന്ന് ബസ് മാർഗം എത്തിച്ച ലഹരിമരുന്ന് ജില്ലാ ലഹരിവിരുദ്ധ സ്ക്വാഡും പൊലീസും ചേർന്നാണ് പിടികൂടിയത്.",
      en: "The drugs, brought by bus from Bengaluru, were seized in a joint operation by the district anti-narcotics squad and police.",
    },
    body: {
      ml: [
        "മഞ്ചേരി ബസ് സ്റ്റാൻഡ് പരിസരത്ത് നടത്തിയ പരിശോധനയിൽ 120 ഗ്രാം എംഡിഎംഎയുമായി രണ്ട് യുവാക്കളെ പൊലീസ് അറസ്റ്റ് ചെയ്തു. പിടിച്ചെടുത്ത ലഹരിമരുന്നിന് വിപണിയിൽ ആറുലക്ഷം രൂപയോളം വിലവരും.",
        "രഹസ്യവിവരത്തെ തുടർന്ന് ജില്ലാ ലഹരിവിരുദ്ധ സ്ക്വാഡ് (ഡാൻസാഫ്) പുലർച്ചെ മുതൽ നിരീക്ഷണം നടത്തിവരികയായിരുന്നു. ലഹരിമരുന്ന് ചെറുപായ്ക്കറ്റുകളാക്കി വിദ്യാർഥികൾക്കിടയിൽ വിൽപന നടത്തുകയായിരുന്നു ലക്ഷ്യമെന്ന് പൊലീസ് പറഞ്ഞു.",
        "പ്രതികളെ കോടതിയിൽ ഹാജരാക്കി റിമാൻഡ് ചെയ്തു. സംഘത്തിലെ മറ്റ് കണ്ണികളെക്കുറിച്ചുള്ള അന്വേഷണം ഊർജിതമാക്കിയതായി പൊലീസ് അറിയിച്ചു.",
      ],
    },
    image: img("pills"),
    author: "staff",
    minutesAgo: 75,
    views: 31200,
  },
  {
    slug: "dam-shutters-to-be-raised-alert",
    category: "kerala",
    featured: true,
    title: {
      ml: "ജലനിരപ്പ് ഉയർന്നു; ഡാമുകളുടെ ഷട്ടറുകൾ ഇന്ന് ഉയർത്തും, തീരവാസികൾക്ക് ജാഗ്രത",
      en: "Water levels rise: dam shutters to be raised today; alert for riverside residents",
    },
    summary: {
      ml: "പെരിങ്ങൽക്കുത്ത്, മലമ്പുഴ ഡാമുകളിൽ നിന്ന് നിയന്ത്രിത അളവിൽ വെള്ളം തുറന്നുവിടും.",
      en: "Water will be released in a controlled manner from the Peringalkuthu and Malampuzha dams.",
    },
    body: {
      ml: [
        "തുടർച്ചയായ മഴയിൽ ജലനിരപ്പ് ഉയർന്ന സാഹചര്യത്തിൽ സംസ്ഥാനത്തെ രണ്ട് പ്രധാന ഡാമുകളുടെ ഷട്ടറുകൾ ഇന്ന് ഉച്ചയ്ക്ക് ഉയർത്തും. നിയന്ത്രിത അളവിലാകും വെള്ളം തുറന്നുവിടുകയെന്ന് ജലവിഭവ വകുപ്പ് അറിയിച്ചു.",
        "ചാലക്കുടിപ്പുഴ, ഭാരതപ്പുഴ എന്നിവയുടെ തീരങ്ങളിൽ താമസിക്കുന്നവർ ജാഗ്രത പാലിക്കണം. പുഴകളിൽ ഇറങ്ങുന്നതും മീൻപിടിക്കുന്നതും ഒഴിവാക്കണമെന്ന് നിർദേശമുണ്ട്.",
        "സ്ഥിതിഗതികൾ സംസ്ഥാന ദുരന്തനിവാരണ അതോറിറ്റി നിരന്തരം വിലയിരുത്തുന്നുണ്ട്.",
      ],
    },
    image: img("dam-reservoir"),
    author: "anoop",
    minutesAgo: 65,
    views: 17300,
  },
  {
    slug: "gulf-kerala-airfares-double",
    category: "world",
    featured: true,
    title: {
      ml: "അവധിക്കാല തിരക്ക്: ഗൾഫ്–കേരള വിമാന നിരക്ക് ഇരട്ടിയായി",
      en: "Holiday rush: Gulf–Kerala airfares double",
    },
    summary: {
      ml: "ക്രിസ്മസ്–പുതുവത്സര അവധിക്ക് നാട്ടിലെത്താൻ ഒരുങ്ങുന്ന പ്രവാസികൾക്ക് തിരിച്ചടി. അധിക സർവീസുകൾ വേണമെന്ന് ആവശ്യം.",
      en: "A setback for expatriates planning to come home for Christmas and New Year, as calls grow for additional flights.",
    },
    body: {
      ml: [
        "ക്രിസ്മസ്–പുതുവത്സര അവധിക്കാലം അടുത്തതോടെ ഗൾഫ് രാജ്യങ്ങളിൽ നിന്ന് കേരളത്തിലേക്കുള്ള വിമാന ടിക്കറ്റ് നിരക്ക് ഇരട്ടിയിലേറെയായി. ദുബായ്–കോഴിക്കോട് റൂട്ടിൽ സാധാരണ 15,000 രൂപയുള്ള ടിക്കറ്റിന് ഇപ്പോൾ 38,000 രൂപ വരെ നൽകണം.",
        "അവധിക്കാലത്ത് അധിക സർവീസുകൾ അനുവദിക്കണമെന്നും നിരക്ക് നിയന്ത്രിക്കാൻ ഇടപെടണമെന്നും ആവശ്യപ്പെട്ട് പ്രവാസി സംഘടനകൾ വ്യോമയാന മന്ത്രാലയത്തിന് നിവേദനം നൽകി.",
      ],
    },
    image: img("airplane-wing"),
    author: "desk",
    minutesAgo: 95,
    views: 21400,
  },

  // ───────────── Manjeri ─────────────
  {
    slug: "district-school-kalolsavam-manjeri",
    category: "education",
    district: "manjeri",
    title: {
      ml: "ജില്ലാ സ്കൂൾ കലോത്സവത്തിന് മഞ്ചേരിയിൽ തിരിതെളിഞ്ഞു; 17 വേദികളിലായി 8,000 പ്രതിഭകൾ",
      en: "District school arts festival opens in Manjeri; 8,000 students across 17 venues",
    },
    summary: {
      ml: "അഞ്ചുദിവസം നീളുന്ന കലാമാമാങ്കത്തിൽ 300-ലേറെ ഇനങ്ങളിലാണ് മത്സരം. ആദ്യദിനം ഒപ്പനയും മോഹിനിയാട്ടവും അരങ്ങിലെത്തി.",
      en: "Students will compete in more than 300 events over five days. Oppana and Mohiniyattam took the stage on the opening day.",
    },
    body: {
      ml: [
        "മലപ്പുറം റവന്യൂ ജില്ലാ സ്കൂൾ കലോത്സവത്തിന് മഞ്ചേരിയിൽ വർണാഭമായ തുടക്കം. പ്രധാന വേദിയിൽ നടന്ന ഉദ്ഘാടന സമ്മേളനത്തിൽ ആയിരക്കണക്കിന് വിദ്യാർഥികളും രക്ഷിതാക്കളും പങ്കെടുത്തു.",
        "വിവിധ ഉപജില്ലകളിൽ ഒന്നാമതെത്തിയ 8,000-ത്തോളം വിദ്യാർഥികൾ 17 വേദികളിലായി 300-ലേറെ ഇനങ്ങളിൽ മത്സരിക്കും. ഒപ്പന, ദഫ്മുട്ട്, കോൽക്കളി തുടങ്ങിയ മാപ്പിള കലകളിലാണ് ഏറ്റവും കൂടുതൽ മത്സരാർഥികൾ.",
        "ആദ്യദിനം മോഹിനിയാട്ടം, ഭരതനാട്യം, ഒപ്പന മത്സരങ്ങൾ അരങ്ങേറി. ഒപ്പന വേദിയിൽ രാത്രി വൈകിയും കാണികളുടെ നിറഞ്ഞ സാന്നിധ്യമുണ്ടായിരുന്നു.",
        "ഗ്രീൻ പ്രോട്ടോക്കോൾ പാലിച്ചാണ് കലോത്സവം നടക്കുന്നത്. വേദികൾക്കിടയിൽ സൗജന്യ ബസ് സർവീസും ഭക്ഷണശാലയിൽ പ്രതിദിനം 10,000 പേർക്കുള്ള ഭക്ഷണവും ഒരുക്കിയിട്ടുണ്ട്.",
        "ഒന്നാം സ്ഥാനം നേടുന്നവർ ജനുവരിയിൽ നടക്കുന്ന സംസ്ഥാന സ്കൂൾ കലോത്സവത്തിൽ ജില്ലയെ പ്രതിനിധീകരിക്കും.",
      ],
      en: [
        "The Malappuram revenue district school arts festival got off to a colourful start in Manjeri, with thousands of students and parents attending the inaugural session at the main venue.",
        "Around 8,000 students who topped their sub-district contests will compete in more than 300 events across 17 venues. Mappila art forms such as Oppana, Duffmuttu and Kolkali have drawn the most participants.",
        "Mohiniyattam, Bharatanatyam and Oppana were staged on the opening day, and the Oppana venue stayed packed late into the night.",
        "The festival follows a green protocol. Free buses connect the venues, and the food hall is serving 10,000 meals a day.",
        "First-place winners will represent the district at the state school arts festival in January.",
      ],
    },
    image: img("school-stage"),
    author: "athira",
    minutesAgo: 55,
    updatedMinutesAgo: 20,
    views: 14100,
  },
  {
    slug: "manjeri-medical-college-super-speciality-block",
    category: "health",
    district: "manjeri",
    title: {
      ml: "മഞ്ചേരി മെഡിക്കൽ കോളേജിൽ സൂപ്പർ സ്പെഷ്യാലിറ്റി ബ്ലോക്ക്; 300 കിടക്കകൾ കൂടി",
      en: "Manjeri Medical College to get a super-speciality block with 300 more beds",
    },
    summary: {
      ml: "കാർഡിയോളജി, ന്യൂറോളജി, നെഫ്രോളജി വിഭാഗങ്ങൾ ഉൾപ്പെടുന്ന ഏഴുനില കെട്ടിടത്തിന്റെ നിർമാണം അടുത്ത മാസം ആരംഭിക്കും.",
      en: "Work on the seven-storey building, which will house cardiology, neurology and nephrology, begins next month.",
    },
    body: {
      ml: [
        "മഞ്ചേരി ഗവ. മെഡിക്കൽ കോളേജ് ആശുപത്രിയിൽ പുതിയ സൂപ്പർ സ്പെഷ്യാലിറ്റി ബ്ലോക്ക് നിർമിക്കുന്നതിന് ഭരണാനുമതി ലഭിച്ചു. 300 കിടക്കകളും എട്ട് ഓപ്പറേഷൻ തിയറ്ററുകളും ഉൾപ്പെടുന്ന ഏഴുനില കെട്ടിടമാണ് വിഭാവനം ചെയ്തിരിക്കുന്നത്.",
        "കാർഡിയോളജി, ന്യൂറോളജി, നെഫ്രോളജി, യൂറോളജി വിഭാഗങ്ങൾ പുതിയ ബ്ലോക്കിലേക്ക് മാറും. 24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന കാത്ത് ലാബും ഡയാലിസിസ് യൂണിറ്റും ഇതിന്റെ ഭാഗമാണ്.",
        "നിലവിൽ ഹൃദ്രോഗ ചികിത്സയ്ക്കും വിദഗ്ധ ശസ്ത്രക്രിയകൾക്കുമായി ജില്ലയിലെ രോഗികൾ കോഴിക്കോട് മെഡിക്കൽ കോളേജിനെയാണ് ആശ്രയിക്കുന്നത്. പുതിയ ബ്ലോക്ക് വരുന്നതോടെ ഈ യാത്ര ഒഴിവാകും.",
        "രണ്ടുവർഷത്തിനകം നിർമാണം പൂർത്തിയാക്കാനാണ് ലക്ഷ്യമിടുന്നതെന്ന് ആശുപത്രി സൂപ്രണ്ട് അറിയിച്ചു. ഒപി വിഭാഗത്തിലെ തിരക്ക് കുറയ്ക്കാൻ ഓൺലൈൻ ടോക്കൺ സംവിധാനവും ഉടൻ നിലവിൽ വരും.",
      ],
      en: [
        "Administrative sanction has been granted for a new super-speciality block at the Government Medical College Hospital in Manjeri. The seven-storey building will have 300 beds and eight operation theatres.",
        "The cardiology, neurology, nephrology and urology departments will move to the new block, which will also house a round-the-clock cath lab and a dialysis unit.",
        "Patients from the district currently travel to Kozhikode Medical College for cardiac care and advanced surgery. The new block is expected to end that journey.",
        "The hospital superintendent said construction should be completed within two years. An online token system to cut crowding at the outpatient department will also be introduced soon.",
      ],
    },
    image: img("hospital-ward"),
    gallery: [img("hospital-reception"), img("operation-theatre")],
    author: "fathima",
    minutesAgo: 120,
    views: 19600,
  },
  {
    slug: "payyanad-stadium-floodlights-district-league",
    category: "sports",
    district: "manjeri",
    title: {
      ml: "പയ്യനാട് സ്റ്റേഡിയത്തിൽ പുതിയ ഫ്ലഡ്‌ലൈറ്റുകൾ; ജില്ലാ ഫുട്ബോൾ ലീഗ് ഇനി രാത്രിയിലും",
      en: "New floodlights at Payyanad Stadium; district football league goes under lights",
    },
    summary: {
      ml: "ഡിസംബർ ആദ്യവാരം തുടങ്ങുന്ന ലീഗിൽ 16 ക്ലബ്ബുകൾ മാറ്റുരയ്ക്കും.",
      en: "Sixteen clubs will compete in the league, which begins in the first week of December.",
    },
    body: {
      ml: [
        "മഞ്ചേരി പയ്യനാട് സ്റ്റേഡിയത്തിൽ സ്ഥാപിച്ച പുതിയ എൽഇഡി ഫ്ലഡ്‌ലൈറ്റുകളുടെ പരീക്ഷണ പ്രവർത്തനം വിജയകരമായി പൂർത്തിയായി. ഇതോടെ ജില്ലാ ഫുട്ബോൾ ലീഗ് മത്സരങ്ങൾ രാത്രിയിലും നടത്താനാകും.",
        "ഡിസംബർ ആദ്യവാരം ആരംഭിക്കുന്ന ലീഗിൽ ജില്ലയിലെ 16 ക്ലബ്ബുകൾ പങ്കെടുക്കും. വൈകിട്ട് ഏഴിനാണ് മത്സരങ്ങൾ. ടിക്കറ്റുകൾ ഓൺലൈനായും സ്റ്റേഡിയം കൗണ്ടറുകളിലും ലഭ്യമാകും.",
        "ഫുട്ബോൾ ആവേശത്തിന് പേരുകേട്ട മലപ്പുറത്ത് രാത്രി മത്സരങ്ങൾ കൂടുതൽ കാണികളെ ആകർഷിക്കുമെന്നാണ് സംഘാടകരുടെ പ്രതീക്ഷ.",
      ],
    },
    image: img("stadium-night"),
    author: "jishnu",
    minutesAgo: 140,
    views: 15200,
  },
  {
    slug: "manjeri-market-vegetable-prices-soar",
    category: "business",
    district: "manjeri",
    title: {
      ml: "മഞ്ചേരി മാർക്കറ്റിൽ പച്ചക്കറിവില കുതിക്കുന്നു; ചെറിയ ഉള്ളിക്ക് കിലോയ്ക്ക് 90 രൂപ",
      en: "Vegetable prices soar at Manjeri market; shallots touch ₹90 a kg",
    },
    summary: {
      ml: "തമിഴ്നാട്ടിലും കർണാടകയിലും പെയ്ത കനത്ത മഴയിൽ വരവ് കുറഞ്ഞതാണ് വിലക്കയറ്റത്തിന് കാരണമെന്ന് വ്യാപാരികൾ.",
      en: "Traders blame lower arrivals after heavy rain in Tamil Nadu and Karnataka.",
    },
    body: {
      ml: [
        "ഒരാഴ്ചയ്ക്കിടെ മഞ്ചേരി പച്ചക്കറി മാർക്കറ്റിൽ ചെറിയ ഉള്ളിയുടെ വില 60 രൂപയിൽ നിന്ന് 90 രൂപയായി ഉയർന്നു. തക്കാളി, പച്ചമുളക്, ബീൻസ് എന്നിവയ്ക്കും വില ഗണ്യമായി കൂടി.",
        "തമിഴ്നാട്ടിലും കർണാടകയിലും പെയ്ത കനത്ത മഴയിൽ വിളവെടുപ്പ് മുടങ്ങിയതാണ് വരവ് കുറയാൻ കാരണം. അടുത്ത രണ്ടാഴ്ചയും വില ഉയർന്നുനിൽക്കാനാണ് സാധ്യതയെന്ന് മൊത്തവ്യാപാരികൾ പറയുന്നു.",
        "വിലക്കയറ്റം നിയന്ത്രിക്കാൻ ഹോർട്ടികോർപ്പ് ഔട്ട്‌ലെറ്റുകൾ വഴി ന്യായവിലയ്ക്ക് പച്ചക്കറി ലഭ്യമാക്കണമെന്ന് ഉപഭോക്തൃ സംഘടനകൾ ആവശ്യപ്പെട്ടു.",
      ],
    },
    image: img("shallots"),
    gallery: [img("chillies")],
    author: "staff",
    minutesAgo: 240,
    views: 11800,
  },
  {
    slug: "manjeri-cctv-surveillance-network",
    category: "crime",
    district: "manjeri",
    title: {
      ml: "നഗരസുരക്ഷയ്ക്ക് 150 ക്യാമറകൾ; മഞ്ചേരിയിൽ നിരീക്ഷണ സംവിധാനം സജ്ജമാകുന്നു",
      en: "150 cameras for city safety: Manjeri's surveillance network nears completion",
    },
    summary: {
      ml: "പ്രധാന ജംഗ്ഷനുകളും ബസ് സ്റ്റാൻഡുകളും പൊലീസ് കൺട്രോൾ റൂമിൽ നിന്ന് 24 മണിക്കൂറും നിരീക്ഷിക്കും.",
      en: "Major junctions and bus stands will be monitored round the clock from the police control room.",
    },
    body: {
      ml: [
        "മഞ്ചേരി നഗരസഭയും പൊലീസും സംയുക്തമായി നടപ്പാക്കുന്ന നിരീക്ഷണ ക്യാമറ പദ്ധതിയുടെ ആദ്യഘട്ടം പൂർത്തിയായി. നഗരത്തിലെ 40 കേന്ദ്രങ്ങളിലായി 150 ഹൈ-ഡെഫനിഷൻ ക്യാമറകളാണ് സ്ഥാപിക്കുന്നത്.",
        "വാഹനങ്ങളുടെ നമ്പർ പ്ലേറ്റ് സ്വയം തിരിച്ചറിയാൻ കഴിയുന്ന ക്യാമറകളും ഇതിലുൾപ്പെടും. മോഷണം, ഗതാഗത നിയമലംഘനം, മാലിന്യം തള്ളൽ എന്നിവ തടയാൻ പദ്ധതി സഹായിക്കുമെന്ന് അധികൃതർ പറഞ്ഞു.",
        "രണ്ടാംഘട്ടത്തിൽ സമീപ പഞ്ചായത്തുകളിലെ പ്രധാന റോഡുകളിലേക്കും സംവിധാനം വ്യാപിപ്പിക്കും.",
      ],
    },
    image: img("cctv"),
    author: "fathima",
    minutesAgo: 300,
    views: 8700,
  },
  {
    slug: "nilavinte-vazhi-shooting-wraps-manjeri",
    category: "entertainment",
    district: "manjeri",
    title: {
      ml: "‘നിലാവിന്റെ വഴി’ ചിത്രീകരണം മഞ്ചേരിയിൽ പൂർത്തിയായി; ക്രിസ്മസിന് തിയറ്ററുകളിൽ",
      en: "‘Nilavinte Vazhi’ wraps up shooting in Manjeri; Christmas release planned",
    },
    summary: {
      ml: "മലപ്പുറത്തിന്റെ ഫുട്ബോൾ സംസ്കാരം പശ്ചാത്തലമാക്കിയ ചിത്രത്തിൽ പ്രദേശവാസികളായ നൂറിലേറെ പേർ അഭിനയിച്ചു.",
      en: "More than a hundred local residents act in the film, set against Malappuram's football culture.",
    },
    body: {
      ml: [
        "മലപ്പുറത്തിന്റെ ഫുട്ബോൾ ആവേശം പ്രമേയമാക്കുന്ന ‘നിലാവിന്റെ വഴി’ എന്ന ചിത്രത്തിന്റെ ചിത്രീകരണം മഞ്ചേരിയിലും പരിസരങ്ങളിലുമായി പൂർത്തിയായി. 42 ദിവസം നീണ്ട ഷൂട്ടിങ്ങിൽ സെവൻസ് മൈതാനങ്ങളും നഗരത്തിലെ തെരുവുകളുമായിരുന്നു പ്രധാന ലൊക്കേഷനുകൾ.",
        "പ്രാദേശിക ഫുട്ബോൾ താരങ്ങളടക്കം നൂറിലേറെ നാട്ടുകാർ ചിത്രത്തിൽ വേഷമിടുന്നു. ക്രിസ്മസ് റിലീസായി ചിത്രം തിയറ്ററുകളിലെത്തുമെന്ന് അണിയറപ്രവർത്തകർ അറിയിച്ചു.",
      ],
    },
    image: img("clapperboard"),
    author: "athira",
    minutesAgo: 360,
    views: 9900,
  },
  {
    slug: "manjeri-government-schools-smart-classrooms",
    category: "education",
    district: "manjeri",
    title: {
      ml: "മഞ്ചേരിയിലെ 24 സർക്കാർ സ്കൂളുകളിൽ സ്മാർട്ട് ക്ലാസ് മുറികളും കമ്പ്യൂട്ടർ ലാബുകളും",
      en: "Smart classrooms and computer labs for 24 government schools in Manjeri",
    },
    summary: {
      ml: "കിഫ്ബി സഹായത്തോടെയുള്ള പദ്ധതിയിൽ 1,200 ലാപ്ടോപ്പുകളും 180 പ്രൊജക്ടറുകളും വിതരണം ചെയ്യും.",
      en: "The KIIFB-assisted project will distribute 1,200 laptops and 180 projectors.",
    },
    body: {
      ml: [
        "മഞ്ചേരി നിയോജക മണ്ഡലത്തിലെ 24 സർക്കാർ, എയ്ഡഡ് സ്കൂളുകളിൽ ഹൈടെക് ക്ലാസ് മുറികളും ആധുനിക കമ്പ്യൂട്ടർ ലാബുകളും ഒരുങ്ങുന്നു. ജനുവരിയോടെ എല്ലാ സ്കൂളുകളിലും സംവിധാനം പ്രവർത്തനക്ഷമമാകും.",
        "അധ്യാപകർക്ക് ഡിജിറ്റൽ ഉള്ളടക്ക നിർമാണത്തിൽ പ്രത്യേക പരിശീലനം നൽകും. റോബോട്ടിക്സ്, കോഡിങ് ക്ലബ്ബുകൾ ആരംഭിക്കാനും പദ്ധതിയുണ്ട്.",
      ],
    },
    image: img("computer-lab"),
    author: "staff",
    minutesAgo: 420,
    views: 6400,
  },
  {
    slug: "manjeri-four-screen-multiplex",
    category: "entertainment",
    district: "manjeri",
    title: {
      ml: "മഞ്ചേരിയിൽ നാല് സ്ക്രീനുകളുള്ള മൾട്ടിപ്ലക്സ് ഒരുങ്ങുന്നു",
      en: "Four-screen multiplex coming up in Manjeri",
    },
    summary: {
      ml: "ഡോൾബി അറ്റ്മോസ് ശബ്ദസംവിധാനവും റിക്ലൈനർ സീറ്റുകളുമുള്ള തിയറ്റർ സമുച്ചയം ഏപ്രിലിൽ തുറക്കും.",
      en: "The complex, with Dolby Atmos sound and recliner seats, opens in April.",
    },
    body: {
      ml: [
        "മഞ്ചേരി–മലപ്പുറം റോഡിൽ നിർമാണം പുരോഗമിക്കുന്ന ഷോപ്പിങ് സമുച്ചയത്തിൽ നാല് സ്ക്രീനുകളുള്ള മൾട്ടിപ്ലക്സ് ഏപ്രിലിൽ പ്രവർത്തനം തുടങ്ങും. ആകെ 900 സീറ്റുകളാണ് ഉണ്ടാവുക.",
        "ജില്ലയിലെ സിനിമാപ്രേമികൾക്ക് പുതിയ റിലീസുകൾ മികച്ച സാങ്കേതിക മികവോടെ കാണാൻ ഇനി കോഴിക്കോട്ടേക്കോ പെരിന്തൽമണ്ണയിലേക്കോ പോകേണ്ടതില്ലെന്ന് ഉടമകൾ പറഞ്ഞു.",
      ],
    },
    image: img("cinema-facade"),
    author: "athira",
    minutesAgo: 1500,
    views: 7200,
  },

  // ───────────── Malappuram ─────────────
  {
    slug: "calicut-university-exams-postponed-rain",
    category: "education",
    district: "malappuram",
    title: {
      ml: "കനത്ത മഴ: കാലിക്കറ്റ് സർവകലാശാല നാളത്തെ പരീക്ഷകൾ മാറ്റിവച്ചു",
      en: "Heavy rain: Calicut University postpones tomorrow's examinations",
    },
    summary: {
      ml: "പുതുക്കിയ തീയതി പിന്നീട് പ്രഖ്യാപിക്കും. മറ്റ് ദിവസങ്ങളിലെ പരീക്ഷകൾക്ക് മാറ്റമില്ല.",
      en: "Revised dates will be announced later; exams on other days are unchanged.",
    },
    body: {
      ml: [
        "ജില്ലയിൽ ഓറഞ്ച് അലർട്ട് പ്രഖ്യാപിച്ച സാഹചര്യത്തിൽ നാളെ നടത്താനിരുന്ന എല്ലാ പരീക്ഷകളും കാലിക്കറ്റ് സർവകലാശാല മാറ്റിവച്ചു. പുതുക്കിയ തീയതി പിന്നീട് അറിയിക്കുമെന്ന് പരീക്ഷാ കൺട്രോളർ വ്യക്തമാക്കി.",
        "മറ്റ് ദിവസങ്ങളിലെ പരീക്ഷകൾക്ക് മാറ്റമില്ല. വിദ്യാർഥികൾ സർവകലാശാല വെബ്സൈറ്റിലെ അറിയിപ്പുകൾ ശ്രദ്ധിക്കണം.",
      ],
    },
    image: img("exam-girl"),
    author: "staff",
    minutesAgo: 45,
    views: 20900,
  },
  {
    slug: "nilambur-shoranur-new-memu-service",
    category: "kerala",
    district: "malappuram",
    title: {
      ml: "നിലമ്പൂർ–ഷൊർണൂർ പാതയിൽ പുതിയ മെമു സർവീസ് തിങ്കളാഴ്ച മുതൽ",
      en: "New MEMU service on the Nilambur–Shoranur line from Monday",
    },
    summary: {
      ml: "രാവിലെ 6.10-ന് നിലമ്പൂരിൽ നിന്ന് പുറപ്പെടുന്ന ട്രെയിൻ ഷൊർണൂരിൽ ദീർഘദൂര ട്രെയിനുകൾക്ക് കണക്ഷൻ നൽകും.",
      en: "The train leaves Nilambur at 6.10 am and connects with long-distance trains at Shoranur.",
    },
    body: {
      ml: [
        "നിലമ്പൂർ–ഷൊർണൂർ പാതയിൽ തിങ്കളാഴ്ച മുതൽ പുതിയ മെമു ട്രെയിൻ സർവീസ് ആരംഭിക്കും. വാണിയമ്പലം, അങ്ങാടിപ്പുറം, ചെറുകര, വല്ലപ്പുഴ സ്റ്റേഷനുകളിൽ സ്റ്റോപ്പുണ്ടാകും.",
        "രാവിലെ 6.10-ന് നിലമ്പൂരിൽ നിന്ന് പുറപ്പെട്ട് 7.45-ന് ഷൊർണൂരിലെത്തും. ഇതോടെ എറണാകുളം, കോയമ്പത്തൂർ ഭാഗങ്ങളിലേക്കുള്ള ദീർഘദൂര ട്രെയിനുകളിൽ കണക്ഷൻ ലഭിക്കും.",
        "വിദ്യാർഥികൾക്കും ജോലിക്കാർക്കും ഏറെ പ്രയോജനപ്പെടുന്ന സർവീസ് വേണമെന്നത് യാത്രക്കാരുടെ ഏറെക്കാലത്തെ ആവശ്യമായിരുന്നു.",
      ],
    },
    image: img("train-viaduct"),
    gallery: [img("train-viaduct-2")],
    author: "anoop",
    minutesAgo: 90,
    views: 13400,
  },
  {
    slug: "karipur-new-gulf-services-december",
    category: "business",
    district: "malappuram",
    title: {
      ml: "കരിപ്പൂരിൽ നിന്ന് ഡിസംബർ മുതൽ പുതിയ ഗൾഫ് സർവീസുകൾ; പ്രവാസികൾക്ക് ആശ്വാസം",
      en: "New Gulf flights from Karipur from December; relief for expatriates",
    },
    summary: {
      ml: "ദമാം, മസ്കത്ത്, ബഹ്റൈൻ എന്നിവിടങ്ങളിലേക്ക് ആഴ്ചയിൽ 14 അധിക സർവീസുകൾ.",
      en: "Fourteen additional weekly flights to Dammam, Muscat and Bahrain.",
    },
    body: {
      ml: [
        "കോഴിക്കോട് അന്താരാഷ്ട്ര വിമാനത്താവളത്തിൽ (കരിപ്പൂർ) നിന്ന് ഡിസംബർ ഒന്നുമുതൽ ഗൾഫ് മേഖലയിലേക്ക് ആഴ്ചയിൽ 14 അധിക സർവീസുകൾ ആരംഭിക്കും. ദമാം, മസ്കത്ത്, ബഹ്റൈൻ എന്നിവിടങ്ങളിലേക്കാണ് പുതിയ സർവീസുകൾ.",
        "അവധിക്കാലത്തെ ടിക്കറ്റ് നിരക്കുവർധന ഒരു പരിധിവരെ നിയന്ത്രിക്കാൻ ഇത് സഹായിക്കുമെന്നാണ് പ്രതീക്ഷ. വലിയ വിമാനങ്ങളുടെ സർവീസ് പുനരാരംഭിക്കാനുള്ള ശ്രമങ്ങൾ തുടരുകയാണെന്ന് വിമാനത്താവള അധികൃതർ അറിയിച്ചു.",
      ],
    },
    image: img("airport-plane"),
    author: "rasheed",
    minutesAgo: 160,
    views: 16700,
  },
  {
    slug: "karipur-gold-seized-dubai-passenger",
    category: "crime",
    district: "malappuram",
    title: {
      ml: "കരിപ്പൂരിൽ 1.8 കിലോ സ്വർണം പിടികൂടി; ദുബായിൽ നിന്നെത്തിയ യാത്രക്കാരൻ അറസ്റ്റിൽ",
      en: "1.8 kg of gold seized at Karipur; passenger from Dubai arrested",
    },
    summary: {
      ml: "മിശ്രിതരൂപത്തിലാക്കി ശരീരത്തിൽ ഒളിപ്പിച്ച സ്വർണമാണ് കസ്റ്റംസ് പിടികൂടിയത്.",
      en: "Customs recovered gold in compound form concealed on the passenger's body.",
    },
    body: {
      ml: [
        "കോഴിക്കോട് അന്താരാഷ്ട്ര വിമാനത്താവളത്തിൽ ഒരു കോടി രൂപയിലേറെ വിലവരുന്ന 1.8 കിലോഗ്രാം സ്വർണം കസ്റ്റംസ് എയർ ഇന്റലിജൻസ് വിഭാഗം പിടികൂടി. ദുബായിൽ നിന്നെത്തിയ യാത്രക്കാരനെ അറസ്റ്റ് ചെയ്തു.",
        "മിശ്രിതരൂപത്തിലാക്കി ക്യാപ്സ്യൂളുകളിൽ നിറച്ച് ശരീരത്തിൽ ഒളിപ്പിച്ച നിലയിലായിരുന്നു സ്വർണം. കള്ളക്കടത്ത് സംഘത്തിലെ മറ്റുള്ളവരെക്കുറിച്ച് അന്വേഷണം ആരംഭിച്ചു.",
      ],
    },
    image: img("gold-chain"),
    author: "staff",
    minutesAgo: 210,
    views: 22300,
  },
  {
    slug: "malappuram-sevens-football-season",
    category: "sports",
    district: "malappuram",
    title: {
      ml: "സെവൻസ് ഫുട്ബോൾ സീസണിന് കിക്കോഫ്; ജില്ലയിൽ 40 ടൂർണമെന്റുകൾ",
      en: "Sevens football season kicks off with 40 tournaments across the district",
    },
    summary: {
      ml: "വിദേശ താരങ്ങളടക്കം അണിനിരക്കുന്ന മത്സരങ്ങൾക്കായി ഫ്ലഡ്‌ലൈറ്റ് മൈതാനങ്ങൾ ഒരുങ്ങി.",
      en: "Floodlit grounds are ready for matches that will feature foreign players too.",
    },
    body: {
      ml: [
        "മലപ്പുറത്തിന്റെ കായികാവേശമായ സെവൻസ് ഫുട്ബോൾ സീസണിന് തുടക്കമായി. ഡിസംബർ മുതൽ മേയ് വരെ നീളുന്ന സീസണിൽ ജില്ലയിലുടനീളം 40-ലേറെ ടൂർണമെന്റുകൾ നടക്കും.",
        "ആഫ്രിക്കൻ താരങ്ങളടക്കം അണിനിരക്കുന്ന ടീമുകൾ ഇത്തവണയും മത്സരത്തിനുണ്ട്. ടൂർണമെന്റുകളിൽ നിന്നുള്ള വരുമാനത്തിന്റെ ഒരു വിഹിതം ജീവകാരുണ്യ പ്രവർത്തനങ്ങൾക്ക് മാറ്റിവയ്ക്കുന്നതും പതിവാണ്.",
        "സുരക്ഷ ഉറപ്പാക്കാൻ താൽക്കാലിക ഗാലറികൾക്ക് പൊതുമരാമത്ത് വകുപ്പിന്റെ ഫിറ്റ്നസ് സർട്ടിഫിക്കറ്റ് നിർബന്ധമാക്കി.",
      ],
    },
    image: img("football-grass"),
    gallery: [img("football-kick")],
    author: "jishnu",
    minutesAgo: 320,
    views: 12800,
  },
  {
    slug: "state-school-sports-meet-malappuram-second",
    category: "sports",
    district: "malappuram",
    title: {
      ml: "സംസ്ഥാന സ്കൂൾ കായികമേള: മലപ്പുറം രണ്ടാം സ്ഥാനത്ത്",
      en: "State school sports meet: Malappuram finishes second",
    },
    summary: {
      ml: "അത്‌ലറ്റിക്സിൽ ജില്ല 12 സ്വർണം നേടി. സ്പ്രിന്റിൽ മീറ്റ് റെക്കോർഡ്.",
      en: "The district won 12 golds in athletics, including a meet record in the sprints.",
    },
    body: {
      ml: [
        "സംസ്ഥാന സ്കൂൾ കായികമേളയിൽ മലപ്പുറം ജില്ല രണ്ടാം സ്ഥാനം സ്വന്തമാക്കി. അത്‌ലറ്റിക്സിൽ 12 സ്വർണമടക്കം 31 മെഡലുകളാണ് ജില്ലയുടെ താരങ്ങൾ നേടിയത്.",
        "സീനിയർ ആൺകുട്ടികളുടെ 100 മീറ്ററിൽ ജില്ലയുടെ താരം പുതിയ മീറ്റ് റെക്കോർഡ് കുറിച്ചു.",
      ],
    },
    image: img("sprinter"),
    author: "jishnu",
    minutesAgo: 335,
    views: 8200,
  },
  {
    slug: "malappuram-drinking-water-projects-50-crore",
    category: "politics",
    district: "malappuram",
    title: {
      ml: "ജില്ലാ പഞ്ചായത്ത്: കുടിവെള്ള പദ്ധതികൾക്ക് 50 കോടിയുടെ അംഗീകാരം",
      en: "District panchayat approves ₹50-crore drinking water projects",
    },
    summary: {
      ml: "ഭാരതപ്പുഴ ജലസ്രോതസ്സാക്കി തീരദേശ പഞ്ചായത്തുകളിൽ ശുദ്ധജലമെത്തിക്കും.",
      en: "Water drawn from the Bharathapuzha will be supplied to coastal panchayats.",
    },
    body: {
      ml: [
        "വേനൽക്കാലത്തെ ശുദ്ധജലക്ഷാമം പരിഹരിക്കാൻ ജില്ലാ പഞ്ചായത്ത് 50 കോടി രൂപയുടെ കുടിവെള്ള പദ്ധതികൾക്ക് അംഗീകാരം നൽകി. തീരദേശ, മലയോര പഞ്ചായത്തുകൾക്കാണ് മുൻഗണന.",
        "പൊന്നാനി, തിരൂർ മേഖലകളിലെ ഉപ്പുവെള്ള ഭീഷണി നേരിടുന്ന പ്രദേശങ്ങളിൽ ഭാരതപ്പുഴയിൽ നിന്ന് ശുദ്ധീകരിച്ച വെള്ളമെത്തിക്കും. 1,200 പൊതു ടാപ്പുകളും 18 സംഭരണ ടാങ്കുകളും പദ്ധതിയുടെ ഭാഗമായി സ്ഥാപിക്കും.",
        "ഭരണ–പ്രതിപക്ഷ ഭേദമില്ലാതെ എല്ലാ അംഗങ്ങളും പദ്ധതിയെ പിന്തുണച്ചു.",
      ],
    },
    image: img("river-sunset"),
    author: "rasheed",
    minutesAgo: 490,
    views: 5300,
  },
  {
    slug: "tirur-online-trading-scam",
    category: "crime",
    district: "malappuram",
    title: {
      ml: "ഓൺലൈൻ ട്രേഡിങ് തട്ടിപ്പ്: തിരൂർ സ്വദേശിക്ക് 12 ലക്ഷം നഷ്ടമായി",
      en: "Online trading scam: Tirur native loses ₹12 lakh",
    },
    summary: {
      ml: "ഇരട്ടി ലാഭം വാഗ്ദാനം ചെയ്ത വാട്സാപ്പ് ഗ്രൂപ്പ് വഴിയായിരുന്നു തട്ടിപ്പ്. സൈബർ പൊലീസ് അന്വേഷണം തുടങ്ങി.",
      en: "The fraud ran through a WhatsApp group promising double returns. Cyber police are investigating.",
    },
    body: {
      ml: [
        "ഓഹരി വിപണിയിൽ നിക്ഷേപിച്ചാൽ ഇരട്ടി ലാഭം നേടാമെന്ന് വിശ്വസിപ്പിച്ച് തിരൂർ സ്വദേശിയായ വ്യാപാരിയിൽ നിന്ന് 12 ലക്ഷം രൂപ തട്ടിയെടുത്തു. വാട്സാപ്പ് ഗ്രൂപ്പ് വഴി പരിചയപ്പെട്ട സംഘമാണ് തട്ടിപ്പിന് പിന്നിൽ.",
        "വ്യാജ ട്രേഡിങ് ആപ്പിൽ ലാഭം കാണിച്ചായിരുന്നു കൂടുതൽ തുക നിക്ഷേപിപ്പിച്ചത്. പണം പിൻവലിക്കാൻ ശ്രമിച്ചപ്പോഴാണ് തട്ടിപ്പ് മനസ്സിലായത്.",
        "ഇത്തരം തട്ടിപ്പുകൾക്കിരയായാൽ ഉടൻ 1930 എന്ന സൈബർ ഹെൽപ്‌ലൈൻ നമ്പറിൽ പരാതിപ്പെടണമെന്ന് പൊലീസ് അറിയിച്ചു.",
      ],
    },
    image: img("cyber-lock"),
    author: "staff",
    minutesAgo: 540,
    views: 9400,
  },
  {
    slug: "nadukani-ghat-road-repair-restrictions",
    category: "kerala",
    district: "malappuram",
    title: {
      ml: "നാടുകാണി ചുരത്തിൽ അറ്റകുറ്റപ്പണി; രണ്ടാഴ്ച ഭാരവാഹനങ്ങൾക്ക് നിയന്ത്രണം",
      en: "Repairs on Nadukani ghat road; heavy vehicles restricted for two weeks",
    },
    summary: {
      ml: "മഴയിൽ തകർന്ന ഭാഗങ്ങളിൽ സംരക്ഷണഭിത്തി നിർമിക്കും. ചരക്കുവാഹനങ്ങൾ വഴിതിരിച്ചുവിടും.",
      en: "Retaining walls will be built where the rain damaged the road. Goods vehicles will be diverted.",
    },
    body: {
      ml: [
        "മഴയിൽ തകർന്ന നാടുകാണി ചുരം റോഡിൽ അറ്റകുറ്റപ്പണി ആരംഭിച്ചു. പണി നടക്കുന്ന രണ്ടാഴ്ച ഭാരവാഹനങ്ങൾക്ക് ചുരത്തിലൂടെയുള്ള യാത്ര നിരോധിച്ചു.",
        "ചെറുവാഹനങ്ങൾ നിയന്ത്രണങ്ങളോടെ കടത്തിവിടും. ഗൂഡല്ലൂർ ഭാഗത്തേക്കുള്ള ചരക്കുവാഹനങ്ങൾ മറ്റ് ചുരങ്ങൾ വഴി തിരിച്ചുവിടുമെന്ന് പൊലീസ് അറിയിച്ചു.",
      ],
    },
    image: img("ghat-road"),
    author: "rasheed",
    minutesAgo: 600,
    views: 7600,
  },
  {
    slug: "kondotty-mappilappattu-festival",
    category: "entertainment",
    district: "malappuram",
    title: {
      ml: "കൊണ്ടോട്ടിയിൽ മാപ്പിളപ്പാട്ട് ഉത്സവം; മൂന്നുദിവസം ഇശൽ രാവുകൾ",
      en: "Mappilappattu festival in Kondotty: three nights of ‘ishal’ music",
    },
    summary: {
      ml: "പുതുതലമുറ ഗായകരും പ്രമുഖ കലാകാരന്മാരും അണിനിരക്കുന്ന ഉത്സവം വെള്ളിയാഴ്ച തുടങ്ങും.",
      en: "The festival, featuring young singers and veteran artists, begins on Friday.",
    },
    body: {
      ml: [
        "മാപ്പിളപ്പാട്ടിന്റെ ഈറ്റില്ലമായ കൊണ്ടോട്ടിയിൽ മൂന്നുദിവസത്തെ ഇശൽ ഉത്സവത്തിന് വെള്ളിയാഴ്ച തുടക്കമാകും. പ്രമുഖ ഗായകരും പുതുതലമുറ കലാകാരന്മാരും വേദിയിലെത്തും.",
        "മാപ്പിളപ്പാട്ടിന്റെ ചരിത്രം പരിചയപ്പെടുത്തുന്ന പ്രദർശനവും സെമിനാറും ഉത്സവത്തിന്റെ ഭാഗമായി നടക്കും. പ്രവേശനം സൗജന്യമാണ്.",
      ],
    },
    image: img("concert"),
    author: "athira",
    minutesAgo: 720,
    views: 6100,
  },

  // ───────────── Kerala ─────────────
  {
    slug: "stray-dog-abc-centres-vaccination",
    category: "kerala",
    title: {
      ml: "തെരുവുനായ ശല്യം: എല്ലാ ജില്ലകളിലും എബിസി കേന്ദ്രങ്ങൾ, വാക്സിനേഷൻ യജ്ഞം",
      en: "Stray dog menace: ABC centres in every district and a vaccination drive",
    },
    summary: {
      ml: "മൂന്നുമാസത്തിനകം രണ്ടുലക്ഷം തെരുവുനായ്ക്കൾക്ക് പ്രതിരോധ കുത്തിവയ്പ് നൽകാൻ തദ്ദേശ വകുപ്പ്.",
      en: "The local self-government department aims to vaccinate two lakh stray dogs within three months.",
    },
    body: {
      ml: [
        "തെരുവുനായ ആക്രമണങ്ങൾ വർധിക്കുന്ന സാഹചര്യത്തിൽ എല്ലാ ജില്ലകളിലും അനിമൽ ബർത്ത് കൺട്രോൾ (എബിസി) കേന്ദ്രങ്ങൾ ആരംഭിക്കാൻ തദ്ദേശ സ്വയംഭരണ വകുപ്പ് തീരുമാനിച്ചു.",
        "മൂന്നുമാസം നീളുന്ന വാക്സിനേഷൻ യജ്ഞത്തിൽ രണ്ടുലക്ഷം നായ്ക്കൾക്ക് പേവിഷ പ്രതിരോധ കുത്തിവയ്പ് നൽകും. ഹോട്ട്സ്പോട്ടുകളായി കണ്ടെത്തിയ പ്രദേശങ്ങൾക്ക് മുൻഗണന നൽകും.",
      ],
    },
    image: img("stray-dogs"),
    author: "anoop",
    minutesAgo: 380,
    views: 10100,
  },
  {
    slug: "ksrtc-120-new-buses",
    category: "kerala",
    title: {
      ml: "കെഎസ്ആർടിസിക്ക് 120 പുതിയ ബസുകൾ; ദീർഘദൂര റൂട്ടുകളിൽ എസി സർവീസ്",
      en: "KSRTC gets 120 new buses; AC services on long-distance routes",
    },
    summary: {
      ml: "മലബാർ മേഖലയ്ക്ക് 40 ബസുകൾ. മലപ്പുറം–തിരുവനന്തപുരം റൂട്ടിൽ സ്ലീപ്പർ ബസ്.",
      en: "Forty buses for the Malabar region, including a sleeper on the Malappuram–Thiruvananthapuram route.",
    },
    body: {
      ml: [
        "കെഎസ്ആർടിസി 120 പുതിയ ബസുകൾ കൂടി നിരത്തിലിറക്കുന്നു. ഇതിൽ 40 ബസുകൾ മലബാർ മേഖലയിലെ ഡിപ്പോകൾക്കാണ് അനുവദിച്ചിരിക്കുന്നത്.",
        "മലപ്പുറം–തിരുവനന്തപുരം, കോഴിക്കോട്–ബെംഗളൂരു റൂട്ടുകളിൽ എസി സ്ലീപ്പർ സർവീസുകൾ ആരംഭിക്കും. ഓൺലൈൻ റിസർവേഷൻ സൗകര്യവും ലഭ്യമാക്കും.",
      ],
    },
    image: img("bus"),
    author: "anoop",
    minutesAgo: 450,
    views: 9800,
  },
  {
    slug: "fever-cases-rise-special-clinics",
    category: "health",
    title: {
      ml: "പനിബാധിതരുടെ എണ്ണം കൂടുന്നു; ആശുപത്രികളിൽ പ്രത്യേക പനി ക്ലിനിക്കുകൾ",
      en: "Fever cases on the rise; special fever clinics open at hospitals",
    },
    summary: {
      ml: "ഡെങ്കിപ്പനി, എലിപ്പനി എന്നിവയ്ക്കെതിരെ ജാഗ്രത പാലിക്കണമെന്ന് ആരോഗ്യവകുപ്പ്.",
      en: "The health department has urged caution against dengue and leptospirosis.",
    },
    body: {
      ml: [
        "മഴ തുടരുന്ന സാഹചര്യത്തിൽ സംസ്ഥാനത്ത് പനിബാധിതരുടെ എണ്ണം വർധിക്കുന്നു. കഴിഞ്ഞ ഒരാഴ്ചയ്ക്കിടെ പതിനായിരത്തിലേറെ പേർ പനിക്ക് ചികിത്സ തേടി.",
        "താലൂക്ക്, ജില്ലാ ആശുപത്രികളിൽ പ്രത്യേക പനി ക്ലിനിക്കുകൾ തുറന്നു. വെള്ളക്കെട്ടുള്ള പ്രദേശങ്ങളിൽ ജോലി ചെയ്യുന്നവർ എലിപ്പനി പ്രതിരോധ ഗുളിക കഴിക്കണമെന്നും വീടിനു ചുറ്റും വെള്ളം കെട്ടിനിൽക്കാൻ അനുവദിക്കരുതെന്നും ആരോഗ്യവകുപ്പ് നിർദേശിച്ചു.",
      ],
    },
    image: img("hospital-reception"),
    author: "staff",
    minutesAgo: 520,
    views: 7400,
  },
  {
    slug: "coconut-price-record-high",
    category: "business",
    title: {
      ml: "നാളികേര വില റെക്കോർഡിൽ; കിലോയ്ക്ക് 72 രൂപ",
      en: "Coconut prices hit a record ₹72 a kg",
    },
    summary: {
      ml: "ഉൽപാദനക്കുറവും വെളിച്ചെണ്ണയ്ക്കുള്ള ആവശ്യവും വില ഉയർത്തി. കർഷകർക്ക് ആശ്വാസം.",
      en: "Lower output and strong demand for coconut oil push prices up, bringing relief to farmers.",
    },
    body: {
      ml: [
        "സംസ്ഥാനത്ത് പച്ചത്തേങ്ങയുടെ വില കിലോയ്ക്ക് 72 രൂപയായി ഉയർന്ന് റെക്കോർഡിട്ടു. ഒരു വർഷത്തിനിടെ വിലയിൽ ഇരട്ടിയോളം വർധനയാണുണ്ടായത്.",
        "ഉൽപാദനത്തിലെ ഇടിവും വെളിച്ചെണ്ണയ്ക്ക് ആഭ്യന്തര, വിദേശ വിപണികളിൽ ആവശ്യം വർധിച്ചതുമാണ് കാരണം. വില ഉയർന്നത് കർഷകർക്ക് ആശ്വാസമാണെങ്കിലും വെളിച്ചെണ്ണ വില കൂടുന്നത് ഉപഭോക്താക്കൾക്ക് തിരിച്ചടിയാകും.",
      ],
    },
    image: img("coconuts"),
    author: "staff",
    minutesAgo: 660,
    views: 6900,
  },
  {
    slug: "sea-erosion-coastal-houses-threat",
    category: "kerala",
    title: {
      ml: "തീരദേശത്ത് കടലാക്രമണം രൂക്ഷം; നൂറിലേറെ വീടുകൾ ഭീഷണിയിൽ",
      en: "Sea erosion intensifies along the coast; over 100 houses under threat",
    },
    summary: {
      ml: "ടെട്രാപോഡ് കടൽഭിത്തി നിർമാണം വേഗത്തിലാക്കണമെന്ന് മത്സ്യത്തൊഴിലാളികൾ.",
      en: "Fishermen demand faster construction of tetrapod sea walls.",
    },
    body: {
      ml: [
        "ശക്തമായ തിരമാലകളെ തുടർന്ന് സംസ്ഥാനത്തിന്റെ വിവിധ തീരപ്രദേശങ്ങളിൽ കടലാക്രമണം രൂക്ഷമായി. പൊന്നാനി, ചെല്ലാനം, വലിയതുറ മേഖലകളിൽ നൂറിലേറെ വീടുകൾ ഭീഷണിയിലാണ്.",
        "ടെട്രാപോഡ് ഉപയോഗിച്ചുള്ള കടൽഭിത്തി നിർമാണം വേഗത്തിലാക്കണമെന്നാവശ്യപ്പെട്ട് മത്സ്യത്തൊഴിലാളികൾ പ്രതിഷേധിച്ചു. ദുരിതബാധിത കുടുംബങ്ങളെ ക്യാമ്പുകളിലേക്ക് മാറ്റി.",
      ],
    },
    image: img("sea-waves"),
    author: "anoop",
    minutesAgo: 840,
    views: 5600,
  },
  {
    slug: "houseboat-bookings-surge",
    category: "business",
    title: {
      ml: "ടൂറിസം സീസൺ: ഹൗസ്ബോട്ട് ബുക്കിങ്ങിൽ 35% വർധന",
      en: "Tourism season: houseboat bookings up 35%",
    },
    summary: {
      ml: "ക്രിസ്മസ്–പുതുവത്സര അവധിക്കാലത്തേക്ക് ആലപ്പുഴയിലും കുമരകത്തും ഭൂരിഭാഗം ബോട്ടുകളും ബുക്ക് ചെയ്തുകഴിഞ്ഞു.",
      en: "Most boats in Alappuzha and Kumarakom are already booked for the Christmas–New Year holidays.",
    },
    body: {
      ml: [
        "ടൂറിസം സീസൺ ആരംഭിച്ചതോടെ ആലപ്പുഴയിലും കുമരകത്തും ഹൗസ്ബോട്ട് ബുക്കിങ്ങിൽ കഴിഞ്ഞ വർഷത്തേക്കാൾ 35 ശതമാനം വർധന. ആഭ്യന്തര സഞ്ചാരികളാണ് കൂടുതലും.",
        "ക്രിസ്മസ്–പുതുവത്സര അവധിക്കാലത്തേക്കുള്ള ബുക്കിങ് ഏറെക്കുറെ പൂർത്തിയായതായി ഹൗസ്ബോട്ട് ഉടമകൾ പറയുന്നു.",
      ],
    },
    image: img("houseboat"),
    author: "desk",
    minutesAgo: 1200,
    views: 5100,
  },
  {
    slug: "kochi-solar-ferry-service",
    category: "kerala",
    title: {
      ml: "കൊച്ചി കായലിൽ പുതിയ സോളാർ ഫെറി; ടിക്കറ്റ് നിരക്ക് 20 രൂപ",
      en: "New solar ferry on Kochi backwaters; tickets at ₹20",
    },
    summary: {
      ml: "75 പേർക്ക് യാത്ര ചെയ്യാവുന്ന ബോട്ട് വൈപ്പിൻ–ഫോർട്ട് കൊച്ചി റൂട്ടിൽ സർവീസ് നടത്തും.",
      en: "The 75-seat boat will run on the Vypin–Fort Kochi route.",
    },
    body: {
      ml: [
        "ജലഗതാഗത വകുപ്പിന്റെ പുതിയ സോളാർ ഫെറി വൈപ്പിൻ–ഫോർട്ട് കൊച്ചി റൂട്ടിൽ സർവീസ് ആരംഭിച്ചു. ഒരേസമയം 75 യാത്രക്കാർക്ക് സഞ്ചരിക്കാം.",
        "ഇന്ധനച്ചെലവ് ഇല്ലാത്തതിനാൽ പ്രവർത്തനച്ചെലവ് ഗണ്യമായി കുറയും. വിജയകരമായാൽ ആലപ്പുഴ, കോട്ടയം റൂട്ടുകളിലേക്കും സോളാർ ഫെറികൾ വ്യാപിപ്പിക്കും.",
      ],
    },
    image: img("ferry"),
    author: "desk",
    minutesAgo: 1440,
    views: 8300,
  },

  // ───────────── India ─────────────
  {
    slug: "parliament-winter-session-monday",
    category: "india",
    title: {
      ml: "പാർലമെന്റ് ശീതകാല സമ്മേളനം തിങ്കളാഴ്ച തുടങ്ങും; 16 ബില്ലുകൾ പരിഗണനയ്ക്ക്",
      en: "Parliament's winter session begins Monday; 16 bills on the agenda",
    },
    summary: {
      ml: "സമ്മേളനം സുഗമമായി നടത്താൻ സർക്കാർ സർവകക്ഷി യോഗം വിളിച്ചു.",
      en: "The government has called an all-party meeting to ensure the session runs smoothly.",
    },
    body: {
      ml: [
        "പാർലമെന്റിന്റെ ശീതകാല സമ്മേളനം തിങ്കളാഴ്ച ആരംഭിക്കും. ഡിസംബർ 19 വരെ നീളുന്ന സമ്മേളനത്തിൽ 16 ബില്ലുകൾ പരിഗണനയ്ക്കെത്തും.",
        "സമ്മേളനത്തിന് മുന്നോടിയായി സർക്കാർ ഞായറാഴ്ച സർവകക്ഷി യോഗം വിളിച്ചിട്ടുണ്ട്. വിലക്കയറ്റവും തൊഴിലില്ലായ്മയും ഉന്നയിക്കാനാണ് പ്രതിപക്ഷത്തിന്റെ നീക്കം.",
      ],
    },
    image: img("north-block"),
    author: "desk",
    minutesAgo: 50,
    views: 15900,
  },
  {
    slug: "bay-of-bengal-cyclone-alert",
    category: "india",
    title: {
      ml: "ബംഗാൾ ഉൾക്കടലിൽ ന്യൂനമർദം ചുഴലിക്കാറ്റാകും; തമിഴ്നാട്, ആന്ധ്ര തീരങ്ങളിൽ ജാഗ്രത",
      en: "Bay of Bengal depression to become a cyclone; alert on Tamil Nadu, Andhra coasts",
    },
    summary: {
      ml: "കേരളത്തിലും അടുത്ത മൂന്നുദിവസം വ്യാപക മഴയ്ക്ക് സാധ്യതയെന്ന് കാലാവസ്ഥാ വകുപ്പ്.",
      en: "Widespread rain is also likely in Kerala over the next three days, the weather department said.",
    },
    body: {
      ml: [
        "തെക്കുകിഴക്കൻ ബംഗാൾ ഉൾക്കടലിൽ രൂപപ്പെട്ട തീവ്രന്യൂനമർദം അടുത്ത 24 മണിക്കൂറിനകം ചുഴലിക്കാറ്റായി ശക്തിപ്രാപിക്കുമെന്ന് കേന്ദ്ര കാലാവസ്ഥാ വകുപ്പ് അറിയിച്ചു.",
        "തമിഴ്നാട്, ആന്ധ്രപ്രദേശ് തീരങ്ങളിൽ ജാഗ്രതാ നിർദേശം നൽകി. ഇതിന്റെ സ്വാധീനത്തിൽ കേരളത്തിലും അടുത്ത മൂന്നുദിവസം വ്യാപക മഴയ്ക്ക് സാധ്യതയുണ്ട്.",
      ],
    },
    image: img("rain-glass"),
    author: "desk",
    minutesAgo: 130,
    views: 12400,
  },
  {
    slug: "delhi-air-pollution-severe",
    category: "india",
    title: {
      ml: "ഡൽഹിയിൽ വായുമലിനീകരണം ഗുരുതരം; സ്കൂളുകൾ ഓൺലൈനിലേക്ക്",
      en: "Delhi air pollution turns severe; schools move online",
    },
    summary: {
      ml: "വായു ഗുണനിലവാര സൂചിക 450 കടന്നു. നിർമാണ പ്രവർത്തനങ്ങൾക്ക് വിലക്ക്.",
      en: "The air quality index crossed 450 and construction work has been halted.",
    },
    body: {
      ml: [
        "രാജ്യതലസ്ഥാനത്ത് വായുമലിനീകരണം ‘ഗുരുതര’ വിഭാഗത്തിലെത്തി. പലയിടങ്ങളിലും വായു ഗുണനിലവാര സൂചിക 450 കടന്നു.",
        "പ്രൈമറി സ്കൂളുകളിലെ ക്ലാസുകൾ ഓൺലൈനാക്കി. നിർമാണ പ്രവർത്തനങ്ങൾക്കും ഡീസൽ ട്രക്കുകളുടെ പ്രവേശനത്തിനും നിയന്ത്രണം ഏർപ്പെടുത്തി.",
      ],
    },
    image: img("india-gate"),
    author: "desk",
    minutesAgo: 270,
    views: 8800,
  },
  {
    slug: "new-sleeper-trains-south-india",
    category: "india",
    title: {
      ml: "ദക്ഷിണേന്ത്യയ്ക്ക് പുതിയ സ്ലീപ്പർ ട്രെയിനുകൾ; കേരളത്തിന് രണ്ടെണ്ണം",
      en: "New sleeper trains for south India; two for Kerala",
    },
    summary: {
      ml: "തിരുവനന്തപുരം–ബെംഗളൂരു, മംഗളൂരു–ചെന്നൈ റൂട്ടുകളിൽ അടുത്ത വർഷം സർവീസ് തുടങ്ങും.",
      en: "Services on the Thiruvananthapuram–Bengaluru and Mangaluru–Chennai routes start next year.",
    },
    body: {
      ml: [
        "ദക്ഷിണ റെയിൽവേയ്ക്ക് അനുവദിച്ച പുതിയ സ്ലീപ്പർ ട്രെയിനുകളിൽ രണ്ടെണ്ണം കേരളത്തിലൂടെ സർവീസ് നടത്തും. തിരുവനന്തപുരം–ബെംഗളൂരു, മംഗളൂരു–ചെന്നൈ റൂട്ടുകളിലാണ് സർവീസ്.",
        "മണിക്കൂറിൽ 160 കിലോമീറ്റർ വരെ വേഗമെടുക്കാവുന്ന ട്രെയിനുകൾ യാത്രാസമയം ഗണ്യമായി കുറയ്ക്കും.",
      ],
    },
    image: img("railway-station"),
    author: "desk",
    minutesAgo: 480,
    views: 9300,
  },
  {
    slug: "communication-satellite-launch",
    category: "india",
    title: {
      ml: "പുതിയ ആശയവിനിമയ ഉപഗ്രഹം അടുത്ത മാസം വിക്ഷേപിക്കും",
      en: "New communication satellite to be launched next month",
    },
    summary: {
      ml: "ഗ്രാമീണ മേഖലകളിൽ ബ്രോഡ്ബാൻഡ് സൗകര്യം മെച്ചപ്പെടുത്തുകയാണ് ലക്ഷ്യം.",
      en: "The aim is to improve broadband connectivity in rural areas.",
    },
    body: {
      ml: [
        "ഗ്രാമീണ മേഖലകളിൽ ഇന്റർനെറ്റ് സൗകര്യം മെച്ചപ്പെടുത്താൻ ലക്ഷ്യമിട്ടുള്ള പുതിയ ആശയവിനിമയ ഉപഗ്രഹം അടുത്ത മാസം ശ്രീഹരിക്കോട്ടയിൽ നിന്ന് വിക്ഷേപിക്കും.",
        "ദുരന്തനിവാരണ പ്രവർത്തനങ്ങൾക്കും മത്സ്യത്തൊഴിലാളികൾക്കുള്ള മുന്നറിയിപ്പ് സംവിധാനങ്ങൾക്കും ഉപഗ്രഹം സഹായകമാകും.",
      ],
    },
    image: img("earth-night"),
    author: "desk",
    minutesAgo: 780,
    views: 6600,
  },
  {
    slug: "sensex-record-high",
    category: "business",
    title: {
      ml: "ഓഹരി വിപണിയിൽ കുതിപ്പ്; സെൻസെക്സ് പുതിയ റെക്കോർഡിൽ",
      en: "Markets rally as the Sensex hits a fresh record",
    },
    summary: {
      ml: "ബാങ്കിങ്, ഐടി ഓഹരികളാണ് മുന്നേറ്റത്തിന് നേതൃത്വം നൽകിയത്.",
      en: "Banking and IT stocks led the rally.",
    },
    body: {
      ml: [
        "വിദേശ നിക്ഷേപകരുടെ വാങ്ങൽ താൽപര്യം തുടർന്നതോടെ ഓഹരി വിപണി പുതിയ ഉയരം കുറിച്ചു. സെൻസെക്സ് 900 പോയിന്റിലേറെ ഉയർന്ന് റെക്കോർഡ് നിലവാരത്തിൽ ക്ലോസ് ചെയ്തു.",
        "ബാങ്കിങ്, ഐടി ഓഹരികളാണ് മുന്നേറ്റത്തിന് നേതൃത്വം നൽകിയത്. രൂപയുടെ മൂല്യത്തിലും നേരിയ പുരോഗതിയുണ്ടായി.",
      ],
    },
    image: img("stock-chart"),
    author: "desk",
    minutesAgo: 200,
    views: 7100,
  },

  // ───────────── World ─────────────
  {
    slug: "climate-summit-new-targets",
    category: "world",
    title: {
      ml: "കാലാവസ്ഥാ ഉച്ചകോടി സമാപിച്ചു; കാർബൺ ബഹിർഗമനം കുറയ്ക്കാൻ പുതിയ ലക്ഷ്യങ്ങൾ",
      en: "Climate summit ends with new emission-cut targets",
    },
    summary: {
      ml: "വികസ്വര രാജ്യങ്ങൾക്കുള്ള കാലാവസ്ഥാ ധനസഹായം ഇരട്ടിയാക്കാനും ധാരണ.",
      en: "Countries also agreed to double climate finance for developing nations.",
    },
    body: {
      ml: [
        "രണ്ടാഴ്ച നീണ്ട ആഗോള കാലാവസ്ഥാ ഉച്ചകോടി കാർബൺ ബഹിർഗമനം കുറയ്ക്കാനുള്ള പുതിയ ലക്ഷ്യങ്ങളോടെ സമാപിച്ചു. 2035-ഓടെ ബഹിർഗമനം ഗണ്യമായി കുറയ്ക്കാൻ അംഗരാജ്യങ്ങൾ ധാരണയിലെത്തി.",
        "കാലാവസ്ഥാ വ്യതിയാനത്തിന്റെ ആഘാതം നേരിടുന്ന വികസ്വര രാജ്യങ്ങൾക്കുള്ള സാമ്പത്തിക സഹായം ഇരട്ടിയാക്കാനും തീരുമാനമായി.",
      ],
    },
    image: img("world-map"),
    author: "desk",
    minutesAgo: 560,
    views: 4100,
  },
  {
    slug: "crude-oil-prices-slide-gulf",
    category: "world",
    title: {
      ml: "അസംസ്കൃത എണ്ണവില ഇടിഞ്ഞു; ഗൾഫ് സമ്പദ്‌വ്യവസ്ഥകൾ ആശങ്കയിൽ",
      en: "Crude oil prices slide, worrying Gulf economies",
    },
    summary: {
      ml: "ബ്രെന്റ് ക്രൂഡ് വില ആറുമാസത്തെ താഴ്ന്ന നിലയിൽ.",
      en: "Brent crude has fallen to a six-month low.",
    },
    body: {
      ml: [
        "ആഗോള വിപണിയിൽ ആവശ്യം കുറഞ്ഞതോടെ അസംസ്കൃത എണ്ണവില ആറുമാസത്തെ ഏറ്റവും താഴ്ന്ന നിലയിലെത്തി.",
        "എണ്ണവരുമാനത്തെ ആശ്രയിക്കുന്ന ഗൾഫ് രാജ്യങ്ങളുടെ ബജറ്റിനെ വിലയിടിവ് ബാധിച്ചേക്കും. ഇത് പ്രവാസികളുടെ തൊഴിൽ മേഖലയെയും സ്വാധീനിക്കുമോ എന്ന ആശങ്കയുമുണ്ട്.",
      ],
    },
    image: img("oil-chart"),
    author: "desk",
    minutesAgo: 900,
    views: 3900,
  },

  // ───────────── Politics ─────────────
  {
    slug: "local-body-bypolls-december-10",
    category: "politics",
    title: {
      ml: "തദ്ദേശ ഉപതിരഞ്ഞെടുപ്പ്: 14 വാർഡുകളിൽ ഡിസംബർ 10-ന് വോട്ടെടുപ്പ്",
      en: "Local body by-elections: polling in 14 wards on December 10",
    },
    summary: {
      ml: "മലപ്പുറം ജില്ലയിലെ മൂന്ന് വാർഡുകളും പട്ടികയിൽ. വോട്ടെണ്ണൽ ഡിസംബർ 11-ന്.",
      en: "Three wards in Malappuram district are on the list; votes will be counted on December 11.",
    },
    body: {
      ml: [
        "സംസ്ഥാനത്തെ 14 തദ്ദേശ വാർഡുകളിലേക്കുള്ള ഉപതിരഞ്ഞെടുപ്പ് ഡിസംബർ 10-ന് നടക്കും. വോട്ടെണ്ണൽ പിറ്റേന്ന് നടക്കുമെന്ന് സംസ്ഥാന തിരഞ്ഞെടുപ്പ് കമ്മിഷൻ അറിയിച്ചു.",
        "നാമനിർദേശ പത്രിക നവംബർ 28 വരെ സമർപ്പിക്കാം. തിരഞ്ഞെടുപ്പ് നടക്കുന്ന വാർഡുകളിൽ പെരുമാറ്റച്ചട്ടം നിലവിൽ വന്നു.",
      ],
    },
    image: img("ballot-box"),
    author: "anoop",
    minutesAgo: 170,
    views: 10600,
  },
  {
    slug: "assembly-session-from-tomorrow",
    category: "politics",
    title: {
      ml: "നിയമസഭാ സമ്മേളനം നാളെ മുതൽ; വിലക്കയറ്റം ചർച്ചയാക്കാൻ പ്രതിപക്ഷം",
      en: "Assembly session from tomorrow; opposition to raise price rise",
    },
    summary: {
      ml: "12 ദിവസം നീളുന്ന സമ്മേളനത്തിൽ ഏഴ് ബില്ലുകൾ അവതരിപ്പിക്കും.",
      en: "Seven bills will be introduced during the 12-day session.",
    },
    body: {
      ml: [
        "നിയമസഭയുടെ സമ്മേളനം നാളെ ആരംഭിക്കും. 12 ദിവസം നീളുന്ന സമ്മേളനത്തിൽ ഏഴ് ബില്ലുകൾ അവതരിപ്പിക്കും.",
        "അവശ്യസാധനങ്ങളുടെ വിലക്കയറ്റവും തീരദേശത്തെ കടലാക്രമണവും സഭയിൽ ഉന്നയിക്കാനാണ് പ്രതിപക്ഷ തീരുമാനം.",
      ],
    },
    image: img("flag-sky"),
    author: "anoop",
    minutesAgo: 430,
    views: 7800,
  },

  // ───────────── Crime ─────────────
  {
    slug: "jewellery-heist-case-verdict",
    category: "crime",
    title: {
      ml: "ജ്വല്ലറി കവർച്ചക്കേസ്: മൂന്നുപ്രതികൾക്കും ഏഴുവർഷം തടവ്",
      en: "Jewellery heist case: three accused get seven years in prison",
    },
    summary: {
      ml: "രണ്ടുവർഷം മുൻപ് നടന്ന കവർച്ചയിൽ ശാസ്ത്രീയ തെളിവുകൾ നിർണായകമായി.",
      en: "Scientific evidence proved decisive in the robbery case from two years ago.",
    },
    body: {
      ml: [
        "രണ്ടുവർഷം മുൻപ് നഗരത്തിലെ ജ്വല്ലറിയിൽ നടന്ന കവർച്ചക്കേസിൽ മൂന്നുപ്രതികൾക്കും ഏഴുവർഷം കഠിനതടവും 50,000 രൂപ വീതം പിഴയും കോടതി വിധിച്ചു.",
        "സിസിടിവി ദൃശ്യങ്ങളും വിരലടയാളം ഉൾപ്പെടെയുള്ള ശാസ്ത്രീയ തെളിവുകളുമാണ് കേസിൽ നിർണായകമായതെന്ന് പ്രോസിക്യൂഷൻ പറഞ്ഞു.",
      ],
    },
    image: img("lady-justice"),
    author: "staff",
    minutesAgo: 390,
    views: 11200,
  },
  {
    slug: "atm-skimming-gang-busted",
    category: "crime",
    title: {
      ml: "എടിഎം സ്കിമ്മിങ്: അന്തർസംസ്ഥാന സംഘം പിടിയിൽ",
      en: "ATM skimming: inter-state gang busted",
    },
    summary: {
      ml: "എടിഎം കൗണ്ടറുകളിൽ രഹസ്യ ഉപകരണം ഘടിപ്പിച്ച് കാർഡ് വിവരങ്ങൾ ചോർത്തിയായിരുന്നു തട്ടിപ്പ്.",
      en: "The gang stole card details using hidden devices fitted at ATM counters.",
    },
    body: {
      ml: [
        "എടിഎം കൗണ്ടറുകളിൽ സ്കിമ്മിങ് ഉപകരണം ഘടിപ്പിച്ച് ഇടപാടുകാരുടെ കാർഡ് വിവരങ്ങൾ ചോർത്തി പണം തട്ടിയ അന്തർസംസ്ഥാന സംഘത്തിലെ നാലുപേരെ പൊലീസ് പിടികൂടി.",
        "സംസ്ഥാനത്തെ വിവിധ ജില്ലകളിൽ നിന്നായി 40-ലേറെ പേർക്ക് പണം നഷ്ടമായിട്ടുണ്ട്. എടിഎം ഉപയോഗിക്കുമ്പോൾ പിൻ നമ്പർ കൈകൊണ്ട് മറച്ച് ടൈപ്പ് ചെയ്യണമെന്ന് പൊലീസ് നിർദേശിച്ചു.",
      ],
    },
    image: img("atm"),
    author: "staff",
    minutesAgo: 1380,
    views: 13900,
  },

  // ───────────── Sports ─────────────
  {
    slug: "kerala-under-19-squad-malappuram",
    category: "sports",
    title: {
      ml: "അണ്ടർ 19 ക്രിക്കറ്റ്: കേരള ടീമിൽ മലപ്പുറത്തുനിന്ന് രണ്ടുപേർ",
      en: "Under-19 cricket: two from Malappuram make the Kerala squad",
    },
    summary: {
      ml: "കൂച്ച് ബിഹാർ ട്രോഫിക്കുള്ള 15 അംഗ ടീമിനെ പ്രഖ്യാപിച്ചു.",
      en: "The 15-member squad for the Cooch Behar Trophy has been announced.",
    },
    body: {
      ml: [
        "കൂച്ച് ബിഹാർ ട്രോഫി അണ്ടർ 19 ക്രിക്കറ്റ് ടൂർണമെന്റിനുള്ള 15 അംഗ കേരള ടീമിനെ പ്രഖ്യാപിച്ചു. മലപ്പുറം ജില്ലയിൽ നിന്നുള്ള രണ്ട് താരങ്ങൾ ടീമിൽ ഇടംനേടി.",
        "ജില്ലയിലെ ക്രിക്കറ്റ് അക്കാദമികളുടെ മികച്ച പ്രവർത്തനത്തിന്റെ ഫലമാണ് ഈ നേട്ടമെന്ന് ജില്ലാ ക്രിക്കറ്റ് അസോസിയേഷൻ ഭാരവാഹികൾ പറഞ്ഞു. ടീം ഡിസംബർ ആദ്യവാരം ആദ്യ മത്സരത്തിനിറങ്ങും.",
      ],
    },
    image: img("cricket-batsman"),
    author: "jishnu",
    minutesAgo: 150,
    views: 9100,
  },
  {
    slug: "india-odi-squad-announcement",
    category: "sports",
    title: {
      ml: "ഏകദിന പരമ്പര: ഇന്ത്യൻ ടീം പ്രഖ്യാപനം ഇന്ന്; യുവതാരങ്ങൾക്ക് സാധ്യത",
      en: "ODI series: India squad to be named today; young players in contention",
    },
    summary: {
      ml: "ലോകകപ്പ് മുന്നൊരുക്കത്തിന്റെ ഭാഗമായി പുതുമുഖങ്ങൾക്ക് അവസരം നൽകിയേക്കും.",
      en: "Newcomers may get a chance as part of World Cup preparations.",
    },
    body: {
      ml: [
        "അടുത്ത മാസം ആരംഭിക്കുന്ന ഏകദിന പരമ്പരയ്ക്കുള്ള ഇന്ത്യൻ ടീമിനെ ഇന്ന് പ്രഖ്യാപിക്കും. ആഭ്യന്തര ക്രിക്കറ്റിൽ തിളങ്ങിയ യുവതാരങ്ങൾക്ക് അവസരം ലഭിച്ചേക്കും.",
        "2027 ഏകദിന ലോകകപ്പിനുള്ള മുന്നൊരുക്കത്തിന്റെ ഭാഗമായി ടീമിൽ പരീക്ഷണങ്ങൾക്ക് സെലക്ടർമാർ തയാറായേക്കുമെന്നാണ് സൂചന.",
      ],
    },
    image: img("cricket-stadium"),
    author: "jishnu",
    minutesAgo: 245,
    views: 18800,
  },
  {
    slug: "champions-boat-league-final",
    category: "sports",
    title: {
      ml: "ചാമ്പ്യൻസ് ബോട്ട് ലീഗ് ഫൈനൽ ശനിയാഴ്ച; ഒമ്പത് ചുണ്ടൻ വള്ളങ്ങൾ മാറ്റുരയ്ക്കും",
      en: "Champions Boat League final on Saturday; nine snake boats to compete",
    },
    summary: {
      ml: "കൊല്ലം അഷ്ടമുടിക്കായലിലാണ് ഫൈനൽ. കാണികൾക്കായി പ്രത്യേക ഗാലറി.",
      en: "The final will be held on Ashtamudi Lake in Kollam, with special galleries for spectators.",
    },
    body: {
      ml: [
        "ചാമ്പ്യൻസ് ബോട്ട് ലീഗ് സീസണിലെ ഫൈനൽ മത്സരം ശനിയാഴ്ച കൊല്ലം അഷ്ടമുടിക്കായലിൽ നടക്കും. ഒമ്പത് ചുണ്ടൻ വള്ളങ്ങളാണ് ഫൈനലിൽ മാറ്റുരയ്ക്കുന്നത്.",
        "പോയിന്റ് പട്ടികയിൽ മുന്നിലുള്ള രണ്ട് ടീമുകൾ തമ്മിലുള്ള വാശിയേറിയ പോരാട്ടമാണ് പ്രതീക്ഷിക്കുന്നത്. കാണികൾക്കായി കായലോരത്ത് പ്രത്യേക ഗാലറികൾ ഒരുക്കിയിട്ടുണ്ട്.",
      ],
    },
    image: img("boat-race"),
    author: "jishnu",
    minutesAgo: 550,
    views: 10900,
  },

  // ───────────── Entertainment ─────────────
  {
    slug: "iffk-delegate-registration",
    category: "entertainment",
    title: {
      ml: "രാജ്യാന്തര ചലച്ചിത്രമേള: ഡെലിഗേറ്റ് രജിസ്ട്രേഷൻ തുടങ്ങി; 180 സിനിമകൾ",
      en: "International film festival: delegate registration opens; 180 films lined up",
    },
    summary: {
      ml: "ഡിസംബർ 12 മുതൽ തിരുവനന്തപുരത്ത്. ‘മലയാളം സിനിമ ഇന്ന്’ വിഭാഗത്തിൽ 12 ചിത്രങ്ങൾ.",
      en: "The festival opens in Thiruvananthapuram on December 12, with 12 films in the ‘Malayalam Cinema Today’ section.",
    },
    body: {
      ml: [
        "കേരള രാജ്യാന്തര ചലച്ചിത്രമേളയുടെ ഡെലിഗേറ്റ് രജിസ്ട്രേഷൻ ആരംഭിച്ചു. ഡിസംബർ 12 മുതൽ 19 വരെ തിരുവനന്തപുരത്ത് നടക്കുന്ന മേളയിൽ 70 രാജ്യങ്ങളിൽ നിന്നുള്ള 180 സിനിമകൾ പ്രദർശിപ്പിക്കും.",
        "‘മലയാളം സിനിമ ഇന്ന്’ വിഭാഗത്തിൽ 12 ചിത്രങ്ങളുണ്ട്. വിദ്യാർഥികൾക്ക് രജിസ്ട്രേഷൻ ഫീസിൽ ഇളവുണ്ട്.",
      ],
    },
    image: img("cinema-audience"),
    author: "athira",
    minutesAgo: 70,
    views: 12300,
  },
  {
    slug: "ott-thriller-irul-nadhi",
    category: "entertainment",
    title: {
      ml: "ഒടിടിയിൽ തരംഗമായി മലയാളം ത്രില്ലർ ‘ഇരുൾ നദി’; ഒരാഴ്ചയ്ക്കുള്ളിൽ 2 കോടി കാഴ്ചക്കാർ",
      en: "Malayalam thriller ‘Irul Nadhi’ is an OTT hit with 20 million views in a week",
    },
    summary: {
      ml: "ദേശീയതലത്തിൽ പ്രേക്ഷകർ ഏറ്റെടുത്ത ചിത്രം ആറ് ഭാഷകളിൽ സ്ട്രീം ചെയ്യുന്നു.",
      en: "Embraced by audiences across India, the film is streaming in six languages.",
    },
    body: {
      ml: [
        "മലയാളം ക്രൈം ത്രില്ലർ ‘ഇരുൾ നദി’ ഒടിടി റിലീസിന് പിന്നാലെ ദേശീയതലത്തിൽ ട്രെൻഡിങ്ങായി. ആദ്യ ആഴ്ചയിൽ തന്നെ രണ്ടുകോടിയിലേറെ പേർ ചിത്രം കണ്ടതായി സ്ട്രീമിങ് പ്ലാറ്റ്ഫോം അറിയിച്ചു.",
        "ആറ് ഭാഷകളിൽ സബ്ടൈറ്റിലോടെയും ഡബ്ബിങ്ങോടെയുമാണ് ചിത്രം ലഭ്യമാക്കിയിരിക്കുന്നത്.",
      ],
    },
    image: img("video-editing"),
    author: "athira",
    minutesAgo: 500,
    views: 10400,
  },
];

/** Breaking-news ticker. Each item links to its full story. */
export const BREAKING: { text: Text; slug: string }[] = [
  { slug: "malappuram-heavy-rain-orange-alert", text: { ml: "മലപ്പുറം ജില്ലയിൽ ശക്തമായ മഴ; വിവിധ പ്രദേശങ്ങളിൽ ജാഗ്രതാ നിർദേശം", en: "Heavy rain in Malappuram district; alert issued in several areas" } },
  { slug: "manjeri-mdma-seized-two-arrested", text: { ml: "മഞ്ചേരിയിൽ 120 ഗ്രാം എംഡിഎംഎയുമായി രണ്ടുപേർ പിടിയിൽ", en: "Two held with 120 g of MDMA in Manjeri" } },
  { slug: "dam-shutters-to-be-raised-alert", text: { ml: "ഡാമുകളുടെ ഷട്ടറുകൾ ഇന്ന് ഉയർത്തും; തീരവാസികൾക്ക് ജാഗ്രത", en: "Dam shutters to be raised today; riverside residents on alert" } },
  { slug: "calicut-university-exams-postponed-rain", text: { ml: "കാലിക്കറ്റ് സർവകലാശാല നാളത്തെ പരീക്ഷകൾ മാറ്റിവച്ചു", en: "Calicut University postpones tomorrow's exams" } },
  { slug: "district-school-kalolsavam-manjeri", text: { ml: "ജില്ലാ സ്കൂൾ കലോത്സവത്തിന് മഞ്ചേരിയിൽ തിരിതെളിഞ്ഞു", en: "District school arts festival opens in Manjeri" } },
  { slug: "gulf-kerala-airfares-double", text: { ml: "അവധിക്കാല തിരക്ക്: ഗൾഫ്–കേരള വിമാന നിരക്ക് ഇരട്ടിയായി", en: "Gulf–Kerala airfares double in holiday rush" } },
  { slug: "parliament-winter-session-monday", text: { ml: "പാർലമെന്റ് ശീതകാല സമ്മേളനം തിങ്കളാഴ്ച തുടങ്ങും", en: "Parliament's winter session begins Monday" } },
];
