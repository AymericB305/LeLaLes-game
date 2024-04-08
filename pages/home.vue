<template>
  <div class="flex items-center justify-between py-8 flex-col gap-10 h-full">
    <div class="space-y-20">
      <Score
        :score="store.score"
        :amount="store.amount"
      />

      <div class="flex flex-col items-center gap-12">
        <span class="text-nevada-500 text-2xl">Choisissez le genre correct</span>
        <Preview 
          v-if="store.loading.length == 0"
          :articles="store.selectedGender.articles"
          :word="store.currentWord.word"
        />
        <UProgress v-else animation="elastic" />
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
    </div>
    
    <div class="">
      <UButton
        @click="validate()"
        class="!text-white px-12"
        label="Valider"
        size="xl"
      />
    </div>

    <UNotifications />
  </div>
</template>

<script lang="ts" setup>
const toast = useToast()
const store = useMyStore()

async function validate() {
  if (!store.isValid) {    
    store.fail()
    return
  }
  
  toast.add({
    title: store.answer,
    icon: 'i-heroicons-check-circle',
    timeout: 1800
  })
  await store.progress()
}

</script>
