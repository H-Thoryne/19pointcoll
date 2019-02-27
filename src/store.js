import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middlewares = [thunk];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  ))

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(...middlewares),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

export default store