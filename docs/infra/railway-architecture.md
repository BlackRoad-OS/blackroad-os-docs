---
id: railway-architecture
title: Railway Architecture
sidebar_position: 1
---

Railway hosts the core backend, supporting services, and (optionally) the docs site.

- Services: core API, agents workers, supporting databases, docs site
- Environments: `dev`, `staging`, `prod` mapped to Git branches
- Secrets: managed via Railway variables synchronized from GitHub Actions

> TODO: Add service names, port mappings, and CPU/memory profiles.
