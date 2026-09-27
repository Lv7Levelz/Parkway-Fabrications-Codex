# Backend setup

## Development adapter

Copy `.env.example` to `.env`; provide `ADMIN_PASSWORD` and a minimum 32-byte random `SESSION_SECRET`. RFQs are stored in `data/submissions.jsonl`; drawings use `data/uploads/`. Both are ignored by Git and must live on encrypted persistent storage if this adapter is ever used outside local review.

## Recommended production services

- **Compute:** a UK/EU-region Node container behind Cloudflare WAF.
- **Database/auth/storage:** Supabase project owned by Parkway, UK/EU region, Postgres tables with row-level security, private drawings bucket and short-lived signed downloads.
- **Email:** Resend account/domain owned by Parkway; notify sales and send a plain confirmation containing the enquiry reference.
- **Bot defence:** Cloudflare Turnstile plus managed request throttling. Keep the honeypot as defence in depth.
- **Malware:** quarantine uploads and scan before staff downloads. Object keys must remain random and private.

## Suggested tables

`enquiries`: id, public_reference, type, contact fields, project fields, status enum, internal_notes, quote_value, follow_up_at, created_at, updated_at. `enquiry_files`: id, enquiry_id, object_key, original_name, detected_mime, bytes, scan_status, created_at. Audit status/notes changes separately.

Use database-generated monotonic sequences for production references. Never derive access permissions from a public reference.

## Email transaction order

Validate → quarantine/upload → persist enquiry → queue notification → return reference → asynchronously send Parkway and customer messages. Email failure must not lose a valid enquiry; retry via a durable queue.
