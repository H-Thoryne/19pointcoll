import { combineReducers } from "redux"
import ipReducer from './ipReducer'

const rootReducer = combineReducers({
  ip: ipReducer
})

export default rootReducer