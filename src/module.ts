import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'
import { defineNuxtModule, addPlugin, createResolver, addImportsDir, addTypeTemplate } from '@nuxt/kit'
import { moduleMessenger } from './utils/moduleMessenger'

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
    moduleMessenger('start')
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
      moduleMessenger('success', projectTypesPath)
    }
    else {
      addTypeTemplate({
        filename: 'types/mittEvents.d.ts',
        src: resolve(runtimeDir, 'templates/mittEventsTemplate.d.ts'),
      })
      moduleMessenger('error', projectTypesPath)
    }

    addTypeTemplate({
      filename: 'types/mitt.d.ts',
      src: resolve(runtimeDir, 'types.d.ts'),
    })

    addPlugin({
      src: resolve('./runtime/mitterPlugin'),
    })

    addImportsDir(resolve(runtimeDir, 'composables'))
  },
})
