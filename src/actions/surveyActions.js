import axios from 'axios'
import {
  SURVEYPRODUCTS_FETCH,
  SURVEYPRODUCTS_LOADING,
  SURVEYPRODUCTS_UPDATEVOTES,
  SURVEYPRODUCTS_UPDATESTATUS,
  SURVEYPRODUCTS_ERROR,
  SURVEYPRODUCTS_CLEARERROR
} from "./types"

const campInfo = window.AvonAnalyticsObjex.Profile.campaignInfo
const storageName = `storedVotes${campInfo.substring(campInfo.length - 3)}`
const StatusEnum = {
  notyetvoted: "notyetvoted",
  freshlyvoted: "freshlyvoted",
  alreadyvoted: "alreadyvoted"
}

export const fetchSurveyProducts = () => dispatch => {
  dispatch(setSurveyProductsLoadin())
  fetch(process.env.REACT_APP_SURVEY_LIST, { cache: "no-cache" })
    .then(res => res.json())
    .then(data => dispatch({
      type: SURVEYPRODUCTS_FETCH,
      payload: {
        products: data.products.map(item => ({ ...item, isChecked: false })),
        campcode: data.campcode
      }
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

  if (error) dispatch(clearErrors())

  item.isChecked = !item.isChecked

  products.forEach(product => { if (product.index === item.index) product = item })
  if (item.isChecked === true) {
    newVotes = [...votes, item.index]
    newVotes.sort()
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
  if (votes.length === 0) {
    dispatch(createError("Kérjük, legalább egy terméket válassz ki!"))
    console.log("There must always be a Product in Winterfell!")
  } else {
    votes = votes.toString()
    axios.get("orderTrackingEInvoice.page", {
      params: {
        msgTyp: "SURVTEST",
        msgTxt: votes,
        action: "logLinkDetails"
      }
    })
      .then(() => console.log(`Successful vote: ${votes}`))
      .catch(err => console.log(err))

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