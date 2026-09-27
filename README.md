# Parkway Fabrications

Production-oriented website foundation for Parkway Fabrications, Sheffield. The current build is intentionally **noindex** until Parkway approves migration from the existing website.

## Stack decision

The application uses dependency-free Node.js 22, server-rendered semantic HTML, native CSS and lightweight JavaScript. This minimises supply-chain risk and client running costs while keeping deployment portable to a Node host or container. The server provides the website, guarded RFQ upload endpoint and authenticated admin shell. Production email is designed for Resend, but is not sent until credentials and templates are approved.

## Local development

```bash
cp .env.example .env
npm run dev
```

Visit `http://localhost:3000`. Set `ADMIN_PASSWORD` and a long random `SESSION_SECRET` before using `/admin/`. Never commit `.env` or `data/`.

## Current delivery scope

- Bespoke responsive design system and animated SVG laser hero.
- Seven service landing pages, projects shell, contact, legal and RFQ pages.
- Private engineering upload validation, rate limiting, honeypot and reference generation.
- Authenticated enquiry dashboard foundation.
- Development noindex headers, robots block, empty sitemap and structured NAP data.
- Documentation for infrastructure, migration, SEO, verification and reusable extraction.

See `CLIENT-VERIFICATION-REQUIRED.md` before publishing any capability claim.
