# Levels Dev extraction candidates

| System | Purpose/dependencies | Reusable code | Parkway-specific code | Recommendation |
|---|---|---|---|---|
| RFQ pipeline | Validated multipart intake and durable reference | parser contract, validation, adapter interface | fields and PF reference prefix | Extract after hardened multipart library and tests |
| Private uploader | Allowlist, random key, storage adapter | policy and storage contract | Parkway file formats/limits | Extract with malware-scan hooks |
| Admin shell | Authenticated enquiry operations | roles, tables, filters, audit patterns | labels/status workflow | Extract after Supabase implementation |
| SEO renderer | Metadata, canonical and schema composition | typed metadata/schema helpers | NAP and service copy | Extract immediately after adding validation |
| Analytics bridge | First-party custom browser events | event dispatcher and consent adapter | event names | Extract as zero-vendor core |
| Review carousel | Accessible motion/controls/data contract | carousel behaviour | verified review data | Build/extract after source data arrives |
| WhatsApp control | Config-gated contact link | number validation and events | Parkway number/copy | Extract when an approved number exists |
| Case-study model | Structured proof content | schema and listing/detail templates | customers/results/assets | Extract after first verified case study |
| Laser hero | Reduced-motion SVG animation | animation accessibility pattern | visual/copy/geometry | Keep visual implementation client-specific |

The Levels Dev repository was not mounted, GitHub was inaccessible through the outbound proxy, and therefore no external code was copied or changed.
