import type mitt from 'mitt'
import type { MittEvents } from '#build/types/mittEvents'

type MitterType = ReturnType<typeof mitt<MittEvents>>
declare module '#app' {
  interface NuxtApp {
    $mitter: MitterType
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $mitter: MitterType
  }
}
