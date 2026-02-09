# Claude Code Slides

A Slidev presentation about Claude Code's subagents and skills system.

## Project Overview

This is a slide deck built with [Slidev](https://sli.dev) that explains how Claude Code uses subagents and skills to enable specialized, distributed AI-assisted development workflows.

## Tech Stack

- **Slidev** - Markdown-based presentation framework
- **Vue 3** - For interactive components within slides
- **UnoCSS** - Utility-first CSS (Slidev's default)
- **Shiki** - Syntax highlighting
- **Vite** - Build tooling

## Project Structure

```
slides/
├── slides.md              # Main presentation file (all slides)
├── package.json           # Dependencies and scripts
├── vercel.json            # Vercel deployment config
└── .claude/
    ├── agents/            # Custom Claude Code agents
    │   └── slidev-frontend-expert.md
    └── settings.local.json
```

## Development

```bash
# Start dev server with live reload
npm run dev

# Build for production
npm run build

# Export to PDF
npm run export
```

## Slide Syntax

Slides are separated by `---` in `slides.md`. Each slide can have frontmatter:

```md
---
layout: center
transition: slide-left
---

# Slide Title

Content here...
```

### Key Slidev Features Used

- `<v-clicks>` / `<v-click>` - Step-by-step reveals
- `layout: two-cols` with `::right::` separator - Two-column layouts
- `layout: section` - Section dividers
- `layout: center` - Centered content
- Speaker notes via `<!-- comment -->` syntax

## Content Topics

The presentation covers:

1. What is Claude Code
2. The problem with single-agent approaches
3. Subagents (Explore, Plan, Bash, General)
4. Model Context Protocol (MCP)
5. Custom agent creation
6. Skills system
7. Skills vs Agents comparison
8. Comparison with GitHub Copilot
9. Architecture overview

## Deployment

Deployed to Vercel with SPA fallback routing configured in `vercel.json`.

## Working with This Project

When editing slides:

- Keep one idea per slide
- Use `<v-clicks>` for progressive disclosure
- Maintain consistent transitions (`slide-left` throughout)
- Use the built-in layouts before creating custom ones
- Speaker notes go in HTML comments below slide content

When adding new slides:

1. Add `---` separator
2. Include frontmatter with layout and transition
3. Keep text concise - slides support the speaker
