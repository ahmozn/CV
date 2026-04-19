<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import Badge from './Badge.vue';
import BaseCardItem from './BaseCardItem.vue';

interface Props {
  level: string
  content: string
  year: string
}

defineProps<Props>()
</script>

<template>
  <BaseCardItem>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div class="flex items-center gap-3">
        <Badge class="w-[3rem] h-[2rem] ">{{ level }}</Badge>
        <p class="text-secondary font-medium tracking-wide">
          {{ content }}
        </p>
      </div>

      <div class="text-sm font-mono text-muted whitespace-nowrap">
        {{ year }}
      </div>
    </div>
  </BaseCardItem>
</template>