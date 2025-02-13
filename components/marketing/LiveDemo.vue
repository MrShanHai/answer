<template>
  <section class="bg-marketing-background py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-marketing-primary mb-8">实时文案生成演示</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <!-- 输入区 -->
        <div class="space-y-4">
          <input 
            v-model="productDesc"
            placeholder="输入产品描述，例如：'一款智能扫地机器人，支持APP控制'"
            class="w-full p-3 border rounded-lg"
          />
          <button 
            @click="generateCopy"
            class="bg-marketing-action text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            生成文案
          </button>
        </div>
        
        <!-- 输出区 -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div v-if="loading" class="text-gray-500">生成中...</div>
          <div v-else class="space-y-4">
            <div v-for="(copy, index) in generatedCopies" :key="index">
              <h3 class="font-medium">{{ copy.platform }}文案</h3>
              <p class="text-gray-600">{{ copy.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productDesc: '',
      generatedCopies: [],
      loading: false
    }
  },
  methods: {
    async generateCopy() {
      this.loading = true
      // 示例数据，实际应接入API
      this.generatedCopies = [
        {
          platform: 'Facebook广告',
          content: '🤖【智能清扫新体验】APP远程控制，彻底解放双手！现在购买享早鸟优惠→'
        },
        {
          platform: '邮件标题',
          content: '【限时特惠】您的智能家居清洁管家已上线'
        }
      ]
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.loading = false
    }
  }
}
</script> 