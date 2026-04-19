<script setup>
import { useI18n } from '../../composables/useI18n'
const { locale } = useI18n()

const toggleLang = () => {
  locale.value = locale.value === 'tr' ? 'en' : 'tr'
}
</script>

<template>
  <div @click="toggleLang" 
       class="relative w-20 h-9 rounded-full cursor-pointer bg-switch backdrop-blur-xl border border-border-base flex items-center px-1 shadow-lg overflow-hidden isolate">
    
    <div class="absolute inset-0 flex justify-between items-center px-3 text-[10px] font-bold tracking-tighter uppercase select-none z-0">
      <span :class="['transition-opacity duration-300 text-muted/50', locale === 'tr' ? 'opacity-0' : 'text-muted/50']">TR</span>
      <span :class="['transition-opacity duration-300 text-muted/50', locale === 'en' ? 'opacity-0' : 'text-muted/50']">EN</span>
    </div>

    <div :class="[
      'absolute w-8 h-7 rounded-full bg-switch-ball border border-white/20 flex items-center justify-center transition-all duration-300 shadow-sm backdrop-blur-md z-10',
      locale === 'tr' ? 'translate-x-0' : 'translate-x-10'
    ]">
      <span class="text-[11px] text-secondary uppercase">{{ locale }}</span>
    </div>
  </div>
</template>