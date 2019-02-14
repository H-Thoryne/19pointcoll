import { FETCH_IPS, POINTS_LOADING } from "../actions/types"

const initialState = {
  aws: "Töltés...",
  target: "Töltés...",
  brochures: "Töltés...",
  acquiredPoints: "Töltés...",
  basePoints: "Töltés...",
  stillRequired: "Töltés...",
  placeholderText: "Töltés...",
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POINTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_IPS:
      return {
        ...state,
        aws: payload.aws,
        target: payload.target,
        brochures: payload.brochures,
        acquiredPoints: payload.acquiredPoints,
        basePoints: payload.basePoints,
        stillRequired: payload.stillRequired,
        placeholderText: payload.placeholderText,
        loading: false
      }

    default:
      return state
  }
}

