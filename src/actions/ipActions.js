import { FETCH_IP_POINTS } from "./types"

const fetchIpPoints = ipPoints => ({
  type: FETCH_IP_POINTS,
  payload: ipPoints
})

export default fetchIpPoints;