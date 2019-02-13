import {
  FETCH_IPS, POINTS_LOADING,
} from "./types"

export const fetchPoints = () => dispatch => {
  // dispatch(setPointsLoading())
  fetch(process.env.REACT_APP_IP_POINTS)
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_IPS,
      payload: {
        aws: validateIpPoint(window.allPoints[data.aws], "aws"),
        target: validateIpPoint(window.allPoints[data.target], "target"),
        brochures: validateIpPoint(window.allPoints[data.brochures], "brochures"),
        acquiredPoints: validateIpPoint(window.allPoints[data.acquiredPoints], "acquiredPoints"),
        basePoints: validateIpPoint(window.allPoints[data.basePoints], "basePoints"),
        placeholderText: data.placeholderText
      }
    }))
    .then(() => {
      return Promise.resolve()
    })
}

export const setPointsLoading = () => {
  return {
    type: POINTS_LOADING
  }
}

export const validateIpPoint = (point, type) => {
  const errorMessage = "Error..."

  switch (type) {
    case "aws":
    case "brochures":
    case "acquiredPoints":
      if (isNaN(point)) {
        return 0
      } else {
        return point
      }
    case "target":
    case "basePoints":
      if (isNaN(point) || point === 0) {
        return errorMessage
      } else {
        return point
      }
    default:
      return errorMessage
  }
}