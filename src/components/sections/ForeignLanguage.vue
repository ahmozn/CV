<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '../ui/BaseCard.vue'
import ItemCard from '../ui/ItemCard_ForeignLanguage.vue'
import TextTitle from '../ui/TextTitle.vue'
import { useI18n } from '../../composables/useI18n';

const { t } = useI18n()

const languages = computed(() => [
    {
        title: t('foreignLanguage.english.title'),
        level: t('foreignLanguage.english.level'),
        certificate: t('foreignLanguage.english.certificate'),
        url: "https://cert.efset.org/aBRex4"
    }
]);
</script>

<template>
    <section>
        <BaseCard>
            <TextTitle>{{ t('foreignLanguage.title') }}</TextTitle>
            <div class="flex flex-col gap-4">
                <ItemCard v-for="(lang, index) in languages" :key="index" v-bind="lang" />
            </div>
        </BaseCard>
    </section>
</template>