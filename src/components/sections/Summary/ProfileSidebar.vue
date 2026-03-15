<script setup>
    import BaseCard from '../../ui/BaseCard.vue';
</script>

<template>
    <BaseCard class="h-full flex flex-col">
    <div class="flex-1 overflow-hidden"> 
      <img 
        src="../../../assets/pp.jpg" 
        class="w-full h-full object-cover rounded-xl" 
      />
    </div>
    
    <div class="flex justify-center gap-4 mt-6 pb-2">
       <div class="w-10 h-10 bg-gray-700 rounded-full"></div>
       <div class="w-10 h-10 bg-gray-700 rounded-full"></div>
       <div class="w-10 h-10 bg-gray-700 rounded-full"></div>
    </div>
  </BaseCard>
</template>