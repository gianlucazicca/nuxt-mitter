<p align="center">
<img src="/docs/assets/nuxt-mitter-small.png" style="max-width: 330px">
</p>


# Nuxt-mitter
_____
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for [mitt](https://github.com/developit) library - enable fully typed events and autocompletion

👏&nbsp;Credits to [developit](https://github.com/developit) author of the [mitt](https://github.com/developit) library


- ✨ [Release notes](CHANGELOG.md)
- 🏀 [Online stackblitz playground](https://stackblitz.com/github/gianlucazicca/nuxt-mitter?file=playground%2Fapp.vue)

___

## Features

<!-- Highlight some of the features your module provide here -->
- ✅ &nbsp;Nuxt 3 support
- 🤞 &nbsp;Easy to use composable
- 🔌 &nbsp;auto-import - mitt provided by plugin
- ♻️ &nbsp;Optimized with Vue/Nuxt Lifecycle hooks

## 📦&nbsp;Install

Install `nuxt-mitter` as dependency:

```bash
    npm install nuxt-mitter
```

Add it to the `modules` section of your `nuxt.config.{ts|js}`:

```typescript
    modules: ['nuxt-mitter']
```

### ⚠️&nbsp;Optional - but strongly recommended

Provide your `event.d.ts` file with `type MitterEvents`:

```typescript
export type MitterEvents = {
  foo: string
  bar?: string
}
```
>[!IMPORTANT]
> ❗&nbsp; Name of type must be `MitterEvents`

 🚧&nbsp; Improvements coming soon...

_____

Add `mitt` key to your `nuxt.config.{ts|js}` and provide path to types

```typescript
    mitt: {
        types: '...'   //your path './types/eventTypes.d.ts'
    }
```



🏁&nbsp;That's it! You can now use My Module in your Nuxt app 

## 🚀 Examples

Fire an event with the composable `useMitter`
```vue
<!--SayHello.vue-->
<script setup lang="ts">
  const { fire } = useMitter()
  const onClick = () => {
    fire('hello', 'Hello 🫠🖖')
  }
</script>

<template>
  <button @click="onClick">
    Say Hello
  </button>
</template>
```

Listen to an event with the composable `useMitter`
```vue
<!--SomeWhereInTheComponentTree.vue-->
<script setup>
const { listen } = useMitter()

listen('hello', e => alert(e))
</script>
```
------

## Types

```typescript
export type FireFunction = <K extends keyof MitterEvents>(event: K, payload?: MitterEvents[K]) => void

export type EventHandlerFunction = <K extends keyof MitterEvents>(
  event: K,
  handler: (payload: MitterEvents[K]) => void
) => void

export type ListenFunction = <K extends keyof MitterEvents>(
  event: K,
  handler: (payload: MitterEvents[K]) => void
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

```


______
<br>
<br>

- Name: Nuxt-Mitter
- Package name: Nuxt-mitter
- Author: Gianluca Zicca
- Github: [gianlucazicca](https://github.com/gianlucazicca)
- Description: Nuxt module for mitt enable fully typed events and autocompletion


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
