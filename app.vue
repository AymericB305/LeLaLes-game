<template>
  <div>
    <ul>
    <li v-for="word in words">
      {{ word.word }} - Genre : {{ word.genre }}
    </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { word } from '@prisma/client';

const { data: words } = await useFetch<word[]>('/words/random?amount=5')

</script>