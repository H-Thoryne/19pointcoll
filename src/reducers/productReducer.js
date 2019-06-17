import { PRODUCTS_FETCH, PRODUCTS_LOADING, WEEKENDPRODUCTS_FETCH } from "../actions/types"

const initialState = {
  low: [],
  mid: [],
  high: [],
  weekend: [],
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case PRODUCTS_FETCH:
      return {
        ...state,
        low: payload.low,
        mid: payload.mid,
        high: payload.high,
        loading: false
      }
    case WEEKENDPRODUCTS_FETCH:
      return {
        ...state,
        weekend: payload
      }
    default:
      return state
  }
}
