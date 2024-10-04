import type mitt from 'mitt'
import type { MitterEvents } from '#build/types/mittEvents'

type MitterType = ReturnType<typeof mitt<MitterEvents>>
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
