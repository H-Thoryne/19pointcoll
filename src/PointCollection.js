import React, { Component } from 'react'
import { Circle } from 'rc-progress'

import "./styles/PointCollection.css"

class PointCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aws: 19000,
      target: 23000,
      displayPercent: 0,
      displayAws: 0,
      displayBrochures: 0,
    }
  }

  componentDidMount = () => {
    this.startCounters();
  }

  startCounters = () => {
    const percent = this.state.displayPercent + (this.state.aws / this.state.target) * 0.2;
    const maxallowed = this.state.aws / this.state.target * 100;

    if (percent >= 100) {
      this.setState({ displayPercent: 105 }); // Closing the visual gap between the ends.
      this.setState({ displayAws: this.state.aws })
      clearTimeout(this.timeout);
      return;
    }
    if (percent <= maxallowed) {
      this.setState({ displayPercent: percent })
      this.setState({ displayAws: Math.round((this.state.aws * percent) * 0.01) })
    }
    this.timeout = setTimeout(this.startCounters, 1);
  }

  render() {
    return (
      <div className="pointCollection">
        <div className="datatable">
          <div className="datatable--col">
            <div className="datatable--col__item">
              <div className="datatable--col__item__title">Minimum katalógusok</div>
              <div className="datatable--col__item__content">1 db</div>
            </div>
            <div className="datatable--col__item">
              <div className="datatable--col__item__title">Megrendelt katalógusok</div>
              <div className="datatable--col__item__content">1 db</div>
            </div>
          </div>
          <div className="datatable--col">
            <div className="datatable--col__item">
              <div className="datatable--col__item__title">Megszerzett pontjaid</div>
              <div className="datatable--col__item__content">100</div>
            </div>
            <div className="datatable--col__item">
              <div className="datatable--col__item__title">Szerezhető alappontok</div>
              <div className="datatable--col__item__content">10</div>
            </div>
          </div>
        </div>

        <div className="infograf">
          <div className="infograf--col__left">
            <div className="aws">AWS: {this.state.displayAws}</div>
            <Circle percent={this.state.displayPercent} strokeWidth="10" strokeColor="#888" trailWidth="4" trailColor="#ccc" />
          </div>
          <div className="infograf--col__right">
            <div>
              <div>Célkitűzésed</div>
              <div>123 456 Ft</div>
            </div>
            <div>
              <div>Eddigi összmegrendelésed</div>
              <div>10 000 Ft</div>
            </div>
            <div>
              <div>Még ennyiért rendelj a teljesítéshez</div>
              <div>50 000 Ft</div>
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