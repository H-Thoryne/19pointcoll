import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SimpleSlider from "../../components/Slider/SimpleSlider"
import NaviButton from "../../components/NaviButton"
// import Productcard from "../components/Slider/Productcard"

import { fetchProducts } from "../../actions/productActions"

import styled from "styled-components"

class RedeemPoints extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  /* Get the data from server. then send it off to get the amounts updated from 0 to their actual fake amounts. */
  componentDidMount() {
    this.props.fetchProducts()
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
    const { high, mid, low, loading } = this.props.products
    return (
      <Container>
        <Table>
          <Label>Beváltható pontjaid</Label>
          {/* <Content>{acquiredPoints}</Content> */}
        </Table>
        <Spacer />
        <NaviButton to="/pontgyujtes" text="Vissza a pontgyűjtéshez" />
        {/* <CardDump>
          {low.map(item => {
            return <Productcard key={item.ln} item={item} />
          })}
        </CardDump> */}
        <SimpleSlider section="high" loading={loading} data={high} />
        <SimpleSlider section="mid" loading={loading} data={mid} />
        <SimpleSlider section="low" loading={loading} data={low} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, { fetchProducts })(RedeemPoints);

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

// const Content = styled.div`
//   font-size: 30px;
//   font-weight: 100;
// `;

const Spacer = styled.div`
padding-top: 80px
`;