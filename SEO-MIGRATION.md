# SEO migration plan

## Current safeguards

The preview is blocked through HTTP headers, meta robots, a site-wide robots disallow and empty sitemap. Keep these controls on every non-production hostname.

## Required migration sequence

1. Crawl `https://parkwayfabrications.co.uk` with rendered HTML and export status, title, canonical, headings and inbound internal links.
2. Export indexed URLs from Search Console, landing pages from analytics and known backlink targets.
3. Map every valuable legacy URL one-to-one. Prefer retaining established slugs where content intent matches.
4. Add single-hop permanent redirects; never redirect unrelated removed pages to the homepage.
5. Approve production copy, claims, case studies, legal documents and imagery.
6. Set the final HTTPS `SITE_URL`, create the complete sitemap, enable index/follow and production canonicals in one controlled release.
7. Verify domain Search Console, submit the sitemap and inspect priority URLs.
8. Monitor 404s, redirect chains, coverage, rankings and conversions for at least 12 weeks.

No legacy URL inventory could be captured in this environment because outbound access returned HTTP 403. Do not launch until the mapping spreadsheet is completed.
