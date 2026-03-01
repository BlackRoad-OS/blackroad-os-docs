# Agent Catalog

The authoritative directory of all BlackRoad OS agents — their personas, roles, capabilities, and pack assignments.

## Index

| Document | Description |
|----------|-------------|
| [Catalog Overview](overview.mdx) | All agent personas, roles, and capabilities |
| [Org Chart](org-chart.mdx) | Visual org chart (auto-generated from `agents.yaml`) |

## Individual Agents

| Document | Agent | Description |
|----------|-------|-------------|
| [Atlas](../agents/atlas.mdx) | Atlas | Core orchestration agent |
| [Lumen](../agents/lumen.mdx) | Lumen | Intelligence and reasoning agent |
| [World Engine](../agents/world-engine.mdx) | World Engine | Environmental simulation agent |

## How the Catalog Works

Agent metadata lives in [`agent-catalog/agents.yaml`](../../agent-catalog/). At build time, `scripts/build-catalog-docs.ts` generates individual agent pages so every persona stays in sync with a single source of truth.

To add a new agent:

1. Add an entry to `agent-catalog/agents.yaml` with the required fields (`id`, `name`, `role`, `pack`).
2. Run `npm run build:catalog` to generate or update the agent's docs page.
3. If the agent ships with governance rules, add policies under `docs/governance-policy/`.

## Related

- [Packs](../packs/README.md) — domain-specific agent bundles
- [Agents: Atlas & Friends](../platform-guides/core/agents-atlas-and-friends.mdx) — registration and identity
- [Operator Runtime](../platform-guides/operator/operator-runtime.mdx) — how agents execute
