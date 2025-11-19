# Web app environment variables

Track the configuration needed for the BlackRoad Web UI. Align this table with the `WEB_APP_URL` value in `src/config/docsConfig.js` and the environment reference under infra.

| Variable | Purpose | Notes |
| --- | --- | --- |
| `WEB_APP_URL` | Public URL for the Web UI | Used in cross-links from docs and Console |
| `CORE_API_URL` | API the Web UI talks to | Keep in sync with backend deployments |

TODO: Add feature flag toggles and analytics settings as they are introduced.
