<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from '../../composables/useI18n';
import BaseCard from '../ui/BaseCard.vue';
import BackToTop from '../ui/BackToTop.vue';
import LangSwitch from '../ui/LangSwitch.vue';
import ThemeSwitch from '../ui/ThemeSwitch.vue';
import DownloadCV from './DownloadCV.vue';
import ItemSiteMap from '../ui/Item_SiteMap.vue'

const { t } = useI18n();

const menuItems = [
    { id: 'summary', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' },
    { id: 'education', icon: 'M22 10v6M2 10l10-5 10 5-10 5z' },
    { id: 'jobExperience', icon: 'M21 7h-3a2 2 0 0 1-2-2V2' },
    { id: 'foreignLanguage', icon: 'M5 8l6 6M19 8l-6 6M2 12h20' },
    { id: 'examsResults', icon: 'M9 11l3 3L22 4' },
    { id: 'technicalSkills', icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6' },
    { id: 'projects', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' }
];

const activeSection = ref('summary');

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) activeSection.value = entry.target.id;
        });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    menuItems.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
    });
});
</script>

<template>
    <aside class="hidden lg:block sticky top-[20vh] self-start w-full max-w-[280px]">
        <div class="flex items-center justify-center gap-3 mb-4 px-2">
            <LangSwitch />
            <ThemeSwitch />
        </div>

        <BaseCard class="!p-4 bg-card border-white/10 backdrop-blur-xl">
            <nav class="flex flex-col gap-1">
                <ItemSiteMap
                    v-for="item in menuItems" 
                    :key="item.id"
                    :id="item.id"
                    :icon="item.icon"
                    :label="t(`sitemap.${item.id}`)"
                    :is-active="activeSection === item.id"
                    @click="scrollToSection(item.id)"
                />
            </nav>
            <div class="my-4 border-t border-white/5 mx-2"></div>
            <DownloadCV/>
        </BaseCard>
        <BackToTop :active-section="activeSection" />
    </aside>
</template>