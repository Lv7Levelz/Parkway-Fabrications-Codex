# Admin guide

Open `/admin/` and authenticate using credentials supplied out of band. The current V1 lists stored enquiries and supports client-side search. It never exposes uploaded object paths.

Before production, replace the single-password preview adapter with Supabase Auth accounts, enforced MFA, server-side role checks and an audit log. Add full record detail, signed file access, status transitions (New, Contacted, Quoted, Won, Lost, Archived), internal notes, follow-up date, quote value and escaped CSV export. Every admin API route must repeat authorisation rather than trusting page access.
