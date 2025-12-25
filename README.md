# BlackRoad OS Documentation

> *The operating system for the AI age — where software adapts to humans, not the other way around.*

[![Docs](https://img.shields.io/badge/docs-blackroad.io-black)](https://docs.blackroad.io)
[![License](https://img.shields.io/badge/license-proprietary-red)](LICENSE)
[![Trinity](https://img.shields.io/badge/🌈_Trinity-Compliant-success)](https://docs.blackroad.io/meta/trinity-system)
[![Codex](https://img.shields.io/badge/📚_Codex-Integrated-blue)](https://docs.blackroad.io/meta/blackroad-codex)
[![RedLight](https://img.shields.io/badge/🔴_RedLight-18+_Templates-ff6b00)](https://docs.blackroad.io/meta/trinity-system)
[![GreenLight](https://img.shields.io/badge/🟢_GreenLight-103+_Functions-00cc66)](https://docs.blackroad.io/meta/trinity-system)
[![YellowLight](https://img.shields.io/badge/🟡_YellowLight-Infrastructure-ffcc00)](https://docs.blackroad.io/meta/trinity-system)

---

## What is BlackRoad OS?

BlackRoad OS is a **governance and orchestration platform** for AI agents. It provides:

- **Governance Layer** — Policies, audit trails, and permission management for AI operations
- **Agent Orchestration** — Coordinate multiple AI agents across tools and workflows
- **Six Portals** — Integrated experiences for personal AI, education, media, gaming, navigation, and privacy

### Core Components

| Component | Purpose |
|-----------|---------|
| **Cece** | Lucidia-class governance agent — the brain of BlackRoad |
| **Policies** | Rules that allow, deny, or modify AI actions |
| **Ledger** | Immutable audit trail of all governance events |
| **Intents** | Task and workflow state management |
| **Claims & Delegations** | Identity and permission management |

---

## Documentation Structure

### Vision & Strategy
- [**Manifesto**](docs/meta/vision/manifesto.md) — Why BlackRoad exists
- [**Vision & Mission**](docs/meta/vision/mission.md) — 5-year roadmap and success metrics
- [**Architecture**](docs/meta/vision/architecture.md) — System design and component overview

### Governance Layer
- [**Cece Agent Mode**](docs/governance/cece-agent-mode.md) — System prompt for the governance agent
- [**Governance Roadmap**](docs/governance/governance-roadmap.md) — Sprint plan and implementation details

### Technical Reference
- [**KV Schema**](docs/reference/kv-schema.md) — Data model for governance objects
- [**API Design**](docs/reference/api-design.md) — REST API specification

### Operations
- [Getting Started](docs/getting-started/) — Quick start guides
- [Runbooks](docs/runbooks/) — Operational procedures
- [Platform Guides](docs/platform-guides/) — Deployment and configuration

---

## Repository Map

| Repo | Purpose |
|------|---------|
| `blackroad-os-docs` | Documentation (this repo) |
| `blackroad-os-core` | Desktop UI, auth, identity |
| `blackroad-os-api` | API gateway, REST endpoints |
| `blackroad-os-operator` | Job scheduler, background workers |
| `blackroad-os-agents` | Agent implementations |
| `blackroad-os-infra` | IaC, deployment configs |
| `blackroad-os-web` | Web frontend |
| `blackroad-os-prism-console` | Admin dashboard |
| `lucidia-core` | AI reasoning engines |

---

## Quick Start

### Prerequisites

- Node.js 20+ (see `package.json` engines)
- npm or pnpm for dependency management

### Running locally

```bash
npm install
npm run start
```

The dev server runs at http://localhost:3000.

### Building for production

```bash
npm run build
npm run serve
```

---

## The Six Portals

| Portal | Domain | Description |
|--------|--------|-------------|
| **Lucidia** | Personal AI | Your AI that actually knows you — persistent memory, learned preferences |
| **RoadWork** | Education | Adaptive learning that evolves with your understanding |
| **RoadView** | Media | Video and image creation without the learning curve |
| **RoadGlitch** | Gaming | Games that evolve with your play style |
| **RoadWorld** | Navigation | Context-aware guidance with local knowledge |
| **BackRoad** | Privacy | Security and anonymization as infrastructure |

---

## Implementation Status

### Phase 1: Foundation (Current)
- [x] Governance layer specification
- [x] KV schema design
- [x] API design
- [ ] Core implementation
- [ ] Agent bootstrap

### Phase 2: Portals
- [ ] Lucidia MVP
- [ ] RoadWork prototype
- [ ] RoadView alpha

### Phase 3: Ecosystem
- [ ] Developer SDK
- [ ] Agent marketplace
- [ ] Enterprise features

See [IMPLEMENTATION-ROADMAP.md](docs/IMPLEMENTATION-ROADMAP.md) for full task tracking.

---

## 🌈 The Light Trinity System

This repository is fully integrated with the **Light Trinity System** — BlackRoad OS's unified intelligence, templating, and infrastructure framework.

### The Three Lights

- **🔴 RedLight** — Brand & Design System (18+ HTML templates)
- **🟢 GreenLight** — Project Intelligence & Coordination (103+ logging functions)
- **🟡 YellowLight** — Infrastructure & Deployment (Codex integration)

All work passes through Trinity quality gates to ensure consistency, quality, and coordination across the entire BlackRoad OS ecosystem.

**Learn More:**
- [Trinity System Documentation](https://docs.blackroad.io/meta/trinity-system)
- [BlackRoad Codex Integration](https://docs.blackroad.io/meta/blackroad-codex)
- [Trinity Compliance Workflow](.github/workflows/trinity-compliance.yml)

**Quick Check:**
```bash
# Verify Trinity compliance
.trinity/system/trinity-check-compliance.sh
```

---

## Contributing

Keep content concise, link across sections, and prefer iterative updates over monolithic rewrites. Mark components as `planned`, `alpha`, or `in-flight` when appropriate so operators, developers, and partners have an honest view of the system.

See [CONTRIBUTING.md](CONTRIBUTING.md) for style conventions, validation steps, and how to extend the sidebar when adding new pages.

**Trinity Integration:** All contributions are automatically checked for Trinity compliance via CI/CD. Use GreenLight templates to log your work and maintain project intelligence.

---

## Links

- **Website:** [blackroad.io](https://blackroad.io)
- **Docs:** [docs.blackroad.io](https://docs.blackroad.io)
- **GitHub:** [github.com/BlackRoad-OS](https://github.com/BlackRoad-OS)

---

*The road is long. The road is black. But we're building it together.*
