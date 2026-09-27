# Architecture

## Decision record

**Runtime:** Node.js 22 HTTP server, server-rendered HTML, zero production package dependencies. This is portable, low-cost and auditable. A future extraction can place the same domain modules behind Cloudflare Workers or a framework without changing content architecture.

**Presentation:** semantic templates in `src/render.js`, verified/configurable content in `src/content.js`, and progressive enhancement in `public/site.js`. Core copy remains visible without JavaScript. CSS owns presentation and the hero animation.

**Data:** development submissions use private JSONL and files with owner-only permissions. Production should use Supabase Postgres and a private Storage bucket, with service-role access restricted to the server. JSONL is a deploy-preview adapter, not the recommended multi-instance production store.

The HTTP layer now depends on explicit repository and private-file interfaces under `src/adapters/`. `JsonlSubmissionRepository` and `LocalPrivateFileStorage` are development implementations. A production Supabase repository/storage pair can replace them without changing RFQ validation, reference generation or page rendering.

**Email:** Resend is the recommended transactional adapter. Notifications must run server-side after durable storage, use a verified sending domain, and avoid attaching drawings; emails should link authorised staff to the admin record.

**Trust boundaries:** browsers never receive service credentials. The server validates field length, required fields, extension/MIME pairing and file size; applies per-IP throttling; renames files; stores them outside `public`; and emits restrictive security headers. Production needs managed rate limiting, malware scanning and database row-level policies.

## Routes

Public routes are rendered on demand. `/api/rfq/` accepts multipart POST only. `/admin/` checks a signed, HttpOnly, SameSite cookie. Static files are served only from `public/`; upload storage is never routed.

## Progressive launch

Development responses contain `X-Robots-Tag: noindex, nofollow`, HTML meta robots repeats it, `robots.txt` blocks all crawlers, and the sitemap is empty. Production indexing requires an explicit code/config release after redirect and content approval.
