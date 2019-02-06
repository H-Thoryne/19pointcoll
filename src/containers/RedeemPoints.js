import React, { Component } from "react"

import SimpleSlider from "../components/Slider/SimpleSlider"
import NaviButton from "../components/NaviButton"
import Productcard from "../components/Slider/Productcard"

import styled from "styled-components"

class RedeemPoints extends Component {
  state = {
    low: [],
    mid: [],
    high: [],
    acquiredPoints: "Töltés..."
  }

  /* Get the data from server. then send it off to get the amounts updated from 0 to their actual fake amounts. */
  componentDidMount() {
    fetch(process.env.REACT_APP_PRODUCT_LIST)
      .then(res => res.json())
      .then(json => this.setState({ low: json.low, mid: json.mid, high: json.high }))

    fetch(process.env.REACT_APP_IP_POINTS)
      .then(res => res.json())
      .then(data => this.setState({ acquiredPoints: this.validateIpPoint(window.allPoints[data.acquiredPoints], true) }))
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

  render() {
    const { acquiredPoints, high, mid, low } = this.state
    return (
      <Container>
        <Table>
          <Label>Beváltható pontjaid</Label>
          <Content>{acquiredPoints}</Content>
        </Table>
        <Spacer />
        <NaviButton to="/pontgyujtes" text="Vissza a pontgyűjtéshez" />
        {/* <CardDump>
          {low.map(item => {
            return <Productcard key={item.ln} item={item} />
          })}
        </CardDump> */}
        <div>
          <SimpleSlider section="high" data={high} />
          <SimpleSlider section="mid" data={mid} />
          <SimpleSlider section="low" data={low} />
        </div>
      </Container>
    );
  }
}

export default RedeemPoints;

/* const CardDump = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around
`; */

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