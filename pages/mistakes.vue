<template>
  <div class="flex flex-col justify-center items-center gap-2">
    Mes erreurs
    <br>
    <br>
    <div v-for="error in store.errors">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useMyStore()
</script>
