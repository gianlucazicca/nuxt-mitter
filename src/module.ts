import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'
import { defineNuxtModule, addPlugin, createResolver, useLogger, addImportsDir, addTypeTemplate } from '@nuxt/kit'

export interface ModuleOptions {
  types: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-mitt',
    configKey: 'mitt',
  },
  defaults: {
    types: '',
  },
  async setup(_options, _nuxt) {
    const logger = useLogger('nuxt-mitt', {
      formatOptions:
              {
                date: false,
                columns: 2,
              },
    })
    logger.start(`Initializing nuxt-mitt module...`)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    const { resolve } = createResolver(import.meta.url)
    const projectRootDir = _nuxt.options.rootDir
    const projectTypesPath = _options.types

    _nuxt.options.build.transpile.push(runtimeDir)
    _nuxt.options.alias['#mitter'] = runtimeDir

    if (projectTypesPath && existsSync(resolve(projectRootDir, projectTypesPath))) {
      addTypeTemplate({
        filename: 'types/mittEvents.d.ts',
        src: resolve(projectRootDir, projectTypesPath),
      })
      logger.success(`event types used from: ${projectTypesPath}`)
    }
    else {
      addTypeTemplate({
        filename: 'types/mittEvents.d.ts',
        src: resolve(runtimeDir, 'templates/mittEventsTemplate.d.ts'),
      })
      logger.error(`no such file found for event types under path: ${projectTypesPath}`)
      logger.warn(`Module is working but events not typed - not recommanded`)
      logger.info(`Please provide mittEvents.d.ts file like:`)
      logger.box(`export type MittEvents = {
  //Your types
  foo: string
  bar?: number
}`)
    }

    addTypeTemplate({
      filename: 'types/mitt.d.ts',
      src: resolve(runtimeDir, 'types.ts'),
    })

    addPlugin({
      src: resolve('./runtime/mitterPlugin'),
    })

    addImportsDir(resolve(runtimeDir, 'composables'))
  },
})
