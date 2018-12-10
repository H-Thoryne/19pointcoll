import React, { Component } from "react"
import SimpleSlider from "./components/SimpleSlider"
import "./styles/RedeemPoints.css"

class RedeemPoints extends Component {
  constructor() {
    super()
    this.state = {
      low: [],
      mid: [],
      high: []
    }
  }

  componentWillMount() {
    const hostname = window.location.hostname;
    let url;
    if (hostname === "www.avon.com") {
      url = "NotYetConfigured"
    } else {
      url = "https://api.myjson.com/bins/kaike"
    }

    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ low: json.low, mid: json.mid, high: json.high }));
  }

  render() {
    return (
      <div>
        <h1>Redeem Points</h1>
        <p className="fixme">Fix productcard click / drag & drop</p>
        <div className="sliderWrapper-1">
          <SimpleSlider section="high" data={this.state.high} />
          <SimpleSlider section="mid" data={this.state.mid} />
          <SimpleSlider section="low" data={this.state.low} />
        </div>
      </div>
    );
  }
}

export default RedeemPoints;



