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
  "hero.intro": `I design and build native mobile apps and web tools for small businesses, from first sketch and database design to launch and beyond.`,
  "hero.cta": "Get in touch",
  "thanks.title": "Thank you for your message!",
  "thanks.text": `I'll get back to you as soon as possible. In the meantime, feel free to check out my`,
  "thanks.link": "projects",
  "about.title": "About",
  "about.intro1": `I’m a software developer living in northern Sweden where I build mobile apps, websites and
web tools, primarily for small businesses, and occasionally for myself when I can’t find
the tool I want.`,
  "about.intro2": `Before changing career direction, I spent more than ten years in hospitality, starting
with hostels and cafés abroad, and culminating in seven years running my own café in
Cambridge. The small business environment is where I learned the value of effective,
simple software, and the frustration of being forced to use clunky, slow tools that don’t
function as expected. Following that direction, I retrained through the Open University,
studying Computing and IT. Along the way, I started building my own apps in Kotlin and
Jetpack Compose, and web tools in React and TypeScript. Some of them are available on the
homepage.`,
  "about.intro3": `I gravitate towards simple, dependable software and apps that work offline, because signal
isn’t guaranteed in a cellar or on a mountain. I can work with you in English or Swedish.
Outside of work when I’m not at a keyboard, I’m usually in the workshop or out walking.
Away from keyboards, I enjoy woodworking, build my own computers, and spend as much time
in the mountains as the weather allows, which is where Trail Weight and Waymark shine.`,
  "contact.title": "Contact",
  "contact.intro": `I’m always happy to discuss new projects, collaborations and ideas. If you’d like to
work together, please use the form, or email me directly.`,
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.message": "Message",
  "contact.form.submit": "Send message",
  "index.title1": "Software developer in northern Sweden",
  "index.title2": "Native apps and web tools, ",
  "index.title2Emphasis": "made for you",
  "index.intro": `Designing and building mobile apps, websites and web tools for small businesses, from
            first sketch and database design to launch and beyond.`,
  "index.intro.button": "Get in touch",
  "index.featuredproject.title1": "Featured project",
  "index.featuredproject.title2": "In development",
  "index.featuredproject.title3": "Counted",
  "index.featuredproject.subtitle": "Ditch the clipboard and count stock in minutes.",
  "index.featuredproject.description": `A stocktaking app for independent cafés, bars and restaurants. Set it up on your
            computer, count on your phone, even without signal, and finish with your order list
            ready.`,
  "index.featuredproject.cta": "Get in touch",
  "index.mobileapps.title": "Mobile apps",
  "index.mobileapps.trailweight.title": "Trail Weight",
  "index.mobileapps.trailweight.description": "Track the weight of your hiking gear.",
  "index.mobileapps.trailweight.status": "Live on Google Play",
  "index.mobileapps.trailweight.tech": "Kotlin, Jetpack Compose, Supabase",
  "index.mobileapps.trailweight.imagealt":
    "Trail Weight showing a pie chart of a 5 kg Kungsleden pack, broken down by gear category",
  "index.mobileapps.waymark.title": "Waymark",
  "index.mobileapps.waymark.description": "Plan and navigate your adventures.",
  "index.mobileapps.waymark.status": "Comming early 2027",
  "index.mobileapps.waymark.tech": "Kotlin, Jetpack Compose, Supabase, MapLibre, Room",
  "index.mobileapps.waymark.imagealt":
    "Waymark showing a topographic map of Norrbotten with a hiking route and saved pins",
  "index.mobileapps.woodworking.title": "Woodworking calculator",
  "index.mobileapps.woodworking.description": "5 cut method calculator for woodworkers.",
  "index.mobileapps.woodworking.status": "Coming soon",
  "index.mobileapps.woodworking.tech": "Kotlin, Jetpack Compose",
  "index.mobileapps.woodworking.imagealt":
    "Woodworking calculator showing a board with a miter cut and the angle and length calculated",
  "index.aboutme.alttext": "Adam at the start of a hike",
  "index.aboutme.title": "About me",
  "index.aboutme.description": `I spent over a decade in hospitality, including seven years running my own café in
            Cambridge, before retraining with the Open University. Now I build apps and web tools
            from northern Sweden, for small businesses and for the things I love, like hiking and
            woodworking.`,
  "index.aboutme.cta": "Learn more about me",
  "index.getintouch.title": "Get in touch",
  "index.getintouch.description": `Tell me about your business, your project or your idea, and I’ll get back to you as soon
            as I can. I’m based in northern Sweden, but I work with clients wherever they are.`,
  "index.getintouch.cta": "Send me a message",
  "projects.meta.title": "Projects | Aurora Laboratories",
  "projects.meta.description": "Apps and tools I’ve built, from stocktaking to hiking.",
  "projects.title": "Projects",
  "projects.subtitle": "Apps and tools I've built, from stocktaking to hiking.",
  "projects.github": "GitHub",
  "projects.counted.status": "In development",
  "projects.counted.title": "Counted",
  "projects.counted.subtitle": "Ditch the clipboard and count stock in minutes.",
  "projects.counted.description": `A stocktaking app for independent cafés, bars and restaurants. Set it up on your computer, count on your phone, even without signal, and finish with your order list ready.`,
  "projects.counted.laptopAlt":
    "Counted dashboard showing a stocktake in progress, with counts for each storage area",
  "projects.counted.phoneAlt":
    "Counting stock on the Counted phone app, with plus and minus buttons for each product",
  "projects.trailweight.status": "Now available on Google Play",
  "projects.trailweight.title": "Trail Weight",
  "projects.trailweight.alt":
    "Trail Weight app showing a list of hiking gear with weights and a total weight",
  "projects.trailweight.desc1": `Trail Weight helps hikers and ultralight backpackers track the weight of their gear and instantly see what's dragging them down. Your kit is sorted from heaviest to lightest with a pie chart showing the weight distribution of each category.`,
  "projects.trailweight.desc2part1": `The app is built with Kotlin and Jetpack Compose, with authentication handled by Supabase, email functionality via Resend, and the code is open source on`,
  "projects.trailweight.desc2part2": `.`,
  "projects.trailweight.cta": "View on Google Play",
  "projects.waymark.status": "Coming early 2027",
  "projects.waymark.title": "Waymark",
  "projects.waymark.alt":
    "Waymark showing a topographic map of the Sarek area with a hiking route and saved pins.",
  "projects.waymark.desc1": `Waymark is a Sweden-focused hiking app for planning and saving your trips. Add routes, cabins (stugor), wind shelters (vindskydd), camping spots and fishing locations, and keep them with you offline, with maps that work without signal.`,
  "projects.waymark.desc2": `It’s built with Kotlin and Jetpack Compose, with Supabase and PostGIS for accounts and geospatial data, and Room for offline storage on the phone. MapLibre powers the maps, using tiles from Lantmäteriet, and Resend handles email.`,
  "projects.woodworking.status": "Coming soon to Google Play",
  "projects.woodworking.title": "Woodworking Helper",
  "projects.woodworking.alt":
    "Woodworking Helper app showing a calculator for the five-cut method to square up a table saw's crosscut sled.",
  "projects.woodworking.desc1": `Not all apps are equally complex, and some solve a single problem. The woodworking helper app is a simple tool that works out exactly how far to adjust your crosscut sled’s fence, using the five-cut method. It’s a small app, but it saves time and solves a real problem alongside providing a quick imperial to metric conversion.`,
  "projects.woodworking.desc2part1": `The app is built with Kotlin and Jetpack Compose and the code is open source on`,
  "projects.woodworking.desc2part2": `.`,
  "projects.norrsken.status": "Coming soon to Google Play",
  "projects.norrsken.title": "Norrsken",
  "projects.norrsken.alt":
    "Norrsken showing the current weather and aurora forecast for Boden kommun.",
  "projects.norrsken.desc1": `Norrsken (Swedish for northern lights) combines real-time weather data with live aurora tracking to help you plan around the weather and northern lights visibility. The app features reactive temperature-based colour coding, custom animated weather effects for rain and snow, and clean scrollable UI cards.`,
  "projects.norrsken.desc2part1": `It’s built with Kotlin and Jetpack Compose, with weather data from the Norwegian Meteorological Institute and aurora data from NOAA. The app is open source on`,
  "projects.norrsken.desc2part2": `.`,
  "footer.role": "Developer in northern Sweden",
  "footer.nav.projects": "Projects",
  "footer.nav.about": "About",
  "footer.nav.contact": "Contact",
} as const;

type UIKey = keyof typeof en;

const sv: Record<UIKey, string> = {
  "meta.description": "Native-appar och webbverktyg byggda i norra Sverige",
  "nav.contact": "Kontakt",
  "hero.label": "Mjukvarustudio i norra Sverige",
  "hero.title": "Native-appar och webbverktyg,",
  "hero.titleEmphasis": "gjorda för dig",
  "hero.intro": `Jag designar och bygger native-appar och webbverktyg för småföretag, från första skiss och databasdesign till lansering och vidare.`,
  "hero.cta": "Hör av dig",
  "thanks.title": "Tack för ditt meddelande!",
  "thanks.text": `Jag återkommer så snart jag kan. Under tiden kan du gärna titta på mina`,
  "thanks.link": "projekt",
  "about.title": "Om mig",
  "about.intro1": `Jag är en mjukvaruutvecklare bosatt i norra Sverige där jag bygger mobilappar, webbplatser och
webbverktyg, i första hand för småföretag och ibland för mig själv när jag inte hittar
verktyget jag vill ha.`,
  "about.intro2": `Innan jag bytte karriär tillbringade jag mer än tio år inom besöksnäringen, från
vandrarhem och kaféer utomlands till sju år med ett eget kafé i Cambridge. Det var i
småföretagarmiljön jag lärde mig värdet av effektiv och enkel mjukvara, samt frustrationen över
tröga verktyg som inte fungerar som förväntat. Med den erfarenheten skolade jag om mig via
Open University med studier i Computing och IT. Längs vägen började jag bygga mina egna appar
i Kotlin och Jetpack Compose, samt webbverktyg i React och TypeScript. Några av dem finns
tillgängliga på startsidan.`,
  "about.intro3": `Jag dras till enkel, pålitlig mjukvara och appar som fungerar offline — mobilsignal är
trots allt ingen garanti i en källare eller på ett fjäll. Jag arbetar gärna med dig på både
engelska och svenska. När jag inte sitter vid tangentbordet hittar du mig oftast i
verkstaden eller ute på promenad. Jag tycker om träarbete, att bygga mina egna datorer och att
tillbringa så mycket tid i fjällen som vädret tillåter, vilket är där Trail Weight och
Waymark kommer till sin rätt.`,
  "contact.title": "Kontakt",
  "contact.intro": `Jag diskuterar alltid gärna nya projekt, samarbeten och idéer. Om du vill att vi
arbetar tillsammans är du välkommen att använda formuläret eller mejla mig direkt.`,
  "contact.form.name": "Namn",
  "contact.form.email": "E-post",
  "contact.form.message": "Meddelande",
  "contact.form.submit": "Skicka meddelande",
  "index.title1": "Mjukvaruutvecklare i norra Sverige",
  "index.title2": "Native-appar och webbverktyg, ",
  "index.title2Emphasis": "gjorda för dig",
  "index.intro": `Designar och bygger mobilappar, webbplatser och webbverktyg för småföretag, från
            första skiss och databasdesign till lansering och vidare.`,
  "index.intro.button": "Hör av dig",
  "index.featuredproject.title1": "Utvalt projekt",
  "index.featuredproject.title2": "Under utveckling",
  "index.featuredproject.title3": "Counted",
  "index.featuredproject.subtitle": "Släng urklippet och räkna lager på några minuter.",
  "index.featuredproject.description": `En lagerapp för oberoende kaféer, barer och restauranger. Ställ in den på din
            dator, räkna på telefonen, även utan täckning, och avsluta med din beställningslista
            klar.`,
  "index.featuredproject.cta": "Hör av dig",
  "index.mobileapps.title": "Mobilappar",
  "index.mobileapps.trailweight.title": "Trail Weight",
  "index.mobileapps.trailweight.description": "Håll koll på vikten på din vandringsutrustning.",
  "index.mobileapps.trailweight.status": "Finns på Google Play",
  "index.mobileapps.trailweight.tech": "Kotlin, Jetpack Compose, Supabase",
  "index.mobileapps.trailweight.imagealt":
    "Trail Weight visar ett cirkeldiagram över en 5 kg Kungsleden-packning, uppdelat efter utrustningskategori",
  "index.mobileapps.waymark.title": "Waymark",
  "index.mobileapps.waymark.description": "Planera och navigera på dina äventyr.",
  "index.mobileapps.waymark.status": "Kommer i början av 2027",
  "index.mobileapps.waymark.tech": "Kotlin, Jetpack Compose, Supabase, MapLibre, Room",
  "index.mobileapps.waymark.imagealt":
    "Waymark som visar en topografisk karta över Norrbotten med en vandringsrutt och sparade nålar",
  "index.mobileapps.woodworking.title": "Träarbetsräknare",
  "index.mobileapps.woodworking.description": "Kalkylator för five cut-metoden för träarbetare.",
  "index.mobileapps.woodworking.status": "Kommer snart",
  "index.mobileapps.woodworking.tech": "Kotlin, Jetpack Compose",
  "index.mobileapps.woodworking.imagealt":
    "Träarbetsräknare som visar en bräda med geringssnitt samt beräknad vinkel och längd",
  "index.aboutme.alttext": "Adam i början av en vandring",
  "index.aboutme.title": "Om mig",
  "index.aboutme.description": `Jag tillbringade över ett årtionde inom besöksnäringen, inklusive sju år med att driva
            mitt eget kafé i Cambridge, innan jag skolade om mig via Open University. Nu bygger jag
            appar och webbverktyg från norra Sverige, för småföretag och för det jag älskar, som
            vandring och träarbete.`,
  "index.aboutme.cta": "Läs mer om mig",
  "index.getintouch.title": "Hör av dig",
  "index.getintouch.description": `Berätta om ditt företag, ditt projekt eller din idé, så återkommer jag så snart jag
            kan. Jag är baserad i norra Sverige, men arbetar med kunder var de än befinner sig.`,
  "index.getintouch.cta": "Skicka ett meddelande",
  "projects.meta.title": "Projekt | Aurora Laboratories",
  "projects.meta.description":
    "Appar och verktyg jag har byggt, från lagerhantering till vandring.",
  "projects.title": "Projekt",
  "projects.subtitle": "Appar och verktyg jag har byggt, från lagerhantering till vandring.",
  "projects.github": "GitHub",
  "projects.counted.status": "Under utveckling",
  "projects.counted.title": "Counted",
  "projects.counted.subtitle": "Släng urklippet och räkna lager på några minuter.",
  "projects.counted.description": `En lagerapp för oberoende kaféer, barer och restauranger. Ställ in den på din dator, räkna på telefonen, även utan täckning, och avsluta med din beställningslista klar.`,
  "projects.counted.laptopAlt":
    "Counted-panel som visar en lagerberäkning pågår, med antal för varje förvaringsutrymme",
  "projects.counted.phoneAlt":
    "Räknar lager på Counted-telefonappen, med plus- och minusknappar för varje produkt",
  "projects.trailweight.status": "Finns nu på Google Play",
  "projects.trailweight.title": "Trail Weight",
  "projects.trailweight.alt":
    "Trail Weight-appen som visar en lista över vandringsutrustning med vikter och totalvikt",
  "projects.trailweight.desc1": `Trail Weight hjälper vandrare och ultralättryggsäckare att hålla koll på vikten på sin utrustning och omedelbart se vad som drar ner dem. Din packning sorteras från tyngst till lättast med ett cirkeldiagram som visar viktfördelningen för varje kategori.`,
  "projects.trailweight.desc2part1": `Appen är byggd med Kotlin och Jetpack Compose, med autentisering hanterad av Supabase, e-postfunktionalitet via Resend, och koden är öppen källkod på`,
  "projects.trailweight.desc2part2": `.`,
  "projects.trailweight.cta": "Visa på Google Play",
  "projects.waymark.status": "Kommer i början av 2027",
  "projects.waymark.title": "Waymark",
  "projects.waymark.alt":
    "Waymark som visar en topografisk karta över Sarek-området med en vandringsrutt och sparade nålar.",
  "projects.waymark.desc1": `Waymark är en Sverigefokuserad vandringsapp för att planera och spara dina turer. Lägg till rutter, stugor, vindskydd, tältplatser och fiskeställen, och ha dem med dig offline, med kartor som fungerar utan mobilsignal.`,
  "projects.waymark.desc2": `Den är byggd med Kotlin och Jetpack Compose, med Supabase och PostGIS för konton och geospatial data, samt Room för offlinelagring på telefonen. MapLibre driver kartorna med kartor från Lantmäteriet, och Resend hanterar e-post.`,
  "projects.woodworking.status": "Kommer snart till Google Play",
  "projects.woodworking.title": "Woodworking Helper",
  "projects.woodworking.alt":
    "Woodworking Helper-appen som visar en kalkylator för five cut-metoden för att räta upp klyvsågens klyvsläde.",
  "projects.woodworking.desc1": `Alla appar är inte lika komplexa, och vissa löser ett enda problem. Träarbetsappen är ett enkelt verktyg som räknar ut exakt hur mycket du behöver justera ditt anhåll med five cut-metoden. Det är en liten app, men den sparar tid och löser ett verkligt problem vid sidan av en snabb enhetskonvertering.`,
  "projects.woodworking.desc2part1": `Appen är byggd med Kotlin och Jetpack Compose och koden är öppen källkod på`,
  "projects.woodworking.desc2part2": `.`,
  "projects.norrsken.status": "Kommer snart till Google Play",
  "projects.norrsken.title": "Norrsken",
  "projects.norrsken.alt":
    "Norrsken som visar aktuellt väder och norrskensprognos för Boden kommun.",
  "projects.norrsken.desc1": `Norrsken kombinerar väderdata i realtid med live-norrskensspårning för att hjälpa dig planera utifrån väder och norrskenssynlighet. Appen har reaktiv temperaturberoende färgkodning, anpassade animerade vädereffekter för regn och snö, samt rena, skrollbara UI-kort.`,
  "projects.norrsken.desc2part1": `Den är byggd med Kotlin och Jetpack Compose, med väderdata från Meteorologiska institutet och norrskensdata från NOAA. Appen är öppen källkod på`,
  "projects.norrsken.desc2part2": `.`,
  "footer.role": "Utvecklare i norra Sverige",
  "footer.nav.projects": "Projekt",
  "footer.nav.about": "Om",
  "footer.nav.contact": "Kontakt",
};

export const ui = { en, sv };

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment in ui) return firstSegment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
