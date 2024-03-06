<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch('/words/random?amount=5')

</script>