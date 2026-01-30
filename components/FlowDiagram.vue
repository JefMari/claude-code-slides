<script setup lang="ts">
interface Props {
  steps: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flow-diagram">
    <div
      v-for="(step, index) in props.steps"
      :key="index"
      class="flow-item"
    >
      <v-click>
        <div class="flow-step">
          {{ step }}
        </div>
        <div v-if="index < props.steps.length - 1" class="flow-arrow">
          →
        </div>
      </v-click>
    </div>
  </div>
</template>

<style scoped>
.flow-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.flow-step {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
  border: 2px solid rgba(59, 130, 246, 0.5);
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;
  font-weight: 600;
  font-size: 1.125rem;
  color: #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  min-width: 180px;
  text-align: center;
}

.flow-step:hover {
  border-color: rgba(59, 130, 246, 0.8);
  box-shadow: 0 6px 12px rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

.flow-arrow {
  font-size: 2rem;
  color: rgba(147, 51, 234, 0.7);
  font-weight: bold;
}

@media (max-width: 768px) {
  .flow-diagram {
    flex-direction: column;
  }

  .flow-arrow {
    transform: rotate(90deg);
  }
}
</style>
