<script setup lang="ts">
interface Props {
  id: string
  icon: string
  label: string
  isActive: boolean
}

defineProps<Props>()
defineEmits(['click'])
</script>

<template>
  <div 
    @click="$emit('click')" 
    :class="[
      'group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300',
      isActive ? 'bg-blue-500/10 translate-x-1' : 'hover:bg-card hover:translate-x-1'
    ]"
  >
    <div :class="isActive ? 'text-primary' : 'text-gray-500 group-hover:text-blue-300'">
      <svg xmlns="http://www.w3.org/2000/01/svg" width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        
        <circle cx="12" cy="12" r="3" v-if="id === 'summary'" />
        
        <path :d="icon" />
      </svg>
    </div>

    <span :class="isActive ? 'text-secondary' : 'text-muted group-hover:text-secondary'">
      {{ label }}
    </span>

    <div :class="[
      'ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)] transition-all',
      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
    ]"></div>
  </div>
</template>