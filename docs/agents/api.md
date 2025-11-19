---
id: api
title: Agent API
sidebar_position: 4
---

The agent API allows controlled job submission and callbacks.

| Route | Method | Purpose |
|-------|--------|---------|
| `/agents/jobs` | POST | Submit a job with payload + priority |
| `/agents/jobs/:id/ack` | POST | Acknowledge receipt |
| `/agents/jobs/:id/complete` | POST | Mark complete with result payload |

> TODO: Add authentication (HMAC/signing) details and error codes.
