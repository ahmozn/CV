<script setup>
import Content from './components/layout/Content.vue';
import MobileSiteMap from './components/layout/MobileSiteMap.vue';
import SiteMap from './components/layout/SiteMap.vue';
import BackToTop from './components/ui/BackToTop.vue';
import MobileBottomBar from './components/ui/MobileBottomBar.vue';
</script>

<template>
  <div class="h-[10vh]"></div>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start mx-auto px-4 lg:px-0">

    <main class="lg:col-span-3 flex flex-col gap-16 w-full lg:max-w-5xl ml-0 pr-12 lg:pr-0 lg:mx-auto">
      <Content />
    </main>

    <SiteMap :active-section="activeSection" class="hidden lg:block" />
    <MobileSiteMap :active-section="activeSection" :menu-items="menuItems" @navigate="scrollToSection"
      class="block lg:hidden" />
    <MobileBottomBar />
  </div>
  <div class="h-[15vh]"></div>
</template>
