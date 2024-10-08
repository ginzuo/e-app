// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'web/',
  imports: { dirs: ['./stores', './composables/*/*.{ts,js}'] },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    "@nuxt/image",
    '@nuxt/icon',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.escuelajs.co/graphql'
      }
    },
  },
})