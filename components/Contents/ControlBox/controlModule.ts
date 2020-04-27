import Character from '../Character'

const nameAscendingButtonHandler = (characters: Character[], language: string) => {
  if (language === 'KOR') {
    characters.sort((a, b) => a.name_KOR.localeCompare(b.name_KOR))
    return characters
  }
  if (language === 'ENG') {
    characters.sort((a, b) => a.name.localeCompare(b.name))
    return characters
  }
  return characters
}

const nameDescendingButtonHandler = (characters: Character[], language: string) => {
  if (language === 'KOR') {
    characters.sort((a, b) => b.name_KOR.localeCompare(a.name_KOR))
    return characters
  }
  if (language === 'ENG') {
    characters.sort((a, b) => b.name.localeCompare(a.name))
    return characters
  }
  return characters
}

const groupAscendingButtonHandler = (characters: Character[], language: string) => {
  if (language === 'KOR') {
    characters.sort((a, b) => a.group_KOR.localeCompare(b.group_KOR))
    return characters
  }
  if (language === 'ENG') {
    characters.sort((a, b) => a.group.localeCompare(b.name))
    return characters
  }
  return characters
}

const groupDescendingButtonHandler = (characters: Character[], language: string) => {
  if (language === 'KOR') {
    characters.sort((a, b) => a.group_KOR.localeCompare(b.group_KOR))
    return characters
  }
  if (language === 'ENG') {
    characters.sort((a, b) => a.group.localeCompare(b.group))
    return characters
  }
  return characters
}

const newestButtonHandler = (characters: Character[]) => {
  characters.sort((a, b) => b.year - a.year)
  return characters
}

const oldestButtonHandler = (characters: Character[]) => {
  characters.sort((a, b) => a.year - b.year)
  return characters
}

export {
  nameAscendingButtonHandler,
  nameDescendingButtonHandler,
  groupAscendingButtonHandler,
  groupDescendingButtonHandler,
  newestButtonHandler,
  oldestButtonHandler,
}
