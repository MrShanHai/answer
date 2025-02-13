<template>
  <div>
    <navigation-simple />
    <div
      class="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40"
    >
      <headers-centered />

      <!-- Performance Dashboard -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">15K+</div>
            <div class="mt-2 text-sm text-slate-600 dark:text-slate-300">Monthly Content Generated</div>
          </div>
          <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">92%</div>
            <div class="mt-2 text-sm text-slate-600 dark:text-slate-300">Customer Retention</div>
          </div>
          <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400">4.8/5</div>
            <div class="mt-2 text-sm text-slate-600 dark:text-slate-300">Satisfaction Rate</div>
          </div>
          <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">2.3x</div>
            <div class="mt-2 text-sm text-slate-600 dark:text-slate-300">ROI Improvement</div>
          </div>
        </div>
      </section>

      <!-- Press Coverage -->
  

      <!-- SEO-Optimized Content -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-12">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            AI-Powered Marketing Solutions
          </h2>
          <div class="prose dark:prose-invert max-w-none">
            <p>
              Our <strong>AI content generation platform</strong> leverages advanced 
              natural language processing to create high-performing marketing 
              copy. Key features include:
            </p>
            <ul>
              <li>Real-time content generation (1.2s/response)</li>
              <li>Multi-platform optimization for Google Ads, Meta, and 10+ channels</li>
              <li>Built-in SEO analysis and keyword integration</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Structured Data -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "AI Marketing Suite",
        "image": "https://yourdomain.com/ai-marketing-suite.jpg",
        "description": "Enterprise-grade AI marketing tools with proven ROI improvement",
        "brand": {
          "@type": "Brand",
          "name": "YourBrand"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1500"
        }
      }
      </script>
    </div>
    <footer-simple />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'AI Marketing Solutions for Global Enterprises',
      meta: [
        { 
          hid: 'description', 
          name: 'description',
          content: 'Enterprise AI marketing tools generating 15K+ monthly content pieces with 92% customer retention and 2.3x ROI improvement' 
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://yourdomain.com/og-image.jpg'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://yourdomain.com/ai-marketing'
        }
      ]
    }
  }
}
</script>
