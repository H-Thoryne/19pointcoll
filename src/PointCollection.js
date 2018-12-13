import React, { Component } from 'react'
import { Circle } from 'rc-progress'

import "./styles/PointCollection.css"

class PointCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aws: 19000,
      target: 23000,
    }
  }

  componentDidMount = () => {
    this.startCircleCounter();
  }

  startCircleCounter = () => {
    const percent = this.state.aws + 0.3;
    if (percent >= 100) {
      this.setState({ percent: 105 }); // Closing the visual gap between the ends.
      clearTimeout(this.timeout);
      return;
    }
    this.setState({ percent });
    this.timeout = setTimeout(this.startCircleCounter, 1);
  }

  render() {
    return (
      <div>
        <h1>Point Collection</h1>
        <div className="infograf">
          <div className="infograf__row">
            <div className="infograf__item">
              <h3>Target: 19 000Ft</h3>
            </div>
            <div className="infograf__item">
              <h3>Brosi: min 1 </h3>
            </div>
          </div>
          <div className="infograf__row">
            <div className="infograf__item">
              <h3>Base points: 10pt</h3>
            </div>
            <div className="infograf__item">
              <h3>Brosi bought: 10db</h3>
            </div>
          </div>
          <div className="infograf__row">
            <div className="infograf__item">
              <h3>Target {this.state.target} Ft</h3>
              <Circle percent={this.state.aws} strokeWidth="8" strokeColor="#888" trailWidth="4" trailColor="#ccc" />
            </div>
          </div>
        </div>

        <div>Egyéni célkitűzésed teljesítésével és legalább 1 db katalógus vásárlásával szerezz pontokat kampányról kampányra, majd februártól váltsd be egy vagy akár több Neked tetsző termékre!</div>

        <ul className="link-collection">
          <li className="button13 sim-button">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Szabályzat</a>
          </li>
          <li className="button13 sim-button">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">GY.I.K.</a>
          </li>
          <li className="button13 sim-button">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Digitális szórólap</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PointCollection;