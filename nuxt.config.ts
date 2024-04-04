// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  imports: {
    dirs: ['models'],
  },
})