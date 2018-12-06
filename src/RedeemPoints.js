import React, { Component } from 'react'
import SimpleSlider from './components/SimpleSlider'
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

  componentDidMount() {
    fetch("https://api.myjson.com/bins/kaike")
      .then(res => res.json())
      .then(json => this.setState({ low: json.low, mid: json.mid, high: json.high }));
  }

  render() {
    return (
      <div>
        <h1>Redeem Points</h1>
        <div className="sliderWrapper-1">
          <SimpleSlider data={this.state.high} />
          <SimpleSlider data={this.state.mid} />
          <SimpleSlider data={this.state.low} />
        </div>
      </div>
    );
  }
}

export default RedeemPoints;


