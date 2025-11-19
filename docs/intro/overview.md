# BlackRoad OS overview

Welcome to the BlackRoad OS handbook. This overview anchors the platform pillars, high-level services, and how the product suite hangs together. Use this page as a landing spot before diving into detailed playbooks.

- Platform pillars: Core API, Web App, Prism Console, Agents runtime, and shared infrastructure.
- Operates across dev, staging, and prod environments; the docs surface uses the `PUBLIC_DOCS_URL` configured via `src/config/docsConfig.js`.
- Health and version metadata live at `/health` and `/version` for quick uptime checks.

See the architecture deep-dive in [`intro/architecture.md`](./architecture.md) for diagrams and service boundaries.
