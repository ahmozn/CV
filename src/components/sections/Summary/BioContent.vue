<script setup lang="ts">
import {computed} from 'vue';
import BaseCard from '../../ui/BaseCard.vue';
import { useI18n } from '../../../composables/useI18n';
const { t } = useI18n()
const bioItems = computed(() => {
  return t('summary.content').split('\n');
});
</script>

<template>
    <BaseCard class="h-full text-left">
        <h1 class="mb-[2vh] !text-[2em]">{{ t('summary.title') }}</h1>
        <ul class="space-y-2">
            <li v-for="(item, index) in bioItems" :key="index" class="flex items-start space-y-3">
                <span class="mr-2 text-blue-500">→</span>
                <span>{{ item }}</span>
            </li>
        </ul>
    </BaseCard>
</template>