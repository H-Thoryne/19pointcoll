import { FETCH_PRODUCTS, PRODUCTS_LOADING } from "../actions/types"

const initialState = {
  low: [],
  mid: [],
  high: [],
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCTS:
      return {
        ...state,
        low: payload.low,
        mid: payload.mid,
        high: payload.high,
        loading: false
      }
    default:
      return state
  }
}
