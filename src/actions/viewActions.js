import {
  VIEW_CHANGE,
  VIEW_LOADING
} from "./types"

export const changeView = () => dispatch => {
  dispatch(setViewLoading())
  setTimeout(() => {
    dispatch({
      type: VIEW_CHANGE
    })
  }, 200);
}

export const setViewLoading = () => {
  return {
    type: VIEW_LOADING
  }
}