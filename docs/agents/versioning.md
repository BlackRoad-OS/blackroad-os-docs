---
id: versioning
title: Agent Versioning
sidebar_position: 5
---

Agents must advertise their runtime version and compatible API level.

- Use semantic versions for worker images (e.g., `1.2.0`).
- Publish a compatibility matrix with core API revisions.
- Require canary rollout before promoting new worker images.

> TODO: Add sample rollout steps and how to flip traffic by queue.
