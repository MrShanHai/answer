<template>
  <header class="relative px-4 sm:px-6 md:px-8">
    <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1
        class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
      >
        AI Answer Generator - Smart Content Engine for Marketers
      </h1>
      <p class="mt-6 text-lg text-gray-400 text-center max-w-3xl mx-auto">
        AI-powered content generation solution with built-in 
        <code class="font-mono font-medium text-indigo-400">Ad Copywriting</code>, 
        <code class="font-mono font-medium text-indigo-400">Social Media Posts</code>, 
        <code class="font-mono font-medium text-indigo-400">Email Templates</code> 
        and 
        <code class="font-mono font-medium text-indigo-400">Multi-platform Publishing</code>, 
        boosting marketing efficiency by 300%.
      </p>

      <div class="mt-6 justify-center sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs">
          <input
            id="email"
            type="email"
            name="email"
            class="highlight-white sm:flex items-center w-full text-left px-4 h-12 bg-white shadow-md dark:shadow-white border-0 hover:ring-400 hover:ring-slate-300 focus:ring-0 focus:outline-none focus:border-slate-500 rounded-lg text-slate-400 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            placeholder="Enter your work email"
          />
        </div>
        <button
          type="button"
          class="mt-3 sm:mt-0 sm:ml-3 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-indigo-500 dark:shadow-sm dark:hover:bg-indigo-400"
        >
          Start Free Trial
        </button>
      </div>
    </div>
    <headers-testimonial />
  </header>
</template>

<script>
export default {
  name: 'HeadersCentered',
}
</script>
