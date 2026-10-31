// @ts-check
import { defineConfig } from 'astro/config';

const isDev = process.env.NODE_ENV !== 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://jcorona.me',
  redirects: {
    '/': '/es/',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // Keystatic's admin UI renders with React, so both run only in dev.
  integrations: isDev
    ? [(await import('@astrojs/react')).default(), (await import('@keystatic/astro')).default()]
    : [],
});
