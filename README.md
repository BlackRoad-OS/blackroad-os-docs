# BlackRoad OS Docs

This repository hosts the **official documentation hub** for BlackRoad OS. It aligns architecture language, operational guidance, developer surfaces, and business context across the stack while participating in the shared **"BlackRoad OS - Master Orchestration"** project.

Built with **Docusaurus v3**, the site lives at the docs root (`routeBasePath: '/'`) and mirrors the same components found in `blackroad-os-core`, `blackroad-os-operator`, `blackroad-os-api`, `blackroad-os-prism-console`, `blackroad-os-web`, and `blackroad-os-infra`.

## Prerequisites

- Node.js 20+ (see `package.json` engines)
- npm or pnpm for dependency management

## Running the docs locally

```bash
npm install
npm run start
```

The dev server runs at http://localhost:3000.

## Building for production

```bash
npm run build
npm run serve
```

`npm run serve` serves the static build locally for validation.

## Where to start
- [Docs Home](docs/index.md) — choose your path for operating, building, or understanding the OS.
- [Stack Map](docs/overview/STACK_MAP.md) — repositories mapped to layers and status.
- [Prism Console](docs/ops/PRISM_CONSOLE.md) — cockpit for operators.
- [Core Primitives](docs/dev/CORE_PRIMITIVES.md) — shared domain types for agents, jobs, and events.

## Contributing
Keep content concise, link across sections, and prefer iterative updates over monolithic rewrites. Mark components as planned/alpha/in-flight when appropriate so operators, developers, and partners have an honest view of the system. See [CONTRIBUTING.md](CONTRIBUTING.md) for style conventions, validation steps, and how to extend the sidebar when adding new pages.
