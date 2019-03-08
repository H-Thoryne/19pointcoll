import {
  SURVEYPRODUCTS_FETCH,
  SURVEYPRODUCTS_LOADING,
  SURVEYPRODUCTS_UPDATEVOTES,
  SURVEYPRODUCTS_UPDATESTATUS,
  SURVEYPRODUCTS_ERROR,
  SURVEYPRODUCTS_CLEARERROR,
} from "../actions/types"

const initialState = {
  products: [],
  votes: [],
  status: "",
  error: "",
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
        votes: payload.votes,
        products: payload.products
      }
    case SURVEYPRODUCTS_UPDATESTATUS:
      return {
        ...state,
        status: payload
      }
    case SURVEYPRODUCTS_ERROR:
      return {
        ...state,
        error: payload
      }
    case SURVEYPRODUCTS_CLEARERROR:
      return {
        ...state,
        error: ""
      }
    default:
      return state
  }
}
