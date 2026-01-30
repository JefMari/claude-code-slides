---
theme: default
class: text-center
transition: slide-left
highlighter: shiki
colorSchema: dark
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80
---

# Claude Code: Subagents & Skills

Extending AI-Powered Development with Specialized Agents

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

# Custom Agents

Create your own specialized agents

<v-clicks>

<div class="mt-8">

### Location

```
.claude/agents/my-agent.md
```

</div>

<div class="mt-8">

### Structure

Markdown file with YAML frontmatter + instructions

</div>

<div class="mt-4">

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

Reusable knowledge packs that extend agent capabilities

<v-clicks>

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-purple-500 bg-opacity-10 border border-purple-500 rounded-lg p-6">

### Domain Knowledge
Expert-level understanding of specific technologies

</div>

<div class="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-6">

### Best Practices
Curated patterns and conventions

</div>

<div class="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-6">

### Workflow Patterns
Step-by-step guides for common tasks

</div>

<div class="bg-orange-500 bg-opacity-10 border border-orange-500 rounded-lg p-6">

### Shareable
Install and reuse across projects

</div>

</div>

</v-clicks>

<!--
Skills are not execution contexts - they're pure knowledge and instructions.
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

### slidev-frontend-expert
Slidev presentation development with Vue, layouts, and animations

</div>

<div class="border border-orange-500 rounded-lg p-6">

### vue-best-practices
Curated Vue.js conventions, performance optimization, and architecture

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

Skills are Markdown files stored in GitHub repos. Share yours with the community!

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

<div class="text-5xl font-bold mt-12 mb-12">
Skills + Agents = Expert Assistants
</div>

<v-clicks>

<div class="grid grid-cols-3 gap-8 items-center text-center">

<div class="border-2 border-green-500 rounded-lg p-8">

### Agent
Execution Context

<div class="text-sm mt-4 opacity-75">
Tools, autonomy, action
</div>

</div>

<div class="text-6xl">+</div>

<div class="border-2 border-blue-500 rounded-lg p-8">

### Skills
Knowledge Base

<div class="text-sm mt-4 opacity-75">
Expertise, patterns, guidance
</div>

</div>

<div class="col-span-3 text-6xl mt-8">=</div>

<div class="col-span-3 border-2 border-purple-500 rounded-lg p-8 bg-purple-500 bg-opacity-10">

### Specialized Expert Assistant

<div class="text-sm mt-4 opacity-75">
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

# Architecture Overview

<div class="font-mono text-xl mt-12 space-y-6">

<v-clicks>

<div class="text-center">You (Developer)</div>
<div class="text-center">↓</div>
<div class="border border-blue-500 rounded p-4 text-center">Claude Code (Main Agent)</div>
<div class="text-center">↓</div>
<div class="text-center">Task Tool (Delegation)</div>
<div class="text-center">↓</div>
<div class="border border-green-500 rounded p-4 text-center">Subagent + Skills (Specialized Worker)</div>
<div class="text-center">↓</div>
<div class="border border-purple-500 rounded p-4 text-center">Result (Clean Output)</div>
<div class="text-center">↓</div>
<div class="border border-blue-500 rounded p-4 text-center">Main Agent (Integration)</div>

</v-clicks>

</div>

<!--
The full architecture shows how all pieces work together seamlessly.
-->

---
layout: default
transition: slide-left
---

# Getting Started

<v-clicks>

<div class="space-y-8 mt-12 text-xl">

<div class="flex items-start gap-4">
  <div class="text-3xl font-bold text-blue-500">1</div>
  <div>Install Claude Code CLI from Anthropic</div>
</div>

<div class="flex items-start gap-4">
  <div class="text-3xl font-bold text-green-500">2</div>
  <div>Create <code>.claude/agents/</code> directory in your project</div>
</div>

<div class="flex items-start gap-4">
  <div class="text-3xl font-bold text-purple-500">3</div>
  <div>Define your custom agents in <code>.md</code> files</div>
</div>

<div class="flex items-start gap-4">
  <div class="text-3xl font-bold text-orange-500">4</div>
  <div>Install skills with <code>npx skills add</code></div>
</div>

<div class="flex items-start gap-4">
  <div class="text-3xl font-bold text-pink-500">5</div>
  <div>Start building with specialized agents!</div>
</div>

</div>

</v-clicks>

<!--
Getting started is straightforward - just a few steps to unlock powerful capabilities.
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
