<template>
  <div>
    <navigation-simple />
    <main class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8 text-center">技术文章</h1>
      
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
              阅读全文 →
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
          title: 'AI营销自动化实践',
          summary: '深度解析如何通过AI提升营销效率，实现精准用户触达',
          date: '2024-03-15',
          category: '技术实践',
          link: '/blog/ai-marketing'
        },
        {
          title: '智能客服系统设计',
          summary: '基于自然语言处理的客服系统架构设计指南',
          date: '2024-03-10',
          category: '系统设计',
          link: '/blog/ai-service'
        }
      ]
    }
  },
  head() {
    return {
      title: '技术博客 - AI解决方案',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '探索最新AI技术实践与行业应用案例'
      }]
    }
  }
}
</script> 