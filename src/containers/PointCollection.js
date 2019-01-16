import React, { Component } from 'react'

import LinkButtons from '../components/LinkButtons';
import DataTable from '../components/DataTable';
import DataList from '../components/DataList';
import InfoText from '../components/InfoText';

import styled from "styled-components"

class PointCollection extends Component {
  state = {
    aws: 0,
    target: 0,
    acquiredPoints: 0,
    brochures: 0,
    basePoints: 0,
    percent: 0,
    displayAws: 0,
    displayTarget: 0,
    displayBrochures: 0,
    displayAcquiredPoints: 0,
    displayBasePoints: 0,
    displayPercent: 0,
  }

  componentWillMount = () => {
    this.setState({ aws: window.rIP.IP22 })
    this.setState({ target: window.rIP.IP28 })
    this.setState({ basePoints: window.rIP.IP48 })
    this.setState({ acquiredPoints: 1000 })
    this.setState({ brochures: window.rIP.IP23 })
  }

  componentDidMount = () => {
    this.setState({ displayAws: this.validateIpPoint(this.state.aws, true) })
    this.setState({ displayTarget: this.validateIpPoint(this.state.target, false) })
    this.setState({ displayBrochures: this.validateIpPoint(this.state.brochures, true) })
    this.setState({ displayAcquiredPoints: this.validateIpPoint(this.state.acquiredPoints, true) })
    this.setState({ displayBasePoints: this.validateIpPoint(this.state.basePoints, false) })
    this.startCounter();
  }

  validateIpPoint = (point, canBeZero) => {
    // If it's not a number
    if (isNaN(point)) {
      return "ERROR: NaN"
    }

    // If it's a number that CAN'T be zero but IT IS a zero
    if (canBeZero === false && point === 0) {
      return "ERROR: ZeroException"
    }

    // It IS a number that CAN be zero
    // or
    // It IS a number that CAN'T be zero and IS NOT zero
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
      <Container>
        <DataTable displayBrochures={this.state.displayBrochures} displayBasePoints={this.state.displayBasePoints} displayAcquiredPoints={this.state.displayAcquiredPoints} />
        <DataList displayPercent={this.state.displayPercent} aws={this.state.aws} target={this.state.target} />
        <InfoText />
        <LinkButtons />

        <div className="infobox">
          <div className="infobox__generic">Egy kis ízelítő a termékekből, hogy miket szerezhetsz a 2019. februári kampánytól:</div>
        </div>
        <img className="sample-products" src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/sampleproducts.jpg" alt="banner" />
      </Container>
    );
  }
}

export default PointCollection;

const Container = styled.div`
  position: relative;
  width: 750px;
`;