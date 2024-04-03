<template>
  <div>
    <UButton size="xl" :color class="w-full flex justify-center">
      <template v-for="(article, index) in articles">
        <span v-if="index > 0 && index < articles.length"> / </span>{{ `${article} ` }}
      </template>
    </UButton>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  articles: string[]
  color: string
}>()
</script>
