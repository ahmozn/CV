<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from '../../composables/useI18n';
import BackToTop from '../ui/BackToTop.vue';

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
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offset = window.innerHeight * 0.4;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
};

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
    <aside class="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[96vw] max-w-md">

        <div class="flex flex-row items-center justify-around p-2 
                    bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-full shadow-2xl overflow-x-auto no-scrollbar gap-1">

            <button v-for="item in menuItems" :key="item.id" @click="scrollToSection(item.id)" :class="[
                'p-3 rounded-full transition-all duration-300 select-none active:scale-75 flex-shrink-0',
                activeSection === item.id
                    ? 'bg-blue-500/30 text-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    : 'text-gray-500'
            ]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3" v-if="item.id === 'summary'" />
                    <path :d="item.icon" />
                </svg>
            </button>
        </div>
    </aside>

    <div class="lg:hidden">
        <BackToTop :active-section="activeSection" class="!fixed !bottom-20 !right-2 !z-[60]" />
    </div>
</template>