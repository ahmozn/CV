<script setup lang="ts">
import BaseCard from '../../ui/BaseCard.vue';
import { useI18n } from '../../../composables/useI18n';
const {t}=useI18n()
</script>

<template>
    <BaseCard class="h-full">
        <h1>{{ t('summary.title') }}</h1>
        <p>{{ t('summary.content') }}</p>
    </BaseCard>
</template>