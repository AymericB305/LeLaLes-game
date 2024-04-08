<template>
  <div class="flex flex-col justify-around items-start h-full">
    <span class="article ml-8">LE</span>
    <span class="article ml-8">LA</span>
    <span class="article ml-8">LES</span>
    
    <div class="w-full">
      <div v-for="_ in 2">
        <div class="overflow-x-clip h-16 flex">
          <div v-for="_ in 20" class="mr-8 text-5xl text-gray-800">genre</div>
        </div>
      </div>
    </div>

    <UButton
      to="home"
      class="!text-white px-10 place-self-center"
      label="Commencer"
      size="xl"
    />
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.article {
  font-weight: 700;
  font-size: 3rem;
  line-height: 2rem;
}
</style>