// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/png.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/png.png' }, // optional
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/png.png' }, // optional
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/png.png' }, // optional
      ]
    }
  },
  ssr: false,
  css: ['~/assets/main.scss'],
  fontawesome: {
    icons: {
      solid: [
        'house', 
        'circle-info', 
        'dumbbell', 
        'envelope', 
        'person-walking',
        'chart-line',
        'user-check', 
        'utensils',
        'users',
        'book-open', 
        'check-circle',
      ],
      brands: [
        'google-play',
        'apple'
      ],
    }
  }
})
