import { FETCH_IP_POINTS } from "../actions/types"

const initialState = {
  ipPoints: {},
}

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_IP_POINTS:
      return { ...state, ipPoints: action.payload }
    default:
      return state
  }
}