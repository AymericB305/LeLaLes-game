import { defineStore } from 'pinia'
import type { State } from './state'
import type { word } from '@prisma/client'

const max = 50;

const initialState: State = {
  loading: [],
  words: [],
  amount: 0,
  score: 0,
  selectedGender: noneGender,
  selectedIndex: -1,
  colors: ['nevada', 'nevada', 'nevada'],
  errors: [],
}

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => initialState,
  actions: {
    async loadWords() {
      this.loading.push("loadWords")
      const { data, error } = await useFetch<word[]>(`/words/random?amount=${max}`)
      if (!data || !data.value) {
        throw error
      }
      this.words = data.value
      this.loading.splice(this.loading.indexOf('loadWords'))
    },
    selectGender(gender: Gender, index: number) {
      this.selectedGender = gender
      this.selectedIndex = index
    },
    async progress() {
      this.colors[this.selectedIndex] = 'green'

      let nextWords = this.words
      if ((this.amount + 1) % max == 0) {
        nextWords = await $fetch<word[]>(`/words/random?amount=${max}`)
      }
      
      setTimeout(() => {
        // if there was no mistake
        if (this.colors.findIndex((c: string) => c === 'red') === -1) {
          this.score++
        } else {          
          this.errors.push(this.answer)
        }
        this.words = nextWords
        this.amount++
        this.selectedGender = noneGender
        this.colors = ['nevada', 'nevada', 'nevada']
        this.selectedIndex = -1        
      }, 1000);
    },
    fail() {
      this.colors[this.selectedIndex] = 'red'
      this.selectedGender = noneGender
    },
  },
  getters: {
    index: (state) => state.amount % max,
    currentWord(state): word {
      return state.words[this.index]
    },
    answer(state): string {
      return `${state.selectedGender.articles.join('/')} ${this.currentWord.word}`
    },
    isValid(state): boolean {
      return state.selectedGender.label == this.currentWord.genre
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMyStore, import.meta.hot))
}