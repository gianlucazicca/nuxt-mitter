import mitt from 'mitt'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const mitter = mitt()

  nuxtApp.provide('mitter', mitter)
  nuxtApp.vueApp.provide('mitter', mitter)
})

declare module '#app' {
  interface NuxtApp {
    $mitter: ReturnType<typeof mitt>
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $mitter: ReturnType<typeof mitt>
  }
}
