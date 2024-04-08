<template>
  <div class="flex justify-around items-center">
    <UIcon
      name="i-heroicons-question-mark-circle"
      class="w-1/6 text-4xl text-nevada-500"
    />
    <UProgress
      class="w-4/6 mx-6"
      :value="score"
      :max="amount"
    />
    <div class="flex w-1/6">
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