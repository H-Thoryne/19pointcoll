import {
  SURVEYPRODUCTS_FETCH,
  SURVEYPRODUCTS_LOADING,
} from "./types"

export const fetchSruveyProducts = () => dispatch => {
  dispatch(setSurveyProductsLoadin())
  fetch("https://api.myjson.com/bins/bonvi")
    .then(res => res.json())
    .then(data => dispatch({
      type: SURVEYPRODUCTS_FETCH,
      payload: data
    }))
}

export const checkLocalStorage = () => dispatch => {
  let campInfo = window.AvonAnalyticsObjex.Profile.campaignInfo
  let currentStorage = localStorage.getItem(campInfo)
  if (currentStorage) {
    let storageContent = currentStorage
    // let str = currentStorage.substring(currentStorage.length - 2)
    console.log("localStorage item found")
    console.log(storageContent)
    // console.log(str)
  } else {
    console.log("localStorage item not found")
  }
}

export const setSurveyProductsLoadin = () => {
  return {
    type: SURVEYPRODUCTS_LOADING
  }
}