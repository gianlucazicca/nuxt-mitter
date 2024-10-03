<script setup lang="ts">
const { fire } = useMitter()
const handle = () => {
  fire('decrement')
}
</script>

<template>
  <button @click="handle">
    -
  </button>
</template>
