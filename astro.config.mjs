// @ts-check
import { defineConfig } from 'astro/config';

const isDev = process.env.NODE_ENV !== 'production';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: isDev
    ? [(await import('@keystatic/astro')).default()]
    : [],
});
