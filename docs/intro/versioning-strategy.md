---
id: versioning-strategy
title: Versioning Strategy
sidebar_position: 4
---

BlackRoad OS uses a **vNext** docs stream for active development and publishes frozen versions for releases (e.g., `v1`).

- `vNext` (current): maps to `main` branches across repos; content can change rapidly.
- `v1`, `v2`, ...: tagged docs snapshots aligned to release trains; only receive patch-level updates.

### How to cut a docs version
1. Finalize release notes and environment variable changes.
2. Run `npx docusaurus docs:version 1.x` to snapshot the current docs.
3. Add `versioned_docs` updates and validate navigation.
4. Deploy the release branch; CI promotes the static bundle to Railway/Pages.

> TODO: Automate version pinning with a release workflow that tags both code and docs.
