<script setup>
import BioContent from './BioContent.vue';
import ProfileSidebar from './ProfileSidebar.vue';
import { useI18n } from '../../../composables/useI18n';
const { locale, toggleLocale } = useI18n()
</script>
<template>
  <section id="summary" class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
    
    <div class="md:col-span-4 lg:col-span-3 flex">
      <ProfileSidebar class="w-full h-full" />
    </div>

    <div class="md:col-span-8 lg:col-span-9 flex flex-col gap-4">
      
      <div class="flex justify-between items-center px-2">
        <h1 class="text-3xl font-bold text-white tracking-tight">Ahmet Özhan ÖZEN</h1>
        
        <div class="flex flex-col gap-2">
          <button @click="toggleLocale" class="w-12 h-6 bg-purple-600 rounded-full flex items-center justify-end px-1 transition-all active:scale-95">
             <div class="w-4 h-4 bg-white rounded-full text-[8px] flex items-center justify-center font-bold text-purple-600 shadow-sm">TR</div>
          </button>
          <button class="w-12 h-6 bg-purple-500 rounded-full flex items-center justify-end px-1 transition-all active:scale-95">
             <div class="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
               <span class="text-[10px]">🌙</span>
             </div>
          </button>
        </div>
      </div>

      <BioContent class="flex-1" />
      
    </div>

  </section>
</template>