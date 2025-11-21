# BlackRoad OS – Docs

Documentation portal for the BlackRoad Operating System.

## Stack
- Docusaurus v3 + React
- JavaScript

## Running locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000 (or the port set in the env).

## Build & start
```bash
npm run build
npm start
```
The start command serves the static build on port 8080 by default.

## Key routes
- `/` – docs homepage
- `/getting-started` – introduction and onboarding checklist
- `/architecture` – high-level architecture overview
- `/services` – service catalog
- `/api/health` – static health payload
- `/api/info` – static service metadata

## Railway deployment
- Port: 8080
- Healthcheck path: `/api/health`
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Required env vars: see `.env.example`

## Environment variables
Copy `.env.example` and adjust values as needed for your environment. Service URLs default to the production `blackroad.systems` domains.
