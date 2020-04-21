export const initialState = {
  characters: [],
  language: 'KOR', // KOR ENG
}

const languages = {
  KOR: { name: 'name_KOR', group: 'group_KOR' },
  ENG: { name: 'name', group: 'group' },
}

export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const DELETE_CHARACTER = 'DELETE_CHARACTER'

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHARACTERS: {
      return {
        ...state,
        characters: [...action.characters],
      }
    }
    case ADD_CHARACTER: {
      return {
        ...state,
        characters: [
          ...state.characters,
          {
            id: `item-${state.characters.length}`,
            name: action.character.name,
            character: action.character,
          },
        ],
      }
    }
    case DELETE_CHARACTER: {
      const tempCharacters = [...state.characters]
      let index = 0
      let id = 0
      for (let i = 0; i < tempCharacters.length; i++) {
        if (tempCharacters[i].name === action.name) {
          index = i
          id = Number(tempCharacters[i].id.split('-')[1])
        }
      }
      for (let i = 0; i < tempCharacters.length; i++) {
        if (Number(tempCharacters[i].id.split('-')[1]) > id) {
          tempCharacters[i].id = `item-${Number(tempCharacters[i].id.split('-')[1]) - 1}`
        }
      }
      tempCharacters.splice(index, 1)
      return {
        ...state,
        characters: tempCharacters,
      }
    }
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.language,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}
