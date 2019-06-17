import {
  POINTS_FETCH,
  POINTS_LOADING,
} from "./types"

export const fetchPoints = () => dispatch => {
  let processed = {}
  dispatch(setPointsLoading())
  processed.aws = parseInt(window.allPoints.aws.replace(/\s+/g, ''))
  processed.target = parseInt(window.allPoints.target.replace(/\s+/g, ''))
  processed.basePoints = parseInt(window.allPoints.basePoints.replace(/\s+/g, ''))
  processed.stillRequired = processed.target - processed.aws < 0 ? 0 : processed.target - processed.aws
  processed.acquiredPoints = parseInt(window.allPoints.acquiredPoints.replace(/\s+/g, ''))
  dispatch({
    type: POINTS_FETCH,
    payload: processed
  })
}

export const setPointsLoading = () => {
  return {
    type: POINTS_LOADING
  }
}