<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <navigation-simple />
    <main class="max-w-4xl mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">AI 行业分析</h1>
        <button 
          @click="handleAnalysis"
          :disabled="isLoading"
          class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
        >
          {{ isLoading ? '分析中...' : '生成行业洞察' }}
        </button>
      </div>

      <!-- 加载状态 -->
      <div v-if="isLoading" class="text-center text-slate-500">
        <div class="animate-pulse space-y-4">
          <div class="h-4 bg-slate-200 rounded w-3/4 mx-auto"></div>
          <div class="h-4 bg-slate-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>

      <!-- 结果展示 -->
      <div v-if="responseData" class="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">分析结果：</h2>
        <div class="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
          {{ responseData.choices[0].message.content }}
        </div>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="mt-6 p-4 bg-red-100 text-red-700 rounded-lg">
        {{ error }}
      </div>
    </main>
    <footer-simple />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      responseData: null,
      error: null
    }
  },
  methods: {
    async handleAnalysis() {
      this.isLoading = true
      this.error = null
      this.responseData = null

      try {
        const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer YOUR_API_TOKEN', // 替换实际token
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: "deepseek-ai/DeepSeek-V3",
            messages: [{
              role: "user",
              content: "中国大模型行业2025年将会迎来哪些机遇和挑战？"
            }],
            stream: false,
            max_tokens: 512,
            temperature: 0.7,
            top_p: 0.7
          })
        })

        if (!response.ok) throw new Error(`API请求失败: ${response.status}`)
        
        this.responseData = await response.json()
      } catch (err) {
        this.error = `分析失败: ${err.message}`
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script> 