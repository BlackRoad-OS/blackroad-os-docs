---
id: worker-architecture
title: Worker Architecture
sidebar_position: 2
---

Workers should be horizontally scalable and stateless. Recommended pattern:

- Use Redis or Postgres-backed queues for durability.
- Keep jobs idempotent with replay-safe operations.
- Emit heartbeats and job lifecycle events to the core backend.

> TODO: Diagram the queue/topic topology and backoff strategies.
