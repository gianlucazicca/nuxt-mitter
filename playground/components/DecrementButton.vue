<script setup lang="ts">
const { emit } = useMitter()
const handle = () => {
  emit('decrement')
}
</script>

<template>
  <button @click="handle">
    -
  </button>
</template>
