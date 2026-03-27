<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
const { t } = useI18n()

const experienceKeys = ['sampa', 'cbi'];

const experienceList = computed(() => {
    return experienceKeys.map(key => ({
        title: t(`jobExperience.${key}.title`),
        company: t(`jobExperience.${key}.company`),
        year: t(`jobExperience.${key}.year`),
        content: t(`jobExperience.${key}.content`)
    }));
});
</script>

<template>
    <BaseCard>
        <h1 class="mb-[2vh] !text-[2em] tracking-tight">
            {{ t('jobExperience.title') }}
        </h1>

        <div class="flex flex-col gap-4">
            <BaseCard v-for="(job, index) in experienceList" :key="index" 
                      class="w-full bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:border-white/10 cursor-default">
                
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-2">
                        <div class="flex items-center gap-2">
                            <h3 class="text-lg font-bold text-blue-400">
                                {{ job.company }}
                            </h3>
                            <span class="text-gray-600 font-light text-xl">|</span>
                            <span class="text-md font-medium text-gray-200">
                                {{ job.title }}
                            </span>
                        </div>

                        <div class="text-sm font-mono text-gray-500 tracking-tighter">
                            {{ job.year }}
                        </div>
                    </div>

                    <div class="flex flex-col items-start text-left w-full mt-2">
                        <p class="text-gray-400 text-sm leading-relaxed italic">
                            {{ job.content }}
                        </p>
                    </div>
                </div>
            </BaseCard>
        </div>
    </BaseCard>
</template>