<template>
  <header class="relative px-4 sm:px-6 md:px-8">
    <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1
        class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
      >
        <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI Answer Generator
        </span>
        <div class="mt-4 text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 font-medium">
          Your Intelligent Marketing Copilot
        </div>
      </h1>
      <div class="mt-8 flex justify-center gap-3 sm:gap-4">
        <div 
          v-tooltip="'Average content approval rate across 3000+ customers'"
          class="flex items-center space-x-1.5 text-indigo-600 group"
        >
          <CheckCircleIcon class="w-5 h-5 shrink-0" />
          <div class="text-lg font-semibold">98%</div>
          <div class="text-xs text-gray-500 hidden sm:inline">Approval</div>
        </div>
        
        <div class="h-6 w-px bg-gray-200 my-auto" />
        
        <div class="flex items-center space-x-1.5 text-purple-600 group"
             v-tooltip="'Average time saved per marketing campaign'">
          <ClockIcon class="w-5 h-5 shrink-0" />
          <div class="text-lg font-semibold">4.2h</div>
          <div class="text-xs text-gray-500 hidden sm:inline">Saved</div>
        </div>
      </div>
      <section class="mt-6 text-center">
        <p class="text-lg text-gray-400 max-w-3xl mx-auto">
          Get instant answers to your questions using our advanced AI technology. 
          <span class="block mt-2">Try now:</span>
        </p>
      </section>
      <div class="mt-8 max-w-3xl mx-auto">
        <div class="ml-8 md:ml-12">
          <div class="relative group transform transition-all duration-300 hover:scale-[1.01]">
            <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl blur-[20px] opacity-50 group-hover:opacity-70 transition"></div>
            <div class="relative flex w-full min-w-[320px]">
              <input
                id="question-input"
                v-model="question"
                type="text"
                name="question"
                required
                aria-label="Enter marketing question"
                placeholder="How to write high-converting Facebook ad copy for Gen Z?"
                class="flex-1 min-w-0 h-14 pl-6 pr-32 sm:pl-8 sm:pr-36 text-lg border-2 border-indigo-100/50 rounded-l-xl focus:border-indigo-200/80 focus:ring-0 bg-white/50 backdrop-blur-sm placeholder-indigo-300/70 box-border"
              />
              <button
                @click="setQuickPrompt()"
                class="h-14 w-32 sm:w-36 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-3 rounded-r-xl hover:shadow-lg hover:-translate-y-0.5 transition-all border-l-0"
              >
                <div class="flex items-center space-x-2">
                  <SparklesIcon class="w-5 h-5" />
                  <div class="text-left">
                    <div class="text-sm sm:text-base leading-tight -translate-x-[2px]">Generate</div>
                    <div class="text-[10px] opacity-80 leading-tight">AI Analysis</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-4 flex flex-wrap gap-2 justify-center">
          <button 
            v-for="type in quickTypes"
            :key="type"
            class="px-3 py-1.5 bg-indigo-50/50 text-indigo-700 rounded-lg text-sm hover:bg-indigo-100/80 transition-colors border border-indigo-100/30 hover:border-indigo-200/50"
          >
            {{ type }}
          </button>
        </div>
      </div>
      <div v-if="resultContent">{{ 
        resultContent
       }}</div>
      <div class="mt-12 text-center space-y-4">
        <p class="text-sm text-gray-400/80">Trusted by innovative teams at</p>
        <div class="flex flex-wrap justify-center gap-6 opacity-90 hover:opacity-100 transition-opacity">
          <img 
            v-for="logo in ['shopify', 'hubspot', 'slack']" 
            :key="logo"
            :src="`/logos/${logo}.svg`" 
            class="h-8 hover:scale-105 transition-transform grayscale hover:grayscale-0"
            :alt="`${logo} logo`"
          >
        </div>
      </div>
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is AI Answer Generator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Answer Generator is an advanced artificial intelligence system that provides instant, accurate answers to your questions across various domains including marketing, technology and business strategy."
            }
          }]
        }
      </script>
    </div>
    <headers-testimonial />
  </header>
</template>

<script>
export default {
  name: 'HeadersCentered',
  data() {
    return {
      question: '',
      resultContent: '',
      quickTypes: [
        'Facebook Ad Copy',
        'Email Subject Line', 
        'Product Description',
        'Social Media Post'
      ]
    }
  },
  methods: {
    setQuickPrompt(type) {
      console.log('setQuickPrompt')
      this.handleQuestionSubmit()
    },
    handleQuestionSubmit() {
      console.log('this.question=====', this.question)
      if (this.question.trim()) {
        try {
          console.log('this.questiodddn=====', this.question)
           const tt =  {"model":"deepseek-ai/DeepSeek-V3","messages":[{"role":"user","content": this.question}],"stream":false,"max_tokens":512,"stop":["null"],"temperature":0.7,"top_p":0.7,"top_k":50,"frequency_penalty":0.5,"n":1,"response_format":{"type":"text"},"tools":[{"type":"function","function":{"description":"<string>","name":"<string>","parameters":{},"strict":false}}]}

          const options = {
              method: 'POST',
              headers: {Authorization: 'Bearer sk-driiienqpcxhxzmxziwtgvqbivkzugcprjmbleflqxunlcii', 'Content-Type': 'application/json'},
              body: JSON.stringify(tt),
            }
            fetch('https://api.siliconflow.cn/v1/chat/completions', options)
              .then(response => response.json())
              .then(res => { 
                console.log('response====', res)
                this.resultContent = res.choices[0].message.content
                 console.log('resultContentresultContentresultContent====', this.resultContent)
              })
              .catch(err => console.error(err));
        // this.$store.commit('SET_ANSWER', response.answer)
          // this.$router.push('/answer')
        } catch (error) {
          // console.error('Error:', error)
        }
      }
    }
  },
  head() {
    return {
      title: 'AI Answer Generator - Instant Question Solving Tool',
      meta: [
        { 
          hid: 'description', 
          name: 'description',
          content: 'Get instant AI-powered answers to your professional questions. Our advanced algorithm provides accurate solutions for marketing, business and technology challenges.' 
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'AI Answer Generator - Professional Question Solving Platform'
        }
      ]
    }
  }
}
</script>

<style>
.title-gradient {
  background-image: linear-gradient(15deg, #4F46E5 0%, #9333EA 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* 全局添加平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 输入框聚焦动画 */
input:focus {
  animation: inputFocus 0.3s ease-out;
}

@keyframes inputFocus {
  from {
    transform: scale(0.98);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.flex {
  display: flex;
}
.gap-2 {
  gap: 0.5rem; /* 8px */
}
.flex-1 {
  flex: 1 1 0%;
}
.pr-32 {
  padding-right: 0rem;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.text-center {
  text-align: center;
}
.space-y-1 {
  space-y: 0.25rem; /* 4px */
}
.space-x-2 {
  space-x: 0.5rem; /* 8px */
}
.shrink-0 {
  /* 防止图标被压缩 */
}
.translate-x-8 {
  /* 位移不会改变元素实际占位空间 */
}
.pr-24 {
  padding-right: 96px;
}
</style>
