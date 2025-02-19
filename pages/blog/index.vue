<template>
  <div>
    <navigation-simple />
    <main class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8 text-center">Technical Articles</h1>
      
      <!-- 文章列表 -->
      <div class="grid gap-6 md:grid-cols-2">
        <article 
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
            <p class="text-slate-600 dark:text-slate-400">{{ post.summary }}</p>
            <div class="flex items-center text-sm text-slate-500 dark:text-slate-300">
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.category }}</span>
            </div>
            <nuxt-link 
              :to="post.link"
              class="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Read More →
            </nuxt-link>
          </div>
        </article>
      </div>
    </main>
    <footer-simple />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'AI Marketing Automation in Practice',
          summary: 'In-depth analysis on improving marketing efficiency through AI and achieving precise user reach',
          date: 'March 15, 2024',
          category: 'Technical Practice',
          link: '/blog/ai-marketing'
        },
        {
          title: 'Intelligent Customer Service System Design',
          summary: 'Architecture design guide for NLP-based customer service systems',
          date: 'March 10, 2024',
          category: 'System Design',
          link: '/blog/ai-service'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Technical Blog - AI Solutions',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore the latest AI technology practices and industry application cases'
      }]
    }
  }
}
</script> 