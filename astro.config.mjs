// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: confirm production domain
  site: 'https://transexpress.id',
  // Pure static output (SSG) — deployable to Cloudflare Pages or any static host.
  output: 'static',
  prefetch: { defaultStrategy: 'hover' },
  integrations: [sitemap()],
  // Inline component CSS into HTML to remove render-blocking stylesheet requests on the critical path.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
