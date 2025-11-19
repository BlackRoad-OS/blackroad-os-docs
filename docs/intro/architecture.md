# BlackRoad OS architecture

A layered platform stitches together the Core API, frontends (Web UI and Prism Console), and the Agents runtime. Each surface is documented in its own section; this page gives you the edges to look for when integrating.

- Core API exposes the contracts that Web UI, Console, and Agents rely on.
- Agents runtime executes queued work against the Core API and external systems.
- Frontends are delivered via Cloudflare and backed by the Core API running on Railway.

For deeper endpoint and environment notes, jump into the component sections linked from the sidebar.
