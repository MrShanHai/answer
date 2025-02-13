<template>
  <div class="flex items-center space-x-2">
    <!-- 自定义AI芯片图标 -->
    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 32 32" fill="none">
      <path d="M16 2L2 16L16 30L30 16L16 2Z" fill="currentColor"/>
      <circle cx="16" cy="16" r="2" fill="#FFFFFF"/>
      <path d="M8 8L16 16M16 16L24 24M16 16L24 8M16 16L8 24" 
            stroke="#FFFFFF" stroke-width="1.5"/>
    </svg>
    
    <!-- 文字标识 -->
    <span class="text-xl font-semibold">
      <span class="text-slate-800 dark:text-slate-200">AI</span>
      <span class="text-indigo-600 dark:text-indigo-400">AnswerGen</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
}
</script>
