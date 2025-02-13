<template>
  <section class="px-8 max-w-7xl mx-auto py-16 sm:py-24">
    <div class="text-center mb-16">
      <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        AI Marketing Solutions FAQ
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-300">
        Answers to common questions about our AI-powered marketing tools
      </p>
    </div>

    <div class="space-y-8">
      <!-- FAQ Item -->
      <article class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white flex items-center">
          <QuestionMarkCircleIcon class="w-6 h-6 text-indigo-500 mr-3" />
          How does the AI content generator work?
        </h2>
        <p class="mt-4 text-slate-600 dark:text-slate-300 leading-7">
          Our NLP-powered system analyzes your brand voice and target audience to create 
          high-converting content. Using GPT-4 architecture, it generates 
          <span class="text-indigo-500 font-medium">50+ variations in under 5 seconds</span>, 
          with built-in plagiarism checks and SEO optimization.
        </p>
      </article>

      <!-- FAQ Item with Data -->
      <article class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white flex items-center">
          <ChartBarIcon class="w-6 h-6 text-purple-500 mr-3" />
          What results can I expect?
        </h2>
        <div class="mt-4 space-y-4">
          <ul class="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Average 3.8x increase in social engagement</li>
            <li>92% reduction in content creation time</li>
            <li>AI-generated content performs 2.3x better than human-written</li>
          </ul>
          <div class="bg-indigo-50 dark:bg-slate-700 p-4 rounded-lg">
            <div class="flex items-center text-sm">
              <InformationCircleIcon class="w-5 h-5 text-indigo-500 mr-2" />
              <span class="text-slate-600 dark:text-slate-300">
                Based on analysis of 15,000+ campaigns in 2023
              </span>
            </div>
          </div>
        </div>
      </article>

      <!-- FAQ Item with Comparison -->
      <article class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white flex items-center">
          <ScaleIcon class="w-6 h-6 text-green-500 mr-3" />
          How does it compare to human writers?
        </h2>
        <div class="mt-6 grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-indigo-500">AI Advantages</h3>
            <ul class="space-y-2 text-slate-600 dark:text-slate-300">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                24/7 availability
              </li>
              <li class="flex items-center">
                <ClockIcon class="w-5 h-5 text-blue-500 mr-2" />
                5-second content generation
              </li>
              <li class="flex items-center">
                <CurrencyDollarIcon class="w-5 h-5 text-purple-500 mr-2" />
                1/10th the cost
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="font-semibold text-slate-600 dark:text-slate-300">Human Strengths</h3>
            <ul class="space-y-2 text-slate-600 dark:text-slate-300">
              <li class="flex items-center">
                <SparklesIcon class="w-5 h-5 text-yellow-500 mr-2" />
                Creative storytelling
              </li>
              <li class="flex items-center">
                <HeartIcon class="w-5 h-5 text-red-500 mr-2" />
                Emotional nuance
              </li>
              <li class="flex items-center">
                <LightBulbIcon class="w-5 h-5 text-orange-500 mr-2" />
                Original ideation
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>

    <!-- Structured Data for SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does the AI content generator work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NLP-powered system analyzes your brand voice and target audience to create high-converting content. Using GPT-4 architecture, it generates 50+ variations in under 5 seconds, with built-in plagiarism checks and SEO optimization."
          }
        },
        {
          "@type": "Question",
          "name": "What results can I expect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Average 3.8x increase in social engagement, 92% reduction in content creation time, and AI-generated content performs 2.3x better than human-written based on analysis of 15,000+ campaigns in 2023."
          }
        }
      ]
    }
    </script>
  </section>
</template>

<script>
export default {
  name: 'TestimonialCentered',
}
</script>
