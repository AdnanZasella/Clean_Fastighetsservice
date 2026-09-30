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

## Vad återstår?

Se [NASTA-STEG.md](NASTA-STEG.md): uppgifter från ägaren, domän, driftsättning och vad som är viktigast för Google.
