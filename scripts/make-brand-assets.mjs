// One-shot generator for Trans Express brand assets.
// Source: logo-transexpress-transparent.png (repo root, 707x353, transparent).
// Produces: horizontal logo (png/avif/webp), square monogram, favicons,
// android-chrome / apple-touch icons, and a social OG image.
//
// Run once: node scripts/make-brand-assets.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { writeFile } from 'node:fs/promises';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'logo-transexpress-transparent.png');
const PUB = join(ROOT, 'public');
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

// ── Horizontal logo (transparent) — used in navbar/footer ────────────────────
const horizPng = await sharp(SRC).resize({ width: 520, withoutEnlargement: true }).png().toBuffer();
await writeFile(join(PUB, 'logo-transexpress-horizontal-transparent.png'), horizPng);
await sharp(horizPng).avif({ quality: 60, effort: 7 }).toFile(join(PUB, 'logo-transexpress-horizontal-transparent.avif'));
await sharp(horizPng).webp({ quality: 82, effort: 6 }).toFile(join(PUB, 'logo-transexpress-horizontal-transparent.webp'));

// ── Monogram (left "TE" cluster), tightly trimmed ────────────────────────────
// Two passes: extract first (sharp would otherwise apply trim before extract).
const monogramRaw = await sharp(SRC)
  .extract({ left: 0, top: 0, width: 262, height: 353 })
  .png()
  .toBuffer();
const monogram = await sharp(monogramRaw).trim({ threshold: 10 }).png().toBuffer();

// Build a square icon: monogram centered on a square canvas with padding.
async function squareIcon(size, bg, padRatio = 0.16) {
  const inner = Math.round(size * (1 - padRatio * 2));
  const resized = await sharp(monogram)
    .resize({ width: inner, height: inner, fit: 'contain', background: TRANSPARENT })
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toBuffer();
}

// Square transparent logo (WA avatar + schema logo)
await writeFile(join(PUB, 'logo-transexpress-square.png'), await squareIcon(512, TRANSPARENT, 0.1));

// Favicons / PWA / Apple — white background for legibility on tabs & home screens
await writeFile(join(PUB, 'favicon-16x16.png'), await squareIcon(16, WHITE, 0.08));
await writeFile(join(PUB, 'favicon-32x32.png'), await squareIcon(32, WHITE, 0.1));
await writeFile(join(PUB, 'android-chrome-192x192.png'), await squareIcon(192, WHITE, 0.14));
await writeFile(join(PUB, 'android-chrome-512x512.png'), await squareIcon(512, WHITE, 0.14));
await writeFile(join(PUB, 'apple-touch-icon.png'), await squareIcon(180, WHITE, 0.14));

// ── favicon.ico (sharp can't emit ICO — wrap PNG entries in an ICO container) ─
function buildIco(pngs) {
  // pngs: [{ size, buffer }]
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4);
  const dir = Buffer.alloc(16 * pngs.length);
  let offset = 6 + dir.length;
  pngs.forEach((p, i) => {
    const b = 16 * i;
    dir.writeUInt8(p.size >= 256 ? 0 : p.size, b + 0); // width
    dir.writeUInt8(p.size >= 256 ? 0 : p.size, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(p.buffer.length, b + 8); // data size
    dir.writeUInt32LE(offset, b + 12); // data offset
    offset += p.buffer.length;
  });
  return Buffer.concat([header, dir, ...pngs.map((p) => p.buffer)]);
}
const ico = buildIco([
  { size: 16, buffer: await squareIcon(16, WHITE, 0.08) },
  { size: 32, buffer: await squareIcon(32, WHITE, 0.1) },
  { size: 48, buffer: await squareIcon(48, WHITE, 0.12) },
]);
await writeFile(join(PUB, 'favicon.ico'), ico);

// ── OG / social card (1200x630, white) ───────────────────────────────────────
const ogLogo = await sharp(SRC).resize({ width: 760, withoutEnlargement: true }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: WHITE } })
  .composite([{ input: ogLogo, gravity: 'center' }])
  .jpeg({ quality: 86 })
  .toFile(join(PUB, 'og-image.jpg'));

console.log('✓ Trans Express brand assets generated in public/');
