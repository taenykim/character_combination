import { combineReducers } from 'redux'
import wrapper from './wrapper'

const rootReducer = combineReducers({ wrapper })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
