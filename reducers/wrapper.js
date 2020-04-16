export const initialState = {
  characters: [],
}

export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'
export const ADD_CHARACTER = 'ADD_CHARACTER'

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHARACTERS: {
      return {
        characters: [...action.characters],
      }
    }
    case ADD_CHARACTER: {
      return {
        characters: [
          ...state.characters,
          { id: `item-${state.characters.length}`, content: action.character },
        ],
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}
