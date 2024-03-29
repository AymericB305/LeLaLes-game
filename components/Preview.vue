<template>
  <div>
    {{ article }} {{ word }} ?
  </div>
</template>

<script lang="ts" setup>
const {article} = defineProps<{
  article: string,
  word: string
}>()

</script>
