// Genererar og-image.png (delningsbild) och apple-touch-icon.png. Kör: node scripts/make-images.mjs
import sharp from 'sharp';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#1b3a6b"/>
  <path d="M0 630 C 300 470 900 470 1200 630 Z" fill="#ffffff"/>
  <rect x="80" y="80" width="150" height="96" rx="18" fill="#ffffff"/>
  <text x="155" y="146" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="54" fill="#1b3a6b">E&amp;I</text>
  <text x="80" y="270" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="62" fill="#ffffff">Städning &amp; fastighetsservice</text>
  <text x="80" y="345" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="62" fill="#f5c518">i Trollhättan</text>
  <text x="80" y="410" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#c9d6ea">Flyttstäd · Hemstäd · Storstäd · Fönsterputs · Kontorsstäd</text>
  <text x="600" y="585" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="34" fill="#1b3a6b">Gratis offert: 070-013 21 39</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" fill="#1b3a6b"/>
  <text x="90" y="116" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="72" fill="#fff">E&amp;I</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
console.log('ok');
