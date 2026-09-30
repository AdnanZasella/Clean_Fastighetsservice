// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: byt till riktig domän när den är köpt (t.ex. https://www.eiservice.se)
export default defineConfig({
  site: 'https://ei-service.netlify.app',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/tack/'),
    }),
  ],
});
