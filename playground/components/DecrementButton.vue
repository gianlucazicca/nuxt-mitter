<script setup lang="ts">
const { fire, listen } = useMitter()
const handle = () => {
  fire('decrement')
  listen('hello', e => console.log(e))
}
</script>

<template>
  <button @click="handle">
    -
  </button>
</template>
