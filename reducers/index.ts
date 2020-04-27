import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import languageReducer from './languageReducer'
import dndcharactersReducer from './dndcharactersReducer'

const rootReducer = combineReducers({ charactersReducer, languageReducer, dndcharactersReducer })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
