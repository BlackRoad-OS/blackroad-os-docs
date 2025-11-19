---
id: architecture-overview
title: Architecture Overview
sidebar_position: 3
---

This overview maps the BlackRoad OS surfaces and how data flows between them.

```mermaid
graph LR
  subgraph UI
    Web[Web UI]
    Console[Prism Console]
  end
  subgraph Platform
    Core[Core Backend]
    Agents[Agents Runtime]
  end
  subgraph Infra
    Railway[(Railway Services)]
    Cloudflare[(Cloudflare Edge)]
  end

  Web -->|GraphQL/REST| Core
  Console -->|Operational APIs| Core
  Agents -->|Jobs + Events| Core
  Core --> Railway
  Web --> Cloudflare
  Console --> Cloudflare
  Cloudflare --> Railway
```

### Ownership and repos
- Core backend: [`blackroad-os-core`](https://github.com/blackroad-os/blackroad-os-core)
- Web UI: [`blackroad-os-web`](https://github.com/blackroad-os/blackroad-os-web)
- Prism Console: [`blackroad-os-console`](https://github.com/blackroad-os/blackroad-os-console)
- Agents runtime: [`blackroad-os-agents`](https://github.com/blackroad-os/blackroad-os-agents)

> TODO: Enrich this section with infra subnet diagrams, data residency notes, and service discovery.
