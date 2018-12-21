import React, { Component } from 'react'
import { Circle } from 'rc-progress'

import "./styles/PointCollection.css"

class PointCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aws: 0,
      target: 0,
      brochures: 0,
      basePoints: 0,
      percent: 0,
      displayAws: 0,
      displayTarget: 0,
      displayBrochures: 0,
      displayBasePoints: 0,
      displayPercent: 0,
    }
  }

  componentWillMount = () => {
    this.setState({ aws: window.rIP.IP22 })
    this.setState({ target: window.rIP.IP28 })
    this.setState({ basePoints: window.rIP.IP48 })
    this.setState({ brochures: window.rIP.IP23 })
  }

  componentDidMount = () => {
    this.setState({ displayAws: this.validateIpPoint(this.state.aws, true) })
    this.setState({ displayTarget: this.validateIpPoint(this.state.target, false) })
    this.setState({ displayBrochures: this.validateIpPoint(this.state.brochures, true) })
    this.setState({ displayBasePoints: this.validateIpPoint(this.state.basePoints, false) })
    this.startCounter();
  }

  validateIpPoint = (point, canBeZero) => {
    // If it's not a number
    if (isNaN(point)) {
      return "ERROR: NaN"
    }
    // If it's a number that can't be zero but it's a zero
    if (canBeZero === false && point === 0) {
      return "ERROR: ZerpExcetion"
    }

    // If it IS a number that CAN be zero
    return point;
  }

  startCounter = () => {
    const percent = this.state.percent + (this.state.aws / this.state.target) * 0.5;

    if (percent >= 100) {
      this.setState({ percent: 100 });
      this.setState({ displayPercent: 100 });
      clearTimeout(this.timeout);
      return;
    }

    this.setState({ percent: percent })
    this.setState({ displayPercent: Math.round(percent) })

    this.timeout = setTimeout(this.startCounter, 1);
  }

  render() {
    return (
      <div className="pointCollection">

        <div className="datatable">
          <div className="datatable__column">
            <div className="datatable__row">
              <div className="datatable__label">Minimum katalógus</div>
              <div className="datatable__content">1 db</div>
            </div>
            <div className="datatable__row">
              <div className="datatable__label">Megrendelt katalógusok</div>
              <div className="datatable__content">{this.state.displayBrochures} db</div>
            </div>
          </div>
          <div className="datatable__column">
            <div className="datatable__row">
              <div className="datatable__label">Megszerzett pontjaid</div>
              <div className="datatable__content content--nya">Februártól elérhető</div>
            </div>
            <div className="datatable__row">
              <div className="datatable__label">Szerezhető alappontok</div>
              <div className="datatable__content">{this.state.displayBasePoints}</div>
            </div>
          </div>
        </div>

        <div className="infograf">
          <div className="infograf__left-column">
            <div className="infograf__percent">{this.state.displayPercent}%</div>
            <Circle percent={this.state.displayPercent} strokeWidth="10" strokeColor="#ff336d" trailWidth="10" trailColor="#ECECEC" />
          </div>
          <div className="infograf__right-column">
            <div className="infograf__label">Eddigi összmegrendelésed</div>
            <div className="infograf__number">{this.state.aws} Ft</div>

            <div className="infograf__label">Célkitűzésed aktuális kampányra</div>
            <div className="infograf__number">{this.state.target} Ft</div>

            <div className="infograf__label">Még ennyiért rendelj a teljesítéshez</div>
            <div className="infograf__number">{this.state.target - this.state.aws} Ft</div>
          </div>
        </div>

        <div className="infobox">
          <div className="infobox__generic">Egyéni célkitűzésed teljesítésével és legalább 1 db katalógus vásárlásával szerezz pontokat kampányról kampányra, majd februártól váltsd be egy vagy akár több Neked tetsző termékre!</div>
          <div className="infobox__label  label--pink">Lehetőséged van extra pontok gyűjtésére is!</div>
          {/* <div className="infobox__label">Hogyan?</div> */}
          <div className="infobox__list">
            <div className="infobox__list-element">Célkitűzésed túlteljesítésével, 2000 Ft-onként további 1 pont szerezhető, maximum 10 pontig</div>
            <div className="infobox__list-element">Két egymást követő kampányban teljesítettcélkitűzésedért plusz 5 pont szerezhető</div>
          </div>
        </div>

        <ul className="link-collection">
          <li className="link-collection__button">
            <div className="link-collection__background"></div>
            <a className="link-collection__link" href="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/pontgyujto_szabalyzat.pdf" target="_blank" rel="noopener noreferrer">Szabályzat</a>
          </li>
          <li className="link-collection__button">
            <div className="link-collection__background"></div>
            <a className="link-collection__link" href="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/gyakran_ismetelt_kerdesek.pdf" target="_blank" rel="noopener noreferrer">GY.I.K.</a>
          </li>
          <li className="link-collection__button">
            <div className="link-collection__background"></div>
            <a className="link-collection__link" href="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/szorolap.pdf" target="_blank" rel="noopener noreferrer">Digitális szórólap</a>
          </li>
        </ul>

        <div className="infobox">
          <div className="infobox__generic">Egy kis ízelítő a termékekből, hogy miket szerezhetsz a 2019. februári kampánytól:</div>
        </div>
        
        {/* <img className="sample-products" src={require("./sampleproducts.jpg")} alt="banner" /> */}
        <img className="sample-products" src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/sampleproducts.jpg" alt="banner" />
      </div>
    );
  }
}

export default PointCollection;