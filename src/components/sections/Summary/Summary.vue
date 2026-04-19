<script setup>
import BioContent from './BioContent.vue';
import ProfileSidebar from './ProfileSidebar.vue';
import LangSwitch from '../../ui/LangSwitch.vue';
import ThemeSwitch from '../../ui/ThemeSwitch.vue';
</script>
<template>
  <section id="summary" class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

    <div class="md:col-span-4 lg:col-span-3 flex">
      <ProfileSidebar class="w-full h-full" />
    </div>

    <div class="md:col-span-8 lg:col-span-9 flex flex-col gap-4">

      <div class="flex justify-between items-center px-2">
        <h1 class="text-title text-3xl font-bold tracking-tight">Ahmet Özhan ÖZEN</h1>
      </div>

      <BioContent class="flex-1" />

    </div>

  </section>
</template>