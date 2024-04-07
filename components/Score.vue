<template>
  <div class="w-full flex justify-center items-center gap-12">
    <UIcon name="i-heroicons-question-mark-circle" class="text-4xl text-nevada-500" />
    <UProgress class="w-4/6" :value="score" :max="amount" />
    <div class="flex w-2/6">{{ `${score} / ${amount}` }}</div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  score: number,
  amount: number,
}>()
</script>

<style>

</style>