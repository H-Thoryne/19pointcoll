import { combineReducers } from "redux"
import productReducer from "./productReducer"
import ipReducer from './ipReducer'
import viewReducer from './viewReducer'

const rootReducer = combineReducers({
  products: productReducer,
  ip: ipReducer,
  isCarousel: viewReducer
})

export default rootReducer