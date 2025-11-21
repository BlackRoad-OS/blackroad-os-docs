---
id: meta-api
title: Meta API Placement
sidebar_position: 8
---

The Meta API is the single entrypoint for all external APIs. Host it as a sibling Python service inside the existing `blackboxprogramming/BlackRoad-Operating-System` monorepo.

## Repository placement
- Add a new service directory under `services/meta-api` alongside the other deployed APIs.
- Keep it self-contained so CI/CD, Railway, and local tooling detect it automatically.

```text
BlackRoad-Operating-System/
  services/
    core-api/
    public-api/
    meta-api/        # new service lives here
  operator_engine/
  prism-console/
  templates/
    minimal-service/
```

## Minimum scaffold
Start with the same Dockerfile pattern used by `services/core-api` or `services/public-api` so deployment behaves consistently.

```text
services/meta-api/
  Dockerfile
  requirements.txt
  app/
    __init__.py
    main.py        # FastAPI app exposing /v1/tenant, /v1/integrations, /v1/chat
```

Guidelines:
- `main.py` should instantiate the FastAPI app and register the three primary routes (`/v1/tenant`, `/v1/integrations`, `/v1/chat`).
- Reuse the base Python image, poetry/pip strategy, and environment variable patterns already present in the other API Dockerfiles.

## Railway deployment
1. Connect the **same** repository (`BlackRoad-Operating-System`) in Railway.
2. Set the service **root directory** to `services/meta-api` so Railway builds from that folder.
3. Use the Dockerfile in `services/meta-api` for the build.
4. Assign a domain such as `meta.blackroad.systems` and treat this as the only externally exposed API endpoint.

This keeps all API entrypoints consolidated behind the Meta API while matching the existing monorepo and deployment patterns.
