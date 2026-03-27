<script setup lang="ts">
defineProps<{
    activeSection: string
}>();

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<template>
    <Transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
    >
        <button 
            v-if="activeSection !== 'summary'"
            @click="scrollToTop"
            class="mt-6 ml-2 p-3 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-400/60 hover:text-blue-400 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group shadow-xl backdrop-blur-md"
        >
            <svg xmlns="http://www.w3.org/2000/01/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-y-1 transition-transform duration-300">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    </Transition>
</template>