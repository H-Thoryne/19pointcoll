import {
  POINTS_FETCH,
  POINTS_LOADING,
} from "./types"

import { validatePoint } from "../util/validatePoint"

export const fetchPoints = () => dispatch => {
  let processed = {}
  dispatch(setPointsLoading())
  fetch(process.env.REACT_APP_IP_POINTS,  { cache: "no-cache" })
    .then(res => res.json())
    .then(data => {
      if (data.placeholderText) {
        console.log("Placeholder text used for IP points")
        processed.aws = data.placeholderText
        processed.target = data.placeholderText
        processed.brochures = data.placeholderText
        processed.basePoints = data.placeholderText
        processed.stillRequired = data.placeholderText
        processed.acquiredPoints = parseInt(validatePoint(window.allPoints[data.acquiredPoints], "acquiredPoints"))
      } else {
        processed.aws = parseInt(validatePoint(window.allPoints[data.aws], "aws"))
        processed.target = parseInt(validatePoint(window.allPoints[data.target], "target"))
        processed.brochures = parseInt(validatePoint(window.allPoints[data.brochures], "brochures"))
        processed.basePoints = parseInt(validatePoint(window.allPoints[data.basePoints], "basePoints"))
        processed.stillRequired = processed.target - processed.aws < 0 ? 0 : processed.target - processed.aws
        processed.acquiredPoints = parseInt(validatePoint(window.allPoints[data.acquiredPoints], "acquiredPoints"))
        // processed.placeholderText = data.placeholderText || "Töltés..."
      }
    })
    .then(() => dispatch({
      type: POINTS_FETCH,
      payload: processed
    }))
}

export const setPointsLoading = () => {
  return {
    type: POINTS_LOADING
  }
}