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
