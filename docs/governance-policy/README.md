# Governance & Policy

Compliance framework, audit trail configuration, and incident management policies for BlackRoad OS.

## Index

| Document | Description |
|----------|-------------|
| [Regulatory Overview](regulatory-overview.mdx) | Compliance framework and applicable regulations |
| [Audit & Journaling](audit-and-journaling.mdx) | Audit trail configuration and RoadChain journaling |
| [Incident Response](incident-response.mdx) | Incident management procedures and severity levels |

## Related Governance Docs

| Document | Description |
|----------|-------------|
| [Cece Agent Mode](../governance/cece-agent-mode.md) | System prompt and operating rules for the Cece governance agent |
| [Governance Roadmap](../governance/governance-roadmap.md) | Sprint plan and implementation timeline |

## How Governance Works

Every action in BlackRoad OS flows through the **Cece** governance agent before execution. Cece evaluates the action against active **Policies** and logs the outcome to the **Ledger**. The Ledger feeds into **RoadChain**, providing an immutable, tamper-evident audit trail.

Operators can inspect all governance events in [Prism Console](../platform-guides/prism-console/prism-console.mdx).

## Related

- [Runbooks: Incident Playbook](../runbooks/incident-playbook.md) — operational response to policy violations
- [Reference: Architecture](../reference/architecture/overview.mdx) — how governance integrates with the rest of the stack
