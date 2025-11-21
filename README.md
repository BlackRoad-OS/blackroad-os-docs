# BlackRoad OS – Docs

Documentation portal for the BlackRoad Operating System.

## Stack
- Next.js + React
- JavaScript

## Running locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Build & start
```bash
npm run build
npm start
```
The start command serves the production build. By default, it uses port 3000, but you can set the `PORT` environment variable to use a different port (e.g., `PORT=8080 npm start`).

## Key routes
- `/` – docs homepage
- `/getting-started` – introduction and onboarding checklist
- `/architecture` – high-level architecture overview
- `/services` – service catalog
- `/api/health` – health payload
- `/api/info` – service metadata

## Railway deployment

This project is configured for Railway deployment using `railway.json`. The configuration includes:

- **Port**: Railway will automatically set the `PORT` environment variable (typically 8080)
- **Healthcheck path**: `/api/health`
- **Build command**: `npm install && npm run build`
- **Start command**: `npm start`
- **Required env vars**: see `.env.example`

The configuration uses Railway's modern schema with automatic restart on failure and health monitoring.

## Environment variables
Copy `.env.example` and adjust values as needed for your environment. Service URLs default to the production `blackroad.systems` domains.
