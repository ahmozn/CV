<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import ItemCard from '../ui/ItemCard_Projects.vue'
import TextTitle from '../ui/TextTitle.vue'
import { useI18n } from '../../composables/useI18n';

const { t } = useI18n()
const projectKeys = ['findthem', 'sau_not', 'sau_yemek'];

const projectList = computed(() => {
    return projectKeys.map((key: string) => ({
        id: key,
        title: t(`projects.${key}.title`),
        content: t(`projects.${key}.content`),
        techs: t(`projects.${key}.techs`).split(',').map((s: string) => s.trim()),
        link: key === 'findthem' ? 'https://findthem.online' : ""
    }));
});
</script>

<template>
    <BaseCard>
        <TextTitle>{{ t('projects.title') }}</TextTitle>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ItemCard
                v-for="project in projectList" 
                :key="project.id"
                v-bind="project"
            />
        </div>
    </BaseCard>
</template>