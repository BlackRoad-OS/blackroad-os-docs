---
title: Railway service bootstrap
id: railway-service-bootstrap
sidebar_position: 8
---

A repeatable checklist for turning generated service scaffolding into a live Railway deployment with health and version endpoints online.

## When to use this
Use this when copying AI-generated service blueprints (e.g., the nine-service stack: Serene Success, Langtrace Client, Postgres, Node.js API, Fantastic Ambition Orchestrator, FastAPI, Redis Utility, Bun Function, Hello World) into real repositories and Railway services.

## Prerequisites
- GitHub repo created for the service (org: `BlackRoad-OS` or `blackboxprogramming`).
- Railway project access with a target environment.
- Service code pasted locally from the generation prompt.

## 1. Create the repo from the scaffold
1. Copy the service section from the generation prompt into the repo with the exact folder/file names.
2. Confirm the entrypoint file exposes `/health`, `/version`, and `/` routes. Standard paths:
   - HTTP servers: `/health` returns `{status:"ok"}`, `/version` returns commit + build info, `/` returns a friendly message.
   - Workers/cron jobs: ensure a lightweight HTTP server purely for health/version.
3. Add the platform files provided in the prompt (`Dockerfile`, `railway.json`, environment sample). Keep port bindings at `8080` unless the scaffold states otherwise.
4. Commit and push to `main` (or the target branch) before wiring Railway.

## 2. Wire the Railway service
1. Create or connect the Railway service to the new repo.
2. Set build and start commands from the prompt. If none are specified, default to:
   ```bash
   Build: npm install && npm run build
   Start: npm run start
   Port: 8080
   ```
3. Add environment variables from the prompt. Leave secrets blank until available, but keep required names present so the build does not fail.
4. Enable a health probe:
   - Path: `/health`
   - Interval: 30s (or the project default)
   - Timeout: 5s

## 3. Deploy and verify
1. Trigger a deploy in Railway.
2. After deploy succeeds, check the three endpoints:
   - `https://<service>.up.railway.app/health` → `status: ok`
   - `https://<service>.up.railway.app/version` → includes commit hash or build timestamp
   - `https://<service>.up.railway.app/` → friendly welcome text
3. If any endpoint fails:
   - Reconfirm the server listens on `process.env.PORT || 8080` (or equivalent in the scaffold).
   - Ensure the Dockerfile `EXPOSE` matches 8080.
   - Re-run locally with `PORT=8080 npm run start` and hit the endpoints.

## 4. Rinse and repeat for all services
Once one service is green, reuse the same pattern for the remaining scaffolds. The fastest sequence is:
1. Duplicate the repo creation steps for the next service.
2. Connect the new repo to a fresh Railway service.
3. Reapply the same build/start/health configuration.
4. Verify the three endpoints again.

Document each success by posting the repo name plus a screenshot or response body from `/health` and `/version` so others can audit quickly.
