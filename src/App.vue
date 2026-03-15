<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SiteMap from './components/layout/SiteMap.vue';
import Summary from './components/sections/Summary/Summary.vue';
import BaseCard from './components/ui/BaseCard.vue';
</script>

<template>
  <SiteMap></SiteMap>
  <Summary></Summary>
  <BaseCard>
    <p>basecard test</p>
  </BaseCard>

</template>


