---
id: product-directory
title: BlackRoad Product Directory
sidebar_position: 6
---

A concise catalog of the BlackRoad ecosystem: the OS meta repo, revenue-ready SaaS surfaces, agentic products, and supporting compute. 
Use this page to point investors, operators, and builders at the live entry points and deployment models.

## Abstract: ecosystem value proposition
- Unified operating system anchored by the BlackRoad OS meta repository and shared domain network.
- Ship-fast posture: repos wired for CI/CD to Railway/Fly.io with Cloudflare protection.
- Revenue focus: SKU-level clarity, target ARPU of $40–$80/mo, and upsell paths into compute + creator tools.

## Introduction: mission and scope
- Mission: deliver a cohesive suite that operators can deploy in hours, not weeks, with predictable observability and governance.
- Scope: core backend/API, Prism Console, web and agent surfaces, Lucidia/QI, admin tooling, and emerging creator/compute offers.
- Audience: GTM partners, investors, and builders evaluating integration or expansion.

## Core products (1–9)
1. **BlackRoad OS (Meta Repository)** — orchestration repo aligning domains, CI/CD workflows, and shared environment conventions.
   - Deploys docs, schema assets, and shared health/version endpoints across environments.
2. **Meta API / Core Backend** — authenticated APIs that front data models and power all downstream surfaces.
   - Runs on Railway with Cloudflare caching and probes at `/health` and `/version`.
3. **Web App** — user-facing journeys backed by the Core API and released alongside the docs site for unified branding.
4. **Prism Console** — operator control plane with queue visibility, config panels, and incident tooling.
   - Designed for operator and admin personas with audit-friendly defaults.
5. **Agents Runtime** — workers processing queued jobs against the Meta API and external systems.
   - Includes queue topics, scaling hooks, and versioned contracts.
6. **Lucidia** — creator- and user-facing AI experiences (e.g., copilots, generative workflows) delivered via web and console extensions.
7. **QI Lab** — quantitative insights and experimentation surface layered on Core API telemetry and console data.
8. **Admin/Operator Surfaces** — internal panels for environment toggles, tenant controls, and billing instrumentation.
9. **Compute & Partner Extensions** — Railway/Fly.io deploys, domain management, and SDKs/CLI for creators and partners.

## Financial overview
- Pricing anchor: $40–$80 monthly ARPU per active seat, with add-ons for compute, data retention, and managed support.
- Bundles: core (API + Web), operations (Prism + Agents), and advanced (Lucidia/QI) with volume-based discounts.
- GTM: start with self-serve trials, then layer operator-led onboarding and private offers for enterprise tenants.

## Roadmap & timelines
- **Q1**: stabilize Meta API + Web/App flows, document env var matrices, and harden health/version probes.
- **Q2**: broaden Prism Console coverage (queues, audits), ship Lucidia beta, and open partner SDK preview.
- **Q3**: productionize QI Lab, expand agent families, and roll out managed compute tiers across domains.
- **Ongoing**: brand unification across `blackroad.systems` and `blackroad.io`, with shared CI/CD templates.

## Integration discussion
- All public surfaces should consume the Core API and share auth patterns; avoid bespoke adapters per surface.
- Agents must emit traces and metrics aligned with backend observability to keep incident handling predictable.
- Cloudflare remains the ingress layer; keep domain routing and cache headers consistent between Web and Console.
- New extensions (SDKs/CLI) should reuse the environment variable taxonomy documented in the intro and infra sections.

## References & repos
- Docs site: this repository ([blackroad-os-docs](https://github.com/blackroad-os-docs)), deployed via Railway with canonical hostnames derived from `PUBLIC_DOCS_URL`.
- Core backend: [blackroad-os-core](https://github.com/blackroad-os-core).
- Web app: [blackroad-os-web](https://github.com/blackroad-os-web).
- Prism Console: [blackroad-os-console](https://github.com/blackroad-os-console).
- Agents runtime: [blackroad-os-agents](https://github.com/blackroad-os-agents).
