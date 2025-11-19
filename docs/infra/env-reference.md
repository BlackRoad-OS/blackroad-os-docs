---
id: env-reference
title: Environment Reference
sidebar_position: 5
---

Cross-project environment variables and URLs.

| Service | Env | URL | Key Variables |
|---------|-----|-----|---------------|
| Docs | dev | http://localhost:3000 | `NODE_ENV`, `PUBLIC_DOCS_URL` |
| Docs | staging | https://staging-docs.blackroad.dev | `NODE_ENV`, `PUBLIC_DOCS_URL` |
| Docs | prod | https://docs.blackroad.dev | `NODE_ENV`, `PUBLIC_DOCS_URL` |
| Core API | dev | http://localhost:4000 | `CORE_DATABASE_URL`, `CORE_REDIS_URL`, `SESSION_SECRET` |
| Core API | staging | https://api-staging.blackroad.dev | `CORE_DATABASE_URL`, `CORE_REDIS_URL`, `SESSION_SECRET`, `CLOUDFLARE_API_TOKEN` |
| Core API | prod | https://api.blackroad.dev | same as staging with production values |
| Web | dev | http://localhost:3001 | `NEXT_PUBLIC_CORE_API_URL`, `NEXT_PUBLIC_APP_BASE_URL` |
| Web | staging | https://app-staging.blackroad.dev | `NEXT_PUBLIC_CORE_API_URL`, `NEXT_PUBLIC_SENTRY_DSN`, `NEXT_PUBLIC_APP_BASE_URL` |
| Web | prod | https://app.blackroad.dev | `NEXT_PUBLIC_CORE_API_URL`, `NEXT_PUBLIC_SENTRY_DSN`, `NEXT_PUBLIC_APP_BASE_URL` |
| Console | dev | http://localhost:3002 | `CONSOLE_CORE_API_URL`, `CONSOLE_AUTH_TOKEN` |
| Console | staging | https://console-staging.blackroad.dev | `CONSOLE_CORE_API_URL`, `CONSOLE_AUTH_TOKEN`, `SENTRY_DSN` |
| Console | prod | https://console.blackroad.dev | `CONSOLE_CORE_API_URL`, `CONSOLE_AUTH_TOKEN`, `SENTRY_DSN` |
| Agents | dev | http://localhost:8787 | `AGENTS_CORE_API_URL`, `AGENTS_QUEUE_URL` |
| Agents | staging | https://agents-staging.blackroad.dev | `AGENTS_CORE_API_URL`, `AGENTS_QUEUE_URL`, `AGENTS_SIGNING_KEY` |
| Agents | prod | https://agents.blackroad.dev | `AGENTS_CORE_API_URL`, `AGENTS_QUEUE_URL`, `AGENTS_SIGNING_KEY` |

> TODO: Sync these tables automatically from each repo's `.env.example`.
