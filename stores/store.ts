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
  wrongIndices: [],
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
      if (this.wrongIndices.length === 0) {
        this.score++
      }
      this.amount++
      if (this.amount % max == 0) {
        await this.loadWords()
      }
      this.selectedGender = noneGender
      this.wrongIndices = []
      this.selectedIndex = -1
    },
    fail() {
      this.wrongIndices = [...this.wrongIndices, this.selectedIndex]
      this.selectedGender = noneGender
    },
  },
  getters: {
    index: (state) => state.amount % max,
    currentWord(state): word {
      return state.words[this.index]
    },
    answer(state): string {
      const title = `${state.selectedGender.articles[1]} ${this.currentWord.word}`
      if (state.selectedGender.label == 'mf') {
        title.concat(` / ${state.selectedGender.articles[3]} ${this.currentWord.word}`)
      }
      return title
    },
    isValid(state): boolean {
      return state.selectedGender.label == this.currentWord.genre
    },
    choiceColorByIndex: (state) => {
      return (index: number) => state.wrongIndices.findIndex(idx => idx === index) === -1 ? 'nevada' : 'red'
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMyStore, import.meta.hot))
}