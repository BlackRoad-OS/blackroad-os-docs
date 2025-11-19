# Environment reference

Track the dev, staging, and prod mappings for the docs site and related services. Use `PUBLIC_DOCS_URL` plus the optional URLs in `src/config/docsConfig.js` to keep cross-links aligned.

| Environment | Docs URL | Core API | Web App | Console | Agents API |
| --- | --- | --- | --- | --- | --- |
| Dev | http://localhost:3000 (default) | `CORE_API_URL` | `WEB_APP_URL` | `CONSOLE_URL` | `AGENTS_API_URL` |
| Staging | https://staging.docs.blackroad.systems | Update per deployment | Update per deployment | Update per deployment | Update per deployment |
| Prod | https://docs.blackroad.systems | Update per deployment | Update per deployment | Update per deployment | Update per deployment |

Usage example (client code):

```js
import docsConfig from '@site/src/config/docsConfig';

console.log('Docs served from', docsConfig.publicDocsUrl);
```

TODO: Add per-service secrets and operational notes as they stabilize.
