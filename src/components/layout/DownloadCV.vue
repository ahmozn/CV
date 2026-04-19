<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '../../composables/useI18n'; 
const { t, locale } = useI18n();

const cvPath = computed(() => {
    return locale.value === 'tr' ? '/CV_Ozhan_TR.pdf' : '/CV_Ozhan_EN.pdf';
});

const cvName = computed(() => {
    return locale.value === 'tr' ? 'CV_Ozhan_TR.pdf' : 'CV_Ozhan_EN.pdf';
});
</script>

<template>
    <a 
        :href="cvPath" 
        :download="cvName"
        class="group flex items-center gap-4 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-400 hover:border-blue-400 transition-all duration-300 shadow-lg"
    >
        <div class="flex-shrink-0 text-primary group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/01/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </div>

        <span class="text-[0.75em] font-black uppercase tracking-[0.15em] text-primary group-hover:text-white transition-colors leading-none">
            {{ t('sitemap.downloadCV') }}
        </span>
    </a>
</template>