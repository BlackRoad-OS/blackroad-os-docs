---
id: env-vars
title: Environment Variables
sidebar_position: 3
---

Core backend variables are standardized with the rest of the stack. Values are provisioned via Railway for each environment.

| Variable | Purpose | Dev | Staging | Prod |
|----------|---------|-----|---------|------|
| `CORE_DATABASE_URL` | Primary Postgres connection | local Docker/Neon | Railway Postgres | Railway managed + backups |
| `CORE_REDIS_URL` | Caching + queues | Local Redis | Railway Redis | Railway Redis HA |
| `SESSION_SECRET` | Session encryption key | `.env` override | GitHub Actions secret | GitHub Actions secret |
| `CLOUDFLARE_API_TOKEN` | DNS + routing | optional | required | required |

> TODO: Mirror the full `.env.example` from `blackroad-os-core`.
