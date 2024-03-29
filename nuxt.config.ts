// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  imports: {
    dirs: ['models'],
  },
})
