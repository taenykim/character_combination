type reduxState = {
  language: string
}

export const initialState: reduxState = {
  language: 'KOR', // KOR ENG
}
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE' as const

export default (state = initialState, action) => {
  switch (action.type) {
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
