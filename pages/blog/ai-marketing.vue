<template>
  <div>
    <navigation-simple />
    <main class="max-w-3xl mx-auto px-4 py-12">
      <article class="prose dark:prose-invert max-w-none">
        <h1 class="text-4xl font-bold">AI营销自动化实践</h1>
        <div class="mt-4 text-sm text-slate-500 dark:text-slate-300">
          <span>发布日期：2024-03-15</span>
          <span class="mx-2">•</span>
          <span>分类：技术实践</span>
        </div>
        
        <div class="mt-8 space-y-6">
          <h2 class="text-2xl font-semibold">核心功能模块</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>实时用户行为追踪系统</li>
            <li>智能内容推荐引擎</li>
            <li>自动化营销流程设计</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8">技术架构图</h2>
          <img 
            src="/images/ai-marketing-arch.png" 
            alt="营销系统架构" 
            class="rounded-lg shadow-md border border-slate-200 dark:border-slate-600"
          >

          <div class="mt-8 p-4 bg-slate-100 dark:bg-slate-700 rounded-md">
            <h3 class="text-lg font-semibold mb-2">核心代码示例</h3>
            <pre class="text-sm bg-white dark:bg-slate-800 p-4 rounded"><code>
// 用户行为分析模块
function trackUserBehavior(event) {
  const analytics = new AnalyticsEngine();
  return analytics.process(event);
}
            </code></pre>
          </div>
        </div>
      </article>
    </main>
    <footer-simple />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'AI营销自动化实践 - 技术博客',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '深度解析如何通过AI技术实现营销流程自动化'
      }]
    }
  }
}
</script> 