<script setup>
import LangSwitch from './LangSwitch.vue'
import ThemeSwitch from './ThemeSwitch.vue';
import DownloadCV from '../layout/DownloadCV.vue';
</script>

<template>
  <nav class="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[96vw] max-w-md">
    <div class="grid grid-cols-[auto_1fr_auto] items-center py-3 px-2
                bg-white/5 backdrop-blur-xl
                border border-white/10 rounded-full
                shadow-[inset_0_4px_12px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.3)]">
      
      <div class="flex justify-start min-w-fit">
        <LangSwitch />
      </div>

      <div class="flex justify-center px-1">
        <DownloadCV class="h-10 w-full whitespace-nowrap" />
      </div>

      <div class="flex justify-end min-w-fit">
        <ThemeSwitch />
      </div>

    </div>
  </nav>
</template>