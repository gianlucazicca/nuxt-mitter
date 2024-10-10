<script setup lang="ts">
const { listen, clearAll, all } = useMitter()

listen('hello', e => alert(e))
listen('*', e => console.log('listen on all events', e, all))
</script>

<template>
  <div class="container">
    <BoxContent />
    <div>
      <DecrementButton />
      <IncrementButton />
    </div>
    <div>
      <SayHello />
    </div>
    <div>
      <button @click="clearAll">
        clear all events
      </button>
    </div>
  </div>
</template>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
button {
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: bisque;
  color: #5c5f66;
  cursor: pointer;
}
button:hover {
  background-color: #fcd5aa;
}
.container {
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
