<template>
  <div>
    <UButton size="xl" color="teal">
      <div v-for="(article, index) in articles">
        <template v-if="index > 0 && index < articles.length"> / </template>
        {{ article }}
      </div>
    </UButton>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  articles: string[]
}>()

</script>
