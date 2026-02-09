---
theme: default
class: text-center
transition: slide-left
highlighter: shiki
colorSchema: dark
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80
---

# Claude Code

The Intelligent Engine Powering Blackmagic AI

<div class="text-lg opacity-75 mt-4">
  Explore the cutting-edge AI architecture behind next-generation development
</div>

<div class="pt-12">
  <span class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space to begin
  </span>
</div>

<!--
Welcome to this presentation about Claude Code's powerful subagent and skills system.
We'll explore how these features transform AI-assisted development.
-->

---
layout: center
transition: slide-left
---

# What is Claude Code?

<v-clicks>

- Anthropic's **official CLI tool** for AI-powered development
- An **agentic coding assistant** that lives in your terminal
- Reads and writes files across your entire codebase
- Executes terminal commands and scripts
- Searches code with advanced pattern matching
- Manages Git operations and workflows

</v-clicks>

<!--
Claude Code is more than a chatbot - it's a full-featured development agent
that can interact with your entire development environment.
-->

---
layout: default
transition: slide-left
---

# What Can It Do?

<v-clicks>

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### File Operations
- Read, write, and edit files
- Multi-file refactoring
- Pattern-based search

</div>

<div>

### Code Navigation
- Grep with regex support
- Glob pattern matching
- Symbol search

</div>

<div>

### Terminal Commands
- Execute bash scripts
- Run build tools
- Manage processes

</div>

<div>

### Git Operations
- Commit changes
- Create pull requests
- Branch management

</div>

</div>

</v-clicks>

<!--
Claude Code has access to a rich toolkit that covers the full development lifecycle.
-->

---
layout: center
transition: slide-left
---

# The Problem

<div class="text-6xl font-bold mb-8">
One Agent. Everything.
</div>

<v-clicks>

<div class="text-2xl space-y-4">

- Context overload when handling all tasks
- Loses focus on complex multi-step workflows
- Limited specialization in domain-specific tasks
- Context window pressure with large codebases

</div>

</v-clicks>

<!--
A single agent trying to do everything faces significant challenges.
This is where subagents and skills come in.
-->

---
layout: center
transition: slide-left
---

# The Solution

<div class="text-6xl font-bold mb-12">
Divide & Conquer
</div>

<v-clicks>

<div class="grid grid-cols-2 gap-16 text-xl">

<div class="border-2 border-blue-500 rounded-lg p-8">

### Subagents
Specialized workers for focused tasks

</div>

<div class="border-2 border-green-500 rounded-lg p-8">

### Skills
Domain knowledge and expertise

</div>

</div>

</v-clicks>

<!--
The combination of subagents and skills enables a distributed, specialized approach.
-->

---
layout: section
transition: slide-left
---

# What are Subagents?

<!--
Let's dive into subagents - the execution layer of specialization.
-->

---
layout: default
transition: slide-left
---

# Subagents Defined

Lightweight, specialized agents spawned by the main agent

<v-clicks>

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-6">

### Focused Context
Each subagent has a clear, narrow scope

</div>

<div class="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-6">

### Specific Tools
Access only the tools needed for their task

</div>

<div class="bg-purple-500 bg-opacity-10 border border-purple-500 rounded-lg p-6">

### Autonomous Execution
Work independently until completion

</div>

<div class="bg-orange-500 bg-opacity-10 border border-orange-500 rounded-lg p-6">

### Clean Handoff
Return results to the main agent

</div>

</div>

</v-clicks>

<!--
Subagents are ephemeral, focused workers that handle specific subtasks.
-->

---
layout: center
transition: slide-left
---

# How Subagents Work

<div class="font-mono text-base mt-4 space-y-2">

<v-clicks>

<div>User Request</div>
<div class="text-center">↓</div>
<div>Main Agent (analyzes task)</div>
<div class="text-center">↓</div>
<div>Spawns Subagent (specialized context)</div>
<div class="text-center">↓</div>
<div>Subagent Works (autonomous execution)</div>
<div class="text-center">↓</div>
<div>Returns Result (clean handoff)</div>
<div class="text-center">↓</div>
<div>Main Agent Continues (integrates result)</div>

</v-clicks>

</div>

<!--
The flow is simple but powerful: delegate, execute, return, continue.
-->

---
layout: default
transition: slide-left
---

# Built-in Agent Types

<v-clicks>

| Agent Type | Purpose | Best For |
|------------|---------|----------|
| **Explore** | Fast codebase exploration | Finding files, searching code, understanding structure |
| **Plan** | Strategic thinking and design | Architecture decisions, implementation strategies |
| **Bash** | Command execution | Running tests, Git operations, build tasks |
| **General** | Flexible task handling | Default agent for most operations |

</v-clicks>

<!--
Claude Code comes with several built-in agent types, each optimized for different tasks.
-->

---
layout: two-cols
transition: slide-left
---

# Explore Agent

<div class="pr-8">

<v-clicks>

Fast codebase exploration and analysis

- Searches files with Glob patterns
- Greps code with regex support
- Reads files efficiently
- No write access (read-only)
- Optimized for discovery

</v-clicks>

</div>

::right::

<div class="pl-8">

<v-click>

### Example Use Case

```markdown
"Find all API endpoints
in the project"
```

<div class="mt-4 text-sm opacity-75">

The Explore agent will:
1. Search for route definitions
2. Grep for endpoint patterns
3. Analyze file structure
4. Return organized results

</div>

</v-click>

</div>

<!--
Explore agents are perfect for reconnaissance tasks that don't modify code.
-->

---
layout: two-cols
transition: slide-left
---

# Plan Agent

<div class="pr-8">

<v-clicks>

Designs implementation strategies

- Considers trade-offs
- Evaluates alternatives
- Creates step-by-step plans
- No code execution
- Strategic thinking focus

</v-clicks>

</div>

::right::

<div class="pl-8">

<v-click>

### Example Use Case

```markdown
"Plan a new authentication
system with JWT tokens"
```

<div class="mt-4 text-sm opacity-75">

The Plan agent will:
1. Analyze requirements
2. Evaluate security approaches
3. Consider existing architecture
4. Propose detailed implementation

</div>

</v-click>

</div>

<!--
Plan agents handle high-level design without getting bogged down in execution.
-->

---
layout: two-cols
transition: slide-left
---

# Bash Agent

<div class="pr-8">

<v-clicks>

Command execution specialist

- Runs terminal commands
- Handles Git operations
- Executes build scripts
- Processes test output
- Manages CLI tools

</v-clicks>

</div>

::right::

<div class="pl-8">

<v-click>

### Example Use Case

```markdown
"Run tests and report
any failures"
```

<div class="mt-4 text-sm opacity-75">

The Bash agent will:
1. Execute test command
2. Capture output
3. Parse results
4. Summarize failures

</div>

</v-click>

</div>

<!--
Bash agents are your command-line experts, handling shell operations.
-->

---
layout: default
transition: slide-left
---

# What is MCP?

**Model Context Protocol** — an open standard for connecting AI agents to external tools and data sources

<v-clicks>

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-6">

### Open Standard
A universal protocol any tool or data source can implement

</div>

<div class="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-6">

### Tool Integration
Connects agents to databases, APIs, file systems, and more

</div>

<div class="bg-purple-500 bg-opacity-10 border border-purple-500 rounded-lg p-6">

### Why It Matters
Agents gain capabilities without custom code — just plug in an MCP server

</div>

</div>

</v-clicks>

<!--
MCP is the standard that lets AI agents talk to the outside world through a common interface.
-->

---
layout: center
transition: slide-left
---

# MCP in Claude Code

<div class="font-mono text-lg mt-8 space-y-4">

<v-clicks>

<div class="border border-blue-500 rounded p-4 text-center">Claude Code (Agent)</div>
<div class="text-center text-2xl">↓</div>
<div class="border border-green-500 rounded p-4 text-center">MCP Server</div>
<div class="text-center text-2xl">↓</div>
<div class="grid grid-cols-3 gap-4">
  <div class="border border-purple-500 rounded p-3 text-center text-sm">Database Access</div>
  <div class="border border-orange-500 rounded p-3 text-center text-sm">API Integrations</div>
  <div class="border border-pink-500 rounded p-3 text-center text-sm">Custom Tools</div>
</div>

</v-clicks>

</div>

<v-click>

<div class="mt-8 text-lg opacity-75 text-center">

Configure MCP servers in `.claude/settings.json` to extend Claude Code with any external capability

</div>

</v-click>

<!--
Claude Code uses MCP servers as a bridge to external tools and data, making the agent infinitely extensible.
-->

---
layout: default
transition: slide-left
---

# Custom Agents

Create your own specialized agents

<v-clicks>

<div class="mt-4">

### Location

```
.claude/agents/my-agent.md
```

</div>

<div class="mt-2">

### Structure

Markdown file with YAML frontmatter + instructions

</div>

<div class="mt-2">

### Configuration Fields

- `name` - Agent identifier
- `description` - What the agent does
- `model` - Which Claude model to use (sonnet, opus, haiku)
- `color` - Terminal display color
- `skills` - Array of skills to attach

</div>

</v-clicks>

<!--
Custom agents let you create domain-specific specialists for your workflow.
-->

---
layout: default
transition: slide-left
---

# Agent Config Example

```yaml
---
name: vue-expert
description: "Specialized agent for Vue 3 development with Composition API"
model: sonnet
color: green
skills:
  - vue
  - typescript-advanced-types
---

You are an expert Vue 3 developer with deep knowledge of:

- Composition API and script setup
- TypeScript integration with Vue
- Reactive patterns and best practices
- Component architecture and design patterns
- Vite and build optimization

When working on Vue components:
1. Always use <script setup lang="ts">
2. Prefer composables for shared logic
3. Use proper TypeScript prop definitions
4. Follow Vue style guide conventions
```

<!--
This is a complete custom agent definition - frontmatter config plus detailed instructions.
-->

---
layout: default
transition: slide-left
---

# Claude Code Commands

Interact with Claude Code through a rich command interface

<v-clicks>

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-6">

### Built-in Commands
Slash commands for common operations

</div>

<div class="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-6">

### Skill Invocation
Run skills directly from the CLI

</div>

<div class="bg-purple-500 bg-opacity-10 border border-purple-500 rounded-lg p-6">

### Session Control
Manage conversation state and history

</div>

<div class="bg-orange-500 bg-opacity-10 border border-orange-500 rounded-lg p-6">

### Natural Language
Just describe what you need

</div>

</div>

</v-clicks>

<!--
Claude Code offers both structured commands and natural language interaction.
-->

---
layout: two-cols
transition: slide-left
---

# Slash Commands

<div class="pr-6">

<v-clicks>

### Session Management

```bash
/help      # Show available commands
/clear     # Clear conversation history
/reset     # Reset entire session
/exit      # Exit Claude Code
```

### Git Operations

```bash
/commit    # Create a commit
/pr        # Create pull request
```

</v-clicks>

</div>

::right::

<div class="pl-6">

<v-clicks>

### Information

```bash
/status    # Show session info
/history   # View command history
/tokens    # Show token usage
```

### Development

```bash
/test      # Run tests
/build     # Build project
/lint      # Run linter
```

</v-clicks>

</div>

<!--
Slash commands provide quick access to common operations without verbose instructions.
-->

---
layout: center
transition: slide-left
---

# Invoking Skills

<div class="font-mono text-xl mt-8">

<v-clicks>

<div class="bg-blue-500 bg-opacity-10 border border-blue-500 rounded p-6 mb-4">

```bash
/<skill-name>
```

</div>

<div class="text-lg mb-8">
Skills are invoked by typing a forward slash followed by the skill name
</div>

<div class="grid grid-cols-2 gap-4">

<div class="border border-green-500 rounded p-4 text-center">

```bash
/vue
```
<div class="text-sm mt-2 opacity-75">Load Vue 3 expertise</div>

</div>

<div class="border border-purple-500 rounded p-4 text-center">

```bash
/design-system-next
```
<div class="text-sm mt-2 opacity-75">Load design system knowledge</div>

</div>

</div>

</v-clicks>

</div>

<!--
Skill invocation is simple and immediate - just use the skill name as a command.
-->

---
layout: default
transition: slide-left
---

# Command Examples in Action

<v-clicks>

<div class="space-y-4 mt-6">

<div class="border border-blue-500 rounded-lg p-4">

### Scenario 1: Committing Changes

```bash
/commit
```

<div class="text-xs mt-2 opacity-75">
Claude Code will analyze staged changes, suggest a commit message, and create the commit
</div>

</div>

<div class="border border-green-500 rounded-lg p-4">

### Scenario 2: Using a Skill

```bash
/vue
# Then: "Create a composable for user authentication"
```

<div class="text-xs mt-2 opacity-75">
Loads Vue 3 expertise, then applies it to your request
</div>

</div>

<div class="border border-purple-500 rounded-lg p-4">

### Scenario 3: Natural Language

```bash
"Refactor the authentication module to use TypeScript"
```

<div class="text-xs mt-2 opacity-75">
No command needed — just describe what you want
</div>

</div>

</div>

</v-clicks>

<!--
Commands can be explicit slash commands or natural conversational requests.
-->

---
layout: section
transition: slide-left
---

# What are Skills?

<!--
Now let's explore skills - the knowledge layer that powers agent specialization.
-->

---
layout: default
transition: slide-left
---

# Skills Defined

Reusable, filesystem-based resources that provide domain-specific expertise

<v-clicks>

<div class="text-sm opacity-80 mt-2 mb-4">
Skills load on-demand and eliminate the need to repeatedly provide the same guidance across conversations.
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="bg-purple-500 bg-opacity-10 border border-purple-500 rounded-lg p-5">

### Domain Knowledge
Expert-level understanding of specific technologies

</div>

<div class="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-5">

### Best Practices
Curated patterns, workflows, and conventions

</div>

<div class="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-5">

### On-Demand Loading
Loaded when needed — not conversation-level prompts

</div>

<div class="bg-orange-500 bg-opacity-10 border border-orange-500 rounded-lg p-5">

### Shareable & Reusable
Install once, use across projects and conversations

</div>

</div>

<div class="mt-4 text-xs opacity-60 italic">
Unlike prompts (one-off, conversation-level instructions), skills persist on the filesystem and transform general-purpose agents into specialists.
</div>

</v-clicks>

<!--
Skills are not execution contexts — they're pure knowledge and instructions.
They are filesystem-based, loaded on-demand, and eliminate repetitive guidance across conversations.
-->

---
layout: two-cols
transition: slide-left
---

# Skills vs Agents

<div class="pr-4">

## Skills

<v-clicks>

- Knowledge packs
- Portable and reusable
- Attach to any agent
- Passive expertise
- No tool access
- Instructions and guidance

</v-clicks>

</div>

::right::

<div class="pl-4">

## Agents

<v-clicks>

- Execution contexts
- Tool access (Read, Write, Bash)
- Autonomous workers
- Active processing
- Can have skills attached
- Do the actual work

</v-clicks>

</div>

<!--
Skills provide the "what to do", agents provide the "how to execute".
-->

---
layout: default
transition: slide-left
---

# Installing Skills

<v-clicks>

<div class="mt-8">

### Command

```bash
npx skills add <repo-url> --skill <name>
```

</div>

<div class="mt-8">

### Example

```bash
npx skills add https://github.com/antfu/skills --skill vue
```

</div>

<div class="mt-8 text-lg opacity-75">

Skills are installed into `.claude/skills/` directory and can be referenced by name in agent configurations.

</div>

</v-clicks>

<!--
Installing skills is straightforward - they're pulled from repositories and stored locally.
-->

---
layout: default
transition: slide-left
---

# Skill Examples

<v-clicks>

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="border border-green-500 rounded-lg p-6">

### vue
Vue 3 Composition API expertise, component patterns, and best practices

</div>

<div class="border border-blue-500 rounded-lg p-6">

### typescript-advanced-types
Advanced TypeScript patterns, generics, utility types, and type gymnastics

</div>

<div class="border border-purple-500 rounded-lg p-6">

### vue-best-practices
Curated Vue.js conventions, performance optimization, and architecture

</div>

<div class="border border-orange-500 rounded-lg p-6">

### design-system-next
Toge Design System Vue 3 component library integration and usage patterns

</div>

</div>

</v-clicks>

<!--
The skill ecosystem is growing - you can find skills for most popular frameworks and tools.
-->

---
layout: default
transition: slide-left
---

# Attaching Skills to Agents

<v-clicks>

<div class="mt-8">

Skills are attached via the `skills` array in agent frontmatter:

</div>

```yaml
---
name: frontend-specialist
description: "Full-stack frontend development expert"
model: sonnet
skills:
  - vue
  - typescript-advanced-types
  - tailwindcss
  - vite
  - design-system-next
---

You are a frontend development specialist with expertise in
modern web development tools and frameworks...
```

<div class="mt-6 text-lg opacity-75">

The agent inherits all knowledge from attached skills, creating a highly specialized expert.

</div>

</v-clicks>

<!--
Attaching skills is declarative - just list them in the frontmatter.
-->

---
layout: default
transition: slide-left
---

# Creating Custom Skills

Author your own skills and share them

<v-clicks>

<div class="mt-8">

### Key Elements

</div>

<div class="grid grid-cols-3 gap-6 mt-6">

<div class="border border-blue-500 rounded-lg p-6">

#### Clear Instructions
Precise, actionable guidance on how to approach tasks

</div>

<div class="border border-green-500 rounded-lg p-6">

#### Domain Expertise
Deep knowledge of specific technologies or workflows

</div>

<div class="border border-purple-500 rounded-lg p-6">

#### Reusable Patterns
Common solutions that apply across projects

</div>

</div>

<div class="mt-8 text-lg opacity-75">

Skills are Markdown files stored in any Git repo — GitHub, Azure DevOps, or your company's internal repos. Build company-specific skills and share them across teams!

</div>

</v-clicks>

<!--
Creating skills is a great way to codify expertise and share it across teams.
-->

---
layout: center
transition: slide-left
---

# The Power Combo

<div class="text-4xl font-bold mt-6 mb-6">
Skills + Agents = Expert Assistants
</div>

<v-clicks>

<div class="grid grid-cols-3 gap-6 items-center text-center">

<div class="border-2 border-green-500 rounded-lg p-4">

### Agent
Execution Context

<div class="text-sm mt-2 opacity-75">
Tools, autonomy, action
</div>

</div>

<div class="text-5xl">+</div>

<div class="border-2 border-blue-500 rounded-lg p-4">

### Skills
Knowledge Base

<div class="text-sm mt-2 opacity-75">
Expertise, patterns, guidance
</div>

</div>

<div class="col-span-3 text-5xl mt-4">=</div>

<div class="col-span-3 border-2 border-purple-500 rounded-lg p-4 bg-purple-500 bg-opacity-10">

### Specialized Expert Assistant

<div class="text-sm mt-2 opacity-75">
Knows what to do AND how to do it
</div>

</div>

</div>

</v-clicks>

<!--
This is the magic: agents provide execution, skills provide expertise.
-->

---
layout: center
transition: slide-left
---

# The Kitchen Setup

<div class="grid grid-cols-2 gap-6 mt-8">

<v-clicks>

<div class="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-5">
<div class="text-3xl mb-2">👨‍🍳</div>

### Claude Code — Master Chef
Runs the kitchen. Reads orders, coordinates the team, and makes sure every dish goes out right.

</div>

<div class="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-5">
<div class="text-3xl mb-2">🧑‍🍳</div>

### Subagents — Specialist Chefs
Pastry chef, grill chef, saucier — each one handles what they do best, then hands it back.

</div>

<div class="bg-orange-500 bg-opacity-10 border border-orange-500 rounded-lg p-5">
<div class="text-3xl mb-2">🚚</div>

### MCP — Delivery for Outside Ingredients
Need something not in the kitchen? MCP brings in fresh ingredients from external suppliers.

</div>

<div class="bg-purple-500 bg-opacity-10 border border-purple-500 rounded-lg p-5">
<div class="text-3xl mb-2">📖</div>

### Skills — Recipes
Step-by-step instructions that tell any chef exactly how to prepare a dish. Reusable and shareable.

</div>

</v-clicks>

</div>

<!--
A kitchen analogy: Claude Code is the head chef orchestrating everything.
Subagents are specialist chefs. MCP delivers external ingredients. Skills are the recipes.
-->

---
layout: section
transition: slide-left
---

# How Does It Compare?

<!--
Let's see how Claude Code stacks up against the most popular AI coding tool — GitHub Copilot.
-->

---
layout: two-cols
transition: slide-left
---

# Philosophy Difference

<div class="pr-6">

## Claude Code

<v-clicks>

- **Agentic paradigm**
- Autonomous execution across files
- Full terminal and tool access
- Delegates to specialized subagents
- Extensible via skills and MCP
- Thinks, plans, then acts

</v-clicks>

</div>

::right::

<div class="pl-6">

## GitHub Copilot

<v-clicks>

- **Autocomplete paradigm**
- Inline code suggestions
- Chat panel for Q&A
- Limited tool access
- Editor-integrated only
- Reactive, not autonomous

</v-clicks>

</div>

<!--
Claude Code operates as a full agent — it reads, writes, executes, and delegates.
Copilot focuses on real-time code completion and chat-based assistance within the editor.
-->

---
layout: default
transition: slide-left
class: text-sm
---

# Feature Comparison

<v-clicks>

| Feature | Claude Code | GitHub Copilot |
|---------|:-----------:|:--------------:|
| Subagent delegation | ✅ | ❌ |
| Custom skills system | ✅ | ❌ |
| MCP integration | ✅ | ✅ |
| Terminal execution | ✅ | Limited |
| Multi-file refactoring | ✅ | Limited |
| Custom agent creation | ✅ | Limited |
| Autonomous workflows | ✅ | ❌ |
| Inline code suggestions | ❌ | ✅ |
| IDE integration | VS Code extension | Deep IDE integration |

</v-clicks>

<!--
Each tool has its strengths. Claude Code excels at complex, multi-step agentic workflows.
Copilot excels at fast inline suggestions and tight IDE integration.
-->

---
layout: center
transition: slide-left
---

# Architecture Overview

<div class="font-mono text-base mt-8 space-y-3">

<v-clicks>

<div class="text-center">You (Developer)</div>
<div class="text-center">↓</div>
<div class="border border-blue-500 rounded p-3 text-center">Claude Code (Main Agent)</div>
<div class="text-center">↓</div>
<div class="grid grid-cols-2 gap-4">
  <div class="border border-green-500 rounded p-3 text-center">Subagents + Skills</div>
  <div class="border border-orange-500 rounded p-3 text-center">MCP Servers</div>
</div>
<div class="text-center">↓</div>
<div class="border border-purple-500 rounded p-3 text-center">Results (Integrated Output)</div>

</v-clicks>

</div>

<!--
The full architecture shows how subagents, skills, and MCP servers all connect through Claude Code.
-->

---
layout: center
class: text-center
transition: slide-left
---

# Thank You

<div class="mt-12 space-y-6 text-xl">

<div>
  <a href="https://claude.ai/claude-code" target="_blank" class="text-blue-400 hover:text-blue-300">
    claude.ai/claude-code
  </a>
</div>

<div class="text-lg opacity-75">
  Explore the docs, install skills, and build amazing things
</div>

</div>

<div class="mt-16 text-sm opacity-50">
  Press Esc for overview • Press Space to navigate
</div>

<!--
Thanks for exploring subagents and skills. Now go build something incredible!
-->

---
layout: center
class: text-center
transition: slide-left
---

<div class="space-y-8">

<div class="text-lg opacity-50 uppercase tracking-widest">
  Prepared by
</div>

<div class="text-4xl font-bold">
  Jef Mari
</div>

<div>
  <a href="https://github.com/JefMari" target="_blank" class="text-blue-400 hover:text-blue-300 text-xl">
    github.com/JefMari
  </a>
</div>

</div>
