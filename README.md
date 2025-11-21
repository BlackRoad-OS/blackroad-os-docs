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
The start command serves the production build on port 8080.

## Key routes
- `/` – docs homepage
- `/getting-started` – introduction and onboarding checklist
- `/architecture` – high-level architecture overview
- `/services` – service catalog
- `/api/health` – health payload
- `/api/info` – service metadata

## Railway deployment
- Port: 8080
- Healthcheck path: `/api/health`
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Required env vars: see `.env.example`

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
