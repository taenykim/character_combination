export const initialState = {
  characters: [],
  language: 'KOR', // KOR ENG
}

export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const DELETE_CHARACTER = 'DELETE_CHARACTER'

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
          { id: `item-${state.characters.length}`, name: action.name, group: action.group },
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
          console.log('this')
          tempCharacters[i].id = `item-${Number(tempCharacters[i].id.split('-')[1]) - 1}`
        }
      }
      tempCharacters.splice(index, 1)
      return {
        ...state,
        characters: tempCharacters,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}
