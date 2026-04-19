<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import BaseCardItem from './BaseCardItem.vue'

interface Props {
  company: string
  title: string
  year: string
  content: string
}

defineProps<Props>()
</script>

<template>
  <BaseCardItem>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-2">
        <div class="flex items-center gap-2">
          <h3 class="text-lg font-bold text-primary">
            {{ company }}
          </h3>
          <span class="text-gray-600 font-light text-xl">|</span>
          <span class="text-md font-medium text-secondary">
            {{ title }}
          </span>
        </div>

        <div class="text-sm font-mono text-muted tracking-tighter">
          {{ year }}
        </div>
      </div>

      <div class="flex flex-col items-start text-left w-full mt-2">
        <p class="text-muted text-sm leading-relaxed italic">
          {{ content }}
        </p>
      </div>
    </div>
  </BaseCardItem>
</template>