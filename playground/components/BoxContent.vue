<script setup lang="ts">
const { listen } = useMitter()
const counter = ref(0)

listen('increment', () => {
  counter.value++
})
listen('decrement', () => {
  counter.value--
})
</script>

<template>
  event updated counter: {{ counter }}
</template>

<style scoped>

</style>
