import { FETCH_IPS } from "../actions/types"

const initialState = {
  aws: "Töltés...",
  target: "Töltés...",
  brochures: "Töltés...",
  acquiredPoints: "Töltés...",
  basePoints: "Töltés...",
  stillRequired: "Töltés...",
  placeholderText: "Töltés...",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

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
      }

    default:
      return state
  }
}

