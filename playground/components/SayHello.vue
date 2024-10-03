<script setup lang="ts">
const { fire } = useMitter()
const handle = () => {
  fire('hello', 'Hello 🫠🖖')
}
</script>

<template>
  <button @click="handle">
    Say Hello
  </button>
</template>
