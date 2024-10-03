export default defineNuxtConfig({
  modules: ['../src/module'],
  mitt: {
    types: './types/mittEvents.ts',
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-10-02',
})
