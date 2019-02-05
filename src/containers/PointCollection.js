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
      stillRequired: "Töltés...",
      displayPercent: 0,
      placeholderText: ""
    }
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_IP_POINTS)
      .then(res => res.json())
      .then(data => this.setState({
        aws: this.validateIpPoint(window.allPoints[data.aws], true),
        target: this.validateIpPoint(window.allPoints[data.target], false),
        brochures: this.validateIpPoint(window.allPoints[data.brochures], true),
        acquiredPoints: this.validateIpPoint(window.allPoints[data.acquiredPoints], true),
        basePoints: this.validateIpPoint(window.allPoints[data.basePoints], false),
        placeholderText: "Elérhető: február 6."
      }, () => this.startCounter()))
  }

  validateIpPoint = (point, canBeZero) => {
    if (isNaN(point) || (canBeZero === false && point === 0) || point.length === 0) {
      return "Töltés..."
    }
    else return point;
  }

  startCounter = () => {
    const percentVar = this.state.percent + 1;
    if (percentVar >= 100) {
      this.setState({ percent: 100 });
      this.setState({ displayPercent: 100 });
      clearTimeout(this.timeout);
      return;
    }

    if (percentVar >= (this.state.aws / this.state.target) * 100) {
      this.setState({ percent: percentVar });
      this.setState({ displayPercent: Math.round(percentVar) });
      clearTimeout(this.timeout);
      return;
    }

    this.setState({ percent: percentVar })
    this.setState({ displayPercent: Math.round(percentVar) })

    this.timeout = setTimeout(this.startCounter, 10);
  }

  render() {
    const { aws, target, brochures, acquiredPoints, basePoints, displayPercent, stillRequired } = this.state
    return (
      <Container>
        <DataTable brochures={brochures} aws={aws} target={target} basePoints={basePoints} acquiredPoints={acquiredPoints} />
        <DataList displayPercent={displayPercent} aws={aws} target={target} stillRequired={stillRequired} />
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