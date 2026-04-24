<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import ItemCard from '../ui/ItemCard_TechnicalSkills.vue'
import { useI18n } from '../../composables/useI18n';
import TextTitle from '../ui/TextTitle.vue';

const { t } = useI18n()
const skillKeys = ['programmingLanguages', 'frameworks', 'database', 'web'];

const skillGroups = computed(() => {
    return skillKeys.map(key => ({
        title: t(`technicalSkills.${key}.title`),
        items: t(`technicalSkills.${key}.content`).split(',').map((s: string) => s.trim())
    }));
});
</script>

<template>
    <section>
        <BaseCard>
            <TextTitle>{{ t('technicalSkills.title') }}</TextTitle>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ItemCard v-for="(group, index) in skillGroups" :key="index" v-bind="group" />
            </div>
        </BaseCard>
    </section>
</template>