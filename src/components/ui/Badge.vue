<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
  }
});

</script>

<template>
    <span 
        class="flex-shrink-0 flex items-center justify-center text-[0.75rem] font-black bg-blue-500/20
        text-primary rounded border border-blue-500/30"
    >
        <slot /> 
    </span>
</template>


