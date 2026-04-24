<script setup>
import LangSwitch from './LangSwitch.vue'
import ThemeSwitch from './ThemeSwitch.vue';
import DownloadCV from '../layout/DownloadCV.vue';
</script>

<template>
  <nav class="lg:hidden fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[96vw] max-w-md">
    <div class="grid grid-cols-[auto_1fr_auto] items-center py-3 px-3 gap-1
                bg-white/5 backdrop-blur-xl border border-white/10 rounded-full
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      
      <div class="flex justify-start"><LangSwitch /></div>
      <div class="flex justify-center px-2">
        <DownloadCV class="h-10 w-full" />
      </div>
      <div class="flex justify-end"><ThemeSwitch /></div>
    </div>
  </nav>
</template>