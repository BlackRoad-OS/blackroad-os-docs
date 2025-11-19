---
id: overview
title: Core Backend Overview
sidebar_position: 1
---

The core backend exposes authenticated APIs, orchestrates data, and powers both the Web UI and Prism Console. It is deployed as the primary Railway service and fronts Cloudflare for caching and protection.

## Responsibilities
- API contracts for UI and agents
- Data persistence and migrations
- Observability emitters (logs, metrics, traces)
- AuthN/AuthZ for operator and partner personas

> TODO: Link to core OpenAPI or GraphQL schema once published.
