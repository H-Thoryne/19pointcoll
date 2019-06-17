import { combineReducers } from "redux"
import ipReducer from './ipReducer'
import productReducer from "./productReducer"
import viewReducer from './viewReducer'

const rootReducer = combineReducers({
  ip: ipReducer,
  products: productReducer,
  view: viewReducer
})

export default rootReducer