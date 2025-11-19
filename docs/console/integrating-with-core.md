---
id: integrating-with-core
title: Integrating with Core
sidebar_position: 3
---

The console relies on privileged endpoints and role-based access from the core backend.

- Use service-to-service auth with short-lived tokens.
- Prefer read-only queries for dashboards; gate mutations behind explicit runbooks.
- Emit audit logs back to core for every operator action.

> TODO: Include the exact token minting flow and scopes once finalized.
