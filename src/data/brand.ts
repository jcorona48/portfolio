import fs from 'node:fs';
import path from 'node:path';
import settings from './brand.json';

// Personal branding knobs, editable at /keystatic (Brand) during `pnpm dev`
// or directly in brand.json.
// - wordmark: text shown next to the logo in the header and footer.
// - wordmarkFont: any Google Fonts family; loaded only when it differs from the site font.
// - logo: SVG in src/brand/ (inlined; use fill="currentColor" and class="peak"
//   for the accent so it follows the theme). Empty for text only.
// - photo: file in public/ for the hero portrait. Empty to show the monogram.
// - favicon: SVG in public/.
export const SITE_FONT = 'Schibsted Grotesk';

export const brand = settings;

const root = process.cwd();

export const logoSvg = brand.logo
  ? fs.readFileSync(path.join(root, 'src/brand', brand.logo), 'utf8')
  : null;

export const photoSrc =
  brand.photo && fs.existsSync(path.join(root, 'public', brand.photo)) ? `/${brand.photo}` : null;

export const wordmarkFontHref =
  brand.wordmarkFont && brand.wordmarkFont !== SITE_FONT
    ? `https://fonts.googleapis.com/css2?family=${brand.wordmarkFont.trim().replace(/ +/g, '+')}:wght@${brand.wordmarkWeight}&display=swap`
    : null;
