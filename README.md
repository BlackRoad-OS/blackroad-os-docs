# BlackRoad OS – Docs

Documentation portal for the BlackRoad Operating System built with **Next.js (Pages Router) + React**.

## Local development
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Build & serve (Railway-ready)
- **Framework:** Next.js 14 (Pages Router)
- **Package manager:** npm
- **Build command:** `npm run build`
- **Start command:** `npm start` (internally runs `next start -H 0.0.0.0 -p ${PORT:-8080}`)

The production server binds to `0.0.0.0` and honors `PORT` (default 8080 for Railway).

### Health check
- Path: `/api/health`
- Sample response:
```json
{
  "status": "ok",
  "service": "docs"
}
```
The start command serves the production build. It binds to `0.0.0.0` and uses the `PORT` environment variable (default `8080`).

## Key routes
- `/` – docs homepage
- `/getting-started` – introduction and onboarding checklist
- `/architecture` – high-level architecture overview
- `/services` – service catalog
- `/api/health` – health payload
- `/api/info` – service metadata

## Railway deployment

`railway.json` is preconfigured for the `blackroad-os-docs` service:

- **Build command:** `npm install && npm run build`
- **Start command:** `npm start`
- **Healthcheck path:** `/api/health`
- **Port:** Railway sets `PORT` (defaulted to 8080 in the start script)

No additional static export step is required; the site runs via the Next.js production server.

## Environment variables
Copy `.env.example` and adjust values as needed for your environment. Service URLs default to the production `blackroad.systems`
domains.

## Documentation Structure

This repository contains Markdown-based documentation organized by component:

### `/docs/os/`
Operating system documentation including architecture, features, and development guides.
- `overview.md` - Main OS overview and architectural information

### `/docs/lucidia/`
Documentation for the Lucidia programming language and runtime.
- `overview.md` - Language specification, runtime details, and agent programming model

### `/docs/quantum/`
Quantum Lab documentation (coming soon).

### `/docs/agents/`
Agent framework and implementation documentation (coming soon).

### `/docs/infra/`
Infrastructure and deployment documentation (coming soon).

## Contributing

Contributions are welcome! Please ensure all documentation follows Markdown formatting standards.

## Navigation

- [OS Overview](docs/os/overview.md)
- [Lucidia Overview](docs/lucidia/overview.md)
