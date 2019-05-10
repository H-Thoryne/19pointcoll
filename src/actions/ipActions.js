import {
  POINTS_FETCH,
  POINTS_LOADING,
} from "./types"

import { validatePoint } from "../util/validatePoint"

export const fetchPoints = () => dispatch => {
  let processed = {}
  dispatch(setPointsLoading())
  fetch(process.env.REACT_APP_IP_POINTS)
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
        console.log("Normal display of points")
        processed.aws = parseInt(validatePoint(window.allPoints[data.aws].replace(/\s+/g, ''), "aws"))
        processed.target = parseInt(validatePoint(window.allPoints[data.target].replace(/\s+/g, ''), "target"))
        processed.brochures = parseInt(validatePoint(window.allPoints[data.brochures].replace(/\s+/g, ''), "brochures"))
        processed.basePoints = parseInt(validatePoint(window.allPoints[data.basePoints].replace(/\s+/g, ''), "basePoints"))
        processed.stillRequired = processed.target - processed.aws < 0 ? 0 : processed.target - processed.aws
        processed.acquiredPoints = parseInt(validatePoint(window.allPoints[data.acquiredPoints].replace(/\s+/g, ''), "acquiredPoints"))
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