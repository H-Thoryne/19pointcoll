import {
  CHANGE_VIEW
} from "./types"

export const changeView = () => dispatch => {
  console.log("ChangeView")
  dispatch({
    type: CHANGE_VIEW
  })
}