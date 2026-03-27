<script setup>
import BaseIcon from '../../ui/BaseIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  href: String,
  iconName: String // 'linkedin', 'github', 'email'
})

// Renk haritasını burada tanımlıyoruz
const platformColors = {
  linkedin: 'bg-[#0077b5] hover:bg-[#005582] shadow-blue-900/20',
  github: 'bg-[#24292e] hover:bg-[#1a1e22] shadow-black/20',
  email: 'bg-[#ea4335] hover:bg-[#c52216] shadow-red-900/20'
}

// Seçilen ikona göre class'ı döndürür
const bgClass = computed(() => platformColors[props.iconName] || 'bg-gray-700')
</script>

<template>
  <a :href="iconName === 'email' ? `mailto:${href}` : href" 
     :target="iconName !== 'email' ? '_blank' : undefined"
     rel="noopener noreferrer"
     :class="[
       'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg text-white',
       bgClass
     ]">
    <BaseIcon :name="iconName"/>
  </a>
</template>