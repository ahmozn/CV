<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
const { t } = useI18n()

const skillKeys = ['programmingLanguages', 'frameworks', 'database', 'web'];

const skillGroups = computed(() => {
    return skillKeys.map(key => ({
        title: t(`technicalSkills.${key}.title`),
        items: t(`technicalSkills.${key}.content`).split(',').map((s: string) => s.trim())
    }));
});

const getIconName = (name: string) => {
    const map: Record<string, string> = {
        'C#': 'cs', 'Python': 'python', 'Kotlin': 'kotlin', 'Java': 'java',
        'ASP.Net Core': 'dotnet', 'MVC': 'dotnet', 'EF Core': 'dotnet',
        'MSSQL': 'sqlserver', 
        'PostgreSQL': 'postgres',
        'HTML': 'html', 'CSS': 'css', 'JavaScript': 'js', 'Vue.js': 'vue'
    };
    return map[name] || name.toLowerCase().replace('.', '');
};
</script>

<template>
    <BaseCard>
        <h1 class="mb-[2vh] !text-[2em] tracking-tight">
            {{ t('technicalSkills.title') }}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(group, index) in skillGroups" :key="index"
                class="flex flex-col h-full p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300">

                <h3
                    class="text-[1em] font-black text-blue-400 uppercase tracking-[0.06em] mb-6 border-b border-white/10 pb-2 text-center">
                    {{ group.title }}
                </h3>

                <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 w-full mt-auto mb-auto px-4">
                    <div v-for="item in group.items" :key="item"
                        class="flex flex-col items-center gap-3 group/icon min-w-[80px]">

                        <div class="relative">
                            <img :src="item === 'MSSQL'
                                ? 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
                                : `https://skillicons.dev/icons?i=${getIconName(item)}`" :alt="item"
                                class="w-12 h-12 transition-all duration-300 group-hover/icon:scale-115 group-hover/icon:-translate-y-2 group-hover/icon:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                        </div>

                        <span
                            class="text-[12px] font-bold text-gray-400 group-hover/icon:text-white transition-colors tracking-tight text-center">
                            {{ item }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </BaseCard>
</template>