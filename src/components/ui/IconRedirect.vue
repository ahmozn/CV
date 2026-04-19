<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = defineProps<{ url?: string }>()
const attrs = useAttrs() // Dışarıdan gelen class, id, style gibi her şeyi yakalar

const linkProps = computed(() => {
  if (!props.url) return {}
  return {
    href: props.url,
    target: '_blank',
    rel: 'noopener noreferrer'
  }
})
</script>

<template>
  <component 
    :is="url ? 'a' : 'div'" 
    v-bind="{ ...linkProps, ...attrs }"
    class="group relative block w-full h-full no-underline transition-all duration-300"
    :class="[url ? 'cursor-pointer' : 'cursor-default']"
  >
    <slot />

    <div 
      v-if="url" 
      class="absolute right-3 top-3 z-20 text-primary transition-all duration-300 group-hover:translate-x-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </div>
  </component>
</template>