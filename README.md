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
# BlackRoad OS — Codex & Docs  

## Short Description  

Central documentation hub for BlackRoad OS, Lucidia, agents, and research.  

## Long Description  

Codex & Docs hosts the official documentation, language specifications, architecture breakdowns, agent standards, operating procedures, compliance profile, and developer guides for the BlackRoad ecosystem.  

## Structured Table  

| Field | Value |  
| --- | --- |  
| **Purpose** | Documentation, specs, research papers |  
| **Depends On** | None |  
| **Used By** | Everyone |  
| **Owner** | Alexa (Chief Architect) |  
| **Status** | Ongoing — grows with the system |  

## Roadmap Board (Docs)  

Columns:  

- Outline  
- Drafting  
- Review  
- Format  
- Publish  

Sample tasks:  

- Lucidia language spec  
- Architecture master diagram  
- Agent compliance rules  
- OS overview docs  
- Install & dev environment guide 
# BlackRoad OS Documentation

Documentation hub for BlackRoad OS, Lucidia, Quantum Lab, and agents.

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
