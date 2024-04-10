import type { word } from "@prisma/client"

export type State = {
  loading: string[],
  words: word[],
  amount: number,
  score: number,
  selectedGender: Gender,
  selectedIndex: number,
  colors: string[],
  errors: string[],
}