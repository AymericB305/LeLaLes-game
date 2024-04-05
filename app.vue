<template>
  <div class="flex items-center justify-around flex-col gap-2 h-full">
    <Score
      :score="store.score"
      :index="store.index"
    />

    <div class="flex flex-col gap-4">
      <Preview 
        :articles="store.selectedGender.articles"
        :word="store.currentWord.word"
      />
      <div class="grid grid-cols-2 gap-2">
        <Choice
          v-for="(gender, _, i) in genders"
          :class="{ 'col-span-2': i == Object.keys(gender).length }"
          :articles="gender.articles"
          :color="store.choiceColorByIndex(i)"
          @click="store.selectGender(gender, i)"
        />
      </div>
    </div>    
    
    <UButton
      @click="validate()" 
      :ui="{ rounded: 'rounded-full', font: 'font-bold' }"
      class="!text-white px-12"
      label="Valider"
      size="xl"
    />

    <UNotifications />
  </div>
</template>

<script lang="ts" setup>
const toast = useToast()
const store = useMyStore()
await store.loadWords()

async function validate() {
  if (!store.isValid) {    
    store.fail()
    return
  }
  
  toast.add({
    title: store.answer,
    icon: 'i-heroicons-check-circle',
    ui: {
      progress: {
        base: 'hidden'
      }
    },
  })
  await store.progress()
}

</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  background-color: #121B23;
}
#__nuxt {
  height: 100%;
}
</style>