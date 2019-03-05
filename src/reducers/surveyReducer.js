import { SURVEYPRODUCTS_FETCH, SURVEYPRODUCTS_LOADING } from "../actions/types"

const initialState = {
  products: [],
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SURVEYPRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case SURVEYPRODUCTS_FETCH:
      return {
        ...state,
        products: payload,
        loading: false
      }
    default:
      return state
  }
}
