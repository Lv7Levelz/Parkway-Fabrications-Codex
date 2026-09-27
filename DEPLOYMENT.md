# Deployment

1. Provision client-owned infrastructure and UK/EU data region.
2. Configure environment variables in the host—not in Git.
3. Run `npm test`, `npm run check` and a production smoke test.
4. Deploy behind TLS, Cloudflare WAF and persistent private storage.
5. Confirm security headers, upload limits, authentication, restore procedure and alerting.
6. Keep preview noindex. Follow `SEO-MIGRATION.md` for the separately approved production switch.

Back up Postgres and object storage; test restoration. Rotate credentials on handover. Configure log retention without recording form bodies or drawing contents. Add uptime and failed-email alerts. `WHATSAPP_NUMBER` remains blank, so no WhatsApp control is rendered; when approved, accept digits in international format only.
