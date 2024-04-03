<template>
  <div class="flex items-center justify-center flex-col gap-2 h-full">
    <div class="grid grid-flow-col grid-rows-2 gap-2">
      <Preview 
        v-for="article in selectedGender.articles"
        :article
        :word="currentWord?.word ?? ''" />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <Choice
        v-for="(gender, _, i) in genders"
        :class="{ 'col-span-2': i == Object.keys(gender).length }"
        :articles="gender.articles"
        :color="wrongIndexes.findIndex(idx => idx == i) == -1 ? 'teal' : 'red'"
        @click="selectGender(gender, i)" />
    </div>
    
    <UButton icon="i-heroicons-check" @click="validate()">Valider</UButton>

    <UNotifications />
  </div>
</template>

<script lang="ts" setup>
import type { word } from '@prisma/client';

const toast = useToast()

const max = 50
let i = 0

let words = await loadWords()
const currentWord = toRef(words.value[i])

let selectedGender = ref<Gender>(noneGender)

let wrongIndexes = ref<number[]>([])

async function validate() {
  if (selectedGender.value.label == currentWord.value?.genre) {
    const title = `${selectedGender.value.articles[1]} ${currentWord.value.word}`
    if (selectedGender.value.label == 'mf') {
      title.concat(` / ${selectedGender.value.articles[3]} ${currentWord.value.word}`)
    }
    toast.add({
      title,
      icon: 'i-heroicons-check-circle',
      ui: {
        progress: {
          base: 'hidden'
        }
      },
    })
    
    i++
    if (i >= max) {
      i = 0
      words = await loadWords()
    }
    selectedGender.value = noneGender
    currentWord.value = words.value[i]
    wrongIndexes.value = []
  } else {    
    wrongIndexes.value = [...wrongIndexes.value, selectedIndex.value]
    selectedGender.value = noneGender
  }
}

let selectedIndex = ref(0)

function selectGender(gender: Gender, index: number) {
  selectedGender.value = gender
  selectedIndex.value = index
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