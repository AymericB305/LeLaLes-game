<template>
  <div class="flex justify-between items-center px-8">
    <UButton
      icon="i-heroicons-question-mark-circle"
      class="text-4xl !text-nevada-500"
      variant="link"
      size="2xl"
      to="/help"
    />
    <UProgress
      class="mx-6"
      :value="score"
      :max="amount"
    />
    <div class="flex min-w-14" @click="navigateTo('mistakes')">
      {{ `${score} / ${amount}` }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  score: number,
  amount: number,
}>()
</script>

<style>
.round {
  font-size: 2.25rem;
  line-height: 2.25rem;
}
</style>