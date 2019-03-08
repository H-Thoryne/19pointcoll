import {
  SURVEYPRODUCTS_FETCH,
  SURVEYPRODUCTS_LOADING,
  SURVEYPRODUCTS_UPDATEVOTES,
  SURVEYPRODUCTS_UPDATESTATUS,
  SURVEYPRODUCTS_ERROR,
  SURVEYPRODUCTS_CLEARERROR
} from "./types"

const campInfo = window.AvonAnalyticsObjex.Profile.campaignInfo
const storageName = `storeVotes${campInfo.substring(campInfo.length - 3)}`
const StatusEnum = {
  notyetvoted: "notyetvoted",
  freshlyvoted: "freshlyvoted",
  alreadyvoted: "alreadyvoted"
}

export const fetchSurveyProducts = () => dispatch => {
  dispatch(setSurveyProductsLoadin())
  fetch("https://api.myjson.com/bins/bonvi", { cache: "no-cache" })
    .then(res => res.json())
    .then(data => dispatch({
      type: SURVEYPRODUCTS_FETCH,
      payload: data.map(item => ({ ...item, isChecked: false }))
    }))
}

export const checkLocalStorage = () => dispatch => {
  let currentStorage = localStorage.getItem(storageName)

  if (currentStorage) {
    dispatch({
      type: SURVEYPRODUCTS_UPDATESTATUS,
      payload: StatusEnum.alreadyvoted
    })
  } else {
    dispatch({
      type: SURVEYPRODUCTS_UPDATESTATUS,
      payload: StatusEnum.notyetvoted
    })
  }
}

export const toggleCheckmark = (votes, item, error, products) => dispatch => {
  let newVotes = []

  // Clean up errors
  if (error) dispatch(clearErrors())
  // Check if 3 images have already been selected. If so, throw an error.
  if (votes.length >= 3 && !item.isChecked) { return dispatch(createError("Legfeljebb 3 db terméket választhatsz ki!")) }
  // Reverse checkmark
  item.isChecked = !item.isChecked
  // Update the specific product in the array
  products.forEach(product => { if (product.index === item.index) product = item })
  // Add/remove item from 'votes' array
  if (item.isChecked === true) {
    newVotes = [...votes, item.index]
  } else if (item.isChecked === false) {
    newVotes = votes.filter(vote => vote !== item.index)
  } else {
    newVotes = votes
  }

  dispatch({
    type: SURVEYPRODUCTS_UPDATEVOTES,
    payload: {
      votes: newVotes,
      products: products
    }
  })
}

export const submitVotes = votes => dispatch => {
  if (votes.length !== 3) {
    dispatch(createError("Válassz ki 3 terméket!"))
    console.log("There must always be 3 votes in Winterfell")
  } else {
    console.log(`Successful vote: ${votes}`)
    dispatch({
      type: SURVEYPRODUCTS_UPDATESTATUS,
      payload: StatusEnum.freshlyvoted
    })
    localStorage.setItem(storageName, votes)
  }
}

export const setSurveyProductsLoadin = () => {
  return {
    type: SURVEYPRODUCTS_LOADING
  }
}

export const clearErrors = () => {
  return {
    type: SURVEYPRODUCTS_CLEARERROR
  }
}

export const createError = text => {
  return {
    type: SURVEYPRODUCTS_ERROR,
    payload: text
  }
}