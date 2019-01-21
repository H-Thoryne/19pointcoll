import React, { Component } from 'react'

import LinkButtons from '../components/LinkButtons';
import DataTable from '../components/DataTable';
import DataList from '../components/DataList';
import InfoText from '../components/InfoText';

import styled from "styled-components"

class PointCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scanned: false,
      percent: 0,
      aws: "Töltés...",
      target: "Töltés...",
      brochures: "Töltés...",
      acquiredPoints: "Töltés...",
      basePoints: "Töltés...",
      displayPercent: 0,
    }
  }

  /* Runs on first load when we get the props from App.js */
  componentWillReceiveProps = (newProps) => {
    this.updateDisplayStates(newProps)
  }

  /* Runs on every other occasion when the page is loaded. It's to update state from "Töltés..." again */
  componentDidMount = () => {
    this.updateDisplayStates(this.props)
  }

  updateDisplayStates = (newProps) => {
    this.setState({
      aws: this.validateIpPoint(window.allPoints[newProps.ip.aws], true),
      target: this.validateIpPoint(window.allPoints[newProps.ip.target], false),
      brochures: this.validateIpPoint(window.allPoints[newProps.ip.brochures], true),
      acquiredPoints: this.validateIpPoint(window.allPoints[newProps.ip.acquiredPoints], true),
      basePoints: this.validateIpPoint(window.allPoints[newProps.ip.basePoints], false)
    }, () => this.startCounter())
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
    const percentVar = this.state.percent + (this.state.aws / this.state.target) * 0.5;

    if (percentVar >= 100) {
      this.setState({ percent: 100 });
      this.setState({ displayPercent: 100 });
      clearTimeout(this.timeout);
      return;
    }

    this.setState({ percent: percentVar })
    this.setState({ displayPercent: Math.round(percentVar) })

    this.timeout = setTimeout(this.startCounter, 1);
  }

  render() {
    return (
      <Container>
        <DataTable brochures={this.state.brochures} basePoints={this.state.basePoints} acquiredPoints={this.state.acquiredPoints} />
        <DataList displayPercent={this.state.displayPercent} aws={this.state.aws} target={this.state.target} />
        <InfoText />
        <LinkButtons />
        {/* <div className="infobox">
          <div className="infobox__generic">Egy kis ízelítő a termékekből, hogy miket szerezhetsz a 2019. februári kampánytól:</div>
        </div>
        <img className="sample-products" src="http://www.avon.hu/REPSuite/static/_minisites/19pointcollection/img/sampleproducts.jpg" alt="banner" /> */}
      </Container>
    );
  }
}

export default PointCollection;

const Container = styled.div`
  position: relative;
  width: 750px;
`;