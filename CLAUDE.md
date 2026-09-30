# E&I Bygg Service Fastighet Städning AB – hemsida

Kundsajt för en städ- och fastighetsservicefirma i Trollhättan (även Grästorp, Lysekil, Smögen).
Mål: få besökare att ringa eller skicka offertförfrågan, och ranka lokalt på Google.

**Börja i `NASTA-STEG.md`** – där står vad som återstår.

## Teknik

- Astro 7, statisk output, ingen UI-ramverk. Vanlig CSS i `src/styles/global.css` + scoped `<style>` per komponent.
- Hosting: Netlify. Offertformuläret (`src/components/QuoteForm.astro`) använder Netlify Forms (`name="offert"`, honeypot) och postar till `/tack/`.
- `npm run dev` (port 4321), `npm run build`, `npm run preview`.

## Struktur

- `src/data/business.ts` – enda källan för telefon, e-post, adress, öppettider
- `src/data/services.ts` – alla tjänster; en post = en sida via `src/pages/tjanster/[slug].astro`. `core: true` = står på ägarens affisch och visas först.
- `src/data/areas.ts` – orter; en post = en sida via `src/pages/omraden/[slug].astro`
- `src/data/photos.ts` + `src/components/Photo.astro` – bilder hittas automatiskt i `src/assets/photos/` via filnamn; `photoFocus` och `photoAlt` styr beskärning och alt-text. Saknas en bild renderas inget.

## Designprinciper (beslutade med användaren)

- **Mobile-first.** De flesta besökare är på mobil. Kontrollera alltid 360/390 px först.
- **Ska inte se AI-gjord ut:** inga versala "eyebrow"-etiketter, inga ikoner i pastellrutor, inga kortrutnät, inga pillerknappar, inga påhittade siffror eller omdömen. Rak, kort svensk text.
- **Låg kognitiv belastning:** en huvudknapp per skärm, telefonnummer som textlänk under. Få fält i formuläret.
- **Priser:** lova aldrig "fast pris". Priset beror på storlek och skick; oftast tittar de på plats först.
- **RUT** gäller hemstäd, flyttstäd, storstäd och fönsterputsning för privatpersoner. Inte för företag/BRF.
- Färger från affischen: marinblå `#1b3a6b`, gul `#f5c518`.

## Verifiering

Efter ändringar: `npm run build`, kontrollera att inget sticker ut horisontellt på 360 px, och kör Lighthouse (mobil) – sidorna har legat på 100 i alla fyra kategorier.
