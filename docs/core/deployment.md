---
id: deployment
title: Deployment Playbook
sidebar_position: 4
---

Core services ship through GitHub Actions into Railway environments.

1. Merge to `dev`: build + run smoke tests; deploy to Railway dev.
2. Promote to `staging`: run database migrations with `safe` flag; enable feature flags for QA.
3. Promote to `main`: run migrations, warm caches, notify agents via webhook.

### Health and version checks
- `/health.json` is served statically from the docs bundle for platform status pages.
- `/version.json` exposes build metadata generated during CI.

> TODO: Add runbooks for rollback and data snapshot/restore.
