<script setup lang="ts">
interface Props {
  name: string
  icon: string
  description: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="agent-card">
    <div class="agent-icon">
      {{ props.icon }}
    </div>
    <div class="agent-content">
      <h3 class="agent-name">{{ props.name }}</h3>
      <p class="agent-description">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.agent-card {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(17, 24, 39, 0.8));
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  backdrop-filter: blur(8px);
}

.agent-card:hover {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3), 0 2px 6px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
}

.agent-icon {
  font-size: 3rem;
  line-height: 1;
  flex-shrink: 0;
}

.agent-content {
  flex: 1;
}

.agent-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.025em;
}

.agent-description {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .agent-card {
    flex-direction: column;
    text-align: center;
  }

  .agent-icon {
    font-size: 2.5rem;
  }
}
</style>
