<script setup>
import BaseCard from '../../ui/BaseCard.vue';
import SocialLink from './SocialLink.vue';
</script>

<template>
  <BaseCard class="h-full flex flex-col pb-2">
    <div class="flex-1 overflow-hidden">
      <img src="../../../assets/pp.jpg" class="w-75 md:w-60 aspect-[3/4] object-cover mx-auto block rounded-xl my-2" />
    </div>

    <div class="flex justify-center w-full mt-2 mb-2">
      <div class="flex flex-row items-center justify-center gap-4 p-2 
              bg-white/5 backdrop-blur-xl
              border border-white/10 rounded-full 
              shadow-[inset_0_4px_12px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.3)]
              transition-all duration-500 hover:shadow-cyan-900/30">

        <SocialLink iconName="linkedin" href="https://www.linkedin.com/in/ahmet-%C3%B6zhan-%C3%B6zen-389074224/" />
        <SocialLink iconName="github" href="https://github.com/ahmozn" />
        <SocialLink iconName="email" href="contact@ozhano.com" />

      </div>
    </div>

  </BaseCard>
</template>