import { defineConfig } from '@slidev/cli'

export default defineConfig({
  theme: 'default',
  title: 'Claude Code: Subagents & Skills',
  info: 'A presentation about Claude Code subagents and skills',
  transition: 'slide-left',
  colorSchema: 'dark',
  highlighter: 'shiki',
  lineNumbers: true,
  aspectRatio: '16/9',
  fonts: {
    sans: 'Inter',
    mono: 'Fira Code',
  },
  htmlAttrs: {
    lang: 'en',
  },
})
