# Deploying to Cloudflare Workers

> Ship BlackRoad services to the Cloudflare edge in minutes

## Prerequisites

```bash
npm install -g wrangler
wrangler login
```

## Basic Worker

```typescript
// src/index.ts
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ status: "ok", region: request.cf?.colo });
    }

    // Forward to gateway
    return fetch(`http://127.0.0.1:8787${url.pathname}`, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  }
};

interface Env {
  GATEWAY_URL: string;
  BLACKROAD_TOKEN: string;
}
```

## wrangler.toml

```toml
name = "blackroad-service"
main = "src/index.ts"
compatibility_date = "2024-12-01"
account_id = "848cf0b18d51e0170e0d1537aec3505a"

[vars]
ENVIRONMENT = "production"

[[kv_namespaces]]
binding = "CACHE"
id = "<your-kv-namespace-id>"

[[d1_databases]]
binding = "DB"
database_name = "blackroad"
database_id = "<your-d1-database-id>"
```

## Deploy

```bash
# Deploy worker
wrangler deploy

# With secrets
wrangler secret put BLACKROAD_TOKEN

# Deploy Pages (static site)
wrangler pages deploy ./out --project-name=blackroad-os

# Tail logs live
wrangler tail
```

## KV Storage Pattern

```typescript
// Cache agent state
await env.CACHE.put(`agent:${agentId}`, JSON.stringify(state), {
  expirationTtl: 86400,  // 1 day
});

const state = await env.CACHE.get(`agent:${agentId}`, "json");
```

## D1 Database Pattern

```typescript
// Store world artifacts
const stmt = env.DB.prepare(
  "INSERT INTO worlds (id, type, content, created_at) VALUES (?, ?, ?, ?)"
);
await stmt.bind(id, type, content, new Date().toISOString()).run();

const worlds = await env.DB.prepare(
  "SELECT * FROM worlds ORDER BY created_at DESC LIMIT 50"
).all();
```

## Custom Domain

```bash
# Add route in wrangler.toml
[[routes]]
pattern = "api.blackroad.ai/*"
zone_name = "blackroad.ai"
```

## Account Details
- Account ID: `848cf0b18d51e0170e0d1537aec3505a`
- Primary zone: `blackroad.ai`
- Workers: 75+ deployed
