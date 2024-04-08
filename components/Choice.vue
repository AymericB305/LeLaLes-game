<template>
  <div>
    <UButton
      size="xl"
      :color
      class="w-full flex justify-center !text-white px-8"
    >
      <template v-if="articles.length > 2">
        Les deux sont possibles
      </template>
      <template v-else>
        {{ articles.join(' / ') }}
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
