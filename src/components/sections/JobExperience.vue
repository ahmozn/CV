<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import ItemCard from '../ui/ItemCard_JobExperience.vue'
import { useI18n } from '../../composables/useI18n';
import TextTitle from '../ui/TextTitle.vue';

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
    <section>
        <BaseCard>
            <TextTitle>{{ t('jobExperience.title') }}</TextTitle>

            <div class="flex flex-col gap-4">
                <ItemCard v-for="(job, index) in experienceList" :key="index" v-bind="job" />
            </div>
        </BaseCard>
    </section>
</template>