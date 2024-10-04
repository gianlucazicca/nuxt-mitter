import { useNuxtApp } from '#app'
import type { MitterEvents } from '#build/types/mitterEvents'
import { onMounted, onUnmounted } from '#build/imports'
/**
 * A composable that provides a type-safe event emitter interface.
 * @returns An object with methods to emit events, register and unregister event handlers.
 */
export const useMitter = () => {
  const { $mitter } = useNuxtApp()
  const mitter = $mitter
  /**
   * Emits an event with an optional payload.
   * @param event The event name to emit.
   * @param payload Optional payload for the event.
   */
  const fire = <K extends keyof MitterEvents>(event: K, payload?: MitterEvents[K]) => {
    mitter.emit(event, payload!)
  }
  /**
   * Unregisters an event handler.
   * @param event The event name to stop listening for.
   * @param handler The function to remove from the event listeners.
   */
  const on = <K extends keyof MitterEvents>(
    event: K,
    handler: (payload: MitterEvents[K]) => void,
  ) => {
    mitter.on(event, handler)
  }

  const off = <K extends keyof MitterEvents>(
    event: K,
    handler: (payload: MitterEvents[K]) => void,
  ) => {
    mitter.off(event, handler)
  }

  /**
   * Registers an event handler and automatically removes it when the component is unmounted.
   * @param event The event name to listen for.
   * @param handler The function to call when the event is emitted.
   */
  const listen = <K extends keyof MitterEvents>(
    event: K,
    handler: (payload: MitterEvents[K]) => void,
  ) => {
    onMounted(() => on(event, handler))
    onUnmounted(() => off(event, handler))
  }

  return { fire, on, off, listen }
}
