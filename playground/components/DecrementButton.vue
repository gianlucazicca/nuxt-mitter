<script setup lang="ts">
const { emit, listen } = useMitter()
const handle = () => {
  emit('decrement')
  listen('hello', e => console.log(e))
}
</script>

<template>
  <button @click="handle">
    -
  </button>
</template>
