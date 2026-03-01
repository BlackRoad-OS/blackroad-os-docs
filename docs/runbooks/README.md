# Runbooks

Step-by-step operational procedures for deploying, debugging, and recovering BlackRoad OS services.

## Index

### Deployments

| Runbook | Service | Description |
|---------|---------|-------------|
| [Deploy API](deploy-api.md) | `blackroad-os-api` | Deploy the API gateway to production |
| [Deploy Operator](deploy-operator.md) | `blackroad-os-operator` | Deploy the job scheduler and background workers |
| [Deploy Prism](deploy-prism.md) | `blackroad-os-prism-console` | Deploy the admin dashboard |
| [Deploy Web](deploy-web.md) | `blackroad-os-web` | Deploy the public-facing web frontend |

### Debugging

| Runbook | Description |
|---------|-------------|
| [Debug Operator](debug-operator.md) | Diagnose and resolve operator service issues |

### Incident Response

| Runbook | Description |
|---------|-------------|
| [Incident Playbook](incident-playbook.md) | Step-by-step incident response for all severity levels |
| [Rollback Procedures](rollback-procedures.md) | Safe rollback procedures across all services |

## Usage

Each runbook follows a standard structure:

1. **Prerequisites** — what you need before starting
2. **Steps** — numbered actions to execute in order
3. **Verification** — how to confirm success
4. **Rollback** — how to undo if something goes wrong

## Related

- [Platform Guides](../platform-guides/README.md) — architecture context for operators
- [Incident Response Policy](../governance-policy/incident-response.mdx) — governance rules for incidents
- [Environments](../platform-guides/operator/environments.mdx) — environment-specific configuration
