---
id: style-guide
title: Style Guide
sidebar_position: 6
---

## Voice & Tone
- Confident, direct, and operational. Avoid fluff.
- Prefer active voice and short paragraphs.

## Markdown rules
- One H1 per page via frontmatter `title`.
- Use ordered lists for runbooks and unordered lists for concepts.
- Keep code blocks annotated (js, ts, bash, json).

## File naming
- Kebab-case filenames, aligned to topics (e.g., `environment-config.md`).
- Keep directories scoped by domain (core, web, console, agents, infra, onboarding).

## Code blocks
- Prefer concise examples. Show inputs + outputs when relevant.
- Use `json` for payloads and `bash` for CLI commands.

## Frontmatter template
```yaml
---
title: <Page Title>
id: <section-id>
sidebar_position: <order>
---
```

## Diagramming
- Use Mermaid for sequence, flow, and architecture diagrams.
- Store static images in `static/img` and reference with relative paths.

## Templates
- **Endpoint page**: summary, auth, request, response, errors, sample curl.
- **Agent descriptor**: responsibilities, queue topics, inputs/outputs, scaling, alarms.
- **Component doc**: props table, state diagram, integration notes.
