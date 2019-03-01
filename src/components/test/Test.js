import React, { Component } from "react"

export default class Test extends Component {
  state = {
    store: "",
    campInfo: "",
  }
  componentDidMount = () => {
    this.setState({ campInfo: window.AvonAnalyticsObjex.Profile.campaignInfo }, () => console.log("hi") )
    // console.log(window.AvonAnalyticsObjex.Profile.campaignInfo)
    let currentStorage = localStorage.getItem(this.state.campInfo)
    if (currentStorage) {
      this.setState({ store: currentStorage })
      let str = currentStorage.substring(0, currentStorage.length - 1); // "12345.0"
      console.log("found")
      console.log(str)
    } else {
      console.log("not found")
    }

    localStorage.getItem(this.state.campInfo)
  }

  createStorage = () => {
    localStorage.setItem(this.state.campInfo, "value")
  }

  deleteStorage = () => {
    localStorage.removeItem(this.state.campInfo)
  }

  clearStorage = () => {
    localStorage.clear()
  }

  render() {
    return (
      <div>
        <h1>Hi dad, I'm test.</h1>
        <button onClick={this.createStorage}>Create</button>
        <button onClick={this.deleteStorage}>Delete</button>
        <button onClick={this.clearStorage}>Clear</button>
      </div>
    )
  }
}
