
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSruveyProducts, checkLocalStorage } from '../../actions/surveyActions'

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
    this.props.fetchSruveyProducts()
  }

  createStorage = () => {
    localStorage.setItem(window.AvonAnalyticsObjex.Profile.campaignInfo, "value")
  }

  deleteStorage = () => {
    localStorage.removeItem(window.AvonAnalyticsObjex.Profile.campaignInfo)
  }

  clearStorage = () => {
    localStorage.clear()
  }

  isItChecked = e => {
    let newVotes = []

    if (e.target.checked && !this.state.votes.includes(e.target.name)) {
      newVotes = [...this.state.votes, e.target.name]
      this.setState({ votes: newVotes })
    } else if (!e.target.checked) {
      newVotes = this.state.votes.filter(vote => vote !== e.target.name)
      this.setState({ votes: newVotes })
    } else {
      console.log("Dafuck you tryina do?")
    }
  }

  render() {
    return (
      <div>
        <h1>Hi dad, I'm test.</h1>
        <button onClick={this.createStorage}>Create</button>
        <button onClick={this.deleteStorage}>Delete</button>
        <button onClick={this.clearStorage}>Clear</button>
        <div>
          {this.props.products.map(item => {
            return <div key={item.index}>
              <div>----------------------------</div>
              <img height="50px" width="50px" src={item.img} alt="Img" />
              <div>{item.name}</div>
              <div>{item.index}</div>
              <input name={item.index} onClick={this.isItChecked} type="checkbox" />
            </div>
          })}
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.survey.products
})

export default connect(mapStateToProps, { fetchSruveyProducts, checkLocalStorage })(Test)
