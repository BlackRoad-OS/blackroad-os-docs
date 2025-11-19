---
id: infra
title: Infra + Delivery
sidebar_position: 4
---

Web UI bundles are built in CI and deployed through Cloudflare + Railway.

1. Build static assets with `npm run build` in the web repo.
2. Upload artifacts to Railway for server rendering or to Cloudflare Pages for static hosting.
3. Purge Cloudflare cache after deploy to roll forward immediately.

> TODO: Confirm whether ISR/SSG is used and document cache invalidation hooks.
