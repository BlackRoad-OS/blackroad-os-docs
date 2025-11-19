# Agents runtime

Describe how agents are scheduled, executed, and monitored. This complements the architecture diagrams and queue details.

- Runtime responsibilities: pick jobs from queues, call Core API, emit telemetry.
- Deployment: packaged alongside the Core platform on Railway; surface `/health` for liveness.
- Configuration: align with `AGENTS_API_URL` and queue configs documented below.

TODO: Add lifecycle diagrams and scaling strategies per environment.
