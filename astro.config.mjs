// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://blockprint.la',
  output: 'static',
  adapter: vercel(),
  // /survey is the evergreen alias — points at the current year's survey.
  redirects: {
    '/survey': '/survey-2026',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
