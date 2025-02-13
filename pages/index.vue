<template>
  <div>
    <navigation-simple />
    <div
      class="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40"
    >
      <headers-centered />

      <sections-testimonial-centered 
        title="AI Answer Generator 正在改变内容创作方式"
        :testimonials="[
          { 
            text: '生成速度比人工撰写快5倍，广告点击率提升42%',
            author: '某电商品牌营销总监',
            role: '双11活动案例'
          },
          {
            text: '多语言生成功能帮助我们快速拓展海外市场',
            author: '跨境电商运营团队',
            role: '国际化营销案例'
          }
        ]"
      />

      <sections-feature-simple
        name="智能生成"
        title="AI驱动的内容生成引擎"
        :icon="require('/assets/media/features/ai-core.png')"
      >
        <template #description>
          <p class="space-y-4">
            基于GPT-4架构的生成模型，支持：
            <span class="text-indigo-500 font-medium">广告文案</span>、
            <span class="text-indigo-500 font-medium">社交媒体内容</span>、
            <span class="text-indigo-500 font-medium">邮件模板</span>等多场景内容生成
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>实时生成速度：平均响应时间 &lt; 2秒</li>
            <li>支持15+种语言内容生成</li>
            <li>内置营销话术优化算法</li>
          </ul>
        </template>
      </sections-feature-simple>

      <sections-feature-simple
        name="无缝对接"
        title="主流营销平台深度集成"
        :icon="require('/assets/media/features/customization.png')"
        reverse
      >
        <template #description>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="flex items-center space-x-2">
              <img src="/assets/media/platforms/google-ads.png" class="h-8" alt="Google Ads">
              <span class="text-gray-600">Google Ads</span>
            </div>
            <div class="flex items-center space-x-2">
              <img src="/assets/media/platforms/facebook.png" class="h-8" alt="Facebook">
              <span class="text-gray-600">Meta平台</span>
            </div>
            <!-- 更多平台... -->
          </div>
        </template>
      </sections-feature-simple>
    </div>
    <footer-simple />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: this.$t('seo.title'),
      meta: [
        { 
          hid: 'description', 
          name: 'description',
          content: this.$t('seo.description') 
        }
      ]
    }
  }
}
</script>
