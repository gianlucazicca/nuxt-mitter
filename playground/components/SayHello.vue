<script setup lang="ts">
const { emit } = useMitter()
const handle = () => {
  emit('hello', 'Hello 🫠🖖')
}
</script>

<template>
  <button @click="handle">
    Say Hello
  </button>
</template>
