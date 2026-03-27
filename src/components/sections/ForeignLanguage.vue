<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
const { t } = useI18n()

const certificateUrl = "https://cert.efset.org/aBRex4" 

const languages = computed(() => [
    {
        title: t('foreignLanguage.english.title'),
        level: t('foreignLanguage.english.level'),
        certificate: t('foreignLanguage.english.certificate')
    }
]);
</script>

<template>
    <BaseCard>
        <h1 class="mb-[2vh] !text-[2em]">
            {{ t('foreignLanguage.title') }}
        </h1>

        <div class="flex flex-col gap-4">
            <a :href="certificateUrl" target="_blank" rel="noopener noreferrer" class="block group">
                <BaseCard class="w-full bg-white/5 border border-white/5 transition-all duration-300 
                                group-hover:bg-white/10 group-hover:translate-x-1">
                    
                    <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-4 text-left">
                            <span class="flex-shrink-0 w-[5.2rem] h-[2rem] flex items-center justify-center text-[0.75rem] font-black bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 uppercase">
                                {{ languages[0].title }}
                            </span>
                            
                            <div class="flex flex-wrap items-center gap-2">
                                <h3 class="text-lg font-bold text-gray-100">
                                    {{ languages[0].level }}
                                </h3>
                                <span class="text-gray-600 font-light text-xl">|</span>
                                <span class="text-sm font-mono text-gray-400 italic">
                                    {{ languages[0].certificate }}
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 text-blue-500/50 group-hover:text-blue-400 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/01/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </div>
                    </div>
                </BaseCard>
            </a>
        </div>
    </BaseCard>
</template>