import type { word } from "@prisma/client"

export type State = {
  words: word[],
  index: number,
  score: number,
  selectedGender: Gender,
  selectedIndex: number,
  wrongIndices: number[]
}