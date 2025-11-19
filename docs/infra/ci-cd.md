---
id: ci-cd
title: CI/CD
sidebar_position: 4
---

GitHub Actions orchestrates builds and deployments across the BlackRoad repos.

- Lint + test on every PR
- Branch-based deploys: `dev` → preview, `staging` → staging, `main` → production
- Health checks post-deploy hitting `/health.json` and `/version.json`

> TODO: Include action names, cache keys, and rollback procedures.
