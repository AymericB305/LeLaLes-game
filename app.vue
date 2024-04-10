<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
const store = useMyStore()
await store.loadWords()

</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  background-color: #121B23;
}
#__nuxt {
  height: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>