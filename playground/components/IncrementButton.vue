<script setup lang="ts">
const { emit } = useMitter()
const handle = () => {
  emit('increment')
}
</script>

<template>
  <button @click="handle">
    +
  </button>
</template>
