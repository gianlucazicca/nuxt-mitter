import type mitt from 'mitt'
import type { MittEvents } from '#build/types/mittEvents'

export type FireFunction = <K extends keyof MittEvents>(event: K, payload?: MittEvents[K]) => void

export type EventHandlerFunction = <K extends keyof MittEvents>(
  event: K,
  handler: (payload: MittEvents[K]) => void
) => void

export type ListenFunction = <K extends keyof MittEvents>(
  event: K,
  handler: (payload: MittEvents[K]) => void
) => void

export interface UseMitterReturn {
  /**
   * Emits an event with an optional payload.
   * @param event The event name to emit.
   * @param payload Optional payload for the event.
   */
  fire: FireFunction

  /**
   * Registers an event handler.
   * @param event The event name to listen for.
   * @param handler The function to call when the event is emitted.
   */
  on: EventHandlerFunction

  /**
   * Unregisters an event handler.
   * @param event The event name to stop listening for.
   * @param handler The function to remove from the event listeners.
   */
  off: EventHandlerFunction

  /**
   * Registers an event handler and automatically removes it when the component is unmounted.
   * @param event The event name to listen for.
   * @param handler The function to call when the event is emitted.
   */
  listen: ListenFunction
}

export type UseMitterComposable = () => UseMitterReturn

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
