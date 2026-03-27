<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '../../composables/useI18n';
import BaseCard from '../ui/BaseCard.vue';
import BackToTop from '../ui/BackToTop.vue';
import LangSwitch from '../ui/LangSwitch.vue';
import ThemeSwitch from '../ui/ThemeSwitch.vue';
import DownloadCV from './DownloadCV.vue';
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

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

const activeSection = ref('summary');

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0
    });

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

        <BaseCard class="!p-4 bg-white/5 border-white/10 backdrop-blur-xl">
            <nav class="flex flex-col gap-1">
                <div v-for="item in menuItems" :key="item.id" @click="scrollToSection(item.id)" :class="[
                    'group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300',
                    activeSection === item.id ? 'bg-blue-500/10 translate-x-1' : 'hover:bg-white/5 hover:translate-x-1'
                ]">

                    <div
                        :class="activeSection === item.id ? 'text-blue-400' : 'text-gray-500 group-hover:text-blue-300'">
                        <svg xmlns="http://www.w3.org/2000/01/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path :d="item.icon" v-if="item.id !== 'education' && item.id !== 'projects'" />
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" v-if="item.id === 'education'" />
                            <circle cx="12" cy="12" r="3" v-if="item.id === 'summary'" />
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                v-if="item.id === 'projects'" />
                        </svg>
                    </div>

                    <span :class="activeSection === item.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'">
                        {{ t(`sitemap.${item.id}`) }}
                    </span>

                    <div :class="[
                        'ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)] transition-all',
                        activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    ]"></div>
                </div>

            </nav>
            <div class="my-4 border-t border-white/5 mx-2"></div>

            <DownloadCV/>
        </BaseCard>
        <BackToTop :active-section="activeSection" />
    </aside>
</template>