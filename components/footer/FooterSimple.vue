<template>
  <footer class="bg-slate-50 dark:bg-slate-900 mt-20 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <app-logo class="h-8 w-auto" />
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Leading AI marketing solutions since 2018
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.href"
              class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              target="_blank"
              rel="noopener"
            >
              <component :is="social.icon" class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Dynamic Links -->
        <div 
          v-for="category in footerNavigation"
          :key="category.name"
          class="space-y-4"
        >
          <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {{ category.name }}
          </h3>
          <ul class="space-y-2">
            <li v-for="item in category.links" :key="item.name">
              <router-link
                :to="item.to"
                class="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                active-class="text-indigo-600 dark:text-indigo-400"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Subscribe
          </h3>
          <form @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              required
              placeholder="Enter your email"
              class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              class="mt-2 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p class="text-xs text-slate-500 dark:text-slate-400">
          &copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.
          <router-link 
            to="/privacy" 
            class="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Privacy Policy
          </router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon
} from '@heroicons/vue/outline'

export default defineComponent({
  name: 'AppFooter',
  data() {
    return {
      email: '',
      socials: [
        { name: 'Twitter', href: '#', icon: TwitterIcon },
        { name: 'LinkedIn', href: '#', icon: LinkedinIcon },
        { name: 'GitHub', href: '#', icon: GithubIcon }
      ],
      footerNavigation: [
        {
          name: 'Solutions',
          links: [
            { name: 'AI Content Generator', to: '/solutions/content' },
            { name: 'Campaign Analytics', to: '/solutions/analytics' },
            { name: 'SEO Optimizer', to: '/solutions/seo' }
          ]
        },
        {
          name: 'Company',
          links: [
            { name: 'About Us', to: '/about' },
            { name: 'Careers', to: '/careers' },
            { name: 'Contact', to: '/contact' }
          ]
        },
        {
          name: 'Legal',
          links: [
            { name: 'Privacy', to: '/privacy' },
            { name: 'Terms', to: '/terms' },
            { name: 'Cookie Policy', to: '/cookies' }
          ]
        }
      ]
    }
  },
  methods: {
    handleSubscribe() {
      // 实现订阅逻辑
      console.log('Subscribed with:', this.email)
      this.email = ''
    }
  }
})
</script>
