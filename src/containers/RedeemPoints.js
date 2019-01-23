import React, { Component } from "react"

import SimpleSlider from "../components/SimpleSlider"
import NaviButton from "../components/NaviButton"

import styled from "styled-components"

class RedeemPoints extends Component {
  state = {
    low: [],
    mid: [],
    high: [],
    acquiredPoints: "Töltés..."
  }

  seededCountdown = (seed, startingAmount) => {
    const dateToday = new Date();
    const dateStart = "2019-01-11T0:0:0";
    const dateToEmpty = "2019-01-24T0:0:0";
    const daysUntilEmpty = Math.ceil((Date.parse(dateToEmpty) - Date.parse(dateStart)) / 86400000);
    /* const daysUntilEmpty = Math.ceil((Date.parse(dateToEmpty) - dateToday) / 86400000); */ /* 1000 * 3600 * 24 */
    const daysPassed = Math.floor((dateToday - Date.parse(dateStart)) / 86400000); /* 1000 * 3600 * 24 */

    let actual = startingAmount;

    let min = Math.round((startingAmount / daysUntilEmpty) - (startingAmount / 100));
    let max = Math.round((startingAmount / daysUntilEmpty) + (startingAmount / 100)) + 1;
    /* console.log("###############################################"); */
    /* console.log(`seed: ${seed} min: ${min}; max: ${max}`); */

    const seededRandom = (min, max) => {
      seed = (seed * 9301 + 49297) % 233280;
      const rnd = seed / 233280;

      /* console.log(`min + rnd * (max - min) --- ${min} - ${rnd} * (${max} - ${min})`) */
      return min + rnd * (max - min);
    }

    if (daysPassed > daysUntilEmpty) {
      actual = 0;
      /* console.log(`0db - elfogyott`); */
    } else {
      /* console.log(`starting: ${startingAmount}`) */
      for (let x = 0; x <= daysPassed; x++) {
        const result = Math.round(seededRandom(min, max) - 1);
        actual -= result;

        if (actual < 0) {
          actual = 0;
          break;
        }

        /* console.log(`rng: ${result}; stock: ${actual}`) */
      }
    }

    if (actual < 5 || daysUntilEmpty < 3) {
      return "Utolsó darabok"
    }
    return `${actual} db`;
  }

  validateIpPoint = (point, canBeZero) => {
    if (isNaN(point)) {
      return "ERROR: NaN"
    }
    if (canBeZero === false && point === 0) {
      return "ERROR: ZeroException"
    }
    return point;
  }

  /* Get the data from server. then send it off to get the amounts updated from 0 to their actual fake amounts. */
  componentWillMount() {
    /* fetch("http://www.avon.hu/REPSuite/static/_minisites/react_test/products.json") */
    fetch("https://api.myjson.com/bins/wbcts")
      .then(res => res.json())
      .then(json => this.setState({ low: json.low, mid: json.mid, high: json.high }, () => this.updateAmount()))

    /* fetch("http://www.avon.hu/REPSuite/static/_minisites/react_test/ippoints.json") */
    fetch("https://api.myjson.com/bins/oncy4")
      .then(res => res.json())
      .then(data => this.setState({ acquiredPoints: this.validateIpPoint(window.allPoints[data.acquiredPoints], true) }))
  }

  /* Iterates through all 3 arrays' elements to update the value of amountCurrent */
  updateAmount = () => {
    let low = this.state.low.map(item => ({ ...item, amountCurrent: this.seededCountdown(item.ln, item.amountAll) }))
    let mid = this.state.mid.map(item => ({ ...item, amountCurrent: this.seededCountdown(item.ln, item.amountAll) }))
    let high = this.state.high.map(item => ({ ...item, amountCurrent: this.seededCountdown(item.ln, item.amountAll) }))
    this.setState({ low: low, mid: mid, high: high })
  }

  render() {
    const { acquiredPoints, high, mid, low } = this.state
    return (
      <Container>
        <Table>
          <Label>Megszerzett pontjaid</Label>
          <Content>{acquiredPoints}</Content>
        </Table>
        <Spacer />
        <NaviButton to="/pontgyujtes" text="Temporary button" />
        <div className="sliderWrapper-1">
          <SimpleSlider section="high" data={high} />
          <SimpleSlider section="mid" data={mid} />
          <SimpleSlider section="low" data={low} />
        </div>
      </Container>
    );
  }
}

export default RedeemPoints;

const Container = styled.div`
  position: relative;
`;

const Table = styled.div`
  padding: 20px;
  text-align: center !important;
  box-shadow: 0px 10px 40px 1px rgba(0, 0, 0, 0.3);
  background: white;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 30px;
  font-weight: 100;
`;

const Spacer = styled.div`
padding-top: 80px
`;