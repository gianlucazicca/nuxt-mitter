import mitt, { type EventType } from 'mitt'
import { defineNuxtPlugin } from 'nuxt/app'
import type { MittEvents } from '#build/types/mittEvents'

export default defineNuxtPlugin(() => {
  const mitter = mitt<MittEvents>()
  const initMitter = <T extends Record<EventType, unknown>>() => mitt<T>()
  return {
    provide: {
      mitter,
      initMitter,
    },
  }
})
