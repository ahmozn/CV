import { ref } from 'vue'
import tr from '../locales/tr.json'
import en from '../locales/en.json'

const messages: Record<string, any> = { tr, en }

const locale = ref('tr')

export function useI18n() {
  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj?.[key], messages[locale.value]) || path
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'tr' ? 'en' : 'tr'
  }

  return { t, locale, toggleLocale }
}