---
id: environment-config
title: Environment Configuration
sidebar_position: 2
---

| Variable | Purpose | Dev | Staging | Prod |
|----------|---------|-----|---------|------|
| `NEXT_PUBLIC_CORE_API_URL` | Base URL for API calls | http://localhost:4000 | staging API domain | prod API domain |
| `NEXT_PUBLIC_SENTRY_DSN` | Frontend error capture | optional | required | required |
| `NEXT_PUBLIC_APP_BASE_URL` | Canonical origin for router | http://localhost:3000 | staging domain | production domain |

> TODO: Document feature flag provider and cache TTLs.
