<template>
  <div class="analysis-container">
    <button 
      @click="triggerAnalysis"
      :class="['analysis-button', { 'analyzing': isAnalyzing }]"
    >
      <span class="button-text">
        {{ isAnalyzing ? 'Analyzing' : 'Generate' }}
        <span class="ai-label">AI Analysis</span>
      </span>
      <span class="loading-dots" v-if="isAnalyzing">
        <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
      </span>
    </button>

    <transition name="slide-fade">
      <div v-if="analysisResult" class="result-card">
        <div class="result-header">
          <h3>AI Analysis Result</h3>
          <button @click="analysisResult = null" class="close-button">×</button>
        </div>
        <div class="result-content">
          {{ analysisResult }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAnalyzing: false,
      analysisResult: null
    }
  },
  methods: {
    async triggerAnalysis() {
      if (this.isAnalyzing) return;
      
      this.isAnalyzing = true;
      try {
        const prompt = "Generate a concise analysis of current AI industry trends";
        const result = await this.$services.analyzer.query(prompt);
        this.analysisResult = result;
      } catch (error) {
        this.$toast.error('Analysis failed: ' + error.message);
      } finally {
        this.isAnalyzing = false;
      }
    }
  }
}
</script>

<style scoped>
.analysis-button {
  /* 按钮样式 */
}

.result-card {
  /* 结果卡片样式 */
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
