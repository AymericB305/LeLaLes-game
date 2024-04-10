export type Gender = {
  label: 'm' | 'f' | 'mf' | ''
  articles: ('Le' | 'un' | 'la' | 'La' | 'une' | '___')[]
}

export const genders: { [name: string]: Gender} = {
  male : {
    label: "m",
    articles: ['Le', 'un']
  },
  female : {
    label: 'f',
    articles: ['La', 'une']
  },
  both : {
    label: 'mf',
    articles: ['Le', 'un', 'la', 'une']
  }
}

export const noneGender: Gender = {
  label: '',
  articles: ['___']
}