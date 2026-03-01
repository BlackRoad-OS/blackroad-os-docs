# BlackRoad OS Documentation

> *The operating system for the AI age — where software adapts to humans, not the other way around.*

[![npm version](https://img.shields.io/npm/v/blackroad-os-docs)](https://www.npmjs.com/package/blackroad-os-docs)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org)
[![Docs](https://img.shields.io/badge/docs-blackroad.systems-black)](https://docs.blackroad.systems)
[![License](https://img.shields.io/badge/license-proprietary-red)](LICENSE)

---

## Table of Contents

1. [What is BlackRoad OS?](#what-is-blackroad-os)
2. [Quick Start](#quick-start)
3. [npm Usage](#npm-usage)
4. [Pricing & Stripe Integration](#pricing--stripe-integration)
5. [Documentation Index](#documentation-index)
   - [Getting Started](#getting-started)
   - [Platform Guides](#platform-guides)
   - [Agent Catalog & Roles](#agent-catalog--roles)
   - [Packs](#packs)
   - [Reference](#reference)
   - [Governance & Policy](#governance--policy)
   - [Runbooks](#runbooks)
   - [SDK](#sdk)
   - [Vision & Strategy](#vision--strategy)
6. [The Six Portals](#the-six-portals)
7. [Repository Map](#repository-map)
8. [Implementation Status](#implementation-status)
9. [Contributing](#contributing)
10. [Links](#links)
11. [License & Copyright](#-license--copyright)

---

## What is BlackRoad OS?

BlackRoad OS is a **governance and orchestration platform** for AI agents — built to let a single human orchestrator direct thousands of agents and services with verifiable, auditable evidence. It anchors work to PS-SHA∞ identities, runs verification pipelines for truth states, journals everything through RoadChain, and surfaces system health through Prism Console.

### Core Components

| Component | Purpose |
|-----------|---------|
| **Cece** | Lucidia-class governance agent — the brain of BlackRoad |
| **Policies** | Rules that allow, deny, or modify AI actions |
| **Ledger** | Immutable audit trail of all governance events |
| **Intents** | Task and workflow state management |
| **Claims & Delegations** | Identity and permission management |
| **RoadChain** | Blockchain-style journaling for all OS events |
| **Prism Console** | Admin dashboard for agents, metrics, and events |

---

## Quick Start

### Prerequisites

- **Node.js 20+** — [nodejs.org](https://nodejs.org)
- **npm** (bundled with Node.js) or **pnpm**
- **Git**

### Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/BlackRoad-OS/blackroad-os-docs.git
cd blackroad-os-docs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run start
```

The dev server runs at **http://localhost:3000**.

### Building for Production

```bash
npm run build
npm run serve
```

The build output lands in the `build/` directory and is ready to deploy on any static host.

### All Available Scripts

| Script | Description |
|--------|-------------|
| `npm run start` | Start local dev server at http://localhost:3000 |
| `npm run build` | Generate a production-ready static build |
| `npm run serve` | Serve the production build locally |
| `npm run clean` | Clear the Docusaurus cache |

---

## npm Usage

This project is published as **`blackroad-os-docs`** and built with [Docusaurus 3](https://docusaurus.io/).

```bash
# Install with npm
npm install blackroad-os-docs

# Or with pnpm
pnpm add blackroad-os-docs
```

**Engine requirement:** `node >= 20`

Key dependencies bundled with this package:

| Package | Version | Purpose |
|---------|---------|---------|
| `@docusaurus/core` | ^3.9.2 | Documentation framework |
| `@docusaurus/preset-classic` | ^3.9.2 | Classic theme and plugins |
| `@docusaurus/theme-mermaid` | ^3.9.2 | Diagram rendering |
| `redocusaurus` | ^2.2.0 | OpenAPI reference rendering |
| `react` | ^18.3.1 | UI layer |

---

## Pricing & Stripe Integration

BlackRoad OS offers three subscription tiers, processed via **Stripe**. Webhooks are configured for `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, and `invoice.paid`.

| Plan | Price | Billing | Best For |
|------|-------|---------|----------|
| **Basic** | $9 / month | Monthly | Individuals and small teams exploring the platform |
| **Pro** | $29 / month | Monthly | Growing teams running production workloads |
| **Enterprise** | $99 / month | Monthly | Large organisations requiring SLA, SSO, and dedicated support |

> Stripe configuration lives in [`stripe-config.json`](stripe-config.json). Contact **blackroad.systems@gmail.com** to enable enterprise billing or discuss custom pricing.

---

## Documentation Index

### Getting Started

| Document | Description |
|----------|-------------|
| [Quick Start](docs/getting-started/quick-start.mdx) | Run the docs locally and tour the repos |
| [Welcome](docs/getting-started/welcome.mdx) | Introduction to BlackRoad OS |
| [FAQ](docs/getting-started/faq.mdx) | Unblock common onboarding questions |
| [Local Setup](docs/getting-started/SETUP.md) | Full local environment setup |
| [Infra Map Quickstart](docs/getting-started/infra-map-quickstart.md) | Infrastructure overview for new operators |

### Platform Guides

#### Core
| Document | Description |
|----------|-------------|
| [Platform Overview](docs/platform-guides/core/platform-overview.mdx) | Layered picture from identity to interface |
| [Stack Map](docs/platform-guides/core/stack-map.mdx) | Repositories mapped to layers and status |
| [Core Primitives](docs/platform-guides/core/core-primitives.mdx) | Foundational building blocks |
| [Repos & Services](docs/platform-guides/core/repos-and-services.mdx) | Full repo directory |
| [Seasons Overview](docs/platform-guides/core/seasons-overview.mdx) | How the roadmap is structured |
| [Local Development](docs/platform-guides/core/local-development.mdx) | Spin up the full stack locally |
| [Agents: Atlas & Friends](docs/platform-guides/core/agents-atlas-and-friends.mdx) | Agent registration, identity, and state |
| [Events & RoadChain](docs/platform-guides/core/events-and-roadchain.mdx) | Journaling, blocks, and the chain explorer |

#### API
| Document | Description |
|----------|-------------|
| [API Overview](docs/platform-guides/api/api-overview.mdx) | HTTP surface exposed by `blackroad-os-api` |
| [Extending Agents](docs/platform-guides/api/extending-agents.mdx) | Adding new automation safely |

#### Operator
| Document | Description |
|----------|-------------|
| [Operator Runtime](docs/platform-guides/operator/operator-runtime.mdx) | How agents run and emit events |
| [Infra Guide](docs/platform-guides/operator/infra-guide.mdx) | Deployment and configuration guide |
| [Environments](docs/platform-guides/operator/environments.mdx) | Environment definitions |
| [DNS & Networking](docs/platform-guides/operator/dns-and-networking.mdx) | Domain and network configuration |
| [Deployments & Runbooks](docs/platform-guides/operator/deployments-and-runbooks.mdx) | Deployment procedures |

#### Prism Console
| Document | Description |
|----------|-------------|
| [Prism Console](docs/platform-guides/prism-console/prism-console.mdx) | Cockpit for system status, agents, finance, and events |

### Agent Catalog & Roles

| Document | Description |
|----------|-------------|
| [Catalog Overview](docs/agent-catalog/overview.mdx) | All agent personas, roles, and capabilities |
| [Org Chart](docs/agent-catalog/org-chart.mdx) | Visual org chart (auto-generated from `agents.yaml`) |
| [Atlas](docs/agents/atlas.mdx) | Atlas agent specification |
| [Lumen](docs/agents/lumen.mdx) | Lumen agent specification |
| [World Engine](docs/agents/world-engine.mdx) | World Engine agent specification |

### Packs

| Document | Description |
|----------|-------------|
| [Finance Pack Overview](docs/packs/finance/overview.mdx) | Treasury and billing automation with PS-SHA∞ evidence |
| [Finance Layer](docs/packs/finance/finance-layer.mdx) | Finance architecture detail |
| [Pain Points](docs/packs/finance/pain-points.mdx) | Problems BlackRoad OS solves for finance teams |
| [Value Proposition](docs/packs/finance/value-proposition.mdx) | Benefits for creators, teams, and partners |
| [Education Pack Overview](docs/packs/education/overview.mdx) | Learning workflows for compliance-heavy orgs |

### Reference

| Document | Description |
|----------|-------------|
| [OpenAPI](docs/reference/openapi.mdx) | Full OpenAPI spec rendered via Redoc |
| [CLI Reference](docs/reference/cli.mdx) | All `blackroad` CLI commands and environment variables |
| [KV Schema](docs/reference/kv-schema.md) | Data model for governance objects |
| [API Design](docs/reference/api-design.md) | REST API specification |
| [Architecture Overview](docs/reference/architecture/overview.mdx) | System design and component overview |
| [PS-SHA∞](docs/reference/architecture/ps-sha-infinity.mdx) | Identity persistence specification |
| [Agents & Orchestration](docs/reference/architecture/agents-and-orchestration.mdx) | Orchestration architecture |
| [TypeScript SDK](docs/sdk/typescript.mdx) | SDK for TypeScript integrations |

### Governance & Policy

| Document | Description |
|----------|-------------|
| [Regulatory Overview](docs/governance-policy/regulatory-overview.mdx) | Compliance framework |
| [Audit & Journaling](docs/governance-policy/audit-and-journaling.mdx) | Audit trail and RoadChain journaling |
| [Incident Response](docs/governance-policy/incident-response.mdx) | Incident management procedures |
| [Cece Agent Mode](docs/governance/cece-agent-mode.md) | System prompt for the governance agent |
| [Governance Roadmap](docs/governance/governance-roadmap.md) | Sprint plan and implementation details |

### Runbooks

| Document | Description |
|----------|-------------|
| [Deploy API](docs/runbooks/deploy-api.md) | Deploy `blackroad-os-api` |
| [Deploy Operator](docs/runbooks/deploy-operator.md) | Deploy `blackroad-os-operator` |
| [Deploy Prism](docs/runbooks/deploy-prism.md) | Deploy Prism Console |
| [Deploy Web](docs/runbooks/deploy-web.md) | Deploy the public web frontend |
| [Debug Operator](docs/runbooks/debug-operator.md) | Diagnose operator issues |
| [Incident Playbook](docs/runbooks/incident-playbook.md) | Step-by-step incident response |
| [Rollback Procedures](docs/runbooks/rollback-procedures.md) | Safe rollback across services |

### SDK

| Document | Description |
|----------|-------------|
| [TypeScript SDK](docs/sdk/typescript.mdx) | Integrate BlackRoad OS into TypeScript projects |

### Vision & Strategy

| Document | Description |
|----------|-------------|
| [Manifesto](docs/meta/vision/manifesto.md) | Why BlackRoad exists |
| [Vision & Mission](docs/meta/vision/mission.md) | 5-year roadmap and success metrics |
| [Architecture](docs/meta/vision/architecture.md) | System design and component overview |
| [Glossary](docs/meta/GLOSSARY.mdx) | Key terms and definitions |
| [Implementation Roadmap](docs/IMPLEMENTATION-ROADMAP.md) | Full task tracking |
| [Launch Sequence](docs/LAUNCH-SEQUENCE.md) | Production launch checklist |

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

## Repository Map

| Repository | Purpose |
|-----------|---------|
| [`blackroad-os-docs`](https://github.com/BlackRoad-OS/blackroad-os-docs) | Documentation hub (this repo) |
| `blackroad-os-core` | Desktop UI, auth, identity |
| `blackroad-os-api` | API gateway, REST endpoints |
| `blackroad-os-operator` | Job scheduler, background workers |
| `blackroad-os-agents` | Agent implementations |
| `blackroad-os-infra` | IaC, deployment configs |
| `blackroad-os-web` | Web frontend |
| `blackroad-os-prism-console` | Admin dashboard |
| `lucidia-core` | AI reasoning engines |

---

## Implementation Status

### Phase 1: Foundation (Current)
- [x] Governance layer specification
- [x] KV schema design
- [x] API design
- [x] Docusaurus docs hub
- [x] Stripe billing configuration
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

## Contributing

Keep content concise, link across sections, and prefer iterative updates over monolithic rewrites. Mark components as `planned`, `alpha`, or `in-flight` when appropriate so operators, developers, and partners have an honest view of the system.

See [CONTRIBUTING.md](CONTRIBUTING.md) for style conventions, validation steps, and how to extend the sidebar when adding new pages.

---

## Links

- **Website:** [blackroad.systems](https://blackroad.systems)
- **Docs:** [docs.blackroad.systems](https://docs.blackroad.systems)
- **GitHub:** [github.com/BlackRoad-OS](https://github.com/BlackRoad-OS)
- **Contact:** blackroad.systems@gmail.com

---

*The road is long. The road is black. But we're building it together.*

---

## 📜 License & Copyright

**Copyright © 2026 BlackRoad OS, Inc. All Rights Reserved.**

**CEO:** Alexa Amundson | **PROPRIETARY AND CONFIDENTIAL**

This software is NOT for commercial resale. Testing purposes only.

### 🏢 Enterprise Scale
- 30,000 AI Agents
- 30,000 Human Employees
- CEO: Alexa Amundson

**Contact:** blackroad.systems@gmail.com

See [LICENSE](LICENSE) for complete terms.
