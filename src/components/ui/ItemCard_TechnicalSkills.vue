<script setup lang="ts">
import BaseCardItem from './BaseCardItem.vue';

interface Props {
  title: string
  items: string[]
}

defineProps<Props>()

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
  <BaseCardItem class="flex flex-col h-full p-5 rounded-2xl">
    <h3 class="text-[1em] font-black text-primary uppercase tracking-[0.06em] mb-6 border-b border-border-base pb-2 text-center">
      {{ title }}
    </h3>

    <div class="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 w-full mt-auto mb-auto px-4">
      <div v-for="item in items" :key="item" class="flex flex-col items-center gap-3 group/icon min-w-[80px]">
        <div class="relative">
          <img :src="item === 'MSSQL'
            ? 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
            : `https://skillicons.dev/icons?i=${getIconName(item)}`" 
            :alt="item"
            class="w-12 h-12 transition-all duration-300 group-hover/icon:scale-115 group-hover/icon:-translate-y-2 group-hover/icon:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
          />
        </div>

        <span class="text-[12px] font-bold text-secondary transition-colors tracking-tight text-center">
          {{ item }}
        </span>
      </div>
    </div>
  </BaseCardItem>
</template>