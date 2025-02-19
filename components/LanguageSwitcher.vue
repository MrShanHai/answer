<template>
  <div class="relative group">
    <button
      class="flex items-center space-x-1 px-3 py-2 text-slate-600 hover:text-indigo-500 dark:text-slate-300"
    >
      <span class="text-sm">{{ selectedLanguage.name }}</span>
    </button>
    
    <div class="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <ul class="py-1">
        <li 
          v-for="locale in availableLocales"
          :key="locale.code"
          class="px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer flex items-center space-x-2"
          @click="switchLanguage(locale.code)"
        >
          <span>{{ locale.flag }}</span>
          <span>{{ locale.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    selectedLanguage() {
      return this.$i18n.locales.find(l => l.code === this.$i18n.locale)
    }
  },
  methods: {
    switchLanguage(lang) {
      this.$i18n.setLocale(lang)
      localStorage.setItem('user_lang', lang)
    }
  }
}
</script> 