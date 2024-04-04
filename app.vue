<template>
  <div class="flex items-center justify-center flex-col gap-2 h-full">
    <div class="grid grid-flow-col grid-rows-2 gap-2">
      <Preview 
        v-for="article in store.selectedGender.articles"
        :article
        :word="store.currentWord.word" />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <Choice
        v-for="(gender, _, i) in genders"
        :class="{ 'col-span-2': i == Object.keys(gender).length }"
        :articles="gender.articles"
        :color="store.choiceColorByIndex(i)"
        @click="store.selectGender(gender, i)" />
    </div>
    
    <UButton icon="i-heroicons-check" @click="validate()">Valider</UButton>

    <UNotifications />
  </div>
</template>

<script lang="ts" setup>
const toast = useToast()
const store = useMyStore()
await store.loadWords()

async function validate() {
  if (store.isValid) {
    toast.add({
      title: store.answer,
      icon: 'i-heroicons-check-circle',
      ui: {
        progress: {
          base: 'hidden'
        }
      },
    })
  }
  await store.progress()
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