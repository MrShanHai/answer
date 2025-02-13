<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32">
    <header class="text-center mb-16">
      <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        AI-Powered Marketing Solutions for Global Success
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        Trusted by 3,000+ businesses worldwide to enhance digital marketing efficiency
      </p>
    </header>

    <div class="lg:grid lg:gap-12 lg:grid-cols-2 lg:items-center">
      <!-- Core Features -->
      <article class="mb-16 lg:mb-0">
        <div class="space-y-8">
          <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              🚀 Key Capabilities
            </h2>
            <ul class="space-y-4 text-slate-700 dark:text-slate-300">
              <li class="flex items-center">
                <CheckCircleIcon class="w-6 h-6 text-green-500 mr-2" />
                AI Content Generation: 4.2s average creation time
              </li>
              <li class="flex items-center">
                <SparklesIcon class="w-6 h-6 text-purple-500 mr-2" />
                Multi-platform Support: 10+ social channels
              </li>
              <li class="flex items-center">
                <ChartBarIcon class="w-6 h-6 text-blue-500 mr-2" />
                Performance Prediction: 92% accuracy rate
              </li>
            </ul>
          </div>

          <!-- Metrics Dashboard -->
          <div class="grid grid-cols-2 gap-4 text-center">
            <div class="p-4 bg-indigo-50 dark:bg-slate-700 rounded-lg">
              <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">98%</div>
              <div class="text-sm text-slate-600 dark:text-slate-300">Client Satisfaction</div>
            </div>
            <div class="p-4 bg-purple-50 dark:bg-slate-700 rounded-lg">
              <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">4.2h</div>
              <div class="text-sm text-slate-600 dark:text-slate-300">Time Saved/Campaign</div>
            </div>
          </div>
        </div>
      </article>

      <!-- Case Study -->
      <article class="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            📈 Case Study: Global Beauty Brand Social Strategy
          </h2>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <img 
                  src="/assets/media/cases/global-beauty.png" 
                  alt="Global beauty brand product display" 
                  class="h-16 w-16 rounded-lg object-cover"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </div>
              <div class="ml-4">
                <h3 class="font-semibold text-slate-900 dark:text-white">Key Results</h3>
                <ul class="mt-2 text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
                  <li>320% organic traffic growth in 3 months</li>
                  <li>65% reduction in content production costs</li>
                  <li>2.8x increase in ad CTR</li>
                </ul>
              </div>
            </div>

            <blockquote class="border-l-4 border-indigo-500 pl-4 italic text-slate-700 dark:text-slate-300">
              "The AI tools enabled us to scale content production while maintaining brand consistency across 15 global markets..."
            </blockquote>
          </div>
        </div>
        
        <!-- Data Visualization -->
        <div class="bg-slate-50 dark:bg-slate-700 p-6">
          <div class="flex items-center justify-between text-sm">
            <div class="text-slate-600 dark:text-slate-300">Content Production Efficiency</div>
            <div class="text-indigo-600 dark:text-indigo-400 font-semibold">↑ 240%</div>
          </div>
          <div class="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div class="h-full bg-indigo-500 w-3/4"></div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeadersTestimonial',
  props: {},
}
</script>
