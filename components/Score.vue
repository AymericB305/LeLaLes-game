<template>
  <div>
    {{ score }} / {{ index }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  score: number,
  index: number,
}>()
</script>

<style>

</style>