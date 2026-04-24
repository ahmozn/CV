<script setup>
import LangSwitch from './LangSwitch.vue'
import ThemeSwitch from './ThemeSwitch.vue';
import DownloadCV from '../layout/DownloadCV.vue';
</script>

<template>
  <nav class="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-md">
    <div class="flex flex-row items-center justify-around p-3
                bg-white/5 backdrop-blur-xl
                border border-white/10 rounded-full
                shadow-[inset_0_4px_12px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.3)]
                transition-all duration-500">
      
      <div class="flex-1 flex justify-center">
        <LangSwitch />
      </div>

      <div class="flex-1 flex justify-center">
        <DownloadCV class="h-10 w-[40vw]"/>
      </div>

      <div class="flex-1 flex justify-center">
        <ThemeSwitch />
      </div>

    </div>
  </nav>

</template>