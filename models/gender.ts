export type Gender = {
  label: 'm' | 'f' | 'mf' | ''
  articles: ('le' | 'un' | 'la' | 'une' | '...')[]
}

export const genders: { [name: string]: Gender} = {
  male : {
    label: "m",
    articles: ['le', 'un']
  },
  female : {
    label: 'f',
    articles: ['la', 'une']
  },
  both : {
    label: 'mf',
    articles: ['le', 'un', 'la', 'une']
  }
}

export const noneGender: Gender = {
  label: '',
  articles: ['...', '...']
}