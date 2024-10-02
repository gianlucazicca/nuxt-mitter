<script setup lang="ts">
const { $mitter } = useNuxtApp()
</script>

<template>
  <button @click="$mitter.emit('cry')">
    Cry
  </button>
</template>
