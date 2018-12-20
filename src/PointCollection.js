import React, { Component } from 'react'
import { Circle } from 'rc-progress'

import "./styles/PointCollection.css"

class PointCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aws: 18000,
      target: 23000,
      percent: 0,
      displayPercent: 0,
      displayAws: 0,
      displayBrochures: 0,
    }
  }

  componentDidMount = () => {
    this.startCounters();
  }

  startCounters = () => {
    const percent = this.state.percent + (this.state.aws / this.state.target) * 0.5;
    const maxallowed = this.state.aws / this.state.target * 100;

    if (percent >= 100) {
      this.setState({ percent: 105 }); // Closing the visual gap between the ends.
      this.setState({ displayAws: this.state.aws })
      clearTimeout(this.timeout);
      return;
    }
    if (percent <= maxallowed) {
      this.setState({ percent: percent })
      this.setState({ displayPercent: Math.round(percent) })
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
            <div className="infograf--col__left__aws">{this.state.displayPercent}%</div>
            <Circle percent={this.state.percent} strokeWidth="10" strokeColor="#ff336d" trailWidth="10" trailColor="#ECECEC" />
          </div>
          <div className="infograf--col__right">
            <div className="infograf--col__right__title">Célkitűzésed</div>
            <div className="infograf--col__right__number">{this.state.target} Ft</div>

            <div className="infograf--col__right__title">Eddigi összmegrendelésed</div>
            <div className="infograf--col__right__number">{this.state.aws} Ft</div>

            <div className="infograf--col__right__title">Még ennyiért rendelj a teljesítéshez</div>
            <div className="infograf--col__right__number">{this.state.target - this.state.aws} Ft</div>
          </div>
        </div>
        <div class="pc-information">

          <div>Egyéni célkitűzésed teljesítésével és legalább 1 db katalógus vásárlásával szerezz pontokat kampányról kampányra, majd februártól váltsd be egy vagy akár több Neked tetsző termékre!</div>
          <br></br>
          <div>Lehetőséged van extra pontok gyűjtésére is!</div>
          <div>Hogyan?</div>
          <div>
            <div>Célkitűzésed túlteljesítésével, 2000 Ft-onként további 1 pont szerezhető, maximum 10 pontig</div>
            <div>Két egymást követő kampányban teljesítettcélkitűzésedért plusz 5 pont szerezhető</div>
          </div>
        </div>

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

        <div class="pc-information">
          <div>Egy kis ízelítő a termékekből, hogy miket szerezhetsz a 2019. februári kampánytól:</div>
        </div>
        <br />
        <img src={require("./products.jpg")} alt="banner" />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default PointCollection;