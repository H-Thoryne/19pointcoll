
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSurveyProducts, checkLocalStorage, toggleCheckmark, submitVotes } from '../../actions/surveyActions'

export class Test extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    store: "",
    campInfo: "",
    votes: []
  }

  componentDidMount = () => {
    this.props.checkLocalStorage()
    this.props.fetchSurveyProducts()
  }

  clearStorage = () => {
    localStorage.clear()
  }

  render() {
    let voteContent

    if (this.props.status === "notyetvoted") {
      voteContent =
        <div>
          {this.props.products.map(item => {
            return (
              <div style={{ display: "inline-block", width: "70px" }} key={item.index}>
                <img height="50px" width="50px" src={item.img} alt="Img" />
                <div>{item.name}</div>
                <input name={item.index} onClick={e => this.props.toggleCheckmark(e, this.props.votes)} type="checkbox" />
              </div>
            )
          })}
        </div>
    } else if (this.props.status === "alreadyvoted") {
      voteContent =
        <h3>Already voted, but thanks</h3>
    } else if (this.props.status === "freshlyvoted") {
      voteContent =
        <h3>Thanks for yer vote, ye pirate</h3>
    }

    return (
      <div>
        <h1>Hi dad, I'm test.</h1>
        <button onClick={this.clearStorage}>Clear</button>
        <div>
          <div>{voteContent}</div>
        </div>
        <button onClick={() => this.props.submitVotes(this.props.votes)}>Submit</button>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.survey.products,
  votes: state.survey.votes,
  status: state.survey.status
})

const mapDispatchToProps = {
  fetchSurveyProducts,
  checkLocalStorage,
  toggleCheckmark,
  submitVotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)