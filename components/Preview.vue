<template>
  <div class="w-full flex justify-center items-center">
    {{ articlesString }} {{ word }} ?
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  articles: string[],
  word: string
}>()

const articlesString = toRef(() => props.articles.join('/'))

</script>
