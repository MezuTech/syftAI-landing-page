/**
 * Open Graph cards — one per app, plus the studio default.
 *
 * Each card is drawn on that app's own ground in that app's own accent, so a
 * link to /apps/strideai previews as StrideAI rather than as a generic site
 * banner. Names and taglines are read out of the content files so a copy edit
 * only has to happen in one place; re-run `npm run og` after changing one.
 *
 * Type is set in Georgia and Menlo rather than the site's Instrument Serif and
 * JetBrains Mono: librsvg resolves system fonts only, and a card that renders
 * in a real serif beats one that silently falls back mid-word.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const W = 1200;
const H = 630;
const OUT = 'public/og';

/** Native mode for each app — the palette its own UI ships in. */
const SKINS = {
  studio: { ground: '#FAF8F4', ink: '#14131A', body: '#3C3942', accent: '#14131A', rule: '#E0DAD0' },
  scriptureflow: { ground: '#09090B', ink: '#FAFAFA', body: '#D4D4D8', accent: '#D4AF37', rule: '#27272A' },
  strideai: { ground: '#FBFAF8', ink: '#14131A', body: '#3C3942', accent: '#4F46E5', rule: '#E4E0D9' },
  lovestory: { ground: '#101B1E', ink: '#F5F0EE', body: '#CDC8C6', accent: '#FF4D8D', rule: '#26373C' },
  sift: { ground: '#F8FAFC', ink: '#0F172A', body: '#334155', accent: '#2563EB', rule: '#E2E8F0' },
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Enough YAML for `name:` and `tagline:` at the top level of a content file. */
function frontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const block = raw.split(/^---$/m)[1] ?? '';
  const read = (key) => {
    const m = block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : '';
  };
  return { name: read('name'), tagline: read('tagline') };
}

function card({ skin, topLabel, name, tagline, footer, mark }) {
  const s = SKINS[skin];
  // Label top-left, everything else bottom-left: a poster, not a banner.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${s.ground}"/>
  <rect x="0" y="0" width="${W}" height="6" fill="${s.accent}"/>
  <text x="80" y="112" font-family="Menlo, monospace" font-size="19" letter-spacing="3" fill="${s.body}">${esc(topLabel)}</text>
  ${mark ? `<g transform="translate(80 226)">${mark}</g>` : ''}
  <text x="80" y="${H - 196}" font-family="Georgia, serif" font-size="82" fill="${s.ink}">${esc(name)}</text>
  <text x="80" y="${H - 138}" font-family="Georgia, serif" font-style="italic" font-size="34" fill="${s.accent}">${esc(tagline)}</text>
  <rect x="80" y="${H - 96}" width="${W - 160}" height="1" fill="${s.rule}"/>
  <text x="80" y="${H - 58}" font-family="Menlo, monospace" font-size="20" letter-spacing="2.4" fill="${s.body}">${esc(footer)}</text>
</svg>`;
}

/**
 * Inline an icon SVG as a <g>, scaled to `size`, with currentColor resolved.
 * The root <svg> element's own `fill`/`stroke` have to be carried onto the
 * wrapper: a monoline mark declares `fill="none"` there, and dropping it turns
 * the polyline into a solid blob.
 */
function inlineMark(file, size, color) {
  let svg = fs.readFileSync(file, 'utf8');
  svg = svg.replace(/currentColor/g, color);
  const root = svg.match(/<svg[^>]*>/)?.[0] ?? '';
  const vb = root.match(/viewBox="([^"]+)"/);
  const [, , vw, vh] = vb ? vb[1].split(/\s+/).map(Number) : [0, 0, 100, 100];
  const inherit = ['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin']
    .map((attr) => {
      const m = root.match(new RegExp(`\\s${attr}="([^"]*)"`));
      return m ? ` ${attr}="${m[1]}"` : '';
    })
    .join('');
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  const scale = size / Math.max(vw, vh);
  return `<g transform="scale(${scale})"${inherit}>${inner}</g>`;
}

async function write(name, svg) {
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, `${name}.png`));
  console.log(`  og/${name}.png`);
}

fs.mkdirSync(OUT, { recursive: true });
console.log('Open Graph cards');

await write(
  'default',
  card({
    skin: 'studio',
    topLabel: 'INDEPENDENT SOFTWARE STUDIO',
    name: 'MezuTech',
    tagline: 'Productivity apps, built one at a time.',
    footer: 'SYFTUP.COM',
    mark: inlineMark('src/assets/brand/mezutech-mark.svg', 132, SKINS.studio.ink),
  }),
);

for (const file of fs.readdirSync('src/content/apps').sort()) {
  const slug = file.replace(/\.md$/, '');
  const { name, tagline } = frontmatter(path.join('src/content/apps', file));
  await write(
    slug,
    card({
      skin: slug,
      topLabel: 'MEZUTECH',
      name,
      tagline,
      footer: `SYFTUP.COM/APPS/${slug.toUpperCase()}`,
      mark: inlineMark(`src/assets/apps/${slug}/icon.svg`, 108, SKINS[slug].ink),
    }),
  );
}
