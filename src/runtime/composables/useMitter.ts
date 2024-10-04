import type { Emitter } from 'mitt'
import { useNuxtApp } from '#app'
import type { MittEvents } from '#build/types/mittEvents'
import { onMounted, onUnmounted } from '#build/imports'
import type { UseMitterComposable, EventHandlerFunction, FireFunction, ListenFunction } from '#mitter/types'

/**
 * A composable that provides a type-safe event emitter interface.
 * @returns An object with methods to emit events, register and unregister event handlers.
 */
export const useMitter: UseMitterComposable = () => {
  const { $mitter } = useNuxtApp()
  const mitter = $mitter as Emitter<MittEvents>

  const fire: FireFunction = (event, payload) => {
    mitter.emit(event, payload!)
  }

  const on: EventHandlerFunction = (event, handler) => {
    mitter.on(event, handler)
  }

  const off: EventHandlerFunction = (event, handler) => {
    mitter.off(event, handler)
  }

  const listen: ListenFunction = (event, handler) => {
    onMounted(() => on(event, handler))
    onUnmounted(() => off(event, handler))
  }

  return { fire, on, off, listen }
}
