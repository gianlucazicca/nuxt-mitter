import mitt from 'mitt'
import { defineNuxtPlugin } from 'nuxt/app'
import type { NuxtMitterEvents } from '#build/types/mitterEvents'

export default defineNuxtPlugin(() => {
  const mitter = mitt<NuxtMitterEvents>()
  return {
    provide: {
      mitter,
    },
  }
})
