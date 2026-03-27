<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
const { t } = useI18n()

const educationKeys = ['MS', 'BS', 'HS'];

const educationList = computed(() => {
    return educationKeys.map(key => ({
        year: t(`education.${key}.year`),
        content: t(`education.${key}.content`),
        level: key
    }));
});
</script>
<template>
    <BaseCard>
        <h1 class="mb-[2vh] !text-[2em]">{{ t('education.title') }}</h1>
        <div class="flex flex-col gap-4">
            <BaseCard v-for="(edu, index) in educationList" :key="index" class="w-full bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:translate-x-1 hover:border-white/10 cursor-default">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div class="flex items-center gap-3">
                        <span
                            class="flex-shrink-0 w-[2.5rem] h-[2rem] flex items-center justify-center text-[0.75rem] font-black bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 tracking-tighter uppercase">
                            {{ edu.level }}
                        </span>
                        <p class="text-gray-200 font-medium tracking-wide">
                            {{ edu.content }}
                        </p>
                    </div>

                    <div class="text-sm font-mono text-gray-500 whitespace-nowrap">
                        {{ edu.year }}
                    </div>
                </div>
            </BaseCard>
        </div>
    </BaseCard>
</template>