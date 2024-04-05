import { defineStore } from 'pinia'
import type { State } from './state'
import type { word } from '@prisma/client'

const max = 50;

const initialState: State = {
  words: [],
  index: 0,
  score: 0,
  selectedGender: noneGender,
  selectedIndex: 0,
  wrongIndices: [],
}

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => initialState,
  actions: {
    async loadWords() {
      const { data, error } = await useFetch<word[]>(`/words/random?amount=${max}`)
      if (!data || !data.value) {
        throw error
      }
      this.words = data.value
    },
    selectGender(gender: Gender, index: number) {
      this.selectedGender = gender
      this.selectedIndex = index
    },
    async progress() {
      if (this.wrongIndices.length === 0) {
        this.score++
      }
      this.index++
      if (this.index >= max) {
        this.index = 0
        await this.loadWords()
      }
      this.selectedGender = noneGender
      this.wrongIndices = []
    },
    fail() {
      this.wrongIndices = [...this.wrongIndices, this.selectedIndex]
      this.selectedGender = noneGender
    },
  },
  getters: {
    currentWord: (state) => state.words[state.index],
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