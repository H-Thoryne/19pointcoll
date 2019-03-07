import {
  SURVEYPRODUCTS_FETCH,
  SURVEYPRODUCTS_LOADING,
  SURVEYPRODUCTS_UPDATEVOTES,
  SURVEYPRODUCTS_UPDATESTATUS
} from "../actions/types"

const initialState = {
  products: [],
  votes: [],
  status: "",
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
    case SURVEYPRODUCTS_UPDATEVOTES:
      return {
        ...state,
        votes: payload
      }
    case SURVEYPRODUCTS_UPDATESTATUS:
      return {
        ...state,
        status: payload
      }
    default:
      return state
  }
}
