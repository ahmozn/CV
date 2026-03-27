<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
const { t } = useI18n()

const examKeys = ['ales', 'yds'];

const examList = computed(() => {
    return examKeys.map(key => ({
        title: t(`examsResults.${key}.title`),
        year: t(`examsResults.${key}.year`),
        score: t(`examsResults.${key}.score`)
    }));
});
</script>

<template>
    <BaseCard>
        <h1 class="mb-[2vh] !text-[2em]">{{ t('examsResults.title') }}</h1>

        <div class="flex flex-col gap-4">
            <BaseCard v-for="(exam, index) in examList" :key="index" 
                      class="w-full bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:translate-x-1 cursor-default">
                
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <span class="flex-shrink-0 w-[3rem] h-[2rem] flex items-center justify-center text-[0.75rem] font-black bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 tracking-tighter uppercase">
                            {{ exam.title }}
                        </span>
                        
                        <span class="text-lg font-bold text-gray-100">
                            {{ exam.score }}
                        </span>
                    </div>

                    <div class="text-xs font-mono text-gray-500 bg-black/20 px-2 py-1 rounded-md">
                        {{ exam.year }}
                    </div>
                </div>
            </BaseCard>
        </div>
    </BaseCard>
</template>