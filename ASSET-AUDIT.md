# Asset audit

## Audit limitation

The read-only `Lv7Levelz/parkway-fabrications` repository was not locally mounted. Attempts to access GitHub, the live Parkway website and the published mock-up on 27 September 2026 were blocked by the environment proxy (HTTP 403); the web integration returned 401. No reference asset was copied, altered or claimed as approved.

| Asset | Original path | Current use | Production approved | Action |
|---|---|---|---|---|
| Parkway photographic library | Reference repository, path unavailable | Not used | No | Inventory dimensions, subject, provenance and rights when access is restored |
| Animated laser artwork | New code-native SVG/CSS in this repository | Homepage hero | Design approval required | Replace/supplement with approved factory photography if supplied |
| Social share graphic | New `public/og-image.svg` | Preview metadata | No | Export approved 1200×630 photographic WebP/JPG before launch |
| PF favicon | New `public/favicon.svg` | Browser icon | No | Replace when Parkway supplies approved brand master |

When access is restored, record every candidate file, pixel dimensions, format, size, duplicates, visual quality, rights, accurate subject/process, proposed placement, alt text and approval status. Prefer authentic Parkway machinery and completed work over generated imagery.

## Production image-slot specification

Every slot is currently a labelled, layout-stable placeholder. Supply original-resolution files; the production image pipeline should generate AVIF and WebP `srcset` variants at approximately 640, 960, 1280, 1600 and 2200 pixels wide, retain a quality JPEG fallback, and set intrinsic dimensions to prevent layout shift.

| Slot key | Intended subject | Orientation / target dimensions | Aspect ratio | Responsive treatment | Alt-text intent |
|---|---|---|---|---|---|
| `fibre-laser-cutting` | Real Parkway fibre laser profiling sheet, showing the head and controlled cutting point | Landscape, 2000×1500 minimum | 4:3 | Crop around head and cutting zone; preserve subject at narrow breakpoints | Describe Parkway laser profiling the visible component; do not repeat the page heading |
| `cnc-folding` | Parkway press brake forming a recognisable sheet-metal component | Landscape, 2000×1500 | 4:3 | Keep tooling, operator-safe working area and component visible | Describe the actual folding operation and part shown |
| `welding` | Real Parkway welding/fabrication with correct PPE and credible process | Landscape, 2000×1500 | 4:3 | Avoid cropping hands, torch, joint or PPE | Identify the actual welding process only after Parkway verifies it |
| `bespoke-fabrication` | Assembly or fit-up on a Parkway fabrication bench | Landscape, 2000×1500 | 4:3 | Use focal positioning to retain complete assembly context | Describe the fabrication/assembly without inventing client or application |
| `perforated-metal` | Macro/detail of Parkway perforated sheet showing aperture and finish | Landscape, 1800×1350 | 4:3 | Allow closer mobile crop while preserving pattern scale | Describe aperture form and component only if verified |
| `granulator-screens` | Finished Parkway granulator screen showing curvature, perforation and edges | Landscape, 2000×1500 | 4:3 | Keep complete product silhouette on desktop; show pattern/edge detail on mobile | Describe verified screen type and visible construction |
| `manufacturing` | Wide, tidy view of the real Sheffield workshop in operation | Cinematic, 2400×1350 | 16:9 | Art-directed alternative crop at 4:3 for mobile | Establish the real Parkway Sheffield manufacturing environment |
| `recycling` | Verified Parkway-made component in a recycling application | Landscape, 2000×1333 | 3:2 | Keep component, not generic stock machinery, as focal point | Explain the verified component and recycling context |
| `construction` | Verified fabricated Parkway component for construction | Landscape, 2000×1333 | 3:2 | Maintain safe crop around the complete component | Describe actual component; never imply structural certification |
| `transport` | Verified Parkway component used in transport equipment | Landscape, 2000×1333 | 3:2 | Retain identifying component geometry without exposing client-sensitive data | Describe component/application only with approval |
| `agriculture` | Verified Parkway component used with agricultural equipment | Landscape, 2000×1333 | 3:2 | Component-led crop rather than generic farm stock | Describe the manufactured item and verified use |
| `architectural-work` | Finished architectural metalwork detail made by Parkway | Portrait, 1500×2000 | 3:4 | Pair portrait desktop placement with 4:3 mobile art direction | Describe material, feature and setting only when approved |
| `finished-projects` | High-quality finished fabrication displaying workmanship | Cinematic, 2400×1350 | 16:9 | Wide desktop composition; provide deliberate mobile focal crop | Describe what is visibly manufactured, without an unsupported outcome |
| `service-project` | Case-study image matching the service page | Cinematic, 2400×1350 | 16:9 | Replace per page; lazy-load below the fold | Connect the verified project subject to the process shown |

Photography must be colour-corrected consistently, retain natural steel tones, avoid excessive sparks or staged effects, and remove any confidential drawings/customer marks before publication.

## Audited reference mapping

The source repository is still unavailable in this execution environment: it is not mounted, and a read-only GitHub clone attempt returned `CONNECT tunnel failed, response 403`. The implementation now contains the complete import manifest, runtime `<picture>/<img>` integration and `npm run import:assets -- /path/to/assets` importer. It copies without modifying the source, detects the real JPEG/WebP dimensions for CLS-safe markup, and writes `public/images/manifest.json`. Until the source files are supplied, the honest labelled placeholders remain visible rather than broken images.

| Source filename | Destination | Page / section | Status | Alt-text intent |
|---|---|---|---|---|
| `hero-nextgen.webp` | `public/images/hero-nextgen.webp` | Homepage animated laser stage; eager, high priority and preloaded when present | Reference/demo; source file not available to copy | Describe the visible fibre-laser manufacturing scene without claiming a customer project |
| `hero-laser.jpg` | `public/images/hero-laser.jpg` | Homepage supporting image band | Reference/demo; source file not available to copy | Describe the visible cutting head and sheet-metal process |
| `product-laser.webp` | `public/images/product-laser.webp` | Laser cutting service hero | Reference/demo; source file not available to copy | Describe the actual profiling operation visible |
| `product-folding.webp` | `public/images/product-folding.webp` | CNC folding service hero | Reference/demo; source file not available to copy | Describe press-brake forming without adding unverified capacity |
| `product-welding.webp` | `public/images/product-welding.webp` | Welding service hero | Reference/demo; source file not available to copy | Describe the visible process only; name MIG/TIG only after verification |
| `product-bespoke.webp` | `public/images/product-bespoke.webp` | Metal and bespoke fabrication service heroes | Reference/demo; source file not available to copy | Describe the visible assembly without inventing its client or use |
| `product-perforated.webp` | `public/images/product-perforated.webp` | Perforated metal service hero | Reference/demo; source file not available to copy | Describe visible aperture pattern and component form |
| `product-granulator.webp` | `public/images/product-granulator.webp` | Granulator screens service hero | Reference/demo; source file not available to copy | Describe visible curvature, perforation and edges |
| `industry-manufacturing.webp` | `public/images/industry-manufacturing.webp` | Homepage image band and industry gallery | Reference/demo; source file not available to copy | Representative manufacturing environment |
| `industry-recycling.webp` | `public/images/industry-recycling.webp` | Homepage industry gallery | Reference/demo; sector remains unverified | Representative recycling application without asserting Parkway sector work |
| `industry-construction.webp` | `public/images/industry-construction.webp` | Homepage industry gallery | Reference/demo; sector remains unverified | Representative construction application without certification claims |
| `industry-transport.webp` | `public/images/industry-transport.webp` | Homepage industry gallery | Reference/demo; sector remains unverified | Representative transport equipment/component context |
| `industry-agriculture.webp` | `public/images/industry-agriculture.webp` | Homepage industry gallery | Reference/demo; sector remains unverified | Representative agricultural equipment/component context |
| `industry-architectural.webp` | `public/images/industry-architectural.webp` | Homepage gallery and About image band | Reference/demo; sector remains unverified | Representative architectural metalwork detail |
| `project-cages.jpg` | `public/images/project-cages.jpg` | Representative projects gallery | Reference/demo; not attributed to a customer | Describe visible fabricated cage assembly |
| `project-components.jpg` | `public/images/project-components.jpg` | Representative projects gallery | Reference/demo; not attributed to a customer | Describe visible fabricated components |
| `project-industrial.jpg` | `public/images/project-industrial.jpg` | Representative projects gallery | Reference/demo; not attributed to a customer | Describe visible industrial fabrication |
| `project-screens.jpg` | `public/images/project-screens.jpg` | Representative projects gallery | Reference/demo; not attributed to a customer | Describe visible screen components |
| `project-stairs.jpg` | `public/images/project-stairs.jpg` | Representative projects gallery | Reference/demo; not attributed to a customer | Describe visible stair fabrication |
| `project-structural.jpg` | `public/images/project-structural.jpg` | Representative projects gallery | Reference/demo; no structural compliance claim | Describe visible structural-style fabrication only |
| `bespoke-stairs.jpg` | `public/images/bespoke-stairs.jpg` | Representative projects gallery | Reference/demo; not attributed to a customer | Describe visible bespoke stair fabrication |

`industry-oilgas.webp` is deliberately excluded from the import manifest and all rendered pages because Parkway’s work in that sector has not been verified. The older `cap-*.jpg` and `sector-*.jpg` files are also excluded.
