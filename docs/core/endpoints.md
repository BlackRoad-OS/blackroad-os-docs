---
id: endpoints
title: API Endpoints
sidebar_position: 2
---

Document key routes consumed by the Web UI and Prism Console. Keep request/response samples in sync with `blackroad-os-core` schemas.

| Surface | Method | Path | Auth | Notes |
|---------|--------|------|------|-------|
| Web UI | GET | `/api/session` | Cookie/JWT | Returns user session and feature flags |
| Console | POST | `/api/operations/:id/execute` | Bearer | Runs privileged operation workflows |
| Agents | POST | `/api/agents/events` | Signed webhook | Entry point for agent event ingestion |

> TODO: Import schemas automatically from the core repo and embed OpenAPI snippets.
