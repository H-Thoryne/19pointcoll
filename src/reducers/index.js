import { combineReducers } from "redux"
import productReducer from "./productReducer"
import ipReducer from './ipReducer'
import viewReducer from './viewReducer'
import surveyReducer from './surveyReducer'

const rootReducer = combineReducers({
  products: productReducer,
  ip: ipReducer,
  view: viewReducer,
  survey: surveyReducer
})

export default rootReducer