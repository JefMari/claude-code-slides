import { defineConfig } from '@slidev/cli'

export default defineConfig({
  theme: 'default',
  title: 'Claude Code: The Engine Behind Blackmagic AI',
  info: 'A presentation about Claude Code and its features',
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
