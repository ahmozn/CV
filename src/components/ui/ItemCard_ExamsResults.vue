<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import Badge from './Badge.vue';
import BaseCardItem from './BaseCardItem.vue';

interface Props {
  title: string
  score: string
  year: string
}

defineProps<Props>()
</script>

<template>
  <BaseCardItem>
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <Badge class="w-[3rem] h-[2rem] ">{{ title }}</Badge>
        
        <span class="text-lg font-bold text-secondary">
          {{ score }}
        </span>
      </div>

      <div class="text-xs font-mono text-muted bg-black/20 px-2 py-1 rounded-md">
        {{ year }}
      </div>
    </div>
  </BaseCardItem>
</template>