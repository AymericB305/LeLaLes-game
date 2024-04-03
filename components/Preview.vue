<template>
  <div class="w-full flex justify-center items-center">
    {{ article }} {{ word }} ?
  </div>
</template>

<script lang="ts" setup>
const {article} = defineProps<{
  article: string,
  word: string
}>()

</script>
