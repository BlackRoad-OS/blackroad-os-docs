# Cloudflare delivery

Cloudflare fronts the docs site and other BlackRoad surfaces. It should proxy to the Railway-hosted service and cache static assets aggressively.

- Domains: `docs.blackroad.systems` (prod) and `staging.docs.blackroad.systems` (staging).
- TLS and redirects managed at Cloudflare; keep origin pointing at the Railway service URL.
- Add cache busting rules for static assets after each deploy.

TODO: Document the exact DNS records and SSL/TLS settings used across environments.
