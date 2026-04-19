<script setup lang="ts">
import BaseCard from './BaseCard.vue';

</script>

<template>
    <BaseCard class="transition-transform duration-300 ease-in-out
                     hover:bg-white/10 hover:translate-x-1 card-hover cursor-default">
        <slot/>
    </BaseCard>
</template>