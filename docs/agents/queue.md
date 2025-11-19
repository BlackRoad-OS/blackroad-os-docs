---
id: queue
title: Queues and Scheduling
sidebar_position: 3
---

Queue semantics should align with the operational SLOs.

| Queue | Purpose | Visibility | Retry Policy |
|-------|---------|-----------|--------------|
| `default` | User-facing work | 60s | exponential backoff, max 5 |
| `critical` | High priority tasks | 15s | linear retry, alert after 3 |
| `dead-letter` | Failures | n/a | manual replay via console |

> TODO: Replace with actual queue names and latency targets.
