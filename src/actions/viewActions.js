import {
  CHANGE_VIEW,
  VIEW_LOADING
} from "./types"

export const changeView = () => dispatch => {
  dispatch(setViewLoading())
  setTimeout(() => {
    dispatch({
      type: CHANGE_VIEW
    })
  }, 200);
}

export const setViewLoading = () => {
  return {
    type: VIEW_LOADING
  }
}