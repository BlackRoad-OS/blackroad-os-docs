# Railway deployment

Railway hosts the docs site alongside other BlackRoad OS services. Deploy using the `docs-site` service defined in `railway.json` with `npm run build` followed by `npm run start`.

- Branch mappings: dev, staging, and prod map to Railway environments of the same name.
- Health probes: `/health` returns status JSON; `/version` returns build metadata.
- Config: ensure `PUBLIC_DOCS_URL` is set per environment so canonical links resolve correctly.

TODO: Add screenshots of Railway service settings and environment variable layouts.
