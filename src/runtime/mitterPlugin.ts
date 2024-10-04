import mitt from 'mitt'
import { defineNuxtPlugin } from 'nuxt/app'
import type { MitterEvents } from '#build/types/mitterEvents'

export default defineNuxtPlugin(() => {
  const mitter = mitt<MitterEvents>()
  return {
    provide: {
      mitter,
    },
  }
})
