// Generates the favicon set from a single source: src/assets/brand/mezutech-mark.svg.
// Run with `npm run icons` after changing the mark. Nothing here is hand-edited.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, 'public');

const INK = '#14131A';
const PAPER = '#FAF8F4';

// The tile the mark sits on for platforms that will not honour transparency
// (apple-touch-icon) or that shrink it into a launcher grid.
const tile = (fg, bg, inset) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="26" fill="${bg}"/>
  <g transform="translate(60 60) scale(${1 - inset}) translate(-60 -60)">
    <path d="M18 92 V42 L47 70 L78 26 V92" fill="none" stroke="${fg}"
          stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;

// A bare mark, transparent, for the SVG favicon. Adapts to the browser's theme.
const bare = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <style>
    path { stroke: ${INK} }
    @media (prefers-color-scheme: dark) { path { stroke: ${PAPER} } }
  </style>
  <path d="M18 92 V42 L47 70 L78 26 V92" fill="none"
        stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const png = (svg, size, file) =>
  sharp(Buffer.from(svg))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, file));

await mkdir(out, { recursive: true });
await writeFile(path.join(out, 'favicon.svg'), bare.trim() + '\n');

await Promise.all([
  png(tile(PAPER, INK, 0.1), 180, 'apple-touch-icon.png'),
  png(tile(PAPER, INK, 0.1), 512, 'icon-512.png'),
  png(tile(PAPER, INK, 0.1), 192, 'icon-192.png'),
  png(tile(INK, PAPER, 0.06), 32, 'favicon-32.png'),
  png(tile(INK, PAPER, 0.06), 16, 'favicon-16.png'),
]);

console.log('icons written to public/');
