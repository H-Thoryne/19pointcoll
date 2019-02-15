import {
  FETCH_IPS,
  POINTS_LOADING,
} from "./types"

import { validatePoint } from "../util/validatePoint"

export const fetchPoints = () => dispatch => {
  let processed = {}
  dispatch(setPointsLoading())
  fetch(process.env.REACT_APP_IP_POINTS)
    .then(res => res.json())
    .then(data => {
      processed.aws = validatePoint(window.allPoints[data.aws], "aws")
      processed.target = validatePoint(window.allPoints[data.target], "target")
      processed.brochures = validatePoint(window.allPoints[data.brochures], "brochures")
      processed.acquiredPoints = validatePoint(window.allPoints[data.acquiredPoints], "acquiredPoints")
      processed.basePoints = validatePoint(window.allPoints[data.basePoints], "basePoints")
      processed.stillRequired = processed.target - processed.aws
      processed.placeholderText = data.placeholderText || "Töltés..."
    })
    .then(() => console.table(processed))
    .then(() => dispatch({
      type: FETCH_IPS,
      payload: processed
    }))
}

// export const fetchPoints = () => dispatch => {
//   dispatch(setPointsLoading())
//   fetch(process.env.REACT_APP_IP_POINTS)
//     .then(res => res.json())
//     .then(data => dispatch({
//       type: FETCH_IPS,
//       payload: {
//         aws: validatePoint(window.allPoints[data.aws], "aws"),
//         target: validatePoint(window.allPoints[data.target], "target"),
//         brochures: validatePoint(window.allPoints[data.brochures], "brochures"),
//         acquiredPoints: validatePoint(window.allPoints[data.acquiredPoints], "acquiredPoints"),
//         basePoints: validatePoint(window.allPoints[data.basePoints], "basePoints"),
//         placeholderText: data.placeholderText
//       }
//     }))
// }

export const setPointsLoading = () => {
  return {
    type: POINTS_LOADING
  }
}

