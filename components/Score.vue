<template>
  <div class="flex justify-around items-center">
    <UIcon
      name="i-heroicons-question-mark-circle"
      class="w-2/12 text-4xl text-nevada-500"
    />
    <UProgress
      class="w-7/12 mx-6"
      :value="score"
      :max="amount"
    />
    <div class="flex w-3/12" @click="navigateTo('mistakes')">
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