# BlackRoad product catalog

This catalog translates the BlackRoad OS vision, pain points, and investor memo into a concrete, shippable product lineup. Each SKU is mapped to repos and domains so teams can align build, docs, and GTM without ambiguity.

## Core flagship: BlackRoad OS (browser-native computer)
- **What it is:** Unified desktop/notebook/studio/lab/console/finance cockpit in a browser-native shell.
- **Who it is for:** Individual creators and chaos-brain users, teams/SMBs, and regulated orgs.
- **Repos:**
  - Meta: `blackboxprogramming/BlackRoad-Operating-System` (OS core, backend, CI/CD)
  - Frontend: `BlackRoad-OS/blackroad-os-web`, `BlackRoad-OS/blackroad-os-docs`
- **Domains:** `blackroad.systems` (primary app), `blackroad.io` (marketing/dev portal)
- **In-OS products:** Desktop/Canvas, Notebook/Docs, Studio/Creator Hub, Lab/Math & Science, Prism Console, Finance Cockpit.
- **Pricing anchors:** Individual $20/mo; Team $100/mo per 5 seats; Enterprise $1k+/mo.

## BlackRoad Meta API (unified credentials + orchestration)
- **What it is:** Users drop in third-party API keys once; BlackRoad exposes a unified surface (`/v1/chat`, `/v1/vector/search`, `/v1/tools/*`) and can auto-deploy stack templates.
- **Capabilities:** Credentials vault, unified API routing/failover, deployment orchestrator for core-api/operator/Prism Console via Railway with env injection.
- **Repos:** New service under `services/meta-api/` alongside `core-api` and `public-api`; uses the shared TypeScript SDK (`@blackroad/sdk`).
- **Domains:** `api.blackroad.systems` or `meta.blackroad.systems`.
- **Plans:** Free (1 integration, rate-limited), Pro (multiple providers, logging, routing), Enterprise (stack templates + self-host deploys).

## Prism Console (agent & infra control plane)
- **What it is:** Real-time dashboard for agent status, policies, budgets, escalation, audit logs (PS-SHA∞), and resource analytics.
- **Repos:** `blackboxprogramming/blackroad-prism-console`, `BlackRoad-OS/blackroad-os-prism-console`.
- **Domain:** `console.blackroad.systems`.
- **Packaging:** In-OS "Agent & Infra Control Room" plus a standalone $50–$200/mo SKU for teams monitoring their agent stacks.

## Agent orchestration stack
### BlackRoad Agent Orchestrator
- **What it is:** Schedules jobs across 1,000+ named agents, maintains append-only memory journals, and handles event-driven messaging.
- **Repos:** `blackboxprogramming/blackroad-api`, `BlackRoad-OS/blackroad-os-core` (agents runtime and APIs).
- **Use case:** Teams wanting multi-agent workflows without designing orchestration.

### BlackRoad Operator Engine
- **What it is:** Worker engine for queues, periodic tasks, and long-running flows.
- **Repos:** `BlackRoad-OS/blackroad-os-operator` and `operator_engine` inside the meta repo.
- **Packaging:** Bundle orchestrator + operator + Prism Console as the **Agent Stack** (Starter = orchestrator + Meta API; Pro = orchestrator + operator + Prism Console).

## Lucidia (reasoning and creative layer)
- **What it is:** Paraconsistent reasoning with trinary logic that turns chaotic inputs into structured specs, grammars, and flows.
- **Products:**
  - **Lucidia Studio:** Web app for defining logic/worlds and transforming messy inputs (creator/engineer $10–$30/mo).
  - **Lucidia Engine API:** `/v1/lucidia/*` validation, reasoning, and chaos-to-structure endpoints (exposed via Meta API but branded separately).
  - **Grammars & Templates Marketplace:** Community logic packs and agent workflows with revenue share (10–30%).
- **Domains:** `lucidia.earth` (manifesto/playground), `lucidia.studio` (app), `lucidiaqi.com` (quantum intersection).

## Quantum / QI / finance stack
- **What it is:** Quantum-inspired financial intelligence and optimization surfaced to OS users.
- **Products:**
  - **BlackRoad QI Lab:** Browser-native environment for portfolio simulations, risk modeling, and quantum-style optimization (add-on for Pro/Enterprise).
  - **Quant API:** `/v1/qi/*` endpoints for optimization and scenario analysis (exposed via Meta API but branded separately).
  - **Courses & Tools:** Education, labs, and templates under `.shop/.store` domains.
- **Domains:** `blackroadqi.com`, `blackroadquantum.com` (plus `.info/.net/.shop/.store`).

## Creator sanctuary & education
- **BlackRoad Creator Studio:** Music/art/film/game preproduction hub; includes AI error breakdowns and visual helpers for creators.
- **BlackRoad Edu / Learning Pods:** Integrated tutor, visual math/sci/CS environment, and teacher dashboards.
- **Pricing:** Creator plans align with OS individual tiers; student/education discounts ($5–$15/mo) with school licensing.

## Hardware, compute, and network
- **Hardware Check-In:** OS feature to benchmark and validate GPUs/Pi/boxes for rentable capacity.
- **RoadCompute (future):** Contribute nodes to a pooled network and earn credits; orchestrated via agents.
- **Domain:** `blackroad.network` for marketplace/network presence.

## Admin shell (forms and life admin killer)
- **What it is:** Drop PDFs/links/portals; OS parses fields, autofills from identity/history, requests missing data, and tracks submissions with governance/compliance overlays.
- **Who it serves:** Individuals with admin load; HR/onboarding/compliance teams.

## Domain map (routing cheat sheet)
- `blackroad.systems` → app OS, console, API subdomains
- `blackroad.io` → marketing + public docs
- `blackroadinc.us` → investor/corporate pages
- `blackroad.network` → agent/compute/worlds network
- `blackroadai.com` → AI thought leadership
- `blackroad.me` → founder/operator story
- `blackroadqi.com` / `blackroadquantum.*` → finance + compute stack
- `lucidia.earth` / `lucidia.studio` / `lucidiaqi.com` → reasoning & creative products

## Launch-now focus (what to surface immediately)
Stand up clear product fronts on `blackroad.systems` and `blackroad.io` to make the suite visible:
1. **BlackRoad OS** – main landing with OS + feature overview.
2. **BlackRoad Meta API** – page and FastAPI service skeleton under `services/meta-api/`.
3. **Prism Console** – product page; link to console subdomain when ready.
4. **Agent Stack** – orchestrator + operator engine packaged offer.
5. **Lucidia Studio** – marketing page (`lucidia.studio`) even as MVP.
6. **BlackRoad QI Lab** – "coming soon" positioning on `blackroadquantum.com`.
7. **Creator Studio & Admin Shell** – highlighted as OS-native features.
