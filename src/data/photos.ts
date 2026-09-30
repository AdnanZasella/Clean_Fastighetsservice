// Hittar foton i src/assets/photos/ automatiskt. Filnamnet (utan ändelse) är nyckeln,
// t.ex. hero.jpg -> photos.hero. Saknas en bild visas sidan utan den.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]),
);

// Var bilden ska "fokusera" när den beskärs (CSS object-position). Standard: mitten.
export const photoFocus: Record<string, string> = {
  hero: '72% center',
};

// Beskrivande alt-texter (bra för Google Bilder och skärmläsare)
export const photoAlt: Record<string, string> = {
  hero: 'Hand i gul städhandske moppar ett blankt golv',
  'fonsterputs-trollhattan': 'Fönsterputsning med skrapa på en löddrig fönsterruta',
  'flyttstad-trollhattan': 'Tom, nystädad lägenhet med ljust trägolv inför flytt',
  'trappstadning-trollhattan': 'Rent och ljust trapphus i flerbostadshus',
  foretag: 'Flerbostadshus med balkonger mot blå himmel',
};
