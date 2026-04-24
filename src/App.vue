<script setup>
import Content from './components/layout/Content.vue';
import MobileSiteMap from './components/layout/MobileSiteMap.vue';
import SiteMap from './components/layout/SiteMap.vue';
import BackToTop from './components/ui/BackToTop.vue';
import MobileTopBar from './components/ui/MobileTopBar.vue';
</script>

<template>
  <div class="h-[8vh] lg:h-[10vh]"></div>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start mx-auto px-3 lg:px-0">

    <MobileTopBar />

    <main class="w-full lg:col-span-3 flex flex-col gap-16 lg:max-w-5xl mx-auto">
      <Content />
    </main>

    <SiteMap :active-section="activeSection" class="hidden lg:block" />

    <MobileSiteMap :active-section="activeSection" :menu-items="menuItems" @navigate="scrollToSection"
      class="block lg:hidden" />
  </div>

  <div class="h-[15vh] lg:h-[10vh]"></div>
</template>
