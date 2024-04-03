<template>
  <div class="flex items-center justify-center flex-col gap-2 h-full">
    <Preview 
      v-for="article in selectedGender.articles"
      :article
      :word="mot?.word ?? ''" />
    <div class="grid grid-cols-2 gap-2">
      <Choice
        v-for="(gender, _, i) in genders"
        :class="{ 'col-span-2': i === Object.keys(gender).length }"
        :articles="gender.articles"
        @click="selectedGender=gender" />
    </div>
    
    <UButton icon="i-heroicons-check" @click="validate()">Valider</UButton>

    <UNotifications />
  </div>
</template>

<script lang="ts" setup>
import type { word } from '@prisma/client';

const max = 50
let i = 0

let words = await loadWords()
const mot = toRef(words.value[i])

const selectedGender = ref<Gender>(noneGender)

const toast = useToast()

async function validate() {
  if (selectedGender.value.label == mot.value?.genre) {
    toast.add({ title: `${selectedGender.value.articles[1]} ${mot.value.word}` })
    selectedGender.value = noneGender
    i++
    if (i >= max) {
      i = 0
      words = await loadWords()
    }    
    mot.value = words.value[i]
  } else {
    console.log("failed");    
  }
}

async function loadWords(): Promise<Ref<word[]>> {
  const { data, error } = await useFetch<word[]>(`/words/random?amount=${max}`)
  if (!data || !data.value) {
    throw error
  }
  return ref(data.value)
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