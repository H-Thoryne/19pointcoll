
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkLocalStorage } from '../../actions/surveyActions'

import Alreadyvoted from './Alreadyvoted';
import Freshlyvoted from './Freshlyvoted';
import Notyetvoted from './Notyetvoted';

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
  }

  clearStorage = () => {
    localStorage.clear()
  }

  render() {
    let voteContent
    let errorMessage

    if (this.props.status === "notyetvoted") {
      voteContent =
        <Notyetvoted />
    } else if (this.props.status === "alreadyvoted") {
      voteContent =
        <Alreadyvoted />
    } else if (this.props.status === "freshlyvoted") {
      voteContent =
        <Freshlyvoted />
    }

    if (this.props.error.length !== 0) {
      errorMessage =
        <div>{this.props.error}</div>
    }

    return (
      <div>
        <div>#main#</div>
        <div>short description & how it works</div>
        <div>{voteContent}</div>
        <button onClick={this.clearStorage}>Clear</button>
        {errorMessage}
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.survey.status,
  error: state.survey.error
})

const mapDispatchToProps = {
  checkLocalStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)