<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import ItemCard from '../ui/ItemCard_ExamsResults.vue'
import TextTitle from '../ui/TextTitle.vue'
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
        <TextTitle>{{ t('examsResults.title') }}</TextTitle>
        <div class="flex flex-col gap-4">
            <ItemCard
                v-for="(exam, index) in examList" 
                :key="index"
                v-bind="exam"
            />
        </div>
    </BaseCard>
</template>