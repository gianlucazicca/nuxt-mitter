import type { Emitter } from 'mitt'
import { useNuxtApp } from '#app'
import type { MittEvents } from '#build/types/mittEvents'
import { onMounted, onUnmounted } from '#build/imports'

export const useMitter = () => {
  const { $mitter } = useNuxtApp()

  // Ensure $mitter is typed as `Emitter<MittEvents>`
  const mitter = $mitter as Emitter<MittEvents>

  // Emit function with type-safe event and payload
  const fire = <K extends keyof MittEvents>(event: K, payload?: MittEvents[K]): void => {
    mitter.emit(event, payload!) // Emit with payload (which can be undefined if the event doesn't need it)
  }

  // On function with type-safe handler, adapting the type of the handler based on the event type
  const on = <K extends keyof MittEvents>(event: K, handler: (payload: MittEvents[K]) => void): void => {
    mitter.on(event, handler) // Type-safe registration of the handler
  }

  // Off function with type-safe handler
  const off = <K extends keyof MittEvents>(event: K, handler: (payload: MittEvents[K]) => void): void => {
    mitter.off(event, handler) // Type-safe unregistration of the handler
  }

  const listen = <K extends keyof MittEvents>(event: K, handler: (payload: MittEvents[K]) => void): void => {
    onMounted(() => on(event, handler))
    onUnmounted(() => on(event, handler))
  }

  return { fire, on, off, listen }
}
