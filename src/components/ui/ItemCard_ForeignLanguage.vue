<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import Badge from './Badge.vue'
import IconRedirect from '../ui/IconRedirect.vue' // Yeni component
import BaseCardItem from './BaseCardItem.vue'

interface Props {
  title: string
  level: string
  certificate: string
  url?: string
}

defineProps<Props>()
</script>

<template>
  <IconRedirect :url="url">
    <BaseCardItem class="cursor-pointer">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-4 text-left">
          <Badge class="w-[5.2rem] h-[2rem]  tracking-0">{{ title }}</Badge>
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-lg font-bold text-secondary">{{ level }}</h3>
            <span class="text-muted font-light text-xl">|</span>
            <span class="text-sm font-mono text-muted italic">{{ certificate }}</span>
          </div>
        </div>
      </div>
    </BaseCardItem>
  </IconRedirect>
</template>