// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxthub/core'],
  modules: ['@nuxt/ui'],
  typescript: {
    typeCheck: true,
    strict: true,
  }
})
