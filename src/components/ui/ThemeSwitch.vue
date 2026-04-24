<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const updateTheme = () => {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = true 
  }
  updateTheme()
})
</script>

<template>
  <div @click="toggleTheme" 
       class="select-none relative w-18 h-9 rounded-full cursor-pointer p-1 transition-all duration-500
              bg-switch border border-border-base shadow-lg select-none overflow-hidden">
    
    <div :class="[
      'select-none absolute top-1/2 w-7 h-7 rounded-full transition-all duration-500 flex items-center justify-center shadow-md transform -translate-y-1/2',
      isDark ? 'left-[calc(100%-2rem)] bg-blue-500 shadow-blue-500/40' : 'left-1 bg-yellow-500 shadow-yellow-500/40'
    ]">
      <div class="grid place-items-center w-full h-full">
        <svg v-if="isDark" class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        <svg v-else class="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      </div>
    </div>
  </div>
</template>