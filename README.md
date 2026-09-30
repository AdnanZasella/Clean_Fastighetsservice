# E&I Bygg Service Fastighet Städning AB – hemsida

Statisk Astro-sajt, byggd för mobil först, lokal SEO (Trollhättan, Grästorp, Lysekil, Smögen) och konvertering till offertförfrågan/samtal.

## Kom igång

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # bygger till dist/
npm run preview  # förhandsvisa bygget
```

## Var ändrar man vad?

| Vad | Fil |
| --- | --- |
| Telefon, e-post, org.nr, adress, öppettider | `src/data/business.ts` (enda källan, används överallt inkl. Google-schema) |
| Tjänster (text, checklistor, FAQ) | `src/data/services.ts` – en ny post = en ny sida under `/tjanster/` |
| Orter | `src/data/areas.ts` – en ny post = en ny sida under `/omraden/` |
| Färger, typsnitt, knappar | `src/styles/global.css` |
| Domän | `astro.config.mjs` (`site`) och `public/robots.txt` |
| Delningsbild / ikon | `node scripts/make-images.mjs` |
| Foton | Lägg bilder i `src/assets/photos/` med namnen i `LÄS-MIG.md` där. De optimeras automatiskt; saknas en bild visas sidan utan den. |

## Driftsättning på Netlify

1. Lägg projektet i ett GitHub-repo och koppla det i Netlify (build: `npm run build`, publish: `dist` – redan satt i `netlify.toml`).
2. **Forms:** Netlify hittar formuläret `offert` automatiskt vid deploy. Aktivera *Form detection* under Site configuration → Forms om det krävs.
3. **Mejlnotis:** Site configuration → Notifications → Emails and webhooks → *Form submission notifications* → lägg till ägarens e-post.
4. Koppla egen domän och uppdatera `site` i `astro.config.mjs` + `public/robots.txt`.
5. Skicka ett testformulär och kontrollera att mejlet kommer fram.

## Viktigast för att synas på Google (utanför koden)

- **Google Företagsprofil** för Trollhättan – exakt samma namn, telefon och adress som på sajten. Detta väger tyngst för lokala sökningar ("städfirma Trollhättan").
- Be nöjda kunder lämna **Google-recensioner**.
- Registrera sajten i **Google Search Console** och skicka in `sitemap-index.xml`.
- Samma uppgifter på Hitta.se, Eniro, Facebook m.fl.

## Behövs från ägaren (markerat `TODO` i koden)

- Org.nr och adress (även för Google Företagsprofil)
- Öppettider
- Bekräfta F-skatt och att de kommer tillbaka och åtgärdar anmärkningar vid flyttstäd (används i texterna)
- Gör de byggjobb (renovering, reparation)? Då gäller **ROT**-avdrag för de jobben, inte RUT.
- Exakt vilka fastighets-/byggtjänster som erbjuds (`fastighetsservice` i `services.ts`)
- Får vi nämna hyresvärdar/kunder vid namn? Omdömen från kunder?
- Egna foton på personal/utfört arbete
- Önskad domän
- Ägarens egen historia till Om oss-sidan
