# Nästa steg – E&I-hemsidan

Status 2026-09-30: design, texter, SEO och bilder är klara och ligger på GitHub
(`AdnanZasella/Clean_Fastighetsservice`, gren `main`). Kvar är uppgifter från ägaren,
domän och driftsättning. Bocka av här allteftersom.

## 1. Uppgifter från ägaren

Allt skrivs in i `src/data/business.ts` (enda källan – används i sidfot, kontaktsida och Google-schema).

- [ ] **Org.nr** – visas i sidfoten och i schema.org (`orgNumber`)
- [ ] **Adress** (gata + postnummer) – behövs även för Google Företagsprofil (`address`)
- [ ] **Öppettider** – nu gissat "Mån–fre 07–18" (`openingHours`, `openingHoursText`)
- [ ] **Svarstid** – sidan lovar svar "inom 24 timmar" (`responseTime`). Stämmer det?
- [ ] **Omstädning vid flyttstäd** – sidan säger att de kommer tillbaka och åtgärdar anmärkningar från besiktningen (`src/data/services.ts`, flyttstäd). Stämmer det?
- [ ] **F-skatt** – krävs för att få dra RUT-avdrag åt kunderna. Har företaget F-skatt (det har nästan alla AB)? Om ja kan vi skriva "Godkänd för F-skatt" som förtroendepunkt.
- [ ] **Fastighetsservice** – exakt vilka tjänster (byggstäd, underhåll, grovsopor …)? Lista i `services.ts` → `fastighetsservice-trollhattan`.
- [ ] **Byggjobb?** Om de gör renovering/reparation gäller **ROT**-avdrag för de jobben (inte RUT). Då kan vi lägga till en tjänst.
- [ ] **Om oss** – kort historia: vilka är E och I, sedan när, hur många? Texten i `src/pages/om-oss.astro`.
- [ ] **Namn på kunder / omdömen** – får vi nämna hyresvärdar vid namn? Har de några omdömen?

## 2. Bilder (valfritt, i prioritetsordning)

Lägg i `src/assets/photos/` med exakt filnamn – de dyker upp automatiskt. Se `LÄS-MIG.md` i samma mapp.

- [ ] `om-oss.jpg` – eget foto på ägaren (bygger mest förtroende)
- [ ] `kontorsstad-trollhattan.jpg` – ljust kontor (Unsplash: `bright modern office interior`)
- [ ] På sikt: byt `hero.jpg` mot ett riktigt foto (nuvarande ser AI-gjord ut)

## 3. Domän

- [ ] Köp domän
- [ ] Byt `site` i `astro.config.mjs` och `Sitemap:`-raden i `public/robots.txt`
      (nu tillfälligt `https://ei-service.netlify.app`)

## 4. Driftsättning på Netlify

- [ ] Netlify → *Add new site* → *Import from GitHub* → välj repot. Inställningarna läses från `netlify.toml`.
- [ ] *Site configuration → Forms* → aktivera formulärdetektering om den inte redan är på
- [ ] *Site configuration → Notifications → Form submission notifications* → ägarens e-post
- [ ] Koppla domänen
- [ ] **Testa:** skicka en offertförfrågan från mobilen → kommer mejlet fram? Visas tacksidan med namnet?

## 5. Efter lansering (viktigast för Google)

- [ ] **Google Företagsprofil** för Trollhättan – exakt samma namn, telefon och adress som på sajten
- [ ] Be nöjda kunder om **Google-recensioner**
- [ ] **Google Search Console** → verifiera domänen → skicka in `sitemap-index.xml`
- [ ] Samma uppgifter på Hitta.se, Eniro och Facebook

## 6. Möjliga uppgraderingar

- [ ] **Omdömen** på startsidan när det finns Google-recensioner (störst effekt på förtroendet)
- [ ] **Besöksstatistik utan cookies** (Plausible eller Netlify Analytics) – mäta formulär och telefonklick
- [ ] **"Från X kr"** per tjänst, om ägaren vill ange riktpriser (priset beror på storlek och skick, så sidan säger i dag att de tittar på plats först)
