import { CHANGE_VIEW, VIEW_LOADING } from "../actions/types"

const initialState = {
  isCarousel: true,
  viewLoading: false
}

export default (state = initialState, { type }) => {
  switch (type) {
    case CHANGE_VIEW:
      return {
        ...state,
        isCarousel: !state.isCarousel,
        viewLoading: false
      }
    case VIEW_LOADING:
      return {
        ...state,
        viewLoading: true
      }
    default:
      return state
  }
}

