<template>
  <div>
    <Button />
  </div>
</template>

<script setup>
const { $mitter } = useNuxtApp()
$mitter.on('cry', () => alert('Cry me a river\n'
  + 'Cry me a river\n'
  + 'Cry me a river\n'
  + 'Cry me a river'))
</script>
