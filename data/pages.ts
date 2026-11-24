import type { Text } from "@/types";

export type InfoPage = { title: Text; intro: Text; sections: { heading: Text; body: Text }[] };

/** Static pages; in production these come from the CMS. Policy texts are placeholders pending the client's legal review. */
export const PAGES: Record<string, InfoPage> = {
  about: {
    title: { ml: "ഞങ്ങളെക്കുറിച്ച്", en: "About 93Kerala" },
    intro: {
      ml: "മഞ്ചേരി ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന മലയാളം–ഇംഗ്ലീഷ് ഡിജിറ്റൽ വാർത്താ മാധ്യമമാണ് 93കേരള – മലപ്പുറത്തിന്റെ വാർത്താ ശൃംഖല.",
      en: "93Kerala is a Malayalam and English digital news network based in Manjeri – Malappuram's News Network.",
    },
    sections: [
      {
        heading: { ml: "ഞങ്ങളുടെ യാത്ര", en: "Our journey" },
        body: {
          ml: "ഇൻസ്റ്റഗ്രാം, യൂട്യൂബ്, ഫേസ്ബുക്ക് എന്നിവയിലൂടെ പ്രാദേശിക വാർത്തകൾ ജനങ്ങളിലെത്തിച്ചാണ് 93കേരളയുടെ തുടക്കം. ഈ പോർട്ടലിലൂടെ ഓരോ ദിവസവും കൂടുതൽ വാർത്തകൾ, വിശദമായ റിപ്പോർട്ടുകൾ, വീഡിയോകൾ എന്നിവ ഒരിടത്ത് ലഭ്യമാക്കുന്നു.",
          en: "93Kerala began by bringing local news to people through Instagram, YouTube and Facebook. This portal brings more daily stories, in-depth reports and videos together in one place.",
        },
      },
      {
        heading: { ml: "ഞങ്ങളുടെ ശ്രദ്ധ", en: "What we cover" },
        body: {
          ml: "മഞ്ചേരി, മലപ്പുറം ജില്ലയിലെ പ്രാദേശിക വാർത്തകൾക്കാണ് മുൻഗണന. ഒപ്പം കേരളം, ഇന്ത്യ, ഗൾഫ് ഉൾപ്പെടെയുള്ള ലോകവാർത്തകൾ, കായികം, വിനോദം എന്നിവയും.",
          en: "Local news from Manjeri and Malappuram district comes first, alongside Kerala, national and world news (including the Gulf), sport and entertainment.",
        },
      },
    ],
  },
  advertise: {
    title: { ml: "പരസ്യം നൽകാൻ", en: "Advertise With Us" },
    intro: {
      ml: "വെബ്സൈറ്റ്, യൂട്യൂബ്, സോഷ്യൽ മീഡിയ എന്നിവയിലൂടെ മലപ്പുറത്തെയും ഗൾഫിലെയും മലയാളി പ്രേക്ഷകരിലേക്ക് നിങ്ങളുടെ ബ്രാൻഡ് എത്തിക്കൂ.",
      en: "Reach Malayali audiences in Malappuram and the Gulf across our website, YouTube and social channels.",
    },
    sections: [
      {
        heading: { ml: "എന്തുകൊണ്ട് 93കേരള?", en: "Why 93Kerala?" },
        body: {
          ml: "പ്രാദേശിക ബിസിനസുകൾക്ക് അനുയോജ്യമായ പരസ്യ ഇടങ്ങൾ, വ്യക്തമായ പരസ്യ ലേബലുകൾ, മൊബൈൽ-ഫസ്റ്റ് ഡിസൈൻ. ഓരോ പ്ലേസ്മെന്റും വ്യത്യസ്ത കാമ്പെയ്നുകൾക്കായി ബുക്ക് ചെയ്യാം.",
          en: "Placements designed for local businesses, clearly labelled ads and a mobile-first layout. Every placement can be booked for its own campaign.",
        },
      },
    ],
  },
  contact: {
    title: { ml: "ബന്ധപ്പെടുക", en: "Contact Us" },
    intro: {
      ml: "വാർത്താ വിവരങ്ങൾ, പരാതികൾ, പരസ്യ അന്വേഷണങ്ങൾ എന്നിവയ്ക്ക് ഞങ്ങളെ ബന്ധപ്പെടാം.",
      en: "Get in touch with news tips, feedback or advertising enquiries.",
    },
    sections: [
      {
        heading: { ml: "വാർത്താ വിവരങ്ങൾ", en: "News tips" },
        body: {
          ml: "നിങ്ങളുടെ പ്രദേശത്തെ വാർത്തകൾ ചിത്രങ്ങൾ സഹിതം ഇമെയിൽ വഴിയോ വാട്സാപ്പ് വഴിയോ അയയ്ക്കാം. വിവരദാതാക്കളുടെ സ്വകാര്യത സംരക്ഷിക്കും.",
          en: "Send news from your area, with photos, by email or WhatsApp. We protect the privacy of our sources.",
        },
      },
    ],
  },
  privacy: {
    title: { ml: "സ്വകാര്യതാ നയം", en: "Privacy Policy" },
    intro: {
      ml: "വായനക്കാരുടെ സ്വകാര്യത 93കേരള ഗൗരവമായി കാണുന്നു. (ഡെമോ പതിപ്പ് – അന്തിമ നയം നിയമോപദേശത്തോടെ ചേർക്കും.)",
      en: "93Kerala takes readers' privacy seriously. (Demo version – the final policy will be added after legal review.)",
    },
    sections: [
      {
        heading: { ml: "ശേഖരിക്കുന്ന വിവരങ്ങൾ", en: "Information we collect" },
        body: {
          ml: "ഭാഷാ മുൻഗണന പോലുള്ള ക്രമീകരണങ്ങൾ നിങ്ങളുടെ ബ്രൗസറിൽ മാത്രം സൂക്ഷിക്കുന്നു. ഈ ഡെമോ പതിപ്പ് വ്യക്തിഗത വിവരങ്ങൾ ശേഖരിക്കുന്നില്ല.",
          en: "Preferences such as your language choice are stored only in your browser. This demo does not collect personal data.",
        },
      },
      {
        heading: { ml: "പരസ്യങ്ങൾ", en: "Advertising" },
        body: {
          ml: "പരസ്യങ്ങൾ വ്യക്തമായി ലേബൽ ചെയ്തിരിക്കുന്നു. പരസ്യ ട്രാക്കിങ് ബാക്കെൻഡ് സംയോജനത്തോടെ മാത്രമേ ആരംഭിക്കൂ.",
          en: "Advertisements are clearly labelled. Ad tracking will begin only with the backend integration.",
        },
      },
    ],
  },
  terms: {
    title: { ml: "നിബന്ധനകളും വ്യവസ്ഥകളും", en: "Terms and Conditions" },
    intro: {
      ml: "ഈ സൈറ്റ് ഉപയോഗിക്കുന്നതിലൂടെ താഴെപ്പറയുന്ന വ്യവസ്ഥകൾ അംഗീകരിക്കുന്നു. (ഡെമോ പതിപ്പ്.)",
      en: "By using this site you agree to the terms below. (Demo version.)",
    },
    sections: [
      {
        heading: { ml: "ഉള്ളടക്കം", en: "Content" },
        body: {
          ml: "ഈ ഡെമോ പതിപ്പിലെ വാർത്തകളും പരസ്യങ്ങളും സാങ്കൽപികമാണ്. പ്രസിദ്ധീകരണ സമയത്ത് യഥാർഥ ഉള്ളടക്കം 93കേരളയുടെ പകർപ്പവകാശത്തിൽ ആയിരിക്കും.",
          en: "Stories and ads in this demo are fictional. On launch, published content will be the copyright of 93Kerala.",
        },
      },
    ],
  },
};
