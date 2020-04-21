import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import languageReducer from './languageReducer'

const rootReducer = combineReducers({ charactersReducer, languageReducer })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
