import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export const imageAssets = {
  'hero-nextgen': { file:'hero-nextgen.webp', alt:'Fibre laser cutting equipment in a metal manufacturing environment' },
  'hero-laser': { file:'hero-laser.jpg', alt:'Laser cutting head working above sheet metal' },
  'fibre-laser-cutting': { file:'product-laser.webp', alt:'Fibre laser cutting equipment used for sheet metal profiling' },
  'cnc-folding': { file:'product-folding.webp', alt:'CNC press brake folding a sheet metal component' },
  'welding': { file:'product-welding.webp', alt:'Metal fabrication welding process' },
  'bespoke-fabrication': { file:'product-bespoke.webp', alt:'Bespoke fabricated metal assembly' },
  'perforated-metal': { file:'product-perforated.webp', alt:'Perforated metal component showing its aperture pattern' },
  'granulator-screens': { file:'product-granulator.webp', alt:'Curved perforated granulator screen component' },
  'manufacturing': { file:'industry-manufacturing.webp', alt:'Representative manufacturing environment' },
  'recycling': { file:'industry-recycling.webp', alt:'Representative metal component for a recycling application' },
  'construction': { file:'industry-construction.webp', alt:'Representative fabricated metalwork for construction' },
  'transport': { file:'industry-transport.webp', alt:'Representative fabricated component for transport equipment' },
  'agriculture': { file:'industry-agriculture.webp', alt:'Representative fabricated component for agricultural equipment' },
  'architectural-work': { file:'industry-architectural.webp', alt:'Representative architectural metalwork detail' },
  'project-cages': { file:'project-cages.jpg', alt:'Representative fabricated metal cage assembly' },
  'project-components': { file:'project-components.jpg', alt:'Representative collection of fabricated metal components' },
  'project-industrial': { file:'project-industrial.jpg', alt:'Representative industrial metal fabrication' },
  'project-screens': { file:'project-screens.jpg', alt:'Representative perforated industrial screen components' },
  'project-stairs': { file:'project-stairs.jpg', alt:'Representative fabricated metal stair assembly' },
  'project-structural': { file:'project-structural.jpg', alt:'Representative structural-style metal fabrication' }
};

function importedManifest() {
  const manifestPath = join(process.cwd(), 'public/images/manifest.json');
  if (!existsSync(manifestPath)) return {};
  try { return JSON.parse(readFileSync(manifestPath, 'utf8')); } catch { return {}; }
}

export function hasImage(key) {
  const asset = imageAssets[key];
  return Boolean(asset && importedManifest()[asset.file] && existsSync(join(process.cwd(), 'public/images', asset.file)));
}

export function renderPicture(key, { eager = false, className = '' } = {}) {
  const asset = imageAssets[key];
  const dimensions = asset && importedManifest()[asset.file];
  if (!asset || !dimensions || !hasImage(key)) return '';
  return `<picture class="${className}"><img src="/images/${asset.file}" width="${dimensions.width}" height="${dimensions.height}" alt="${asset.alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}></picture>`;
}
