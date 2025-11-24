# Contributing to BlackRoad OS Docs

This repository is the canonical source of truth for BlackRoad OS documentation. Contributions should help operators, partners, and developers understand the system quickly without sacrificing accuracy.

## Quick setup
- Use Node.js 20+ with npm or pnpm installed.
- Install dependencies once via `npm install`.
- Run `npm run start` for the local docs server at http://localhost:3000.

## Writing guidelines
- Write in Markdown using `##` for sections and `###` for subsections.
- Prefer relative links like `[Agents](/docs/agents.md)` so content works in GitHub and static exports.
- Keep paragraphs short, use bullet lists for steps, and clearly mark components as planned/alpha/in-flight when applicable.
- Reuse diagrams via Mermaid blocks or link to shared assets (e.g., Lucidia/QI) instead of embedding large binaries.

## Adding or updating pages
- Place new documents under the closest matching folder within `docs/` (for example, `docs/dev/` for developer-facing content).
- Update `sidebars.ts` when adding new top-level pages so navigation stays in sync.
- Include concise frontmatter (title, slug) and cross-link related pages to reduce duplication.

## Validation checklist
- Run `npm run build` to catch broken links and frontmatter issues before opening a pull request.
- Use `npm run serve` to locally review the production build when changing navigation or layout-heavy content.
- If you encounter stale artifacts, run `npm run clean` to reset the Docusaurus cache.

## Pull request expectations
- Keep changes scoped and describe the audience and intent in the PR summary.
- Call out cross-repo impacts (e.g., updates required in `blackroad-os-operator` or `blackroad-os-api`).
- Favor iterative updates over large rewrites so reviewers can ship improvements continuously.
