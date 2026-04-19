<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
import IconRedirect from '../ui/IconRedirect.vue'
import BaseCardItem from './BaseCardItem.vue';
import Badge from './Badge.vue';

const { t } = useI18n()

interface Props {
  title: string
  content: string
  techs: string[]
  link?: string
}

defineProps<Props>()
</script>

<template>
  <component :is="link ? 'a' : 'div'" :href="link || undefined" :target="link ? '_blank' : undefined"
    :rel="link ? 'noopener noreferrer' : undefined" class="group block no-underline h-full">
    <IconRedirect :url="link">
      <BaseCardItem class="!h-full card-bg border border-border-base transition-all duration-300 flex flex-col"
        :class="{ 'cursor-pointer hover:border-blue-500/30': link }">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold text-secondary group-hover:text-blue-400 transition-colors duration-300">
            {{ title }}
          </h3>
        </div>

        <p class="text-muted text-sm leading-relaxed mb-6 italic flex-grow">
          {{ content }}
        </p>

        <div class="mt-auto pt-4 border-t border-border-base">
          <p class="text-[0.75em] uppercase tracking-[0.2em] text-gray-500 mb-3 font-black">
            {{ t('projects.techs') }}
          </p>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tech in techs" :key="tech" class="px-2 py-0.5 font-bold">{{ tech }}</Badge>
          </div>
        </div>
      </BaseCardItem>
    </IconRedirect>
  </component>
</template>