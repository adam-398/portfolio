export const languages = {
  en: "English",
  sv: "Svenska",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const en = {
  "meta.description": "Native apps and web tools built in northern Sweden",
  "nav.contact": "Contact",
  "hero.label": "Software studio in northern Sweden",
  "hero.title": "Native apps and web tools,",
  "hero.titleEmphasis": "made for you",
  "hero.intro":
    "I design and build native mobile apps and web tools for small businesses, from first sketch and database design to launch and beyond.",
  "hero.cta": "Get in touch",
} as const;

type UIKey = keyof typeof en;

const sv: Record<UIKey, string> = {
  "meta.description": "Native-appar och webbverktyg byggda i norra Sverige",
  "nav.contact": "Kontakt",
  "hero.label": "Mjukvarustudio i norra Sverige",
  "hero.title": "Native-appar och webbverktyg,",
  "hero.titleEmphasis": "gjorda för dig",
  "hero.intro":
    "Jag designar och bygger native-appar och webbverktyg för småföretag, från första skiss och databasdesign till lansering och vidare.",
  "hero.cta": "Hör av dig",
};

export const ui = { en, sv };
