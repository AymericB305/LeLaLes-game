<template>
  <div class="flex flex-col justify-between py-8 px-8 h-full text-nevada-500">
    <div>
      <UButton
        icon="i-heroicons-x-circle"
        class="text-4xl !text-nevada-500"
        variant="link"
        size="2xl"
        to="/home"
      />
      <div class="flex flex-col justify-center items-center gap-2 pt-12">
        <span class="mb-12 text-white font-semibold">Mes erreurs</span>
        <div v-for="error in store.errors">
          {{ error }}
        </div>
      </div>
    </div>
    
    <div class="flex flex-col justify-center items-center">
      <UDivider />
      <span class="text-center">
        "Les erreurs passent,
        <br>
        il n'y a que le vrai qui reste"
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useMyStore()
</script>
