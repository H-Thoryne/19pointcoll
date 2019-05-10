export const validatePoint = (point, type) => {
  const errorMessage = "Error..."

  // point = point.replace(/\s+/g, '')
  // point = parseInt(point)

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