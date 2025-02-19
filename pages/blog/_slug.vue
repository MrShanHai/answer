<template>
  <div>
    <navigation-simple />
    <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article class="prose dark:prose-invert max-w-none">
        <h1 class="text-4xl font-bold">{{ article.title }}</h1>
        <div class="mt-4 flex items-center text-sm text-slate-500 dark:text-slate-300">
          <span>{{ formatDate(article.createdAt) }}</span>
          <span class="mx-2">•</span>
          <span>{{ article.readingTime.text }}</span>
        </div>
        <nuxt-content :document="article" />
      </article>
    </main>
    <footer-simple />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug)
      .fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  head() {
    return {
      title: `${this.article.title} | 技术博客`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    }
  }
}
</script> 