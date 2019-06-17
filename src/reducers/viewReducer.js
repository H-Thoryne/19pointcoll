import { VIEW_CHANGE, VIEW_LOADING } from "../actions/types"

const initialState = {
  isCarousel: true,
  loading: false
}

export default (state = initialState, { type }) => {
  switch (type) {
    case VIEW_CHANGE:
      return {
        ...state,
        isCarousel: !state.isCarousel,
        loading: false
      }
    case VIEW_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

