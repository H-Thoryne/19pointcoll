import { CHANGE_VIEW } from "../actions/types"

const initialState = {
  isCarousel: true
}

export default (state = initialState, { type }) => {
  switch (type) {
    case CHANGE_VIEW:
      return {
        ...state,
        isCarousel: !state.isCarousel
      }
    default:
      return state
  }
}

