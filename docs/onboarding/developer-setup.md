---
id: developer-setup
title: Developer Setup
sidebar_position: 1
---

Follow these steps to get a local environment running:

1. Install Node 18+, pnpm or npm, Docker, and Railway CLI.
2. Clone `blackroad-os-core`, `blackroad-os-web`, `blackroad-os-console`, `blackroad-os-agents`, and this docs repo.
3. Start services locally (core API + Redis/Postgres) and point web/console to `http://localhost:4000`.
4. Run `npm install && npm start` in this repo for live docs.

> TODO: Add makefile targets or a devcontainer for reproducible environments.
