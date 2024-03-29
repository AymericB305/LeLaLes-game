<template>
  <div class="flex items-center justify-center flex-col gap-2 h-full">
    <Preview 
      v-for="article in selectedGender.articles"
      :article
      :word="mot?.word ?? ''" />

    <Choice
      v-for="gender in genders"
      :articles="gender.articles"
      @click="selectedGender=gender" />

      <UButton icon="i-heroicons-check" @click="validate()">Valider</UButton>
  </div>
</template>

<script lang="ts" setup>
import type { word } from '@prisma/client';

const { data: mot } = await useFetch<word>('/words/random')

const selectedGender = ref<Gender>(noneGender)

function validate() {
  if (selectedGender.value.label == mot.value?.genre) {
    console.log("gg");
    
  } else {
    console.log("noob");
    
  }
}

</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}
#__nuxt {
  height: 100%;
}
</style>