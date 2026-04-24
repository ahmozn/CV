<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import { useI18n } from '../../composables/useI18n';
import ItemCard from '../ui/ItemCard_Education.vue';
import TextTitle from '../ui/TextTitle.vue';
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
    <section>
        <BaseCard>
            <TextTitle>{{ t('education.title') }}</TextTitle>
            <div class="flex flex-col gap-4">
                <ItemCard v-for="(edu, index) in educationList" :key="index" v-bind="edu" />
            </div>
        </BaseCard>
    </section>
</template>