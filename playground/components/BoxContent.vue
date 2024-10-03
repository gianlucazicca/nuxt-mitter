<script setup lang="ts">
const { listenTo } = useMitter()
const counter = ref(0)

listenTo('increment', () => {
  counter.value++
})
listenTo('decrement', () => {
  counter.value--
})
</script>

<template>
  event updated counter: {{ counter }}
</template>

<style scoped>

</style>
