import {
  SURVEYPRODUCTS_FETCH,
  SURVEYPRODUCTS_LOADING,
  SURVEYPRODUCTS_UPDATEVOTES,
  SURVEYPRODUCTS_UPDATESTATUS
} from "./types"

const campInfo = window.AvonAnalyticsObjex.Profile.campaignInfo
const storageName = `storeVote${campInfo.substring(campInfo.length - 3)}`
const StatusEnum = {
  notyetvoted: "notyetvoted",
  freshlyvoted: "freshlyvoted",
  alreadyvoted: "alreadyvoted"
}

export const fetchSurveyProducts = () => dispatch => {
  dispatch(setSurveyProductsLoadin())
  fetch("https://api.myjson.com/bins/bonvi")
    .then(res => res.json())
    .then(data => dispatch({
      type: SURVEYPRODUCTS_FETCH,
      payload: data.map(item => ({ ...item, isChecked: false }))
    }))
}

export const checkLocalStorage = () => dispatch => {
  let currentStorage = localStorage.getItem(campInfo)

  console.log(storageName)
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

export const toggleCheckmark = (e, votes) => dispatch => {
  let newVotes = []

  // Check if 3 images have already been selected
  // TODO: If yes, send error message
  if (votes.length >= 3 && e.target.checked) {
    e.target.checked = false
    console.log("More than 3 votes")
    return
  }

  // Toggle the checkmark and add/remove item from "votes" array 
  if (e.target.checked) {
    newVotes = [...votes, e.target.name]
  } else if (!e.target.checked) {
    newVotes = votes.filter(vote => vote !== e.target.name)
  } else {
    console.log("ERROR::toggleCheckmark()");
  }

  dispatch({
    type: SURVEYPRODUCTS_UPDATEVOTES,
    payload: newVotes
  })
}

export const submitVotes = votes => dispatch => {
  if (votes.length !== 3) {
    console.log("There must always be 3 votes in Winterfell")
  } else {
    console.log(`Successful vote: ${votes}`)
    dispatch({
      type: SURVEYPRODUCTS_UPDATESTATUS,
      payload: StatusEnum.freshlyvoted
    })
    localStorage.setItem(window.AvonAnalyticsObjex.Profile.campaignInfo, votes)
  }
}

export const setSurveyProductsLoadin = () => {
  return {
    type: SURVEYPRODUCTS_LOADING
  }
}

// let newVotes = []

// if (e.target.checked && !this.state.votes.includes(e.target.name)) {
//   newVotes = [...this.state.votes, e.target.name]
//   this.setState({ votes: newVotes })
// } else if (!e.target.checked) {
//   newVotes = this.state.votes.filter(vote => vote !== e.target.name)
//   this.setState({ votes: newVotes })
// } else {
//   console.log("Dafuck you tryina do?")
// }