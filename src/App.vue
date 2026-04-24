<script setup>
import Content from './components/layout/Content.vue';
import SiteMap from './components/layout/SiteMap.vue';
import BackToTop from './components/ui/BackToTop.vue';
</script>

<template>
  <div class="h-[10vh]"></div>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start mx-auto px-4 lg:px-0">
    
    <main class="lg:col-span-3 flex flex-col gap-16 w-full lg:max-w-5xl px-6 mx-auto">
      <Content />
    </main>

    <SiteMap class="hidden lg:block" />
  </div>
  <div class="h-[15vh]"></div>
</template>
