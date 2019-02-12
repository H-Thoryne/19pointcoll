import { combineReducers } from "redux"
import productReducer from "./productReducer"
import ipReducer from './ipReducer'

const rootReducer = combineReducers({
  products: productReducer,
  ip: ipReducer
})

export default rootReducer