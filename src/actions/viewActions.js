import {
  CHANGE_VIEW
} from "./types"

export const changeView = () => dispatch => {
  dispatch({
    type: CHANGE_VIEW
  })
}