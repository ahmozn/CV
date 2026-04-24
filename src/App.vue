<script setup>
import { useI18n } from './composables/useI18n';
import { watch, nextTick } from 'vue';
import Content from './components/layout/Content.vue';
import MobileSiteMap from './components/layout/MobileSiteMap.vue';
import SiteMap from './components/layout/SiteMap.vue';
import BackToTop from './components/ui/BackToTop.vue';
import MobileTopBar from './components/ui/MobileTopBar.vue';

const {locale}=useI18n();

watch(locale, async () => {
  const container = document.querySelector('.min-h-screen');
  if (container) {
    container.classList.remove('lang-anim');
    await nextTick();
    void container.offsetWidth;
    container.classList.add('lang-anim');
  }
}, { immediate: true });
</script>

<template>
  <div :class="['min-h-screen']" :style="{ '--lang-key': locale }">

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
  </div>
</template>

<style>
/*TEXT TRANSITION*/
@keyframes langFadeIn {
  from {
    opacity: 0;
    filter: blur(4px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

.lang-anim h1, 
.lang-anim h2, 
.lang-anim h3, 
.lang-anim p, 
.lang-anim span, 
.lang-anim li {
  animation: langFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>