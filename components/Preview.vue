<template>
  <span class="w-full flex justify-center items-center">
    {{ articlesString }} {{ word }}
  </span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  articles: string[],
  word: string
}>()

const articlesString = toRef(() => props.articles.join('/'))

</script>
