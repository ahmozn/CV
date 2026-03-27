<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
const { t } = useI18n()

const projectKeys = ['findthem', 'sau_not', 'sau_yemek'];

const projectList = computed(() => {
    return projectKeys.map((key: string) => ({
        id: key,
        title: t(`projects.${key}.title`),
        content: t(`projects.${key}.content`),
        techs: t(`projects.${key}.techs`).split(',').map((s: string) => s.trim()),
        link: key === 'findthem' ? 'https://findthem.online' : null
    }));
});
</script>

<template>
    <BaseCard>
        <h1 class="mb-[2vh] !text-[2em]">
            {{ t('projects.title') }}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <component 
                :is="project.link ? 'a' : 'div'"
                v-for="project in projectList" 
                :key="project.id"
                :href="project.link"
                :target="project.link ? '_blank' : undefined"
                class="group block no-underline"
            >
                <BaseCard class="h-full bg-white/5 border border-white/5 transition-all duration-300 
                                hover:bg-white/10 hover:translate-x-1 flex flex-col"
                          :class="{ 'cursor-pointer hover:border-blue-500/30': project.link }">
                    
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                            {{ project.title }}
                        </h3>
                        
                        <div v-if="project.link" class="text-blue-500/40 group-hover:text-blue-400 group-hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/01/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </div>
                    </div>

                    <p class="text-gray-400 text-sm leading-relaxed mb-6 italic flex-grow">
                        {{ project.content }}
                    </p>

                    <div class="mt-auto pt-4 border-t border-white/5">
                        <p class="text-[0.75em] uppercase tracking-[0.2em] text-gray-500 mb-3 font-black">
                            {{ t('projects.techs') }}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tech in project.techs" :key="tech"
                                  class="px-2 py-0.5 text-[0.7em] font-bold bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </BaseCard>
            </component>
        </div>
    </BaseCard>
</template>