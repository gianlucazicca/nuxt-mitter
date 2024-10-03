<script setup lang="ts">
const { fire } = useMitter()
const handle = () => {
  fire('increment')
}
</script>

<template>
  <button @click="handle">
    +
  </button>
</template>
