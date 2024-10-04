import { useLogger } from '@nuxt/kit'

type ModuleMessenger = (type: 'error' | 'success' | 'start', projectTypesPath?: string) => void

export const moduleMessenger: ModuleMessenger = (type, projectTypesPath) => {
  const logger = useLogger('nuxt-mitt', {
    formatOptions:
        {
          date: false,
          columns: 2,
        },
  })

  switch (type) {
    case 'start':
      logger.start(`Initializing nuxt-mitt module...`)
      break
    case 'success':
      logger.success(`event types used from: ${projectTypesPath!}`)
      break
    case 'error':
      logger.error(`no such file found for event types under path: ${projectTypesPath!}`)
      logger.warn(`Module is working but events not typed - not recommanded`)
      logger.info(`Please provide mittEvents.d.ts file like:`)
      logger.box(`export type MittEvents = {
  //Your types
  foo: string
  bar?: number
}`)
      break
  }
}
