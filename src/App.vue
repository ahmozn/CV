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
  <div 
    :class="['min-h-screen', 'relative']" 
    :style="{ '--lang-key': locale }"
  >
    <div class="fixed top-46/100 left-0 -translate-x-0 md:left-1/10 md:top-0 md:-translate-x-1/2 z-50 pointer-events-none
            w-[9vw] md:w-[5vw] h-[7vh] md:h-[6vh] flex items-center justify-center
            bg-card border-r border-t border-b md:border-x md:border-t-0 border-border-base backdrop-blur-md
            rounded-br-2xl rounded-r-2xl md:rounded-t-none md:rounded-b-2xl shadow-lg">
      
  <img 
    src="/logo.svg" 
    alt="Logo" 
    class="p-[7%] vw md:h-14 w-auto transition-all duration-300"
  />
</div>

    <div class="h-[8vh] lg:h-[10vh]"></div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start mx-auto px-3 lg:px-0 relative z-10">

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