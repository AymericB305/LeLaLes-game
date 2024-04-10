<template>
  <span class="w-full flex justify-center items-center">
    {{ answer }}
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  answer: string
}>()

</script>
