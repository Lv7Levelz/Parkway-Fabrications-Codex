import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { imageAssets } from '../src/images.js';

const source = process.argv[2] || process.env.PARKWAY_REFERENCE_ASSET_DIR;
if (!source) {
  console.error('Usage: node scripts/import-reference-assets.js /path/to/reference/assets');
  process.exit(1);
}
function jpegDimensions(bytes) {
  let offset = 2;
  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) { offset++; continue; }
    const marker = bytes[offset + 1], length = bytes.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) return { height:bytes.readUInt16BE(offset + 5), width:bytes.readUInt16BE(offset + 7) };
    offset += 2 + length;
  }
}
function webpDimensions(bytes) {
  const type = bytes.toString('ascii', 12, 16);
  if (type === 'VP8X') return { width:1 + bytes.readUIntLE(24, 3), height:1 + bytes.readUIntLE(27, 3) };
  if (type === 'VP8L') { const bits = bytes.readUInt32LE(21); return { width:(bits & 0x3fff) + 1, height:((bits >> 14) & 0x3fff) + 1 }; }
  if (type === 'VP8 ') return { width:bytes.readUInt16LE(26) & 0x3fff, height:bytes.readUInt16LE(28) & 0x3fff };
}
function dimensions(file, bytes) { return file.endsWith('.webp') ? webpDimensions(bytes) : jpegDimensions(bytes); }

const destination = resolve('public/images');
await mkdir(destination, { recursive:true });
const uniqueFiles = [...new Set(Object.values(imageAssets).map(asset => asset.file))];
const missing = [], manifest = {};
for (const file of uniqueFiles) {
  const input = join(resolve(source), file);
  try {
    const bytes = await readFile(input), size = dimensions(file, bytes);
    if (!size?.width || !size?.height) throw new Error('Could not detect dimensions');
    await copyFile(input, join(destination, basename(file)));
    manifest[file] = size;
    console.log(`Imported ${file} (${size.width}×${size.height})`);
  } catch { missing.push(file); }
}
await writeFile(join(destination, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
if (missing.length) {
  console.error(`Missing or unreadable mapped assets (${missing.length}):\n${missing.join('\n')}`);
  process.exitCode = 2;
}
